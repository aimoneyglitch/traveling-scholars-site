# Traveling Scholars Future Backend Architecture Plan

This document is planning only. It does not add accounts, databases, API routes, authentication, subscriptions, environment variables, or backend dependencies.

## Current Position

The public site should stay a static-export marketing site for Cloudflare Pages. It is fast, crawler-friendly, low-cost, and simple to deploy from `out/`.

Future SaaS features should be introduced behind a separate application boundary so the marketing site can remain static and reliable while the app grows into a secure student-records platform.

## Recommended Direction

### Option A: Cloudflare-first platform

Best fit for the current hosting direction.

- Marketing site: current Next.js static export on Cloudflare Pages.
- App shell: Next.js on Cloudflare Workers using the official Cloudflare/OpenNext path when dynamic rendering is needed.
- API layer: Cloudflare Workers.
- Relational data: Cloudflare D1 for accounts, students, attendance, courses, grades, subscriptions, and document metadata.
- File storage: Cloudflare R2 for generated PDFs, portfolio uploads, certificate assets, and export archives.
- Background work: Cloudflare Queues for document export jobs, email events, audit-log processing, and scheduled cleanup.
- Cache and rate-limit support: Workers KV or Durable Objects where appropriate.

Why this fits: it preserves the current Cloudflare architecture, keeps the marketing site static, and lets the future app use edge/serverless primitives only when required.

### Option B: Hybrid backend with managed SaaS services

Good if speed of implementation matters more than Cloudflare purity.

- Marketing site: current static export on Cloudflare Pages.
- App/API: Cloudflare Workers or a managed Node host.
- Database: Neon Postgres, Supabase Postgres, or PlanetScale-style managed SQL.
- Auth: Clerk, Auth0, or custom email-based auth.
- Storage: Cloudflare R2 or provider storage.
- Payments: Stripe.

Why this fits: mature auth, billing, and SQL workflows can reduce product risk, but vendor count and privacy review increase.

### Option C: Separate app subdomain

Best operational boundary for launch.

- `thetravelingscholars.org`: static marketing site.
- `app.thetravelingscholars.org`: authenticated application.
- `api.thetravelingscholars.org`: API surface if separated from the app runtime.

Why this fits: clear separation between public SEO pages and private student records.

## What Should Stay Static

Keep these static for speed, SEO, cost control, and trust:

- Homepage and marketing pages.
- Features, pricing, FAQ, about, contact, privacy, and terms pages.
- Homeschool resource pages.
- Sitemap and robots files.
- Public product-preview copy.
- Static waitlist or lightweight launch-interest flows until real consent and data handling are ready.

Static pages should not depend on user sessions, database reads, cookies, personalization, or API availability.

## What Should Become Dynamic Later

Move these behind authenticated app boundaries:

- Parent accounts and family workspaces.
- Student profiles.
- Attendance tracking.
- Gradebook and GPA calculations.
- Transcript generation.
- Certificate and student ID generation.
- Portfolio uploads and file management.
- Export history and document downloads.
- Subscription plans, billing status, invoices, and plan limits.
- Audit logs and parent activity history.
- Admin support tools.

## Core Product Systems

### Parent Accounts

Purpose: give parents secure access to their family workspace.

Future model:

- User account with verified email.
- Family workspace.
- Role-based access, starting with parent/owner.
- Optional invited parent or co-op leader roles later.
- Account deletion and export requests.

Key decisions:

- Prefer passwordless email or passkeys over weak password-only flows.
- Require email verification before student data entry.
- Add multi-factor authentication before handling sensitive exports at scale.

### Student Profiles

Purpose: one private record hub per student.

Future model:

- Student identity fields, kept minimal.
- Grade level or school year context.
- Parent-controlled milestones.
- Links to attendance, grades, courses, certificates, IDs, transcripts, and portfolio items.

Privacy rule:

- Collect only what is needed to generate records.
- Avoid collecting sensitive personal information by default.

### Attendance Tracking

Purpose: help parents maintain learning-day records.

Future model:

- School year calendar.
- Day status: learning day, absence, break, note.
- Year-to-date totals.
- Student-specific and family-level views.
- Export-ready attendance summaries.

MVP scope:

- Simple date entries and totals.
- Parent notes.
- CSV/PDF export later.

### Gradebook and GPA

Purpose: organize course grades and calculated transcript summaries.

Future model:

- Courses by student and school year.
- Credits.
- Grading scale configuration.
- Final grade.
- Weighted or unweighted GPA setting.
- Transparent calculation details.

Important:

- Parents must be able to review and override records.
- Calculations should show inputs and formulas to avoid black-box trust problems.

### Transcript Generation

Purpose: generate polished parent-created transcript documents.

Future model:

- Pull course, credit, grade, GPA, student, and graduation-record data.
- Support draft and final export states.
- Include parent review checklist.
- Generate PDF exports.
- Preserve export history.

Boundary:

- The platform supports parent-created transcript records.
- It should not claim school accreditation, transcript authority, or diploma-granting status.

### Certificates and Student IDs

Purpose: create recognition and identity-style documents.

Future model:

- Certificate templates.
- Student ID templates.
- Achievement records.
- Completion and milestone language.
- PDF/image export.

Boundary:

- Use careful wording that avoids institutional claims unless legally true.
- Certificates should be framed as parent/family recognition documents.

### Portfolios

Purpose: store evidence of learning.

Future model:

