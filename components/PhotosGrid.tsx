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
      <div>
        <h2>Currently No Photos Available! Will be there soon!</h2>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative flex justify-center items-center py-20 space-x-2">
      <ParallaxScroll photos={photos} className="" />
    </div>
  );
};

export default PhotosGrid;
