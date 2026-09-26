"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Crosshair, ShieldCheck } from "lucide-react";
import { hospital } from "@/data/hospital";
import { EASE } from "@/lib/animations";

const featureIcons = [HeartHandshake, Crosshair, ShieldCheck];

export default function WelcomeSection() {
  return (
    <section id="welcome" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-8">
        {/* LEFT — welcome content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            className="eyebrow"
          >
            {hospital.welcome.label}
          </motion.p>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.06 } },
            }}
            className="section-heading mt-4 max-w-xl text-3xl sm:text-4xl lg:text-[2.6rem]"
          >
            {hospital.welcome.heading}
          </motion.h2>

          {hospital.welcome.paragraphs.map((para, i) => (
            <motion.p
              key={para.slice(0, 24)}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.12 + i * 0.08 } },
              }}
              className="mt-5 max-w-xl leading-relaxed text-muted"
            >
              {para}
            </motion.p>
          ))}

          {/* Three feature items */}
          <div className="mt-9 space-y-6">
            {hospital.welcome.features.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <motion.div
                  key={feature.title}
                  variants={{
                    hidden: { opacity: 0, x: -22 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE, delay: 0.1 + i * 0.1 } },
                  }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-xl bg-soft text-primary-dark">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[1.05rem] font-semibold text-ink">{feature.title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT — bento stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
          className="grid grid-cols-2 gap-4 lg:gap-5"
        >
          {hospital.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 26, scale: 0.97 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: EASE },
                },
              }}
              className={`rounded-3xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(29,41,57,0.04),0_14px_34px_-18px_rgba(232,117,36,0.28)] sm:p-7 ${
                stat.span === "wide" ? "col-span-2" : ""
              }`}
            >
              <p
                className={`font-bold tracking-tight text-primary ${
                  stat.span === "wide" ? "text-6xl sm:text-7xl" : "text-4xl sm:text-5xl"
                }`}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-snug font-medium text-ink/75">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
