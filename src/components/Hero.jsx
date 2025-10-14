
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
      
      <div className={`absolute top-10 left-4 sm:top-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 ${styles.backgroundOrb} bg-white/5`} />
      <div className={`absolute bottom-20 right-4 sm:bottom-32 sm:right-16 w-24 h-24 sm:w-48 sm:h-48 ${styles.backgroundOrb} bg-white/5`} />

      {/* Main content */}
      <div className={`absolute inset-0 top-[60px] sm:top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-4 sm:gap-5 ${styles.contentContainer}`}>
        {/* Vertical indicator line */}
        <div className='flex flex-row sm:flex-col justify-center items-center mt-2 mb-4 sm:mb-0'>
          <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${styles.liquidGlassCard}`} />
          <div className={`w-20 h-1 sm:w-1 sm:h-80 ${styles.liquidGlassCard}`} />
        </div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${styles.appleGlassStrong} p-6 sm:p-8 lg:p-10 ${styles.appleSpring}`}
        >
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className={`${styles.appleTextGradientBlue}`}>Sandalu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-6`}>
            I am a passionate developer with a focus on building efficient web applications. 
            I specialize in frontend development using React, creating interactive and user-friendly interfaces, 
            and backend development with Node.js and Express.js for building scalable, reliable server-side solutions.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              href="#project"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.primaryButton} ${styles.appleGradientBlue} no-underline`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('project');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.secondaryButton} no-underline`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a 
          href='#about'
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
        >
          <div className={`w-[35px] h-[64px] ${styles.appleGlass} flex justify-center items-start p-2 ${styles.appleShadowMedium}`}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`w-3 h-3 rounded-full ${styles.appleGradientBlue}`}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
