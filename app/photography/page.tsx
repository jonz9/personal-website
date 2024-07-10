import { navItems } from "@/data";
import { Navbar } from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import PhotosGrid from "@/components/PhotosGrid";
import PageTransition from "@/components/PageTransition";

const Photography = () => {
  return (
    <main className="relative overflow-hidden mx-auto sm:px-10 px-5 justify-center items-center flex flex-col min-h-screen">
      <Navbar navItems={navItems} className="text-black" />
      {/* <PageTransition> */}
      <PhotosGrid />
      <Footer />
      {/* </PageTransition> */}
    </main>
  );
};

export default Photography;
