'use client';
import services from "@/constants/services";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useCursor } from "@/context/CursorContext";

export default function ServicesSection({ className }) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <h1 className="w-full text-center mb-12 md:mb-16 font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight tracking-tight">
        <div><span className="text-blue-400">OUR AGENCY</span> PROVIDES THESE</div>
        <div className="text-blue-400">SERVICES</div>
      </h1>
      <div className="flex flex-col">
        {services?.map((service, index) => (
          <ServiceItem 
            key={index} 
            service={service} 
            index={index + 1}
          />
        ))}
      </div>
    </section>
  );
}

const ServiceItem = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setCursorContent } = useCursor();

  const formatIndex = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <>
      <div
        className={cn(
          "relative group transition-all duration-300 cursor-none",
          "text-gray-900 py-5 md:py-6 lg:py-8 border-t border-blue-200",
          isHovered && "py-16 bg-blue-400 text-white rounded-lg md:rounded-xl"
        )}
        onMouseEnter={() => {
          setIsHovered(true);
          setCursorContent(service.icon);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setCursorContent(null);
        }}
      >
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8 px-4 md:px-6">
          {/* Serial Number */}
          <div className={cn(
            "text-xl md:text-2xl lg:text-3xl font-bold flex-shrink-0 min-w-[3rem] md:min-w-[4rem]",
            "text-blue-400 transition-colors duration-300",
            isHovered && "text-white"
          )}>
            {formatIndex(index)}
          </div>

          {/* Service Name */}
          <div className={cn(
            "text-lg md:text-xl lg:text-2xl font-semibold flex-shrink-0 min-w-[15rem] md:min-w-[20rem]",
            "text-blue-400 transition-colors duration-300",
            isHovered && "text-white"
          )}>
            {service.name}
          </div>

          {/* Description */}
          <p className={cn(
            "text-sm md:text-base flex-grow",
            "text-gray-700 transition-colors duration-300",
            isHovered && "text-white"
          )}>
            {service.description}
          </p>

          {/* Arrow */}
          <div className="flex-shrink-0">
            <div className={cn(
              "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300",
              "bg-white border border-blue-300",
              isHovered && "bg-white"
            )}>
              <ArrowUpRight 
                className={cn(
                  "w-5 h-5 md:w-6 md:h-6 transition-all duration-500",
                  "text-blue-400 rotate-[45deg]",
                  isHovered && "rotate-0"
                )} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
