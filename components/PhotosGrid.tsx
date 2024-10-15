"use client";

import React from "react";
import { ParallaxScroll } from "./ui/parallax-scroll";
import getPhotos from "server/s3";
import { useState, useEffect } from "react";

const PhotosGrid = () => {
  const [photos, setPhotos] = useState([]);
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

  if (loading) {
    return <div></div>;
  }

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
