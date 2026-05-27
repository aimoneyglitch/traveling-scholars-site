# Traveling Scholars Database Schema Plan

This document is planning only. It does not add databases, migrations, ORMs, auth, API routes, environment variables, storage buckets, or dependencies.

## Schema Goals

The future production database should support private homeschool family records with clear ownership, predictable relationships, and enough structure for attendance, grades, GPA, transcripts, certificates, portfolios, documents, and subscriptions.

The schema should make these rules easy to enforce:

- Parents own and control family records.
- Students belong to family workspaces.
- Every student-data record must be scoped to a family.
- Uploaded files stay in object storage, not database blobs.
- Generated exports are tracked in the database but stored in object storage.
- Billing status controls entitlements without mixing payment data into student records.

## Recommended Database Style

Use a relational schema for the core product data.

Good fits:

- Cloudflare D1 for a Cloudflare-first MVP.
- Postgres-compatible managed SQL if the app needs stronger relational tooling early.

Avoid for MVP:

- A document-only database for core academic records.
- Storing generated PDFs or uploads directly in SQL rows.
- Mixing analytics events into production student-record tables.

## Naming Conventions

- Table names use plural snake_case.
- Primary keys use `id`.
- Foreign keys use `{entity}_id`.
- Family ownership is explicit with `family_id`.
- Time fields use `created_at`, `updated_at`, and optional `deleted_at`.
- Soft deletion should be used for sensitive records until account-deletion workflows are mature.

## Core Ownership Model

### users

Represents an authenticated parent or future invited user.

Core fields:

- `id`
- `email`
- `email_verified_at`
- `first_name`
- `last_name`
- `status`: active, invited, suspended, deleted
- `timezone`
- `created_at`
- `updated_at`
- `deleted_at`

Indexes:

- Unique index on `email`.
- Index on `status`.

Security rules:

- User can read and update their own profile.
- User cannot access a family unless linked through `family_members`.
- Deleting a user should not orphan student records without a family-level deletion policy.

### families

Represents a homeschool family workspace.

Core fields:

- `id`
- `display_name`
- `owner_user_id`
- `default_timezone`
- `status`: active, suspended, deleted
- `created_at`
- `updated_at`
- `deleted_at`

Indexes:

- Index on `owner_user_id`.
- Index on `status`.

Relationships:

- One family has many family members.
- One family has many students.
- One family has one or more subscriptions over time.

Security rules:

- All student records must be scoped to `family_id`.
- Only active family members may access family records.
- Owner-only actions include deletion, billing, and inviting future roles.

### family_members

Connects users to families and stores permissions.

Core fields:

- `id`
- `family_id`
- `user_id`
- `role`: owner, parent, co_op_leader, educator, student
- `status`: active, invited, removed
- `invited_by_user_id`
- `accepted_at`
- `created_at`
- `updated_at`

Indexes:

- Unique index on `family_id`, `user_id`.
- Index on `user_id`.
- Index on `family_id`, `role`.
- Index on `family_id`, `status`.

Security rules:

- MVP should only create owner role.
- Future non-owner roles must have explicit permissions.
- Co-op and educator roles should not see billing by default.

## Student and School-Year Structure

### students

Represents one child/student within a family.

Core fields:

- `id`
- `family_id`
- `first_name`
- `last_name`
- `preferred_name`
- `date_of_birth`
- `grade_level`
- `graduation_year`
- `internal_student_number`
- `profile_notes`
- `status`: active, archived, deleted
- `created_by_user_id`
- `created_at`
- `updated_at`
- `deleted_at`

Indexes:

- Index on `family_id`.
- Index on `family_id`, `status`.
- Index on `family_id`, `graduation_year`.
- Unique index on `family_id`, `internal_student_number`.

Relationships:

- One family has many students.
- One student has many school-year records, attendance records, courses, transcripts, certificates, and portfolio items.

Security rules:

- Student records are private to authorized family members.
- Date of birth should be optional.
- Student photos should be stored in object storage if added later.

### school_years

Represents a family-defined or student-specific academic year.

Core fields:

- `id`
- `family_id`
- `student_id`
- `label`: example `2026-2027`
- `start_date`
- `end_date`
- `grade_level`
- `status`: active, archived
- `created_at`
- `updated_at`

Indexes:

- Index on `family_id`.
- Index on `student_id`.
- Index on `family_id`, `student_id`, `label`.

Relationships:

- One student has many school years.
- Attendance, courses, GPA summaries, and portfolio items may link to a school year.

Security rules:

