"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Navigation,
  ArrowUpRight,
} from "lucide-react";
import { contact, tel } from "@/data/contact";
import { EASE } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-white to-very-soft py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Contact details â€” slide in from right on desktop */}
        <motion.div
          initial={{ x: 36 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: EASE }}
          className="lg:order-2"
        >
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading mt-4 text-3xl sm:text-4xl">
            Visit Sri Sakthi Hospital
          </h2>

          <div className="mt-8 space-y-5">
            {/* Address */}
            <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(29,41,57,0.04)]">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-soft text-primary-dark">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">Address</h3>
                <address className="mt-1.5 text-[15px] leading-relaxed text-muted not-italic">
                  {contact.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(29,41,57,0.04)]">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-soft text-primary-dark">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">Phone</h3>
                <div className="mt-1.5 flex flex-col gap-0.5">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={tel(phone)}
                      className="text-[15px] font-medium text-ink transition-colors hover:text-primary-dark"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(29,41,57,0.04)]">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-soft text-primary-dark">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">Email</h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1.5 inline-block text-[15px] font-medium break-all text-ink transition-colors hover:text-primary-dark"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(29,41,57,0.04)]">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-soft text-primary-dark">
                <Clock3 className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                  {contact.timings.label}
                </h3>
                <dl className="mt-1.5 space-y-1 text-[15px]">
                  <div className="flex gap-2">
                    <dt className="w-20 text-muted">{contact.timings.morning.label}:</dt>
                    <dd className="font-medium text-ink">{contact.timings.morning.value}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-20 text-muted">{contact.timings.evening.label}:</dt>
                    <dd className="font-medium text-ink">{contact.timings.evening.value}</dd>
                  </div>
                </dl>
                <p className="mt-2 inline-flex items-center rounded-full bg-soft px-3 py-1 text-xs font-medium text-primary-dark">
                  {contact.timings.note}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map + directions â€” fade in */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
          className="lg:order-1"
        >
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_1px_2px_rgba(29,41,57,0.04),0_24px_60px_-30px_rgba(29,41,57,0.25)]">
            <iframe
              title="Sri Sakthi Hospital location on Google Maps"
              src={contact.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href={contact.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[15px] font-medium text-white shadow-[0_12px_26px_-10px_rgba(232,117,36,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              <Navigation className="size-4" aria-hidden="true" />
              Get Directions
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary-dark transition-colors hover:text-primary"
            >
              Book an appointment instead
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}