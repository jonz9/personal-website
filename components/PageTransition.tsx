"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathName();
  return (
  <AnimatePresence>
    <div key={pathname}>
      <motion.div initial={{ opacity: 1 }}
    </div>
  </AnimatePresence>);
};

export default PageTransition;
