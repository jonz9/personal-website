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

const Hero: React.FC = () => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNewTab = () => {
    window.open("/public/assets/John-Zhang-Resume.pdf", "_blank");
  };

  if (!mounted) return null;

  return (
    <div className="">
      {theme === "dark" ? (
        <Spotlight
          className="left-[20em] top-0 h-[40vh] w-[100vw]"
          fill="white"
        />
      ) : null}

      {/* dot background */}
      <div className="h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Main Hero Section of Text and Photo */}
        <div className="grid grid-rows-auto md:grid-rows-none md:grid-cols-3 lg:gap-4 z-100 items-center">
          <div className="md:col-span-2 text-center md:text-left order-10 md:order-1">
            {/* Name and Job */}
            <FlipWords
              words={jobTitles}
              className="text-2xl font-medium text-yellow-500"
            />
            <p className="text-5xl sm:text-[5.2em] font-bold relative bg-clip-text bg-gradient-to-b from-gray-800 to-gray-950">
              Hey! I'm John.
            </p>

            {/* Brief About */}
            <div className="pt-2 flex flex-col">
              <div className="lg:flex">
                <p className="text-lg md:text-2xl lg:text-xl font-semibold relative">
                  I'm currently studying at the
                </p>
                <LinkPreview
                  url="https://uwaterloo.ca/engineering"
                  className="px-1 text-lg md:text-2xl lg:text-xl underline md:no-underline font-semibold relative italic hover:underline color-transition"
                >
                  University of Waterloo
                </LinkPreview>
              </div>
            </div>

            {/* Resume and Devpost */}
            <div className="items-center py-2 space-x-2 justify-center md:justify-start hidden md:flex">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <Link
                  href={
                    "https://drive.google.com/file/d/1uQQSRz8YF804P7k9ySMwJNK_uWBuBLiu/view?usp=sharing"
                  }
                  target="_blank"
                  className="flex justify-center items-center space-x-2"
                >
                  <FaDownload />
                  <span>Resume</span>
                </Link>
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
          <div className="row-span-1 md:col-span-1 order-1 xl:order-non mb-12 xl:mb-0 h-auto">
            <Photo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
