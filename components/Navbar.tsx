"use client";
import { cn } from "@/utils/cn";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    // icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  // Hooks
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() <= 1) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <div className="flex items-center justify-between py-2">
          {/* Home */}
          <Link
            key={"Home"}
            href={"/"}
            scroll
            className={cn("relative items-center flex space-x-1")}
          >
            <span className="flex flex-row text-3xl !cursor-pointer">
              <div className="text-neutral-600 dark:hover:text-neutral-300 dark:text-neutral-50 hover:text-neutral-800">
                John
              </div>
              <div className="text-yellow-400">.</div>
            </span>
          </Link>

          {/* Others */}
          <div className="flex justify-center items-center">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                scroll
                className={cn(
                  "relative dark:text-neutral-50 items-center px-5 flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="text-lg  !cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
            <span className="px-5">
              <ThemeSwitcher />
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
