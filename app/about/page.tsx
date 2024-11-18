import { navItems } from "@/data";
import { Navbar } from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Skills from "@/components/Skills";
import Updates from "@/components/Updates";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <main className="relative overflow-visible mx-auto flex flex-col min-h-screen lg:px-[5em] xl:px-[10em] 2xl:px-[20em] pb-[2em]">
      <Navbar navItems={navItems} />
      <PageTransition className="flex-grow flex flex-col px-5 md:px-10">
        <AboutSection />
        <Skills />
        <Updates />
        <Footer />
      </PageTransition>
    </main>
  );
};

export default About;
