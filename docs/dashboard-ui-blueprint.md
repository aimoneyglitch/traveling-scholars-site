# Traveling Scholars Dashboard UI Blueprint

This document is planning only. It does not add frontend routes, backend code, authentication, databases, APIs, environment variables, or dependencies.

## Product UI Goal

The future in-app dashboard should help busy homeschool parents see what matters quickly, update records with minimal friction, and feel confident that student data stays private and parent-controlled.

The app should feel like calm records software, not a school portal. The tone should be organized, warm, practical, and careful about legal/accreditation boundaries.

## Dashboard Design Principles

- Parent-first: the parent is the primary operator and final reviewer.
- One family, many students: switching between children should be obvious and fast.
- Small steps: every workflow should support quick updates during a busy homeschool day.
- Trust over flash: use clear labels, quiet status indicators, and plain confirmation language.
- Mobile-ready: core record actions should work well on phones.
- Static marketing separation: authenticated dashboard UI should live in the future app, not inside the static marketing site.

## Navigation Structure

### Desktop App Shell

Suggested layout:

- Top bar:
  - Family/workspace name.
  - Current school year selector.
  - Global add button.
  - Notifications/reminders icon.
  - Account menu.
- Left sidebar:
  - Dashboard.
  - Students.
  - Attendance.
  - Gradebook.
  - Transcripts.
  - Certificates.
  - Portfolio.
  - Exports.
  - Subscription.
  - Settings.
- Main content:
  - Page heading.
  - Student selector or context chip when relevant.
  - Primary action area.
  - Records/widgets/cards.

### Mobile App Shell

Suggested layout:

- Top bar:
  - Page title.
  - Student switcher.
  - Account/menu icon.
- Bottom navigation:
  - Home.
  - Students.
  - Attendance.
  - Gradebook.
  - More.
- More menu:
  - Transcripts.
  - Certificates.
  - Portfolio.
  - Exports.
  - Subscription.
  - Settings.

Mobile rule:

- Do not force parents through dense tables on phones.
- Use stacked cards, segmented controls, and quick actions.

## MVP Screens

### 1. Parent Dashboard Home

Purpose: give parents a calm command center for the family.

Primary layout:

- Header:
  - Greeting.
  - Family name.
  - School year selector.
  - Primary CTA: Add record.
- Student summary strip:
  - One card per student.
  - Current grade/year.
  - Attendance total.
  - Course count.
  - Transcript readiness status.
- Record status widgets:
  - Attendance this year.
  - Gradebook progress.
  - Portfolio count.
  - Document/export status.
- Next steps:
  - Add attendance.
  - Add course grade.
  - Review transcript.
  - Add portfolio item.
- Trust note:
  - Student data is private to your family.
  - Parents remain responsible for records and compliance.

Data displayed:

- Family display name.
- Current school year.
- Student names.
- Attendance totals.
- Course/grade totals.
- GPA summary if available.
- Portfolio item count.
- Draft transcript status.
- Plan name and limits summary.

Primary actions:

- Add student.
- Add attendance.
- Add course.
- Add portfolio item.
- Preview transcript.
- Upgrade plan if limit reached.

Key widgets:

- Students needing attention.
- Missing final grades.
- Transcript readiness checklist.
- Recent exports.
- Upcoming reminders.

Responsive behavior:

- Desktop: 3-column summary grid plus sidebar navigation.
- Tablet: 2-column grid.
- Mobile: stacked cards with sticky bottom navigation and a compact Add button.

Busy-parent UX:

- Show the next useful action, not every possible feature.
- Keep empty states friendly and specific.
- Avoid alarming red states unless something truly failed.

### 2. Student Overview Screen

Purpose: central view for one student.

Primary layout:

- Student header:
  - Student name.
  - Grade/year.
  - School year selector.
  - Edit profile button.
- Overview cards:
  - Attendance total.
  - Credits recorded.
  - GPA summary.
  - Portfolio items.
  - Certificates.
- Section tabs:
  - Overview.
  - Attendance.
  - Courses.
  - Documents.
  - Portfolio.
- Timeline:
  - Recent grades.
  - Recent attendance.
  - Recent portfolio additions.
  - Recent exports.

Data displayed:

- Student name.
- Optional preferred name.
- Grade level.
- Graduation year.
- School year.
- Attendance count.
- Course list summary.
- GPA summary.
- Transcript readiness.
- Certificates and portfolio counts.

Primary actions:

- Edit student.
- Add attendance.
- Add course.
- Add certificate.
- Add portfolio item.
- Preview transcript.

Multiple-child UX:

- Persistent student switcher.
- Clear current-student context on every student-specific screen.
- Avoid mixing records across students.

Mobile behavior:

- Header collapses to student name and selector.
- Overview cards become horizontal scroll or stacked cards.
- Tabs become segmented control or dropdown.

### 3. Attendance Screen

Purpose: let parents update learning-day records quickly.

Primary layout:

- Header:
  - Student selector.
  - School year selector.
  - Add attendance button.
