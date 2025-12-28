"use client"
import Spline from "@splinetool/react-spline";

export default function HeroModel() {
  return (
    <div className="w-full h-[85vh] mt-[15vh] overflow-hidden radial-gradient-bg">
      <div className="h-[95vh] relative">
        <Spline scene="https://prod.spline.design/OrvJfODxHFbj5Pe1/scene.splinecode" />
      </div>
    </div>
  ); 
}