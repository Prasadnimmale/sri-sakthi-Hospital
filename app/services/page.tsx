import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesPage from "@/components/ServicesPage";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { hospital } from "@/data/hospital";

export const metadata: Metadata = {
  title: "Our Services | Sri Sakthi Hospital",
  metadataBase: new URL(hospital.url),
  description:
    "Explore healthcare services at Sri Sakthi Hospital — outpatient consultation, inpatient care, day care, diagnostics, pharmacy, IV therapy and 24/7 emergency care in Rajahmundry.",
  alternates: { canonical: "/services" },
};

export default function ServicesRoute() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ServicesPage />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}