import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassIcons from '../utils/GlassIcons';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const glassItems = [
  { icon: <FiGithub />, color: 'blue', label: 'GitHub', link: 'https://github.com/nakulchandak89' },
  { icon: <FiLinkedin />, color: 'indigo', label: 'LinkedIn', link: 'https://www.linkedin.com/in/nakul-chandak-7280151b8' },
  { icon: <FiInstagram />, color: 'purple', label: 'Instagram', link: 'https://www.instagram.com/nakul_chandak_/' },
];

export default function ContactSection() {
  return (
    <div id="contact-terminal" className="py-20">
      <style>
        {`
          .text-neon { color: #00ff99; }
          .bg-neon { background-color: #00ff99; }
          .text-plasma { color: #ff00ff; }
          .bg-plasma { background-color: #ff00ff; }
          .bg-void { background-color: #0d0d0d; }
          .bg-dark-gray { background-color: #1a1a1a; }
          .text-glitch { color: #ff0000; }
          .bg-glitch { background-color: #ff0000; }
          .text-terminal { color: #00ff99; }
          .bg-light-gray { background-color: #2a2a2a; }
        `}
      </style>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Terminal className="w-8 h-8 text-neon animate-pulse" />
            <h2 className="font-pixel text-4xl md:text-5xl font-bold text-metallic mb-6">
              Get In Touch
            </h2>
            <Terminal className="w-8 h-8 text-neon animate-pulse" />
          </div>
          <p className="font-mono text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Connect with me through my interactive terminal or social media
          </p>
        </motion.div>

        {/* Terminal Link Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ boxShadow: "0 0 20px rgba(0, 255, 153, 0.5)" }}
          transition={{ duration: 0.6 }}
          className="bg-void border-2 border-neon/30 rounded-xl overflow-hidden shadow-2xl mb-12"
        >
          <Link to="/connect" className="block p-8 text-center">
            <Terminal className="w-16 h-16 text-neon mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Interactive Terminal</h3>
            <p className="text-gray-300 mb-4">
              Use my interactive terminal to send me a message directly
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-neon text-void rounded-full hover:bg-plasma hover:text-white transition-all duration-300 font-mono font-bold">
              <span>Open Terminal</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>

        {/* Social Media Links as Glass Icons */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white text-center mb-6">Or connect with me on social media</h3>
          <div className="flex justify-center">
            <GlassIcons
              items={glassItems.map(item => ({
                ...item,
                onClick: () => window.open(item.link, '_blank')
              }))}
              className="gap-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
