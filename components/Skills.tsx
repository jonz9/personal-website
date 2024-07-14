import React, { ReactElement } from "react";
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
  <div className="w-full flex flex-col justify-between pt-5 pb-4 md:px-5 items-start">
    <div className="space-y-3 lg:space-y-5">
      <h1 className="font-bold text-base md:text-xl py-7 text-yellow-500">
        Skills
      </h1>

      {/* Front-End */}
      <div className="flex lg:space-x-20 justify-start items-center">
        <h3 className="font-semibold hidden lg:block">Front-End:</h3>
        <span className="flex md:justify-center items-center space-x-5">
          <FaReact size={40} className="icon-hover icon-size" />
          <FaVuejs size={40} className="icon-hover icon-size" />
          <RiNextjsFill size={40} className="icon-hover icon-size" />
          <RiTailwindCssFill size={40} className="icon-hover icon-size" />
          <SiShadcnui size={40} className="icon-hover icon-size" />
          <SiThreedotjs size={40} className="icon-hover icon-size" />
          <FaHtml5 size={40} className="icon-hover icon-size" />
          <FaCss3Alt size={40} className="icon-hover icon-size" />
        </span>
      </div>

      {/* Back-End */}
      <div className="flex lg:space-x-20 justify-center items-center">
        <h3 className="font-semibold hidden lg:block pr-1">Back-End:</h3>
        <span className="flex justify-center items-center space-x-5">
          <FaJava size={40} className="icon-hover icon-size" />
          <FaPython size={40} className="icon-hover icon-size" />
          <SiCplusplus size={40} className="icon-hover icon-size" />
          <FaC size={40} className="icon-hover icon-size" />
          <FaJava size={40} className="icon-hover icon-size" />
          <FaNode size={40} className="icon-hover icon-size" />
          <SiExpress size={40} className="icon-hover icon-size" />
          <SiMongodb size={40} className="icon-hover icon-size" />
          <SiTypescript size={40} className="icon-hover icon-size" />
          <SiJavascript size={40} className="icon-hover icon-size" />
          <IoLogoFirebase size={40} className="icon-hover icon-size" />
          <FaAws size={40} className="icon-hover icon-size" />
        </span>
      </div>

      {/* Design */}
      <div className="flex lg:space-x-24 justify-start items-center">
        <h3 className="font-semibold hidden lg:block text-base pr-3">
          Design:
        </h3>
        <span className="flex justify-start items-center space-x-5">
          <FaFigma size={40} className="icon-hover icon-size" />
          <SiCanva size={40} className="icon-hover icon-size" />
          <SiAdobeillustrator size={40} className="icon-hover icon-size" />
          <SiAdobelightroom size={40} className="icon-hover icon-size" />
        </span>
      </div>
    </div>
  </div>
);

export default Skills;
