"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ChevronDown,
  GraduationCap,
  MessageCircle,
  Plus,
  Stethoscope,
  CheckCircle2,
  X,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { contact } from "@/data/contact";
import { EASE } from "@/lib/animations";
import CallNowButton from "@/components/CallNowButton";

export default function AboutDoctor() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const active = activeIndex !== null ? doctor.meetDoctor.qualifications[activeIndex] : null;

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
              hidden: { y: 16 },
              visible: { y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            className="eyebrow justify-center"
          >
            {doctor.meetDoctor.label}
          </motion.p>
          <motion.h1
            variants={{
              hidden: { y: 22 },
              visible: { y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="section-heading mt-4 text-3xl sm:text-4xl lg:text-[2.6rem]"
          >
            {doctor.meetDoctor.name}
          </motion.h1>
          <motion.p
            variants={{
              hidden: { y: 18 },
              visible: { y: 0, transition: { duration: 0.65, ease: EASE } },
            }}
            className="mt-5 leading-relaxed text-muted"
          >
            {doctor.meetDoctor.intro}
          </motion.p>
        </motion.div>

        {/* Photo (left) + Credentials (right) */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ x: -40 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-4 h-full w-full rounded-[2rem] border-2 border-primary/20"
            />
            <figure className="relative overflow-hidden rounded-[2rem] border border-line bg-very-soft shadow-[0_28px_64px_-22px_rgba(29,41,57,0.28)]">
              <Image
                src={doctor.images.about}
                alt={doctor.alt.about}
                width={1024}
                height={1280}
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="aspect-[4/5] h-auto w-full object-cover object-top"
              />
            </figure>
            <motion.div
              initial={{ y: 18 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
              className="absolute -bottom-6 -right-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_36px_-12px_rgba(29,41,57,0.3)]"
            >
              <span className="text-right">
                <span className="block text-3xl font-bold leading-none text-primary">
                  {doctor.experienceLabel}
                </span>
                <span className="mt-1 block text-sm leading-tight text-ink/80">
                  {doctor.experienceSub}
                </span>
              </span>
              <span aria-hidden="true" className="h-10 w-px bg-line" />
              <span className="text-right">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">
                  {doctor.registration.label}
                </span>
                <span className="mt-0.5 block text-sm font-bold leading-tight text-ink">
                  {doctor.registration.number}
                </span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 40 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
          >
            <span className="eyebrow">{doctor.label}</span>
            <h2 className="section-heading mt-3 text-2xl sm:text-3xl">Professional Credentials</h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {doctor.credentials.map((credential) => (
                <span
                  key={credential}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink shadow-[0_1px_2px_rgba(29,41,57,0.05)]"
                >
                  <GraduationCap className="size-4 shrink-0" aria-hidden="true" />
                  {credential}
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-lg leading-relaxed text-ink/80">
              {doctor.description}
            </p>
          </motion.div>
        </div>

        {/* Professional Philosophy */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(29,41,57,0.04),0_14px_32px_-18px_rgba(29,41,57,0.2)] sm:p-10"
        >
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 size-44 rounded-full bg-soft blur-2xl"
          />
          <div className="relative">
            <span className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-5 w-1 rounded-full bg-primary" />
              <Stethoscope className="size-5 text-primary" aria-hidden="true" />
            </span>
            <h2 className="section-heading mt-3 text-2xl sm:text-3xl">
              {doctor.meetDoctor.philosophy.heading}
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              {doctor.meetDoctor.philosophy.body}
            </p>
          </div>
        </motion.div>

        {/* Qualifications & Expertise */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-16"
        >
          <h2 className="section-heading text-2xl sm:text-3xl">
            {doctor.meetDoctor.qualificationsHeading}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {doctor.meetDoctor.qualifications.map((item, i) => (
              <div
                key={item.short}
                className="group overflow-hidden rounded-2xl border border-line bg-white shadow-[0_1px_2px_rgba(29,41,57,0.04)] transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(29,41,57,0.05),0_18px_36px_-16px_rgba(232,117,36,0.25)]"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span>
                    <span className="block text-base font-semibold text-ink">{item.short}</span>
                    <span className="mt-0.5 block text-sm text-muted">{item.full}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-full bg-soft text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Plus className="size-4" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Training & Certifications + Achievements */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="rounded-3xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(29,41,57,0.04),0_14px_32px_-18px_rgba(29,41,57,0.2)] transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(29,41,57,0.05),0_24px_48px_-18px_rgba(232,117,36,0.3)] sm:p-8"
          >
            <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-soft text-primary-dark">
                <CheckCircle2 className="size-5" aria-hidden="true" />
              </span>
              {doctor.meetDoctor.trainingHeading}
            </h2>
            <ul className="mt-6 space-y-3">
              {doctor.meetDoctor.training.map((item) => (
                <li
                  key={item}
                  className="relative flex items-start gap-3 overflow-hidden rounded-xl border border-primary/20 bg-soft px-4 py-3 text-[15px] font-medium text-ink transition-colors duration-300 hover:border-primary/50 hover:bg-white"
                >
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 rounded-r-full bg-primary" />
                  <Plus className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="rounded-3xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(29,41,57,0.04),0_14px_32px_-18px_rgba(29,41,57,0.2)] transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(29,41,57,0.05),0_24px_48px_-18px_rgba(232,117,36,0.3)] sm:p-8"
          >
            <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-white">
                <Award className="size-5" aria-hidden="true" />
              </span>
              {doctor.meetDoctor.achievementsHeading}
            </h2>
            <ul className="mt-6 space-y-3">
              {doctor.meetDoctor.achievements.map((item) => (
                <li
                  key={item}
                  className="relative flex items-start gap-3 overflow-hidden rounded-xl border border-primary/20 bg-soft px-4 py-3 text-[15px] font-medium text-ink transition-colors duration-300 hover:border-primary/50 hover:bg-white"
                >
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 rounded-r-full bg-primary" />
                  <Award className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Book appointment CTA */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-16 text-center"
        >
          <a
            href="/#appointment"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_14px_30px_-10px_rgba(232,117,36,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Book an Appointment
            <ChevronDown className="size-4 -rotate-90" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-line bg-white shadow-frame"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close details"
                className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-soft text-ink transition-colors duration-300 hover:bg-primary hover:text-white"
              >
                <X className="size-4" aria-hidden="true" />
              </button>

              <div className="p-6 sm:p-7">
                <span aria-hidden="true" className="block h-1 w-10 rounded-full bg-primary" />
                <h3 className="mt-4 text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {active.short}
                </h3>
                <p className="mt-1 text-[15px] font-medium text-primary-dark">{active.full}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{active.detail}</p>

                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-sm font-medium text-ink">Need more info? We are just a call away.</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <CallNowButton
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(232,117,36,0.7)] transition-colors duration-300 hover:bg-primary-dark"
                      iconClassName="size-4"
                      ariaLabel="Call Sri Sakthi Hospital"
                    >
                      Call Now
                    </CallNowButton>
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}