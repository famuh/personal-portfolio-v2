// Work history, leadership & community roles, education and recognition.
// Source of truth: the LinkedIn export (public/assets/resume/Profile_Fadhil.pdf)
// plus details confirmed in conversation. Bullets follow "action + scope +
// outcome" and avoid numbers that aren't on record. Entries still waiting for
// details come from content/placeholders.js with `pending: true`; they are
// dropped from production builds.
import { pendingExperience, pendingActivities } from "./placeholders";

const DEV = process.env.NODE_ENV !== "production";

// Professional experience (paid work, newest first).
export const experience = [
  {
    company: "Green Harvest Solutions · PT Semesta Agri Solusi",
    role: "Software Engineer",
    period: "Dec 2025 – Present",
    mode: "Medan · Full-time · On site and with clients",
    summary:
      "Mobile and web software for palm oil operations: the GEMA product line and the Green Harvest Plantation ERP, deployed per client with isolated servers and databases.",
    highlights: [
      "Lead GEMA Plantation and GEMA Factory with a team of developers and implementators, from field studies and requirement gathering to estimates, presentations and delivery.",
      "Built GEMA Factory, a Flutter mill maintenance app: preventive maintenance, work orders, approvals, workshop activities, reporting and role management.",
      "Develop the GEMA Plantation Android app (Kotlin/XML, offline-first, on-device ripeness detection, NFC) and its CMS in Next.js, TypeScript, Tailwind CSS and TanStack Query.",
      "Integrated an AI chatbot that answers questions about production, maintenance and reports through API-driven access to operational data.",
      "Build .NET Core and SQL Server APIs (documented with Swagger), and support client ERP systems on ASP.NET Web Forms, Crystal Reports and IIS.",
      "Deploy and monitor client servers (IIS, Plesk, Prometheus, Grafana), handle production troubleshooting, and run the Git and GitHub workflow.",
      "Train users and support clients online and on site; rebuilt the company website into a product site and design product decks and brochures.",
    ],
    tags: ["Product lead", "Consulting", "Full-stack", "Field work"],
  },
  {
    company: "Samta Cloud",
    role: "Software Engineer",
    period: "Nov 2025 – May 2026",
    mode: "Medan · Part-time · Project-based",
    highlights: [
      "Developed a Flutter app for hospitality and hotel maintenance operations, digitising day-to-day maintenance workflows.",
      "Owned UI implementation, REST API integration and state management, using clean architecture to keep the app maintainable.",
      "Worked with the development team to keep the app stable and aligned with business requirements.",
    ],
    tags: ["Flutter", "Clean architecture", "Hospitality"],
  },
  {
    company: "Freelance",
    role: "Product Engineer",
    period: "Nov 2023 – Apr 2026",
    mode: "Remote · Self-employed",
    highlights: [
      "Worked directly with clients to find the core problem and turn business needs into working software.",
      "Analysed and built a purchasing, sales and inventory (P3) system for a POS and stock business: process diagrams, wireframes, data model, then full-stack build.",
      "Delivered a mobile attendance app for a private company with location-based validation to keep presence records accurate.",
      "Designed a livestock and distributor management system and a multi-role preloved marketplace in Figma, from system architecture and user flows to hi-fi prototypes.",
    ],
    tags: ["Consulting", "System analysis", "Full-stack", "UI/UX"],
  },
  {
    company: "BEKUP × Dicoding Indonesia",
    role: "Flutter Facilitator",
    period: "Jul 2025 – Nov 2025",
    mode: "Remote · Part-time",
    summary: "National startup programme by the Ministry of Creative Economy (Baparekraf for Startup).",
    highlights: [
      "Facilitated weekly online sessions and tracked progress for participants from very different backgrounds.",
      "Reviewed and validated participant journals with 100% compliance to programme standards.",
      "Supported 15+ instructor-led training sessions end to end.",
      "Introduced peer programming and collaborative learning to strengthen retention and teamwork.",
    ],
    tags: ["Mentoring", "Facilitation"],
  },
  {
    company: "DMB · PT Damai Nusa Abadi (DNA Group)",
    role: "Flutter Developer",
    period: "Oct 2024 – Sep 2025",
    mode: "Medan · Hybrid · Full-time",
    summary:
      "Software division of DNA Group, which runs hospitality, entertainment, F&B and startup businesses in several Indonesian cities.",
    highlights: [
      "Designed and built the self-ordering app for Android TV kiosks and tablets: UI/UX, API integration and state management.",
      "Built attendance with facial recognition and fake-GPS detection, notifications, and offline mode for POS.",
      "Delivered modules for hotel, asset, POS, inventory and multi-outlet management systems.",
      "Released and maintained the group's apps on Google Play; worked with cross-functional teams to meet stakeholder requirements.",
    ],
    tags: ["Product delivery", "Flutter", "Stakeholders"],
  },
  {
    company: "Sentosa Digital Printing",
    role: "Graphic Designer (Internship)",
    period: "Aug 2019 – Nov 2019",
    mode: "Medan · Vocational school field practice",
    highlights: [
      "Handled graphic design requests directly with clients, adapting to different client types and briefs.",
    ],
    tags: ["Design", "Client work"],
  },
  ...(DEV ? pendingExperience : []),
];

