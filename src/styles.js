const styles = {
  // Consistent padding patterns - mobile optimized
  paddingX: "px-4 sm:px-6 lg:px-16",
  paddingY: "py-6 sm:py-10 lg:py-16", 
  padding: "px-4 py-6 sm:px-6 sm:py-10 lg:px-16 lg:py-16",
  sectionPadding: "px-3 sm:px-4 md:px-6 lg:px-8",

  // Typography - Hero section
  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-gray-300 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  // Typography - Section headers - mobile optimized
  sectionHeadText:
    "text-white font-black text-[28px] xs:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] tracking-tight",
  sectionSubText:
    "text-[12px] xs:text-[14px] sm:text-[16px] lg:text-[18px] text-gray-300 uppercase tracking-wider font-medium",

  // Consistent container styles
  container: "relative overflow-hidden bg-black/5",
  contentContainer: "relative z-10",
  
  // Modern Liquid Glass Card styles
  card: "liquid-glass-card",
  cardContent: "relative z-10 p-4 xs:p-5 sm:p-6 lg:p-8",
  
  // Modern Liquid Glass Button styles
  primaryButton: "liquid-glass-button relative group w-fit overflow-hidden text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:text-gray-100 active:text-gray-200",
  secondaryButton: "liquid-glass-button relative group w-fit overflow-hidden text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:text-gray-100",
  
  // Background elements - modernized
  backgroundGrid: "absolute inset-0 opacity-[0.02] pointer-events-none",
  backgroundOrb: "absolute pointer-events-none rounded-full blur-3xl",
  
  // Modern Liquid Glass decorative elements
  accentLine: "h-px bg-gradient-to-r from-transparent via-white/20 to-transparent",
  cornerAccent: "absolute border border-white/10",
  
  // Modern Liquid Glass specific styles
  liquidGlass: "liquid-glass",
  liquidGlassGradient: "liquid-glass-gradient",
  liquidGlassFloating: "liquid-glass-floating",
  liquidGlassButton: "liquid-glass-button",
  liquidGlassTag: "liquid-glass-tag",
  liquidGlassIcon: "liquid-glass-icon",
  liquidGlassTimeline: "liquid-glass-timeline",
  liquidGlassOverlay: "liquid-glass-overlay",
  
  // Animation classes
  fadeIn: "opacity-0 animate-fade-in",
  slideUp: "translate-y-8 opacity-0 animate-slide-up",
  
  // Mobile-specific classes
  touchOptimized: "touch-manipulation select-none",
  mobileSafe: "safe-area-inset-left safe-area-inset-right",
  
  // Modern Liquid Glass utility classes
  shimmerEffect: "liquid-shimmer",
  glassBorder: "border border-white/8",
  glassHighlight: "inset-0 border border-white/12",
  
  // Modern gradient overlays
  gradientOverlay1: "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:via-transparent before:to-white/2 before:pointer-events-none before:z-10",
  gradientOverlay2: "before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/8 before:to-transparent before:pointer-events-none before:z-10",
  
  // Modern shadow system
  modernShadow: "shadow-[0_8px_32px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
  modernShadowHover: "hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
  
  // Modern border radius system
  modernRadius: "rounded-3xl",
  modernRadiusSmall: "rounded-2xl",
  modernRadiusButton: "rounded-xl",
  modernRadiusTag: "rounded-lg",
};

export { styles };