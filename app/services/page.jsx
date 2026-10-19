import { permanentRedirect } from "next/navigation";

// Retired route — capabilities now live on the homepage (#capabilities).
// next.config.mjs redirects first; this is the fallback.
export default function ServicesRedirect() {
  permanentRedirect("/#capabilities");
}
