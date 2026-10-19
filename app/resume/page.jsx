import { permanentRedirect } from "next/navigation";

// Retired route — the CV now lives at /cv. next.config.mjs redirects first.
export default function ResumeRedirect() {
  permanentRedirect("/cv");
}
