import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { navItems, projectItems } from "@/data";
import React from "react";
import { ProjectsList } from "@/components/ProjectsList";
import PageTransition from "@/components/PageTransition";

const Projects = () => {
  return (
    <main className="relative overflow-hidden mx-auto flex flex-col min-h-screen lg:px-[5em] xl:px-[10em] 2xl:px-[20em] pb-[2em]">
      <Navbar navItems={navItems} />
      <PageTransition className="flex-grow flex flex-col px-5 md:px-10">
        <ProjectsList projectItems={projectItems} />
        <Footer />
      </PageTransition>
    </main>
  );
};

export default Projects;
