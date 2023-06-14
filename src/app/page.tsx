"use client";

import BarChart from "./components/BarChart";
import React from "react";
import Section from "./components/Section";
import ServiceCard from "./components/ServiceCard";
import TitleHeader from "./components/TitleHeader";
import SubstackFeed from "./components/SubstackFeed";

export default function Home() {
  const labels = ["Python", "SQL", "Tableau", "JavaScript", "Data Science"];
  const values = [90, 95, 80, 70, 75];

  const servicesData = [
    {
      title: "Data Analysis",
      description: "Using SQL and Python",
      emoji: "💻",
    },
    {
      title: "Dashboard Building",
      description: "With Tableau and Sigma",
      emoji: "📊",
    },
    {
      title: "Data Cleaning and Transformation",
      description: "Using Python",
      emoji: "🔧",
    },
    {
      title: "Automating Data Processes",
      description: "With Airflow and Docker",
      emoji: "🤖",
    },
  ];

  return (
    <div className="w-full lg:max-w-2xl text-center">
      {/* Introduction Section */}
      <TitleHeader
        id="intro"
        title="Hello, I&lsquo;m Marlon"
        subtitle="Data Analyst and Software Developer"
      />
      <Section id="intro" className="text-left">
        <p className="my-4">
          With a solid background in Finance and Computing & Data Science,
          I&lsquo;ve honed my skills working in various roles in the industry.
          My specialties include creating actionable insights through data
          analysis, designing and implementing robust data processing pipelines,
          and developing data-driven strategies for business growth.
        </p>
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
              description={service.description}
              emoji={service.emoji}
            />
          ))}
        </div>
      </Section>

      {/* Blog Section */}
      <TitleHeader id="blog" title="Substack" />
      <p className="my-4">
        Stay up-to-date with my latest thoughts, research, and tutorials on AI.
      </p>
      <Section id="blog" className="text-left">
        <SubstackFeed />
      </Section>
    </div>
  );
}
