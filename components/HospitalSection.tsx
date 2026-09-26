"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  MessageCircle,
  Pill,
  ShieldCheck,
  Siren,
  Stethoscope,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { hospital } from "@/data/hospital";
import { contact } from "@/data/contact";
import { EASE } from "@/lib/animations";
import CallNowButton from "@/components/CallNowButton";

const facilityIcons: Record<string, LucideIcon> = {
  consultation: Stethoscope,
  inpatient: BedDouble,
  diagnostics: FlaskConical,
  pharmacy: Pill,
  emergency: Siren,
  cardiac: HeartPulse,
  chronic: ShieldCheck,
  preventive: GraduationCap,
  community: UsersRound,
};

export default function HospitalSection() {
  const { hospitalSection } = hospital;
  const [active, setActive] = useState<(typeof hospitalSection.photos)[number] | null>(null);
  const [activeInfo, setActiveInfo] = useState<"vision" | "mission" | null>(null);
  const [activeFacility, setActiveFacility] = useState<(typeof hospitalSection.facilities)[number] | null>(null);
  const [activeStrength, setActiveStrength] = useState<(typeof hospitalSection.clinicalStrengths)[number] | null>(null);

  useEffect(() => {
    if (!active && !activeInfo && !activeFacility && !activeStrength) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
        setActiveInfo(null);
        setActiveFacility(null);
        setActiveStrength(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active, activeInfo, activeFacility, activeStrength]);

  return (
    <section
      id="hospital-section"
      className="relative overflow-hidden bg-very-soft py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="cross-texture absolute inset-x-0 top-0 h-40 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={{
              hidden: { y: 18 },
              visible: { y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            className="eyebrow justify-center"
          >
            {hospitalSection.intro.title}
          </motion.p>
          <motion.h2
            variants={{
              hidden: { y: 20 },
              visible: { y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="section-heading text-3xl sm:text-4xl lg:text-[2.6rem]"
          >
            {hospitalSection.intro.heading}
          </motion.h2>
          <motion.p
            variants={{
              hidden: { y: 18 },
              visible: { y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.08 } },
            }}
            className="mt-4 text-[1.05rem] leading-relaxed text-muted"
          >
            {hospitalSection.intro.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid gap-5 lg:grid-cols-2"
        >
          {[hospitalSection.vision, hospitalSection.mission].map((item, index) => (
            <motion.article
              key={item.title}
              variants={{
                hidden: { y: 26 },
                visible: { y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              className="group cursor-pointer rounded-3xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(29,41,57,0.04),0_10px_28px_-16px_rgba(29,41,57,0.16)] transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(29,41,57,0.05),0_20px_40px_-16px_rgba(232,117,36,0.25)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-soft text-primary-dark">
                  {index === 0 ? (
                    <HeartHandshake className="size-5" aria-hidden="true" />
                  ) : (
                    <ShieldCheck className="size-5" aria-hidden="true" />
                  )}
                </span>
                <ArrowRight className="mt-2 size-4 text-primary transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
              <button
                type="button"
                onClick={() => setActiveInfo(index === 0 ? "vision" : "mission")}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark transition-colors hover:text-primary"
              >
                Click to learn more <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </motion.article>
          ))}
        </motion.div>

        <AnimatePresence>
          {activeInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveInfo(null)}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ duration: 0.35, ease: EASE }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-lg rounded-3xl border border-line bg-white p-6 shadow-frame sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setActiveInfo(null)}
                  aria-label="Close details"
                  className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-line bg-white text-ink shadow-sm transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
                <span className="eyebrow">{activeInfo === "vision" ? "Our Vision" : "Our Mission"}</span>
                <h3 className="mt-3 pr-10 text-2xl font-bold tracking-tight text-ink">
                  {activeInfo === "vision" ? hospitalSection.vision.title : hospitalSection.mission.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {activeInfo === "vision"
                    ? hospitalSection.vision.description
                    : hospitalSection.mission.description}
                </p>
                <h4 className="mt-6 text-sm font-semibold tracking-wide text-ink uppercase">Key Focus Areas</h4>
                <ul className="mt-3 space-y-2.5">
                  {(activeInfo === "vision"
                    ? hospitalSection.vision.focusAreas
                    : hospitalSection.mission.focusAreas
                  ).map((area) => (
                    <li key={area} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {area}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-[0_12px_26px_-10px_rgba(232,117,36,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                  >
                    Contact Us <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveInfo(null)}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-primary/50 hover:text-primary-dark"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 text-center sm:mt-20">
          <p className="eyebrow justify-center">Inside Sri Sakthi Hospital</p>
          <h2 className="section-heading mt-4 text-3xl sm:text-4xl lg:text-[2.6rem]">
            {hospitalSection.heading}
          </h2>
        </div>

        {/* Hospital photo gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {hospitalSection.photos.map((photo) => (
            <motion.figure
              key={photo.src}
              variants={{
                hidden: { y: 26 },
                visible: { y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              onClick={() => setActive(photo)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActive(photo);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${photo.caption}`}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-line bg-white shadow-[0_1px_2px_rgba(29,41,57,0.04),0_14px_32px_-18px_rgba(29,41,57,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(29,41,57,0.05),0_24px_48px_-18px_rgba(232,117,36,0.3)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={900}
                  height={675}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-primary-dark opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </div>
              <figcaption className="flex items-center justify-between gap-2.5 px-4 py-3.5">
                <span className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-4 w-1 rounded-full bg-primary" />
                  <span className="text-sm font-semibold tracking-tight text-ink">{photo.caption}</span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary transition-colors duration-300 group-hover:text-primary-dark">
                  View Details
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ duration: 0.35, ease: EASE }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-line bg-white shadow-frame"
              >
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close details"
                  className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={active.src}
                    alt={active.alt}
                    width={1200}
                    height={675}
                    className="size-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="eyebrow">View Details</span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink">{active.caption}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{active.details}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <CallNowButton
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(232,117,36,0.7)] transition-colors duration-300 hover:bg-primary-dark"
                      iconClassName="size-4"
                    />
                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with Sri Sakthi Hospital on WhatsApp"
                      title="WhatsApp Now"
                      className="grid size-11 place-items-center rounded-full border border-line bg-soft text-primary-dark shadow-[0_10px_24px_-10px_rgba(29,41,57,0.3)] transition-colors duration-300 hover:bg-primary hover:text-white"
                    >
                      <MessageCircle className="size-5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ }}
          whileInView={{ }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-center text-[1.05rem] leading-relaxed text-muted"
        >
          {hospitalSection.description}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {hospitalSection.facilities.map((facility) => {
            const Icon = facilityIcons[facility.icon] ?? Stethoscope;
            return (
              <motion.article
                key={facility.title}
                variants={{
                  hidden: { y: 28 },
                  visible: { y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
                onClick={() => setActiveFacility(facility)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveFacility(facility);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${facility.title}`}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-line bg-white shadow-[0_1px_2px_rgba(29,41,57,0.04),0_10px_28px_-16px_rgba(29,41,57,0.16)] transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(29,41,57,0.05),0_20px_40px_-16px_rgba(232,117,36,0.25)]"
              >
                <div className="flex items-center gap-3 p-5 pb-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-soft text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{facility.title}</h3>
                </div>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{facility.description}</p>
                <span className="inline-flex items-center gap-1.5 px-5 pb-5 text-sm font-semibold text-primary-dark">
                  Click for details <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </motion.article>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {activeFacility && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFacility(null)}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ duration: 0.35, ease: EASE }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-lg rounded-3xl border border-line bg-white p-6 shadow-frame sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setActiveFacility(null)}
                  aria-label="Close facility details"
                  className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-line bg-white text-ink shadow-sm transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
                <span className="eyebrow">Facility Details</span>
                <h3 className="mt-3 pr-10 text-2xl font-bold tracking-tight text-ink">
                  {activeFacility.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{activeFacility.description}</p>
                <h4 className="mt-6 text-sm font-semibold tracking-wide text-ink uppercase">Features</h4>
                <ul className="mt-3 space-y-2.5">
                  {activeFacility.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-[0_12px_26px_-10px_rgba(232,117,36,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                  >
                    Contact Us <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveFacility(null)}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-primary/50 hover:text-primary-dark"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 text-center sm:mt-20">
          <p className="eyebrow justify-center">What We Do Best</p>
          <h2 className="section-heading mt-4 text-3xl sm:text-4xl lg:text-[2.6rem]">
            Clinical Strengths
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {hospitalSection.clinicalStrengths.map((strength) => {
            const Icon = facilityIcons[strength.icon] ?? Stethoscope;
            return (
              <motion.article
                key={strength.title}
                variants={{
                  hidden: { y: 28 },
                  visible: { y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
                onClick={() => setActiveStrength(strength)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveStrength(strength);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${strength.title}`}
                className="group cursor-pointer rounded-3xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(29,41,57,0.04),0_10px_28px_-16px_rgba(29,41,57,0.16)] transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(29,41,57,0.05),0_20px_40px_-16px_rgba(232,117,36,0.25)]"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-soft text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{strength.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{strength.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark">
                  Click for details <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </motion.article>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {activeStrength && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStrength(null)}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ duration: 0.35, ease: EASE }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-lg rounded-3xl border border-line bg-white p-6 shadow-frame sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setActiveStrength(null)}
                  aria-label="Close clinical strength details"
                  className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-line bg-white text-ink shadow-sm transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
                <span className="eyebrow">Clinical Strength</span>
                <h3 className="mt-3 pr-10 text-2xl font-bold tracking-tight text-ink">
                  {activeStrength.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{activeStrength.description}</p>
                <h4 className="mt-6 text-sm font-semibold tracking-wide text-ink uppercase">What We Offer</h4>
                <ul className="mt-3 space-y-2.5">
                  {activeStrength.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-[0_12px_26px_-10px_rgba(232,117,36,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                  >
                    Contact Us <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveStrength(null)}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-primary/50 hover:text-primary-dark"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}