import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { navItems } from "@/data";
import React from "react";

const Home = () => {
  return (
    <main className="relative overflow-hidden justify-items-stretch mx-auto items-center flex flex-col min-h-screen px-5 2xl:px-[15em]">
      <PageTransition>
        <Navbar navItems={navItems} className="text-black" />
        <Hero />
        <Footer />
      </PageTransition>
    </main>
  );
};

export default Home;
