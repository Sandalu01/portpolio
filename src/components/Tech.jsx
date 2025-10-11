import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
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
      
      <div className={`absolute top-20 left-20 w-64 h-64 ${styles.backgroundOrb} bg-white/5`} />
      <div className={`absolute bottom-32 right-16 w-48 h-48 ${styles.backgroundOrb} bg-white/5`} />
      
      {/* Header section */}
      <motion.div variants={textVariant()} className={styles.contentContainer}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-8`}>
          Tech Stack
          <span className="text-gray-400">.</span>
        </h2>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-px bg-white" />
        </div>
      </motion.div>

      {/* Technologies grid */}
      <motion.div 
        className='flex flex-row flex-wrap justify-center gap-5 relative z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
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

export default SectionWrapper(Tech, "");
