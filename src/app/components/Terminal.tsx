"use client";

import { useEffect, useRef, useState } from "react";

type Entry = { id: number; cmd: string; output: React.ReactNode };

const HELP_LINES: [string, string][] = [
  ["help", "show this list"],
  ["whoami", "name, role, bio"],
  ["work", "recent work history"],
  ["work --all", "full work history"],
  ["projects", "side projects"],
  ["skills", "skills"],
  ["education", "education"],
  ["contact", "contact links"],
  ["resume", "open resume PDF"],
  ["ls", "list sections"],
  ["pwd", "current directory"],
  ["date", "current date/time"],
  ["echo <text>", "echo text"],
  ["clear", "clear the terminal (or ⌘K / ctrl+K)"],
];

const WORK: [string, string, string][] = [
  ["2024 - Present", "EvolutionIQ", "Data Scientist"],
  ["2022 - 2024", "Attentive", "Revenue Analytics Manager, GTM"],
  ["2021 - 2022", "DoorDash", "Senior Business Analyst, Enterprise Analytics"],
];

const WORK_ALL: [string, string, string][] = [
  ["2024 - Present", "EvolutionIQ", "Data Scientist"],
  ["2022 - 2024", "Attentive", "Revenue Analytics Manager, GTM"],
  ["2021 - 2022", "DoorDash", "Senior Business Analyst, Enterprise Analytics"],
  ["2020 - 2021", "Criteo", "Data Analyst, Retail Media"],
  ["2019 - 2020", "Known", "Senior Data Analyst, Media Activation"],
  ["2018 - 2019", "Known", "QA Engineer"],
];

const EDUCATION: [string, string, string][] = [
  ["2017", "NYU Stern", "B.Sc. Finance & Data Science"],
  ["2017", "Flatiron School", "Web Development Certificate"],
];

const PROJECTS: { name: string; url: string; description: string; tags?: string }[] = [
  {
    name: "nycdateideas",
    url: "https://nycdateideas.com",
    description: "date ideas for NYC, generated with LLM + live search",
    tags: "llm · serp · parsing",
  },
];

const SKILLS: [string, string][] = [
  ["analytics", "Python · SQL · Pandas · A/B Testing · Statistical Inference"],
  ["ml", "Scikit-Learn · XGBoost · Feature Engineering · Segmentation · Predictive Modeling"],
  ["platforms", "dbt · Airflow · Docker · AWS · REST APIs"],
  ["bi", "Looker · Tableau · Sigma · Mode"],
  ["ai", "Claude Code · Gemini API · OpenAI API · RAG · Prompt Engineering · MCP"],
];

const CONTACT: [string, string, string][] = [
  ["email", "mailto:marlonmerjos@gmail.com", "marlonmerjos@gmail.com"],
  ["linkedin", "https://linkedin.com/in/marlonmerjos", "linkedin.com/in/marlonmerjos"],
  ["github", "https://github.com/marmer7", "github.com/marmer7"],
  ["resume", "/resume/marlon-merjos-resume.pdf", "marlon-merjos-resume.pdf"],
];

function Whoami() {
  return (
    <>
      <p className="t-name">Marlon Merjos</p>
      <p className="t-muted">Data Scientist · Brooklyn, NY</p>
      <p className="t-bio">
        I design analytical systems that turn large, messy datasets into clear
        business decisions. Predictive modeling, GTM analytics, and scalable
        reporting infrastructure.
      </p>
    </>
  );
}

function rowList(rows: [string, string, string][]) {
  return (
    <>
      {rows.map(([period, company, role], i) => (
        <div className="row" key={`${company}-${i}`}>
          <span className="col-mid">
            <span className="col-key">{period}</span>{"  "}{company}
          </span>
          <span className="col-val">{role}</span>
        </div>
      ))}
    </>
  );
}

function Work() {
  return rowList(WORK);
}

function WorkAll() {
  return rowList(WORK_ALL);
}

function Education() {
  return rowList(EDUCATION);
}

