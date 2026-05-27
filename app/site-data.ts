export const mailtoHref =
  "mailto:hello@travelingscholars.org?subject=Traveling%20Scholars%20early%20access";

export const features = [
  ["Academic Records", "Attendance, grades, GPA, credits, progress reports, and transcripts organized in one place."],
  ["Student Recognition", "Certificates, student IDs, honor roll, achievement tracking, and graduation-ready documents."],
  ["Portfolio Vault", "Store projects, writing samples, photos, volunteer records, and homeschool documentation."],
  ["Community Support", "Future field trips, graduation events, fundraising opportunities, and family connection."]
];

export const steps = [
  ["Create your family account", "Parents stay in control from day one."],
  ["Add student profiles", "Build organized records for each child."],
  ["Track progress", "Attendance, grades, credits, and achievements stay clean."],
  ["Generate documents", "Transcripts, certificates, IDs, and portfolios look professional."]
];

export const creations = [
  "Transcripts",
  "Student IDs",
  "Certificates",
  "Portfolios",
  "Attendance records",
  "Grade records"
];

export const trustPoints = [
  ["Parent-led by design", "You stay in control of curriculum, instruction, and the story your records tell."],
  ["Built for clarity", "Keep grades, attendance, credits, awards, and samples organized before you need them."],
  ["Recognition matters", "Give students polished documents that celebrate effort, growth, and achievement."]
];

export type PricingTier = [string, string, string, string[]];
export type Faq = [string, string];

export const pricing: PricingTier[] = [
  [
    "Free Preview",
    "$0",
    "For families who want to see the platform before launch.",
    ["Launch updates", "Feature previews", "Early access invitations"]
  ],
  [
    "Founding Family",
    "Early pricing",
    "For families ready to organize records and help shape the first release.",
    ["Priority early access", "Founding family pricing", "Input on record and portfolio tools"]
  ],
  [
    "Legacy Family",
    "Best fit",
    "For long-term homeschool families who want polished records year after year.",
    ["Multi-year planning", "Student recognition tools", "Portfolio and transcript support"]
  ]
];

export const faqs: Faq[] = [
  [
    "Is Traveling Scholars a school?",
    "No. Traveling Scholars is a homeschool organization and records platform, not an accredited school or curriculum provider."
  ],
  [
    "Do I need to pay today?",
    "No. Early access is handled by email for now, so families can learn more before launch."
  ],
  [
    "What will families be able to track?",
    "The platform is being built for attendance, grades, credits, transcripts, certificates, portfolios, and student recognition."
  ],
  [
    "Will this handle my state's homeschool laws?",
    "Parents remain responsible for understanding and following their local homeschool requirements."
  ]
];
