import { motion } from 'framer-motion';
import {
  SiPython, SiTensorflow, SiPytorch, SiReact, SiNodedotjs,
  SiPostgresql, SiGit, SiJavascript, SiTypescript, SiC, SiCplusplus,
  SiMicrosoftexcel, SiRaspberrypi, SiArduino, SiPandas, SiNumpy, SiStreamlit
} from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';
import { GiArtificialIntelligence, GiProcessor } from 'react-icons/gi';
import { TbChartBar, TbChartDots } from 'react-icons/tb'; // For Matplotlib & Seaborn
import TrueFocus from '../utils/TrueFocus';
import { useRef, useState, useEffect } from 'react';

// Ordered for impact: Core ML/AI → Data Science Tools → Programming → Backend → Hardware
const skills = [
  // ML & AI Core
  { name: 'Python', icon: SiPython, color: '#3776ab', proficiency: 95 },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00', proficiency: 50 },
  { name: 'PyTorch', icon: SiPytorch, color: '#ee4c2c', proficiency: 50 },
  { name: 'CNN', icon: FaBrain, color: '#8e44ad', proficiency: 78 },
  { name: 'RNN', icon: GiArtificialIntelligence, color: '#16a085', proficiency: 65 },
  { name: 'LSTM', icon: GiArtificialIntelligence, color: '#2980b9', proficiency: 65 },
  { name: 'NLP', icon: GiArtificialIntelligence, color: '#e67e22', proficiency: 80 },
  { name: 'Random Forest', icon: GiArtificialIntelligence, color: '#27ae60', proficiency: 85 },

  // Data Science & Visualization
  { name: 'NumPy', icon: SiNumpy, color: '#013243', proficiency: 90 },
  { name: 'Pandas', icon: SiPandas, color: '#150458', proficiency: 88 },
  { name: 'Matplotlib', icon: TbChartBar, color: '#d35400', proficiency: 85 },
  { name: 'Seaborn', icon: TbChartDots, color: '#2c3e50', proficiency: 82 },

  // Frontend & Backend
  { name: 'React', icon: SiReact, color: '#61dafb', proficiency: 90 },
  { name: 'Streamlit App', icon: SiStreamlit, color: '#FF4B4B', proficiency: 88 },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', proficiency: 85 },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', proficiency: 92 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', proficiency: 88 },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', proficiency: 82 },
  { name: 'Git', icon: SiGit, color: '#f05032', proficiency: 90 },

  // Low-level Programming & Tools
  { name: 'C', icon: SiC, color: '#A8B9CC', proficiency: 85 },
  { name: 'C++', icon: SiCplusplus, color: '#00599C', proficiency: 80 },
  { name: 'Excel', icon: SiMicrosoftexcel, color: '#217346', proficiency: 75 },

  // Hardware & IoT
  { name: 'Arduino', icon: SiArduino, color: '#00979D', proficiency: 75 },
  { name: 'Raspberry Pi', icon: SiRaspberrypi, color: '#C51A4A', proficiency: 78 },
  { name: 'Edge Computing', icon: GiProcessor, color: '#b5651d', proficiency: 70 },
];

