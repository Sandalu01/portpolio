
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
          <div className='w-5 h-5 rounded-full bg-white shadow-lg' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-white via-white/50 to-transparent' />
        </div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-white font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Sandalu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-gray-300 leading-relaxed`}>
            I am a passionate developer with a focus on building efficient web applications. 
            I specialize in frontend development using React, creating interactive and user-friendly interfaces, 
            and backend development with Node.js and Express.js for building scalable, reliable server-side solutions.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-2 border-white/30 flex justify-center items-start p-2 backdrop-blur-sm bg-black/20 hover:border-white/50 transition-colors duration-300'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white shadow-lg'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
