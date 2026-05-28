import type { Project } from "../types/project";

type ProjectCardProps = {
  project: Project;
};

type ProjectListProps = {
  projects: Project[];
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>Client: {project.clientName}</p>
      <p>Status: {project.status}</p>
      <p>Client: {project.dueDate}</p>
    </div>
  );
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <section>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
