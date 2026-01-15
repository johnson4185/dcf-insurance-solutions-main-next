import HeroSection from "@/components/home/HeroSection";
import WhyDCFSection from "@/components/home/WhyDCFSection";
import DigitalTransformationSection from "@/components/home/DigitalTransformationSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProductsSection from "@/components/home/ProductsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyDCFSection />
      <DigitalTransformationSection />
      <IndustriesSection />
      <ProductsSection />
      <CTASection />
    </>
  );
}
