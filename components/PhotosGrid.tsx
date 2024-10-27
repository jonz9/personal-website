"use client";

import React from "react";
import { ParallaxScroll } from "./ui/parallax-scroll";
import getPhotos from "server/s3";
import { useState, useEffect } from "react";

interface PhotosGridProps {
  photos: string[];
}

const PhotosGrid: React.FC<PhotosGridProps> = ({ photos }) => {
  if (photos.length == 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h2 className="py-56">Incoming... :)</h2>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen relative flex justify-center items-center space-x-2 flex-col">
      <ParallaxScroll photos={photos} className="" />
    </div>
  );
};

export default PhotosGrid;
