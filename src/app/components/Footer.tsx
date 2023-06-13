"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/projects", name: "Projects" },
    { href: "/contact", name: "Contact" },
  ];

  const linkedInLink: string = process.env.NEXT_PUBLIC_LINKEDIN_LINK || "";
  const githubLink: string = process.env.NEXT_PUBLIC_GITHUB_LINK || "";

  const socialLinks = [
    { href: linkedInLink, name: "LinkedIn" },
    { href: githubLink, name: "GitHub" },
  ].filter((link) => link.href !== "");

  return (
    <div className="shadow-md p-3 bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto max-w-screen-lg flex items-center justify-center flex-col space-y-2">
        <nav>
          <ul className="flex space-x-2 sm:space-x-4 justify-center">
            {navLinks.map((link) => {
              let isActive;
              if (link.href === "/") {
                isActive = pathname === link.href;
              } else {
                isActive = pathname.startsWith(link.href);
              }
              return (
                <li
                  key={link.name}
                  className={`font-bold text-sm sm:text-base ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-gray-500 dark:text-gray-400"
                  } hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200`}
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav>
          <ul className="flex space-x-2 sm:space-x-4 justify-center">
            {socialLinks.map((link) => {
              return (
                <li
                  key={link.name}
                  className="font-bold text-sm sm:text-base text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
