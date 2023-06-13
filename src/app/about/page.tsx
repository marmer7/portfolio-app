import React from "react";
import Section from "../components/Section";
import TitleHeader from "../components/TitleHeader";

export default function Page() {
  return (
    <div className="w-full lg:max-w-2xl text-center">
      <TitleHeader id="about" title="About Me" subtitle={undefined} />
      <Section id="about" className="text-left">
        <p>
          I am a professional in the field of data analysis with an emphasis on
          leveraging data-driven strategies and bolstering customer service
          teams. My expertise lies in the development of web applications
          utilizing a broad spectrum of technologies. My skillset encompasses a
          variety of programming languages including but not limited to Python,
          JavaScript, and Ruby. Additionally, I have a strong command over
          database languages, such as PostgreSQL and Snowflake, as well as
          markup languages including HTML and CSS. Furthermore, I am adept at
          working with a diverse array of software tools and platforms that
          enhance efficiency and data visualization. These include, among
          others, Airflow, Docker, Tableau, Sigma, and Mode. I also have
          experience in using Google Analytics, along with a range of social
          media and programmatic advertising platforms such as Facebook Ads,
          Twitter Ads, and LinkedIn Ads. My competencies in these areas allow me
          to drive insights and support data-driven decision making within the
          organization.
        </p>
        <p>
          With a natural aptitude for problem-solving and a meticulous attention
          to detail, I consistently contribute to any project. I am known for my
          innovative approach and organizational skills, which I apply to
          achieve goal-oriented outcomes. Upholding a robust work ethic, I
          thrive in roles that value leadership, adaptability, and cultural
          intelligence.
        </p>
        <p>
          Further, my strong communication skills enable me to articulate
          complex concepts clearly and effectively, enhancing collaborative
          efforts within a team. I have a proven track record in adjusting to
          new environments and challenges, demonstrating my capacity to adapt
          and grow.
        </p>
      </Section>
      <TitleHeader id="work" title="My Work" subtitle={undefined} />
      <Section id="work" className="text-left">
        <p>
          In my tenure as a professional in the field of data analysis and
          business intelligence, I have assumed a variety of roles that span
          from associate to senior-level positions. During this time, I have had
          the privilege of achieving significant milestones, which include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            The design and creation of internal dashboards using Looker to
            provide actionable insights for executive and Client Success teams.
          </li>
          <li>
            The development of a Client Success account tiering classifier,
            utilizing SQL, Python, sklearn, and a Random Forest Classifier.
          </li>
          <li>
            Collaborating with internal Enterprise stakeholders to perform
            deep-dive analysis, aiding in the identification and resolution of
            merchant performance issues.
          </li>
          <li>
            Engaging both internal and external stakeholders to carry out ad hoc
            analysis of retailer data, providing valuable insights and
            recommendations.
          </li>
          <li>
            Crafting automation scripts to bolster scalability and streamline
            data processes across the organization, significantly improving
            operational efficiency.
          </li>
        </ul>
      </Section>
    </div>
  );
}
