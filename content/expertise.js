// What I do (capabilities), how I work (process + practice), and the tech
// stack grouped by domain. `proof` links each capability to a case study slug;
// `icon` is a lucide-react icon name resolved where it's rendered.

export const capabilities = [
  {
    id: "consulting",
    icon: "Compass",
    title: "IT consulting",
    problem: "You know something isn't working, but not what to build.",
    body: "I go on site to estates, mills and outlets, talk to the people doing the work, and map the process as it really is. Then I write a plan you can act on: what to build, what to buy, and what can wait.",
    deliverables: ["Field study", "Process map", "Scope & estimate", "Build or buy"],
    proof: "gema-plantation",
  },
  {
    id: "analysis",
    icon: "Workflow",
    title: "Systems analysis",
    problem: "The requirements live in people's heads and in spreadsheets.",
    body: "Interviews turned into documents a team can build from: user flows, a data model and API contracts, agreed before anyone writes code.",
    deliverables: ["User flows", "ERD", "API spec", "Wireframes"],
    proof: "p3-system",
  },
  {
    id: "development",
    icon: "Code",
    title: "Development",
    problem: "There's a plan. Now it has to ship and stay up.",
    body: "Kotlin and Flutter on mobile, including offline-first apps and on-device AI. Next.js and .NET Core on the web, connected to the ERP behind them.",
    deliverables: ["Android & Flutter", "Web apps & CMS", "APIs & ERP sync", "CI/CD"],
    proof: "gema-factory",
  },
  {
    id: "lead",
    icon: "Users",
    title: "Team lead & training",
    problem: "The team needs to deliver, and the users need to adopt it.",
    body: "I lead a small team (usually two developers, up to four) through reviews and pairing, train the people who'll use the system, and support clients online and on site.",
    deliverables: ["Code review", "User training", "Client support", "Docs in Notion"],
    proof: "bekup-facilitator",
  },
  {
    id: "design",
    icon: "PenTool",
    title: "Design & presentations",
    problem: "The system is good, but nobody outside the team understands it yet.",
    body: "UI in Figma, plus the material that explains and sells it: product presentations, company profile decks and brochures for GEMA Plantation and GEMA Factory, made in Canva and Photoshop.",
    deliverables: ["UI in Figma", "Product decks", "Company profile", "Brochures"],
    proof: "semesta-agro",
  },
];

export const process = [
  { step: "Discover", body: "Field visits, interviews with clients and field staff, and a look at the paper and spreadsheets in use.", artefact: "Field notes" },
  { step: "Analyse", body: "Map the current process and agree on what better looks like.", artefact: "User flows, rules" },
  { step: "Design", body: "Data model and wireframes. Cheap to change at this stage.", artefact: "ERD, wireframes" },
  { step: "Build", body: "Small increments the client can click through, shipped with CI/CD.", artefact: "Working software" },
  { step: "Ship", body: "Release, train the people who'll use it, and present it to management.", artefact: "Training, deck" },
  { step: "Support", body: "Stay close after launch, online and on site, and plan what comes next.", artefact: "Backlog" },
];

// How projects actually run day to day (not a formal methodology).
export const practice = [
  {
    icon: "MapPin",
    title: "On site",
    body: "I visit estates and mills for field studies, and gather requirements directly with clients and the people who'll use the system.",
  },
  {
    icon: "NotebookPen",
    title: "Lightweight agile",
    body: "No formal framework: short cycles, estimates up front, documentation in Notion, and Discord for day-to-day talk. ClickUp at my previous job.",
  },
  {
    icon: "Users",
    title: "Small team",
    body: "I lead two to four developers on the GEMA products, with code review and pairing.",
  },
  {
    icon: "Presentation",
    title: "Present & train",
    body: "I present to clients and management, write the training, and support users after launch.",
  },
];

export const stack = [
  {
    domain: "Mobile",
    items: ["Kotlin", "Hilt", "Room", "CameraX", "NFC", "Flutter", "Provider", "Dio", "Freezed"],
  },
  {
    domain: "Web",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Leaflet"],
  },
  {
    domain: "Backend & infra",
    items: [".NET Core", "SQL Server", "Node.js", "Prisma", "Docker", "IIS", "NGINX", "GitHub Actions"],
  },
  {
    domain: "AI & quality",
    items: ["TensorFlow Lite", "YOLOv8", "LLM APIs", "Crashlytics", "Sentry", "Postman", "Swagger"],
  },
  {
    domain: "Analysis & design",
    items: ["User flows", "ERD", "Wireframes", "Figma", "Canva", "Photoshop", "Notion"],
  },
];

// Organisations from the CV (text only, no logos).
export const proofStrip = [
  "Semesta Agri Solusi",
  "DNA Group",
  "BEKUP × Dicoding",
  "Bangkit Academy",
  "Kampus Merdeka",
  "Mikroskil University",
];

export const faq = [
  {
    q: "Are you available for a new role?",
    a: "Not at the moment. I'm building GEMA Plantation and GEMA Factory. I'm still happy to talk about consulting questions, collaborations or speaking.",
  },
  {
    q: "What does a project with you look like?",
    a: "A field visit and interviews to understand the process, then design and build in short cycles. You see working software early, and I stay around for training and support.",
  },
  {
    q: "Where are you based?",
    a: "Medan, North Sumatra, Indonesia (UTC+7). I work on site with clients and remotely.",
  },
  {
    q: "Can I see the code?",
    a: "Personal projects are on GitHub under @famuh. Company and client work stays private, but I'm happy to walk through it on a call.",
  },
];
