import { permanentRedirect } from "next/navigation";

// Retired route — replaced by /about. next.config.mjs redirects first.
export default function ResumeRedirect() {
  permanentRedirect("/about");
}
