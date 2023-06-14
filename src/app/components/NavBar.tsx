"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../context";

interface NavLink {
  href: string;
  name: string;
}

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const navLinks: NavLink[] = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/projects", name: "Projects" },
    { href: "/contact", name: "Contact" },
  ];

  const { isDarkMode, setDarkMode } = useTheme();

  return (
    <div className="shadow-md p-3 bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto max-w-screen-lg flex items-center justify-between">
        <nav>
          <ul className="flex space-x-2 sm:space-x-4">
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
                  className={`font-bold text-base sm:text-xl ${
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

        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isDarkMode}
            readOnly
          />
          <div
            onClick={() => {
              setDarkMode(!isDarkMode);
            }}
            className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white dark:peer-checked:after:border-gray-300 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white dark:after:bg-gray-300 after:border-gray-300 dark:after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:peer-checked:bg-gray-900"
          ></div>
          <span className="hidden sm:inline-block ml-2 text-sm font-medium">
            Dark Mode
          </span>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
