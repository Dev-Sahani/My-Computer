import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="bg-[#FEFEFE]">
      {/* Hero Section */}
      <HeroSection className="root-padding" />

      {/* Product Section */}
      <ServicesSection className="root-padding" />

      <ProductSection className="root-padding"/>
    </div>
  );
}
