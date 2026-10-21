// Single source of truth for every project shown on the site (home, /work,
// /work/[slug]). Plain data only; components decide how to render it.

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
    team: "I lead 2–4 developers (usually 2) and coordinate with implementators and clients",
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
    gallery: [
      { src: "/assets/opt/work/gemaplantation_1.webp", alt: "GEMA Plantation cover. Demo data." },
      { src: "/assets/illustrations/gema-mobile.svg", alt: "Android app screens in flow order: daily work plan, attendance by face, work records, on-device ripeness detection, and harvest collection with an NFC delivery note. Demo data." },
      { src: "/assets/illustrations/gema-cms.svg", alt: "Web CMS: analytics dashboard with harvest KPIs and trends, the GapAI assistant, and the uncollected fruit view in dark mode. Demo data." },
    ],
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
    title: "Company website for a palm oil IT-Consultant Company",
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
    stack: ["Next.js", "React", "Tailwind CSS", "Motion", "Plesk"],
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
    team: "The GEMA team I lead (2–4 developers) and implementators, plus the client mill staff",
    status: "In active development",
    stack: ["Flutter", "Dart", "Provider", "Dio", "Freezed", "dartz", "mobile_scanner", "REST API"],
    cover: "/assets/illustrations/gema-factory.svg",
    coverAlt: "Illustration of a maintenance app scanning a machine QR code, an issue form with readings marked normal, warning and critical, and a list of work orders",
    gallery: [
      { src: "/assets/opt/work/gemafactory_1.webp", alt: "App screens. Demo Data" },
      { src: "/assets/illustrations/gema-factory-mobile.svg", alt: "App screens in flow order: dashboard with work orders and pending issues, scanning a machine QR code, machine details with work order history, and a role-based profile. Demo data." },
      { src: "/assets/opt/design/gemafactory_brochure.webp", alt: "GEMA Factory product brochure. Demo data." },
    ],
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
    // Facts from the project description. Screenshots in illustrations/material
    // are source material only; the published images are redrawn with demo data.
    slug: "onetap-spb",
    title: "One tap from NFC card to database at the mill weighbridge",
    name: "OneTap-SPB",
    kind: "Desktop app + NFC",
    summary:
      "A Windows app at the mill weighbridge that reads a delivery note (SPB) from the NFC card the truck driver brings from the estate, checks it, and saves it to the company database in one tap. No re-typing.",
    preview: [
      "Delivery notes were re-typed while trucks queued at the weighbridge",
      "Tap the card on the reader, the data is checked and saved",
      "Duplicates are caught and shown side by side before anything changes",
    ],
    role: "Built it end to end: card reading, data layer, desktop UI and packaging",
    period: "2026",
    status: "Ready to deploy",
    stack: ["Python", "CustomTkinter", "PC/SC", "NFC", "ACR122U", "SQL Server", "pyodbc", "PyInstaller"],
    placeholders: ["role", "period", "status"],
    cover: "/assets/illustrations/onetap-spb.svg",
    coverAlt: "Illustration of an NFC delivery card tapped on a USB reader at the weighbridge, a palm fruit truck, and the OneTap-SPB window showing the card's delivery note saved to the database. Demo data.",
    gallery: [
      { src: "/assets/illustrations/onetap-spb-history.svg", alt: "OneTap-SPB history tab: delivery notes filtered by date and searched by note number or plate, with the selected note's blocks, harvest and loose fruit, and a dialog comparing a duplicate card with the saved data. Demo data." },
      { src: "/assets/illustrations/onetap-spb-card.svg", alt: "How the text on the card becomes data: the plate and note number as the header, then one row per block with planting year, division, harvest and loose fruit, saved as a header and detail rows in one transaction. Demo data." },
    ],
    problem:
      "Every truck of palm fruit leaves the estate with a delivery note (SPB): the truck's plate, the note number and a summary of the harvest per block. The estate writes it to an NFC card and the driver carries it to the mill. At the mill, someone had to get that data into the company system while trucks queued at the weighbridge. Typing it by hand is slow, numbers get mistyped, the same note can be entered twice, and nobody can tell later who entered or changed what.",
    solution:
      "OneTap-SPB runs on the weighbridge PC with a USB NFC reader. The operator signs in with their employee ID, and when a truck arrives they tap the driver's card. The app reads the card, checks every field, and saves the note to SQL Server. If the note is already in the database, it shows the saved data next to the card's data and lets the operator update or keep it. A history tab finds any note by date, note number or plate.",
    workflow: {
      title: "From estate to database",
      steps: [
        { title: "Estate", body: "The delivery note is issued and its text is written to an NFC card. That part runs in another system." },
        { title: "Haul", body: "The driver carries the fruit and the card to the mill." },
        { title: "Tap", body: "At the weighbridge, the operator taps the card on the reader. The app notices the card on its own." },
        { title: "Check", body: "The card is read and parsed. A card with a wrong field is rejected with every error listed at once." },
        { title: "Save", body: "Header and harvest rows are saved in one transaction, stamped with the operator's ID and the time." },
        { title: "Find", body: "Staff search the history by date, note number or plate and open the details." },
      ],
    },
    scope: [
      {
        title: "Weighbridge app",
        items: [
          "Sign in with the client's own employee table, configured per client",
          "Live reader and database status in the header",
          "Read card: card UID, card type, plate, note number and harvest per block with totals",
          "Duplicate dialog comparing saved data with the card, with Update or Cancel",
          "Session log of every card read, saved, rejected or skipped",
          "History with search and Today, 7 days, 30 days or All",
        ],
      },
      {
        title: "Card and data",
        items: [
          "MIFARE Ultralight and NTAG, MIFARE Classic, and NFC Forum Type 4 cards",
          "NDEF text record parsed into a header and a list of harvest rows",
          "Header and detail tables in SQL Server, with SQL scripts for new installs and migration",
          "PCs without a reader can still open the history",
        ],
      },
    ],
    rules: [
      "The note number is the key. The same note is never saved twice.",
      "Each harvest row has exactly five fields, and harvest and loose fruit must be numbers of zero or more.",
      "An invalid card is not saved at all.",
      "Changing a saved note needs the operator's confirmation, and records who did it and when.",
      "Only registered employees can use the app.",
    ],
    decisions: [
      {
        title: "Talk to the reader directly",
        body: "The app calls the Windows smart card API (PC/SC) through ctypes, with no third-party NFC library. It watches the reader for cards, reads each card type the right way, and reconnects on its own if the reader is unplugged.",
      },
      {
        title: "Let the database catch duplicates",
        body: "The note number is the primary key. A save that hits it opens a comparison instead of failing, so two weighbridge PCs can never create the same note twice.",
      },
      {
        title: "The screen never freezes",
        body: "Card reading and queries run on background threads that report to the UI through a queue. Each thread has its own database connection that reconnects when the network drops.",
      },
      {
        title: "Configure per client, not per build",
        body: "The database connection and the employee table used for sign-in live in a config file next to the app. A new client or a new server needs an edited file, not a new build.",
      },
    ],
    responsibilities: [
      "Mapped the flow from estate to weighbridge and the scope of the app.",
      "Built card reading over PC/SC for three card families, and the NDEF parser.",
      "Designed the delivery note format check and the SQL Server schema, with install and migration scripts.",
      "Built the save, duplicate and update logic in single transactions with parameterised queries.",
      "Built the desktop UI: sign in, read card, history, duplicate dialog and session log.",
      "Packaged it as a Windows app with PyInstaller, plus a command-line version for diagnosis.",
    ],
    results: [
      { value: "1", label: "tap to move a delivery note from card to database" },
      { value: "0", label: "fields typed by hand at the weighbridge" },
      { value: "3", label: "card families supported by the same reader" },
    ],
    relatedNote: "why-nfc-for-delivery-notes",
    resultsNote: "The app is ready for the weighbridge, so there are no usage numbers yet. What it guarantees is structural: no re-typing, no duplicate notes, and a name and time on every change.",
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
      "For a retail business with several outlets, I mapped how purchasing, sales and stock were handled, then built one web app to replace the spreadsheets. Each outlet sees its own stock, and stock only changes through a sale, a purchase or a stock opname.",
    preview: [
      "Spreadsheets that never agreed on stock, across several outlets",
      "Sales take stock out, purchases put it in, opname corrects it with a numbered record",
      "A minimum stock per item flags what needs reordering",
    ],
    role: "Systems analyst and full-stack developer (freelance)",
    period: "2025",
    status: "Built, not in use yet",
    stack: ["Next.js", "TypeScript", "Zustand", "TanStack", "Tailwind CSS", "shadcn/ui", "Bun", "Hono", "Prisma", "Zod", "MySQL", "Docker", "GitHub Actions"],
    cover: "/assets/opt/work/p3.webp",
    coverPosition: "left top",
    coverAlt: "P3 admin dashboard: the sales list filtered by date, with the menu for cashier, sale, products, minimum stock, opname, purchase requests, buying, users and suppliers",
    gallery: [
      { src: "/assets/illustrations/p3-stock-flow.svg", alt: "How stock moves in P3: one company with several outlets, a stock card for one item at the active outlet where a purchase adds stock, sales take it out and an opname corrects it, and the minimum stock list with an item whose minimum is switched off. Demo data." },
      { src: "/assets/illustrations/p3-opname.svg", alt: "A numbered stock opname record for one outlet: system quantity, counted quantity and the difference per item, with the resulting stock adjustment up or down. Demo data." },
    ],
    problem:
      "Purchasing, sales and stock were tracked in separate spreadsheets, and the business runs more than one outlet. Stock counts drifted, the same transaction got typed twice, each outlet's numbers lived in a different file, and nobody could say with confidence what was on the shelf, or why the shelf and the spreadsheet disagreed.",
    solution:
      "After requirement interviews, process diagrams and wireframes, I built one platform for the whole company. Every screen is scoped to an outlet. A sale at the cashier takes stock out, a purchase from a supplier puts it in, and items that reach their minimum stock show up on their own list. When the count in the warehouse doesn't match the system, a stock opname records both numbers and adjusts the difference under its own document number.",
    workflow: {
      title: "How stock moves",
      steps: [
        { title: "Add the item", body: "Each product gets a minimum stock when it's added. It can be changed later, or switched off for items that are always in supply." },
        { title: "Buy", body: "Purchase requests become purchases from a supplier. Receiving them adds stock at the outlet." },
        { title: "Sell", body: "Each sale at the cashier takes the sold quantity out of the outlet's stock." },
        { title: "Watch the minimum", body: "Items at or below their minimum appear on the minimum stock list, so reordering starts before the shelf is empty." },
        { title: "Count", body: "A stock opname shows the system quantity per item. Staff enter what they actually counted and see the difference." },
        { title: "Adjust", body: "Posting the opname creates a numbered record and moves stock up or down by the difference." },
      ],
    },
    scope: [
      {
        title: "Modules",
        items: [
          "Cashier and sales history",
          "Purchase requests, purchases and suppliers",
          "Products with minimum stock",
          "Minimum stock list",
          "Stock opname with numbered adjustment records",
          "Dashboard and user management",
        ],
      },
      {
        title: "Multi-outlet",
        items: [
          "One company, any number of outlets",
          "Stock is kept per item per outlet",
          "Lists, numbers and reports show the active outlet's data",
        ],
      },
    ],
    rules: [
      "Stock changes only through a sale (out), a purchase (in) or a stock opname (in or out).",
      "Each outlet has its own stock; data is always shown for one outlet.",
      "Minimum stock is set when an item is added, can be edited, and can be switched off for items that are always available.",
      "Every opname gets its own number and keeps the system quantity, the counted quantity and the difference per item.",
    ],
    responsibilities: [
      "I own the product :)",
      "Ran the requirement sessions and mapped the current and target process.",
      "Produced the wireframes, process diagrams and data model, with stock kept per outlet.",
      "Designed the stock rules: sales, purchases, minimum stock and stock opname.",
      "Built the front end (Next.js, TypeScript, Zustand, TanStack).",
      "Built the API and database (Bun, Hono, Prisma, MySQL).",
    ],
    decisions: [
      {
        title: "Stock is calculated, never typed",
        body: "Stock levels come from sale, purchase and opname records instead of being edited by hand. That removes the most common spreadsheet mistake entirely.",
      },
      {
        title: "Corrections are documents too",
        body: "Real shelves drift from the system: breakage, expiry, miscounts. Instead of letting someone overwrite a number, an opname records what the system said, what was counted and the difference, under its own number. Every correction can be traced later.",
      },
      {
        title: "The outlet is part of every query",
        body: "Stock, sales and purchases all belong to an outlet, so one company can add outlets without mixing their numbers, and each outlet only sees its own data.",
      },
      {
        title: "A minimum that can be switched off",
        body: "Not every item needs a reorder alert. Items that are always in supply have their minimum switched off, so the minimum stock list only shows what actually needs action.",
      },
      {
        title: "Shared validation with Zod",
        body: "The same schemas check forms in the browser and requests on the server, so the rules can't drift apart.",
      },
    ],
    results: [
      { value: "3", label: "ways stock can change: sale, purchase, opname" },
      { value: "1", label: "numbered record for every stock correction" },
      { value: "0", label: "stock fields edited by hand" },
    ],
    resultsNote: "The system is built and documented, but the business hasn't started using it yet.",
    lessons:
      "The diagrams turned out to be the most useful thing I delivered. They settled arguments before there was any code to argue about, so I now start every client project with a one-page process map.",
  },
  {
    // Everything here comes from the use case and class diagrams, nothing more.
    slug: "dapur360",
    title: "Ordering, kitchen and stock for a vegan restaurant",
    name: "Dapur360",
    kind: "System analysis",
    summary:
      "A restaurant system designed around the table QR code: customers order from their phone, the cashier confirms, the kitchen works a queue, and every sale draws ingredients from stock through the menu's recipe.",
    preview: [
      "Orders, kitchen and ingredient stock tracked in different places",
      "Use cases for four roles and a 14-entity data model",
      "Stock moves through recipes and purchase batches",
    ],
    role: "Systems analyst: use case diagram and class diagram",
    status: "Design and analysis",
    stack: ["System analysis", "Use case diagram", "Class diagram", "POS", "QR self-ordering"],
    cover: "/assets/illustrations/dapur360.svg",
    coverAlt: "Dapur360 design board: customer, cashier, kitchen and owner with their use cases, the core data model linking tables, orders, menu recipes, ingredients and stock, and the order status from created to done",
    gallery: [
      { src: "/assets/opt/work/dapur360_usecase.webp", alt: "Use case diagram of Dapur360: the customer scans the table QR, orders, edits and pays; the cashier confirms orders and forwards them to the kitchen; the kitchen sees the queue and updates status; the owner manages purchasing, inventory, menu data, reports and users.", fit: "contain", ratio: "4168 / 3048" },
      { src: "/assets/opt/work/dapur360_erd.webp", alt: "Class diagram of Dapur360 with 14 classes: table, user, order, order item, transaction, menu category, menu, recipe, ingredient, supplier, purchase, purchase item, stock in and stock out.", fit: "contain", ratio: "3 / 4" },
    ],
    problem:
      "In a restaurant, orders, payments, kitchen work and ingredient stock easily end up in separate places. Dapur360 is a design for keeping them in one system, so the owner can see what each sale uses and what needs restocking.",
    solution:
      "One system for four roles. Each table has its own QR code, so customers open the menu, order, edit and pay without an account. The cashier confirms the order and forwards it to the kitchen, which works through a queue and marks each order done. Behind the menu, every item has a recipe of ingredients, so sales draw stock automatically, while purchases from suppliers come in as stock batches.",
    workflow: {
      title: "From table to stock",
      steps: [
        { title: "Scan the table", body: "The QR code carries the table's token, so the order is tied to the table without a login." },
        { title: "Order and pay", body: "The customer builds the order, can still edit it, and pays. The transaction stores the payment method and prints a receipt." },
        { title: "Confirm", body: "The cashier accepts and confirms the order, or cancels it." },
        { title: "Kitchen queue", body: "Confirmed orders are forwarded to the kitchen, which updates each one until it's done." },
        { title: "Stock out", body: "Each order item draws its ingredients through the menu's recipe, taken from a specific stock-in batch." },
        { title: "Restock", body: "The owner records purchases from suppliers and uploads the receipt; purchased ingredients come in as stock in." },
      ],
    },
    scope: [
      {
        title: "Roles and use cases",
        items: [
          "Customer: scan the QR and view the menu, place, edit and pay for an order",
          "Cashier: accept and confirm orders, forward them to the kitchen",
          "Kitchen: see the order queue, update order status",
          "Owner: purchasing, inventory, menu data, reports and user accounts",
        ],
      },
      {
        title: "Data model",
        items: [
          "Tables with a generated QR token",
          "Orders, order items and transactions with payment method",
          "Menu categories, menus with availability, and recipes",
          "Ingredients with a minimum stock level",
          "Suppliers, purchases with receipts, and purchase items",
          "Stock in and stock out, linked by batch",
        ],
      },
    ],
    rules: [
      "Customers have no account in the data model; staff and the owner sign in, and each user has a role.",
      "An order moves from created to confirmed, to the kitchen, to done, and can be cancelled along the way.",
      "A menu item can be switched off and has an availability check.",
      "Each ingredient has a minimum stock level that the system checks.",
      "Stock out always points to the stock-in batch it was taken from, and a batch is marked empty when it runs out.",
      "Purchases keep the receipt and are checked for price changes.",
    ],
    decisions: [
      {
        title: "The table is the customer's identity",
        body: "There is no customer account in the data model. The order carries the table, which keeps self-ordering to one scan and nothing to sign up for.",
      },
      {
        title: "Recipes connect sales to stock",
        body: "Menus don't hold stock. A recipe lists the ingredients and quantities per menu item, so one sale can reduce several ingredients without anyone counting by hand.",
      },
      {
        title: "Stock is tracked by batch",
        body: "Every purchase line becomes a stock-in batch, and every stock-out record points back to one. So every unit that leaves stock can be traced to the purchase it came from.",
      },
      {
        title: "Orders and payments are separate",
        body: "An order describes what the table wants; a transaction records the payment, the cashier who handled it and the payment method.",
      },
    ],
    responsibilities: [
      "Defined the roles and use cases for customer, cashier, kitchen and owner.",
      "Designed the class diagram: 14 classes with their attributes, operations and relationships.",
      "Modelled the order status flow and the stock rules behind recipes and batches.",
    ],
    results: [
      { value: "4", label: "roles: customer, cashier, kitchen, owner" },
      { value: "14", label: "use cases, sign-in included" },
      { value: "14", label: "classes in the data model" },
    ],
    resultsNote: "The deliverables are the use case diagram and the class diagram, so there are no usage numbers.",
  },
  {
    // Everything here comes from the data flow diagram and the Figma screens.
    slug: "p3-grosir",
    title: "Sales, purchasing and stock for a wholesale shop",
    name: "P3 Grosir",
    kind: "System analysis + UI design",
    summary:
      "A data flow diagram of how a wholesale shop sells, buys, keeps stock and reports, and the admin screens designed in Figma from it: cashier, master items with minimum stock, stock adjustments, purchase requests, suppliers and reports.",
    preview: [
      "Sales, purchasing and stock as four connected processes",
      "Minimum stock on every item, on the dashboard and in a report",
      "Admin screens designed in Figma from the data flow diagram",
    ],
    role: "Systems analyst and UI designer: data flow diagram and Figma screens",
    status: "Design and analysis",
    stack: ["System analysis", "Data flow diagram", "Figma", "UI design", "Web"],
    cover: "/assets/illustrations/p3-grosir.svg",
    coverAlt: "P3 Grosir admin screens designed in Figma: dashboard with a sales chart, best sellers and items at minimum stock, the master item list, and a sales report preview. Demo data.",
    gallery: [
      { src: "/assets/opt/work/P3grosir_dfd.webp", alt: "Data flow diagram of P3 Grosir: admin, customer, supplier and owner around four processes (sales, purchasing, inventory management and reporting) with the item and supplier data stores.", fit: "contain", ratio: "16 / 15" },
    ],
    problem:
      "A wholesale shop sells to customers, buys from suppliers and has to know what is left on the shelf. When those are handled separately, stock figures drift and the owner has no single place to see sales, purchases and items running low. P3 Grosir maps how the three connect before any screen is drawn.",
    solution:
      "Four processes share one item store. Sales and purchasing both update item records, inventory management combines them with the owner's stock adjustments, and a reporting process turns everything into five reports for the owner. The admin screens follow the same split: cashier and transaction history, master items, stock adjustments, purchase requests, purchasing, suppliers, users and reports.",
    workflow: {
      title: "The four processes",
      steps: [
        { title: "1.0 Sales", body: "A customer's purchase is recorded against the item data, the customer gets a sales invoice, and item records are updated." },
        { title: "2.0 Purchasing", body: "The owner's purchase list goes to purchasing; the supplier's data and purchase invoice are recorded, and the supplier gets the purchase details." },
        { title: "3.0 Inventory", body: "Sales and purchase records, plus the owner's stock adjustments, update the item data." },
        { title: "4.0 Reports", body: "Sales, purchase, inventory and adjustment records become reports for the owner." },
      ],
    },
    scope: [
      {
        title: "Admin screens (Figma)",
        items: [
          "Dashboard: sales chart, best-selling items and items at minimum stock",
          "Cashier and transaction history",
          "Master item: buying price, unit price, stock and minimum stock",
          "Stock adjustment",
          "Purchase request, purchasing and suppliers",
          "User manager",
          "Reports with preview, share and download",
        ],
      },
      {
        title: "Data flow diagram",
        items: [
          "External entities: admin, customer, supplier, owner",
          "Processes: sales, purchasing, inventory management, reporting",
          "Data stores: item data and suppliers",
          "Reports: purchasing, sales, inventory, minimum stock, stock adjustment",
        ],
      },
    ],
    decisions: [
      {
        title: "Stock changes go through a process",
        body: "Item data is written by sales, purchasing and inventory management. A manual correction is a stock adjustment from the owner, with its own record and its own report.",
      },
      {
        title: "Minimum stock is part of every item",
        body: "Each item has a minimum stock value next to its stock. The dashboard lists the items that reached it, and the owner gets a minimum stock report.",
      },
      {
        title: "Request before purchase",
        body: "The owner's purchase list is an input to purchasing, and the screens keep purchase requests apart from recorded purchases.",
      },
    ],
    responsibilities: [
      "Mapped the shop's processes in a data flow diagram: four processes, four external entities and two data stores.",
      "Designed the admin screens in Figma, from the dashboard to the reports.",
    ],
    results: [
      { value: "4", label: "processes: sales, purchasing, inventory, reporting" },
      { value: "5", label: "reports for the owner" },
      { value: "10", label: "admin menus designed in Figma" },
    ],
    resultsNote: "The deliverables are the data flow diagram and the Figma screens, so there are no usage numbers.",
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
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Crashlytics", "OpenStreetMap", "Real-time"],
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
    stack: ["Flutter", "Dart", "Pair programming", "Git & GitHub", "AI Model Integration", "Others design"],
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

// Archive — the complete list of projects, newest first. Projects that also
// have a case study link to it via `caseStudy` (slug). Optional fields:
// `year`, `status`, `href` + `linkLabel` (external link), `image`.
// TODO: demo video Food Recognizer & Gemini chatbot dulu di Firebase Storage
// (sekarang HTTP 402). Upload ulang (mis. YouTube/Drive) lalu isi `href` +
// `linkLabel: "Demo video"` pada entri terkait.
export const archive = [
  {
    name: "GEMA Plantation",
    group: "Mobile",
    year: "2025 – now",
    status: "Piloting",
    caseStudy: "gema-plantation",
    description:
      "Plantation operations off paper: an offline-first Android app for field supervisors (attendance, harvest and upkeep records, delivery notes, NFC transfer, on-device ripeness detection) and a web CMS with dashboards, reports, a GIS map and an AI assistant, synced with the company ERP.",
    stack: ["Kotlin", "Room", "TensorFlow Lite", "ONNX", "NFC",  "Offline-first", "Bluetooth printing", "Location Tracking"],
    image: "/assets/illustrations/gema-mobile.svg",
  },
  {
    name: "Content Management System GEMA Plantation",
    group: "Web",
    year: "2025 – now",
    status: "Piloting",
    caseStudy: "gema-plantation",
    description:
      "Web CMS for estate offices and management: production dashboards with period comparisons, daily plans and work records, uncollected fruit with an age indicator, hauling and delivery notes, 9 reports in PDF and Excel, a Leaflet map of supervisors, role-based access, and GapAI, an assistant on a third-party LLM. Syncs master data, daily plans and purchase orders from the ERP.",
    stack: ["LLM Integration", "Cross-platform sync", "Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "Leaflet", ".NET Core", "SQL Server"],
    image: "/assets/illustrations/gema-cms.svg",
  },
  {
    name: "GEMA Factory Mobile",
    group: "Mobile",
    year: "2026 – now",
    status: "In development",
    caseStudy: "gema-factory",
    description:
      "Mill maintenance app: scan a machine's QR code, report issues with readings flagged Normal, Warning or Critical, run preventive maintenance and approvals, and track work orders across 11 types.",
    stack: ["Flutter", "Provider", "Dio", "Freezed", "REST API"],
    image: "/assets/illustrations/gema-factory-mobile.svg",
  },
  {
    name: "OneTap-SPB",
    group: "Devices",
    year: "2026",
    caseStudy: "onetap-spb",
    description:
      "Windows app for the mill weighbridge: tap the truck's NFC card on an ACR122U reader and the delivery note is checked and saved to SQL Server, with duplicate comparison, a session log and searchable history.",
    stack: ["Desktop", "NFC","NFC Reader", "Python", "CustomTkinter", "PC/SC", "SQL Server"],
    image: "/assets/illustrations/onetap-spb.svg",
  },
  {
    name: "Semesta Agro company website",
    group: "Web",
    year: "2026",
    status: "Live",
    caseStudy: "semesta-agro",
    description:
      "Rebuilt the website of PT Semesta Agri Solusi from a single logo page into a full product site for Green Harvest Plantation, an ERP for palm oil estates, mills and head offices.",
    stack: ["Next.js", "React", "Tailwind CSS", "Motion", "Plesk"],
    image: "/assets/opt/work/semesta-hero.webp",
    href: "https://semestaagro.com/",
    linkLabel: "Live site",
  },
  {
    name: "Samta Hospitality",
    group: "Mobile",
    year: "2025 – 2026",
    description:
      "Flutter app for hospitality and hotel maintenance operations. I owned the UI, REST API integration and state management, built on clean architecture.",
    stack: ["Flutter", "REST API", "Clean architecture"],
    image: "/assets/illustrations/maintenance-app.svg",
  },
  {
    name: "Pamulab portfolio",
    group: "Web",
    year: "2026",
    status: "Live",
    description:
      "This site: case studies, notes, a CV generated from the same content, an optional AI assistant, and an interactive 3D ID card.",
    stack: ["Next.js", "Tailwind CSS", "Motion", "Three.js", "Vercel"],
    image: "/assets/opt/work/pamulab.webp",
    href: "https://www.pamulab.my.id/",
    linkLabel: "Live site",
  },
  {
    name: "DMB self-ordering kiosk",
    group: "Devices",
    year: "2024 – 2025",
    status: "Piloted in one outlet",
    caseStudy: "dmb-kiosk",
    description:
      "Self-ordering app for Android TV kiosks and tablets in DNA Group's food and beverage outlets: one Flutter codebase, layouts per screen size, connected to the group's ordering and POS APIs.",
    stack: ["Android TV", "Tablet","Flutter", "Dart", "REST API", "Sentry", ],
    image: "/assets/illustrations/dmb-kiosk.svg",
  },
  {
    name: "P3: purchasing, sales and inventory",
    group: "Web",
    year: "2025",
    status: "Built, not in use yet",
    caseStudy: "p3-system",
    description:
      "Multi-outlet purchasing, sales and inventory for a retail business: sales take stock out, purchases put it in, minimum stock flags what to reorder, and stock opname corrects the count under a numbered record. Process diagrams first, API last.",
    stack: ["Next.js", "TypeScript", "Zustand", "TanStack", "Tailwind CSS", "shadcn/ui", "Bun", "Hono", "Prisma", "Zod", "MySQL", "Docker", "GitHub Actions"],
    image: "/assets/opt/work/p3.webp",
  },
  {
    name: "Angkutin",
    group: "Mobile",
    year: "2024",
    status: "Undergraduate thesis",
    caseStudy: "angkutin",
    description:
      "Waste pickup platform: separate apps for residents and collectors plus a Flutter web admin panel, with real-time status through Firestore and locations on OpenStreetMap.",
    stack: ["Flutter", "Firebase", "Firestore", "Crashlytics", "OpenStreetMap", "Real-time"],
    image: "/assets/opt/work/angkutin-prev.webp",
  },
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
    name: "GEMA Factory",
    group: "Design",
    description:
      "An App that replaces paper work orders in a palm oil mill: scan a machine's QR code, report an issue with readings and photos, assign mechanics, and track the job to completion. Role based access for technicians, supervisors, managers and management.",
    stack: ["Web", "Mobile", "Prototype", "UX Research", "Requirements analysis", "System design","UI Design", "Figma", ],
    image: "/assets/illustrations/figma-gema-factory.svg",
  },
    {
    name: "Dapur360 - Vegan Restaurant Management System",
    group: "Design",
    caseStudy: "dapur360",
    description: "Vegan Restaurant Integrated POS, QR self-ordering, purchasing & inventory for F&B businesses",
    stack: ["Web", "Mobile", "POS", "Self-Ordering","System Analysis", "Figma", "System design"],
    image: "/assets/illustrations/dapur360.svg",
  },
    {
    name: "P3: Penjualan, Pembelian & Persediaan Grosir",
    group: "Design",
    caseStudy: "p3-grosir",
    description:
      "Sales, purchasing and inventory for a wholesale shop, designed in Figma: cashier and transaction history, master items with minimum-stock alerts, stock adjustments, purchase requests, suppliers, user roles and sales reports.",
    stack: [ "Web", "System design", "System Analysis","Figma",],
    image: "/assets/illustrations/p3-grosir.svg",
  },
  {
    name: "Livestock & distributor system",
    group: "Design",
    description:
      "Integrated livestock and distributor management designed in Figma: user flows, data structure and a high-fidelity prototype.",
    stack: ["Web", "Mobile","Figma", "System design", "UI Design"],
    image: "/assets/illustrations/figma-livestock.svg",
    imagePlaceholder: true,
  },
  {
    name: "Preloved marketplace prototype",
    group: "Design",
    description:
      "Admin panel for a multi-role thrift platform, designed and prototyped in Figma: review submitted clothes and send each to sale or recycling, verify buyers, sellers and recycle staff, and manage the catalogue.",
    stack: ["Web","Figma", "UX research", "UI Design"],
    image: "/assets/illustrations/preloved-admin.svg",
  },
  {
    name: "Diatrofi",
    group: "Others",
    description: "Food-intake tracker with healthy recipes and health articles.",
    stack: ["Flutter"],
    image: "/assets/opt/work/diatrofi-preview.webp",
  },
  {
    name: "Movies",
    group: "Others",
    description: "Now showing, upcoming and top-rated films with search, built on TMDB with CI via Codemagic.",
    stack: ["Flutter", "TMDB", "Codemagic", "Firebase"],
    image: "/assets/opt/work/watch-prev.webp",
  },
  {
    name: "ThreadHub",
    group: "Others",
    description: "Discussion forum with threads and replies.",
    stack: ["React", "Redux", "ESLint"],
    image: "/assets/opt/work/thread-web.webp",
  },
  { name: "StorySpot", group: "Others", description: "Photo stories with a map of nearby posts.", stack: ["Kotlin"] },
  { name: "GitLookup", group: "Others", description: "Search GitHub users and browse profiles.", stack: ["Kotlin", "GitHub API"] },
  {
    name: "User management module",
    group: "Others",
    description: "CRUD module for user data and profiles.",
    stack: ["React", "Express", "Bulma", "Axios", "MySQL"],
  },
  {
    name: "First personal portfolio",
    group: "Others",
    description: "My first portfolio site, hand-written in HTML, CSS and JavaScript.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    image: "/assets/opt/work/porto.webp",
    href: "https://famuh.github.io/web-portfolio/",
    linkLabel: "Live site",
  },
  {
    name: "Covid-19 world tracker",
    group: "Others",
    description: "Pandemic numbers from public health sources.",
    stack: ["HTML", "CSS", "Express"],
    image: "/assets/opt/work/web-covid-preview.webp",
  },
];

export const archiveGroups = ["Web", "Mobile", "Devices", "Design", "Others"];

// Visual design work (posters, brochures, templates), mostly for BITSMIKRO.
export const designGallery = [
  { src: "/assets/opt/design/gemafactory_brochure.webp", alt: "GEMA Factory brochure", w: 1600, h: 1200 },
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

export const projectCount = archive.length;

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
