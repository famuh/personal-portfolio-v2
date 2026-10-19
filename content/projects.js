// Single source of truth for every project shown on the site (home, /work,
// /work/[slug]). Plain data only; components decide how to render it.
import { caseStudyMeta } from "./placeholders";

// ---------------------------------------------------------------------------
// Case studies, in display order. The first four (`HOME_COUNT`) appear in the
// homepage bento; /work shows all of them.
// Fakta (role, periode, stack, tanggung jawab) diambil dari CV & data lama.
// TODO: cek narasi — `problem`, `decisions` dan `lessons` adalah draf yang
// disusun dari deskripsi lama; sesuaikan dengan cerita aslinya.
// Angka hasil & meta yang belum ada datanya → content/placeholders.js.
// ---------------------------------------------------------------------------
export const caseStudies = [
  {
    slug: "gema-plantation",
    title: "Taking palm oil plantation work off paper",
    name: "GEMA Plantation",
    kind: "Mobile + web + AI",
    summary:
      "One data flow for a palm oil plantation: an offline Android app for field supervisors, a web CMS for estate offices and management, and a sync with the company's ERP.",
    preview: [
      "Supervisors wrote in notebooks, and clerks re-typed it a day later",
      "Offline-first Android app, with NFC cards where there's no signal",
      "On-device ripeness detection, and an AI assistant in the CMS",
    ],
    role: "Software engineer and product lead: Android app, web CMS and backend",
    period: "Dec 2025 – Present",
    team: "I lead 2–4 developers (usually 2)",
    scale: "In pilot with a plantation client, development continuing",
    status: "Piloting",
    stack: ["Kotlin", "Hilt", "Room", "CameraX", "TensorFlow Lite", "YOLOv8", "NFC", "Bluetooth printing"],
    stackSecondary: {
      label: "Web CMS, backend and infrastructure",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "Motion", "Leaflet", ".NET Core", "SQL Server", "Swagger", "IIS", "NGINX", "GitHub Actions", "Third-party LLM"],
    },
    // Client app: illustration only, no real screenshots or client data.
    cover: "/assets/illustrations/gema-plantation.svg",
    coverAlt: "Illustration of a field app with a harvest work record and on-device fruit ripeness detection, an NFC card, and a web dashboard with production charts and a map",
    problem:
      "Field supervisors wrote everything in notebooks and clerks typed it into the system later, so the office saw yesterday's work at best. Paid work days were hard to verify without photos or locations. Mistakes, duplicates and buddy-punching affected wages and bonuses. Most blocks have no internet, and the gap between fruit harvested and fruit hauled was hard to trace.",
    solution:
      "The office plans the day's work in the CMS. Supervisors download it, take attendance, and record the work with photos and GPS on the phone, fully offline. Harvest is collected, delivery notes are printed over Bluetooth or written to an NFC card, and everything uploads when there's signal. The CMS turns it into dashboards and reports without anyone re-typing.",
    workflow: {
      title: "How the data flows",
      steps: [
        { title: "Plan", body: "The estate office creates and confirms the daily work plan (RKH) in the CMS." },
        { title: "Download", body: "Supervisors pull the plan and master data onto their phones." },
        { title: "Attendance", body: "Workers check in by QR code or face recognition." },
        { title: "Record", body: "Harvest or upkeep work is logged as a work record (BKM), with photos and GPS." },
        { title: "Haul", body: "Harvest is collected, and a delivery note (SPB) is printed or written to an NFC card." },
        { title: "Report", body: "Records, hauling and delivery notes upload to the CMS for dashboards and reports." },
      ],
    },
    scope: [
      {
        title: "Android app (field)",
        items: [
          "Harvest: regular and piecework, manual (per collection point) and mechanical (per lane)",
          "Upkeep: jobs, workers, output and materials used",
          "Photo per worker and GPS trail",
          "Attendance by QR code or face recognition",
          "Delivery notes via Bluetooth thermal printer or NFC card",
          "Fruit ripeness detection with the camera, on the device",
          "Offline-first, with safe retries and no duplicate uploads",
        ],
      },
      {
        title: "Web CMS (office)",
        items: [
          "Dashboards for production, tonnage, % hauled and harvester productivity",
          "Comparison with the previous day, month or date range",
          "Daily plans, work records, uncollected fruit with age indicator, hauling and delivery notes",
          "9 management reports in PDF and Excel",
          "Leaflet map of supervisor locations",
          "GapAI, an assistant on a third-party LLM that answers questions about plantation data",
          "Role-based access and dark mode",
        ],
      },
      {
        title: "Backend and integration",
        items: [
          ".NET Core APIs for the mobile app and the CMS, on SQL Server",
          "Direct connection to the ERP database to sync master data, daily plans and purchase orders",
          "Deployed on IIS behind NGINX, with CI/CD on GitHub Actions",
          "External API for clients running a different ERP",
        ],
      },
    ],
    rules: [
      "One work record number per job and block. A daily plan can produce several records.",
      "Harvest records (PN) and upkeep records (RW) are numbered separately.",
      "One work day per worker per day. Bonuses come from output.",
      "A worker already booked on another job that day triggers a warning before saving.",
      "Records lock once they reach the server.",
    ],
    responsibilities: [
      "Went on site to estates for field studies, and gathered requirements with the client and field staff.",
      "Lead the product and a small team (usually 2, up to 4 developers); estimate and plan the work.",
      "Designed the Android app to work with little or no internet.",
      "Built harvest and upkeep records, including numbering, validation, manual and mechanical harvesting, regular and piecework.",
      "Integrated TFLite ripeness detection and face recognition for attendance.",
      "Implemented NFC read and write, the delivery note flow and supervisor location tracking.",
      "Built the CMS dashboards, comparisons, 9 reports, GIS map and role-based features.",
      "Connected an LLM as an in-app assistant scoped to plantation data.",
      "Built the backend and the integration with the company ERP, plus an external API.",
      "Handled build issues, database migrations and field performance.",
      "Presented the product to clients, trained users, and support them online and on site.",
      "Designed the product brochure and presentation decks.",
    ],
    decisions: [
      {
        title: "Offline-first, with NFC as the fallback transport",
        body: "Everything is saved locally and queued. Where there's no signal at all, harvest and delivery data moves between devices on an NFC card. Uploads can be retried safely without creating duplicates.",
      },
      {
        title: "Ripeness detection on the phone",
        body: "A YOLOv8 model runs in TensorFlow Lite with a GPU delegate: tensor input and output tuned, NMS, bounding box overlay, and throttling so the camera stays smooth.",
      },
      {
        title: "Numbering that matches how the estate works",
        body: "One record per job and block, separate series for harvest and upkeep, double-booking checks, and records locked after upload. Wages and bonuses depend on it.",
      },
      {
        title: "Standalone or integrated",
        body: "Each client runs on its own server and database. The system works on its own, or syncs with the client's existing ERP when they have one.",
      },
      {
        title: "Integrate with the ERP at the database",
        body: "The .NET Core backend reads the ERP database directly, so master data, daily plans and purchase orders arrive without exports or extra middleware. Clients on a different ERP get an external API instead.",
      },
      {
        title: "One form for two harvesting methods",
        body: "Some divisions harvest manually per collection point, others mechanically per lane. Both fit one form, so supervisors don't switch screens.",
      },
    ],
    results: [
      { value: "1×", label: "recorded once in the field, no re-typing in the office" },
      { value: "9", label: "management reports, from harvest to worker performance" },
      { value: "6", label: "fruit ripeness classes detected on the phone" },
    ],
    relatedNote: "offline-first-nfc",
    resultsNote:
      "Every job now has a photo, location, unique record number and timestamp, and the chain from block to hauling to delivery note is connected. Time and cost savings will be measured during the pilot, so I'm not claiming percentages yet.",
  },
  {
    slug: "semesta-agro",
    placeholders: ["stack"],
    title: "A product website for a palm oil ERP",
    name: "SEMESTA AGRO",
    kind: "Web · B2B",
    summary:
      "Rebuilt the website of PT Semesta Agri Solusi from a single logo page into a full product site for Green Harvest Plantation, an ERP for palm oil estates, mills and head offices.",
    preview: [
      "The old site was a logo and nothing else",
      "A story that moves from what it is, to why trust it, to booking a demo",
      "An interactive explorer for an ERP that spans estate, mill and head office",
    ],
    role: "Initiated and built it: information architecture, UI design, front end and SEO",
    period: "January 2026",
    team: "In-house initiative at PT Semesta Agri Solusi",
    status: "Live",
    liveUrl: "https://semestaagro.com/",
    stack: caseStudyMeta["semesta-agro"].stack,
    cover: "/assets/opt/work/semesta-hero.webp",
    coverAlt: "Semesta Agro homepage: headline about managing plantation and mill from one platform, next to a grid of ERP modules",
    gallery: [{ src: "/assets/opt/work/semesta-scope.webp", alt: "Operational scope section: estate, mill, bulking and head office, with field photos" }],
    problem:
      "The website showed the company logo and nothing else, so it worked against the sales team. The product is a niche ERP covering estates, mills, bulking and head office, which is hard to explain quickly. The audience (plantation owners, finance directors, operations managers) expects industry terms like FFB, CPO and BKM, not generic software language. And the site didn't show up for any relevant search.",
    solution:
      "A multi-page site that tells the story in order: what the product is, why it can be trusted, and how to get a demo. Modules are organised around the client's real structure, explained with an interactive explorer and mockups, backed by client logos, field photos and a demo video, with clear calls to action and full SEO metadata.",
    workflow: {
      title: "Approach",
      steps: [
        { title: "Structure", body: "Hero, client logos, scope, modules, coverage, advantages, gallery, demo CTA, video, about and offices." },
        { title: "Simplify", body: "Modules grouped as Estate, Mill, Bulking and Head Office, with a tabbed explorer and an auto-scrolling catalogue." },
        { title: "Trust", body: "Client logos, industry-specific advantages, real field photos and a walkthrough of the BKM mobile app." },
        { title: "Convert", body: "Repeated “Contact for Demo” and “Free Consulting” CTAs, and both offices with maps and click-to-call." },
        { title: "Be found", body: "Industry keywords, canonical URL, robots, Open Graph and Twitter cards." },
      ],
    },
    responsibilities: [
      "Proposed the rebuild myself, as an initiative inside the company.",
      "Planned the information architecture and page structure.",
      "Designed the UI and built the front end.",
      "Built the interactive module explorer, catalogue, logo marquee and filterable gallery.",
      "Set up SEO and social sharing metadata.",
    ],
    decisions: [
      {
        title: "Organise by the client's business, not by feature",
        body: "Visitors see Estate, Mill, Bulking and Head Office first, so they find where the system fits their own operation before reading about modules.",
      },
      {
        title: "Speak the industry's language",
        body: "FFB, CPO, kernel extraction rate and BKM instead of generic software terms. The audience trusts vendors who already know their work.",
      },
      {
        title: "Show proof instead of adjectives",
        body: "Client logos, photos from real estates and mills, and a video of the mobile app do more than any tagline.",
      },
    ],
    results: [
      { value: "10", label: "sections telling one story, from hero to offices" },
      { value: "8", label: "ERP modules in the interactive explorer" },
      { value: "2", label: "offices with maps and click-to-call" },
    ],
    resultsNote:
      "A logo-only page became a product website the sales team can share in every conversation, and it now brings in requests for demos and presentations.",
  },
  {
    slug: "gema-factory",
    title: "A maintenance app for a palm oil mill",
    name: "GEMA Factory",
    kind: "Mobile app",
    summary:
      "A Flutter app that replaces paper work orders in a palm oil mill: scan a machine's QR code, report an issue with readings and photos, assign mechanics, and track the job to completion.",
    preview: [
      "Breakdown reports arrived late, and paper work orders got lost",
      "Scan the machine's QR code to see its history and report an issue",
      "Readings are flagged Normal, Warning or Critical automatically",
    ],
    role: "Software engineer and product lead (Flutter): architecture, UI system and features",
    period: "2026 – Present",
    team: "The GEMA team I lead (2–4 developers)",
    status: "In active development",
    stack: ["Flutter", "Dart", "Provider", "Dio", "Freezed", "dartz", "mobile_scanner", "REST API"],
    cover: "/assets/illustrations/gema-factory.svg",
    coverAlt: "Illustration of a maintenance app scanning a machine QR code, an issue form with readings marked normal, warning and critical, and a list of work orders",
    problem:
      "A mill runs dozens to hundreds of machines. Breakdown reports came in late or went missing, machine history wasn't recorded, inspection readings weren't documented, and supervisors couldn't see progress in the field. Paper work orders were easy to lose, and assigning mechanics was slow.",
    solution:
      "Technicians scan the QR code on a machine to open its details and work order history, then report an issue with actual readings, photos and notes. Each reading is checked against its threshold. Supervisors turn issues into work orders, assign a mechanic per item, and follow the status from open to completed.",
    scope: [
      {
        title: "Features",
        items: [
          "QR scanner with scan line, torch and haptic feedback",
          "Issue reports with readings, a photo per reading and up to 5 general photos",
          "Preventive maintenance, approvals and workshop activities",
          "Work orders across 11 types, status from Open to TECO to Completed",
          "A mechanic per work order item, with a searchable picker",
          "Daily inspection checklists with parameters from the API",
          "Dashboard with active work orders, pending issues and completed jobs",
        ],
      },
      {
        title: "Roles",
        items: [
          "Technician: scan, report issues, daily tasks",
          "Supervisor: approve, assign mechanics, monitor",
          "Manager: supervisor rights with wider access",
          "Management: dashboard and reports",
        ],
      },
    ],
    responsibilities: [
      "Set up the feature-based architecture, state management and data layer.",
      "Built a reusable component system (buttons, fields, cards, media picker, submit bar).",
      "Built the QR scanner, issue reporting, work orders and inspections.",
      "Integrated the REST API with auth handling.",
      "Designed the product brochure and presentation material.",
    ],
    decisions: [
      {
        title: "Feature-based clean architecture",
        body: "Each feature has its own UI, state and data source. Provider for state (MVVM-lite), repositories returning Either<Failure, T>, and immutable Freezed models.",
      },
      {
        title: "Thresholds come from the server",
        body: "Each parameter has a min, normal and max value from the API, so the app flags readings without hard-coding any machine.",
      },
      {
        title: "Upload photos first, then submit",
        body: "Images go to their own endpoint before the issue is posted, so a slow upload never leaves a half-saved report.",
      },
      {
        title: "One screen for adding and editing",
        body: "The same form handles both, keeps new photos apart from ones already on the server, and won't submit if nothing changed.",
      },
    ],
    results: [
      { value: "11", label: "work order types, from repair to calibration" },
      { value: "4", label: "roles with their own permissions" },
      { value: "3", label: "status levels per reading: Normal, Warning, Critical" },
    ],
    resultsNote: "Still in development, so there are no usage numbers yet.",
  },
  {
    slug: "dmb-kiosk",
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
    team: "Team of 5: backend, project manager, mobile (me), admin, IT support",
    status: "Piloted, rollout on hold",
    stack: ["Flutter", "Dart", "REST API", "Sentry", "Google Play"],
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
    results: [
      { value: "1", label: "hospitality outlet piloted" },
      { value: "2", label: "device types from one codebase: TV kiosk and tablet" },
      { value: "4", label: "other management systems I built features for" },
    ],
    resultsNote: "The kiosk went live in one hospitality outlet. A wider rollout was put on hold because of the company's budget.",
    lessons:
      "A kiosk is closer to signage than to an app. Next time I'd watch people use it on site before drawing the first wireframe, not after the first release.",
  },
  {
    slug: "p3-system",
    title: "Purchasing, sales and inventory in one system",
    name: "P3 System",
    kind: "Analysis + full-stack",
    summary:
      "For a business in POS and stock management, I mapped how purchasing, sales and stock were handled, then built one web app to replace the spreadsheets. Process diagrams first, API last.",
    preview: [
      "Spreadsheets that never agreed on stock levels",
      "Requirement sessions, process maps and a data model before any code",
      "Stock is calculated from transactions instead of typed in",
    ],
    role: "Systems analyst and full-stack developer (freelance)",
    period: "2025",
    status: "Built, not in use yet",
    stack: ["Next.js", "TypeScript", "Zustand", "TanStack", "Tailwind CSS", "shadcn/ui", "Bun", "Hono", "Prisma", "Zod", "MySQL", "Docker", "GitHub Actions"],
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
    results: [
      { value: "3", label: "processes in one system: purchasing, sales, inventory" },
      { value: "1", label: "set of validation schemas shared by front and back end" },
      { value: "0", label: "stock fields edited by hand: stock comes from transactions" },
    ],
    resultsNote: "The system is built and documented, but the business hasn't started using it yet.",
    lessons:
      "The diagrams turned out to be the most useful thing I delivered. They settled arguments before there was any code to argue about, so I now start every client project with a one-page process map.",
  },
  {
    slug: "angkutin",
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
    role: "Developer: app architecture, roles and the admin panel",
    period: "2024",
    team: "Undergraduate thesis project",
    status: "Thesis project",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Crashlytics", "OpenStreetMap"],
    cover: "/assets/opt/work/angkutin-prev.webp",
    coverAlt: "Angkutin mobile screens: waste report form, map of pickup points and request status",
    gallery: [{ src: "/assets/opt/work/angkutin-admin.webp", alt: "Angkutin admin dashboard summarising reports, users and pickup requests" }],
    problem:
      "Pickup requests and dumping reports came in by phone and chat. Requests got lost, residents never heard back, and coordinators had no overview.",
    solution:
      "Separate apps for residents and collectors, plus an admin panel. Each role only sees what it can act on. Every change syncs in real time through Firestore, and locations are pinned on OpenStreetMap.",
    responsibilities: [
      "Defined the three roles and their permissions.",
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
    results: [
      { value: "3", label: "roles: residents, collectors and admins" },
      { value: "2", label: "mobile apps plus a web admin panel" },
      { value: "Live", label: "status updates through Firestore listeners" },
    ],
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

export const HOME_COUNT = 4;
export const featuredCaseStudies = caseStudies.slice(0, HOME_COUNT);

export const projectCount = caseStudies.length + archive.length;

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
