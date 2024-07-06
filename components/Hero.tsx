/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";
import Photo from "./Photo";
import { jobTitles } from "@/data";
import { LinkPreview } from "@/components/ui/link-preview";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Hero = () => {
  return (
    <div className="pb-60 pt-36 px-[25em]">
      <Spotlight className="left-20 top-10 h-[60vh] w-[100vw]" fill="black" />

      {/* dot background */}
      <div className="h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Main Hero Section of Text and Photo */}
        <div className="grid grid-cols-3 gap-4 z-100">
          <div className="col-span-2 p-4 items-left">
            {/* Name and Job */}
            <FlipWords
              words={jobTitles}
              className="text-3xl font-medium text-yellow-500"
            />
            <p className="text-8xl font-bold relative bg-clip-text bg-gradient-to-b from-gray-800 to-gray-950">
              Hey! I'm John.
            </p>

            {/* Brief About */}
            <div className="py-2 flex flex-col">
              <div className="flex">
                <p className="text-2xl font-semibold relative">
                  I'm currently studying at the
                </p>
                <LinkPreview
                  url="https://uwaterloo.ca/engineering"
                  className="px-1 text-2xl font-semibold relative italic hover:underline color-transition"
                >
                  University of Waterloo
                </LinkPreview>
              </div>
              {/* <div className="flex justify-center items-center">
                <HoverBorderGradient
                  containerClassName="rounded-3xl"
                  as={button}
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  Download Resume
                  <h1>hello testing</h1>
                </HoverBorderGradient>
              </div> */}
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-non mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
