"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, CalendarCheck } from "lucide-react";
import Logo from "@/components/Logo";
import CallNowButton from "@/components/CallNowButton";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Hospital", href: "/hospital" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the mobile drawer
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full max-w-full box-border">
      <nav
        aria-label="Primary"
        className={`mx-auto box-border flex w-full max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:gap-4 sm:px-6 lg:px-8 ${
          scrolled
            ? "mx-3 mt-2 rounded-2xl border border-line/70 bg-white py-2.5 shadow-[0_10px_30px_-12px_rgba(29,41,57,0.15)] sm:mx-4 sm:py-2 lg:mx-auto"
            : "bg-transparent py-5 sm:py-4"
        }`}
      >
        {/* Left: logo + hospital name */}
        <div className="min-w-0 flex-1">
          <Link
            href="/"
            aria-label="Sri Sakthi Hospital — Home"
            className="inline-flex min-w-0 max-w-full"
          >
            <Logo prominent />
          </Link>
        </div>

        {/* Center links (desktop) */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[15px] font-medium text-ink/80 transition-colors hover:text-primary-dark"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right CTAs (desktop) */}
        <div className="hidden items-center gap-3 lg:flex">
          <CallNowButton
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition-all hover:border-primary/50 hover:text-primary-dark"
            iconClassName="size-4 text-primary"
          />
          <Link
            href="/#appointment"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_20px_-8px_rgba(232,117,36,0.7)] transition-all hover:bg-primary-dark"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            Book Appointment
          </Link>
        </div>

        {/* Right: phone + hamburger, fixed row, never compressed */}
        <div className="ml-2 flex shrink-0 items-center gap-2 lg:hidden">
          <CallNowButton
            aria-label="Call Sri Sakthi Hospital"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-white text-primary-dark sm:size-10"
            iconClassName="size-5 shrink-0 sm:size-[18px]"
            children={null}
          />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-white text-ink sm:size-10"
          >
            <Menu className="size-[22px] shrink-0 sm:size-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-3 top-3 max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain rounded-3xl border border-line bg-white p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-full border border-line text-ink"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <ul className="mt-5 space-y-1">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-soft hover:text-primary-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <CallNowButton
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-4 py-3 text-sm font-medium text-ink"
                iconClassName="size-4 text-primary"
              />
              <Link
                href="/#appointment"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-white"
              >
                <CalendarCheck className="size-4" aria-hidden="true" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
