"use client";

import BarChart from "./components/BarChart";
import React from "react";
import Section from "./components/Section";
import SubstackFeed from "./components/SubstackFeed";
import TitleHeader from "./components/TitleHeader";

export default function Home() {
  const labels = [
    "Python",
    "SQL",
    "Visualization",
    "JavaScript",
    "Data Science",
  ];
  const values = [90, 95, 90, 70, 75];

  return (
    <div className="w-full lg:max-w-2xl text-center">
      {/* Introduction Section */}
      <TitleHeader
        id="intro"
        title="Hello, I'm Marlon"
        subtitle="I'm a data analyst and software developer."
      />
      <Section id="skills">
        <h2 className="text-3xl font-bold">Skills</h2>
        <BarChart labels={labels} values={values} />
      </Section>
      <Section id="substack">
        <h2 className="text-3xl font-bold">Substack</h2>
        <SubstackFeed />
      </Section>
    </div>
  );
}
