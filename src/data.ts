import { Project, Experience, TILEntry, BlogPost } from './types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fr } from 'date-fns/locale';


const projectModules = import.meta.glob('./content/projects/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

function projectParseFrontMatter(content: string): { frontMatter: Record<string, any>, markdown: string } {
  const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);
  if (!frontMatterMatch) return { frontMatter: {}, markdown: content };

  const frontMatter = frontMatterMatch[1];
  const markdown = frontMatterMatch[2];

  const frontMatterObj: Record<string, any> = {};
  frontMatter.split('\n').forEach(line => {
    const match = line.match(/^([^:]+):\s*(.*)/);
    if (match) {
      const key = match[1].trim();
      let value: any = match[2].trim();
      
      // Handle arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
      }
      // Handle dates and strings
      else if (/^['"].*['"]$/.test(value)) {
        value = value.slice(1, -1);
      }
      
      frontMatterObj[key] = value;
    }
  });

  return { frontMatter: frontMatterObj, markdown };
}

export const projects: Project[] = Object.entries(projectModules).map(([path, content]) => {
  const id = path.split('/').pop()?.replace('.md', '') || '0';
  const { frontMatter, markdown } = projectParseFrontMatter(content as string);
 
  return {
    id,
    title: frontMatter.title,
    description: frontMatter.description,
    thumbnail: frontMatter.thumbnail,
    startDate: frontMatter.startDate,
    endDate: frontMatter.endDate,
    isRemote: frontMatter.isRemote,
    techStack: frontMatter.techStack || [], 
    skills: frontMatter.skills || [],
    githubUrl: frontMatter.githubUrl,
    fullDescription: markdown
  };
}).sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());






const experienceModules = import.meta.glob('./content/experiences/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

function experienceParseFrontMatter(content: string): { frontMatter: Record<string, any>, markdown: string } {
  const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);
  if (!frontMatterMatch) return { frontMatter: {}, markdown: content };

  const frontMatter = frontMatterMatch[1];
  const markdown = frontMatterMatch[2];

  const frontMatterObj: Record<string, any> = {};
  frontMatter.split('\n').forEach(line => {
    const match = line.match(/^([^:]+):\s*(.*)/);
    if (match) {
      const key = match[1].trim();
      let value: any = match[2].trim();
      
      // Handle arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
      }
      // Handle dates and strings
      else if (/^['"].*['"]$/.test(value)) {
        value = value.slice(1, -1);
      }
      
      frontMatterObj[key] = value;
    }
  });

  return { frontMatter: frontMatterObj, markdown };
}

export const experiences: Experience[] = Object.entries(experienceModules).map(([path, content]) => {
  const id = path.split('/').pop()?.replace('.md', '') || '0';
  const { frontMatter, markdown } = experienceParseFrontMatter(content as string);
 

  return {
    id,
    company: frontMatter.company,
    role: frontMatter.role,
    startDate: frontMatter.startDate,
    endDate: frontMatter.endDate,
    isRemote: frontMatter.isRemote,
    url: frontMatter.url,
    description: frontMatter.description || []
  };
}).sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());






const tilModules = import.meta.glob('./content/til/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});


function tilParseFrontMatter(content: string): { frontMatter: Record<string, any>, markdown: string } {
  const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);
  if (!frontMatterMatch) return { frontMatter: {}, markdown: content };

  const frontMatter = frontMatterMatch[1];
  const markdown = frontMatterMatch[2];

  const frontMatterObj: Record<string, any> = {};
  frontMatter.split('\n').forEach(line => {
    const match = line.match(/^([^:]+):\s*(.*)/);
    if (match) {
      const key = match[1].trim();
      let value: any = match[2].trim();
      
      // Handle arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
      }
      // Handle dates and strings
      else if (/^['"].*['"]$/.test(value)) {
        value = value.slice(1, -1);
      }
      
      frontMatterObj[key] = value;
    }
  });

  return { frontMatter: frontMatterObj, markdown };
}

export const tilEntries: TILEntry[] = Object.entries(tilModules).map(([path, content]) => {
  const id = path.split('/').pop()?.replace('.md', '') || '0';
  const { frontMatter, markdown } = tilParseFrontMatter(content as string);


  return {
    id,
    date: frontMatter.date || new Date().toISOString(),
    title: frontMatter.title || 'Untitled Post',
    description: frontMatter.description || 'Not available'
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());



const blogModules = import.meta.glob('./content/blogs/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});


function blogsParseFrontMatter(content: string): { frontMatter: Record<string, any>, markdown: string } {
  const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);
  if (!frontMatterMatch) return { frontMatter: {}, markdown: content };

  const frontMatter = frontMatterMatch[1];
  const markdown = frontMatterMatch[2];

  const frontMatterObj: Record<string, any> = {};
  frontMatter.split('\n').forEach(line => {
    const match = line.match(/^([^:]+):\s*(.*)/);
    if (match) {
      const key = match[1].trim();
      let value: any = match[2].trim();
      
      // Handle arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
      }
      // Handle dates and strings
      else if (/^['"].*['"]$/.test(value)) {
        value = value.slice(1, -1);
      }
      
      frontMatterObj[key] = value;
    }
  });

  return { frontMatter: frontMatterObj, markdown };
}

export const blogPosts: BlogPost[] = Object.entries(blogModules).map(([path, content]) => {
  const id = path.split('/').pop()?.replace('.md', '') || '0';
  const { frontMatter, markdown } = blogsParseFrontMatter(content as string);

  return {
    id,
    title: frontMatter.title || 'Untitled Post',
    excerpt: frontMatter.excerpt || '',
    image: frontMatter.image || '',
    tags: frontMatter.tags || [],
    category: frontMatter.category || frontMatter.categories || [],
    content: markdown,
    date: frontMatter.date || new Date().toISOString(),
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());