- Parent controls labels and dates.
- Requirements vary by family and jurisdiction, so schema should not hard-code compliance assumptions.

## Attendance

### attendance_records

Stores day-level attendance status.

Core fields:

- `id`
- `family_id`
- `student_id`
- `school_year_id`
- `attendance_date`
- `status`: learning_day, absence, break_day, other
- `minutes`
- `notes`
- `created_by_user_id`
- `created_at`
- `updated_at`
- `deleted_at`

Indexes:

- Unique index on `student_id`, `attendance_date` for MVP.
- Index on `family_id`, `school_year_id`.
- Index on `student_id`, `school_year_id`, `status`.
- Index on `student_id`, `attendance_date`.

Relationships:

- Attendance belongs to a student and school year.

Security rules:

- Only authorized family members can create or edit.
- Future co-op roles may contribute attendance only for assigned students/classes.

Cached/generated:

- Year-to-date attendance totals can be calculated on read for MVP.
- If performance requires it later, store summaries in `attendance_summaries`.

## Gradebook and GPA

### courses

Stores transcript-relevant course records.

Core fields:

- `id`
- `family_id`
- `student_id`
- `school_year_id`
- `title`
- `subject`
- `credit_value`
- `course_level`: standard, honors, ap, dual_enrollment, custom
- `included_on_transcript`
- `sort_order`
- `notes`
- `created_by_user_id`
- `created_at`
- `updated_at`
- `deleted_at`

Indexes:

- Index on `family_id`, `student_id`.
- Index on `student_id`, `school_year_id`.
- Index on `student_id`, `included_on_transcript`.

Relationships:

- One course has one or more grade records.
- One course may appear on transcript exports.

Security rules:

- Parent can include or exclude from transcripts.
- Co-op/educator contribution should require explicit permission later.

### grade_entries

Stores grade values for courses.

Core fields:

- `id`
- `family_id`
- `student_id`
- `course_id`
- `grading_period`: final, semester_1, semester_2, quarter_1, custom
- `letter_grade`
- `percentage_grade`
- `grade_points`
- `is_final`
- `notes`
- `created_by_user_id`
- `created_at`
- `updated_at`
- `deleted_at`

Indexes:

- Index on `course_id`.
- Index on `student_id`.
- Index on `family_id`, `student_id`.
- Index on `course_id`, `is_final`.

Relationships:

- Grade entry belongs to a course.
- Final grade entries feed GPA and transcript calculations.

Security rules:

- Parent can edit final values.
- System-calculated grade points should be visible and reviewable.

### grading_scales

Stores family-level grading scale settings.

Core fields:

- `id`
- `family_id`
- `name`
- `is_default`
- `created_at`
- `updated_at`

Indexes:

- Index on `family_id`.
- Unique index on `family_id`, `name`.

### grading_scale_rows

Stores rows within a grading scale.

Core fields:

- `id`
- `grading_scale_id`
- `letter_grade`
- `min_percentage`
- `max_percentage`
- `grade_points`
- `sort_order`

Indexes:

- Index on `grading_scale_id`.

### gpa_snapshots

Optional generated/cache table for saved GPA results.

Core fields:

- `id`
- `family_id`
- `student_id`
- `school_year_id`
- `calculation_type`: unweighted, weighted
- `total_credits`
- `total_grade_points`
- `gpa`
- `calculated_at`
- `source_hash`

Indexes:

- Index on `student_id`, `school_year_id`.
- Index on `family_id`, `calculated_at`.

Recommendation:

- Calculate GPA on demand for MVP.
- Add snapshots when transcript generation or audit requirements need saved calculation history.

## Transcripts

### transcripts

Stores transcript draft/final metadata.

Core fields:

- `id`
- `family_id`
- `student_id`
- `title`
- `status`: draft, reviewed, exported, archived
- `template_key`
- `graduation_date`
- `parent_notes`
- `responsibility_acknowledged_at`
- `created_by_user_id`
- `created_at`
- `updated_at`
- `deleted_at`

Indexes:

- Index on `family_id`, `student_id`.
- Index on `student_id`, `status`.

Relationships:

- One transcript can have many transcript course rows.
- One transcript can have many document exports.

Security rules:

- Transcript must be parent-reviewable before export.
- Transcript language must avoid accreditation or school-authority claims.

### transcript_courses

Stores the course rows included in a transcript version.

Core fields:

- `id`
- `transcript_id`
- `course_id`
- `school_year_id`
- `course_title_snapshot`
- `credit_value_snapshot`
- `letter_grade_snapshot`
- `grade_points_snapshot`
- `sort_order`

