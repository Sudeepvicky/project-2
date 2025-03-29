import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, Home, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { format, lastDayOfDecade } from 'date-fns';
import { Tab } from '../types';
import { projects, experiences, tilEntries, blogPosts } from '../data';
import { col } from 'framer-motion/client';

interface RightSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
  selectedBlogId: string | null;
  setSelectedBlogId: (id: string | null) => void;
}

var latestBlog = false;
var latestTil  = false;

var totalBlog = 0;
var totalTil  = 0;




export default function RightSection({
  activeTab,
  setActiveTab,
  selectedProjectId,
  setSelectedProjectId,
  selectedBlogId,
  setSelectedBlogId
}: RightSectionProps) {
  const [latestBLOG, setLatestBLOG] = useState(false);
  const [latestTIL, setLatestTIL] = useState(false);
  const [totalTIL,setTotalTIL] = useState("");
  const [totalBLOG,setTotalBLOG] = useState("");
  
  useEffect(() => {
    setLatestBLOG(latestBlog);
    setLatestTIL(latestTil);
    setTotalBLOG(totalBlog.toString());
    setTotalTIL(totalTil.toString());  
  }, []); 
  // const [latestBlog, setLatestBlog] = useState(false); 
  // var latestBlog: Boolean = false;
  // const [selectedBlogId, setSelectedBlogId] = React.useState<string | null>(null);
  const tabs: Tab[] = ['projects', 'experience', 'til', 'blogs'];
  
  const renderHeader = () => (
        <div className="flex space-x-2 p-3 bg-white dark:bg-black rounded-tl-lg">
          {tabs.map((tab: string) => ( // Explicitly define tab as a string
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedProjectId(null);
                setSelectedBlogId(null); 
              }}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-lg flex items-center space-x-2 ${
                activeTab === tab
                  ? 'bg-gray-300 text-black dark:bg-white dark:text-black'
                  : 'text-gray-500 dark:text-gray-500 hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-700'
              }`}
            >
              {/* Tab Text */}
              <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span> 

              {tab === 'til' && latestTIL && ( 
                <div className="relative flex items-center">
                <span className="inline-flex h-[0.6rem] w-[0.6rem] sm:h-[0.7rem] sm:w-[0.7rem] md:h-[0.8rem] md:w-[0.8rem] lg:h-[0.9rem] lg:w-[0.9rem] animate-ping rounded-full bg-orange-400 opacity-75"></span>
                <span className="inline-flex h-[0.6rem] w-[0.6rem] sm:h-[0.7rem] sm:w-[0.7rem] md:h-[0.8rem] md:w-[0.8rem] lg:h-[0.9rem] lg:w-[0.9rem] rounded-full bg-orange-500 absolute text-black text-[6px] sm:text-[7px] md:text-[8px] font-bold flex items-center justify-center">
                {Number(totalTIL) > 18 ? '9+' : Math.floor(Number(totalTIL) / 2)}
                </span>
              </div>
              

              )}

              {tab === 'blogs' && latestBLOG &&( 
                <div className="relative flex items-center">
                <span className="inline-flex h-[0.6rem] w-[0.6rem] sm:h-[0.7rem] sm:w-[0.7rem] md:h-[0.8rem] md:w-[0.8rem] lg:h-[0.9rem] lg:w-[0.9rem] animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="inline-flex h-[0.6rem] w-[0.6rem] sm:h-[0.7rem] sm:w-[0.7rem] md:h-[0.8rem] md:w-[0.8rem] lg:h-[0.9rem] lg:w-[0.9rem] rounded-full bg-red-500 absolute text-black text-[6px] sm:text-[7px] md:text-[8px] font-bold flex items-center justify-center">
                {Number(totalBLOG) > 18 ? '9+' : Math.floor(Number(totalBLOG) / 2)}

                </span>
              </div>
              )}



            </button>
          ))}
        </div>



  );

  const renderContent = () => {
    if (selectedProjectId) {
      const project = projects.find(p => p.id === selectedProjectId);
      return (
        <div className="relative h-full">
          {/* Sticky "Back to Projects" Button */}
          <div className="sticky top-0 left-0 w-full bg-white dark:bg-black p-4">
            <button 
              onClick={() => setSelectedProjectId(null)}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black hover:bg-gray-300 rounded-full dark:hover:text-black dark:hover:bg-white p-2"
            >
              <ArrowLeft className="w-[11%] h-[11%] mr-2" />
              Back to Projects
            </button>
          </div>

          {/* Content Section */}
          <div className="mt-6 overflow-y-auto pl-6">
            <ReactMarkdown className="prose dark:prose-invert max-w-none dark:text-gray-300">
              {project?.fullDescription}
            </ReactMarkdown>
          </div>
        </div>

      );
    }

    if (selectedBlogId) {
      const blog = blogPosts.find(b => b.id === selectedBlogId);
      return (
<div className="relative min-h-screen">
  {/* Sticky "Back to Blogs" Button */}
  <div className="sticky top-0 left-0 w-full bg-white dark:bg-black p-4">
    <button 
      onClick={() => setSelectedBlogId(null)}
      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black hover:bg-gray-300 rounded-full dark:hover:text-black dark:hover:bg-white p-2"
    >
      <ArrowLeft className="w-[11%] h-[11%] mr-2" />
      Back to Blogs
    </button>
  </div>

  {/* Blog Content */}
  <div className="mt-6 pl-6">
    <ReactMarkdown className="prose dark:prose-invert max-w-none dark:text-gray-300">
      {blog?.content}
    </ReactMarkdown>
  </div>
</div>

      );
    }

   

    switch (activeTab) {
      case 'projects':
        
        // setLatestBLOG(latestBlog);
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {projects.map(project => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden cursor-pointer relative hover:border-black dark:hover:border-white"
                onClick={() => {
                  setSelectedProjectId(project.id);  // Set the selected project ID
                  setSelectedBlogId(null);  // Reset blog selection
                }}
                
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 pb-12"> {/* Added padding-bottom to avoid overlap */}
                  <h3 className="font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                </div>
                
                {/* Date and Icon placed at the bottom-right */}
                <div className="bg-gray-300 dark:bg-white-600 px-2 rounded text-black dark:text-black absolute bottom-4 right-4">
                  
                  <span className="flex items-center justify-center">
                    {/* <Calendar className="w-[7%] h-[7%] mr-1" /> */}
                    {format(new Date(project.startDate), 'MMM yy')} - {
                      project.endDate === 'Present' ? 'Present' : format(new Date(project.endDate), 'MMM yy')
                    }
                    {/* {project.isRemote ? (
                      <Home className="ml-1 w-[7%] h-[7%]" />
                    ) : (
                      <Building2 className="ml-1 w-[7%] h-[7%]" />
                    )}  */}
                  </span>
                </div>
              </motion.div>
            ))}


            {blogPosts.map(post => (
              <motion.div
                className="hidden"
              > 
                {(() => { 
                    const postDate = new Date(post.date);
                    const currentDate = new Date();
                    const threeDaysAgo = new Date();
                    threeDaysAgo.setDate(currentDate.getDate() - 8);
                    latestBlog = (postDate >= threeDaysAgo && postDate <= currentDate) || latestBlog;
                    if(postDate >= threeDaysAgo && postDate <= currentDate){
                      totalBlog += 1;
                    } 
                      
                    

                    return (postDate >= threeDaysAgo && postDate <= currentDate) ? (
                      <></>
                    ) : null;

                  })()}
              </motion.div>
            ))}


            {tilEntries.map(entry => (
                <motion.div
                  className="hidden"
                >
                    {(() => {
                    const postDate = new Date(entry.date);
                    const currentDate = new Date();
                    const threeDaysAgo = new Date();
                    threeDaysAgo.setDate(currentDate.getDate() - 8);
                    latestTil = (postDate >= threeDaysAgo && postDate <= currentDate) || latestTil;
                    if(postDate >= threeDaysAgo && postDate <= currentDate){
                        totalTil += 1;  
                    } 

                    return (postDate >= threeDaysAgo && postDate <= currentDate) ? (
                      <></>
                    ) : <></>;

                  })()}
                </motion.div>
              ))}
          </div>

        );

      case 'experience':
        return (
          <div className="p-6 space-y-6">
            {experiences.map(exp => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold dark:text-white">{exp.role} &nbsp; 
                    {exp.isRemote ? (
                        <p className='inline bg-gray-300 text-black px-1 rounded dark:text-black'>remote</p>
                      ) : (
                        <p className='inline bg-gray-300 text-black px-1 rounded dark:text-black'>Onsite</p>
                      )}
                    </h3>
                    <a className="text-gray-600 dark:text-gray-300" href={exp.url} target='_blank'>{exp.company}</a>
                  </div>
                  <div className="bg-gray-300 dark:bg-white-600 px-2 rounded dark:text-black  flex items-center justify-end text-black dark:text-black">
                    {/* <Calendar className="w-4 h-4 mr-1" /> */}
                    <span>
                      {format(new Date(exp.startDate), 'MMM yy')} - {
                        exp.endDate === 'Present' ? 'Present' : format(new Date(exp.endDate), 'MMM yy')
                      }
                    </span>
                      {/* {exp.isRemote ? (
                        <Home className="w-4 h-4 ml-1" />
                      ) : (
                        <Building2 className="w-4 h-4 ml-1" />
                      )} */}
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        );

      case 'til':
        return (
          <div className="p-6">
            <div className="relative">
              {tilEntries.map((entry, index) => (
                <motion.div
                  key={entry.id} 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }}
                  className="relative pl-8"
                >
                  
                {(() => {
                const postDate = new Date(entry.date);
                const currentDate = new Date();
                const threeDaysAgo = new Date();
                threeDaysAgo.setDate(currentDate.getDate() - 8);
                const orgDate = currentDate.getDate() - postDate.getDate()
                const color: Record<number, string> = { 
                  0: '500', 1: '500', 2: '500', 
                  3: '400', 4: '400', 5: '400', 
                  6: '300', 7: '300' 
                };
                latestTil = (postDate >= threeDaysAgo && postDate <= currentDate) || latestTil;  
                

                return (postDate >= threeDaysAgo && postDate <= currentDate) ? (

                  <div className="relative group pb-8 cursor">
                    {/* Vertical Line (Fixed Position) */}
                    <div className="absolute left-0 top-0 h-full w-px bg-gray-300 dark:bg-gray-700" />
                    
                    {/* Small Circle (Ping Effect on Hover) */}
                    <div className={`absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-green-${color[orgDate]} dark:bg-green-${color[orgDate]} group-hover:animate-ping  group-hover:bg-green-${color[orgDate]} group-hover:w-3 group-hover:h-3 group-hover:left-[-6px] `} />
                    <div className={`absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-green-${color[orgDate]} dark:bg-green-${color[orgDate]} group-hover:w-3 group-hover:h-3 group-hover:left-[-6px]  group-hover:bg-green-${color[orgDate]}  `}/>
                    
                    {/* <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-green-300 dark:bg-green-300 group-hover:animate-ping  group-hover:bg-green-300 group-hover:w-3 group-hover:h-3 group-hover:left-[-6px]" />
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-green-300 dark:bg-green-300 group-hover:w-3 group-hover:h-3 group-hover:left-[-6px]  group-hover:bg-green-300 "/> */}

                    <div className="relative group pl-6 cursor-pointer "> 
                    <p>
                      <p className='inline-block hidden group-hover:inline-block'>📆 &nbsp;</p> 
                      <span className={`bg-green-${color[orgDate]} dark:bg-white-600 px-2 rounded text-black dark:text-black`}>
                        {orgDate === 0 ? "Today" : `${orgDate} days ago`}
                      </span>
                      {/* <span className="bg-green-300 dark:bg-white-600 px-2 rounded text-black dark:text-black"> 
                        {orgDate === 0 ? "Today" : `${orgDate} days ago`}
                      </span> */}

                    </p>
                    <h3 className="font-semibold mt-1 dark:text-white">
                      {entry.title}</h3>
                    <div className="mt-2 text-gray-600 dark:text-gray-300">
                      {entry.description}
                    </div>
                  </div>
                </div>
                ) : 
                <div className="relative group pb-8 cursor">
                    {/* Vertical Line (Fixed Position) */}
                    <div className="absolute left-0 top-0 h-full w-px bg-gray-300 dark:bg-gray-700" />
                    
                    {/* Small Circle (Ping Effect on Hover) */}
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-gray-500 dark:bg-white group-hover:animate-ping  group-hover:bg-orange-300 group-hover:w-3 group-hover:h-3 group-hover:left-[-6px] " />
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-gray-500 dark:bg-white group-hover:w-3 group-hover:h-3 group-hover:left-[-6px]  group-hover:bg-orange-300"/>

                    <div className="relative group pl-6 cursor-pointer "> 
                    <p>
                      <p className='inline-block hidden group-hover:inline-block'>📆 &nbsp;</p> 
                      <span className="bg-gray-300 group-hover:bg-orange-300 dark:bg-white-600 px-2 rounded text-black dark:text-black" >
                        {format(new Date(entry.date), 'MMM dd, yyyy')}
                      </span>
                    </p>
                    <h3 className="font-semibold mt-1 dark:text-white">
                      {entry.title}</h3>
                    <div className="mt-2 text-gray-600 dark:text-gray-300">
                      {entry.description}
                    </div>
                  </div>
                </div>;

              })()}

                    {/* Hoverable Content (Separate from Above Elements) */}
                    

                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'blogs':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {blogPosts.map(post => (
              <motion.div
                key={post.id}
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden cursor-pointer relative hover:border-black dark:hover:border-white"
                onClick={() => {
                  setSelectedBlogId(post.id);  // Set the selected blog ID
                  setSelectedProjectId(null);  // Reset project selection
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 pb-12"> {/* Added padding-bottom to avoid overlap */}
                  <h3 className="font-semibold mb-2 dark:text-white relative">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                </div>
                <br />

                
                
                {/* Check if the date is within the last 3 days */}
                  {(() => {

                    // useEffect(() => {
                    //   const postDate = new Date(post.date);
                    //   const currentDate = new Date();
                    //   // Calculate three days ago (or any period, here 8 days subtracted as per your code)
                    //   const threeDaysAgo = new Date();
                    //   threeDaysAgo.setDate(currentDate.getDate() - 8);
                    //   // Determine if the post date is between threeDaysAgo and currentDate
                    //   const isLatest = postDate >= threeDaysAgo && postDate <= currentDate;
                    //   setLatestBLOG(isLatest); 
                    // }, [post.date]);


                    const postDate = new Date(post.date);
                    const currentDate = new Date();
                    const threeDaysAgo = new Date();
                    threeDaysAgo.setDate(currentDate.getDate() - 8);
                    const orgDate = currentDate.getDate() - postDate.getDate()
                    const color: Record<number, string> = { 
                      0: '500', 1: '500', 2: '500', 
                      3: '400', 4: '400', 5: '400', 
                      6: '300', 7: '300' 
                    };
                    latestBlog = (postDate >= threeDaysAgo && postDate <= currentDate) || latestBlog; 
                    // setLatestBLOG(latestBlog); 
                    // console.log('--------------> '+latestBLOG)  
                    

                    return (postDate >= threeDaysAgo && postDate <= currentDate) ? (
                      <p className={`bg-green-${color[orgDate]} dark:bg-white-600 px-3 rounded dark:text-black absolute bottom-4 right-4 text-black dark:text-black flex items-center space-x-2`}>
                        {/* <div className="relative flex items-center">
                          <span className="inline-flex h-[0.3rem] w-[0.3rem] sm:h-[0.4rem] sm:w-[0.4rem] md:h-[0.5rem] md:w-[0.5rem] lg:h-[0.6rem] lg:w-[0.6rem] animate-ping rounded-full bg-red-600 opacity-75"></span>
                          <span className="inline-flex h-[0.3rem] w-[0.3rem] sm:h-[0.4rem] sm:w-[0.4rem] md:h-[0.5rem] md:w-[0.5rem] lg:h-[0.6rem] lg:w-[0.6rem] rounded-full bg-red-600 absolute"></span>
                        </div> */}
                        <div>
                          {orgDate === 0 ? "Today" : `${orgDate} days ago`}
                        </div>
                      </p>
                    ) : 
                    <p className="bg-gray-300 dark:bg-white-600 px-3 rounded dark:text-black absolute bottom-4 right-4 text-black dark:text-black flex items-center space-x-2">
                        <div>
                          {format(new Date(post.date), 'MMM dd, yyyy')}
                        </div>
                    </p>;

                  })()}
              </motion.div>
            ))}
          </div>


        );
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Hide header when a project or blog is selected */}
      {!(selectedProjectId || selectedBlogId) && renderHeader()} 
  
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
  
}