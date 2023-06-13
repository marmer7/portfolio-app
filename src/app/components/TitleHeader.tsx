import React from "react";
import Section from "./Section";

interface PageProps {
  id: string;
  className?: string;
  title: string;
  subtitle?: string;
}

export default function TitleHeader({
  id,
  className,
  title,
  subtitle,
}: PageProps) {
  return (
    <Section id={id} className={`mt-4 ${className}`}>
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <h3 className="text-2xl">{subtitle}</h3>}
    </Section>
  );
}
