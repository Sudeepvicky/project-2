import React from 'react';
import { Calendar, File, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { projects, blogPosts } from '../data';  // Import blogs
import profileImage from "../assets/Profile.png";


interface LeftSectionProps {
  selectedProjectId: string | null;
  selectedBlogId: string | null;
}

export default function LeftSection({ selectedProjectId, selectedBlogId }: LeftSectionProps) {
  const project = selectedProjectId ? projects.find(p => p.id === selectedProjectId) : null;
  const blog = selectedBlogId ? blogPosts.find(b => b.id === selectedBlogId) : null;


  return (
    <div className="h-full p-8 space-y-8">
      {selectedProjectId ? (
        // Show project details
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6 dark:text-gray-300"
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h1 className="font-bold dark:text-white">{project.title}</h1>

          <div>
            <h2 className="font-semibold mb-2 dark:text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2 dark:text-white">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full ">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 px-4 py-2 rounded-full text-black inline-flex items-center space-x-2 text-black hover:text-white hover:bg-black dark:text-black dark:hover:text-white"
          >
            <Github className="w-[11%] h-[11%]" />
            <span>View on GitHub</span>
          </a>
        </motion.div>
      ) : selectedBlogId ? (
        // Show blog details
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6 dark:text-gray-300"
        >
          <img
            src={blog?.image}
            alt={blog?.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="font-bold dark:text-white">{blog?.title}</h2>


          <div>
            <h2 className="font-semibold mb-2 dark:text-white">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {blog?.tags.map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2 dark:text-white">Category</h2>
            <div className="flex flex-wrap gap-2">
              {blog?.category.map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full ">
                  {skill}
                </span>
              ))}
            </div>
          </div>



          <div>
            <h2 className="font-semibold mb-2 dark:text-white">Published Date : <p className="inline">
             &nbsp; 📅 &nbsp; {format(new Date(blog.date), 'MMMM dd, yyyy')}
            </p></h2> 
          </div>
          
        </motion.div>
      ) : (
        // Show default profile when nothing is selected
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-[10.5rem] h-[10.5rem] rounded-full mx-auto md:w-[17.5rem] md:h-[17.5rem]"
            />

            <h1 className="text-2xl font-bold text-center dark:text-white">Battu Sudeep</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Full Stack Developer & AI Enthusiast
            </p>
          </motion.div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold dark:text-white">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Passionate developer with expertise in building scalable web applications
              and integrating AI solutions. Always learning and sharing knowledge
              with the community.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold dark:text-white">Connect</h2>

            <div className="flex space-x-4 justify-center">
              <a
                href="../assets/Battu Sudeep_1.pdf"
                download="Resume.pdf"
                className="text-gray-500 dark:text-gray-300 dark:hover:text-gray-500"
              >
                <File />
              </a>
              <a
                href="https://github.com/Sudeepvicky"
                target="_blank"
                className="text-black dark:text-gray-300 dark:hover:text-black"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/battu-sudeep/"
                target="_blank"
                className="text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:battusudeep33@gmail.com"
                target="_blank"
                className="text-red-600 dark:text-gray-300 dark:hover:text-red-600"
              >
                <Mail />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
