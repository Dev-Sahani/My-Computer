import { cn } from "@/lib/utils";
import HeroModel from "./HeroModel";
import { Button } from "./ui/button";

export default function HeroSection({ className }) {
  return (
    <div className={cn("sticky top-0 flex flex-col gap-4 justify-between items-center text-gray-700", className)}>
        <h1 className="w-[60vw] text-center font-bold text-6xl absolute top-36">
          <span className="text-blue-400">One Step Solution</span> for all of your's IT need.
        </h1>

        <div className="w-[18vw] absolute bottom-[25vh] left-20 text-left flex flex-col gap-2">
          <p className="text-lg uppercase font-bold text-blue-400 leading-1">We are</p>
          <h3 className="text-4xl uppercase font-bold text-blue-400">My-Computer</h3>
          <p className="text-sm">
            A leading IT service provider in Udaipur. We got your back for your every tech need in resonable price.
          </p>
          <Button className="bg-blue-400 text-white mt-4 w-fit" variant="Outline">Know More</Button>
        </div>

        {/* Corner Section - Top Left */}
        <div className="w-[20vw] absolute bottom-10 right-20 flex flex-col gap-3 items-end text-right">
          <h3 className="text-3xl font-bold text-blue-400 uppercase">
            Let's Make It Happen
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
          Stop wondering, start connecting. Your IT solutions are just one click away. Let's talk!
          </p>
          <Button className="bg-blue-400 text-white mt-2 w-fit" variant="default">
            Let's Connect
          </Button>
        </div>

      <HeroModel />
    </div>
  );
}
