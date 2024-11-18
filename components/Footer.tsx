import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { SiDevpost } from "react-icons/si";

const Footer = () => {
  const footerItems = [
    {
      link: "https://drive.google.com/file/d/1uQQSRz8YF804P7k9ySMwJNK_uWBuBLiu/view?usp=sharing",
      icon: <IoIosDocument className="text-2xl" />,
    },
    {
      link: "https://devpost.com/zhangjohn-ca?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
      icon: <SiDevpost className="text-2xl" />,
    },
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

  const footerHalf = footerItems.slice(-3);

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center mt-auto p-4 space-y-2 md:space-y-0">
      <p className="text-gray-400 text-sm md:text-base">John Zhang © 2024</p>
      <p className="text-gray-400 underline text-sm md:text-base">
        made with lots of coffee
      </p>
      <div className="items-center gap-4 hidden md:flex">
        {footerHalf.map((footerHalf: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={footerHalf.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-md hover:bg-yellow-500 transition duration-350"
          >
            {footerHalf.icon}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4 md:hidden flex-wrap">
        {footerItems.map((footerItems: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={footerItems.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-md"
          >
            {footerItems.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
