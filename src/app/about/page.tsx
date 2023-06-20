import React from "react";
import Section from "../components/Section";
import TitleHeader from "../components/TitleHeader";

const aboutParagraphs = [
  `As a professional in data analysis, I harness data-driven strategies to
  enhance customer service teams and build web applications using
  languages such as Python, JavaScript, and Ruby. My expertise in SQL and experience with database management systems, notably PostgreSQL and Snowflake, are extensive.
  I'm also adept at using HTML for markup and CSS for styling.`,
  `I have a thorough understanding of efficiency-enhancing software tools and
  platforms including Airflow, Docker, Tableau, Sigma, and Mode, complemented by proficiency in 
  Google Analytics and advertising platforms such as Facebook Ads,
  Twitter Ads, and LinkedIn Ads.`,
  `Renowned for my problem-solving abilities, attention to detail,
  innovative approach, and organizational skills, I thrive in roles that
  value leadership, adaptability, and cultural intelligence. I possess a knack for communicating complex concepts clearly, fostering team collaboration,
  and rapidly adapting to new environments and challenges.`,
];

const workItems = [
  `I designed and created internal dashboards using Looker and Tableau,
  delivering actionable insights for the executive and client success teams.`,
  `I developed a classifier to tier Client Success accounts, utilizing SQL,
  Python, sklearn, and a Random Forest Classifier.`,
  `In collaboration with internal enterprise stakeholders, I performed
  in-depth analysis, instrumental in identifying and resolving
  merchant performance issues.`,
  `I worked with both internal and external stakeholders to conduct ad-hoc 
  analysis of retailer data, providing critical insights and
  recommendations.`,
  `I crafted automation scripts to enhance scalability and streamline
  data processes, significantly boosting operational efficiency.`,
];

export default function Page() {
  return (
    <div className="w-full lg:max-w-2xl text-center">
      <TitleHeader id="about" title="About Me" />
      <Section id="about" className="text-left">
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index} className="my-4">
            {paragraph}
          </p>
        ))}
      </Section>
      <TitleHeader id="work" title="My Work" />
      <Section id="work" className="text-left">
        <p className="my-4">
          In my career as a data analysis and business intelligence
          professional, I&apos;ve achieved significant milestones in roles
          delivering data-driven insights and solutions to internal and external
          stakeholders.
        </p>
        <ul className="list-disc list-inside space-y-2">
          {workItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
