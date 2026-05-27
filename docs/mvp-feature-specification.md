# Traveling Scholars MVP Feature Specification

This document defines the first real software MVP before backend implementation begins. It is planning only and does not add backend code, authentication, databases, APIs, subscriptions, environment variables, or dependencies.

## MVP Product Goal

The first MVP should help a homeschool parent create a private family workspace, add students, track attendance, enter courses and grades, organize portfolio items, and generate draft parent-created documents.

The MVP should feel useful before it feels broad. It should focus on calm records, parent control, and clear boundaries instead of trying to become a full school-management system.

## Guiding Product Boundaries

- Traveling Scholars is a homeschool organization and records platform.
- It is not an accredited school, transcript authority, curriculum provider, legal advisor, or diploma-granting institution.
- Parents remain responsible for curriculum, instruction, record accuracy, document wording, and homeschool compliance.
- Student data should be treated as sensitive family data.
- Every generated document should be parent-reviewable before export.

## Phase 1 MVP Essentials

Phase 1 should include only the features needed for a parent to create useful records.

- Parent account and verified email.
- One family workspace per parent account.
- Parent/owner role only.
- Student profiles.
- School year setup.
- Attendance tracking.
- Course and grade entry.
- Basic GPA summary.
- Transcript draft preview.
- Certificate draft creation from simple templates.
- Portfolio item records with optional file upload if storage is ready.
- Simple subscription plan gate.
- Export-ready document previews, with limited PDF export if generation is stable.

## Later Premium Features

These should wait until the core workflows are trusted.

- Multiple parent/guardian accounts per family.
- Co-op leader or educator roles.
- Custom grading scales.
- Weighted GPA.
- Multiple transcript templates.
- Advanced certificate templates.
- Batch document export.
- Public or shareable portfolio pages.
- Student login.
- Mobile app.
- Push notifications.
- Field trip and event registration.
- Fundraising tools.
- Community discussion features.
- AI-assisted writing or record summaries.
- State-specific compliance helpers.

## Roles and Permissions

### MVP Role: Parent Owner

Permissions:

- Create and manage family workspace.
- Create, edit, archive, and delete student profiles.
- Add and edit attendance records.
- Add and edit courses, grades, credits, and GPA-related settings.
- Create transcript drafts.
- Create certificate drafts.
- Add and manage portfolio records.
- Generate and download exports if plan allows.
- Manage subscription.
- Request account deletion or data export.

### Later Role: Additional Parent or Guardian

Permissions:

- View and edit family records if invited by owner.
- Cannot remove owner.
- Cannot delete workspace unless promoted.

### Later Role: Co-op Leader or Educator

Permissions:

- Limited visibility by student or class.
- Can contribute course, attendance, or portfolio records only if parent grants access.
- Cannot view billing or family-wide private records by default.

### Later Role: Student

Permissions:

- View selected portfolio items, achievements, and documents.
- Upload portfolio drafts if parent enables it.
- Cannot edit official records by default.

## Required Screens

### Public-to-App Entry

Purpose: transition from marketing site to private app.

Required screens:

- Sign in / create account.
- Verify email.
- Accept privacy and responsibility notice.
- Create family workspace.

MVP actions:

- Enter email.
- Confirm email.
- Accept terms/privacy.
- Create family name.

Required fields:

- Email.
- Parent first name.
- Parent last name, optional for MVP.
- Family display name.
- Terms accepted timestamp.
- Privacy notice accepted timestamp.

### Parent Dashboard

Purpose: one calm command center for records.

Required screen areas:

- Student list.
- School year selector.
- Attendance status summary.
- Course/grade completion summary.
- Transcript draft status.
- Portfolio item count.
- Export reminders.
- Plan status.

MVP actions:

- Add student.
- Select student.
- Select school year.
- Continue attendance.
- Continue gradebook.
- Preview transcript.
- Add portfolio item.
- Manage subscription.

### Student Profile

Purpose: central record page for one student.

Required screen areas:

- Student details.
- Current school year.
- Attendance summary.
- Course list.
- GPA summary.
- Transcript readiness checklist.
- Certificates.
- Portfolio items.

