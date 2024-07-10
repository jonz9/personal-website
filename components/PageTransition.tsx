"use client";

import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default PageTransition;
