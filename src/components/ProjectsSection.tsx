import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Atom, Shield, Star } from 'lucide-react';



// Categorization logic
const CATEGORY_MAP: Record<string, string> = {
  'AI': 'AI',
  'LSTM': 'AI',
  'NLP': 'AI',
  'YOLO v5': 'AI',
  'YOLO v11': 'AI',
  'tensorflow': 'AI',
  'Data Analytics': 'AI',
  'Open CV': 'AI',
  'Fast-API': 'Webdev',
  'FastAPI': 'Webdev',
  'React': 'Webdev',
  'express': 'Webdev',
  'NodeMailer': 'Webdev',
  'SQL': 'Webdev',
  'JWT': 'Webdev',
  'MERN': 'Webdev',
    'Streamlit': 'Webdev',
  'IOT': 'IOT',
  'Raspberry Pi': 'IOT',
};

function getCategory(techArr: string[]): string {
  if (techArr.some(t => CATEGORY_MAP[t] === 'AI')) return 'AI';
  if (techArr.some(t => CATEGORY_MAP[t] === 'Webdev')) return 'Webdev';
  if (techArr.some(t => CATEGORY_MAP[t] === 'IOT')) return 'IOT';
  return 'Other';
}

const categories = ['AI', 'Webdev', 'IOT'];

const iconMap: Record<string, React.ElementType> = {
  AI: Brain,
  Webdev: Atom,
  IOT: Shield,
  Other: Star,
};

const colorMap: Record<string, string> = {
  AI: 'from-[#0A6082]/75 to-[#0A6082]/ 85', // solid color for a background
  Webdev: 'from-[#2C0E37]/50 to-[#2C0E37]', // solid color for a background
  IOT: 'from-[#731300]/20 to-[#731300]/50', // will be overridden by inline style
  Other: 'from-gray-500 to-gray-700',
};

const projects = [
	{
		title: 'RFID-Based Attendance tracking',
		description:
			'I had contributed in the testing of hardware and also developed the Web interface Real Time Attendance tracking Dashboard Accurate footfall measurement and cloud density',
		tech: ['Typescript', 'Fast-API', 'Data Analytics', 'MERN'],
		image: "/project1.png",
	},
	{
		title: 'Finance Tracker AI Model',
		description:
			'AI-based personal finance manager that analyzes user income, expenses, and savings. Uses LSTM and NLP to provide personalized recommendations and budget summaries.',
		tech: ['Python', 'LSTM', 'NLP'],
		image: '/project2.png',
	},
	{
		title: 'Tender Summarizer',
		description:
			'Developed an NLP-based summarizer using LSTM to generate concise summaries of large tender PDFs.Extracts text and converts it into structured, abstract-style summaries for quick analysis.',
		tech: ['React', 'NLP', 'Python', 'Xgboost'],
		image: '/project3.png',
	},
  	{
		title: 'Real-Time Shoplifting Detection and Prevention',
		description:
			'Detects real-time shoplifting in retail stores using surveillance cameras.also in area where introgen is not allowedIntegrated YOLOv5 and LSTM models for object tracking and behavior analysis. ',
		tech: ['Python', 'Tensorflow', 'YOLO v5', 'LSTM'],
		image: '/project7.png',
	},
	{
		title: 'Roomielink Platform',
		description:
			'This Idea was founded by me myself MERN stack-based roommate matching web platform with AI Driven Swipe feature.Implemented smart matching algorithms using user preferences and lifestyle choices',
		tech: ['React', 'Express', 'SQL', 'JWT'],
		image: '/project4.png',
	},
  	{
		title: 'Casper English Academy Website',
		description:
			'To build a modern, interactive online presence for an English learning academy.Interactive MERN website for an academy with an inquiry form and responsive UI.',
		tech: ['React', 'Express', 'NodeMailer'],
		image: '/project5.png',
	},
  {
		title: 'Laptop Cover Replacement in Live Streem',
		description:
			'Replaces laptop back covers in live video using OpenCV and Homography, useful for brand integration To enable real-time ad placements by changing laptop covers in live video feeds.',
		tech: ['Open CV', 'Python', 'YOLO v11'],
		image: '/project6.png',
	},
    {
		title: 'OCR Reader',
		description:
			'An OCR reader using OpenCV in Python typically involves a combination of image processing techniques from OpenCV and a dedicated OCR engine like Tesseract. ',
		tech: ['Open CV', 'Python'],
		image: '/project8.png',
	},
     {
		title: 'Smart Local NAS System',
		description:
			'IntelliVault is a privacy-focused, smart file storage and management system tailored for educational institutions. It combines the security of localized storage on a Raspberry Pi-powered NAS with a modern MERN stack web interface. ',
		tech: ['IOT', 'MERN'],
		image: '/project8.png',
	},
  {
		title: 'Automatic water dispenser',
		description:
			'A touchless water dispensing system using an IR proximity sensor and Arduino to detect objects and automatically control a water pump or solenoid valve. Designed for hygiene and water efficiency, it starts dispensing when a container or hand is detected and stops instantly when removed. Compact, low-power, and ideal for homes, offices, and public spaces.',
		tech: ['IOT'],
		image: '/project8.png',
	},
    {
        title: 'Analytics Dashboard for Induction of FY 2025 ',
        description:
            'A real-time Streamlit dashboard to track attendance and collect feedback during first-year induction, featuring easy visualization and quick data analysis for organizers.',
        tech: ['Streamlit', 'Python', 'Pandas', 'Numpy'],
        image: '/project8.png',
    },
];

