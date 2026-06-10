export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  intro: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-make-a-homeschool-transcript",
    title: "How to Make a Homeschool Transcript That Looks Professional",
    description:
      "A parent-friendly guide to making a homeschool transcript with courses, credits, grades, GPA notes, records, and clear parent-controlled documentation.",
    category: "Transcripts",
    readTime: "8 min read",
    intro:
      "A homeschool transcript does not need to feel intimidating. At its core, it is a clear academic record that explains what your student studied, when they studied it, how credit was assigned, and how final grades were recorded. The goal is not to make a document that pretends to be something it is not. The goal is to create an organized parent-controlled record that is easy to understand, easy to verify, and useful when your family needs it.",
    sections: [
      {
        heading: "Start with the purpose of the transcript",
        body: [
          "Parents often search for homeschool transcript help when a deadline is already close: college applications, dual enrollment, trade school, scholarship forms, military paperwork, transfer records, or graduation planning. That pressure can make the transcript feel more complicated than it has to be. A strong transcript simply gives the reader a structured view of the student’s high school learning record.",
          "Before building the document, decide what the transcript needs to support. A transcript for family records may be simpler than one used for college applications. A transcript for a ninth grader in progress may look different from a final senior transcript. The format can change, but the purpose stays the same: show courses, credits, grades, and completion clearly."
        ]
      },
      {
        heading: "What to include on a homeschool transcript",
        body: [
          "Most parent-created homeschool transcripts include the student’s name, school years, grade levels, course titles, credits, final grades, GPA information when used, and a parent signature or review note. Some families also include graduation date, grading scale, curriculum notes, dual enrollment classes, honors courses, or outside course providers.",
          "The biggest mistake is not missing fancy design. The biggest mistake is inconsistency. If one course uses a full credit, another uses a half credit, and another uses no credit at all, the parent should know why. If the transcript includes GPA, the grading scale should make sense. If courses are grouped by subject instead of by year, the structure should still be easy to read."
        ]
      },
      {
        heading: "Keep course names clear and readable",
        body: [
          "A professional transcript does not need inflated course names. Clear names are usually stronger. Algebra I, American Literature, Biology with Lab, World History, Personal Finance, Spanish I, and Physical Education are easier to understand than vague or overly creative labels.",
          "If a course used a specific curriculum or outside provider, that information can be stored in supporting records. It does not always need to crowd the transcript itself. The transcript should be clean, while the portfolio and record system can hold the deeper proof behind the grade."
        ]
      },
      {
        heading: "Use supporting records to protect accuracy",
        body: [
          "The transcript is the summary, not the entire evidence file. Parents should keep supporting records such as grade notes, attendance summaries, reading lists, tests, essays, project descriptions, lab notes, portfolio samples, and course descriptions when needed.",
          "This is where a parent-controlled records system becomes valuable. Instead of searching through folders later, the family can keep transcript notes, portfolio evidence, attendance, and certificates organized together. That is the direction Traveling Scholars is being built around."
        ]
      },
      {
        heading: "Do not blur the legal boundary",
        body: [
          "A homeschool transcript can be organized and professional without claiming accreditation. Traveling Scholars is not an accredited school, transcript authority, diploma-granting institution, or legal compliance service. Parents remain responsible for instruction, records, accuracy, and compliance with their own homeschool requirements.",
          "The safest positioning is simple: parent-created records, organized with care. That is also the most honest positioning. A transcript can still look polished, consistent, and serious while making the parent role clear."
        ]
      }
    ],
    faqs: [
      {
        question: "Can parents make their own homeschool transcript?",
        answer:
          "In many homeschool situations, parents create and maintain student records. Requirements vary, so parents should check their own state rules and any receiving organization’s requirements."
      },
      {
        question: "Does a homeschool transcript need to be accredited?",
        answer:
          "A transcript itself is a record. Accreditation is a separate school/institution issue. Traveling Scholars does not claim accreditation or transcript authority."
      }
    ],
    relatedLinks: [
      { label: "Homeschool Transcript Guide", href: "/homeschool-transcripts/" },
      { label: "Resource Library", href: "/resources/" },
      { label: "Future App Preview", href: "/app-preview/" }
    ]
  },
  {
    slug: "homeschool-transcript-template",
    title: "Homeschool Transcript Template: What Parents Should Include",
    description:
      "Learn what belongs in a homeschool transcript template, including student details, courses, credits, grades, GPA, graduation notes, and parent records.",
    category: "Transcripts",
    readTime: "7 min read",
    intro:
      "A homeschool transcript template should make record keeping easier, not more confusing. The best template gives parents a repeatable structure for student information, course history, credits, grades, GPA notes, and graduation planning. It should be clean enough for someone else to read, but simple enough for a parent to maintain year after year.",
    sections: [
      {
        heading: "The core sections of a transcript template",
        body: [
          "Most homeschool transcript templates start with basic student information: student name, date of birth if needed, parent or homeschool name, address or contact information when appropriate, and expected or actual graduation date. After that, the academic record usually shows courses, credits, grades, and school years.",
          "A template should also include a grading scale if grades are used. If the family calculates GPA, the template should explain whether the GPA is weighted or unweighted. If the family does not use GPA for younger grades, that should not be forced into the system too early."
        ]
      },
      {
        heading: "Year-based vs subject-based layouts",
        body: [
          "A year-based transcript groups courses under ninth grade, tenth grade, eleventh grade, and twelfth grade. This is easy for parents who update records at the end of each school year. It also helps show progression over time.",
          "A subject-based transcript groups courses under English, math, science, social studies, electives, world language, and other categories. This can make graduation planning easier because parents can see whether major subject areas are covered. Either format can work as long as the final record is consistent and readable."
        ]
      },
      {
        heading: "Credits should be consistent",
        body: [
          "A transcript template should leave room for credits or units. Many high school records use one credit for a full-year course and half credit for a semester-length course, but families may use different systems depending on state requirements, course structure, or outside providers.",
          "The important thing is to define the approach and use it consistently. If a course receives a different credit value, the parent should have a reason and supporting documentation. This helps the transcript stay credible."
        ]
      },
      {
        heading: "Keep extra notes outside the main transcript",
        body: [
          "A transcript template can become messy if it tries to hold every detail. Long book lists, project descriptions, lab notes, essays, and photos usually belong in a portfolio or course record, not inside the main transcript table.",
          "The transcript should summarize. The portfolio should support. The record keeping system should connect the two. That is why a future homeschool dashboard can be more useful than a single spreadsheet."
        ]
      },
      {
        heading: "Build the template around parent control",
        body: [
          "A good transcript template should never imply that a third-party platform is replacing the parent. The parent remains responsible for accuracy, instruction, compliance, and final record decisions.",
          "Traveling Scholars can help families organize transcript-ready records, but the platform should stay honest about its role: support, structure, recognition, and parent-controlled documentation."
        ]
      }
    ],
    faqs: [
      {
        question: "Should a transcript template include a parent signature?",
        answer:
          "Many parent-created transcript formats include a parent signature or review note. Parents should decide what is appropriate for their situation and any receiving organization."
      },
      {
        question: "Should course descriptions be on the transcript?",
        answer:
          "Usually course descriptions are better kept as supporting records. The transcript itself should stay clean and readable."
      }
    ],
    relatedLinks: [
      { label: "How to Make a Transcript", href: "/blog/how-to-make-a-homeschool-transcript/" },
      { label: "Homeschool Transcripts", href: "/homeschool-transcripts/" },
      { label: "Resource Library", href: "/resources/" }
    ]
  },
  {
    slug: "how-to-calculate-homeschool-credits",
    title: "How to Calculate Homeschool Credits Without Overcomplicating It",
    description:
      "A practical parent guide to homeschool credits, high school course planning, credit consistency, transcript records, and graduation readiness.",
    category: "Credits",
    readTime: "8 min read",
    intro:
      "Homeschool credits can feel confusing because parents are trying to translate real learning into a transcript format other people can understand. The goal is not to turn your home into a bureaucracy. The goal is to create a consistent record of high school work so courses, grades, and graduation planning make sense later.",
    sections: [
      {
        heading: "What a homeschool credit represents",
        body: [
          "A credit is a way to show that a student completed a meaningful amount of high school level work in a subject. In many transcript systems, a full-year course is listed as one credit and a semester course is listed as half a credit. Some families also use mastery, textbook completion, outside course standards, or state guidance.",
          "Because rules and expectations can vary, parents should check their state requirements and any receiving school, college, program, or organization. Traveling Scholars can help organize records, but it does not decide legal requirements or guarantee acceptance."
        ]
      },
      {
        heading: "Common ways parents assign credits",
        body: [
          "Parents commonly assign credits by time, curriculum completion, course scope, outside provider documentation, or demonstrated mastery. For example, a full algebra course may count as one math credit if it covers a standard high school Algebra I scope. A semester personal finance course may count as a half credit if it is planned and documented that way.",
          "The method matters less than consistency and documentation. If the family can explain what was completed and why credit was assigned, the record becomes easier to defend and understand."
        ]
      },
      {
        heading: "Do not wait until senior year",
        body: [
          "Credit confusion gets worse when parents wait until graduation to reconstruct four years of work. A better system is to update credits at the end of each semester or school year. Even a simple draft record is better than relying on memory.",
          "For every course, keep the course name, school year, credit value, final grade, and supporting notes. If the course involved major projects, labs, reading, or outside evaluation, store those records with the course."
        ]
      },
      {
        heading: "Credits connect directly to transcript readiness",
        body: [
          "Credits are not just numbers. They connect to the transcript, graduation planning, subject coverage, GPA calculation, and portfolio evidence. If credits are disorganized, the transcript becomes harder to build.",
          "This is why the future Traveling Scholars app direction includes student profiles, grade records, transcript readiness, and parent dashboards. The goal is to help families see what is complete, what is missing, and what needs review."
        ]
      },
      {
        heading: "Keep parent responsibility clear",
        body: [
          "No platform should casually tell every homeschool family exactly how many credits they need without context. Homeschool laws, graduation expectations, and receiving institution requirements can vary.",
          "Traveling Scholars should support organization and planning while keeping the final responsibility with parents. That protects the family, protects the platform, and keeps the brand honest."
        ]
      }
    ],
    faqs: [
      {
        question: "How many hours equal one homeschool credit?",
        answer:
          "Some families use time-based guidelines, but requirements and expectations vary. Parents should check their state guidance and any program that will review the transcript."
      },
      {
        question: "Can a homeschool course be half a credit?",
        answer:
          "Yes, many transcript systems use half credits for semester-length or smaller courses. The parent should document the course scope and apply the system consistently."
      }
    ],
    relatedLinks: [
      { label: "Homeschool Record Keeping", href: "/homeschool-record-keeping/" },
      { label: "Transcript Template Guide", href: "/blog/homeschool-transcript-template/" },
      { label: "Resource Library", href: "/resources/" }
    ]
  },
  {
    slug: "homeschool-record-keeping-what-to-save",
    title: "Homeschool Record Keeping: What to Save Each Year",
    description:
      "Learn what homeschool records parents may want to save each year, including attendance, grades, credits, portfolios, transcripts, certificates, and progress notes.",
    category: "Record Keeping",
    readTime: "9 min read",
    intro:
      "Homeschool record keeping is easier when parents know what to save before they need it. Many families do not struggle because they taught poorly. They struggle because records are spread across notebooks, email, screenshots, folders, apps, binders, and memory. A simple yearly record system can make the entire homeschool experience feel calmer and more professional.",
    sections: [
      {
        heading: "Start with the records that prove the year happened",
        body: [
          "At minimum, many families keep attendance records, course lists, grade notes, work samples, reading lists, project notes, and year-end summaries. Depending on the student’s age and state requirements, parents may also keep standardized test records, evaluation notes, medical forms, extracurricular records, or high school credit planning documents.",
          "The point is not to save everything. The point is to save enough meaningful evidence that a parent can explain what the student studied, how progress was measured, and what was completed."
        ]
      },
      {
        heading: "Attendance records should be simple",
        body: [
          "Attendance records do not need to be complicated to be useful. A calendar, spreadsheet, planner, or digital tracker can work if it clearly shows school days or learning periods. Some families also keep notes about field trips, co-op days, enrichment, travel learning, or project-based days.",
          "Because attendance rules vary by location, parents should know their own requirements. The record system should make compliance easier, but it should not pretend to replace legal responsibility."
        ]
      },
      {
        heading: "Save grade and course evidence",
        body: [
          "For each course, parents should consider saving the course title, curriculum or materials used, major assignments, test scores if used, project descriptions, reading lists, final grade, and credit value when applicable.",
          "This becomes especially important in high school. A transcript is much easier to prepare when course records already exist. Without those records, parents may have to rebuild grades, credits, and course names from memory."
        ]
      },
      {
        heading: "Portfolios show learning that grades cannot",
        body: [
          "A portfolio can include writing samples, photos of projects, artwork, science labs, volunteer work, certificates, presentations, reading logs, and examples of skill growth. These records show progress in a way a grade alone cannot.",
          "Portfolio records are also useful for younger students, creative students, project-based learners, and families who want to celebrate progress beyond a worksheet stack."
        ]
      },
      {
        heading: "Create a yearly review habit",
        body: [
          "At the end of each school year, parents can review attendance, courses, grades, portfolio samples, certificates, and transcript notes. This does not have to take weeks. It can be a simple checklist that confirms the year is documented.",
          "Traveling Scholars is being built around this kind of parent-controlled organization: less panic, clearer records, and a stronger sense of readiness."
        ]
      }
    ],
    faqs: [
      {
        question: "Do homeschool parents need to save every worksheet?",
        answer:
          "Usually no. Many families save representative work samples, final projects, grade records, and important documentation instead of every daily worksheet."
      },
      {
        question: "How often should homeschool records be updated?",
        answer:
          "A monthly or end-of-semester review is usually easier than waiting until the end of the year."
      }
    ],
    relatedLinks: [
      { label: "Homeschool Record Keeping Guide", href: "/homeschool-record-keeping/" },
      { label: "Student Portfolio Guide", href: "/student-portfolios/" },
      { label: "Resource Library", href: "/resources/" }
    ]
  },
  {
    slug: "homeschool-attendance-records",
    title: "Homeschool Attendance Records: Simple Ways to Track School Days",
    description:
      "A simple guide to homeschool attendance records, attendance logs, school day tracking, parent documentation, and organized homeschool record keeping.",
    category: "Attendance",
    readTime: "7 min read",
    intro:
      "Attendance is one of the simplest homeschool records to track, but it is also one of the easiest to forget. Parents may be teaching consistently while still failing to document school days in a way that is useful later. A good attendance record should be simple, repeatable, and connected to the rest of the family’s homeschool documentation.",
    sections: [
      {
        heading: "Why attendance records matter",
        body: [
          "Attendance records help parents show when learning happened. Depending on state rules, attendance may be required, recommended, or simply useful for family organization. Even when a family is not asked to submit attendance regularly, keeping a record can support year-end summaries and parent confidence.",
          "Attendance also helps parents see patterns. A family can look back and understand how many days were completed, when breaks happened, how travel affected the schedule, and whether the year stayed on track."
        ]
      },
      {
        heading: "Simple attendance tracking methods",
        body: [
          "A homeschool attendance log can be as simple as a calendar with school days marked. Other families use a spreadsheet, printed planner, checklist, digital form, or homeschool app. The best system is the one a parent will actually use.",
          "Some parents track only present days. Others track hours, subjects, field trips, co-op days, sick days, or enrichment days. The right level of detail depends on family preference and any applicable requirements."
        ]
      },
      {
        heading: "Connect attendance to course records",
        body: [
          "Attendance becomes more useful when it is connected to the rest of the record system. If a student completed a science project, attended co-op, went on an educational trip, or finished a major writing assignment, those notes can support both attendance and portfolio records.",
          "This is where digital organization can beat scattered paper. A parent dashboard can eventually connect attendance, course notes, grades, portfolios, and transcript readiness in one place."
        ]
      },
      {
        heading: "Avoid overcomplicating the system",
        body: [
          "The perfect attendance tracker is useless if the parent stops using it. Keep the system simple enough to maintain during busy weeks. A short weekly update is better than a detailed tracker that gets abandoned by October.",
          "A good system should answer basic questions quickly: Did we complete learning days? When did they happen? Are there notes worth saving? Is the year documented well enough for our family’s needs?"
        ]
      },
      {
        heading: "Know your responsibility",
        body: [
          "Traveling Scholars can help parents organize attendance records, but it does not replace parent responsibility or legal review. Homeschool requirements vary, and parents should confirm what applies to them.",
          "The platform direction is support and organization: helping families keep records that are clearer, calmer, and easier to use."
        ]
      }
    ],
    faqs: [
      {
        question: "What should a homeschool attendance record include?",
        answer:
          "Many attendance records include dates, school days completed, absences or breaks, and optional notes for field trips, co-op, or project days."
      },
      {
        question: "Can field trips count in homeschool attendance?",
        answer:
          "Many families document field trips as learning days, but parents should check their own requirements and keep notes about the educational purpose."
      }
    ],
    relatedLinks: [
      { label: "Record Keeping Guide", href: "/homeschool-record-keeping/" },
      { label: "How to Calculate Credits", href: "/blog/how-to-calculate-homeschool-credits/" },
      { label: "Resource Library", href: "/resources/" }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
