import { navItems } from "@/data";
import { Navbar } from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import PhotosGrid from "@/components/PhotosGrid";
import PageTransition from "@/components/PageTransition";

const Photography = () => {
  return (
    <main className="relative overflow-hidden justify-items-stretch mx-auto items-center flex flex-col min-h-screen px-5 2xl:px-[20em]">
      <PageTransition>
        <Navbar navItems={navItems} className="text-black" />
        <PhotosGrid />
        <Footer />
      </PageTransition>
    </main>
  );
};

export default Photography;
