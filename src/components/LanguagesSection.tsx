import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Star } from 'lucide-react';

const languages = [
  {
    name: "English",
    proficiency: "Conversational",
    level: 50,
    flag: "🇺🇸"
  },
  {
    name: "Hindi",
    proficiency: "Native",
    level: 100,
    flag: "🇮🇳"
  },
  {
    name: "Marathi",
    proficiency: "Native",
    level: 75,
    flag: "🇮🇳"
  },
  {
    name: "Marwadi",
    proficiency: "fluent",
    level: 100,
    flag: "🇮🇳"
  },
];

const LanguagesSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 floating-grid opacity-20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-bold text-metallic mb-6">
            Languages
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Multilingual communication enabling global collaboration and cultural understanding
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="glass-dark rounded-2xl p-6 transform-gpu relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-primary-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="text-3xl"
                    >
                      {language.flag}
                    </motion.div>
                    
                    <div>
                      <h3 className="text-xl font-poppins font-bold text-white group-hover:text-gradient transition-colors duration-300">
                        {language.name}
                      </h3>
                      <p className="text-primary-300 font-inter font-medium">
                        {language.proficiency}
                      </p>
                    </div>
                  </div>
                  
                  <Globe className="w-6 h-6 text-primary-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Proficiency Bar */}
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-inter text-gray-400">Proficiency</span>
                    <span className="text-sm font-inter text-primary-300 font-medium">{language.level}%</span>
                  </div>
                  
                  <div className="w-full bg-dark-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full relative"
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Stars for Native Languages */}
                {language.proficiency === "Native" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex justify-center mt-4 gap-1 relative z-10"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 1.2 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent transform rotate-45 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-700"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Communication Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="glass-dark rounded-2xl p-8 max-w-2xl mx-auto">
            <Globe className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <p className="text-gray-300 font-inter leading-relaxed">
              "Language is the bridge that connects cultures and ideas. My multilingual abilities enable me to 
              collaborate effectively in diverse environments and understand different perspectives in the global tech community."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;