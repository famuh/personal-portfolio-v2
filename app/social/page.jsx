import { permanentRedirect } from "next/navigation";

// Retired route — social links live on /contact and in the footer.
export default function SocialRedirect() {
  permanentRedirect("/contact");
}
