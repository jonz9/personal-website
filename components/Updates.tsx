import { updates } from "@/data";
import React from "react";

const Updates = () => {
  return (
    <div className="w-full flex flex-col justify-between pt-5 pb-20 items-start md:px-5">
      <h1 className="font-bold text-base md:text-xl pt-12 pb-8 md:pb-10 text-yellow-500">
        What I&apos;m Doing Right Now
      </h1>
      <p className="font-medium italic text-sm md:text-base text-gray-500">
        {updates}
      </p>
    </div>
  );
};

export default Updates;
