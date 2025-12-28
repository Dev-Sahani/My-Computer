"use client";
import { cn } from "@/lib/utils";
import products from "@/constants/products";
import HorizontalScrollCards from "./HorizontalScrollCards";

export default function ProductSection({ className = "" }) {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden py-6 md:py-12 bg-white z-10",
        className
      )}
    >
      <h2 className="text-4xl font-bold mb-12">Our Products</h2>

      <HorizontalScrollCards
        cards={products}
        renderCard={(product) => <ProductCard product={product} />}
        twoRows={true}
        moveOnScroll={true}
        cardWidth="400px"
        gap={24}
        backgroundColor="white"
        className="w-full"
        copyCount={1}
      />
    </section>
  );
}
function ProductCard({ product: { name, description, icon } = {}}) {
  return (
    <div className="flex items-start gap-4 bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
      {/* Icon */}
      <div className="h-full flex-shrink-0 flex items-center justify-center">{icon}</div>

      {/* Text Content */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm leading-snug">{description}</p>
      </div>
    </div>
  );
}

