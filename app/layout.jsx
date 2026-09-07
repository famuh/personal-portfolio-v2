import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffectTransition from "@/components/StairEffect";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Pamulab — Fadhil Muhammad's Portfolio",
  description: "Pamulab, the personal software studio of Fadhil Muhammad. Built with Next.js, Tailwind CSS v4, Motion.dev, Shadcn/UI, etc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairEffectTransition/>
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}
