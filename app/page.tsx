import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { navItems } from "@/data";
import React from "react";

const Home = () => {
  return (
    <PageTransition>
      <main className="relative overflow-hidden flex flex-col justify-between min-h-screen px-5 2xl:px-[20em]">
        <Navbar navItems={navItems} className="text-black" />
        <div className="flex-grow flex items-center justify-center">
          <Hero />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Home;
