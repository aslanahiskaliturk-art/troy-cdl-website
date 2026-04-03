import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import CareerStrip from "@/components/CareerStrip";
import TruckDivider from "@/components/TruckDivider";
import OhioRequirementsSection from "@/components/OhioRequirementsSection";
import GrantsSection from "@/components/GrantsSection";
import TrainingSection from "@/components/TrainingSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyPhone from "@/components/StickyPhone";

export default function Home() {
  return (
    <>
      <Navigation />
      <StickyPhone />
      <main>
        <Hero />
        <BenefitsSection />
        <CareerStrip />
        <TruckDivider direction="ltr" label="How to Get Your Ohio CDL" />
        <OhioRequirementsSection />
        <TruckDivider direction="rtl" label="Grants &amp; Tuition Assistance" />
        <GrantsSection />
        <TruckDivider direction="ltr" label="Class A &amp; B CDL License Training" />
        <TrainingSection />
        <TruckDivider direction="rtl" label="Hear From Our Graduates" />
        <ReviewsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