- File uploads to R2 or equivalent object storage.
- Project descriptions.
- Tags by subject, year, achievement, or student.
- Parent notes.
- Portfolio export bundle.

Privacy rule:

- Portfolio items may contain student photos, writing, or identifying details, so access controls and deletion workflows are essential.

### Document Exports

Purpose: generate and deliver PDFs or downloadable record packages.

Future model:

- Export request record.
- Background job for PDF generation.
- Stored file in object storage.
- Signed temporary download URL.
- Export expiration policy.
- Audit trail for downloads.

Recommended design:

- Use queued jobs for expensive document generation.
- Avoid generating sensitive documents entirely in the browser if server-side watermarking, audit logs, or access checks are required.

### Subscription Plans

Purpose: support Free Preview, Founding Family, Legacy Family, and later paid plans.

Future model:

- Plan table.
- Subscription status.
- Billing provider customer ID.
- Entitlements and limits.
- Trial or founding-family flags.
- Webhook event log.

Recommended boundary:

- Keep pricing pages static.
- Move billing portals, checkout, invoices, and subscription enforcement into the authenticated app.

## Security Considerations

- Use HTTPS-only production domains.
- Verify email before allowing student data creation.
- Use least-privilege service bindings and environment secrets.
- Encrypt sensitive data at rest where the chosen database/storage supports it.
- Keep portfolio files private by default.
- Use signed URLs for downloads.
- Add rate limiting for auth, waitlist, export, and contact endpoints.
- Add audit logs for export generation, downloads, profile changes, and billing changes.
- Validate all server-side inputs with a schema layer before persistence.
- Sanitize user-entered text before rendering into documents.
- Avoid exposing internal IDs in public URLs.
- Separate admin tools from parent tools.
- Add account recovery carefully; recovery flows are high-risk for student data.

## Privacy Considerations

- Treat student records as sensitive family data.
- Use data minimization: ask for the least information needed.
- Keep the public waitlist separate from student data.
- Do not sell student or family records.
- Make record export and deletion workflows clear.
- Avoid requiring student photos for IDs or portfolios.
- Let parents correct, delete, and export records.
- Keep portfolio sharing opt-in.
- Avoid public student showcases unless explicit parent consent exists.
- Provide clear privacy copy before collecting student records.

## Scaling Considerations

- Keep public marketing static and cacheable.
- Separate read-heavy marketing traffic from authenticated app traffic.
- Store uploaded files in object storage, not the relational database.
- Use background queues for PDF generation and bulk exports.
- Design data by family workspace so access checks are simple and fast.
- Add database indexes around family ID, student ID, school year, and export status.
- Keep generated export files expirable to control storage costs.
- Use structured logs for account, export, and billing events.
- Add observability before paid launch.

## Mobile App Future Compatibility

The backend should be designed as an API-backed product, even if the first app is web-only.

Prepare for:

- Mobile login using the same account system.
- Family, student, attendance, grade, and portfolio APIs that are not tightly coupled to web pages.
- File upload flows that support mobile cameras and document pickers.
- Offline-friendly attendance drafts in a later native app.
- Push notifications later, but not in MVP.
- Stable API versioning before third-party or mobile clients rely on it.

## Suggested Data Domains

Initial tables or collections to plan for:

- users
- family_workspaces
- family_members
- students
- school_years
- attendance_days
- courses
- grades
- transcript_settings
- transcript_exports
- certificate_templates
- certificates
- student_ids
- portfolio_items
- portfolio_files
- document_exports
- subscription_plans
- subscriptions
- billing_events
- audit_events

Do not create these yet. They are planning targets for future schema design.

## Phased Rollout

### MVP

Goal: prove parent value with the smallest secure private app.

- Parent account creation and verified login.
- One family workspace.
- Student profiles.
- Attendance tracking.
- Course and grade entry.
- Basic GPA summary.
- Draft transcript preview.
- Privacy-first onboarding copy.
- Manual or limited export workflow.
- No public student showcases.
- No complex co-op roles.

### Beta

Goal: test document generation and family workflows with controlled users.

- PDF transcript exports.
- Certificate and student ID generation.
- Portfolio uploads.
- Export history.
- Plan entitlements.
- Stripe or chosen billing provider in test/live controlled rollout.
- Audit logs.
- Admin support view.
- Parent feedback loop.
- Stronger data deletion/export workflows.

### Production

Goal: operate as a trustworthy paid platform.

- Hardened auth and recovery.
- Multi-factor authentication option.
- Production billing.
- Mature subscription limits.
- Document export queues.
- Private object storage with signed URLs.
- Monitoring, alerts, and error reporting.
- Privacy policy updated for real data processing.
- Terms updated for production product behavior.
- Backup and recovery plan.
- Security review before broad launch.

## Near-Term Recommendation

Keep the current site as a static marketing and SEO asset. Do not add auth, database, or API code until:

- the MVP data model is reviewed,
- the privacy policy is updated for real student data,
- the auth provider decision is made,
- the billing provider decision is made,
- the Cloudflare full-stack deployment path is tested in a branch or separate app,
- export/document generation requirements are written.

## References

- Cloudflare Pages Next.js guide: https://developers.cloudflare.com/pages/framework-guides/nextjs/
- Cloudflare Next.js Workers/OpenNext guide: https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/bindings/
- Next.js static export guide: https://nextjs.org/docs/pages/guides/static-exports
- Cloudflare Queues overview: https://developers.cloudflare.com/queues/reference/how-queues-works/
