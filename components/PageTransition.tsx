"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
    // initial={{ y: 20, opacity: 0 }}
    // animate={{ y: 0, opacity: 1 }}
    // transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