- Summary row:
  - Learning days.
  - Absences.
  - Break/other days.
  - Date range.
- Main view:
  - Calendar view on desktop/tablet.
  - List view on mobile.
- Detail panel:
  - Date.
  - Status.
  - Notes.
  - Save/delete actions.

Data displayed:

- Attendance date.
- Status.
- Notes.
- Student.
- School year.
- Totals by status.

Primary actions:

- Mark learning day.
- Mark absence.
- Add note.
- Edit record.
- Delete record.
- View totals.

Notifications/reminders:

- Reminder to update attendance after a quiet period.
- Reminder if school year has no attendance yet.
- Optional weekly summary later.

Mobile behavior:

- Default to list or quick-add view.
- Use large tap targets for status selection.
- Avoid dense month grids as the only mobile interaction.

### 4. Gradebook Screen

Purpose: organize courses, credits, final grades, and GPA.

Primary layout:

- Header:
  - Student selector.
  - School year selector.
  - Add course button.
- Summary widgets:
  - Total credits.
  - Courses recorded.
  - GPA.
  - Missing final grades.
- Course table/card list:
  - Course title.
  - Subject.
  - Credit value.
  - Final grade.
  - Included on transcript.
  - Actions.
- GPA explanation panel:
  - Formula summary.
  - Included course count.
  - Parent review note.

Data displayed:

- Courses.
- Credits.
- Grades.
- Grade points.
- Transcript inclusion.
- GPA calculation.

Primary actions:

- Add course.
- Edit course.
- Delete course.
- Mark included/excluded.
- Review GPA.
- Preview transcript.

Mobile behavior:

- Course rows become cards.
- GPA summary stays pinned near top.
- Editing happens in full-screen sheet or simple form.

Trust UX:

- Explain GPA calculations plainly.
- Show that parents can review and correct all inputs.
- Avoid hidden calculations.

### 5. Transcript Builder

Purpose: help parents create a parent-reviewed transcript draft.

Primary layout:

- Header:
  - Student selector.
  - Transcript status.
  - Preview/export actions.
- Step navigation:
  - Student info.
  - Courses.
  - GPA.
  - Notes.
  - Review.
  - Export.
- Readiness checklist:
  - Student details complete.
  - Courses selected.
  - Grades complete.
  - Credits reviewed.
  - GPA reviewed.
  - Parent responsibility acknowledged.
- Preview panel:
  - Transcript document preview.
  - Wording note.
  - Export status.

Data displayed:

- Student profile fields.
- School years.
- Course rows.
- Credits.
- Grades.
- GPA.
- Graduation date if provided.
- Parent-created transcript language.

Primary actions:

- Edit included courses.
- Review GPA.
- Add notes.
- Preview transcript.
- Confirm parent responsibility language.
- Export PDF if plan allows.

Export/document actions:

- Save draft.
- Generate preview.
- Export PDF.
- View export history.
- Regenerate after edits.

Paywall concepts:

- Free Preview can show draft.
- Final PDF export requires paid plan or controlled beta allowance.
- Upgrade prompt should explain value without blocking record entry.

Mobile behavior:

- Stepper becomes vertical checklist.
- Preview can open in separate full-screen view.
- Export confirmation should be short and readable.

Boundary language:

- The transcript is parent-created.
- The platform does not claim accreditation or school authority.

### 6. Certificate Manager

Purpose: create simple student recognition documents.

Primary layout:

- Header:
  - Student selector.
  - Create certificate button.
- Template gallery:
  - Course completion.
  - Achievement.
  - Reading milestone.
  - Service.
  - Participation.
  - Graduation celebration.
- Certificate list:
  - Title.
  - Student.
  - Date.
  - Status.
  - Export action.
- Preview panel:
  - Selected template.
  - Recognition text.
  - Export status.

Data displayed:

- Certificate title.
- Recognition reason.
- Issue date.
- Template.
- Student.
- Export status.

Primary actions:

- Choose template.
- Create certificate.
- Edit certificate.
- Preview.
- Export PDF.
- Archive.

Mobile behavior:

- Template cards stack.
- Certificate form should be short.
- Preview opens full-screen.

Trust UX:

- Avoid credential-style wording that implies accreditation.
- Show a short note that certificates are family recognition documents.

### 7. Portfolio Vault

Purpose: help parents preserve evidence of learning.

Primary layout:

- Header:
  - Student selector.
  - School year filter.
  - Add portfolio item button.
- Filters:
  - Subject.
  - Year.
  - Achievement type.
  - Has attachment.
- Portfolio grid/list:
  - Title.
  - Date.
  - Subject/tag.
  - Short description.
  - Attachment indicator.
- Item detail:
  - Description.
  - Files if enabled.
  - Tags.
  - Privacy status.

Data displayed:

- Portfolio title.
- Description.
- Date.
- Student.
- School year.
- Subject/tag.
- Attachment metadata.
- Visibility status.

Primary actions:

- Add item.
- Edit item.
- Delete item.
- Attach file if available.
- Filter records.
- View item detail.

