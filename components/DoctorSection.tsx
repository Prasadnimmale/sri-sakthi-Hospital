"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Stethoscope } from "lucide-react";
import { doctor } from "@/data/doctor";
import { EASE } from "@/lib/animations";

export default function DoctorSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Soft orange corner wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-soft blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:gap-16 lg:px-8">
        {/* LEFT — doctor information (fade from left) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -24 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
            }}
            className="eyebrow"
          >
            {doctor.label}
          </motion.p>

          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -26 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE, delay: 0.06 } },
            }}
            className="section-heading mt-4 text-3xl text-ink sm:text-4xl lg:text-[2.6rem]"
          >
            {doctor.name}
          </motion.h2>

          {/* Credentials */}
          <motion.ul
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
            }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {doctor.credentials.map((credential) => (
              <motion.li
                key={credential}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-very-soft px-3.5 py-1.5 text-[13px] font-medium text-primary-dark"
              >
                <GraduationCap className="size-3.5" aria-hidden="true" />
                {credential}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={{
              hidden: { opacity: 0, x: -22 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE, delay: 0.14 } },
            }}
            className="mt-6 max-w-xl leading-relaxed text-muted"
          >
            {doctor.description}
          </motion.p>

          {/* Areas of Expertise */}
          <motion.h3
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE, delay: 0.18 } },
            }}
            className="mt-9 text-xl font-semibold tracking-tight text-ink"
          >
            {doctor.expertiseHeading}
          </motion.h3>
          <motion.ul
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.22 } },
            }}
            className="mt-4 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {doctor.expertise.map((area) => (
              <motion.li
                key={area}
                variants={{
                  hidden: { opacity: 0, x: -18 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                }}
                className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 shadow-[0_1px_2px_rgba(29,41,57,0.04)]"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-soft text-primary-dark">
                  <Stethoscope className="size-4" aria-hidden="true" />
                </span>
                <span className="text-[15px] font-medium text-ink">{area}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.28 } },
            }}
            className="mt-9"
          >
            <Link
              href="/doctor"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_14px_30px_-10px_rgba(232,117,36,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Know Your Doctor
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT — dd-1.jpg as the about section image */}
        <motion.div
          initial={{ opacity: 0, x: 56 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
          className="relative mx-auto w-full max-w-lg lg:order-first lg:max-w-none"
        >
          {/* Subtle orange frame */}
          <div
            aria-hidden="true"
            className="absolute -top-4 -right-4 hidden h-full w-full rounded-[2rem] border-2 border-primary/20 sm:block"
          />
          <figure className="relative overflow-hidden rounded-[2rem] border border-line bg-very-soft shadow-[0_28px_64px_-22px_rgba(29,41,57,0.28)]">
            <Image
              src={doctor.images.about}
              alt={doctor.alt.about}
              width={1024}
              height={512}
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="h-[380px] w-full object-cover object-center sm:h-[520px] lg:h-[640px]"
            />
          </figure>
          {/* Floating experience badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_36px_-12px_rgba(29,41,57,0.3)]"
          >
            <span className="text-3xl font-bold text-primary">{doctor.experienceLabel}</span>
            <span className="text-sm leading-tight text-ink/80">
              {doctor.experienceSub}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
