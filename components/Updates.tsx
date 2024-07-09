import { updates } from "@/data";
import React from "react";

const Updates = () => {
  return (
    <div className="w-full flex flex-col justify-between px-[25em] pt-5 pb-20 items-start">
      <div className="px-5">
        <h1 className="font-bold text-xl py-7 text-yellow-500">Updates</h1>
        <p className="font-medium italic text-md text-gray-500">{updates}</p>
      </div>
    </div>
  );
};

export default Updates;
