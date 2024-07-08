import React from "react";
import { aboutItems } from "@/data";

const AboutSection = () => {
  return (
    <div className="w-full px-[25em] py-10">
      <div className="px-5">
        <h1 className="text-bold font-semibold text-2xl py-20">
          Welcome to My Website.
        </h1>
        <p className="">{aboutItems[0]}</p>
      </div>
    </div>
  );
};

export default AboutSection;
