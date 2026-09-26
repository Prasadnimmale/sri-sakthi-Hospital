"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { services, servicesIntro } from "@/data/services";
import { EASE } from "@/lib/animations";
import { contact, tel } from "@/data/contact";

/** Asymmetric spans so cards never look identical. */
const spans = [
  "lg:col-span-4", // Outpatient â€” wide
  "lg:col-span-5", // Inpatient â€” extra tall emphasis
  "lg:col-span-3", // Day Care â€” narrow
  "lg:col-span-3", // Diagnostics â€” narrow
  "lg:col-span-4", // Pharmacy â€” medium
  "lg:col-span-5", // IV Therapy â€” medium
  "lg:col-span-12", // Emergency â€” full-width strip
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-very-soft to-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-2xl"
        >
          <motion.h2
            variants={{
              hidden: { y: 20 },
              visible: { y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="section-heading text-3xl sm:text-4xl lg:text-[2.6rem]"
          >
            {servicesIntro.heading}
          </motion.h2>
          <motion.p
            variants={{
              hidden: { y: 18 },
              visible: { y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.08 } },
            }}
            className="mt-4 text-[1.05rem] leading-relaxed text-muted"
          >
            {servicesIntro.description}
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.name}
                variants={{
                  hidden: { y: 30 },
                  visible: { y: 0, transition: { duration: 0.65, ease: EASE } },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`group relative overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(29,41,57,0.04),0_10px_30px_-18px_rgba(29,41,57,0.18)] transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(29,41,57,0.05),0_22px_44px_-16px_rgba(232,117,36,0.28)] sm:p-7 ${spans[i]}`}
              >
                {/* Orange accent line â€” grows on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-[3px] origin-left scale-x-0 rounded-b-full bg-primary transition-transform duration-300 group-hover:scale-x-100"
                />
                <span className="grid size-12 place-items-center rounded-2xl bg-soft text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon
                    className="size-[22px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    aria-hidden="true"
                  />
                </span>
                <h3
                  className={`mt-5 font-semibold tracking-tight text-ink ${
                    i === 6 ? "text-xl sm:text-2xl" : "text-lg"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`mt-2 leading-relaxed text-muted ${
                    i === 6 ? "max-w-xl" : "text-sm"
                  }`}
                >
                  {service.description}
                </p>
                {/* Emergency strip: direct dial, no picker card */}
                {i === 6 && (
                  <a
                    href={tel(contact.phonePrimary)}
                    aria-label={`Call emergency line on ${contact.phonePrimary}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    Call Emergency Line
                  </a>
                )}
              </motion.article>
            );
          })}
        </motion.div>

        {/* View all services */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-10 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-7 py-3 text-[15px] font-medium text-primary-dark transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-soft"
          >
            View All Services
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}