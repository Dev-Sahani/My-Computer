import services from "@/constants/services";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ServicesSection({ className }) {
  return (
    <div className={cn("py-6 md:py-8 bg-white relative border-t z-10", className)}>
      <h1 className="w-full text-center mt-2 mb-8 font-bold text-5xl text-gray-900">
        Services We Offer
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {
          services?.map((s, indx) => <Card key={indx} service={s} />)
        }
      </div>
    </div>
  );
}

const Card = ({ service }) => {
  return (
    <div className="relative flex justify-center items-center h-full w-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <div className="h-full w-full p-3 md:p-5 relative flex flex-col gap-2 lg:gap-3 justify-between text-gray-700 rounded-lg rounded-gradient hero-gradient">
          <div className="flex flex-col gap-3 lg:gap-4">
            <div className="flex justify-between">
              <h5 className="max-w-[60%] text-xl antialiased font-semibold leading-tight tracking-normal text-blue-300">
                {service.name}
              </h5>
              {service?.icon}
            </div>
            <p className="block font-bold text-justify antialiased font-light text-sm">
              {service.description}
            </p>
          </div>
          
            <Link href="#" className="inline-block">
              <Button className="bg-blue-300">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round"d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Button>
            </Link>

          <BorderBeam
            size={350}
            borderWidth={2}
            className="from-transparent via-blue-300 to-transparent"
          />
      </div>
    </div>
  );
};
