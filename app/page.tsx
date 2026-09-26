import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import Services from "@/components/Services";
import DoctorSection from "@/components/DoctorSection";
import HospitalSection from "@/components/HospitalSection";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <WelcomeSection />
        <Services />
        <DoctorSection />
        <HospitalSection />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
