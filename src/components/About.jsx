import React, { memo } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import UnifiedCard from "./common/UnifiedCard";

// Memoized ServiceCard component using UnifiedCard
const ServiceCard = memo(({ index, ...service }) => {
  return (
    <UnifiedCard
      type="service"
      index={index}
      title={service.title}
      icon={service.icon}
    />
  );
});

ServiceCard.displayName = 'ServiceCard';

const About = () => {
  return (
    <>
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
        
        <div className={`absolute top-20 left-1/4 w-48 h-48 sm:w-72 sm:h-72 ${styles.backgroundOrb} bg-white/5`} />
        <div className={`absolute bottom-20 right-1/4 w-64 h-64 sm:w-96 sm:h-96 ${styles.backgroundOrb} bg-white/5`} />
        
        {/* Header section */}
        <motion.div variants={textVariant()} className={styles.contentContainer}>
          <p className={`${styles.sectionSubText} text-center`}>
            Introduction
          </p>
          <h2 className={`${styles.sectionHeadText} text-center mb-8`}>
            Overview
            <span className="text-gray-400">.</span>
          </h2>
          
          {/* Decorative line */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-28 h-px bg-white shadow-lg" />
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <div className="w-full flex relative z-10">
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-8"
          >
            <div className={`${styles.liquidGlass} ${styles.cardContent}`}>
              <p className="text-gray-300 text-sm sm:text-base max-w-4xl leading-relaxed sm:leading-[32px] text-center sm:text-left">
                <span className="font-semibold text-white">I'm a skilled software developer</span>
                <span className="sm:hidden"> </span>
                <br className="hidden sm:block" />
                with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and SwiftUI.
                I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
                Let's work together to bring your ideas to life!
              </p>
              
              {/* Corner accents */}
              <div className={`absolute top-4 right-4 w-8 h-8 ${styles.cornerAccent} border-t border-r`}></div>
              <div className={`absolute bottom-4 left-4 w-8 h-8 ${styles.cornerAccent} border-b border-l`}></div>
            </div>
          </motion.div>
        </div>

        {/* Services grid */}
        <motion.div 
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={`service-${index}`} index={index} {...service} />
          ))}
        </motion.div>

        {/* Bottom separator */}
        <div className="mt-12 sm:mt-16 w-full relative">
          <div className={styles.accentLine} />
          <div className="mt-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="mt-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {/* Center accent */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");