import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { navItems } from "@/data";
import React from "react";

const Home = () => {
  return (
    <main className="relative overflow-hidden mx-auto sm:px-10 px-5 justify-center items-center flex flex-col min-h-screen">
      <Navbar navItems={navItems} className="text-black" />
      <PageTransition>
        <Hero />
        <Footer />
      </PageTransition>
    </main>
  );
};

export default Home;
