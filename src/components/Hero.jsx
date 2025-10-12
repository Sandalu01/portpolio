
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto ${styles.container}`}>
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

      {/* Main content */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 ${styles.contentContainer}`}>
        {/* Vertical indicator line */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className={`w-5 h-5 rounded-full ${styles.liquidGlassCard}`} />
          <div className={`w-1 sm:h-80 h-40 ${styles.liquidGlassCard}`} />
        </div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${styles.liquidGlassCard} p-6 sm:p-8 lg:p-10`}
        >
          <h1 className={`font-black text-white lg:text-[50px] sm:text-[40px] xs:text-[30px] text-[25px] lg:leading-[60px] mt-2`}>
            Hi, I'm <span className='text-white font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Sandalu</span>
          </h1>
          <p className={`text-gray-300 font-medium lg:text-[18px] sm:text-[16px] xs:text-[14px] text-[12px] lg:leading-[26px] mt-4 leading-relaxed`}>
            I am a passionate developer with a focus on building efficient web applications. 
            I specialize in frontend development using React, creating interactive and user-friendly interfaces, 
            and backend development with Node.js and Express.js for building scalable, reliable server-side solutions.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className={`w-[35px] h-[64px] ${styles.liquidGlassCard} flex justify-center items-start p-2`}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`w-3 h-3 rounded-full ${styles.liquidGlassCard}`}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
