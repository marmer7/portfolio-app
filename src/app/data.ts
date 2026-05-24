export type Job = { period: string; company: string; role: string };
export type Project = { name: string; url: string; description: string; tags?: string };
export type School = { year: string; school: string; degree: string };
export type SkillGroup = { group: string; items: string };
export type ContactLink = { key: string; href: string; label: string };

export const NAME = "Marlon Merjos";
export const TAGLINE = "Data Scientist · Brooklyn, NY";
export const BIO =
  "I design predictive models, applied LLM systems, and analytics infrastructure for high-growth technology companies — owning ambiguous problems end-to-end, from prototype to production.";

export const WORK_ALL: Job[] = [
  { period: "2026 - Present", company: "EvolutionIQ", role: "Data Scientist" },
  { period: "2024 - 2026", company: "EvolutionIQ", role: "Client Strategy & Advanced Analytics" },
  { period: "2022 - 2024", company: "Attentive", role: "Revenue Analytics Manager, GTM" },
  { period: "2021 - 2022", company: "DoorDash", role: "Senior Business Analyst, Enterprise Analytics" },
  { period: "2020 - 2021", company: "Criteo", role: "Data Analyst, Retail Media" },
  { period: "2019 - 2020", company: "Known", role: "Senior Data Analyst, Media Activation" },
  { period: "2018 - 2019", company: "Known", role: "QA Engineer" },
];

export const WORK: Job[] = WORK_ALL.slice(0, 3);

export const PROJECTS: Project[] = [
  {
    name: "nycdateideas",
    url: "https://nycdateideas.com",
    description: "date ideas for NYC, generated with LLM + live search",
    tags: "llm · serp · parsing",
  },
];

export const EDUCATION: School[] = [
  { year: "2017", school: "NYU Stern", degree: "B.Sc. Finance & Data Science" },
  { year: "2017", school: "Flatiron School", degree: "Web Development Certificate" },
];

export const SKILLS: SkillGroup[] = [
  { group: "languages", items: "Python · TypeScript · Bash" },
  { group: "analytics", items: "SQL (Postgres · Snowflake · BigQuery) · Pandas · A/B Testing · Statistical Inference" },
  { group: "ml", items: "Scikit-Learn · XGBoost · Predictive Modeling · Segmentation · Survival Analysis · Causal Inference · Feature Engineering" },
  { group: "platforms", items: "dbt · Airflow · Docker · FastAPI · AWS · REST APIs" },
  { group: "bi", items: "Looker · Tableau · Sigma · Mode" },
  { group: "ai", items: "Claude Code · Gemini API · OpenAI API · RAG · Prompt Engineering · Structured Outputs · Evaluation Frameworks · Agent Orchestration · MCP" },
];

export const CONTACT: ContactLink[] = [
  { key: "email", href: "mailto:marlonmerjos@gmail.com", label: "marlonmerjos@gmail.com" },
  { key: "linkedin", href: "https://linkedin.com/in/marlonmerjos", label: "linkedin.com/in/marlonmerjos" },
  { key: "github", href: "https://github.com/marmer7", label: "github.com/marmer7" },
  { key: "resume", href: "/resume/marlon-merjos-resume.pdf", label: "marlon-merjos-resume.pdf" },
];
