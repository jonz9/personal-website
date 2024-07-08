import { navItems } from "@/data";
import { Navbar } from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Skills from "@/components/Skills";
import Updates from "@/components/Updates";

const About = () => {
  return (
    <main className="relative overflow-hidden mx-auto sm:px-10 px-5 justify-center items-center flex flex-col min-h-screen">
      <Navbar navItems={navItems} className="text-black" />
      <AboutSection />
      <Skills />
      <Updates />
      <Footer />
    </main>
  );
};

export default About;
