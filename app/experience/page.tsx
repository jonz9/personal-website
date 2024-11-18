import { experienceData, navItems } from "@/data";
import { Navbar } from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Timeline from "@/components/ui/Timeline";

const Experience = () => {
  return (
    <main className="relative overflow-hidden mx-auto h-full flex flex-col min-h-screen lg:px-[5em] xl:px-[10em] 2xl:px-[20em] pb-[2em]">
      <Navbar navItems={navItems} />
      <PageTransition className="flex-grow flex flex-col px-5 md:px-10">
        <Timeline data={experienceData} />
        <Footer />
      </PageTransition>
    </main>
  );
};

export default Experience;
