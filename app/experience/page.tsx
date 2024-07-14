import { experienceData, navItems } from "@/data";
import { Navbar } from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
// import ExperienceTimeline from "@/components/ExperienceTimeline";

const Experience = () => {
  return (
    <main className="relative overflow-hidden justify-items-stretch mx-auto items-center flex flex-col min-h-screen px-5 2xl:px-[25em]">
      <Navbar navItems={navItems} className="text-black" />
      <PageTransition>
        {/* <ExperienceTimeline experienceItems={experienceData} /> */}
        <Footer />
      </PageTransition>
    </main>
  );
};

export default Experience;