Indexes:

- Index on `transcript_id`.
- Index on `course_id`.

Recommendation:

- Store snapshots when a transcript is reviewed/exported so exports remain reproducible.
- Draft previews can read live course data.

## Certificates and Student IDs

### certificate_templates

Stores available certificate templates.

Core fields:

- `id`
- `template_key`
- `name`
- `description`
- `status`: active, retired
- `plan_required`
- `created_at`
- `updated_at`

Indexes:

- Unique index on `template_key`.
- Index on `status`.

### certificates

Stores parent-created certificate records.

Core fields:

- `id`
- `family_id`
- `student_id`
- `template_id`
- `title`
- `recognition_reason`
- `issue_date`
- `presenter_name`
- `status`: draft, exported, archived
- `created_by_user_id`
- `created_at`
- `updated_at`
- `deleted_at`

Indexes:

- Index on `family_id`, `student_id`.
- Index on `student_id`, `issue_date`.
- Index on `status`.

Security rules:

- Certificate copy must avoid accredited diploma or official school credential claims.
- Export requires parent confirmation.

### student_ids

Stores optional student ID document metadata.

Core fields:

- `id`
- `family_id`
- `student_id`
- `display_id_number`
- `school_year_id`
- `expiration_date`
- `status`: draft, exported, archived
- `created_at`
- `updated_at`

Indexes:

- Index on `student_id`.
- Unique index on `family_id`, `display_id_number`.

Storage note:

- Photo assets, if any, belong in object storage.
- Database should store only references and metadata.

## Portfolios and Uploaded Documents

### portfolio_items

Stores portfolio record metadata.

Core fields:

- `id`
- `family_id`
- `student_id`
- `school_year_id`
- `title`
- `description`
- `item_date`
- `subject`
- `achievement_type`
- `visibility`: private, shared_link, public_showcase
- `status`: active, archived, deleted
- `created_by_user_id`
- `created_at`
- `updated_at`
- `deleted_at`

Indexes:

- Index on `family_id`, `student_id`.
- Index on `student_id`, `school_year_id`.
- Index on `student_id`, `subject`.
- Index on `visibility`.

Security rules:

- MVP default must be private.
- Public showcases require explicit parent consent later.
- Student uploads require parent approval if student role exists later.

### uploaded_documents

Stores metadata for files uploaded by families.

Core fields:

- `id`
- `family_id`
- `student_id`
- `portfolio_item_id`
- `storage_provider`
- `bucket_name`
- `object_key`
- `original_filename`
- `content_type`
- `file_size_bytes`
- `checksum`
- `upload_status`: pending, complete, failed, deleted
- `created_by_user_id`
- `created_at`
- `updated_at`
- `deleted_at`

Indexes:

- Index on `family_id`, `student_id`.
- Index on `portfolio_item_id`.
- Index on `object_key`.
- Index on `upload_status`.

Storage rules:

- Store files in object storage, not database rows.
- Use private buckets.
- Use signed URLs for download.
- Avoid public URLs for student data.
- Apply file size and file type limits.

## Export and PDF Generation

### document_exports

Tracks generated documents.

Core fields:

- `id`
- `family_id`
- `student_id`
- `source_type`: transcript, certificate, student_id, attendance_summary, portfolio_summary
- `source_id`
- `status`: queued, processing, complete, failed, expired, deleted
- `storage_provider`
- `bucket_name`
- `object_key`
- `file_size_bytes`
- `checksum`
- `generated_by_user_id`
- `generated_at`
- `expires_at`
- `created_at`
- `updated_at`

Indexes:

- Index on `family_id`, `student_id`.
- Index on `source_type`, `source_id`.
- Index on `status`.
- Index on `expires_at`.

Security rules:

- Export access requires family membership and plan entitlement.
- Download URLs should be short-lived signed URLs.
- Export events should be audit logged.

### export_jobs

Optional queue-tracking table for asynchronous generation.

Core fields:

- `id`
- `family_id`
- `student_id`
- `document_export_id`
- `job_type`
- `status`: queued, running, complete, failed, cancelled
- `attempt_count`
- `last_error`
- `queued_at`
- `started_at`
- `completed_at`

Indexes:

- Index on `status`, `queued_at`.
- Index on `document_export_id`.

Recommendation:

- For MVP, synchronous generation may be acceptable for tiny documents.
- Move to queued jobs once exports are slow, batchable, or billed.

## Subscription and Billing

### subscription_plans

