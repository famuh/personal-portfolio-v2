
export const profile = {
  name: "Fadhil Muhammad",
  shortName: "Fadhil",
  alias: "Famuh",
  studio: "Pamulab",
  roles: ["IT Consultant", "Lead Programmer", "Analyst"],
  tagline: "Software engineer and IT consultant digitising palm oil operations, from field to office.",
  valueProp:
    "I work out how a business actually runs, design the system around it, and build it. Lately that means palm oil plantations and mills: field apps that work offline, dashboards for management, and the ERP integration in between.",
  location: "Medan, North Sumatra, Indonesia",
  timezone: "UTC+7",
  email: "fadhilmuhammad.mdev@gmail.com",
  phone: "+62 822 9457 4365",
  startedYear: 2023,
  cv: "/assets/resume/myresume.pdf", // exported from /cv
  cvFileName: "Fadhil-Muhammad-CV.pdf", // name the download is saved as
  cvId: "/assets/resume/myresume-id.pdf", // exported from /cv/id
  cvIdFileName: "Fadhil-Muhammad-CV-ID.pdf",
  portrait: "/assets/opt/portrait.webp",
  idCard: "/assets/opt/idcard.webp",
  // Not looking for a new role: the hero shows what I'm building instead.
  currentRole: "Software Engineer, leading GEMA Plantation and GEMA Factory",
  now: "Building GEMA Plantation and GEMA Factory",
  // No trailing slash: sitemap, robots and the CV append paths to it.
  url: "https://www.pamulab.my.id",
};

export const socials = [
  { id: "linkedin", label: "LinkedIn", handle: "in/fadhil-muhammad79", href: "https://www.linkedin.com/in/fadhil-muhammad79/" },
  { id: "github", label: "GitHub", handle: "@famuh", href: "https://github.com/famuh" },
  { id: "email", label: "Email", handle: profile.email, href: `mailto:${profile.email}` },
  { id: "whatsapp", label: "WhatsApp", handle: profile.phone, href: "https://wa.me/6282294574365" },
];

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Notes", href: "/notes" },
  { label: "Contact", href: "/contact" },
];

export const seo = {
  title: `${profile.name} · IT Consultant, Developer & Analyst`,
  description:
    "Fadhil Muhammad is an IT consultant, developer and analyst in Medan, Indonesia. Requirements and system design, Android, Flutter and web apps, with recent work in palm oil plantation and mill software.",
  lastUpdated: "October 2026",
};
