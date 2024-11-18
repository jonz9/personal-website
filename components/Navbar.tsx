"use client";
import { cn } from "@/utils/cn";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import signatureBlack from "@/public/assets/images/signature-black.png";
import signatureWhite from "@/public/assets/images/signature-white.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the menu toggle

export const Navbar = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  // Hooks
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar

  let signatureSrc = signatureBlack;

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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  signatureSrc = theme === "light" ? signatureBlack : signatureWhite;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="w-full relative dark:text-white text-black z-[200] md:px-10">
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
            duration: 0.3,
          }}
          className="flex relative justify-between items-center py-6 mx-auto"
        >
          {/* Home */}
          <Link
            key={"Home"}
            href={"/"}
            scroll
            className={cn("relative items-center flex space-x-1")}
          >
            <span className="flex flex-row text-3xl relative !cursor-pointer w-20 h-20">
              <Image
                src={signatureSrc}
                priority
                quality={100}
                fill
                alt="signature"
                className="object-contain ml-6 md:ml-0"
              />
            </span>
          </Link>

          {/* Menu Toggle Button for Mobile */}
          <button
            className="md:hidden text-2xl pr-8 focus:outline-none z-50" // Ensure the toggle button is above other elements
            onClick={toggleSidebar}
          >
            {sidebarOpen ? null : <FaBars />}
          </button>

          {/* Sidebar */}
          <div
            className={cn(
              "absolute top-0 right-0 min-h-screen h-full bg-white dark:bg-black border-gray-500 border-l-1 transition-transform transform w-40",
              sidebarOpen ? "translate-x-0" : "translate-x-full",
              "md:hidden flex flex-col space-y-4 p-4 z-100" // Increased z-index to be in front
            )}
          >
            {/* Close button inside sidebar */}
            <button
              className="text-2xl focus:outline-none self-start mb-4 absolute top-12 left-28 z-[9999]"
              onClick={toggleSidebar}
            >
              <FaTimes />
            </button>
            <div className="flex flex-col items-end justify-start h-full space-y-4 pt-16">
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  scroll
                  className={cn(
                    "relative dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-lg"
                  )}
                >
                  {navItem.name}
                </Link>
              ))}
              <ThemeSwitcher />
            </div>
          </div>

          {/* Right Side Navigation for Desktop */}
          <div className="hidden md:flex justify-center items-center space-x-2">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                scroll
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-12 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="text-lg !cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
            <span className="pl-12">
              <ThemeSwitcher />
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