MVP actions:

- Edit student profile.
- Add school year.
- Add attendance.
- Add course.
- Add portfolio item.
- Create certificate.
- Preview transcript.

Required fields:

- First name.
- Last name.
- Preferred name, optional.
- Date of birth, optional.
- Grade level, optional.
- Student ID number, generated internal value.
- Graduation year, optional.
- Parent notes, optional.
- Archived status.

Privacy note:

- Date of birth should be optional in MVP unless required for a document.
- Student photos should be optional and not needed for launch.

## Parent Onboarding Flow

### Flow Steps

1. Parent enters email.
2. Parent verifies email.
3. Parent accepts privacy, terms, and parent-responsibility notice.
4. Parent creates family workspace.
5. Parent adds first student.
6. Parent creates or selects a school year.
7. Parent lands on dashboard with next-step prompts.

### Required Data Fields

- Parent email.
- Parent first name.
- Family display name.
- Accepted terms version.
- Accepted privacy version.
- Accepted parent-responsibility notice version.
- Timezone.

### User Actions

- Create account.
- Verify email.
- Accept notices.
- Create family workspace.
- Add student.
- Skip optional fields.

### MVP Success State

Parent reaches dashboard with one student and one school year ready.

### Error States

- Email already exists.
- Email verification expired.
- Required acceptance missing.
- Family name missing.
- Student name missing.

## Student Creation Flow

### Flow Steps

1. Parent clicks Add Student.
2. Parent enters student name.
3. Parent optionally adds grade level and graduation year.
4. System creates internal student ID.
5. Parent chooses current school year or creates one.
6. Parent lands on student profile.

### Required Data Fields

- First name.
- Last name.
- Family workspace ID.
- Internal student ID.
- Created by parent ID.

### Optional MVP Fields

- Preferred name.
- Grade level.
- Graduation year.
- Date of birth.
- Notes.

### User Actions

- Create student.
- Edit student.
- Archive student.
- Delete student only after confirmation.

### Later Premium Features

- Student photo.
- Custom student ID format.
- Multiple guardians.
- Student login.
- Record transfer between families.

## Attendance Workflow

### MVP Purpose

Let parents keep learning-day records with low friction.

### Required Screens

- Attendance calendar or list view.
- Add/edit attendance day.
- Attendance summary by student and school year.

### Required Data Fields

- Student ID.
- School year ID.
- Date.
- Status: learning day, absence, break, other.
- Notes, optional.
- Created by.
- Updated timestamp.

### User Actions

- Mark a learning day.
- Mark an absence.
- Add note.
- Edit day.
- Delete day.
- View totals.

### MVP Summary Metrics

- Total learning days.
- Total absences.
- Total break/other days.
- Date range covered.

### Later Premium Features

- Bulk mark weekdays.
- State-specific attendance targets.
- Attendance PDF export.
- Multi-student attendance copy.
- Calendar import.

## Gradebook Workflow

### MVP Purpose

Let parents enter courses, credits, final grades, and GPA-relevant records.

### Required Screens

- Course list by student and school year.
- Add/edit course.
- GPA summary.
- Transcript readiness checklist.

### Required Data Fields

- Student ID.
- School year ID.
- Course title.
- Subject, optional.
- Credit value.
- Final grade.
- Grade points.
- Course notes, optional.
- Included on transcript flag.

### User Actions

- Add course.
- Edit course.
- Delete course.
- Mark course as included/excluded from transcript.
- Review GPA summary.

### MVP GPA Logic

- Use simple unweighted GPA by default.
- Store credit value and grade value.
- Calculate GPA from included courses.
- Show calculation details.
- Allow parent to review before transcript generation.

### Later Premium Features

- Weighted GPA.
- Custom grading scales.
- Semester/quarter grade breakdowns.
- Assignment-level gradebook.
- Course templates.
- Co-op course contribution.

## Transcript Generation Workflow

### MVP Purpose

Generate a parent-reviewed transcript draft from existing records.

### Required Screens

- Transcript setup.
- Transcript preview.
- Transcript readiness checklist.
- Export confirmation.

