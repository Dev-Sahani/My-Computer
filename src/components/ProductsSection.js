"use client";
import { cn } from "@/lib/utils";

export default function ProductSection({ className = "" }) {
  const cardsRow1 = Array.from({ length: 8 }, (_, i) => `Card ${i + 1}`);
  const cardsRow2 = Array.from({ length: 8 }, (_, i) => `Card ${i + 9}`);
  return (
    <section 
      className={
        cn(
          "relative flex flex-col items-center justify-center overflow-hidden py-6 md:py-8 bg-white z-10",
          className
        )
      }
    >
      <h2 className="text-4xl font-bold my-8">Our Products</h2>

      <div className="space-y-16 w-full max-w-6xl">
        {/* Row 1 */}
        <div className="row row-1 flex space-x-6">
          {cardsRow1.map((card, i) => (
            <div
              key={i}
              className="w-48 h-32 flex items-center justify-center rounded-2xl shadow-md bg-white text-lg font-medium"
            >
              {card}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="row row-2 flex space-x-6">
          {cardsRow2.map((card, i) => (
            <div
              key={i}
              className="w-48 h-32 flex items-center justify-center rounded-2xl shadow-md bg-white text-lg font-medium"
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes row1-scroll {
          from {
            transform: translateX(-80%);
          }
          to {
            transform: translateX(30%);
          }
        }
        @keyframes row2-scroll {
          from {
            transform: translateX(20%);
          }
          to {
            transform: translateX(-30%);
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
  )
}



const ProductCard = (product)=>{
  return (
    <div>Product</div>
  );
}