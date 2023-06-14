import React from "react";
import Section from "../components/Section";
import SubstackSignup from "../components/SubstackSignup";
import TitleHeader from "../components/TitleHeader";

const aboutParagraphs = [
  `As a data analysis professional, I leverage data-driven strategies to
  bolster customer service teams and develop web applications using
  technologies like Python, JavaScript, and Ruby. I have a strong
  command over database languages like PostgreSQL and Snowflake, and
  markup languages including HTML and CSS.`,
  `I'm proficient with efficiency-enhancing software tools and
  platforms such as Airflow, Docker, Tableau, Sigma, and Mode, as well
          as Google Analytics and advertising platforms like Facebook Ads,
          Twitter Ads, and LinkedIn Ads.`,
  `Known for my problem-solving aptitude, meticulous attention to detail,
          innovative approach and organizational skills, I excel in roles that
          value leadership, adaptability, and cultural intelligence. I
          communicate complex concepts clearly, enhancing team collaboration,
          and easily adapt to new environments and challenges.`,
];

const workItems = [
  `Designed and created internal dashboards using Looker and Tableau,
  providing actionable insights for executive and Client Success
  teams.`,
  `Developed a Client Success account tiering classifier using SQL,
  Python, sklearn, and a Random Forest Classifier.`,
  `Collaborated with internal Enterprise stakeholders to perform
  deep-dive analysis, aiding in the identification and resolution of
  merchant performance issues.`,
  `Worked with both internal and external stakeholders to perform ad
  hoc analysis of retailer data, providing valuable insights and
  recommendations.`,
  `Crafted automation scripts to bolster scalability and streamline
  data processes, significantly improving operational efficiency.`,
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
      <TitleHeader
        id="substack"
        title="Dinner Party AI"
        subtitle="Subscribe for AI insights and prompt ideas."
      />
      <Section id="substack" className="flex flex-col items-center">
        <SubstackSignup />
      </Section>
    </div>
  );
}
