"use client";
import { cn } from "@/lib/utils";
import products from "@/constants/products";

export default function ProductSection({ className = "" }) {
  const reversedProducts = [...products].reverse();
  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden py-6 md:py-12 bg-white z-10",
        className
      )}
    >
      <h2 className="text-4xl font-bold mb-12">Our Products</h2>

      <div className="space-y-4 w-full max-w-6xl">
        {/* Row 1 */}
        <div className="row row-1 flex space-x-6">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="row row-2 flex space-x-6">
          {reversedProducts.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes row1-scroll {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(10%);
          }
        }
        @keyframes row2-scroll {
          from {
            transform: translateX(60%);
          }
          to {
            transform: translateX(-40%);
          }
        }

        @supports (animation-timeline: scroll()) {
          .row {
            will-change: transform;
          }

          .row-1 {
            animation: row1-scroll linear forwards;
            animation-timeline: scroll(root);
            animation-range: 0% 100%;
          }

          .row-2 {
            animation: row2-scroll linear forwards;
            animation-timeline: scroll(root);
            animation-range: 0% 100%;
          }
        }
      `}</style>
    </section>
  );
}

function ProductCard({ product: { name, description, icon } = {}}) {
  return (
    <div className="flex items-start gap-4 bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-all duration-300 w-[400px] min-w-[400px]">
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
