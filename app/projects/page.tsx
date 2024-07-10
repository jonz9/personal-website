import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { navItems, projectItems } from "@/data";
import React from "react";
import { ProjectsList } from "@/components/ProjectsList";
import PageTransition from "@/components/PageTransition";

const Projects = () => {
  return (
    <main className="relative overflow-hidden mx-auto sm:px-10 px-5 justify-center items-center flex flex-col min-h-screen">
      <Navbar navItems={navItems} className="text-black" />
      <PageTransition>
        <ProjectsList projectItems={projectItems} />
        <Footer />
      </PageTransition>
    </main>
  );
};

export default Projects;
