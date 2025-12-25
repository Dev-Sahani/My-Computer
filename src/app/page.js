import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import FeedbackSection from "@/components/FeedbackSection";

export default function Home() {
  return (
    <main className="bg-[#FEFEFE]">
      {/* Hero Section */}
      <HeroSection className="root-padding" />

      <div className="relative bg-white z-10 border-y-1 border-gray-100">
        <ServicesSection className="root-padding" />

        <ProductSection className="root-padding" />
      </div>

      <FeedbackSection className="root-padding" />
    </main>
  );
}
