import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutDoctor from "@/components/AboutDoctor";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { hospital } from "@/data/hospital";

export const metadata: Metadata = {
  title: "Meet Your Doctor | Sri Sakthi Hospital",
  metadataBase: new URL(hospital.url),
  description:
    "Meet Dr. Sakthi Narasimha Garikapati — education, qualifications, professional philosophy, training and achievements at Sri Sakthi Hospital, Rajahmundry.",
  alternates: { canonical: "/doctor" },
};

export default function DoctorPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <AboutDoctor />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}