import CvSheet from "@/components/cv/CvSheet";

export const metadata = {
  title: "CV",
  description: "CV of Fadhil Muhammad, software engineer and IT consultant: Flutter, web, backend and enterprise systems.",
  alternates: { canonical: "/cv", languages: { en: "/cv", id: "/cv/id" } },
};

export default function CvPage() {
  return <CvSheet lang="en" />;
}
