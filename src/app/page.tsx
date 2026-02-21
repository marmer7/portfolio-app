import Link from "next/link";
import SubstackFeed from "./components/SubstackFeed";

type SkillGroup = {
  title: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Core Analytics",
    skills: ["Python", "SQL", "A/B Testing", "Statistical Inference"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-Learn", "XGBoost", "Segmentation", "Predictive Modeling"],
  },
  {
    title: "Data Platforms",
    skills: ["dbt", "Airflow", "Docker", "REST APIs"],
  },
  {
    title: "BI & Visualization",
    skills: ["Looker", "Tableau", "Sigma", "Mode"],
  },
];

const impactStats = [
  { label: "Contracted Revenue Influenced", value: "$30M+" },
  { label: "Largest Dataset Analyzed", value: "1B+ rows" },
  { label: "Forecast Lag Reduction", value: ">90%" },
  { label: "Monthly Analyst Hours Saved", value: "40+" },
];

const careerHighlights = [
  {
    company: "EvolutionIQ",
    role: "Client Strategy & Advanced Analytics",
    period: "2024 - Present",
    detail:
      "Owned LTD strategy across 8 insurers, built configurable Python impact pipelines, and quantified ROI tied to claim duration reduction.",
  },
  {
    company: "Attentive",
    role: "Revenue Analytics Manager, GTM",
    period: "2022 - 2024",
    detail:
      "Created segmentation and ad spend projection models, then launched real-time pacing workflows to improve revenue forecasting speed.",
  },
  {
    company: "DoorDash",
    role: "Senior Business Analyst, Enterprise Analytics",
    period: "2021 - 2022",
    detail:
      "Developed merchant performance and location optimization analyses that informed high-value growth recommendations.",
  },
];

export default function Home() {
  return (
    <div className="page-shell w-full max-w-6xl">
      <section className="hero-panel">
        <p className="eyebrow">Marlon Merjos · Brooklyn, NY</p>
        <h1 className="hero-title">Data Analytics Leader for High-Growth Teams</h1>
        <p className="hero-copy">
          I design analytical systems that turn large, messy datasets into clear
          business decisions. My work spans predictive modeling, GTM analytics,
          and scalable reporting infrastructure.
        </p>
        <div className="hero-actions">
          <a
            href="/resume/marlon-merjos-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="btn-primary"
          >
            Download Resume
          </a>
          <Link href="/contact" className="btn-secondary">
            Contact Me
          </Link>
        </div>
      </section>

      <section className="content-panel">
        <div className="section-head">
          <h2>What I Deliver</h2>
          <p>Business impact backed by production-grade analytics.</p>
        </div>
        <div className="stats-grid">
          {impactStats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-panel">
        <div className="section-head">
          <h2>Skills Snapshot</h2>
          <p>Tools and methods I use most to solve growth and operations problems.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-panel">
        <div className="section-head">
          <h2>Recent Experience</h2>
          <p>A focused view of the roles most relevant to analytics leadership.</p>
        </div>
        <div className="timeline">
          {careerHighlights.map((item) => (
            <article key={item.company} className="timeline-item">
              <div className="timeline-meta">
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <div>
                <p className="timeline-period">{item.period}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-panel">
        <div className="section-head">
          <h2>Latest Writing</h2>
          <p>Recent notes and essays from my Substack.</p>
        </div>
        <SubstackFeed />
      </section>
    </div>
  );
}
