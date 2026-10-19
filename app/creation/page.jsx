import { permanentRedirect } from "next/navigation";

// Retired route — the /creation showcase was merged into the new homepage
// (its storytelling, useCase copy and FAQ now live in content/). The old
// section components remain in ./_components until you delete them.
export default function CreationRedirect() {
  permanentRedirect("/");
}
