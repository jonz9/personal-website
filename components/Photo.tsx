"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="relative">
          <Image
            src="/public/assets/images/pfp.JPEG"
            priority
            quality={100}
            height={200}
            width={200}
            alt="photo"
            className="object-contain"
            sizes="(max-width: 1200px) 20vw, (max-width: 768px): 5vw"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
