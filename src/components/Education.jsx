import React, { memo, useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Memoized EducationCard component with consistent design
const EducationCard = memo(({ education, index }) => {
  // Consistent content style
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

  // Consistent arrow style
  const contentArrowStyle = useMemo(() => ({ 
    borderRight: "7px solid rgba(255, 255, 255, 0.15)",
    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))"
  }), []);

  // Consistent icon style
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
      date={education.date}
      iconStyle={iconStyle}
      icon={
        <div className="flex justify-center items-center w-full h-full relative overflow-hidden rounded-full">
          {/* Liquid shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-white/5 to-transparent animate-pulse" />
          
          {/* Moving liquid gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-spin-slow opacity-60" />
          
          <img
            src={education.icon}
            alt={`${education.institution_name} logo`}
            className="w-3/5 h-3/5 object-contain relative z-10 drop-shadow-lg filter brightness-110"
            loading="lazy"
          />
        </div>
      }
    >
      <div className="relative overflow-hidden">
        {/* Content header */}
        <div className="relative z-10 mb-6">
          <motion.h3 
            className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.degree}
          </motion.h3>
          
          <motion.p
            className="text-gray-300 text-sm sm:text-base font-medium mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.institution_name}
          </motion.p>
        </div>

        {/* Points section */}
        <motion.ul 
          className="mt-4 space-y-3 sm:space-y-4 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 * index, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.points?.slice(0, window.innerWidth < 768 ? 3 : 4).map((point, pointIndex) => (
            <motion.li
              key={`education-point-${pointIndex}`}
              className="text-gray-100 text-sm sm:text-base leading-relaxed flex items-start gap-4 group hover:text-white transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.1 * pointIndex + 0.3 * index, 
                duration: 0.5,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Bullet point */}
              <div className="relative mt-2 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute inset-0 w-2 h-2 bg-white/50 rounded-full animate-ping opacity-40" />
              </div>
              
              <span className="group-hover:drop-shadow-sm transition-all duration-300">
                {point}
              </span>
            </motion.li>
          ))}
          
          {/* Show more indicator */}
          {education.points?.length > (window.innerWidth < 768 ? 3 : 4) && (
            <li className="text-gray-400 text-sm italic ml-7 backdrop-blur-sm bg-white/5 rounded-full px-3 py-1 w-fit">
              +{education.points.length - (window.innerWidth < 768 ? 3 : 4)} more achievements...
            </li>
          )}
        </motion.ul>

        {/* Corner accents */}
        <div className={`absolute top-4 right-4 w-8 h-8 ${styles.cornerAccent} border-t border-r`}></div>
        <div className={`absolute bottom-4 left-4 w-8 h-8 ${styles.cornerAccent} border-b border-l`}></div>
        
        {/* Edge highlights */}
        <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </VerticalTimelineElement>
  );
});

EducationCard.displayName = 'EducationCard';

const Education = () => {
  // Consistent timeline line with white gradient
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
            margin-left: 60px !important;
            margin-right: 0 !important;
          }
          .vertical-timeline-element-content-arrow {
            border-right: 7px solid rgba(255, 255, 255, 0.1) !important;
            border-left: 0 !important;
            left: -7px !important;
            right: auto !important;
          }
          .vertical-timeline-element-icon {
            width: 42px !important;
            height: 42px !important;
            left: 9px !important;
          }
          .vertical-timeline-element-date {
            position: relative !important;
            left: 0 !important;
            padding: 0.5em 0 0 0 !important;
            text-align: left !important;
            font-size: 0.875rem !important;
            color: rgba(255, 255, 255, 0.8) !important;
            margin-bottom: 1rem !important;
            font-weight: 500 !important;
          }
        }
        
        @media (max-width: 480px) {
          .vertical-timeline-element-icon {
            width: 36px !important;
            height: 36px !important;
            left: 12px !important;
          }
          .vertical-timeline-element-content {
            margin-left: 54px !important;
            padding: 1.25rem !important;
          }
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
              backgroundSize: '40px 40px'
            }}
            className="w-full h-full"
          />
        </div>
        
        <div className={`absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 ${styles.backgroundOrb} bg-white/5`} />
        <div className={`absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 ${styles.backgroundOrb} bg-white/5`} />
        
        {/* Header section */}
        <motion.div variants={textVariant()} className={styles.contentContainer}>
          <p className={`${styles.sectionSubText} text-center`}>
            My Academic Journey
          </p>
          <h2 className={`${styles.sectionHeadText} text-center mb-6`}>
            Education
            <span className="text-gray-400">.</span>
          </h2>
          
          {/* Decorative line */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-28 h-px bg-white shadow-lg" />
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
            </div>
          </div>
        </motion.div>

        {/* Timeline container */}
        <div className="mt-12 sm:mt-20 flex flex-col relative z-10">
          <VerticalTimeline
            lineColor={timelineLineColor.background}
            animate={true}
            className="education-timeline"
          >
            {education?.map((edu, index) => (
              <EducationCard 
                key={`education-${index}`} 
                education={edu} 
                index={index}
              />
            ))}
          </VerticalTimeline>
        </div>

        {/* Bottom separator */}
        <div className="mt-12 sm:mt-16 w-full relative">
          <div className={styles.accentLine} />
          <div className="mt-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {/* Center accent */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");