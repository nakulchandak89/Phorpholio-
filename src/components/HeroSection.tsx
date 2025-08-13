import { motion } from 'framer-motion';
import { ChevronDown} from 'lucide-react';
import ProfileCard from '../utils/ProfileCard';
import avatarImg from '../assets/Properf.png';
import Aurora from '../utils/Aurora';
import BlurText from '../utils/Blurtext';
import GooeyNav from '../utils/GooeyNav';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  // Handler for navigation
  const handleNavClick = (section: string) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "connect") {
      // Navigate to the Connect Me page
      navigate('/connect');
    }
  };

  // GooeyNav expects href, so we use javascript:void(0) to prevent any automatic scrolling
  const navItems = [
    { label: "Home", href: "javascript:void(0)", onClick: () => handleNavClick("home") },
    { label: "Find me", href: "javascript:void(0)", onClick: () => handleNavClick("connect") }
  ];

  useEffect(() => {
    // Very simple approach: just scroll to top on initial load with a slight delay
    // to ensure it happens after any browser's automatic scrolling
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* GooeyNav Bar */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 bg-transparent backdrop-blur-md rounded-full px-6 py-2">
        <GooeyNav
          items={navItems}
        />
      </div>
      {/* Aurora Effect at the top */}
      <div className="absolute top-0 left-0 w-full h-100 z-5 pointer-events-none">
        <Aurora blend={0.8} speed={0.8} amplitude={1.3} />
      </div>
      {/* Floating Grid Background */}
      <div className="absolute inset-0 floating-grid opacity-30"></div>
      {/* Aura Effect */}
      <div className="aura absolute inset-0"></div>
      {/* Main Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-0 text-left md:w-1/2"
        >
          {/* Name
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-6.5xl font-poppins font-black text-metallic mb-4"
          >
            Nakul Chandak
          </motion.h1> */}

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-4xl font-manrope font-bold text-gradient mb-3 py-4"
          >
           Hello World, 
          </motion.h2>

          {/* Subtext - First Paragraph */}
          <BlurText
            text="Hi, I'm a second-year B.Tech (CSE) student at Vishwakarma University with a passion for exploring technology and solving real-world problems using machine learning. I love building tools that genuinely help people and experimenting with AI to turn creative ideas into practical, working solutions. Curiosity fuels me. I'm always learning, refining my skills, and striving to write clean code, dig deep into data, and work on projects that matter."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg md:text-xl font-inter text-gray-300 leading-relaxed mb-4"
          />

          {/* Subtext - Second Paragraph (Roomielink) */}
          <BlurText
            text="I'm the founder of Roomielink, a platform designed to connect people with their ideal roommates — blending comfort, compatibility, and tech innovation. This venture reflects my drive to create meaningful impact through tech. Tech thrills me, and I believe in using it to build a better, smarter future."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-lg md:text-xl font-inter text-gray-300 leading-relaxed mb-8"
          />
        </motion.div>

        {/* Right Column - Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <ProfileCard
            name="Nakul A Chandak"
            title="ML Engineer"
            handle="nakulchandak89"
            status="Online"
            contactText="Contact Me"
            avatarUrl={avatarImg}
            //grainUrl = {icon2} // ye vo bich mai ati hai 
            //iconUrl = {icon2}
            className ={avatarImg}
            showUserInfo={true}
            showBehindGradient={true}
            enableTilt={true}
            onContactClick={() => window.open("https://www.instagram.com/nakul_chandak_/", "_blank")}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          // Scroll to next section with a "push" effect
          const nextSection = document.querySelector('#projects');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        whileTap={{ scale: 0.85 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-primary-400"
        >
          <span className="text-sm font-inter mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
};

export default HeroSection;
