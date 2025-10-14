import React, { memo, useMemo, useCallback } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github, weblink } from "../../assets";
import { fadeIn } from "../../utils/motion";
import { styles } from "../../styles";

// Unified Card component with modern liquid glass design
const UnifiedCard = memo(({
  index = 0,
  type = "project", // "project", "service", "teamwork"
  title,
  subtitle,
  description,
  points = [],
  tags = [],
  image,
  icon,
  date,
  source_code_link,
  webpage,
  iconBg = "#ffffff",
  className = "",
  ...props
}) => {
  // Memoize animation variants
  const cardVariants = useMemo(() => 
    fadeIn("up", "spring", index * 0.5, 0.75), [index]
  );

  // Optimized tilt options for mobile
  const tiltOptions = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return {
      max: isMobile ? 15 : 45,
      scale: isMobile ? 1.02 : 1.05,
      speed: 450,
      disable: isMobile,
    };
  }, []);

  // Memoized click handlers
  const handleGithubClick = useCallback(() => {
    if (source_code_link) {
      window.open(source_code_link, "_blank", "noopener,noreferrer");
    }
  }, [source_code_link]);

  const handleWebpageClick = useCallback(() => {
    if (webpage) {
      window.open(webpage, "_blank", "noopener,noreferrer");
    }
  }, [webpage]);

  // Mobile-optimized hover effects
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const hoverY = isMobile ? 0 : -10;
  const hoverScale = isMobile ? 1.01 : 1.02;
  const buttonScale = isMobile ? 1.05 : 1.1;

  // Render different card types
  const renderCardContent = () => {
    switch (type) {
      case "service":
        return (
          <div className={`${styles.appleGlassStrong} h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[340px] transition-all duration-500 group cursor-pointer`}>
            {/* Content container */}
            <div className="relative p-6 xs:p-8 h-full flex flex-col justify-center items-center text-center">
              {/* Number badge */}
              <div className="absolute top-4 right-4 xs:top-6 xs:right-6">
                <div className={`${styles.appleGlass} relative w-8 h-8 xs:w-10 xs:h-10 flex items-center justify-center font-bold text-sm xs:text-base ${styles.appleShadowMedium} transition-all duration-300`}>
                  <span className="relative z-10 text-white apple-label-medium">0{index + 1}</span>
                </div>
              </div>

              {/* Icon container */}
              <div className="relative mb-6 xs:mb-8 group/icon">
                <motion.div 
                  className={`${styles.appleGlass} relative w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 flex items-center justify-center transition-all duration-300 ${styles.appleShadowLarge}`}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  <img
                    src={icon}
                    alt={`${title} service`}
                    className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 object-contain transition-all duration-300 relative z-10"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* Title */}
              <motion.h3 
                className="text-white apple-title-large text-center leading-tight mb-4 xs:mb-6 group-hover:text-gray-100 transition-colors duration-300 relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>

              {/* Apple-style accent line */}
              <div className="w-16 xs:w-20 h-0.5 bg-gradient-to-r from-transparent via-apple-blue to-transparent group-hover:w-24 xs:group-hover:w-28 transition-all duration-300 relative z-10"></div>

              {/* Apple-style corner accents */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-apple-blue/30 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-apple-blue/30 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
            </div>
          </div>
        );

      case "project":
        return (
          <div className={`${styles.appleGlassStrong} h-full flex flex-col overflow-hidden group cursor-pointer ${styles.appleShadowLarge}`}>
            {/* Image Container */}
            <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 overflow-hidden rounded-t-3xl flex-shrink-0">
              <img
                src={image}
                alt={`${title} project`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Apple-style gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* GitHub button */}
              <div className="absolute top-3 right-3 xs:top-4 xs:right-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGithubClick}
                  className={`${styles.appleGlass} w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-300 ${styles.appleShadowMedium} touch-manipulation`}
                  aria-label={`View ${title} source code`}
                >
                  <img
                    src={github}
                    alt=""
                    className="w-1/2 h-1/2 object-contain filter brightness-0 invert relative z-10"
                  />
                </motion.button>
              </div>

              {/* Project index */}
              <div className="absolute top-3 left-3 xs:top-4 xs:left-4">
                <div className={`${styles.appleGlass} relative px-3 py-1.5 xs:px-4 xs:py-2 rounded-2xl ${styles.appleShadowSmall}`}>
                  <span className="text-white apple-label-medium relative z-10">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </div>

            {/* Content section */}
            <div className="relative p-5 xs:p-6 sm:p-7 flex-1 flex flex-col z-20">
              {/* Title */}
              <motion.h3 
                className="text-white apple-title-large mb-4 xs:mb-5 group-hover:text-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>

              {/* Points */}
              {points.length > 0 && (
                <motion.ul 
                  className="space-y-2 xs:space-y-2.5 sm:space-y-3 mb-5 xs:mb-6 flex-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {points.slice(0, 3).map((point, pointIndex) => (
                    <motion.li
                      key={`point-${pointIndex}`}
                      className="text-gray-300 apple-body-medium leading-relaxed flex items-start gap-3 xs:gap-4 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * pointIndex, duration: 0.5 }}
                    >
                      <div className="relative mt-2 flex-shrink-0">
                        <div className="w-2 h-2 xs:w-2.5 xs:h-2.5 bg-apple-blue rounded-full shadow-lg group-hover/item:scale-125 transition-transform duration-300" />
                        <div className="absolute inset-0 w-2 h-2 xs:w-2.5 xs:h-2.5 bg-apple-blue/50 rounded-full animate-ping opacity-40" />
                      </div>
                      <span className="group-hover/item:text-white transition-colors duration-300">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              {/* Tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 xs:gap-2.5 mb-4 xs:mb-5">
                  {tags.map((tag, tagIndex) => (
                    <motion.span
                      key={`tag-${tagIndex}`}
                      className={`${styles.appleGlass} px-3 py-1.5 xs:px-4 xs:py-2 apple-label-small text-white transition-all duration-300 ${styles.appleShadowSmall}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * tagIndex + 0.3, duration: 0.4 }}
                    >
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              )}

              {/* Apple-style corner accents */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-apple-blue/30 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-apple-blue/30 opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
            </div>
          </div>
        );

      case "teamwork":
        return (
          <div className={`${styles.liquidGlassCard} h-full flex flex-col overflow-hidden`}>
            {/* Image Container */}
            <div className="relative w-full h-36 xs:h-40 sm:h-48 md:h-52 lg:h-60 overflow-hidden rounded-t-3xl flex-shrink-0">
              <img
                src={image}
                alt={`${title} project`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Modern liquid glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Action buttons */}
              <div className="absolute top-2 right-2 xs:top-3 xs:right-3 flex gap-1.5 xs:gap-2">
                {source_code_link && (
                  <motion.button
                    whileHover={{ scale: buttonScale }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleGithubClick}
                    className={`${styles.liquidGlassOverlay} w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-300 touch-manipulation`}
                    aria-label={`View ${title} source code`}
                  >
                    <img
                      src={github}
                      alt=""
                      className="w-1/2 h-1/2 object-contain filter brightness-0 invert relative z-10"
                    />
                  </motion.button>
                )}
                {webpage && (
                  <motion.button
                    whileHover={{ scale: buttonScale }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleWebpageClick}
                    className={`${styles.liquidGlassOverlay} w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-300 touch-manipulation`}
                    aria-label={`Visit ${title} website`}
                  >
                    <img
                      src={weblink}
                      alt=""
                      className="w-1/2 h-1/2 object-contain filter brightness-0 invert relative z-10"
                    />
                  </motion.button>
                )}
              </div>

              {/* Project index */}
              <div className="absolute top-2 left-2 xs:top-3 xs:left-3">
                <div className={`${styles.liquidGlassTag} relative px-1.5 py-0.5 xs:px-2 xs:py-1 rounded-xl`}>
                  <span className="text-white text-xs font-medium relative z-10">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </div>

            {/* Content section */}
            <div className={`${styles.cardContent} flex-1 flex flex-col relative z-20`}>
              {/* Title */}
              <motion.h3 
                className="text-white font-bold text-lg xs:text-xl sm:text-2xl mb-3 xs:mb-4 group-hover:text-gray-100 transition-colors duration-300"
                whileHover={{ scale: hoverScale }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>

              {/* Points */}
              {points.length > 0 && (
                <motion.ul 
                  className="space-y-1.5 xs:space-y-2 sm:space-y-3 mb-4 xs:mb-6 flex-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {points.slice(0, 3).map((point, pointIndex) => (
                    <motion.li
                      key={`point-${pointIndex}`}
                      className="text-gray-300 text-xs xs:text-sm sm:text-base leading-relaxed flex items-start gap-2 xs:gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * pointIndex, duration: 0.5 }}
                    >
                      <div className="relative mt-1 xs:mt-1.5 sm:mt-2 flex-shrink-0">
                        <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-white rounded-full shadow-lg group-hover/item:scale-125 transition-transform duration-300" />
                        <div className="absolute inset-0 w-1.5 h-1.5 xs:w-2 xs:h-2 bg-white/50 rounded-full animate-ping opacity-40" />
                      </div>
                      <span className="group-hover/item:text-white transition-colors duration-300">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              {/* Tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-3 xs:mb-4">
                  {tags.map((tag, tagIndex) => (
                    <motion.span
                      key={`tag-${tagIndex}`}
                      className={`${styles.liquidGlassTag} px-2 py-1 xs:px-3 xs:py-1 text-xs font-medium text-white transition-all duration-300`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * tagIndex + 0.3, duration: 0.4 }}
                    >
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              )}

              {/* Modern liquid glass accents */}
              <div className={`absolute top-4 right-4 w-8 h-8 ${styles.cornerAccent} border-t border-r opacity-30`}></div>
              <div className={`absolute bottom-4 left-4 w-8 h-8 ${styles.cornerAccent} border-b border-l opacity-30`}></div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`w-full group ${className}`}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
      {...props}
    >
      <div className="relative h-full">
        {renderCardContent()}
      </div>
    </motion.div>
  );
});

UnifiedCard.displayName = 'UnifiedCard';

export default UnifiedCard;