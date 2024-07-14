import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { navItems, projectItems } from "@/data";
import React from "react";
import { ProjectsList } from "@/components/ProjectsList";
import PageTransition from "@/components/PageTransition";

const Projects = () => {
  return (
    <main className="relative overflow-hidden mx-auto flex flex-col min-h-screen px-5 lg:px-[5em] xl:px-[10em] 2xl:px-[25em] 3xl:px-[25em] pb-[2em]">
      <PageTransition>
        <Navbar navItems={navItems} className="text-black" />
        <ProjectsList projectItems={projectItems} />
        <Footer />
      </PageTransition>
    </main>
  );
};

export default Projects;
