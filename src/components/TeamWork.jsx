import React, { memo } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { teamworks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import UnifiedCard from "./common/UnifiedCard";

// Memoized TeamworkCard component using UnifiedCard
const TeamworkCard = memo(({ index, ...teamwork }) => {
  return (
    <UnifiedCard
      type="teamwork"
      index={index}
      title={teamwork.name}
      points={teamwork.points}
      tags={teamwork.tags}
      image={teamwork.image}
      source_code_link={teamwork.source_code_link}
      webpage={teamwork.webpage}
    />
  );
});

TeamworkCard.displayName = 'TeamworkCard';

const TeamWork = () => {
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
        
        <div className={`absolute top-20 left-1/4 w-64 h-64 ${styles.backgroundOrb} bg-white/5`} />
        <div className={`absolute bottom-20 right-1/4 w-80 h-80 ${styles.backgroundOrb} bg-white/5`} />
        
        {/* Header section */}
        <motion.div variants={textVariant()} className={styles.contentContainer}>
          <p className={`${styles.sectionSubText} text-center`}>
            Collaborative Projects
          </p>
          <h2 className={`${styles.sectionHeadText} text-center mb-8`}>
            Team Work
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
            className="mt-8"
          >
            <div className={`${styles.card} ${styles.cardContent}`}>
              <p className="text-gray-300 text-sm sm:text-base max-w-4xl leading-relaxed sm:leading-[32px] text-center sm:text-left">
                <span className="font-semibold text-white">Collaborative Development Experience</span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                The following projects showcase my experience working in teams to deliver complex solutions.
                These collaborative efforts demonstrate my ability to work effectively with other developers,
                contribute to shared codebases, and deliver production-ready applications.
                Each project represents successful teamwork and technical collaboration.
              </p>
              
              {/* Corner accents */}
              <div className={`absolute top-4 right-4 w-8 h-8 ${styles.cornerAccent} border-t border-r`}></div>
              <div className={`absolute bottom-4 left-4 w-8 h-8 ${styles.cornerAccent} border-b border-l`}></div>
            </div>
          </motion.div>
        </div>

        {/* Teamwork projects grid */}
        <motion.div 
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {teamworks.map((teamwork, index) => (
            <TeamworkCard key={`teamwork-${index}`} index={index} {...teamwork} />
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

export default SectionWrapper(TeamWork, "teamwork");