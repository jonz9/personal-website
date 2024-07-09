import React from "react";
import {
  FaAws,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJava,
  FaNode,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAdobeillustrator,
  SiAdobelightroom,
  SiC,
  SiCanva,
  SiCplusplus,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiShadcnui,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";

const Skills = () => (
  <div className="w-full flex flex-col justify-between px-[25em] pt-5 pb-20 items-start">
    <div className="px-5 space-y-5">
      <h1 className="font-bold text-xl py-7 text-yellow-500">Skills</h1>

      {/* Front-End */}
      <div className="flex space-x-20 justify-start items-center">
        <h3 className="font-semibold text-lg">Front-End:</h3>
        <span className="flex justify-center items-center space-x-5">
          <FaReact size={40} className="icon-hover" />
          <FaVuejs size={40} className="icon-hover" />
          <RiNextjsFill size={40} className="icon-hover" />
          <RiTailwindCssFill size={40} className="icon-hover" />
          <SiShadcnui size={40} className="icon-hover" />
          <SiThreedotjs size={40} className="icon-hover" />
          <FaHtml5 size={40} className="icon-hover" />
          <FaCss3Alt size={40} className="icon-hover" />
        </span>
      </div>

      {/* Back-End */}
      <div className="flex space-x-20 justify-center items-center">
        <h3 className="font-semibold text-lg pr-1">Back-End:</h3>
        <span className="flex justify-center items-center space-x-5">
          <FaJava size={40} className="icon-hover" />
          <FaPython size={40} className="icon-hover" />
          <SiCplusplus size={40} className="icon-hover" />
          <FaC size={40} className="icon-hover" />
          <FaJava size={40} className="icon-hover" />
          <FaNode size={40} className="icon-hover" />
          <SiExpress size={40} className="icon-hover" />
          <SiMongodb size={40} className="icon-hover" />
          <SiJavascript size={40} className="icon-hover" />
          <SiTypescript size={40} className="icon-hover" />
          <IoLogoFirebase size={40} className="icon-hover" />
          <FaAws size={40} className="icon-hover" />
        </span>
      </div>

      {/* Design */}
      <div className="flex space-x-24 justify-start items-center">
        <h3 className="font-semibold text-lg pr-3">Design:</h3>
        <span className="flex justify-center items-center space-x-5">
          <FaFigma size={40} className="icon-hover" />
          <SiCanva size={40} className="icon-hover" />
          <SiAdobeillustrator size={40} className="icon-hover" />
          <SiAdobelightroom size={40} className="icon-hover" />
        </span>
      </div>
    </div>
  </div>
);

export default Skills;
