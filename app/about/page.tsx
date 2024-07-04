import { navItems } from "@/data";
import { Navbar } from "@/components/Navbar";
import React from "react";

const About = () => {
  return (
    <main className="relative overflow-hidden mx-auto sm:px-10 px-5 justify-center items-center flex flex-col">
      <Navbar navItems={navItems} className="text-black" />
    </main>
  );
};

export default About;
