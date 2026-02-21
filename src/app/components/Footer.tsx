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

  const socialLinks = [
    { href: "https://linkedin.com/in/marlonmerjos", name: "LinkedIn" },
    { href: "https://github.com/marmer7", name: "GitHub" },
    { href: "mailto:MarlonMerjos@gmail.com", name: "Email" },
  ];

  return (
    <footer className="footer-shell">
      <div className="footer-inner">
        <p className="footer-copy">
          Analytics leadership, predictive modeling, and self-serve data systems.
        </p>
        <nav>
          <ul className="footer-links">
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
                    className={
                      isActive ? "footer-link footer-link-active" : "footer-link"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav>
          <ul className="footer-links">
            {socialLinks.map((link) => {
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <p className="footer-meta">© {new Date().getFullYear()} Marlon Merjos</p>
      </div>
    </footer>
  );
};

export default Footer;
