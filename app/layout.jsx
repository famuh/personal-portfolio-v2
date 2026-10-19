import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/layout/Providers";
import AskLauncher from "@/components/ask/AskLauncher";
import { profile, seo, socials } from "@/content/site";

// One family does everything: Geist for headings and body, Geist Mono for
// small technical details (dates, stack chips).
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // only used for small details — don't compete with the main face
});

export const metadata = {
  metadataBase: new URL(profile.url),
  title: {
    default: seo.title,
    template: `%s — ${profile.name}`,
  },
  description: seo.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.url }],
  keywords: ["IT Consultant", "Senior Developer", "System Analyst", "Business Analyst", "Flutter", "Next.js", "Medan", "Indonesia", profile.name],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title: seo.title,
    description: seo.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.alias,
  jobTitle: profile.roles.join(" / "),
  url: profile.url,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Medan", addressRegion: "North Sumatra", addressCountry: "ID" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Mikroskil University" },
  sameAs: socials.filter((s) => s.href.startsWith("https://www.linkedin") || s.href.startsWith("https://github")).map((s) => s.href),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <Header />
          <main id="main" className="min-h-[60vh]">
            {children}
          </main>
          <Footer />
          {/* "Ask my portfolio": off unless NEXT_PUBLIC_ASK_PORTFOLIO=true (provider configured via ASK_* env vars, see lib/ask/provider.js). */}
          {process.env.NEXT_PUBLIC_ASK_PORTFOLIO === "true" && (
            <div className="print:hidden">
              <AskLauncher />
            </div>
          )}
        </Providers>
      </body>
    </html>
  );
}