Export/document actions:

- Portfolio summary export later.
- Portfolio bundle later.
- Shareable portfolio link later with explicit consent.

Mobile behavior:

- Add item should be easy from phone.
- Future file upload should support camera/photo picker.
- Filters collapse into a sheet.

Privacy UX:

- Default visibility is private.
- Public showcase features should not appear in MVP unless consent systems are complete.

### 8. Subscription and Account Settings

Purpose: manage family plan, limits, privacy notices, and account settings.

Primary layout:

- Account profile:
  - Parent name.
  - Email.
  - Verification status.
- Family workspace:
  - Family name.
  - Timezone.
  - Members later.
- Plan panel:
  - Current plan.
  - Student limit.
  - Export limit.
  - Portfolio/storage limit.
  - Upgrade/manage billing action.
- Privacy and data:
  - Download data request.
  - Delete account request.
  - Privacy notice version.
  - Parent responsibility notice version.

Data displayed:

- Account email.
- Family name.
- Current plan.
- Billing status.
- Plan limits.
- Consent versions.

Primary actions:

- Edit account.
- Edit family name.
- Upgrade plan.
- Manage billing.
- Request data export.
- Request deletion.

Mobile behavior:

- Use simple stacked panels.
- Billing and deletion actions need clear confirmations.

Trust UX:

- Keep payment info with billing provider.
- Do not expose billing controls to non-owner roles.
- Make privacy/data controls easy to find.

## Future Premium Screens

### Export Center

Purpose:

- Manage generated transcript, certificate, student ID, attendance, and portfolio exports.

Future widgets:

- Recent exports.
- Export status.
- Download links.
- Expiration notices.
- Regenerate action.

### Student ID Manager

Purpose:

- Create student ID cards and recognition documents.

Future widgets:

- Student ID preview.
- Photo upload.
- Expiration date.
- Export PDF/image.

### Co-op and Educator Contributions

Purpose:

- Let outside contributors submit records with parent approval.

Future widgets:

- Pending course contributions.
- Pending attendance contributions.
- Contributor permissions.
- Parent approve/reject workflow.

### Public Showcase Review

Purpose:

- Let families decide what, if anything, can be shared publicly.

Future widgets:

- Consent checklist.
- Portfolio item selector.
- Public preview.
- Revoke sharing.

### Notifications Center

Purpose:

- Centralize record reminders and export events.

Future widgets:

- Attendance reminders.
- Missing grades.
- Export completed.
- Subscription issue.
- Privacy updates.

## Notifications and Reminders Concepts

MVP reminders:

- Add first student.
- Set up school year.
- Add attendance.
- Add first course.
- Missing final grades.
- Transcript ready for review.
- Export generated.
- Plan limit reached.

Tone:

- Helpful, not scolding.
- Specific next action.
- No fear-based compliance language.

Examples:

- `You have 3 courses without final grades.`
- `Attendance has not been updated this week.`
- `Transcript draft is ready for parent review.`
- `Free Preview includes one student. Upgrade to add another child.`

## Responsive Behavior Rules

Desktop:

- Sidebar navigation.
- Dense-but-readable grids.
- Tables allowed for gradebook and exports.
- Preview panels can sit beside forms.

Tablet:

- Sidebar may collapse.
- Two-column cards.
- Tables should remain readable or convert to cards.

Mobile:

- Bottom navigation.
- Stacked cards.
- Full-screen forms.
- Large tap targets.
- Sticky primary action when useful.
- Avoid horizontal scrolling except for optional chips.

## Multiple-Child UX

Core pattern:

- Family dashboard shows all children.
- Student-specific screens always show selected student.
- Student switcher stays near the top.
- New records default to the currently selected student.
- Cross-student actions require explicit selection.

Safety rules:

- Do not allow silent student context changes.
- Show student name in export confirmations.
- Show student name in destructive confirmations.

## Simplicity and Trust UX

Use plain language:

- `Parent-created transcript`
- `Family recognition certificate`
- `Private portfolio item`
- `Review before export`

Avoid misleading language:

- `Official accredited transcript`
- `School-issued diploma`
- `Legal compliance guaranteed`
- `Certified graduation credential`

Trust callouts:

- Private by default.
- Parent-controlled.
- Review before export.
- No student data sold.
- Parents remain responsible for accuracy.

## MVP Screen Priority

Build UI in this order when implementation begins:

1. App shell and navigation.
2. Parent dashboard home.
3. Add/edit student.
4. Student overview.
5. Attendance screen.
6. Gradebook screen.
7. Transcript builder.
8. Certificate manager.
9. Portfolio vault.
10. Subscription/account settings.

## Open UI Decisions

- Should desktop use a permanent sidebar or top navigation for the first MVP?
- Should mobile have bottom navigation from day one?
- Should transcript preview be live beside the builder or opened as a separate preview screen?
- Should portfolio file upload be hidden until storage is ready?
- Should Free Preview show watermarked PDF export or preview only?
- Should the app use one global Add button or action buttons per screen?
