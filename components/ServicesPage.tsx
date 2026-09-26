"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Clock3, MessageCircle, Plus, X } from "lucide-react";
import { coreServices, conditionsWeTreat, servicesPageIntro } from "@/data/services";
import { contact } from "@/data/contact";
import { EASE } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";
import CallNowButton from "@/components/CallNowButton";

type ActiveService = {
  kind: "service";
  icon: LucideIcon;
  title: string;
  body: string;
  hours?: string;
  included?: string[];
};

type ActiveGroup = {
  kind: "group";
  icon: LucideIcon;
  title: string;
  body: string;
  items: string[];
};

export default function ServicesPage() {
  const [active, setActive] = useState<ActiveService | ActiveGroup | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="relative overflow-hidden bg-very-soft pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
      <div aria-hidden="true" className="cross-texture absolute inset-x-0 top-0 h-40 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            className="eyebrow justify-center"
          >
            Our Services
          </motion.p>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="section-heading mt-4 text-3xl sm:text-4xl lg:text-[2.6rem]"
          >
            {servicesPageIntro.heading}
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
            }}
            className="mt-5 leading-relaxed text-muted"
          >
            {servicesPageIntro.description}
          </motion.p>
        </motion.div>

        {/* Core services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="mt-14"
        >
          <h2 className="section-heading text-2xl sm:text-3xl">Core Services</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className={`group relative overflow-hidden rounded-3xl border border-line bg-white shadow-[0_1px_2px_rgba(29,41,57,0.04),0_10px_30px_-18px_rgba(29,41,57,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(29,41,57,0.05),0_22px_44px_-16px_rgba(232,117,36,0.28)] ${
                    i === coreServices.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""
                  }`}
                >
                  <div className="p-6 sm:p-7">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-6 top-0 h-[3px] origin-left scale-x-0 rounded-b-full bg-primary transition-transform duration-300 group-hover:scale-x-100"
                    />
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid size-12 place-items-center rounded-2xl bg-soft text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon className="size-[22px]" aria-hidden="true" />
                      </span>
                      {i === coreServices.length - 1 ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-dark">
                          <span className="size-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
                          24/7
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                  </div>
                  <div className="border-t border-line bg-very-soft/60 px-6 py-3">
                    <button
                      type="button"
                      onClick={() =>
                        setActive({
                          kind: "service",
                          icon: Icon,
                          title: service.name,
                          body: service.description,
                          hours: service.hours,
                          included: service.included,
                        })
                      }
                      className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      Click to learn more
                      <ChevronDown className="size-4 -rotate-90 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Conditions we treat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-16"
        >
          <h2 className="section-heading text-2xl sm:text-3xl">{conditionsWeTreat.heading}</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            {conditionsWeTreat.description}
          </p>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {conditionsWeTreat.groups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.id}
                  className="group overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(29,41,57,0.04),0_14px_32px_-18px_rgba(29,41,57,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(29,41,57,0.05),0_22px_44px_-16px_rgba(232,117,36,0.28)] sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-soft text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-ink">{group.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{group.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-very-soft px-3 py-1.5 text-[13px] font-medium text-ink"
                      >
                        <Plus className="size-3 text-primary" aria-hidden="true" />
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-line pt-4">
                    <button
                      type="button"
                      onClick={() =>
                        setActive({ kind: "group", icon: Icon, title: group.title, body: group.description, items: group.items })
                      }
                      className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      Click to learn more
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-16 flex flex-col items-center justify-center gap-4 rounded-3xl border border-primary/20 bg-gradient-to-br from-soft to-white p-8 text-center shadow-[0_14px_32px_-18px_rgba(232,117,36,0.35)] sm:flex-row sm:gap-5 sm:p-10"
        >
          <p className="max-w-md text-[15px] font-medium text-ink">
            Need help choosing the right service? Our team is one call away.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CallNowButton
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(232,117,36,0.7)] transition-colors duration-300 hover:bg-primary-dark"
              iconClassName="size-4"
              ariaLabel="Call Sri Sakthi Hospital"
            >
              Call Now
            </CallNowButton>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-primary-dark transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp Now
            </a>
            <a
              href="/#appointment"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-6 py-3 text-sm font-semibold text-primary-dark transition-colors duration-300 hover:border-primary hover:bg-soft"
            >
              Book Appointment
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-dialog-title"
            className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-ink/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-3xl border border-line bg-white shadow-frame"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close details"
                className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-soft text-ink transition-colors duration-300 hover:bg-primary hover:text-white"
              >
                <X className="size-4" aria-hidden="true" />
              </button>

              <div className="p-6 sm:p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-soft text-primary-dark">
                  <active.icon className="size-[22px]" aria-hidden="true" />
                </span>
                <h3 id="service-dialog-title" className="mt-4 text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {active.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{active.body}</p>

                {active.kind === "service" && active.hours ? (
                  <div className="mt-5 flex items-start gap-3 rounded-2xl bg-soft px-4 py-3">
                    <Clock3 className="mt-0.5 size-4 shrink-0 text-primary-dark" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-ink">
                      <span className="font-semibold">Hours:</span> {active.hours}
                    </p>
                  </div>
                ) : null}

                {active.kind === "service" && active.included ? (
                  <div className="mt-6">
                    <h4 className="text-base font-semibold text-ink">What's Included:</h4>
                    <ul className="mt-3 space-y-2.5">
                      {active.included.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary-dark">
                            <Plus className="size-3" aria-hidden="true" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {active.kind === "group" && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-very-soft px-3 py-1.5 text-[13px] font-medium text-ink"
                      >
                        <Plus className="size-3 text-primary" aria-hidden="true" />
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-sm font-medium text-ink">
                    {active.kind === "service"
                      ? "Ready to get personalized care? Call us to book your consultation."
                      : "Need more info? We are just a call away."}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <CallNowButton
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(232,117,36,0.7)] transition-colors duration-300 hover:bg-primary-dark"
                      iconClassName="size-4"
                      ariaLabel={active.kind === "service" ? "Call to Book" : "Call Sri Sakthi Hospital"}
                    >
                      {active.kind === "service" ? "Call to Book" : "Call Now"}
                    </CallNowButton>
                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with Sri Sakthi Hospital on WhatsApp"
                      title="WhatsApp Now"
                      className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl border border-line bg-soft px-5 py-3 text-sm font-semibold text-primary-dark shadow-[0_10px_24px_-10px_rgba(29,41,57,0.3)] transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white"
                    >
                      <MessageCircle className="size-4" aria-hidden="true" />
                      WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}