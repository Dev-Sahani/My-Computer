import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export default function FeedbackCard({
  className = "",
  name = "Anonymous",
  avatar = null,
  rating = 5,
  review = "Great service and support!",
}) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <article
      className={cn(
        "w-full h-full bg-white rounded-lg shadow-md p-6 flex flex-col justify-between",
        className
      )}
      role="article"
      aria-label={`Feedback from ${name}`}
    >
      <header className="flex items-center gap-4">
        {avatar ? (
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
            {(name || "A").charAt(0)}
          </div>
        )}

        <div className="flex-1">
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-gray-500">Verified customer</div>
        </div>

        <div className="flex items-center gap-1">
          {stars.map((s) => (
            <Star
              key={s}
              className={cn(
                "w-4 h-4",
                s <= rating ? "text-yellow-400" : "text-gray-200"
              )}
            />
          ))}
        </div>
      </header>

      <blockquote className="mt-4 flex-1 flex items-center">
        <p className="text-gray-700 italic text-base leading-relaxed">
          “{review}”
        </p>
      </blockquote>

      <footer className="mt-6 text-xs text-gray-400">
        Thanks for your feedback.
      </footer>
    </article>
  );
}
