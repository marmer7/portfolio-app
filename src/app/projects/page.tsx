import Image from "next/image";
import Link from "next/link";

interface ProjectLink {
  href: string;
  name: string;
  description: string;
  tags: string[];
  status: string;
  imagePath?: string;
  external: boolean;
}

export default function Page() {
  const projectLinks: ProjectLink[] = [
    {
      href: "https://www.vacabot.io/create_itinerary",
      name: "VacaBot",
      description:
        "VacaBot is a trip planner powered by OpenAI's API. It creates personalized \
        itineraries based on a user's preferences.",
      tags: ["Python", "Flask", "OpenAI", "Redis", "PostgreSQL", "Docker"],
      status: "Live App",
      imagePath: "/images/mj_cow.png",
      external: true,
    },
    {
      href: "https://github.com/marmer7/shield-prompt",
      name: "ShieldPrompt",
      description:
        "Google Chrome extension that detects confidential information in ChatGPT.",
      tags: ["JavaScript", "TypeScript", "Chrome Extensions", "React"],
      status: "Open Source",
      external: true,
    },
    {
      href: "/",
      name: "Personal Website",
      description: "A clean analytics portfolio built with Next.js and Tailwind.",
      tags: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      status: "Current Site",
      external: false,
    },
  ];

  return (
    <div className="page-shell w-full max-w-6xl">
      <section className="content-panel">
        <div className="section-head">
          <h2>Projects</h2>
          <p>
            A small selection of products and tools I built across analytics and
            engineering workflows.
          </p>
        </div>
        <div className="project-grid">
          {projectLinks.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

type ProjectCardProps = {
  project: ProjectLink;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardContent = (
    <>
      <div className="project-header">
        <p className="project-status">{project.status}</p>
        <h3>{project.name}</h3>
      </div>
      <p className="project-copy">{project.description}</p>

      {project.imagePath && (
        <div className="project-image-wrap">
          <Image
            priority
            src={project.imagePath}
            height={88}
            width={88}
            alt={project.name}
            className="rounded-full"
          />
        </div>
      )}

      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="project-link">
        {project.external ? <span>View Project ↗</span> : <span>View Project</span>}
      </div>
    </>
  );

  if (project.external) {
    return (
      <article className="project-card">
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          {cardContent}
        </a>
      </article>
    );
  }

  return (
    <article className="project-card">
      <Link href={project.href}>{cardContent}</Link>
    </article>
  );
};
