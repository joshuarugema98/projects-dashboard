import { useEffect, useMemo, useState } from "react";
import type { Project, ProjectStatus } from "../types/project";
import { getProjects } from "../api/projectApi";
import { ProjectList } from "../components/ProjectCard";

type StatusFilter = ProjectStatus | "all";

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [projects, statusFilter, search]);

  useEffect(() => {
    async function loadProjects() {
      try {
        setIsLoading(true);
        const data = await getProjects();
        setProjects(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    loadProjects();
  }, []);

  return (
    <main>
      <h1>Client Projects</h1>
      <div>
        <input
          type="search"
          placeholder="Search projects"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value as StatusFilter)
          }
        >
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      {isLoading ? (
        <p>Loading....</p>
      ) : isError ? (
        <p>An error occured fetching projects</p>
      ) : (
        <ProjectList projects={filteredProjects} />
      )}
    </main>
  );
}
