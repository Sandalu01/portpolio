import React, { memo, useMemo, useCallback } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Memoized ServiceCard component with consistent design
const ServiceCard = memo(({ index, title, icon }) => {
  // Memoize animation variants to prevent recalculation
  const cardVariants = useMemo(() => 
    fadeIn("right", "spring", index * 0.2, 0.75), [index]
  );

  // Memoize tilt options for consistent interaction
  const tiltOptions = useMemo(() => ({
    max: 25,
    scale: 1.05,
    speed: 400,
    glare: true,
    "max-glare": 0.1,
  }), []);

  return (
    <motion.div
      variants={cardVariants}
      className="w-full max-w-[280px] sm:max-w-[320px] mx-auto group cursor-pointer"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Tilt options={tiltOptions} className="relative h-full">
        {/* Main card container */}
        <div className={`${styles.card} h-full min-h-[320px] group-hover:shadow-white/10 transition-all duration-300`}>
          
          {/* Content container */}
          <div className="relative p-8 h-full flex flex-col justify-center items-center text-center">
            
            {/* Number badge */}
            <div className="absolute top-6 right-6">
              <div className="relative bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg group-hover:bg-gray-100 transition-colors duration-300">
                <span className="relative z-10">0{index + 1}</span>
              </div>
            </div>

            {/* Icon container */}
            <div className="relative mb-8 group/icon">
              <motion.div 
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg flex items-center justify-center group-hover:bg-white/15 group-hover:border-white/50 transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={icon}
                  alt={`${title} service`}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-300"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Title */}
            <motion.h3 
              className="text-white font-bold text-xl sm:text-2xl text-center leading-tight mb-4 group-hover:text-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>

            {/* Accent line */}
            <div className="w-16 h-px bg-white/40 group-hover:w-24 group-hover:bg-white/60 transition-all duration-300"></div>

            {/* Corner accents */}
            <div className={`absolute top-4 left-4 w-6 h-6 ${styles.cornerAccent} border-t-2 border-l-2 group-hover:border-white/40 transition-colors duration-300`}></div>
            <div className={`absolute bottom-4 right-4 w-6 h-6 ${styles.cornerAccent} border-b-2 border-r-2 group-hover:border-white/40 transition-colors duration-300`}></div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const About = () => {
  return (
    <div className={`relative ${styles.sectionPadding} ${styles.container}`}>
      {/* Background decorative elements */}
      <div className={styles.backgroundGrid}>
        <div 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          className="w-full h-full"
        />
      </div>
      
      <div className={`absolute top-20 right-20 w-64 h-64 ${styles.backgroundOrb} bg-white/5`} />
      <div className={`absolute bottom-32 left-16 w-48 h-48 ${styles.backgroundOrb} bg-white/5`} />
      
      {/* Header section */}
      <motion.div variants={textVariant()} className={styles.contentContainer}>
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>
          Overview
          <span className="text-gray-400">.</span>
        </h2>
        <div className="flex justify-center sm:justify-start mt-4">
          <div className="w-24 h-px bg-white" />
        </div>
      </motion.div>

      {/* Description container */}
      <div className="w-full flex relative z-10">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-8"
        >
          <div className={`${styles.card} ${styles.cardContent}`}>
            {/* Border accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-5xl leading-relaxed sm:leading-[36px] text-center sm:text-left">
              I am{" "}
              <span className="text-white font-medium bg-white/5 px-2 py-1 rounded">
                Sandalu Thushan Ekanayaka
              </span>
              , a dedicated and innovative undergraduate pursuing a Bachelor of Information and Communication Technology (Hons), specializing in Software Technology at the Faculty of Technology, University of Sri Jayewardenepura.
              <br /><br />
              <span className="text-white/90">
                Passionate about building user-friendly React.js applications and developing secure, scalable backend systems using Node.js and Express.js, I am driven to deliver impactful tech solutions.
              </span>
              <br /><br />
              With expertise in modern web development, SwiftUI, and project management, I bring a creative and problem-solving mindset to every task. I thrive in collaborative environments and enjoy applying cutting-edge technologies to real-world challenges.
            </p>
            
            {/* Corner accents */}
            <div className={`absolute top-4 right-4 w-8 h-8 ${styles.cornerAccent} border-t border-r`}></div>
            <div className={`absolute bottom-4 left-4 w-8 h-8 ${styles.cornerAccent} border-b border-l`}></div>
          </div>
        </motion.div>
      </div>

      {/* Services grid */}
      <motion.div 
        className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 relative z-10 justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {services?.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>

      {/* Bottom separator */}
      <div className="mt-16 sm:mt-20 w-full relative">
        <div className={styles.accentLine} />
        <div className="mt-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Center accent */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");