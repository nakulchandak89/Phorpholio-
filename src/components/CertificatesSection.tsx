import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import cnn from "../assets/certificates/CNN.png";
import ibm1 from "../assets/certificates/ibm_skill2.jpg";
import ibm2 from "../assets/certificates/ibm_skill3.jpg";
import ibm3 from "../assets/certificates/IBM_skillbuild.jpg";
import pr1 from "../assets/certificates/pr1.jpg";
import pr2 from "../assets/certificates/pr2.jpg";
import cr1 from "../assets/certificates/cr1.jpg";
import cr2 from "../assets/certificates/cr2.jpg";
import cer3 from "../assets/certificates/WorkshopCertificates.png";
import spring from "../assets/certificates/springbord.png"
import ChromaGrid from '../utils/Chromagread';

const certificates = [
    {
        title: "Mastering Convolution Neural Network",
        issuer: "Udemy",
        year: "2024",
        image: cnn,
        verified: true
    },

    {
        title: "Getting Started with Artificial Intelligence",
        issuer: "IBM SkillBuild",
        year: "2025",
        image: ibm1,
        verified: true
    },
    {
        title: "Lab: Build an AI-Powered Document Retrieva System with IBM Granite and Docling",
        issuer: "IBM SkillBuild",
        year: "2025",
        image: ibm3,
        verified: true
    },
    {
        title: "Lab: Retrieval Augmented Generation with LangChain",
        issuer: "IBM SkillBuild",
        year: "2025",
        image: ibm2,
        verified: true
    },
    {
        title: "Project Display for Tender Summarizer",
        issuer: "PICT College Pune",
        year: "2024",
        image: pr1,
        verified: true
    },
    {
        title: "Project Display for Real-Time Shoplifting Detection",
        issuer: "PICT College Pune",
        year: "2024",
        image: pr2,
        verified: true
    },
    {
        title: "Attended Artificial Intelligence Workshops",
        issuer: "Visionary Club (VU)",
        year: "2024",
        image: cer3,
        verified: true
    },
    {
        title: "Understanding SEO",
        issuer: "White Board Labs",
        year: "2024",
        image: cr1,
        verified: true
    },
    {
        title: "Course on Mind Mapping",
        issuer: "White Board Labs",
        year: "2024",
        image: cr2,
        verified: true
    },
    {
        title: "Volunteer at infosys springbord on wheel",
        issuer: "Vishwakarma university",
        year: "2024",
        image: spring,
        verified: true
    },
];

const spotlightColors = [
    {borderColor: "#3B82F6", gradient: "linear-gradient(145deg, #3B82F6, #60A5FA)"}, // blue
    {borderColor: "#F59E42", gradient: "linear-gradient(145deg, #F59E42, #FDE68A)"}, // orange
    {borderColor: "#10B981", gradient: "linear-gradient(145deg, #10B981, #6EE7B7)"}, // green
    {borderColor: "#A78BFA", gradient: "linear-gradient(145deg, #A78BFA, #C4B5FD)"}, // purple
    {borderColor: "#F43F5E", gradient: "linear-gradient(145deg, #F43F5E, #FB7185)"}, // pink/red
    {borderColor: "#FBBF24", gradient: "linear-gradient(145deg, #FBBF24, #FDE68A)"}, // yellow
];

const chromaItems = certificates.map((cert, idx) => {
    const color = spotlightColors[idx % spotlightColors.length];
    return {
        image: cert.image,
        title: cert.title,
        subtitle: cert.issuer,
        handle: cert.year,
        borderColor: color.borderColor,
        gradient: color.gradient,
        url: "#"
    };
});

const CertificatesSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="py-20 px-4 relative overflow-hidden bg-transparent">
            {/* Optional: Soft background glow */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute w-[70%] h-[70%] bg-blue-400/10 blur-3xl rounded-full top-1/6 left-1/6"></div>
                <div
                    className="absolute w-[50%] h-[50%] bg-yellow-400/10 blur-2xl rounded-full bottom-1/4 right-1/6"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 1}}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-poppins font-bold text-metallic mb-6">
                        Certifications
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
                        Professional certifications validating expertise in machine learning, cloud computing, and
                        software development.
                    </p>
                </motion.div>

                {/* Spotlight ChromaGrid */}
                <div className="relative flex justify-center items-center h-[900px] md:h-[1110px]">
                    <ChromaGrid
                        items={chromaItems}
                        radius={450}
                        damping={0.50}
                        fadeOut={0.7}
                        ease="power3.out"
                    />
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;