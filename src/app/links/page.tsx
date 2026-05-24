import type { Metadata } from "next";
import { NAME, TAGLINE, CONTACT, PROJECTS } from "../data";

export const metadata: Metadata = {
  title: "Marlon Merjos — Links",
  description: "Quick links to my work, projects, and contact.",
};

type LinkRow = { label: string; href: string; sub?: string };

const ROWS: LinkRow[] = [
  { label: "portfolio", href: "/", sub: "the full site" },
  ...PROJECTS.map((p) => ({
    label: p.url.replace(/^https?:\/\//, ""),
    href: p.url,
    sub: p.description,
  })),
  ...CONTACT.map((c) => ({
    label: c.key,
    href: c.href,
    sub: c.label,
  })),
];

function isExternal(href: string) {
  return /^https?:\/\//.test(href) || href.endsWith(".pdf");
}

export default function Links() {
  return (
    <main className="links">
      <h1 className="links-name">
        {NAME}
        <span className="cursor" aria-hidden="true" />
      </h1>
      <p className="links-tagline">{TAGLINE}</p>

      <nav className="links-list">
        {ROWS.map((r) => {
          const external = isExternal(r.href);
          return (
            <a
              key={`${r.label}-${r.href}`}
              href={r.href}
              className="links-row"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="links-row-label">
                <span className="links-row-arrow" aria-hidden="true">$</span>
                {r.label}
              </span>
              {r.sub && <span className="links-row-sub">{r.sub}</span>}
            </a>
          );
        })}
      </nav>
    </main>
  );
}
