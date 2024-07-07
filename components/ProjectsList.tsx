/* eslint-disable react/jsx-no-undef */
import React from "react";
import { CardContainer, CardItem } from "./ui/3d-card";
import { CardBody } from "./ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { StaticImageData } from "next/image";

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
    <div className="w-full flex flex-col justify-between px-[25em] pt-5 pb-20 items-center">
      {projectItems.map((projectItem, idx) => (
        <CardContainer
          key={`item=${idx}`}
          className="inter-var w-full max-w-full"
          containerClassName="w-full max-w-full px-5"
        >
          <CardBody
            className="bg-gray-200 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] hover:shadow-2xl hover:shadow-black-500/[0.2] dark:bg-black dark:border-white/[0.2] border-black/[0.2] w-full rounded-xl p-6 border transition duration-300"
            height={"auto"}
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {projectItem.name}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {projectItem.subtitle}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4 relative">
              <div className="absolute inset-0 rounded-xl bg-black backdrop-opacity-0 hover:backdrop-opacity-70 hover:backdrop-blur-sm transition-all duration-300">
                <p className="px-10 pt-12 pb-5 text-lg italic">
                  {projectItem.description}
                </p>
                <div className="px-10">
                  {projectItem.technologies.map(
                    (tech: string, index: number) => (
                      <button
                        key={index}
                        className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
                      >
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">{tech}</span>
                      </button>
                    )
                  )}
                </div>
              </div>
              <Image
                src={projectItem.image}
                height={300}
                width={1000}
                className="w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all filter group-hover:blur-sm"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href={projectItem.github}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xl font-normal dark:text-white hover:bg-yellow-500 hover:dark:bg-yellow-500"
              >
                <FaGithub />
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href={projectItem.link}
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-yellow-500 hover:dark:bg-yellow-500"
              >
                Demo Link
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};

export default ProjectsList;