// Leadership, teaching and community roles outside paid work (newest first).
export const activities = [
  {
    company: "Universitas Mikroskil",
    role: "Master of Ceremonies",
    period: "Nov 2023",
    mode: "Medan",
    highlights: [
      "Hosted the seminar “Cerdas Emosi Raih Prestasi” (Emotional Intelligence Leads to Achievement) for an audience of university students.",
    ],
    tags: ["Public speaking"],
  },
  {
    company: "BITSMIKRO, Informatics Student Association",
    role: "President",
    period: "Sep 2022 – Sep 2023",
    mode: "Universitas Mikroskil, Medan",
    highlights: [
      "Led and managed the association and its divisions for a full term.",
      "Kept a working environment where the team could perform, and made decisions through group discussion.",
    ],
    tags: ["Leadership"],
  },
  {
    company: "Universitas Mikroskil",
    role: "Mentor Assistant",
    period: "Jan 2023",
    mode: "Medan",
    summary: "“Workshop & Training Mobile App Development with Flutter”: an introduction to Flutter with hands-on practice.",
    highlights: [
      "Helped participants solve the problems they ran into during the hands-on sessions.",
      "Supported the mentors in delivering the course material.",
    ],
    tags: ["Mentoring", "Flutter"],
  },
  {
    company: "Kampus Merdeka × Dicoding, Studi Independen",
    role: "Peer Tutor Study Group",
    period: "Aug 2022 – Dec 2022",
    mode: "Remote",
    highlights: [
      "Taught and assisted fellow participants with the problems they ran into during the Flutter and back-end learning path.",
      "Finished the programme as Best Graduate.",
    ],
    tags: ["Teaching"],
  },
  {
    company: "BITSMIKRO, Informatics Student Association",
    role: "Media & Information Division Staff",
    period: "Dec 2021 – Sep 2022",
    mode: "Universitas Mikroskil, Medan",
    highlights: [
      "Communicated the association's news through social media posts, flyers, thumbnails and the organisation blog.",
    ],
    tags: ["Design", "Communication"],
  },
  ...(DEV ? pendingActivities : []),
];

export const education = [
  {
    institution: "Universitas Mikroskil",
    detail: "Bachelor of Informatics Engineering",
    period: "2020 – 2024",
    note: "GPA 3.91 / 4.00. Thesis project: Angkutin, a waste pickup app",
  },
  {
    institution: "Bangkit Academy (Google, GoTo, Traveloka)",
    detail: "Mobile Development cohort",
    period: "Feb 2023 – Aug 2023",
    note: "Kotlin, Jetpack Compose, SOLID principles and UX design, plus a capstone with ML and cloud teams",
  },
  {
    institution: "Kampus Merdeka × Dicoding, Studi Independen",
    detail: "Multi-Platform (Flutter) & Back-End (Node.js)",
    period: "Aug 2022 – Dec 2022",
    note: "Best Graduate, and peer tutor for the study group",
  },
  {
    institution: "SMK Negeri 10 Medan",
    detail: "Multimedia",
    period: "2017 – 2020",
  },
];

export const recognition = [
  { title: "Best Graduate", context: "Kampus Merdeka × Dicoding, 2022" },
  { title: "GPA 3.91 / 4.00", context: "Informatics Engineering, Universitas Mikroskil" },
  { title: "Bangkit Academy graduate", context: "Mobile Development, 2023 cohort" },
  { title: "President, BITSMIKRO", context: "Student association, 2022 – 2023" },
  { title: "Peer Tutor", context: "Kampus Merdeka × Dicoding study group, 2022" },
];

// From the CV and the LinkedIn profile. `issuer`/`year` may be empty when the
// source doesn't list them.
export const certifications = [
  { name: "Flutter Developer Expert", issuer: "Dicoding Indonesia", year: "2022", url: "" },
  { name: "Android Developer (Kotlin, Xml)", issuer: "Bangkit Academy", year: "2023", url: "" },
  { name: "Back-End Developer (Node.js)", issuer: "Dicoding Indonesia", year: "2022", url: "" },
  { name: "Belajar Penerapan Machine Learning untuk Flutter", issuer: "", year: "", url: "" },
  { name: "Learn SOLID Programming Principles", issuer: "", year: "", url: "" },
  { name: "Learn Git Basics with GitHub", issuer: "", year: "", url: "" },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Limited working proficiency" },
];
