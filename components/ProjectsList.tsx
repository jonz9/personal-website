/* eslint-disable react/jsx-no-undef */
import React from "react";
import { CardContainer, CardItem } from "./ui/3d-card";
import { CardBody } from "./ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CgArrowsExpandRightAlt } from "react-icons/cg";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface ProjectItem {
  name: string;
  subtitle: string;
  link?: string;
  github: string;
  description: string;
  image: StaticImageData | string;
  technologies: string[];
}

export const ProjectsList = ({
  projectItems,
}: {
  projectItems: ProjectItem[];
}) => {
  return (
    <div className="w-full flex flex-col justify-between pt-24 pb-20">
      <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white ">
        Some of the Ideas I&apos;ve built over the past few years.
      </h2>
      <div className="mx-auto grid grid-flow-row grid-cols-1 md:grid-cols-2 py-10">
        {projectItems.map((projectItem, index) => (
          <div key={index} className="px-4 py-4">
            <DirectionAwareHover
              imageUrl={projectItem.image}
              className="border-3 border-gray-300 dark:border-none"
            >
              <div className="flex items-center">
                <p className="font-bold text-xl">{projectItem.name}</p>
                <a
                  href={projectItem.github}
                  className="text-yellow-500 px-2"
                  target="__blank"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="">
                {projectItem.technologies.map((tech: string, index: number) => (
                  <button
                    key={index}
                    className="px-2 py-1 m-1 rounded-md relative bg-transparent/50  dark:text-white text-xs hover:shadow-lg hover:bg-yellow-500 dark:hover:shadow-white/[0.2] hover:shadow-black/[0.2] transition duration-100 border-2 border-slate-300 hover:border-white"
                  >
                    <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent to-transparent" />
                    <span className="relative z-20 hover:text-black text-bold transition duration-400">
                      {tech}
                    </span>
                  </button>
                ))}
              </div>
              <p className="font-normal text-sm">{projectItem.description}</p>
            </DirectionAwareHover>

            {/* Mobile View */}
            <div className="block md:hidden py-2">
              <div className="flex items-center">
                <p className="font-bold text-xl">{projectItem.name}</p>
                <a
                  href={projectItem.github}
                  className="text-yellow-500 px-2"
                  target="__blank"
                >
                  <FaGithub />
                </a>
              </div>

              {/* technologies used list */}
              <div className="">
                {projectItem.technologies.map((tech: string, index: number) => (
                  <button
                    key={index}
                    className="px-2 py-1 m-1 rounded-md relative bg-transparent/50  dark:text-white text-xs hover:shadow-lg hover:bg-yellow-500 dark:hover:shadow-white/[0.2] hover:shadow-black/[0.2] transition duration-100 border-2 border-slate-300 hover:border-white"
                  >
                    <div className="absolute inset-x-0 h-px w-1/2 -top-px shadow-2xl bg-gradient-to-r from-transparent to-transparent" />
                    <span className="relative z-20 hover:text-black text-bold transition duration-400">
                      {tech}
                    </span>
                  </button>
                ))}
              </div>
              <p className="font-normal text-sm">{projectItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
