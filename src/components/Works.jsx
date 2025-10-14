import React, { memo } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import UnifiedCard from "./common/UnifiedCard";

// Memoized ProjectCard component using UnifiedCard
const ProjectCard = memo(({ index, ...project }) => {
  return (
    <UnifiedCard
      type="project"
      index={index}
      title={project.name}
      points={project.points}
      tags={project.tags}
      image={project.image}
      source_code_link={project.source_code_link}
    />
  );
});

ProjectCard.displayName = 'ProjectCard';

const Works = () => {
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
              backgroundSize: '50px 50px'
            }}
            className="w-full h-full"
          />
        </div>
        
        <div className={`absolute top-16 sm:top-20 left-1/4 w-48 h-48 sm:w-64 sm:h-64 ${styles.backgroundOrb} bg-white/5`} />
        <div className={`absolute bottom-16 sm:bottom-20 right-1/4 w-64 h-64 sm:w-80 sm:h-80 ${styles.backgroundOrb} bg-white/5`} />
        
        {/* Header section */}
        <motion.div variants={textVariant()} className={styles.contentContainer}>
          <p className={`${styles.sectionSubText} text-center`}>
            My work
          </p>
          <h2 className={`${styles.sectionHeadText} text-center mb-8`}>
            Projects
            <span className="text-gray-400">.</span>
          </h2>
          
          {/* Decorative line */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-px bg-white shadow-lg" />
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <div className="w-full flex relative z-10">
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-6 sm:mt-8"
          >
            <div className={`${styles.liquidGlass} ${styles.cardContent}`}>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-4xl leading-relaxed sm:leading-[28px] lg:leading-[32px] text-center sm:text-left">
                <span className="font-semibold text-white">Hi, I'm Sandalu Thushan Ekanayaka.</span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                The following projects showcase my skills and experience through real-world examples of my work.
                Each project is briefly described with links to code repositories and live demos.
                It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                I have also developed SwiftUI apps like a weather app.
              </p>
              
              {/* Corner accents */}
              <div className={`absolute top-4 right-4 w-8 h-8 ${styles.cornerAccent} border-t border-r`}></div>
              <div className={`absolute bottom-4 left-4 w-8 h-8 ${styles.cornerAccent} border-b border-l`}></div>
            </div>
          </motion.div>
        </div>

        {/* Projects grid */}
        <motion.div 
          className="mt-8 sm:mt-12 lg:mt-16 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {projects.map((project, index) => (
              <motion.div
                key={`project-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="w-full"
              >
                <ProjectCard index={index} {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom separator */}
        <div className="mt-8 sm:mt-12 lg:mt-16 w-full relative">
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

export default SectionWrapper(Works, "project");