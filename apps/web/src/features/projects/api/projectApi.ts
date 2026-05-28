import type { Project } from "../types/project";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getProjects(): Promise<Project[]>{
    const response = await fetch(`${API_BASE_URL}/api/projects`);
    if(!response.ok){
        throw new Error("Failed to fetch api");
    }

    return response.json();
}