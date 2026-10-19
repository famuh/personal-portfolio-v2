// Single source of truth for every project shown on the site (home, /work,
// /work/[slug]). Plain data only; components decide how to render it.
import { caseStudyResults, caseStudyMeta } from "./placeholders";

// ---------------------------------------------------------------------------
// Case studies — the four projects that best show consulting, analysis,
// delivery and leadership. Order = order on the homepage.
// Fakta (role, periode, stack, tanggung jawab) diambil dari CV & data lama.
// TODO: cek narasi — `problem`, `decisions` dan `lessons` adalah draf yang
// disusun dari deskripsi lama; sesuaikan dengan cerita aslinya.
// Angka hasil & meta yang belum ada datanya → content/placeholders.js.
// ---------------------------------------------------------------------------
export const caseStudies = [
  {
    slug: "dmb-kiosk",
    placeholders: ["results", "team"],
    title: "A self-ordering kiosk for a hospitality group",
    name: "DMB Kiosk",
    kind: "Product delivery",
    summary:
      "The self-ordering app for Android TV kiosks and tablets in DNA Group's food and beverage outlets. I designed the flow and built the app.",
    preview: [
      "Counter queues at peak hours, and staff re-typing orders",
      "One Flutter app for TV kiosks and tablets",
      "Large touch targets and an order summary that's always visible",
    ],
    role: "Flutter developer. Owned UI/UX, API integration and state management",
    period: "Oct 2024 – Sep 2025",
    team: caseStudyMeta["dmb-kiosk"].team,
    status: "Shipped to Google Play",
    stack: ["Flutter", "Dart", "REST API", "Google Play"],
    // Illustration: the original screenshot was on Firebase Storage, which now
    // returns HTTP 402. TODO: ganti dengan screenshot asli kiosk (simpan di public/assets/).
    cover: "/assets/illustrations/dmb-kiosk.svg",
    coverAlt: "Illustration of the self-ordering kiosk: a menu grid and order summary on a landscape TV screen, with a tablet showing the same flow",
    problem:
      "DNA Group runs hotels, entertainment venues and F&B outlets in several Indonesian cities. At peak hours customers queued at the counter, staff re-typed orders into the POS, and every outlet had different hardware.",
    solution:
      "A self-ordering app for Android TV kiosks and tablets. One Flutter codebase, with layouts tuned for each screen size, connected to the group's ordering and POS APIs. The state layer is kept simple so the flow behaves the same at every outlet.",
    responsibilities: [
      "Turned the wireframes into an ordering flow that works for someone standing at a kiosk for the first time.",
      "Integrated the ordering API, including error and retry states.",
      "Designed the state architecture shared by the TV and tablet layouts.",
      "Released and maintained the app on Google Play with the group's other apps.",
    ],
    decisions: [
      {
        title: "One codebase for two kinds of device",
        body: "Kiosks and tablets share business logic and state. Only layout and input handling differ, so there is less to test and every outlet runs the same version.",
      },
      {
        title: "Built for first-time, standing users",
        body: "Big touch targets, no hidden gestures, and the order summary always on screen. Nobody reads a manual at a kiosk.",
      },
    ],
    results: caseStudyResults["dmb-kiosk"],
    lessons:
      "A kiosk is closer to signage than to an app. Next time I'd watch people use it on site before drawing the first wireframe, not after the first release.",
  },
  {
    slug: "p3-system",
    placeholders: ["results", "team", "period", "duration", "status"],
    title: "Purchasing, sales and inventory in one system",
    name: "P3 System",
    kind: "Analysis + full-stack",
    summary:
      "I mapped how a business handled purchasing, sales and stock, then built one web app to replace three spreadsheets. Process diagrams first, API last.",
    preview: [
      "Three spreadsheets that never agreed on stock levels",
      "Requirement sessions, process maps and a data model before any code",
      "Stock is calculated from transactions instead of typed in",
    ],
    role: "Systems analyst and full-stack developer (freelance)",
    period: caseStudyMeta["p3-system"].year,
    duration: caseStudyMeta["p3-system"].duration,
    team: caseStudyMeta["p3-system"].team,
    status: caseStudyMeta["p3-system"].status,
    stack: ["Next.js", "TypeScript", "Zustand", "TanStack", "Tailwind CSS", "shadcn/ui", "Bun", "Hono", "Prisma", "Zod", "MySQL"],
    cover: "/assets/opt/work/p3.webp",
    coverPosition: "left top",
    coverAlt: "P3 system dashboard with purchasing, sales and inventory summary cards and a transactions table",
    problem:
      "Purchasing, sales and stock were tracked in separate spreadsheets. Stock counts drifted, the same transaction got typed twice, and nobody could say with confidence what was on the shelf.",
    solution:
      "After requirement interviews, process diagrams and wireframes, I built one platform where every purchase and sale updates stock automatically. A typed API (Bun, Hono, Zod, Prisma) sits behind a Next.js front end, so validation rules are written once.",
    responsibilities: [
      "Ran the requirement sessions and mapped the current and target process.",
      "Produced the wireframes, process diagrams and data model.",
      "Built the front end (Next.js, TypeScript, Zustand, TanStack).",
      "Built the API and database (Bun, Hono, Prisma, MySQL).",
    ],
    decisions: [
      {
        title: "Stock is calculated, never typed",
        body: "Stock levels come from purchase and sale records instead of being edited by hand. That removes the most common spreadsheet mistake entirely.",
      },
      {
        title: "Shared validation with Zod",
        body: "The same schemas check forms in the browser and requests on the server, so the rules can't drift apart.",
      },
    ],
    results: caseStudyResults["p3-system"],
    lessons:
      "The diagrams turned out to be the most useful thing I delivered. They settled arguments before there was any code to argue about, so I now start every client project with a one-page process map.",
  },
  {
    slug: "angkutin",
    placeholders: ["results", "team", "period", "duration", "status"],
    title: "A waste pickup app for residents and collectors",
    name: "Angkutin",
    kind: "Mobile + admin panel",
    summary:
      "Residents request pickups and report illegal dumping. Collectors see what to do next. Admins see everything. Two Flutter apps and a web panel on Firebase.",
    preview: [
      "Requests by phone and chat got lost, and nobody knew their status",
      "Three roles, each seeing only what they need to act on",
      "Status updates in real time through Firestore",
    ],
    role: "Mobile developer. App architecture, roles and the admin panel",
    period: caseStudyMeta.angkutin.year,
    duration: caseStudyMeta.angkutin.duration,
    team: caseStudyMeta.angkutin.team,
    status: caseStudyMeta.angkutin.status,
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "OpenStreetMap"],
    cover: "/assets/opt/work/angkutin-prev.webp",
    coverAlt: "Angkutin mobile screens: waste report form, map of pickup points and request status",
    gallery: [{ src: "/assets/opt/work/angkutin-admin.webp", alt: "Angkutin admin dashboard summarising reports, users and pickup requests" }],
    problem:
      "Pickup requests and dumping reports came in by phone and chat. Requests got lost, residents never heard back, and coordinators had no overview.",
    solution:
      "Separate apps for residents and collectors, plus an admin panel. Each role only sees what it can act on. Every change syncs in real time through Firestore, and locations are pinned on OpenStreetMap.",
    responsibilities: [
      "Defined the three roles and their permissions with the team.",
      "Built the Flutter mobile app and the Flutter web admin panel.",
      "Set up the Firestore data structure and real-time listeners.",
    ],
    decisions: [
      {
        title: "OpenStreetMap instead of a paid map API",
        body: "No per-request cost for a community project with an uncertain budget. The price was a bit more work on geocoding.",
      },
      {
        title: "Real-time from the start",
        body: "For residents the status is the product. With Firestore listeners they see a collector is on the way without refreshing.",
      },
    ],
    results: caseStudyResults.angkutin,
    lessons:
      "Two-sided apps depend on the supply side. Next time I'd interview collectors as early as residents.",
  },
  {
    slug: "bekup-facilitator",
    title: "Teaching Flutter in a national startup programme",
    name: "BEKUP × Dicoding",
    kind: "Mentoring",
    summary:
      "I facilitated a cohort of Flutter learners in BEKUP, the Ministry of Creative Economy's startup programme run with Dicoding.",
    preview: [
      "Learners ranged from career-switchers to working developers",
      "Weekly sessions, per-person progress tracking and journal reviews",
      "Pairs that mix experience levels, so learners teach each other",
    ],
    role: "Flutter facilitator (part-time, remote)",
    period: "Jul 2025 – Nov 2025",
    team: "Facilitators with Dicoding instructors",
    status: "Programme completed",
    stack: ["Flutter", "Dart", "Pair programming", "Learning design"],
    cover: "/assets/illustrations/bekup-cohort.svg",
    coverAlt: "Illustration of a facilitator connected to pairs of learners, with weekly sessions on a timeline",
    problem:
      "Participants ranged from career-switchers to working developers. At a single pace half the room is bored and the other half falls behind, and every journal had to meet strict programme standards.",
    solution:
      "Weekly sessions with progress tracked per person, structured journal reviews, and pair programming that mixes experience levels so learners help each other.",
    responsibilities: [
      "Ran weekly online sessions and tracked each participant's progress.",
      "Reviewed and validated participant journals against programme standards.",
      "Supported the instructor-led training sessions.",
      "Introduced pair programming and group exercises.",
    ],
    decisions: [
      {
        title: "Pair people across experience levels",
        body: "The fastest learners ended up explaining things. That deepened their own understanding and unblocked others without waiting for a facilitator.",
      },
    ],
    results: [
      { value: "15+", label: "training sessions supported" },
      { value: "100%", label: "journals met programme standards" },
      { value: "Weekly", label: "progress check per participant" },
    ],
    lessons:
      "Teaching is a lot like requirements analysis: work out what someone actually needs to understand, then find the shortest way there.",
  },
];