Defines internal plan and entitlement options.

Core fields:

- `id`
- `plan_key`: free_preview, founding_family, legacy_family
- `name`
- `description`
- `price_cents`
- `billing_interval`: monthly, yearly, lifetime, manual
- `student_limit`
- `portfolio_item_limit`
- `export_limit`
- `storage_limit_bytes`
- `status`: active, retired
- `created_at`
- `updated_at`

Indexes:

- Unique index on `plan_key`.
- Index on `status`.

### family_subscriptions

Stores the active or historical family subscription.

Core fields:

- `id`
- `family_id`
- `plan_id`
- `provider`: stripe, manual, none
- `provider_customer_id`
- `provider_subscription_id`
- `status`: trialing, active, past_due, cancelled, expired, comped
- `current_period_start`
- `current_period_end`
- `cancel_at`
- `created_at`
- `updated_at`

Indexes:

- Index on `family_id`.
- Index on `status`.
- Index on `provider_customer_id`.
- Unique index on `provider_subscription_id` where present.

Security rules:

- Billing identifiers should never be exposed to non-owner roles.
- Payment card data should not be stored in the app database.
- Billing provider webhooks should be logged and verified.

### billing_events

Stores billing provider event metadata.

Core fields:

- `id`
- `family_id`
- `provider`
- `provider_event_id`
- `event_type`
- `status`: received, processed, failed, ignored
- `received_at`
- `processed_at`
- `payload_hash`
- `error_message`

Indexes:

- Unique index on `provider`, `provider_event_id`.
- Index on `family_id`.
- Index on `event_type`.
- Index on `status`.

Recommendation:

- Store minimal event metadata for audit/debug.
- Avoid storing full webhook payloads if they contain unnecessary personal data.

## Audit, Consent, and Privacy

### audit_events

Tracks sensitive actions.

Core fields:

- `id`
- `family_id`
- `actor_user_id`
- `action`
- `entity_type`
- `entity_id`
- `metadata_json`
- `ip_hash`
- `user_agent_hash`
- `created_at`

Indexes:

- Index on `family_id`, `created_at`.
- Index on `actor_user_id`, `created_at`.
- Index on `entity_type`, `entity_id`.

Recommended audit events:

- Student created/updated/deleted.
- Transcript exported.
- Certificate exported.
- Portfolio file uploaded/downloaded/deleted.
- Subscription changed.
- Family member invited/removed.
- Account deletion requested.

### consent_records

Tracks acceptance of terms, privacy, and parent-responsibility notices.

Core fields:

- `id`
- `user_id`
- `family_id`
- `consent_type`: terms, privacy, parent_responsibility, showcase_permission
- `version`
- `accepted_at`
- `revoked_at`
- `metadata_json`

Indexes:

- Index on `user_id`, `consent_type`.
- Index on `family_id`, `consent_type`.

Security rules:

- Public student showcases require explicit consent.
- Parent-responsibility acknowledgement should be required before document export.

## What Belongs Where

### Database

Store structured, queryable, permission-scoped data:

- Users.
- Families.
- Family membership.
- Students.
- School years.
- Attendance records.
- Courses.
- Grades.
- Grading scales.
- Transcript metadata and exported snapshots.
- Certificate metadata.
- Portfolio metadata.
- Uploaded file metadata.
- Export metadata.
- Subscription status and entitlements.
- Billing event metadata.
- Audit events.
- Consent records.

### Object/File Storage

Store binary or large document data:

- Uploaded portfolio files.
- Student photos.
- Generated transcript PDFs.
- Generated certificate PDFs.
- Generated student ID images/PDFs.
- Export bundles.
- Template assets if not compiled into the app.

### Cached or Generated

Calculate on demand at first, then cache if needed:

- Attendance totals.
- GPA summaries.
- Transcript readiness status.
- Dashboard counters.
- Storage usage totals.
- Export availability.
- Plan entitlement checks.

### Analytics Storage

Keep analytics separate from student records:

- Page views.
- Funnel events.
- Feature usage counts.
- Conversion events.
- Export success/failure aggregates.

Analytics should avoid raw student names, document content, and portfolio file data.

## Multi-Child Family Structure

The family workspace is the ownership root.

Recommended hierarchy:

- Family owns users through memberships.
- Family owns students.
- Students own academic records.
- School years organize student records.
- Documents and exports remain scoped to family and student.

Why this works:

- A parent can manage multiple children in one account.
- Billing can apply at the family level.
- Access checks can start with `family_id`.
- Future multi-parent and co-op roles can be added without moving student records.

