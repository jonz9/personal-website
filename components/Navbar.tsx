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

export const Navbar = ({
  navItems,
  className,
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

  return (
    <div className="w-full px-[25em]">
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
          className="flex relative justify-between items-center py-2 mx-auto"
        >
          {/* Home */}
          <Link
            key={"Home"}
            href={"/"}
            scroll
            className={cn("relative items-center flex space-x-1 px-5")}
          >
            <span className="flex flex-row text-3xl relative !cursor-pointer w-20 h-20">
              <Image
                src={signatureSrc}
                priority
                quality={100}
                fill
                alt="signature"
                className="object-contain ml-2"
              />
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
