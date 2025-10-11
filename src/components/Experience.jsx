import React, { memo, useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Consistent ExperienceCard with standardized design
const ExperienceCard = memo(({ experience, index }) => {
  // Consistent content styling
  const contentStyle = useMemo(() => ({
    background: "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.98) 50%, rgba(0, 0, 0, 0.95) 100%)",
    color: "#fff",
    border: "2px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "24px",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    boxShadow: `
      0 25px 50px rgba(0, 0, 0, 0.6),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 2px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 rgba(255, 255, 255, 0.05)
    `,
  }), []);

  // Consistent arrow styling
  const contentArrowStyle = useMemo(() => ({ 
    borderRight: "7px solid rgba(255, 255, 255, 0.15)",
    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))"
  }), []);

  // Consistent icon container styling
  const iconStyle = useMemo(() => ({
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 240, 1) 100%)",
    border: "3px solid rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: `
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 0 2px rgba(255, 255, 255, 0.9),
      inset 0 2px 0 rgba(255, 255, 255, 1)
    `,
  }), []);

  return (
    <VerticalTimelineElement
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={experience.date}
      iconStyle={iconStyle}
      icon={
        <div className="flex justify-center items-center w-full h-full relative overflow-hidden rounded-full">
          {/* Sophisticated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-white/90 rounded-full" />
          
          {/* Premium rotating ring */}
          <div className="absolute inset-0 border-2 border-black/10 rounded-full animate-spin-slow opacity-30" />
          
          {/* Company logo with premium styling */}
          <img
            src={experience.icon}
            alt={`${experience.company_name} logo`}
            className="w-3/5 h-3/5 object-contain relative z-10 drop-shadow-sm filter contrast-125 brightness-110"
            loading="lazy"
          />
          
          {/* Subtle inner glow */}
          <div className="absolute inset-2 bg-white/20 rounded-full blur-sm" />
        </div>
      }
    >
      <div className="relative overflow-hidden">
        {/* Content header */}
        <div className="relative z-10 mb-8">
          <motion.h3 
            className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-4 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {experience.title}
          </motion.h3>
          
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-1 h-6 bg-white rounded-full"></div>
            <p className="text-gray-300 text-base sm:text-lg font-medium tracking-wide">
              {experience.company_name}
            </p>
          </motion.div>

          {/* Separator line */}
          <div className="w-20 h-px bg-white/40 mb-6"></div>
        </div>

        {/* Achievements list */}
        <motion.ul 
          className="space-y-4 sm:space-y-5 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 * index, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {experience.points?.slice(0, window.innerWidth < 768 ? 3 : 4).map((point, pointIndex) => (
            <motion.li
              key={`experience-point-${pointIndex}`}
              className="text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed flex items-start gap-4 group hover:text-white transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.1 * pointIndex + 0.3 * index, 
                duration: 0.5,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Bullet design */}
              <div className="relative mt-2 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute inset-0 w-2 h-2 bg-white/50 rounded-full animate-ping opacity-40" />
              </div>
              
              <span className="group-hover:text-shadow-sm transition-all duration-300 tracking-wide leading-relaxed">
                {point}
              </span>
            </motion.li>
          ))}
          
          {/* Show more indicator */}
          {experience.points?.length > (window.innerWidth < 768 ? 3 : 4) && (
            <li className="text-gray-400 text-sm italic ml-8 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 w-fit border border-white/10">
              +{experience.points.length - (window.innerWidth < 768 ? 3 : 4)} more achievements...
            </li>
          )}
        </motion.ul>

        {/* Corner accents */}
        <div className={`absolute top-4 right-4 w-8 h-8 ${styles.cornerAccent} border-t border-r`}></div>
        <div className={`absolute bottom-4 left-4 w-8 h-8 ${styles.cornerAccent} border-b border-l`}></div>
        
        {/* Edge highlights */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </VerticalTimelineElement>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

const Experience = () => {
  // Consistent timeline styling
  const timelineLineColor = useMemo(() => ({
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.8) 100%)',
    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))',
    width: '3px'
  }), []);

  return (
    <>
      {/* Consistent animations and responsive styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        /* Responsive timeline styling */
        @media (max-width: 768px) {
          .vertical-timeline::before {
            left: 30px !important;
            width: 2px !important;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3)) !important;
          }
          .vertical-timeline-element-content {
            margin-left: 70px !important;
            margin-right: 0 !important;
          }
          .vertical-timeline-element-content-arrow {
            border-right: 7px solid rgba(255, 255, 255, 0.15) !important;
            border-left: 0 !important;
            left: -7px !important;
            right: auto !important;
          }
          .vertical-timeline-element-icon {
            width: 50px !important;
            height: 50px !important;
            left: 5px !important;
          }
          .vertical-timeline-element-date {
            position: relative !important;
            left: 0 !important;
            padding: 0.75em 0 0 0 !important;
            text-align: left !important;
            font-size: 0.9rem !important;
            color: rgba(255, 255, 255, 0.8) !important;
            margin-bottom: 1.5rem !important;
            font-weight: 600 !important;
            letter-spacing: 0.5px !important;
          }
        }
        
        @media (max-width: 480px) {
          .vertical-timeline-element-icon {
            width: 45px !important;
            height: 45px !important;
            left: 7px !important;
          }
          .vertical-timeline-element-content {
            margin-left: 65px !important;
            padding: 2rem !important;
          }
        }

        /* Date styling */
        .vertical-timeline-element-date {
          color: rgba(255, 255, 255, 0.9) !important;
          font-weight: 600 !important;
          letter-spacing: 1px !important;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
        }
      `}</style>

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
        
        <div className={`absolute top-32 left-20 w-64 h-64 ${styles.backgroundOrb} bg-white/5`} />
        <div className={`absolute bottom-40 right-24 w-48 h-48 ${styles.backgroundOrb} bg-white/5`} />
        
        {/* Header section */}
        <motion.div variants={textVariant()} className={styles.contentContainer}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center mb-8`}>
            Work Experience
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

        {/* Timeline container */}
        <div className="mt-16 sm:mt-24 flex flex-col relative z-10">
          <VerticalTimeline
            lineColor={timelineLineColor.background}
            animate={true}
            className="experience-timeline"
          >
            {experiences?.map((experience, index) => (
              <ExperienceCard 
                key={`experience-${index}`} 
                experience={experience} 
                index={index}
              />
            ))}
          </VerticalTimeline>
        </div>

        {/* Bottom separator */}
        <div className="mt-16 sm:mt-20 w-full relative">
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

export default SectionWrapper(Experience, "work");