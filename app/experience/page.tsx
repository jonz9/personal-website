import { experienceData, navItems } from "@/data";
import { Navbar } from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import PageTransition from "@/components/PageTransition";

const Experience = () => {
  return (
    <main className="relative overflow-hidden mx-auto sm:px-10 px-5 justify-center items-center flex flex-col min-h-screen">
      <Navbar navItems={navItems} className="text-black" />
      <PageTransition>
        <ExperienceTimeline experienceItems={experienceData} />
        <Footer />
      </PageTransition>
    </main>
  );
};

export default Experience;