// Fix: explicitly type categorizedProjects as Record<string, any[]>
const categorizedProjects: Record<string, any[]> = {
  AI: [],
  Webdev: [],
  IOT: [],
};

projects.forEach(project => {
  // Ensure Smart Local NAS System and Automatic water dispencer are always in IOT
  if (
    project.title === 'Smart Local NAS System' ||
    project.title === 'Automatic water dispencer'
  ) {
    categorizedProjects['IOT'].push(project);
  } else if (project.title === 'OCR Reader') {
    // Add OCR Reader to both IOT and Webdev
    categorizedProjects['IOT'].push(project);
    categorizedProjects['Webdev'].push(project);
  } else if (project.title === 'Tender Summarizer') {
    // Add Tender Summarizer to AI, Webdev, and IOT
    categorizedProjects['AI'].push(project);
    categorizedProjects['Webdev'].push(project);
    categorizedProjects['IOT'].push(project);
  } else if (project.title === 'RFID-Based Attendance tracking') {
    // Add RFID-Based Attendance tracking to both Webdev and IOT
    categorizedProjects['Webdev'].push(project);
    categorizedProjects['IOT'].push(project);
  } else if (categorizedProjects[getCategory(project.tech)]) {
    categorizedProjects[getCategory(project.tech)].push(project);
  }
});

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('AI');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="projects">
      <div className="absolute inset-0 floating-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-bold text-metallic mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Selected work in AI, ML, Web Development, and IoT
          </p>
        </motion.div>
        {/* Category Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedProject(null);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-primary-700 text-white shadow-lg'
                  : 'bg-[#23294a] text-gray-300 hover:bg-primary-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Projects by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categorizedProjects[activeCategory].length === 0 && (
            <div className="text-center text-gray-400 text-xl py-12 col-span-full">
              No projects in this category yet.
            </div>
          )}
          {categorizedProjects[activeCategory].map((project, index) => {
            const Icon = iconMap[activeCategory] || Star;
            const isAI = activeCategory === 'AI';
            const isWebdev = activeCategory === 'Webdev';
            const isIOT = activeCategory === 'IOT';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.04, y: -8 }}
                onClick={() => setSelectedProject(project)}
                className={`relative cursor-pointer group bg-gradient-to-br ${colorMap[activeCategory]} rounded-xl p-6 border-2 transition-all duration-300 h-full shadow-lg`}
                style={
                  isAI
                    ? {
                        background: '#0A6082',
                        borderColor: '#DDFFF9',
                        boxShadow: '0 4px 24px 0 #68A49A33',
                        outline: '2px solid #68A49A',
                        outlineOffset: '2px'
                      }
                    : isWebdev
                    ? {
                        background: '#2C0E37',
                        borderColor: '#C4B5FD',
                        outline: '2px solid #C4B5FD',
                        outlineOffset: '2px'
                      }
                    : isIOT
                    ? {
                        background: 'rgba(115, 19, 0, 0.5)',
                        borderColor: 'rgba(255,218,209,0.7)',
                        outline: '2px solid rgba(255,218,209,0.7)',
                        outlineOffset: '2px'
                      }
                    : undefined
                }
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono text-white font-bold">
                      {project.tech[0]}
                    </div>
                    <div className="text-xs text-gray-200 font-mono">
                      {project.tech.slice(1).join(', ')}
                    </div>
                  </div>
                </div>
                <h3 className="font-poppins text-xl font-bold text-white group-hover:text-primary-200 transition-colors mb-3 break-words">
                  {project.title}
                </h3>
                <p className="font-mono text-sm text-white/80 mb-4 break-words">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, techIdx: React.Key | null | undefined) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Click hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 rounded-xl">
                  <span className="font-mono text-sm text-primary-200">
                    Click for details
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Detailed view */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative bg-[#181926] rounded-2xl overflow-hidden border-2 border-primary-400/30 shadow-xl">
                <div className="relative w-full h-auto p-8">
                  <div className="flex items-start gap-6 h-full">
                    <div className="p-4 bg-primary-700/20 rounded-xl">
                      {React.createElement(iconMap[activeCategory] || Star, { className: "w-12 h-12 text-primary-400" })}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="font-poppins text-3xl font-bold text-white">
                          {selectedProject.title}
                        </h3>
                        <span className="px-4 py-2 bg-primary-700/20 text-primary-300 rounded-full text-sm font-mono">
                          {selectedProject.tech.join(', ')}
                        </span>
                      </div>
                      <p className="font-mono text-lg text-gray-300 mb-6 leading-relaxed">
                        {selectedProject.description}
                      </p>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="self-center px-6 py-3 bg-primary-700/20 text-primary-300 rounded-lg hover:bg-primary-700/30 transition-all duration-300 font-mono"
                      >
                        Back to Projects
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
