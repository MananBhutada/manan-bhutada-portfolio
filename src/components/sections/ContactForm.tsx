"use client";

import { Mail } from "lucide-react";

export default function ContactForm() {
  const email = "mananbhutada94@gmail.com";

  return (
    <div
      className="flex flex-col items-center gap-5 rounded-2xl border border-white/[0.08] bg-[#050812]/85 p-8 text-center shadow-2xl shadow-primary/5 backdrop-blur-xl sm:p-10"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/5">
        <Mail className="text-primary" size={22} />
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-text-secondary">
          Contact
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
          Have something worth building?
        </h3>

        <p className="mt-2 text-sm text-text-secondary">
          Let&apos;s talk.
        </p>
      </div>

      <a
        href={`mailto:${email}`}
        className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90"
      >
        <Mail size={16} />
        {email}
      </a>
    </div>
  );
}