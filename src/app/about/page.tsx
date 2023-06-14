import React from "react";
import Section from "../components/Section";
import TitleHeader from "../components/TitleHeader";

export default function Page() {
  return (
    <div className="w-full lg:max-w-2xl text-center">
      <TitleHeader id="about" title="About Me" />
      <Section id="about" className="text-left">
        <p className="my-4">
          As a data analysis professional, I leverage data-driven strategies to
          bolster customer service teams and develop web applications using
          technologies like Python, JavaScript, and Ruby. I have a strong
          command over database languages like PostgreSQL and Snowflake, and
          markup languages including HTML and CSS.
        </p>
        <p className="my-4">
          I&apos;m proficient with efficiency-enhancing software tools and
          platforms such as Airflow, Docker, Tableau, Sigma, and Mode, as well
          as Google Analytics and advertising platforms like Facebook Ads,
          Twitter Ads, and LinkedIn Ads.
        </p>
        <p className="my-4">
          Known for my problem-solving aptitude, meticulous attention to detail,
          innovative approach and organizational skills, I excel in roles that
          value leadership, adaptability, and cultural intelligence. I
          communicate complex concepts clearly, enhancing team collaboration,
          and easily adapt to new environments and challenges.
        </p>
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
          <li>
            Designed and created internal dashboards using Looker and Tableau,
            providing actionable insights for executive and Client Success
            teams.
          </li>
          <li>
            Developed a Client Success account tiering classifier using SQL,
            Python, sklearn, and a Random Forest Classifier.
          </li>
          <li>
            Collaborated with internal Enterprise stakeholders to perform
            deep-dive analysis, aiding in the identification and resolution of
            merchant performance issues.
          </li>
          <li>
            Worked with both internal and external stakeholders to perform ad
            hoc analysis of retailer data, providing valuable insights and
            recommendations.
          </li>
          <li>
            Crafted automation scripts to bolster scalability and streamline
            data processes, significantly improving operational efficiency.
          </li>
        </ul>
      </Section>
    </div>
  );
}