// ---------------------------------------------------------------------------
// Archive — other shipped work, experiments and learning projects.
// ---------------------------------------------------------------------------
// TODO: demo video Food Recognizer & Gemini chatbot dulu di Firebase Storage
// (sekarang HTTP 402). Upload ulang (mis. YouTube/Drive) lalu isi `href` +
// `linkLabel: "Demo video"` pada entri terkait.
export const archive = [
  {
    name: "Alpha Coffee Medan",
    group: "Web",
    description:
      "Ordering site for a local coffee shop: customers build their order online and send it straight to WhatsApp. No marketplace fees.",
    stack: ["Next.js", "Zustand", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/assets/opt/work/alpha-coffee.webp",
    href: "https://alpha-coffee-psi.vercel.app/",
    linkLabel: "Live site",
  },
  {
    name: "Geofenced photo attendance",
    group: "Mobile",
    description:
      "Employee attendance for a private company with location-based validation and camera capture; separate employee and admin roles.",
    stack: ["Flutter", "Google Maps", "Flask", "FastAPI"],
    image: "/assets/opt/work/absence-preview.webp",
  },
  {
    name: "Food Recognizer",
    group: "Mobile",
    description:
      "Identifies a dish from a photo with an on-device TFLite model, fetches a recipe, and estimates nutrition with Gemini 2.5 Flash.",
    stack: ["Flutter", "TensorFlow Lite", "Firebase", "Gemini API"],
    image: "/assets/opt/work/food-recognizer.webp",
  },
  {
    name: "Multimodal Gemini chatbot",
    group: "Mobile",
    description: "Chat app that combines text and image input so the model can reason about what the user is looking at.",
    stack: ["Flutter", "Gemini API"],
    image: "/assets/opt/work/chatbot-gemini-prev.webp",
  },
  {
    name: "Al-Qur'an",
    group: "Mobile",
    description: "Read and study the Qur'an with translation, tafsir and full-text search.",
    stack: ["Flutter"],
    image: "/assets/opt/work/alquranapp.webp",
  },
  {
    name: "Livestock & distributor system",
    group: "Design",
    description:
      "Integrated livestock and distributor management designed in Figma: user flows, data structure and a high-fidelity prototype.",
    stack: ["Figma", "System design"],
  },
  {
    name: "Preloved marketplace prototype",
    group: "Design",
    description: "Multi-role thrifting platform prototype covering seller, buyer and transaction flows.",
    stack: ["Figma", "UX research"],
  },
  {
    name: "Diatrofi",
    group: "Learning",
    description: "Food-intake tracker with healthy recipes and health articles.",
    stack: ["Flutter"],
    image: "/assets/opt/work/diatrofi-preview.webp",
  },
  {
    name: "Movies",
    group: "Learning",
    description: "Now showing, upcoming and top-rated films with search, built on TMDB with CI via Codemagic.",
    stack: ["Flutter", "TMDB", "Codemagic", "Firebase"],
    image: "/assets/opt/work/watch-prev.webp",
  },
  {
    name: "ThreadHub",
    group: "Learning",
    description: "Discussion forum with threads and replies.",
    stack: ["React", "Redux", "ESLint"],
    image: "/assets/opt/work/thread-web.webp",
  },
  { name: "StorySpot", group: "Learning", description: "Photo stories with a map of nearby posts.", stack: ["Kotlin"] },
  { name: "GitLookup", group: "Learning", description: "Search GitHub users and browse profiles.", stack: ["Kotlin", "GitHub API"] },
  {
    name: "User management module",
    group: "Learning",
    description: "CRUD module for user data and profiles.",
    stack: ["React", "Express", "Bulma", "Axios", "MySQL"],
  },
  {
    name: "Covid-19 world tracker",
    group: "Learning",
    description: "Pandemic numbers from public health sources.",
    stack: ["HTML", "CSS", "Express"],
    image: "/assets/opt/work/web-covid-preview.webp",
  },
];

export const archiveGroups = ["Web", "Mobile", "Design", "Learning"];

// Visual design work (posters, brochures, templates), mostly for BITSMIKRO.
export const designGallery = [
  { src: "/assets/opt/design/rekruitmen-bits.webp", alt: "BITSMIKRO recruitment banner", w: 1600, h: 533 },
  { src: "/assets/opt/design/brosur-alpha.webp", alt: "Alpha Coffee brochure", w: 1600, h: 2263 },
  { src: "/assets/opt/design/pengabdian.webp", alt: "Community service programme poster", w: 1080, h: 1080 },
  { src: "/assets/opt/design/fais.webp", alt: "FAIS event poster", w: 1600, h: 2263 },
  { src: "/assets/opt/design/template-bitsmikro.webp", alt: "BITSMIKRO social media template", w: 1080, h: 1080 },
  { src: "/assets/opt/design/data-science.webp", alt: "Data science seminar poster", w: 763, h: 1080 },
  { src: "/assets/opt/design/security.webp", alt: "Cyber security seminar poster", w: 1600, h: 2263 },
  { src: "/assets/opt/design/lab.webp", alt: "Computer lab announcement banner", w: 1200, h: 630 },
];

export const projectCount = caseStudies.length + archive.length;

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
