"use client";

import { navItems } from "@/data";
import { Navbar } from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import PhotosGrid from "@/components/PhotosGrid";
import PageTransition from "@/components/PageTransition";
import getPhotos from "@/server/s3";

const Photography = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photoURLs = await getPhotos();
        setPhotos(photoURLs);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching photos: ", err);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <main className="relative overflow-hidden mx-auto flex flex-col min-h-screen px-5 lg:px-[5em] xl:px-[10em] 2xl:px-[20em] pb-[2em]">
      <Navbar navItems={navItems} className="text-black" />
      <PageTransition>
        <PhotosGrid photos={photos} />
        <Footer />
      </PageTransition>
    </main>
  );
};

export default Photography;
