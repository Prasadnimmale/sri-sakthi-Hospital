"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  Award,
  Languages,
  Building2,
  Siren,
} from "lucide-react";
import { hospital } from "@/data/hospital";
import { doctor } from "@/data/doctor";
import CallNowButton from "@/components/CallNowButton";
import { EASE, scrollToSection } from "@/lib/animations";

const trustIcons = [Award, Languages, Building2, Siren];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-bg relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:min-h-[92vh] lg:pt-36 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* LEFT â€” content */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.05 }}
          className="relative z-10 max-w-xl"
        >
          {/* Eyebrow: Listening â€¢ Caring â€¢ Healing */}
          <motion.div
            variants={{
              hidden: { y: 18 },
              visible: { y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1"
            aria-label="Listening, Caring, Healing"
          >
            {hospital.heroLabel.map((word, i) => (
              <span key={word} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                )}
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary-dark">
                  {word}
                </span>
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={{
              hidden: { y: 26 },
              visible: { y: 0, transition: { duration: 0.75, ease: EASE, delay: 0.08 } },
            }}
            className="mt-5 text-[2.5rem] leading-[1.08] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]"
          >
            {hospital.heroHeading.map((line, i) => (
              <span key={line} className="block">
                {i === hospital.heroHeading.length - 1 ? (
                  <span className="text-primary">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={{
              hidden: { y: 22 },
              visible: { y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.18 } },
            }}
            className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted"
          >
            {hospital.heroSupport}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: {},
              visible: { y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.28 } },
            }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#appointment"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("appointment");
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_14px_30px_-10px_rgba(232,117,36,0.65)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              <CalendarCheck className="size-[18px]" aria-hidden="true" />
              Book Appointment
            </a>
            <CallNowButton
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-[15px] font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary-dark"
              iconClassName="size-[18px] text-primary"
            />
          </motion.div>

          {/* Trust items as 4 button cards */}
          <motion.ul
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.42 } },
            }}
            className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {hospital.heroTrust.map((item, i) => {
              const Icon = trustIcons[i % trustIcons.length];
              return (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { y: 14 },
                    visible: { y: 0, transition: { duration: 0.5, ease: EASE } },
                  }}
                >
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 text-left text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_10px_24px_-10px_rgba(29,41,57,0.16)]"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-soft text-primary-dark">
                      <Icon className="size-[17px]" aria-hidden="true" />
                    </span>
                    {item}
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* RIGHT â€” doctor photo in a circle (in-flow centered on mobile, right-anchored on desktop) */}
        <motion.div
          initial={{ x: 64 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="pointer-events-none mt-12 flex flex-col items-center lg:pointer-events-auto lg:absolute lg:inset-y-0 lg:right-40 lg:mt-0 lg:translate-y-5 lg:justify-center xl:right-56"
        >
          <div className="relative flex size-[196px] items-center justify-center sm:size-[330px] lg:size-[455px] xl:size-[530px]">
            <div
              className="absolute left-1/2 top-1/2 size-[164px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-[0_40px_80px_-24px_rgba(29,41,57,0.35)] ring-8 ring-white sm:size-[280px] lg:size-[400px] xl:size-[470px]"
              style={{
                backgroundImage: `url(${doctor.images.hero})`,
                backgroundSize: "150%",
                backgroundPosition: "center",
              }}
            />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.45 } } }}
            className="mt-5 grid w-full max-w-[360px] grid-cols-2 justify-items-center gap-x-3 gap-y-2.5 sm:mt-6 sm:max-w-[400px]"
          >
            {doctor.credentials.map((credential, index) => (
              <motion.span
                key={credential}
                variants={{
                  hidden: { y: 12 },
                  visible: { y: 0, transition: { duration: 0.45, ease: EASE } },
                }}
                className={`inline-flex min-w-[92px] items-center justify-center rounded-full border border-primary/20 bg-white px-3 py-2 text-center text-sm font-semibold tracking-tight text-primary-dark shadow-[0_6px_18px_-8px_rgba(232,117,36,0.35)] sm:min-w-[112px] sm:text-[15px] ${index === 4 ? "col-span-2" : ""}`}
              >
                {credential}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}