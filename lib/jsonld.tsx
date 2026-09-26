import { hospital } from "@/data/hospital";
import { contact } from "@/data/contact";
import { doctor } from "@/data/doctor";
import { services } from "@/data/services";

const siteUrl = hospital.url;

/** Hospital + MedicalOrganization + Physician + MedicalService + BreadcrumbList — only supplied facts. */
export function JsonLd() {
  const sameAs: string[] = Object.values(contact.socials).filter(Boolean);

  const hospitalJsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "@id": `${siteUrl}/#hospital`,
    name: hospital.name,
    description: hospital.description,
    url: siteUrl,
    telephone: contact.phonePrimary,
    email: contact.email,
    image: `${siteUrl}/images/dr-sakthi-hero.webp`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "79-16-6, Tilak Road, Opposite Lane to Sai Baba Temple",
      addressLocality: "Rajahmundry",
      addressRegion: "Andhra Pradesh",
      postalCode: "533101",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate Tilak Road, Rajahmundry coordinates for maps reference
      latitude: 17.0009,
      longitude: 81.78,
    },
    availableService: services.map((service) => ({
      "@type": "MedicalService",
      name: service.name,
      description: service.description,
      provider: { "@id": `${siteUrl}/#hospital` },
    })),
    medicalSpecialty: [
      "https://schema.org/FamilyMedicine",
      "https://schema.org/InternalMedicine",
      "https://schema.org/InfectiousDisease",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "17:30",
        closes: "21:00",
      },
    ],
    employee: { "@id": `${siteUrl}/#physician` },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: hospital.name,
    alternateName: hospital.shortName,
    slogan: hospital.tagline.replace(/•/g, "·"),
    description: hospital.description,
    url: siteUrl,
    telephone: contact.phonePrimary,
    email: contact.email,
    logo: `${siteUrl}/images/logo-dd.png`,
    sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: "79-16-6, Tilak Road, Opposite Lane to Sai Baba Temple",
      addressLocality: "Rajahmundry",
      addressRegion: "Andhra Pradesh",
      postalCode: "533101",
      addressCountry: "IN",
    },
    contactPoint: contact.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: `+91-${phone.startsWith("0") ? phone.slice(1) : phone}`,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    })),
  };

  const physicianJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteUrl}/#physician`,
    name: doctor.name,
    description: doctor.description,
    image: `${siteUrl}/images/dr-sakthi-doctor.jpg`,
    url: siteUrl,
    telephone: contact.phonePrimary,
    medicalSpecialty: [
      "Family Medicine",
      "Internal Medicine",
      "Diabetology",
      "Infectious Diseases",
    ],
    knowsLanguage: ["English", "Telugu", "Hindi"],
    worksFor: { "@id": `${siteUrl}/#hospital` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "79-16-6, Tilak Road, Opposite Lane to Sai Baba Temple",
      addressLocality: "Rajahmundry",
      addressRegion: "Andhra Pradesh",
      postalCode: "533101",
      addressCountry: "IN",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${siteUrl}/#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: `${siteUrl}/#services`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Hospital",
        item: `${siteUrl}/#hospital-section`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: `${siteUrl}/#contact`,
      },
    ],
  };

  const graph = [
    hospitalJsonLd,
    organizationJsonLd,
    physicianJsonLd,
    breadcrumbJsonLd,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
}
