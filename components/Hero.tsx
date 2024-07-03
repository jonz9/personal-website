/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { useTheme } from "next-themes";
import { FlipWords } from "./ui/flip-words";
import Photo from "./Photo";

const Hero = () => {
  const { theme } = useTheme();
  const words = ["Software Developer", "UI Designer", "Computer Engineer"];

  return (
    <div className="pb-60 pt-36">
      <Spotlight className="left-20 top-10 h-[60vh] w-[100vw]" fill="black" />

      {/* dot background */}
      <div className="h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex justify-center items-center px-5 ">
          <div className="flex flex-col justify-center items-left">
            <p className="text-7xl font-bold relative z-20 py-4 bg-clip-text bg-gradient-to-b from-gray-800 to-gray-950">
              Hey! I'm John.
            </p>
            <p className="text-xl font-semibold relative z-20 ">
              I'm currently studying at the University of Waterloo
            </p>
            <div className="flex items-center">
              <p className="text-4xl font-bold z-20">
                Working to be a{"\u00A0"}
              </p>
              <FlipWords
                words={words}
                className="text-4xl font-bold text-yellow-500"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Photo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
