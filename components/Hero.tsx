"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className="pb-60 pt-36">
      {/* spotlights */}
      {/* <Spotlight
        className="top-28 left-60 md:-left-32 md:-top-20 h-[60vh] w-[40vw]"
        fill="black"
      /> */}

      <Spotlight className="left-20 top-10 h-[60vh] w-[100vw]" fill="black" />

      {/* dot background */}
      <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Title
        </p>
      </div>
    </div>
  );
};

export default Hero;
