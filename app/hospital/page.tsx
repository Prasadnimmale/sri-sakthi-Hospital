import Navbar from "@/components/Navbar";
import HospitalSection from "@/components/HospitalSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function HospitalPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HospitalSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}