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
  
  // Card styles - mobile optimized
  card: "relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/90 backdrop-blur-xl border border-gray-800/50 shadow-2xl",
  cardContent: "relative z-10 p-4 xs:p-5 sm:p-6 lg:p-8",
  
  // Button styles
  primaryButton: "relative group w-fit overflow-hidden bg-white text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:bg-gray-100 active:bg-gray-200",
  secondaryButton: "relative group w-fit overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/20",
  
  // Background elements
  backgroundGrid: "absolute inset-0 opacity-[0.02] pointer-events-none",
  backgroundOrb: "absolute pointer-events-none rounded-full blur-3xl",
  
  // Decorative elements
  accentLine: "h-px bg-gradient-to-r from-transparent via-white/30 to-transparent",
  cornerAccent: "absolute border border-white/20",
  
  // Animation classes
  fadeIn: "opacity-0 animate-fade-in",
  slideUp: "translate-y-8 opacity-0 animate-slide-up",
  
  // Mobile-specific classes
  touchOptimized: "touch-manipulation select-none",
  mobileSafe: "safe-area-inset-left safe-area-inset-right",
};

export { styles };
