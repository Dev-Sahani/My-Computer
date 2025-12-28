"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

/**
 * HorizontalScrollCards - A reusable component for horizontal scrolling cards
 * 
 * @param {Array} cards - Array of card objects to display
 * @param {Function} renderCard - Function to render each card (receives card data and index)
 * @param {boolean} twoRows - If true, shows 2 rows moving in opposite directions. If false, single row.
 * @param {boolean} moveOnScroll - If true, animation tied to vertical scroll. If false, auto-scrolls.
 * @param {string} className - Additional CSS classes
 * @param {number} speed - Animation speed (for auto-scroll, in seconds). Default: 30
 * @param {number} gap - Gap between cards in pixels. Default: 24
 * @param {string} cardWidth - Width of each card. Default: "400px"
 * @param {string} backgroundColor - Background color for blur fade (CSS color value). Default: "white"
 */
export default function HorizontalScrollCards({
  cards = [],
  renderCard,
  twoRows = false,
  moveOnScroll = false,
  className = "",
  speed = 30,
  gap = 24,
  cardWidth = "400px",
  backgroundColor = "white",
  copyCount = 3,
}) {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = Array.from({ length: copyCount }, () => cards).flat();

  useEffect(() => {
    if (!moveOnScroll) {
      // Auto-scroll animation
      const row1 = row1Ref.current;
      const row2 = row2Ref.current;

      if (row1) {
        const totalWidth = row1.scrollWidth / copyCount; // Since we duplicated 3 times
        row1.style.animation = `scroll-left ${speed}s linear infinite`;
      }

      if (row2 && twoRows) {
        row2.style.animation = `scroll-right ${speed}s linear infinite`;
      }
    }
  }, [moveOnScroll, speed, twoRows]);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Blur fade areas on left and right - creates smooth entry/exit */}
      <div 
        className="w-full h-full absolute left-0 top-0 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to right, ${backgroundColor} 0%, transparent 10%, transparent 90%, ${backgroundColor} 100%)`,
        }}
      />

      <div className="px-20 space-y-4">
        {/* Row 1 */}
        <div
          ref={row1Ref}
          className={cn(
            "flex",
            moveOnScroll ? "scroll-row-1" : "auto-scroll-row-1"
          )}
          style={{ gap: `${gap}px` }}
        >
          {duplicatedCards.map((card, i) => (
            <div
              key={`row1-${i}`}
              style={{ minWidth: cardWidth, width: cardWidth }}
            >
              {renderCard ? renderCard(card, i) : <DefaultCard card={card} />}
            </div>
          ))}
        </div>

        {/* Row 2 - Only if twoRows is true */}
        {twoRows && (
          <div
            ref={row2Ref}
            className={cn(
              "flex",
              moveOnScroll ? "scroll-row-2" : "auto-scroll-row-2"
            )}
            style={{ gap: `${gap}px` }}
          >
            {[...duplicatedCards].reverse().map((card, i) => (
              <div
                key={`row2-${i}`}
                style={{ minWidth: cardWidth, width: cardWidth }}
              >
                {renderCard ? renderCard(card, i) : <DefaultCard card={card} />}
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        /* Scroll-based animations (moveOnScroll = true) */
        @keyframes row1-scroll {
          from {
            transform: translateX(calc(-100% + 5rem));
          }
          to {
            transform: translateX(calc(0% + 5rem));
          }
        }

        @keyframes row2-scroll {
          from {
            transform: translateX(calc(0% - 5rem));
          }
          to {
            transform: translateX(calc(-100% - 5rem));
          }
        }

        /* Auto-scroll animations (moveOnScroll = false) */
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(calc(-100% / 3));
          }
          to {
            transform: translateX(0);
          }
        }

        /* Scroll-based animation styles */
        @supports (animation-timeline: scroll()) {
          .scroll-row-1 {
            will-change: transform;
            animation: row1-scroll linear forwards;
            animation-timeline: scroll(root);
            animation-range: 0% 100%;
          }

          .scroll-row-2 {
            will-change: transform;
            animation: row2-scroll linear forwards;
            animation-timeline: scroll(root);
            animation-range: 0% 100%;
          }
        }

        /* Fallback for browsers without scroll timeline support */
        @supports not (animation-timeline: scroll()) {
          .scroll-row-1 {
            will-change: transform;
            animation: row1-scroll 60s linear infinite;
          }

          .scroll-row-2 {
            will-change: transform;
            animation: row2-scroll 60s linear infinite;
          }
        }

        /* Auto-scroll styles */
        .auto-scroll-row-1 {
          will-change: transform;
        }

        .auto-scroll-row-2 {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

// Default card component if no renderCard function is provided
function DefaultCard({ card }) {
  return (
    <div className="flex items-start gap-4 bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
      {card.icon && (
        <div className="h-full flex-shrink-0 flex items-center justify-center">
          {card.icon}
        </div>
      )}
      <div className="flex flex-col">
        {card.name && (
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {card.name}
          </h3>
        )}
        {card.description && (
          <p className="text-gray-600 text-sm leading-snug">{card.description}</p>
        )}
      </div>
    </div>
  );
}

