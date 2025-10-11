import React, { memo, useMemo, useCallback } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github, weblink } from "../../assets";
import { fadeIn } from "../../utils/motion";
import { styles } from "../../styles";

// Unified Card component that handles all card types
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

  // Memoize tilt options
  const tiltOptions = useMemo(() => ({
    max: 45,
    scale: 1.05,
    speed: 450,
  }), []);

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

  // Render different card types
  const renderCardContent = () => {
    switch (type) {
      case "service":
        return (
          <div className={`${styles.card} h-full min-h-[320px] group-hover:shadow-white/10 transition-all duration-300`}>
            {/* Content container */}
            <div className="relative p-8 h-full flex flex-col justify-center items-center text-center">
              {/* Number badge */}
              <div className="absolute top-6 right-6">
                <div className="relative bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg group-hover:bg-gray-100 transition-colors duration-300">
                  <span className="relative z-10">0{index + 1}</span>
                </div>
              </div>

              {/* Icon container */}
              <div className="relative mb-8 group/icon">
                <motion.div 
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg flex items-center justify-center group-hover:bg-white/15 group-hover:border-white/50 transition-all duration-300"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={icon}
                    alt={`${title} service`}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-300"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* Title */}
              <motion.h3 
                className="text-white font-bold text-xl sm:text-2xl text-center leading-tight mb-4 group-hover:text-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>

              {/* Accent line */}
              <div className="w-16 h-px bg-white/40 group-hover:w-24 group-hover:bg-white/60 transition-all duration-300"></div>

              {/* Corner accents */}
              <div className={`absolute top-4 right-4 w-8 h-8 ${styles.cornerAccent} border-t border-r`}></div>
              <div className={`absolute bottom-4 left-4 w-8 h-8 ${styles.cornerAccent} border-b border-l`}></div>
            </div>
          </div>
        );

      case "project":
        return (
          <div className={`${styles.card} h-full flex flex-col overflow-hidden`}>
            {/* Image Container */}
            <div className="relative w-full h-48 sm:h-52 md:h-60 overflow-hidden rounded-t-2xl flex-shrink-0">
              <img
                src={image}
                alt={`${title} project`}
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
                  onClick={handleGithubClick}
                  className="bg-black/80 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:shadow-white/20 transition-all duration-300 border border-white/20"
                  aria-label={`View ${title} source code`}
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
              {/* Title */}
              <motion.h3 
                className="text-white font-bold text-xl sm:text-2xl mb-4 group-hover:text-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>

              {/* Points */}
              {points.length > 0 && (
                <motion.ul 
                  className="space-y-2 sm:space-y-3 mb-6 flex-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {points.slice(0, 3).map((point, pointIndex) => (
                    <motion.li
                      key={`point-${pointIndex}`}
                      className="text-gray-300 text-sm sm:text-base leading-relaxed flex items-start gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * pointIndex, duration: 0.5 }}
                    >
                      <div className="relative mt-2 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full shadow-lg group-hover/item:scale-125 transition-transform duration-300" />
                        <div className="absolute inset-0 w-2 h-2 bg-white/50 rounded-full animate-ping opacity-40" />
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag, tagIndex) => (
                    <motion.span
                      key={`tag-${tagIndex}`}
                      className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:bg-white/20`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * tagIndex + 0.3, duration: 0.4 }}
                    >
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              )}

              {/* Corner accents */}
              <div className={`absolute top-4 right-4 w-8 h-8 ${styles.cornerAccent} border-t border-r`}></div>
              <div className={`absolute bottom-4 left-4 w-8 h-8 ${styles.cornerAccent} border-b border-l`}></div>
            </div>
          </div>
        );

      case "teamwork":
        return (
          <div className={`${styles.card} h-full flex flex-col overflow-hidden`}>
            {/* Image Container */}
            <div className="relative w-full h-48 sm:h-52 md:h-60 overflow-hidden rounded-t-2xl flex-shrink-0">
              <img
                src={image}
                alt={`${title} project`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Action buttons */}
              <div className="absolute top-3 right-3 flex gap-2">
                {source_code_link && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGithubClick}
                    className="bg-black/80 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:shadow-white/20 transition-all duration-300 border border-white/20"
                    aria-label={`View ${title} source code`}
                  >
                    <img
                      src={github}
                      alt=""
                      className="w-1/2 h-1/2 object-contain filter brightness-0 invert"
                    />
                  </motion.button>
                )}
                {webpage && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWebpageClick}
                    className="bg-black/80 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:shadow-white/20 transition-all duration-300 border border-white/20"
                    aria-label={`Visit ${title} website`}
                  >
                    <img
                      src={weblink}
                      alt=""
                      className="w-1/2 h-1/2 object-contain filter brightness-0 invert"
                    />
                  </motion.button>
                )}
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
              {/* Title */}
              <motion.h3 
                className="text-white font-bold text-xl sm:text-2xl mb-4 group-hover:text-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>

              {/* Points */}
              {points.length > 0 && (
                <motion.ul 
                  className="space-y-2 sm:space-y-3 mb-6 flex-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {points.slice(0, 3).map((point, pointIndex) => (
                    <motion.li
                      key={`point-${pointIndex}`}
                      className="text-gray-300 text-sm sm:text-base leading-relaxed flex items-start gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * pointIndex, duration: 0.5 }}
                    >
                      <div className="relative mt-2 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full shadow-lg group-hover/item:scale-125 transition-transform duration-300" />
                        <div className="absolute inset-0 w-2 h-2 bg-white/50 rounded-full animate-ping opacity-40" />
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag, tagIndex) => (
                    <motion.span
                      key={`tag-${tagIndex}`}
                      className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:bg-white/20`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * tagIndex + 0.3, duration: 0.4 }}
                    >
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              )}

              {/* Corner accents */}
              <div className={`absolute top-4 right-4 w-8 h-8 ${styles.cornerAccent} border-t border-r`}></div>
              <div className={`absolute bottom-4 left-4 w-8 h-8 ${styles.cornerAccent} border-b border-l`}></div>
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
      className={`w-full max-w-[400px] mx-auto group ${className}`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <Tilt options={tiltOptions} className="relative h-full">
        {renderCardContent()}
      </Tilt>
    </motion.div>
  );
});

UnifiedCard.displayName = 'UnifiedCard';

export default UnifiedCard;
