export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  gitlabUrl?: string;
  completionDate?: string;
}