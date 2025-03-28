import { Project, Experience, TILEntry, BlogPost } from './types';

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

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Cognizant',
    role: 'CDP Intern',
    startDate: '2023-12',
    endDate: '2024-05',
    isRemote: false,
    url: 'https://www.linkedin.com/company/cognizant/posts/?feedView=all',
    description: [
      'Developed expertise in SDET technologies by completing three projects using Selenium, TestNG, and Cucumber',
      'Improved test automation and software quality assurance skills by 25%'
    ]
  },
  {
    id: '2',
    company: '4Crisk.ai',
    role: 'Associate Data Engineer',
    startDate: '2023-07',
    endDate: '2023-08',
    isRemote: false,
    url: 'https://www.linkedin.com/company/4crisk/',
    description: [
      'Identified and resolved data pipeline setup errors',
      'Automated transfer of daily generated folders to Amazon S3 bucket',
      'Reduced manual intervention by 80%'
    ]
  }
];

export const tilEntries: TILEntry[] = [
  {
    id: '1',
    date: '2024-03-25',
    title: 'LangChain Database Integration',
    description: 'Learned how to integrate LangChain with databases for AI chatbot development, focusing on efficient data retrieval and context management.'
  },
  {
    id: '2',
    date: '2024-03-20',
    title: 'Pandas Data Manipulation',
    description: 'Explored pandas library for data manipulation, focusing on handling missing values and data preprocessing techniques.'
  },
  {
    id: '3',
    date: '2024-03-15',
    title: 'Deep Learning with TensorFlow',
    description: 'Studied neural networks and built a deep learning model using TensorFlow for image classification tasks.'
  },
  {
    id: '4',
    date: '2024-03-10',
    title: 'Building RESTful APIs with Node.js',
    description: 'Created RESTful APIs using Node.js, exploring HTTP methods and server-client communication.'
  },
  {
    id: '5',
    date: '2024-03-05',
    title: 'React.js Advanced Patterns',
    description: 'Delved into advanced React.js patterns like higher-order components and render props for component reusability.'
  },
  {
    id: '6',
    date: '2024-03-01',
    title: 'Machine Learning with Scikit-Learn',
    description: 'Explored machine learning algorithms and models using the Scikit-Learn library for predictive analysis.'
  },
  {
    id: '7',
    date: '2024-02-25',
    title: 'Introduction to Cloud Computing with AWS',
    description: 'Learned the basics of cloud computing and deployed a web app using AWS services like EC2 and S3.'
  },
  {
    id: '8',
    date: '2024-02-20',
    title: 'Introduction to SQL Queries',
    description: 'Mastered SQL query writing, focusing on data retrieval, joins, and aggregation for effective database management.'
  },
  {
    id: '9',
    date: '2024-02-15',
    title: 'Docker and Containerization',
    description: 'Learned about Docker, creating containers for apps, and container orchestration with Kubernetes.'
  },
  {
    id: '10',
    date: '2024-02-10',
    title: 'CI/CD Pipeline Setup with GitHub Actions',
    description: 'Set up continuous integration and continuous deployment pipelines using GitHub Actions for automated testing and deployment.'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Web Applications',
    excerpt: 'Learn the best practices for creating scalable web applications with modern technologies.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    category: ['Project Management', 'Team Leadership', 'Full Stack Development'],
    content: `# Building Scalable Web Applications

In this comprehensive guide, we'll explore the essential principles and practices for building scalable web applications that can handle growing user bases and increasing demands.

## Key Topics Covered
1. Microservices Architecture
2. Load Balancing
3. Caching Strategies
4. Database Optimization
5. Containerization

## Best Practices
- Use horizontal scaling
- Implement caching at multiple levels
- Design for failure
- Monitor performance metrics
- Automate deployment processes`,
    date: '2024-03-20'
  },
  {
    "id": "2",
    "title": "Mastering React for Modern Web Development",
    "excerpt": "A deep dive into building high-performance web applications using React and its ecosystem.",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    category: ['Project Management', 'Team Leadership', 'Full Stack Development'],
    "content": "# Mastering React for Modern Web Development\n\nReact is one of the most popular libraries for building dynamic user interfaces. This guide covers advanced concepts to help you master React.\n\n## Key Topics Covered\n1. Functional Components & Hooks\n2. State Management with Redux\n3. Performance Optimization\n4. Server-Side Rendering (SSR)\n5. Component Design Patterns\n\n## Best Practices\n- Use functional components and hooks\n- Optimize re-renders with React.memo\n- Implement code-splitting for faster loads\n- Follow a modular component structure",
    "date": "2024-04-10"
  },
  {
    "id": "3",
    "title": "Understanding Database Indexing",
    "excerpt": "A beginner-friendly guide to database indexing and its impact on query performance.",
    "image": "https://i.pinimg.com/736x/45/9c/f6/459cf6adaa78fe352edc2bf3a0292589.jpg",
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    category: ['Project Management', 'Team Leadership', 'Full Stack Development'],
    "content": "# Understanding Database Indexing\n\nDatabase indexing is a key performance optimization technique. This guide explains indexing strategies to improve query execution time.\n\n## Key Topics Covered\n1. What is Indexing?\n2. Types of Indexes\n3. How Indexing Improves Performance\n4. Best Practices for Using Indexes\n5. When Not to Use Indexes\n\n## Best Practices\n- Use indexes for frequently queried columns\n- Avoid excessive indexing to prevent overhead\n- Regularly analyze and optimize indexes\n- Consider composite indexes for multi-column queries",
    "date": "2024-05-05"
  },
  {
    "id": "4",
    "title": "Introduction to Cloud Computing",
    "excerpt": "An essential guide to understanding cloud computing and its various service models.",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    category: ['Project Management', 'Team Leadership', 'Full Stack Development'],
    "content": "# Introduction to Cloud Computing\n\nCloud computing is transforming the way businesses operate by providing scalable and flexible infrastructure. This guide covers the fundamentals of cloud computing.\n\n## Key Topics Covered\n1. What is Cloud Computing?\n2. Cloud Service Models (IaaS, PaaS, SaaS)\n3. Benefits of Cloud Computing\n4. Popular Cloud Providers\n5. Security in the Cloud\n\n## Best Practices\n- Choose the right cloud provider based on your needs\n- Implement strong security measures\n- Use auto-scaling for cost efficiency\n- Monitor cloud resources to optimize performance",
    "date": "2024-06-15"
  }

];