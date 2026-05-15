import Terminal from "./components/Terminal";

const work = [
  { period: "2024 - Present", company: "EvolutionIQ", role: "Data Scientist" },
  { period: "2022 - 2024", company: "Attentive", role: "Revenue Analytics Manager, GTM" },
  { period: "2021 - 2022", company: "DoorDash", role: "Senior Business Analyst, Enterprise Analytics" },
];

const projects = [
  {
    name: "nycdateideas",
    url: "https://nycdateideas.com",
    description: "date ideas for NYC, generated with LLM + live search",
    tags: "llm · serp · parsing",
  },
];

const education = [
  { year: "2017", school: "NYU Stern", degree: "B.Sc. Finance & Data Science" },
  { year: "2017", school: "Flatiron School", degree: "Web Development Certificate" },
];

const skills = [
  { group: "analytics", items: "Python · SQL · Pandas · A/B Testing · Statistical Inference" },
  { group: "ml", items: "Scikit-Learn · XGBoost · Feature Engineering · Segmentation · Predictive Modeling" },
  { group: "platforms", items: "dbt · Airflow · Docker · AWS · REST APIs" },
  { group: "bi", items: "Looker · Tableau · Sigma · Mode" },
  { group: "ai", items: "Claude Code · Gemini API · OpenAI API · RAG · Prompt Engineering · MCP" },
];

export default function Home() {
  return (
    <main className="term">
      <p className="prompt">whoami</p>
      <h1 className="name">
        Marlon Merjos
        <span className="cursor" aria-hidden="true" />
      </h1>
      <p className="tagline">Data Scientist · Brooklyn, NY</p>
      <p className="bio">
        I design analytical systems that turn large, messy datasets into clear
        business decisions. Predictive modeling, GTM analytics, and scalable
        reporting infrastructure.
      </p>

      <Terminal />

      <p className="prompt">work --recent</p>
      {work.map((w) => (
        <div className="row" key={w.company}>
          <span className="col-mid">
            <span className="col-key">{w.period}</span>
            {"  "}
            {w.company}
          </span>
          <span className="col-val">{w.role}</span>
        </div>
      ))}

      <p className="prompt">projects</p>
      {projects.map((p) => (
        <div className="project" key={p.name}>
          <a className="project-name" href={p.url} target="_blank" rel="noopener noreferrer">
            {p.url.replace(/^https?:\/\//, "")}
          </a>
          <p className="project-desc">{p.description}</p>
          {p.tags && <p className="project-tags">{p.tags}</p>}
        </div>
      ))}

      <p className="prompt">skills</p>
      {skills.map((s) => (
        <div className="kv" key={s.group}>
          <span className="k">{s.group}</span>
          <span>{s.items}</span>
        </div>
      ))}

      <p className="prompt">education</p>
      {education.map((e) => (
        <div className="row" key={e.school}>
          <span className="col-mid">
            <span className="col-key">{e.year}</span>
            {"  "}
            {e.school}
          </span>
          <span className="col-val">{e.degree}</span>
        </div>
      ))}

      <p className="prompt">contact</p>
      <div className="kv">
        <span className="k">email</span>
        <a href="mailto:marlonmerjos@gmail.com">marlonmerjos@gmail.com</a>
      </div>
      <div className="kv">
        <span className="k">linkedin</span>
        <a href="https://linkedin.com/in/marlonmerjos" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/marlonmerjos
        </a>
      </div>
      <div className="kv">
        <span className="k">github</span>
        <a href="https://github.com/marmer7" target="_blank" rel="noopener noreferrer">
          github.com/marmer7
        </a>
      </div>
      <div className="kv">
        <span className="k">resume</span>
        <a href="/resume/marlon-merjos-resume.pdf" target="_blank" rel="noopener noreferrer">
          marlon-merjos-resume.pdf
        </a>
      </div>

    </main>
  );
}
