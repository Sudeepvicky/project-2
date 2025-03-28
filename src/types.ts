export type Tab = 'projects' | 'experience' | 'til' | 'blogs';

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  startDate: string;
  endDate: string;
  isRemote: boolean;
  techStack: string[];
  skills: string[];
  githubUrl: string;
  fullDescription: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  isRemote: boolean;
  url: string;
  description: string[];
}

export interface TILEntry {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[]
  category: string[] 
  content: string;
  date: string;
}