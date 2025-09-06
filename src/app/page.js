import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <div className="bg-[#FEFEFE]">
      {/* Hero Section */}
      <HeroSection className="root-padding" />

      {/* Product Section */}
      <ProductSection className="root-padding" />
    </div>
  );
}
