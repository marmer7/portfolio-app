"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="nav-shell">
      <div className="nav-inner">
        <Link href="/" className="brand-mark">
          MM
        </Link>
        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => {
              let isActive;
              if (link.href === "/") {
                isActive = pathname === link.href;
              } else {
                isActive = pathname.startsWith(link.href);
              }
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={isActive ? "nav-link nav-link-active" : "nav-link"}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
