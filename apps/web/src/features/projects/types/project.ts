export type ProjectStatus = "active" | "paused" | "completed";

export type Project = {
    id: number;
    name: string;
    clientName: string;
    status: ProjectStatus;
    dueDate: string;
}