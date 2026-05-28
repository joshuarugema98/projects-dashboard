// import { useMemo, useState } from "react";
// import type { ProjectStatus } from "../types/project";

// type StatusFilter = ProjectStatus | "all";

// export function ProjectsPage() {
//   const { projects, isLoading, error } = projects();

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

//   const filteredProjects = useMemo(() => {
//     return projects.filter((project) => {
//       const matchesSearch = project.name
//         .toLowerCase()
//         .includes(search.toLowerCase());

//       const matchesStatus =
//         statusFilter === "all" || project.status === statusFilter;

//       return matchesSearch && matchesStatus;
//     });
//   }, [projects, search, statusFilter]);

//   if (isLoading) {
//     return <p>Loading projects...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <main>
//       <h1>Projects</h1>

//       <div>
//         <input
//           type="search"
//           placeholder="Search projects..."
//           value={search}
//           onChange={(event) => setSearch(event.target.value)}
//         />

//         <select
//           value={statusFilter}
//           onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
//         >
//           <option value="all">All statuses</option>
//           <option value="active">Active</option>
//           <option value="paused">Paused</option>
//           <option value="completed">Completed</option>
//         </select>
//       </div>

//       <ProjectList projects={filteredProjects} />
//     </main>
//   );
// }