function Projects() {
  return (
    <>
      {PROJECTS.map((p) => (
        <div className="project" key={p.name}>
          <a className="project-name" href={p.url} target="_blank" rel="noopener noreferrer">
            {p.url.replace(/^https?:\/\//, "")}
          </a>
          <p className="project-desc">{p.description}</p>
          {p.tags && <p className="project-tags">{p.tags}</p>}
        </div>
      ))}
    </>
  );
}

function Skills() {
  return (
    <>
      {SKILLS.map(([k, v]) => (
        <div className="kv" key={k}>
          <span className="k">{k}</span>
          <span>{v}</span>
        </div>
      ))}
    </>
  );
}

function Contact() {
  return (
    <>
      {CONTACT.map(([k, href, label]) => (
        <div className="kv" key={k}>
          <span className="k">{k}</span>
          <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
        </div>
      ))}
    </>
  );
}

function Help() {
  const pad = Math.max(...HELP_LINES.map(([c]) => c.length));
  return (
    <pre className="t-help">
      {HELP_LINES.map(([c, d]) => `${c.padEnd(pad + 2)}${d}`).join("\n")}
    </pre>
  );
}

function exec(raw: string): React.ReactNode {
  const trimmed = raw.trim();
  const [name, ...rest] = trimmed.split(/\s+/);
  const lower = name.toLowerCase();
  const args = rest.join(" ");

  switch (lower) {
    case "help":
    case "?":
      return <Help />;
    case "whoami":
    case "about":
      return <Whoami />;
    case "work":
    case "experience":
      if (args === "--all" || args === "-a" || args === "all") return <WorkAll />;
      return <Work />;
    case "projects":
      return <Projects />;
    case "skills":
      return <Skills />;
    case "education":
    case "edu":
      return <Education />;
    case "contact":
      return <Contact />;
    case "ls":
      return <p>whoami  work  projects  skills  education  contact  resume</p>;
    case "pwd":
      return <p>/home/marlon</p>;
    case "date":
      return <p>{new Date().toString()}</p>;
    case "echo":
      return <p>{args || ""}</p>;
    case "resume":
      if (typeof window !== "undefined") {
        window.open("/resume/marlon-merjos-resume.pdf", "_blank", "noopener,noreferrer");
      }
      return <p className="t-muted">opening marlon-merjos-resume.pdf...</p>;
    case "sudo":
      return <p className="t-muted">nice try.</p>;
    case "vim":
    case "emacs":
    case "nano":
      return <p className="t-muted">it&apos;s 2026. use cursor.</p>;
    case "rm":
      if (args.startsWith("-rf")) return <p className="t-muted">absolutely not.</p>;
      return <p>rm: missing operand</p>;
    case "exit":
    case "quit":
      return <p className="t-muted">you can&apos;t leave. you live here now.</p>;
    case "":
      return null;
    default:
      return <p>command not found: {name}. try <span className="t-accent">help</span>.</p>;
  }
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Entry[]>([]);
  const [recall, setRecall] = useState<string[]>([]);
  const [recallIdx, setRecallIdx] = useState<number | null>(null);
  const counterRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (history.length === 0) return;
    const body = endRef.current?.parentElement;
    if (body) body.scrollTop = body.scrollHeight;
  }, [history]);

  function submit(cmd: string) {
    const trimmed = cmd.trim();
    if (trimmed.toLowerCase() === "clear") {
      setHistory([]);
      return;
    }
    const output = exec(trimmed);
    setHistory((h) => [...h, { id: counterRef.current++, cmd: trimmed, output }]);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      setHistory([]);
      setRecallIdx(null);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (recall.length === 0) return;
      const next = recallIdx === null ? recall.length - 1 : Math.max(0, recallIdx - 1);
      setRecallIdx(next);
      setInput(recall[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (recallIdx === null) return;
      const next = recallIdx + 1;
      if (next >= recall.length) {
        setRecallIdx(null);
        setInput("");
      } else {
        setRecallIdx(next);
        setInput(recall[next]);
      }
    }
  }

  return (
    <div
      className="terminal"
      onClick={(e) => {
        if (window.getSelection()?.toString()) return;
        if ((e.target as HTMLElement).tagName === "A") return;
        inputRef.current?.focus({ preventScroll: true });
      }}
    >
      <div className="t-titlebar">
        <span className="t-dot red" aria-hidden="true" />
        <span className="t-dot yellow" aria-hidden="true" />
        <span className="t-dot green" aria-hidden="true" />
        <span className="t-title">marlon@portfolio: ~</span>
      </div>
      <div className="t-body">
      <p className="prompt">help</p>
      <p className="t-muted t-hint">
        interactive shell. try <span className="t-accent">help</span>,
        {" "}<span className="t-accent">ls</span>,
        {" "}<span className="t-accent">whoami</span>. arrows recall history.
      </p>

      {history.map((e) => (
        <div className="t-entry" key={e.id}>
          <p className="prompt">{e.cmd}</p>
          {e.output}
        </div>
      ))}

      <form
        className="t-input-line"
        onSubmit={(ev) => {
          ev.preventDefault();
          if (input.trim()) {
            submit(input);
            setRecall((r) => [...r, input.trim()]);
          }
          setInput("");
          setRecallIdx(null);
        }}
      >
        <span className="t-input-prompt">$</span>
        <input
          ref={inputRef}
          className="t-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          aria-label="terminal input"
        />
      </form>

      <div ref={endRef} />
      </div>
    </div>
  );
}
