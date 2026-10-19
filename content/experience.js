// Work history, education and recognition — sourced from the CV
// (public/assets/resume/myresume.pdf) and the previous /resume page.
// Bullets follow "action + scope + outcome" and avoid numbers that aren't
// on record. Anything unverified lives in content/placeholders.js.

export const experience = [
  {
    company: "PT Semesta Agri Solusi",
    role: "Software Engineer",
    period: "Dec 2025 – Present",
    mode: "Medan · On site and with clients",
    summary: "Builds software for the palm oil industry: the GEMA product line and the Green Harvest Plantation ERP.",
    highlights: [
      "Lead the company's GEMA Plantation and GEMA Factory products, with a team of usually two (up to four) developers.",
      "Go on site to estates and mills for field studies, gather requirements with clients and field users, estimate the work, and present it.",
      "Built GEMA Plantation end to end: offline-first Android app with on-device ripeness detection and NFC transfer, a Next.js CMS, and a .NET Core backend connected to the ERP database.",
      "Train users and support clients online and on site, including for the company's GEMA ERP.",
      "Took the initiative to rebuild the company website (semestaagro.com) into a product site, which now brings in demo and presentation requests.",
      "Design product presentations, company profile decks and brochures for GEMA Plantation and GEMA Factory.",
    ],
    tags: ["Product lead", "Consulting", "Full-stack", "Field work"],
  },
  {
    company: "Freelance",
    role: "Developer & System Designer",
    period: "Jul 2023 – Present",
    mode: "Remote",
    highlights: [
      "Analysed requirements for a purchasing, sales and inventory (P3) system for a POS and stock business, produced the process diagrams, wireframes and data model, then built it full-stack.",
      "Delivered a mobile attendance app for a private company with location-based validation to keep presence records accurate.",
      "Designed an integrated livestock and distributor management system in Figma: user flows, data structure and high-fidelity prototype.",
      "Prototyped a multi-role preloved-clothing marketplace to make the client's business process visible before build.",
    ],
    tags: ["Consulting", "System analysis", "Full-stack"],
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
    company: "BITSMIKRO, Informatics Student Association",
    role: "President",
    period: "Sep 2022 – Sep 2023",
    mode: "Medan",
    summary: "Mikroskil University's informatics engineering student association.",
    highlights: [
      "Led the association and its divisions for a full term.",
      "Before that, media and information staff (Dec 2021 – Sep 2022): posters, flyers and the blog.",
    ],
    tags: ["Leadership"],
  },
];

export const education = [
  {
    institution: "Mikroskil University",
    detail: "Bachelor of Informatics Engineering",
    period: "2020 – 2024",
    note: "GPA 3.91 / 4.00. Thesis project: Angkutin, a waste pickup app",
  },
  {
    institution: "Bangkit Academy (Google, GoTo, Traveloka)",
    detail: "Mobile Development cohort",
    period: "Feb 2023 – Aug 2023",
    note: "Android fundamentals to Jetpack Compose, plus a capstone with ML and cloud teams",
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
  { title: "GPA 3.91 / 4.00", context: "Informatics Engineering, Mikroskil University" },
  { title: "Bangkit Academy graduate", context: "Mobile Development, 2023 cohort" },
  { title: "President, BITSMIKRO", context: "Student association, 2022 – 2023" },
];

// From the CV (confirmed).
export const certifications = [
  { name: "Flutter Developer Expert", issuer: "Dicoding Indonesia", year: "2022", url: "" },
  { name: "Android Developer (Jetpack Compose)", issuer: "Bangkit Academy", year: "2023", url: "" },
  { name: "Back-End Developer (Node.js)", issuer: "Dicoding Indonesia", year: "2022", url: "" },
];
