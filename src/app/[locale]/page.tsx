import FAQSection from "@/components/faq";
import PageFooter from "@/components/footer";
import FreeTrialSection from "@/components/freeTrial";
import Hero from "@/components/hero";
import HowItWorks from "@/components/howItWork";
import Navbar from "@/components/navbar";
import OurServices from "@/components/ourServices";
import StatsSection from "@/components/stats";
import WhyChooseUs from "@/components/whyChooseUs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        {/* <ImageGallery /> */}
        <OurServices />
        <HowItWorks />
        <WhyChooseUs />
        <FreeTrialSection />
        {/* <PricingPlans /> */}
        {/* <ClientReviews /> */}
        <FAQSection />
        <PageFooter />
      </main>
    </>
  );
}
