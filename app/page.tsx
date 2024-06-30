import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { navItems } from "@/data";
import React from "react";

const Home = () => {
  return (
    <main className="relative overflow-hidden mx-auto sm:px-10 px-5 justify-center items-center  flex flex-col">
      <div>
        <Navbar navItems={navItems} className="text-black" />
        <Hero />
      </div>
    </main>
  );
};

export default Home;
