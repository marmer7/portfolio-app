"use client";

import BarChart from "./components/BarChart";
import React from "react";
import Section from "./components/Section";
import ServiceCard from "./components/ServiceCard";
import TitleHeader from "./components/TitleHeader";

const emoji = require("emoji-dictionary");

export default function Home() {
  const labels = ["Python", "SQL", "Tableau", "JavaScript", "Data Science"];
  const values = [90, 95, 80, 70, 75];

  const servicesData = [
    {
      id: "automation",
      title: "Cutting-edge Automation & AI Development",
      emojiName: "robot",
      tags: ["Python", "OpenAI"],
    },
    {
      id: "analysis",
      title: "Insightful Data Analysis",
      emojiName: "computer",
      tags: ["SQL", "Python"],
    },
    {
      id: "dashboard",
      title: "Intuitive Dashboard Building",
      emojiName: "bar_chart",
      tags: ["Tableau", "Looker"],
    },
    {
      id: "cleaning",
      title: "Efficient Data Cleaning & Transformation",
      emojiName: "wrench",
      tags: ["Python", "Airflow"],
    },
  ];

  const smallBio = `Leveraging a robust background in both Finance and Software, I have honed my expertise across 
  various industry roles. My strength lies in turning raw data into compelling insights, crafting reliable data 
  processing pipelines, and driving data-centric strategies for sustainable business growth.`;

  return (
    <div className="w-full lg:max-w-2xl text-center">
      {/* Introduction Section */}
      <TitleHeader
        id="intro"
        title={`Hello, I'm Marlon`}
        subtitle="Data Analyst and Software Developer"
      />
      <Section id="intro" className="text-left">
        <p className="my-4">{smallBio}</p>
      </Section>

      {/* Skills Section */}
      <TitleHeader id="skills" title="Skills" />
      <Section id="skills">
        <BarChart labels={labels} values={values} min={50} max={100} />
      </Section>

      {/* Services Section */}
      <TitleHeader id="expertise" title="Expertise" />
      <Section id="expertise" className="text-left">
        <div className="flex flex-wrap justify-around">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              emoji={emoji.getUnicode(service.emojiName)}
              tags={service.tags}
              aria-label={service.title}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