// YouTube-style progress bar component
const ProgressBar = ({ proficiency, color }: { proficiency: number, color: string }) => {
  return (
      <motion.div
          className="w-full h-3 bg-gray-800 rounded-full mt-2 overflow-hidden"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5 }}
      >
        <motion.div
            className="h-full rounded-full relative"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 8px ${color}80`
            }}
            initial={{ width: 0 }}
            animate={{
              width: `${proficiency}%`,
              boxShadow: [
                `0 0 5px ${color}50`,
                `0 0 10px ${color}80`,
                `0 0 5px ${color}50`
              ]
            }}
            transition={{
              width: {
                duration: 1.2,
                ease: "easeOut",
                delay: 0.2
              },
              boxShadow: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
        >
          {/* Animated shine effect */}
          <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: "easeInOut"
              }}
          />
        </motion.div>
      </motion.div>
  );
};

const SkillsSection = () => {
  const [showTrueFocus, setShowTrueFocus] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;
      const rect = headingRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setShowTrueFocus(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once in case already in view
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSkillClick = (skillName: string) => {
    if (selectedSkill === skillName) {
      setSelectedSkill(null); // Toggle off if already selected
    } else {
      setSelectedSkill(skillName); // Select the clicked skill
    }
  };

  return (
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 floating-grid opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
          >
            <div
                ref={headingRef}
                className="text-5xl md:text-6x1 font-poppins font-bold text - metallic mb-6"
            >
              {showTrueFocus && (
                  <TrueFocus
                      sentence="Technical Skillset"
                      manualMode={false}
                      blurAmount={5}
                      borderColor="orange"
                      animationDuration={2}
                      pauseBetweenAnimations={1}

                  />
              )}
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter mb-4">
              Proficient in cutting-edge technologies for machine learning, web development, and cloud computing
            </p>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-sm text-primary-300 max-w-3xl mx-auto font-inter italic"
            >
              Click on any skill to see proficiency level
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => handleSkillClick(skill.name)}
                    className={`group relative cursor-pointer ${selectedSkill === skill.name ? 'ring-2 ring-offset-2 ring-offset-dark-950' : ''}`}
                    style={{
                      ringColor: selectedSkill === skill.name ? skill.color : 'transparent',
                      boxShadow: selectedSkill === skill.name ? `0 0 15px ${skill.color}50` : 'none'
                    }}
                >
                  <div className={`glass-dark rounded-2xl p-6 text-center transform-gpu relative overflow-hidden transition-all duration-300 ${selectedSkill === skill.name ? 'pb-10' : ''}`}>
                    {/* Glow Effect */}
                    <div
                        className={`absolute inset-0 transition-opacity duration-300 rounded-2xl blur-xl ${selectedSkill === skill.name ? 'opacity-30' : 'opacity-0 group-hover:opacity-20'}`}
                        style={{ backgroundColor: skill.color }}
                    ></div>

                    {/* Icon Container */}
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 mb-4 flex justify-center"
                    >
                      <div
                          className={`p-4 rounded-xl transition-all duration-300 ${selectedSkill === skill.name ? 'shadow-lg shadow-' + skill.color + '40' : 'group-hover:shadow-lg'}`}
                          style={{
                            backgroundColor: `${skill.color}20`,
                            borderColor: `${skill.color}40`,
                            borderWidth: '1px'
                          }}
                      >
                        <skill.icon
                            className="w-8 h-8 transition-colors duration-300"
                            style={{ color: skill.color }}
                        />
                      </div>
                    </motion.div>

                    {/* Skill Name */}
                    <h3 className={`font-manrope font-semibold transition-colors duration-300 relative z-10 ${selectedSkill === skill.name ? 'text-gradient' : 'text-white group-hover:text-gradient'}`}>
                      {skill.name}
                    </h3>

                    {/* Proficiency Display - Only shown when selected */}
                    {selectedSkill === skill.name && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 relative z-10"
                        >
                          <div className="flex justify-between items-center text-xs mb-1">
                            <span className="text-gray-400">Proficiency</span>
                            <motion.span
                                className="font-bold px-2 py-0.5 rounded-md"
                                style={{
                                  backgroundColor: `${skill.color}30`,
                                  color: skill.color
                                }}
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                              {skill.proficiency}%
                            </motion.span>
                          </div>
                          <ProgressBar proficiency={skill.proficiency} color={skill.color} />
                        </motion.div>
                    )}

                    {/* Metallic Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent transform rotate-45 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-700"></div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>

          {/* Floating Skill Categories */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {['Machine Learning', 'Web Development', 'Cloud Computing', 'DevOps'].map((category) => (
                <motion.div
                    key={category}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="px-6 py-3 glass-dark rounded-full text-primary-300 font-inter font-medium border border-primary-500/30"
                >
                  {category}
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default SkillsSection;
