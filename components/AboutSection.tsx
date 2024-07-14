import React from "react";
import { aboutItems } from "@/data";

const AboutSection = () => {
  return (
    <div className="w-full py-10 md:px-5">
      <h1 className="text-bold font-semibold text-base md:text-xl pt-20 pb-5 md:pb-10 text-yellow-500">
        Welcome to My Website
      </h1>
      {aboutItems.map((aboutItem: string, idx: number) => (
        <p key={`idx`} className="py-2 text-sm md:text-base">
          {aboutItem}
        </p>
      ))}
    </div>
  );
};

export default AboutSection;
