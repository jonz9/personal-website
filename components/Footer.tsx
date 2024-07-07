import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const footerItems = [
    {
      link: "https://github.com/jonz9",
      icon: <FaGithub className="text-2xl" />,
    },
    {
      link: "https://www.linkedin.com/in/john-zhang-2665b9236/",
      icon: <FaLinkedin className="text-2xl" />,
    },
    {
      link: "mailto:j444zhan@uwaterloo.ca",
      icon: <MdEmail className="text-2xl" />,
    },
  ];
  {
    /* <span className="flex justify-between items-center border-t-1 border-t-black dark:border-t-white"> */
  }

  return (
    <div className="w-full flex justify-between px-[25em] items-center mt-auto pb-20">
      <p className="px-5 text-gray-400">John Zhang © 2024</p>
      <div className="grid grid-cols-3 items-center gap-4 px-5">
        {footerItems.map((footerItems: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={footerItems.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 border-1 hover:dark:bg-slate-500 dark:border-slate-500 rounded-md"
          >
            {footerItems.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
