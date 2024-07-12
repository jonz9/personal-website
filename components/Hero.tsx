/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";
import Photo from "./Photo";
import { jobTitles } from "@/data";
import { LinkPreview } from "@/components/ui/link-preview";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FaDownload } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Link from "next/link";
import { useTheme } from "next-themes";
// import saveAs from "file-saver";

const Hero = () => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const saveResume = () => {
  //   saveAs("/public/assets/John-Zhang-Resume.pdf", "John-Zhang-Resume.pdf");
  // };

  const handleNewTab = () => {
    window.open("/assets/John-Zhang-Resume.pdf", "_blank");
  };

  if (!mounted) return null;

  return (
    <div className="pb-60 pt-36 px-[25em]">
      {theme === "dark" ? (
        <Spotlight className="left-50 top-0 h-[40vh] w-[100vw]" fill="white" />
      ) : null}

      {/* dot background */}
      <div className="h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Main Hero Section of Text and Photo */}
        <div className="grid grid-cols-3 gap-4 z-100">
          <div className="col-span-2 p-2 items-center">
            {/* Name and Job */}
            <FlipWords
              words={jobTitles}
              className="text-3xl font-medium text-yellow-500"
            />
            <p className="text-8xl font-bold relative bg-clip-text bg-gradient-to-b from-gray-800 to-gray-950">
              Hey! I'm John.
            </p>

            {/* Brief About */}
            <div className="pt-2 flex flex-col">
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
            </div>

            {/* Resume and Devpost */}
            <div className="flex items-center py-4 space-x-4">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                onClick={handleNewTab}
              >
                <FaDownload />
                <span>Resume</span>
              </HoverBorderGradient>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white"
              >
                <Link
                  href={
                    "https://devpost.com/zhangjohn-ca?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                  }
                  target="_blank"
                  className="flex justify-center items-center space-x-2"
                >
                  <SiDevpost />
                  <span>Devpost</span>
                </Link>
              </HoverBorderGradient>
            </div>
          </div>

          {/* Photo */}
          <div className="col-span-1 order-1 xl:order-non mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
