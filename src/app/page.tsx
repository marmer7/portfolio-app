import Terminal from "./components/Terminal";
import { NAME, TAGLINE, BIO, WORK, PROJECTS, EDUCATION, SKILLS, CONTACT } from "./data";

export default function Home() {
  return (
    <main className="term">
      <p className="prompt">whoami</p>
      <h1 className="name">
        {NAME}
        <span className="cursor" aria-hidden="true" />
      </h1>
      <p className="tagline">{TAGLINE}</p>
      <p className="bio">{BIO}</p>

      <Terminal />

      <p className="prompt">work --recent</p>
      {WORK.map((w) => (
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
      {PROJECTS.map((p) => (
        <div className="project" key={p.name}>
          <a className="project-name" href={p.url} target="_blank" rel="noopener noreferrer">
            {p.url.replace(/^https?:\/\//, "")}
          </a>
          <p className="project-desc">{p.description}</p>
          {p.tags && <p className="project-tags">{p.tags}</p>}
        </div>
      ))}

      <p className="prompt">skills</p>
      {SKILLS.map((s) => (
        <div className="kv" key={s.group}>
          <span className="k">{s.group}</span>
          <span>{s.items}</span>
        </div>
      ))}

      <p className="prompt">education</p>
      {EDUCATION.map((e) => (
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
      {CONTACT.map((c) => (
        <div className="kv" key={c.key}>
          <span className="k">{c.key}</span>
          <a href={c.href} target="_blank" rel="noopener noreferrer">{c.label}</a>
        </div>
      ))}

    </main>
  );
}
