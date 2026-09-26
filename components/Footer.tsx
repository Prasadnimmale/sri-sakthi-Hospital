import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Logo from "@/components/Logo";
import { hospital } from "@/data/hospital";
import { contact, tel } from "@/data/contact";
import { services } from "@/data/services";

const socialNetworks = [
  { key: "facebook", label: "Facebook", icon: Facebook },
  { key: "instagram", label: "Instagram", icon: Instagram },
] as const satisfies readonly { key: keyof typeof contact.socials; label: string; icon: LucideIcon }[];

const socialLinks = socialNetworks.flatMap((network) => {
  const href = contact.socials[network.key];
  if (!href) return [];
  return [{ ...network, href }];
});

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Hospital", href: "/hospital" },
  { label: "Contact", href: "#contact" },
  { label: "Book Appointment", href: "#appointment" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {hospital.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${hospital.name} on ${social.label}`}
                    className="grid size-10 place-items-center rounded-full border border-line text-ink transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary-dark"
                  >
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-ink uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href="#services"
                    className="text-sm text-muted transition-colors hover:text-primary-dark"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-ink uppercase">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.14em] text-ink uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={tel(phone)}
                    className="inline-flex items-center gap-2.5 text-muted transition-colors hover:text-primary-dark"
                  >
                    <Phone className="size-4 text-primary" aria-hidden="true" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2.5 break-all text-muted transition-colors hover:text-primary-dark"
                >
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-muted">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  {contact.address.lines[0]} {contact.address.lines[2]}, {contact.address.lines[3]}
                </span>
              </li>
            </ul>
            <a
              href="#appointment"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-dark transition-colors hover:text-primary"
            >
              Book an appointment
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-7 sm:flex-row">
          <p className="text-[13px] text-muted">
            © 2026 Sri Sakthi Hospital. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-[13px] text-muted transition-colors hover:text-primary-dark">
              Privacy Policy
            </a>
            <a href="#home" className="text-[13px] text-muted transition-colors hover:text-primary-dark">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
