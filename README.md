# Sri Sakthi Hospital — Website

Premium orange + white hospital website for **Sri Sakthi Hospital, Rajahmundry**, built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion and Lucide React.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Doctor photographs (important)

The two supplied photographs of Dr. Sakthi Narasimha Garikapati were **not present in this workspace** (no image files existed). Branded placeholders were generated at the exact required paths so layout, `next/image` handling and alt text are production-wired:

| Path | Used in | Assigned image |
| --- | --- | --- |
| `public/images/dr-sakthi-hero.webp` | HERO, right side | Image 1 — blue scrubs at hospital desk |
| `public/images/dr-sakthi-doctor.jpg` | ABOUT, right side | Image 2 — white coat portrait |

To finish, replace those two files with the originals (same filenames, no stock/AI substitutes), then run `npm run build`. All framing uses natural `object-cover` with `object-top` so faces are never cropped or distorted.

## Editable content

All hospital information lives in `data/`:

- `data/hospital.ts` — identity, hero copy, trust items, welcome content, stats, hospital section
- `data/services.ts` — 7 services with Lucide icons
- `data/doctor.ts` — doctor profile, credentials, expertise, image paths + alt text
- `data/contact.ts` — address, phones, email, timings, WhatsApp, maps links, departments

## Structure

```
app/            layout (SEO + JSON-LD), page, sitemap.ts, robots.ts, icon.svg
components/     Navbar, Hero, WelcomeSection, Services, DoctorSection,
                HospitalSection, Appointment, Contact, Footer, FloatingActions
data/           hospital.ts, services.ts, doctor.ts, contact.ts
lib/            animations.ts (reduced-motion-aware variants), jsonld.tsx
public/images/  doctor photographs (replace placeholders with originals)
```

## Notes

- Google Sans is declared first in the font stack; visitors without the private font gracefully fall back to system sans.
- Animations are viewport-based and fully disabled under `prefers-reduced-motion`.
- JSON-LD includes Hospital, MedicalOrganization, Physician, MedicalService and BreadcrumbList — only supplied facts, nothing invented.
- The appointment form validates client-side (name, phone, department, date, time) and shows a confirmation state; connect it to a backend or WhatsApp deep-link when ready.
