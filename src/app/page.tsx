"use client";

import BarChart from "./components/BarChart";
import React from "react";
import Section from "./components/Section";
import ServiceCard from "./components/ServiceCard";
import TitleHeader from "./components/TitleHeader";
import SubstackFeed from "./components/SubstackFeed";
import SubstackSignup from "./components/SubstackSignup";

export default function Home() {
  const labels = ["Python", "SQL", "Tableau", "JavaScript", "Data Science"];
  const values = [90, 95, 80, 70, 75];

  const servicesData = [
    {
      title: "Insightful Data Analysis",
      emoji: "💻",
      tags: ["SQL", "Python"],
    },
    {
      title: "Intuitive Dashboard Building",
      emoji: "📊",
      tags: ["Tableau", "Looker"],
    },
    {
      title: "Efficient Data Cleaning & Transformation",
      emoji: "🔧",
      tags: ["Python", "Airflow"],
    },
    {
      title: "Cutting-edge Automation & AI Development",
      emoji: "🤖",
      tags: ["Python", "OpenAI"],
    },
  ];
  const smallBio = `Leveraging a comprehensive background in both Finance and Software, 
  I've refined my expertise across diverse industry roles. My forte lies in transforming 
  raw data into compelling insights, engineering reliable data processing pipelines, 
  and fostering data-centric strategies for sustainable business growth.`;

  return (
    <div className="w-full lg:max-w-2xl text-center">
      {/* Introduction Section */}
      <TitleHeader
        id="intro"
        title="Hello, I&lsquo;m Marlon"
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
      <TitleHeader id="services" title="Services" />
      <Section id="services" className="text-left">
        <div className="flex flex-wrap justify-around">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              emoji={service.emoji}
              tags={service.tags}
            />
          ))}
        </div>
      </Section>

      {/* Blog Section */}
      <TitleHeader id="substack" title="Substack" />
      <Section id="substack" className="flex flex-col items-center">
        <p className="my-2">
          Stay up-to-date with my latest thoughts, research, and tutorials on
          AI.
        </p>
        <SubstackFeed />
        <p className="my-2">
          Subscribe to my newsletter to get the latest updates delivered
        </p>
        <SubstackSignup />
      </Section>
    </div>
  );
}
