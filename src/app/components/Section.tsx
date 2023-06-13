import React from "react";

interface PageProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function Page({ children, id, className }: PageProps) {
  return (
    <section id={id} className={`mt-4 ${className}`}>
      {children}
    </section>
  );
}
