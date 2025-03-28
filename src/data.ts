import { Project, Experience, TILEntry, BlogPost } from './types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fr } from 'date-fns/locale';



export const projects: Project[] = [
  {
    id: '1',
    title: 'Empty Head - Training and Management Web Application',
    description: 'A responsive web application for student learning and course management',
    thumbnail: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop&q=60',
    startDate: '2024-02',
    endDate: '2024-05',
    isRemote: true,
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    skills: ['Project Management', 'Team Leadership', 'Full Stack Development'],
    githubUrl: 'https://github.com/username/empty-head',
    fullDescription: `# Empty Head - Training and Management Web Application

Led a team of 25 members in developing a comprehensive web application for student learning and course management.

## Key Achievements
- Increased user engagement by 40% through responsive design
- Enhanced user satisfaction by 30% through improved interaction flow
- Achieved 100% completion of project milestones
- Successfully coordinated frontend, backend, and database teams

## Technical Details
- Frontend: React, TypeScript, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
- Deployment: AWS`
  },
  {
    id: '2',
    title: 'Eye Hear - Object Detection for Visually Impaired',
    description: 'AI-powered object detection system with voice feedback',
    thumbnail: 'https://images.unsplash.com/photo-1527430253228-e93688616381?w=800&auto=format&fit=crop&q=60',
    startDate: '2022-09',
    endDate: '2023-05',
    isRemote: false,
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'COCO Dataset'],
    skills: ['Computer Vision', 'Deep Learning', 'Team Leadership'],
    githubUrl: 'https://github.com/username/eye-hear',
    fullDescription: `# Eye Hear - Object Detection System

An innovative solution for visually impaired individuals using AI and computer vision.

## Key Achievements
- Improved object detection speed by 20%
- Increased accuracy by 30% using COCO dataset
- Enhanced accessibility by 25% with voice commands
- Achieved 95% accuracy in object distance detection

## Technical Implementation
- Used Python, OpenCV, and TensorFlow for real-time detection
- Implemented voice command system for user interaction
- Integrated audio feedback system
- Developed algorithms for distance calculation`
  },


  {
    id: '3',
    title: 'Smart Traffic Management System',
    description: 'AI-driven traffic monitoring and congestion control',
    thumbnail: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&auto=format&fit=crop&q=60',

    startDate: '2021-06',
    endDate: '2022-02',
    isRemote: true,
    techStack: ['Python', 'YOLOv5', 'OpenCV', 'Flask'],
    skills: ['Computer Vision', 'Machine Learning', 'Backend Development'],
    githubUrl: 'https://github.com/username/smart-traffic',
    fullDescription: `# Smart Traffic Management System

An AI-based solution for real-time traffic analysis and congestion management.

## Key Achievements
- Reduced traffic congestion by 40% using AI-driven predictions
- Implemented object detection with YOLOv5 for vehicle tracking
- Built Flask-based backend for real-time traffic visualization

## Technical Implementation
- Used Python, YOLOv5, and OpenCV for traffic analysis
- Integrated Flask for serving real-time traffic data
- Developed a web dashboard for analytics and insights`
  },

  {
    id: '4',
    title: 'AI-Powered Resume Screening System',
    description: 'Automated recruitment system using NLP and machine learning',
    thumbnail: 'https://i.pinimg.com/736x/c3/56/3b/c3563bb0f1eec971bcb9f8f6153318c1.jpg',

    startDate: '2023-01',
    endDate: '2023-08',
    isRemote: true,
    techStack: ['Python', 'spaCy', 'NLTK', 'Django'],
    skills: ['Natural Language Processing', 'Machine Learning', 'HR Tech'],
    githubUrl: 'https://github.com/username/resume-screening',
    fullDescription: `# AI-Powered Resume Screening System

A smart recruitment tool to automate resume shortlisting using NLP.

## Key Achievements
- Reduced recruitment processing time by 60%
- Increased hiring accuracy by 35% through AI-driven analysis
- Processed over 10,000 resumes in a month

## Technical Implementation
- Utilized spaCy and NLTK for resume text analysis
- Developed Django-based backend for applicant tracking
- Implemented AI models for skill matching and ranking`
  },

  {
    id: '5',
    title: 'Personal Finance Management App',
    description: 'A web-based personal finance tracker with real-time analytics',
    thumbnail: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=60',

    startDate: '2022-03',
    endDate: '2022-12',
    isRemote: false,
    techStack: ['React', 'Node.js', 'MongoDB', 'D3.js'],
    skills: ['Frontend Development', 'Data Visualization', 'Finance'],
    githubUrl: 'https://github.com/username/finance-app',
    fullDescription: `# Personal Finance Management App

A modern finance tracking application for budgeting and expense management.

## Key Achievements
- Helped users save an average of 20% on expenses
- Integrated real-time expense tracking and categorization
- Developed interactive data visualizations for financial insights

## Technical Implementation
- Used React for front-end development
- Built a Node.js and MongoDB backend for user transactions
- Integrated D3.js for dynamic financial data visualization`

  }

];

// export const experiences: Experience[] = [
//   {
//     id: '1',
//     company: 'Cognizant',
//     role: 'CDP Intern',
//     startDate: '2023-12',
//     endDate: '2024-05',
//     isRemote: false,
//     url: 'https://www.linkedin.com/company/cognizant/posts/?feedView=all',
//     description: [
//       'Developed expertise in SDET technologies by completing three projects using Selenium, TestNG, and Cucumber',
//       'Improved test automation and software quality assurance skills by 25%'
//     ]
//   },
//   {
//     id: '2',
//     company: '4Crisk.ai',
//     role: 'Associate Data Engineer',
//     startDate: '2023-07',
//     endDate: '2023-08',
//     isRemote: false,
//     url: 'https://www.linkedin.com/company/4crisk/',
//     description: [
//       'Identified and resolved data pipeline setup errors',
//       'Automated transfer of daily generated folders to Amazon S3 bucket',
//       'Reduced manual intervention by 80%'
//     ]
//   }
// ];




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

  console.log(frontMatter.description)  

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

  console.log(frontMatter.description)  

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