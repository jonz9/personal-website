"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import myPFP from "@images/pfp.JPEG";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      {/* Circle */}
      <motion.svg
        className="absolute w-[310px] h-[310px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#facc15"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative w-[298px] h-[298px] mix-blend-darken dark:mix-blend-lighten"
        >
          <Image
            src={myPFP}
            priority
            quality={100}
            alt="photo"
            fill
            className="rounded-full object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
