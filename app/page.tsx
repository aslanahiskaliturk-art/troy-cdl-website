import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import CareerStrip from "@/components/CareerStrip";
import TruckDivider from "@/components/TruckDivider";
import CredentialsSection from "@/components/CredentialsSection";
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
        <TruckDivider direction="ltr" label="State Licensed &amp; Authorized" />
        <CredentialsSection />
        <TruckDivider direction="rtl" label="How to Get Your Ohio CDL" />
        <OhioRequirementsSection />
        <TruckDivider direction="ltr" label="Grants &amp; Tuition Assistance" />
        <GrantsSection />
        <TruckDivider direction="rtl" label="Class A &amp; B CDL License Training" />
        <TrainingSection />
        <TruckDivider direction="ltr" label="Hear From Our Graduates" />
        <ReviewsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