## Future Co-op or School Organization Support

Do not model Traveling Scholars as a school for MVP. If future co-op or organization support is needed, add a separate organization layer later.

Future tables:

- `organizations`
- `organization_members`
- `organization_classes`
- `class_students`
- `class_attendance_records`
- `class_course_contributions`

Security requirements:

- Organization roles must not automatically access full family records.
- Parent consent should be required before sharing student data with an organization.
- Co-op course records should be contributions that parents approve before transcript inclusion.

## Indexing Strategy

Early indexes should support the main access patterns:

- Load dashboard by family.
- Load students by family.
- Load one student profile.
- Load attendance by student and school year.
- Load courses and grades by student and school year.
- Load portfolio items by student and school year.
- Load exports by student and status.
- Load subscription by family.
- Load audit events by family and date.

Avoid premature indexes on rarely queried columns. Add indexes when query plans or production logs show real need.

## Ownership and Security Rules

Every private record should be checked by:

1. Authenticated user ID.
2. Active family membership.
3. Permission for action.
4. Record `family_id`.
5. Optional student-specific permission later.

Rules:

- Never trust client-supplied `family_id` without checking membership.
- Never fetch student records by ID alone.
- Always scope by family when reading or writing student data.
- Do not expose internal storage object keys directly to clients.
- Use signed URLs for private downloads.
- Log sensitive export and file actions.
- Apply plan limits on the server.

## Privacy Considerations

- Student names, birth dates, grades, attendance, documents, and portfolio files are sensitive.
- Avoid collecting student date of birth unless needed.
- Keep student photos optional.
- Avoid storing unnecessary legal/compliance details.
- Provide delete and export pathways before production.
- Keep portfolio visibility private by default.
- Require explicit consent for any public showcase.
- Do not sell student data.
- Do not use student content for AI training without explicit, separate consent.

## Document Storage Considerations

- Use private object storage buckets.
- Store only metadata and object keys in the database.
- Use content type and file size validation.
- Consider checksums for integrity.
- Consider virus/malware scanning before public or shared downloads.
- Keep generated exports expirable.
- Use lifecycle rules for expired exports where available.
- Avoid permanent public URLs.

## Export and PDF Considerations

- Store export metadata in `document_exports`.
- Snapshot transcript rows at export time.
- Include generated timestamp in exported documents.
- Include parent-created wording.
- Queue exports if generation is slow.
- Store final PDFs privately.
- Use short-lived signed download URLs.
- Log export generation and download events.
- Let parents regenerate after edits rather than mutating old exported PDFs.

## Scalability Notes

### Mobile App

- Use stable IDs and API-friendly relationships.
- Avoid web-only data assumptions.
- Keep file metadata separate from file storage.
- Make attendance and portfolio APIs simple enough for offline drafts later.
- Keep document generation server-side.

### APIs

- Design API routes around family-scoped resources.
- Use pagination for portfolios, audit events, and exports.
- Use idempotency keys for export jobs and billing events.
- Version public/mobile APIs before external clients depend on them.

### Analytics

- Keep product analytics separate from student records.
- Track aggregate workflow progress, not sensitive content.
- Hash or omit identifiers where possible.
- Avoid event payloads containing names, grades, or portfolio text.

### Notifications

Future notification data should be separate:

- `notification_preferences`
- `notification_events`
- `notification_deliveries`

Use notifications for:

- Email verification.
- Export complete.
- Subscription/payment issue.
- Optional attendance or record reminders.

Do not send sensitive student data in notification bodies.

## MVP Schema Priority

Build in this order when implementation begins:

1. `users`
2. `families`
3. `family_members`
4. `students`
5. `school_years`
6. `attendance_records`
7. `courses`
8. `grade_entries`
9. `transcripts`
10. `transcript_courses`
11. `certificate_templates`
12. `certificates`
13. `portfolio_items`
14. `subscription_plans`
15. `family_subscriptions`
16. `document_exports`
17. `audit_events`
18. `consent_records`

Add `uploaded_documents`, `export_jobs`, `billing_events`, and advanced organization tables when the corresponding systems are ready.

## Open Schema Decisions

- Should `school_years` be family-level, student-level, or both?
- Should the MVP allow portfolio files, or only portfolio metadata?
- Should transcript snapshots be created at preview time or export time only?
- Should subscription limits count archived students?
- Should grading scales be global defaults copied into each family, or shared references?
- Should attendance support minutes/hours in MVP, or just day status?
- Should co-op records be modeled as separate contributions before parent approval?
