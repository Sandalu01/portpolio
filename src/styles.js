const styles = {
  // Consistent padding patterns
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6", 
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  sectionPadding: "px-4 sm:px-6 lg:px-8",

  // Typography - Hero section
  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-gray-300 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  // Typography - Section headers
  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-tight",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-gray-300 uppercase tracking-wider font-medium",

  // Consistent container styles
  container: "relative overflow-hidden bg-black/5",
  contentContainer: "relative z-10",
  
  // Card styles
  card: "relative overflow-hidden rounded-2xl bg-black/90 backdrop-blur-xl border border-gray-800/50 shadow-2xl",
  cardContent: "relative z-10 p-6 sm:p-8",
  
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
};

export { styles };
