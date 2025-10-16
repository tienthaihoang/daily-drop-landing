import ClientReviews from "@/components/clientReviews";
import FAQSection from "@/components/faq";
import PageFooter from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/howItWork";
import ImageGallery from "@/components/imageGallery";
import Navbar from "@/components/navbar";
import OurServices from "@/components/ourServices";
import PricingPlans from "@/components/pricingPlans";
import WhyChooseUs from "@/components/whyChooseUs";

export default function HomePage() {
  // await new Promise((resolve) => setTimeout(resolve, 6000));

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImageGallery />
        <HowItWorks />
        <OurServices />
        <WhyChooseUs />
        <PricingPlans />
        <ClientReviews />
        <FAQSection />
        <PageFooter />
      </main>
    </>
  );
}
