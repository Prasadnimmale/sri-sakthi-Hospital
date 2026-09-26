import type { Metadata, Viewport } from "next";
import "./globals.css";
import { hospital } from "@/data/hospital";
import { contact } from "@/data/contact";
import { JsonLd } from "@/lib/jsonld";

const title = "Sri Sakthi Hospital | Compassionate Healthcare in Rajahmundry";

export const metadata: Metadata = {
  metadataBase: new URL(hospital.url),
  title,
  description: hospital.description,
  applicationName: hospital.name,
  keywords: [
    "Sri Sakthi Hospital",
    "hospital in Rajahmundry",
    "Dr. Sakthi Narasimha Garikapati",
    "family medicine Rajahmundry",
    "OPD IPD day care Rajahmundry",
    "diagnostics pharmacy Rajahmundry",
    "emergency care Rajahmundry",
    "East Godavari hospital",
  ],
  authors: [{ name: hospital.name }],
  icons: {
    icon: "/images/logo-dd.png",
    apple: "/images/logo-dd.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: hospital.name,
    locale: "en_IN",
    title,
    description: hospital.description,
    images: [
      {
        url: "/images/dr-sakthi-hero.webp",
        width: 1200,
        height: 900,
        alt: "Dr. Sakthi Narasimha Garikapati at Sri Sakthi Hospital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: hospital.description,
    images: ["/images/dr-sakthi-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Health",
};

export const viewport: Viewport = {
  themeColor: "#E87524",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
