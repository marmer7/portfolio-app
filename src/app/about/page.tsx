const aboutParagraphs = [
  "I lead analytics initiatives that connect rigorous technical execution with measurable business outcomes. My core toolkit includes Python, SQL, machine learning, and BI platforms built for decision-making at scale.",
  "Across roles at EvolutionIQ, Attentive, DoorDash, and Criteo, I have delivered predictive models, segmentation frameworks, and self-serve reporting systems that improved revenue performance and operational efficiency.",
  "I work best in cross-functional environments where data strategy, product execution, and stakeholder communication need to move in lockstep.",
];

const strengths = [
  "Analytics strategy and executive communication",
  "Predictive modeling and experimental design",
  "Scalable data transformation with dbt and SQL",
  "Self-serve BI systems in Looker, Tableau, and Sigma",
  "Cross-functional enablement across product, GTM, and operations",
];

export default function Page() {
  return (
    <div className="page-shell w-full max-w-6xl">
      <section className="content-panel">
        <div className="section-head">
          <h2>About</h2>
          <p>Data analytics leader focused on turning complexity into clarity.</p>
        </div>
        <div className="about-copy">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="content-panel">
        <div className="section-head">
          <h2>Core Strengths</h2>
          <p>What teams rely on me for when outcomes matter.</p>
        </div>
        <ul className="about-strengths">
          {strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
