import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section from "../components/Section";
import TitleHeader from "../components/TitleHeader";

interface ProjectLink {
  href: string;
  name: string;
  description: string;
  tags: string[];
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
      imagePath: "/images/mj_cow.png",
      external: true,
    },
    {
      href: "https://github.com/marmer7/shield-prompt",
      name: "ShieldPrompt",
      description:
        "Google Chrome extension that detects confidential information in ChatGPT.",
      tags: ["JavaScript", "TypeScript", "Chrome Extensions", "React"],
      external: true,
    },
    {
      href: "/",
      name: "Personal Website",
      description: "This website!",
      tags: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      external: false,
    },
  ];

  return (
    <div className="w-full lg:max-w-2xl text-center">
      <TitleHeader
        id="projects"
        title="Personal Projects"
        subtitle="Collection of things I work on in my free time. More to come..."
      />
      <Section id="projects" className="text-center">
        <div className="flex flex-col justify-center items-center space-y-4">
          {projectLinks.map((project, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer dark:bg-gray-800 dark:border-gray-700 border border-transparent"
            >
              {project.external ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProjectCard project={project} />
                </a>
              ) : (
                <Link href={project.href}>
                  <ProjectCard project={project} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

interface ProjectCardProps {
  project: ProjectLink;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="flex flex-col justify-center items-center">
    {project.imagePath && (
      <Image
        priority
        src={project.imagePath}
        height={144}
        width={144}
        alt={project.name}
        className="my-2 rounded-full"
      />
    )}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{project.name}</div>
      <p className="text-base">{project.description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {project.tags.map((tag, index) => (
        <span
          key={index}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);
