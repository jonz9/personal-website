import { navItems } from "@/data";
import { Navbar } from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import PhotosGrid from "@/components/PhotosGrid";
import PageTransition from "@/components/PageTransition";

const Photography = () => {
  return (
    <main className="relative overflow-hidden mx-auto flex flex-col min-h-screen px-5 lg:px-[5em] xl:px-[10em] 2xl:px-[20em] pb-[2em]">
      <Navbar navItems={navItems} className="text-black" />
      <PageTransition>
        <PhotosGrid />
        <Footer />
      </PageTransition>
    </main>
  );
};

export default Photography;
