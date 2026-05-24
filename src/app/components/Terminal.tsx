"use client";

import { useEffect, useRef, useState } from "react";
import { NAME, TAGLINE, BIO, WORK, WORK_ALL, EDUCATION, PROJECTS, SKILLS, CONTACT, type Job } from "../data";

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
  ["history", "previous commands"],
  ["uname [-a]", "system info"],
  ["pwd", "current directory"],
  ["date", "current date/time"],
  ["echo <text>", "echo text"],
  ["clear", "clear (⌘K / ctrl+K)"],
];

const COMMANDS = [
  "help", "whoami", "work", "projects", "skills", "education",
  "contact", "resume", "ls", "history", "uname", "pwd", "date",
  "echo", "clear", "about", "experience", "edu",
];

function Whoami() {
  return (
    <>
      <p className="t-name">{NAME}</p>
      <p className="t-muted">{TAGLINE}</p>
      <p className="t-bio">{BIO}</p>
    </>
  );
}

function rowList(rows: Job[]) {
  return (
    <>
      {rows.map((r, i) => (
        <div className="row" key={`${r.company}-${i}`}>
          <span className="col-mid">
            <span className="col-key">{r.period}</span>{"  "}{r.company}
          </span>
          <span className="col-val">{r.role}</span>
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
  return (
    <>
      {EDUCATION.map((e, i) => (
        <div className="row" key={`${e.school}-${i}`}>
          <span className="col-mid">
            <span className="col-key">{e.year}</span>{"  "}{e.school}
          </span>
          <span className="col-val">{e.degree}</span>
        </div>
      ))}
    </>
  );
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
      {SKILLS.map((s) => (
        <div className="kv" key={s.group}>
          <span className="k">{s.group}</span>
          <span>{s.items}</span>
        </div>
      ))}
    </>
  );
}

function Contact() {
  return (
    <>
      {CONTACT.map((c) => (
        <div className="kv" key={c.key}>
          <span className="k">{c.key}</span>
          <a href={c.href} target="_blank" rel="noopener noreferrer">{c.label}</a>
        </div>
      ))}
    </>
  );
}

function Help() {
  const pad = Math.max(...HELP_LINES.map(([c]) => c.length));
  const fmt = (rows: [string, string][]) =>
    rows.map(([c, d]) => `${c.padEnd(pad + 2)}${d}`).join("\n");
  const half = Math.ceil(HELP_LINES.length / 2);
  return (
    <div className="t-help-grid">
      <pre className="t-help">{fmt(HELP_LINES.slice(0, half))}</pre>
      <pre className="t-help">{fmt(HELP_LINES.slice(half))}</pre>
    </div>
  );
}

function History({ recall }: { recall: string[] }) {
  if (recall.length === 0) return <p className="t-muted">no commands yet.</p>;
  const pad = String(recall.length).length;
  return (
    <pre className="t-help">
      {recall.map((c, i) => `${String(i + 1).padStart(pad)}  ${c}`).join("\n")}
    </pre>
  );
}

function exec(raw: string, recall: string[]): React.ReactNode {
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
    case "history":
      return <History recall={recall} />;
    case "uname":
      if (args === "-a" || args === "--all")
        return <p>Linux marlon@portfolio 16.0.0 Next.js · React 19 · TypeScript · Tailwind 4</p>;
      return <p>Linux</p>;
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
    const output = exec(trimmed, recall);
    setHistory((h) => [...h, { id: counterRef.current++, cmd: trimmed, output }]);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      setHistory([]);
      setRecallIdx(null);
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const cur = input.trim().toLowerCase();
      if (!cur || cur.includes(" ")) return;
      const matches = COMMANDS.filter((c) => c.startsWith(cur));
      if (matches.length === 1) {
        setInput(matches[0] + " ");
      } else if (matches.length > 1) {
        let prefix = matches[0];
        for (const m of matches) {
          while (!m.startsWith(prefix)) prefix = prefix.slice(0, -1);
        }
        if (prefix.length > cur.length) setInput(prefix);
      }
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
          suppressHydrationWarning
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
        />
      </form>

      <div ref={endRef} />
      </div>
    </div>
  );
}
