"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  MessageCircle,
  Phone,
  CheckCircle2,
  User,
  Mail,
  CalendarDays,
  Clock3,
  Building2,
  Send,
} from "lucide-react";
import { contact, tel } from "@/data/contact";
import { EASE } from "@/lib/animations";
import CallNowButton from "@/components/CallNowButton";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  department: string;
  date: string;
  time: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  fullName: "",
  phone: "",
  email: "",
  department: "",
  date: "",
  time: "",
  message: "",
};

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!/^[+\d][\d\s-]{8,14}$/.test(form.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!form.department) errors.department = "Please choose a department.";
  if (!form.date) errors.date = "Please pick a preferred date.";
  if (!form.time) errors.time = "Please pick a preferred time.";
  return errors;
}

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none";
const labelClass = "mb-1.5 block text-[13px] font-medium text-ink/80";

export default function Appointment() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section id="appointment" className="relative overflow-hidden bg-very-soft py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="cross-texture absolute inset-x-0 top-0 h-40 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid gap-8 overflow-hidden rounded-[2.25rem] border border-line bg-white p-3 shadow-[0_1px_2px_rgba(29,41,57,0.04),0_24px_60px_-30px_rgba(232,117,36,0.3)] sm:p-5 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12 lg:p-6"
        >
          <>
            {/* LEFT â€” heading + CTAs */}
            <div className="rounded-[2rem] border border-primary/15 bg-soft p-6 sm:p-8 lg:p-9">
              <p className="eyebrow">Book Appointment</p>
              <h2 className="section-heading mt-4 text-3xl sm:text-4xl">
                Book Your Appointment Today
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                Simple, fast, and convenient scheduling for your healthcare needs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary-dark"
                >
                  <MessageCircle className="size-[18px] text-primary" aria-hidden="true" />
                  WhatsApp Now
                </a>
                <CallNowButton
                  className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary-dark"
                  iconClassName="size-[18px] text-primary"
                  ariaLabel="Call Sri Sakthi Hospital"
                >
                  Call Hospital
                </CallNowButton>
              </div>

              <p className="mt-6 text-sm text-muted">
                Prefer to walk in? We accept both walk-in and appointment-based consultations
                during all OPD hours.
              </p>

              <div className="mt-8 rounded-2xl border border-primary/15 bg-white/70 p-4">
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-primary-dark shadow-sm">
                    <CalendarCheck className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">A simple way to get started</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      Share your details and preferred time. Our front desk will call you to confirm your visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT â€” form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="grid place-items-center rounded-3xl border border-primary/25 bg-white p-10 text-center"
              >
                <div>
                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-soft text-primary">
                    <CheckCircle2 className="size-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-ink">
                    Request received, thank you!
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-muted">
                    Our front desk will call you shortly on{" "}
                    <span className="font-medium text-ink">{form.phone}</span> to confirm your
                    appointment. For urgent needs, please call{" "}
                    <a href={tel(contact.phonePrimary)} className="font-medium text-primary-dark">
                      {contact.phonePrimary}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(initialForm);
                      setSubmitted(false);
                    }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-primary/50 hover:text-primary-dark"
                  >
                    Book another appointment
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="bg-white p-3 sm:p-5 lg:p-6">
                <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted"
                        aria-hidden="true"
                      />
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        value={form.fullName}
                        onChange={update("fullName")}
                        aria-invalid={!!errors.fullName}
                        className={`${inputClass} pl-10 ${errors.fullName ? "border-red-400" : ""}`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted"
                        aria-hidden="true"
                      />
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={update("phone")}
                        aria-invalid={!!errors.phone}
                        className={`${inputClass} pl-10 ${errors.phone ? "border-red-400" : ""}`}
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-muted/70">(optional)</span>
                  </label>
                  <div className="relative">
                    <Mail
                      className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted"
                      aria-hidden="true"
                    />
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={update("email")}
                      aria-invalid={!!errors.email}
                      className={`${inputClass} pl-10 ${errors.email ? "border-red-400" : ""}`}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="department" className={labelClass}>
                      Preferred Department
                    </label>
                    <div className="relative">
                      <Building2
                        className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted"
                        aria-hidden="true"
                      />
                      <select
                        id="department"
                        value={form.department}
                        onChange={update("department")}
                        aria-invalid={!!errors.department}
                        className={`${inputClass} appearance-none pl-10 ${errors.department ? "border-red-400" : ""}`}
                      >
                        <option value="">Select a department</option>
                        {contact.departments.map((department) => (
                          <option key={department} value={department}>
                            {department}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.department && (
                      <p className="mt-1 text-xs text-red-500">{errors.department}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="date" className={labelClass}>
                      Preferred Date
                    </label>
                    <div className="relative">
                      <CalendarDays
                        className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted"
                        aria-hidden="true"
                      />
                      <input
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={update("date")}
                        aria-invalid={!!errors.date}
                        className={`${inputClass} pl-10 ${errors.date ? "border-red-400" : ""}`}
                      />
                    </div>
                    {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className={labelClass}>
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock3
                      className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted"
                      aria-hidden="true"
                    />
                    <select
                      id="time"
                      value={form.time}
                      onChange={update("time")}
                      aria-invalid={!!errors.time}
                      className={`${inputClass} appearance-none pl-10 ${errors.time ? "border-red-400" : ""}`}
                    >
                      <option value="">Select a time slot</option>
                      <option value="Morning (9:00 AM â€“ 12:30 PM)">
                        Morning (9:00 AM â€“ 12:30 PM)
                      </option>
                      <option value="Evening (5:30 PM â€“ 9:00 PM)">
                        Evening (5:30 PM â€“ 9:00 PM)
                      </option>
                    </select>
                  </div>
                  {errors.time && <p className="mt-1 text-xs text-red-500">{errors.time}</p>}
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message <span className="text-muted/70">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Briefly describe your concernâ€¦"
                    value={form.message}
                    onChange={update("message")}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-[15px] font-medium text-white shadow-[0_14px_30px_-10px_rgba(232,117,36,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark sm:w-auto"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Request Appointment
                </button>
                <p className="text-xs leading-relaxed text-muted">
                  Your details are used only to schedule your visit. For medical emergencies,
                  please call {contact.phonePrimary} directly.
                </p>
                </div>
              </form>
            )}
          </>
        </motion.div>
      </div>
    </section>
  );
}
