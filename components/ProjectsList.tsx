/* eslint-disable react/jsx-no-undef */
import React from "react";
import { CardContainer, CardItem } from "./ui/3d-card";
import { CardBody } from "./ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Image } from "@nextui-org/react";

export const ProjectsList = ({
  projectItems,
}: {
  projectItems: {
    name: string;
    subtitle: string;
    link?: string;
    github: string;
    description: string;
    image: HTMLImageElement;
  }[];
}) => {
  return (
    <div className="w-full flex flex-col justify-between px-[25em] items-center">
      {projectItems.map((projectItem: any, idx: number) => (
        <CardContainer key={`item=${idx}`} className="inter-var py-5">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={projectItem.image}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href={projectItem.github}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <FaGithub />
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href={projectItem.link}
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
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