### Required Data Fields

- Student profile data.
- School years.
- Courses.
- Credits.
- Grades.
- GPA summary.
- Parent name, optional.
- Graduation date, optional.
- Transcript notes, optional.
- Parent responsibility acknowledgement.

### User Actions

- Preview transcript.
- Edit included courses.
- Review GPA.
- Add optional notes.
- Confirm parent-created document language.
- Generate draft.
- Export PDF if plan allows.

### Required Document Language

Transcript exports should include careful wording such as:

> Parent-created homeschool transcript record prepared by the family using Traveling Scholars.

Avoid:

- Accredited school claims.
- Official school transcript claims.
- Diploma-granting claims.
- Legal compliance claims.

### Later Premium Features

- Multiple templates.
- Watermarked drafts.
- Sealed/final export state.
- Counselor-style notes, carefully worded.
- Batch exports.

## Certificate Workflow

### MVP Purpose

Let parents create simple recognition documents without implying institutional authority.

### Required Screens

- Certificate template list.
- Create certificate.
- Certificate preview.
- Export confirmation.

### Required Data Fields

- Student ID.
- Certificate title.
- Recognition reason.
- Date.
- Parent/family name, optional.
- Template ID.
- Notes, optional.

### User Actions

- Choose template.
- Enter recognition text.
- Preview certificate.
- Save draft.
- Export PDF if plan allows.

### Required Document Boundaries

Certificate wording should support:

- Course completion.
- Reading milestones.
- Project achievement.
- Service recognition.
- Participation.
- Graduation-related family celebration.

Certificate wording should avoid:

- Accredited diploma language.
- Institution-issued credential language.
- State compliance language.

### Later Premium Features

- Custom templates.
- Student ID cards.
- Badge libraries.
- Batch certificate creation.
- Printed document ordering.

## Portfolio Workflow

### MVP Purpose

Help parents preserve evidence of learning and student progress.

### Required Screens

- Portfolio list.
- Add/edit portfolio item.
- Portfolio item detail.
- Student portfolio summary.

### Required Data Fields

- Student ID.
- Title.
- Description.
- Date.
- Subject/tag, optional.
- School year ID, optional.
- Achievement type, optional.
- File attachment metadata, optional if upload is included.
- Visibility: private by default.

### User Actions

- Add portfolio item.
- Edit portfolio item.
- Delete portfolio item.
- Attach file if storage is available.
- Tag item.
- View student portfolio.

### MVP File Upload Decision

If secure private file storage is not ready, MVP should launch with portfolio records only and add file upload in beta.

If file upload is included:

- Store files privately.
- Use signed download URLs.
- Limit file size.
- Restrict file types.
- Scan or validate uploads where possible.

### Later Premium Features

- Shareable portfolio pages.
- Public showcases with explicit consent.
- Media galleries.
- Portfolio export bundles.
- Student-submitted portfolio drafts.

## Subscription and Paywall Logic

### Best First Monetization Structure

Recommended first structure:

- Free Preview: one student, limited records, no final PDF exports.
- Founding Family: paid early plan for up to three students, transcript/certificate exports, portfolio records, and founding pricing.
- Legacy Family: higher-tier early plan for larger families, more students, expanded exports, and long-term pricing protection.

Why this works:

- It matches current marketing copy.
- It lets parents experience value before paying.
- It avoids charging for vague promises.
- It keeps the first paid upgrade tied to exports and multi-student value.

### MVP Paywall Rules

Free Preview:

- One family workspace.
- One student.
- One active school year.
- Limited course records.
- Limited portfolio records.
- Transcript preview.
- No final PDF export or limited watermarked export.

Founding Family:

- Up to three students.
- Attendance and gradebook.
- Transcript PDF export.
- Certificate export.
- Portfolio records.

Legacy Family:

- More students.
- Higher export limits.
- Priority beta access to new document features.
- Larger portfolio allowance.

### Subscription Screens

- Plan selection.
- Upgrade prompt.
- Billing status.
- Export paywall modal.
- Manage subscription link.

### Paywall Trigger Points

