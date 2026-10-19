import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { socials } from "@/content/site";
import { cn } from "@/lib/utils";

const ICONS = { linkedin: FaLinkedinIn, github: FaGithub, whatsapp: FaWhatsapp, email: Mail };

// Icon buttons with accessible names. External links open in a new tab.
export default function SocialLinks({ className, only }) {
  const items = only ? socials.filter((s) => only.includes(s.id)) : socials;
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {items.map((s) => {
        const Icon = ICONS[s.id];
        const external = s.href.startsWith("http");
        return (
          <li key={s.id}>
            <a
              href={s.href}
              aria-label={`${s.label}: ${s.handle}`}
              title={s.handle}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="flex size-10 items-center justify-center rounded-chip border border-line text-ink transition-colors duration-(--dur-base) hover:border-ink hover:bg-ink hover:text-canvas"
            >
              <Icon aria-hidden="true" className="size-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
