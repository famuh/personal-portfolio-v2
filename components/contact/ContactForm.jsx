"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/content/site";
import { Button } from "@/components/ui/button";

const TOPICS = ["Full-time role", "Consulting / freelance project", "Speaking or mentoring", "Something else"];

const field =
  "w-full rounded-control border border-line-strong bg-surface px-4 py-3 text-ink placeholder:text-ink-muted/70 transition-colors duration-(--dur-base) focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-accent-ink";

// No backend: the form composes a pre-filled email in the visitor's own mail
// client. Swap `onSubmit` for a form service/API route later if needed.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `[${data.get("topic")}] from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}${data.get("company") ? `, ${data.get("company")}` : ""}\n${data.get("email")}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" aria-describedby="form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium">
          Name
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium">
          Company <span className="sr-only">(optional)</span>
          <input name="company" autoComplete="organization" className={field} placeholder="Optional" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Topic
          <select name="topic" className={field} defaultValue={TOPICS[0]}>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium">
        Message
        <textarea name="message" required rows={6} className={field} placeholder="What are you working on, and where could I help?" />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-sm text-ink-muted">Opens your email app with the message pre-filled.</p>
        <Button type="submit" size="lg">
          <Send aria-hidden="true" />
          Compose email
        </Button>
      </div>
      <p role="status" aria-live="polite" className="text-sm text-accent-ink">
        {sent ? "Your email app should be open now. If not, write to me directly at the address above." : ""}
      </p>
    </form>
  );
}
