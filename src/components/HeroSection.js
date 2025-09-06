import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
      <div className="w-full h-[85vhvh] overflow-hidden radial-gradient-bg -translate-y-20">
        <div className="h-[92vhvh] relative">
          <Spline scene="https://prod.spline.design/o1svLy4HnlUQTJ3y/scene.splinecode" />
          {/* <Image src ="/headphones.png" alt="headphones" width={400} height={400} className="absolute top-90 left-130"/> */}
        </div>
      </div>
    </div>
  );
}
