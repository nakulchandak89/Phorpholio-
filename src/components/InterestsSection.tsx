// import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Home, Gem } from 'lucide-react';

const interests = [
{
name: "Exploring Tech",
icon: Code,
description: "Always curious about emerging technologies and innovations",
gradient: "from-blue-500 to-cyan-500"
},
{
name: "Cricket",
icon: Gem,
description: "Passionate about cricket and strategic gameplay",
gradient: "from-green-500 to-emerald-500"
},
{
name: "Home Science",
icon: Home,
description: "Interest in sustainable living and home automation",
gradient: "from-orange-500 to-red-500"
},
{
name: "Exploring Electronics",
icon: Zap,
description: "Fascinated by electronics and hardware innovations",
gradient: "from-purple-500 to-pink-500"
}
];

const InterestsSection = () => {
return (
<section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] to-black">
<div className="max-w-6xl mx-auto relative z-10">
{/* Heading */}
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
className="text-center mb-16"
>
<h2 className="text-5xl md:text-6xl font-poppins font-bold text-metallic mb-6">
Interests & Hobbies
</h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
Beyond coding and algorithms, here's what fuels my creativity and curiosity.
</p>
</motion.div>
    {/* Interest Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {interests.map((interest, index) => (
        <motion.div
          key={interest.name}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          whileHover={{ scale: 1.05, y: -10 }}
          className="group relative"
        >
          <div className="glass-dark rounded-2xl p-6 text-center relative overflow-hidden h-full">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-10 rounded-2xl`} />
            {/* Icon */}
            <div className={`p-6 rounded-xl bg-gradient-to-br ${interest.gradient} bg-opacity-20 border border-white/10 mx-auto w-fit mb-4`}>
              <interest.icon className="w-8 h-8 text-white" />
            </div>
            {/* Title & Description */}
            <h3 className="text-xl font-bold text-white mb-2">{interest.name}</h3>
            <p className="text-sm text-gray-300 font-inter">{interest.description}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Tags */}
    <div className="flex flex-wrap justify-center gap-3 mt-12">
      {["AI", "IoT", "Robotics"].map((tag, idx) => (
        <span
          key={idx}
          className="px-4 py-2 bg-white/5 border border-white/10 text-primary-300 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
</section>
);
};

export default InterestsSection;