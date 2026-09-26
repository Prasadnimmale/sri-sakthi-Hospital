"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Clock3, ExternalLink, Phone, X } from "lucide-react";
import { contact, tel } from "@/data/contact";

type CallNowButtonProps = {
  children?: ReactNode;
  className?: string;
  iconClassName?: string;
  ariaLabel?: string;
};

export default function CallNowButton({
  children = "Call Now",
  className = "",
  iconClassName = "size-4",
  ariaLabel,
}: CallNowButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={ariaLabel}
        aria-expanded={open}
        className={className}
      >
        <Phone className={iconClassName} aria-hidden="true" />
        {children}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-ink/60 px-4 py-5 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="call-dialog-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-line bg-white p-5 shadow-frame sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close call options"
              className="absolute right-3 top-3 grid size-7 place-items-center rounded-lg border border-line text-muted transition-colors hover:bg-soft hover:text-ink"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-3 pr-8">
              <Phone className="size-5 text-primary-dark" aria-hidden="true" />
              <h2 id="call-dialog-title" className="text-lg font-semibold text-ink">
                Call Sri Sakthi Hospital
              </h2>
            </div>
            <div className="mt-5 rounded-xl bg-very-soft p-4">
              <h3 className="font-semibold text-ink">Contact Numbers</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Choose a number to call us directly for appointments or inquiries.
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <a
                href={tel(contact.phonePrimary)}
                className="flex items-center gap-3 rounded-xl border border-line bg-soft p-4 transition-colors hover:border-primary/50"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-white">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-ink">Mobile</span>
                  <span className="block text-lg text-ink">{contact.phonePrimary}</span>
                </span>
                <ExternalLink className="size-4 text-muted" aria-hidden="true" />
              </a>
              <a
                href={tel(contact.phoneSecondary)}
                className="flex items-center gap-3 rounded-xl border border-primary/25 bg-primary/5 p-4 transition-colors hover:border-primary/50"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-white">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-ink">Landline</span>
                  <span className="block text-lg text-primary">{contact.phoneSecondary}</span>
                </span>
                <ExternalLink className="size-4 text-muted" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-very-soft px-3 py-3 text-sm text-muted">
              <Clock3 className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Available: 9 AM - 12:30 PM &amp; 5:30 PM - 9 PM</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
