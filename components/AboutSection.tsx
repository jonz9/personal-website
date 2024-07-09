import React from "react";
import { aboutItems } from "@/data";

const AboutSection = () => {
  return (
    <div className="w-full px-[25em] py-10">
      <div className="px-5">
        <h1 className="text-bold font-semibold text-xl pt-20 pb-12 text-yellow-500">
          Welcome to My Website.
        </h1>
        {aboutItems.map((aboutItem: string, idx: number) => (
          <p key={`idx`} className="py-2">
            {aboutItem}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
