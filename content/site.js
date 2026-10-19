import { SITE_URL, availability, currentRole } from "./placeholders";

export const profile = {
  name: "Fadhil Muhammad",
  shortName: "Fadhil",
  alias: "Famuh",
  studio: "Pamulab",
  roles: ["IT Consultant", "Senior Developer", "Analyst"],
  tagline: "IT consultant, developer and analyst in Medan, Indonesia.",
  valueProp:
    "I work out how a business actually runs, design the system around it, and build it. Mostly Flutter and Next.js, from the first requirements meeting to the release.",
  location: "Medan, North Sumatra, Indonesia",
  timezone: "UTC+7",
  email: "fadhilmuhammad.mdev@gmail.com",
  phone: "+62 822 9457 4365",
  startedYear: 2023,
  cv: "/assets/resume/myresume.pdf",
  portrait: "/assets/opt/portrait.webp",
  idCard: "/assets/opt/idcard.webp",
  availability,
  currentRole,
  url: SITE_URL,
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
  { label: "Contact", href: "/contact" },
];

export const seo = {
  title: `${profile.name} · IT Consultant, Developer & Analyst`,
  description:
    "Fadhil Muhammad is an IT consultant, developer and analyst in Medan, Indonesia. Requirements and system design, Flutter and Next.js apps, and team training.",
  lastUpdated: "October 2026",
};
