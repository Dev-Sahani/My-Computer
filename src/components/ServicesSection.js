import services from "@/constants/services";
import { cn } from "@/lib/utils";
import ServiceItem from "./ServiceItem";

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
