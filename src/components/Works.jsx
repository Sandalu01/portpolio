import React, { memo, useMemo } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

// Memoized ProjectCard component with consistent design
const ProjectCard = memo(({
  index,
  name,
  points,
  tags,
  image,
  source_code_link,
}) => {
  // Memoize animation variants to prevent recalculation
  const cardVariants = useMemo(() => 
    fadeIn("up", "spring", index * 0.5, 0.75), [index]
  );

  // Memoize tilt options
  const tiltOptions = useMemo(() => ({
    max: 45,
    scale: 1.05,
    speed: 450,
  }), []);

  return (
    <motion.div
      variants={cardVariants}
      className="w-full max-w-[400px] mx-auto group"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Tilt options={tiltOptions} className="relative h-full">
        {/* Card container */}
        <div className={`${styles.card} h-full flex flex-col overflow-hidden`}>
          
          {/* Image Container */}
          <div className="relative w-full h-48 sm:h-52 md:h-60 overflow-hidden rounded-t-2xl flex-shrink-0">
            <img
              src={image}
              alt={`${name} project`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* GitHub button */}
            <div className="absolute top-3 right-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-black/80 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:shadow-white/20 transition-all duration-300 border border-white/20"
                aria-label={`View ${name} source code`}
              >
                <img
                  src={github}
                  alt=""
                  className="w-1/2 h-1/2 object-contain filter brightness-0 invert"
                />
              </motion.button>
            </div>

            {/* Project index */}
            <div className="absolute top-3 left-3">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-full border border-white/20 px-2 py-1">
                <span className="text-white text-xs font-medium">
                  0{index + 1}
                </span>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className={`${styles.cardContent} flex-1 flex flex-col`}>
            <motion.h3 
              className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 group-hover:text-gray-100 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              {name}
            </motion.h3>
            
            {/* Points */}
            <ul className="space-y-2 sm:space-y-3 flex-1">
              {points.slice(0, 3).map((point, idx) => (
                <motion.li
                  key={`point-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="text-gray-300 text-sm leading-relaxed flex items-start gap-2 sm:gap-3 group-hover:text-white transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                  <span className="line-clamp-2">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Tags */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
              {tags.slice(0, 4).map((tag, tagIndex) => (
                <motion.span
                  key={`${name}-${tag.name}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * tagIndex }}
                  whileHover={{ scale: 1.05 }}
                  className={`text-xs px-2 py-1 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm border border-white/10 ${tag.color} bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default`}
                >
                  #{tag.name}
                </motion.span>
              ))}
              {tags.length > 4 && (
                <span className="text-xs px-2 py-1 rounded-full backdrop-blur-sm border border-white/10 text-gray-400 bg-white/5">
                  +{tags.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Corner accents */}
          <div className={`absolute top-4 right-4 w-6 h-6 ${styles.cornerAccent} border-t-2 border-r-2 group-hover:border-white/40 transition-colors duration-300`}></div>
          <div className={`absolute bottom-4 left-4 w-6 h-6 ${styles.cornerAccent} border-b-2 border-l-2 group-hover:border-white/40 transition-colors duration-300`}></div>
        </div>
      </Tilt>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Works = () => {
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
      
      <div className={`absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 ${styles.backgroundOrb} bg-white/5`} />
      <div className={`absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 ${styles.backgroundOrb} bg-white/5`} />
      
      {/* Header section */}
      <motion.div variants={textVariant()} className={styles.contentContainer}>
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>
          Personal Projects
          <span className="text-gray-400">.</span>
        </h2>
        <div className="flex justify-center sm:justify-start mt-4">
          <div className="w-24 h-px bg-white" />
        </div>
      </motion.div>

      {/* Description */}
      <div className="w-full flex relative z-10">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-8"
        >
          <div className={`${styles.card} ${styles.cardContent}`}>
            <p className="text-gray-300 text-sm sm:text-base max-w-4xl leading-relaxed sm:leading-[32px] text-center sm:text-left">
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
        className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>

      {/* Bottom separator */}
      <div className="mt-12 sm:mt-16 w-full relative">
        <div className={styles.accentLine} />
        <div className="mt-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Center accent */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "project");