- Adding more than the free student limit.
- Exporting final PDFs.
- Creating more than the free record limit.
- Accessing premium templates.

### Later Premium Features

- Co-op plans.
- Organization plans.
- Printed document services.
- Graduation event support.
- Advanced storage.

## Export and Document Generation Requirements

### MVP Documents

- Transcript draft preview.
- Transcript PDF export if generation is stable.
- Certificate PDF export.
- Attendance summary export later or beta.
- Portfolio summary export later or beta.

### Requirements

- Documents must be generated from saved parent-controlled records.
- Every export should have a generated timestamp.
- Every export should show student name and selected school year when relevant.
- Export history should be stored if backend supports it.
- Downloads should use private access controls.
- Parents should see a confirmation screen before export.
- Parent-created document language should be visible before export.

### Technical Recommendation

- Use server-side PDF generation in the authenticated app.
- Queue heavy exports if generation takes more than a few seconds.
- Store generated files privately in object storage.
- Use signed URLs for downloads.
- Expire generated download links.

## Mobile App Compatibility Considerations

Design MVP APIs and data models so a mobile app can reuse them later.

- Keep workflows API-first even if the first UI is web.
- Use stable IDs for family, student, school year, attendance day, course, document, and portfolio records.
- Avoid web-only assumptions in data models.
- Keep file upload metadata separate from file storage.
- Prepare for camera uploads later.
- Keep attendance entry simple enough for mobile.
- Keep transcript and certificate generation server-side.
- Plan for offline attendance drafts later, not in MVP.

## Privacy and Security Notes

- Verify email before allowing student record creation.
- Keep student records private by default.
- Avoid requiring date of birth or student photo in MVP.
- Do not sell student data.
- Do not make portfolio items public by default.
- Use role-based access checks on every family and student record.
- Log document exports.
- Use signed URLs for private files.
- Show parent-responsibility language during onboarding and document export.
- Provide account deletion and data export pathways before production launch.
- Avoid collecting unnecessary sensitive information.

## Required MVP Screen List

- Sign in / create account.
- Email verification.
- Privacy and responsibility notice.
- Create family workspace.
- Parent dashboard.
- Add/edit student.
- Student profile.
- School year setup.
- Attendance list/calendar.
- Add/edit attendance day.
- Course list.
- Add/edit course.
- GPA summary.
- Transcript readiness checklist.
- Transcript preview.
- Certificate template list.
- Certificate preview.
- Portfolio list.
- Add/edit portfolio item.
- Plan selection.
- Upgrade/paywall prompt.
- Account settings.

## MVP Acceptance Criteria

The MVP is ready for closed beta when:

- A parent can create an account and verify email.
- A parent can create one family workspace.
- A parent can create at least one student.
- A parent can create a school year.
- A parent can track attendance days.
- A parent can enter courses, credits, and final grades.
- GPA is calculated and explained.
- Transcript preview pulls from saved records.
- Certificate preview can be created without misleading claims.
- Portfolio records can be created privately.
- Plan limits are enforced clearly.
- Student data is not public.
- Export language is clear and parent-controlled.
- The marketing site remains static and separate.

## Non-Goals for MVP

- No social network.
- No public student showcases.
- No accredited school claims.
- No curriculum marketplace.
- No state-law compliance automation.
- No assignment-level LMS.
- No student messaging.
- No co-op classroom management.
- No mobile app at initial MVP launch.
- No AI features until privacy, consent, and accuracy risks are reviewed.

## Recommended Build Order

1. Auth and family workspace.
2. Student profiles and school years.
3. Attendance tracking.
4. Courses, grades, and GPA.
5. Transcript preview.
6. Certificate preview.
7. Portfolio records.
8. Subscription plan model and limits.
9. PDF export.
10. Closed beta feedback loop.

## Open Product Decisions

- Should MVP include file upload, or should portfolio records launch text-only first?
- Should Free Preview allow watermarked transcript export?
- Should student IDs be MVP or beta?
- Should billing launch with closed beta or after initial feedback?
- Should account login be passwordless, passkey-first, or provider-based?
- Should the app live at `app.thetravelingscholars.org` from day one?
