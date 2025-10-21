import { cn } from "@/lib/utils";
import HeroModel from "./HeroModel";

export default function HeroSection({ className }) {
  return (
    <div className={cn("sticky top-0 flex flex-col gap-4 justify-between items-center", className)}>
      <div className="sticky top-32 flex flex-col gap-4 items-center text-center">
        <h1 className="font-bold text-5xl">
          One Step Solution for all of your's IT need.
        </h1>
        <p>
          We are a leading IT service provider in Udaipur. We got your back for
          your every tech need in resonable price.
        </p>
      </div>

      <HeroModel />
    </div>
  );
}
