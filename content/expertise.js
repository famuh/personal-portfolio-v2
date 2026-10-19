// What I do (capabilities), how I work (process), and the tech stack grouped
// by domain. `proof` links each capability to a case study slug; `icon` is a
// lucide-react icon name resolved in components/home/Capabilities.jsx.

export const capabilities = [
  {
    id: "consulting",
    icon: "Compass",
    title: "IT consulting",
    problem: "You know something isn't working, but not what to build.",
    body: "I talk to the people doing the work, map the process as it really is, and write a plan you can act on: what to build, what to buy, and what can wait.",
    deliverables: ["Process map", "Scope & priorities", "Build or buy", "Estimate"],
    proof: "p3-system",
  },
  {
    id: "analysis",
    icon: "Workflow",
    title: "Systems analysis",
    problem: "The requirements live in people's heads and in spreadsheets.",
    body: "Interviews turned into documents a team can build from: flows, a data model and API contracts, agreed before anyone writes code.",
    deliverables: ["BPMN flows", "ERD", "API spec", "Wireframes"],
    proof: "p3-system",
  },
  {
    id: "development",
    icon: "Code",
    title: "Development",
    problem: "There's a plan. Now it has to ship and stay up.",
    body: "Flutter and Kotlin on mobile, Next.js on the web, Bun + Hono or Firebase behind it. Released to the Play Store or production and maintained after.",
    deliverables: ["Android, tablet & TV", "Web apps", "APIs & databases", "Releases"],
    proof: "dmb-kiosk",
  },
  {
    id: "mentoring",
    icon: "Users",
    title: "Mentoring",
    problem: "The team needs to get better while still delivering.",
    body: "Weekly sessions, reviews and pair programming, so people stop depending on one person for answers.",
    deliverables: ["Training", "Code reviews", "Pairing", "Onboarding docs"],
    proof: "bekup-facilitator",
  },
];

export const process = [
  { step: "Discover", body: "Interviews, observation, and a look at the spreadsheets people already use.", artefact: "Problem brief" },
  { step: "Analyse", body: "Map the current process and agree on what better looks like.", artefact: "Process map, KPIs" },
  { step: "Design", body: "Flows, data model and wireframes. Cheap to change at this stage.", artefact: "ERD, wireframes" },
  { step: "Build", body: "Small increments you can click through, with typed contracts between front and back end.", artefact: "Working software" },
  { step: "Ship", body: "Release, train the people who'll use it, hand over the docs.", artefact: "Release, training" },
  { step: "Measure", body: "Check the numbers we agreed on and decide what to fix next.", artefact: "Review, backlog" },
];

export const stack = [
  {
    domain: "Mobile",
    items: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Android TV"],
  },
  {
    domain: "Web",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "TanStack"],
  },
  {
    domain: "Backend & data",
    items: ["Bun", "Hono", "Node.js", "Prisma", "Zod", "MySQL", "Firebase", "Supabase"],
  },
  {
    domain: "Analysis & delivery",
    items: ["Requirements", "BPMN / UML", "ERD", "Figma", "Facilitation", "Code review"],
  },
];

// Organisations from the CV (text only, no logos).
export const proofStrip = [
  "DNA Group",
  "BEKUP × Dicoding",
  "Bangkit Academy",
  "Kampus Merdeka",
  "Mikroskil University",
];

export const faq = [
  {
    q: "Are you open to full-time roles as well as consulting?",
    a: "Yes. I'm looking for IT consultant, senior developer or analyst roles, and I keep a few freelance projects going on the side.",
  },
  {
    q: "What does working together look like?",
    a: "A short discovery to map the process and agree on goals, then design and build in small steps. You see working software in the first weeks.",
  },
  {
    q: "Where are you based? Do you work remotely?",
    a: "Medan, North Sumatra, Indonesia (UTC+7). Remote or hybrid both work.",
  },
  {
    q: "Can I see the code?",
    a: "Personal projects are on GitHub under @famuh. Client work stays private unless the client agrees, but I'm happy to walk through it on a call.",
  },
];
