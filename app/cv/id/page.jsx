import CvSheet from "@/components/cv/CvSheet";

export const metadata = {
  title: "CV (Bahasa Indonesia)",
  description: "CV Fadhil Muhammad, software engineer dan IT consultant: Flutter, web, backend dan sistem enterprise.",
  alternates: { canonical: "/cv/id", languages: { en: "/cv", id: "/cv/id" } },
};

export default function CvIdPage() {
  return <CvSheet lang="id" />;
}
