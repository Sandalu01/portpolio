const styles = {
  // Consistent padding patterns - mobile optimized
  paddingX: "px-4 sm:px-6 lg:px-16",
  paddingY: "py-6 sm:py-10 lg:py-16", 
  padding: "px-4 py-6 sm:px-6 sm:py-10 lg:px-16 lg:py-16",
  sectionPadding: "px-3 sm:px-4 md:px-6 lg:px-8",

  // Typography - Hero section (Apple-style)
  heroHeadText:
    "apple-display-large text-white mt-2",
  heroSubText:
    "apple-body-large text-gray-300",

  // Typography - Section headers (Apple-style)
  sectionHeadText:
    "apple-display-medium text-white",
  sectionSubText:
    "apple-label-large text-gray-300 uppercase tracking-wider",

  // Consistent container styles
  container: "relative overflow-hidden bg-black/5",
  contentContainer: "relative z-10",
  
  // Apple-style Card styles
  card: "apple-card",
  cardContent: "relative z-10 p-4 xs:p-5 sm:p-6 lg:p-8",
  
  // Apple-style Button styles
  primaryButton: "apple-button-primary relative group w-fit overflow-hidden",
  secondaryButton: "apple-button-secondary relative group w-fit overflow-hidden",
  
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
  
  // Apple-style utility classes
  appleGlass: "apple-glass",
  appleGlassStrong: "apple-glass-strong",
  appleSpring: "apple-spring",
  appleFadeInUp: "apple-fade-in-up",
  appleSlideInRight: "apple-slide-in-right",
  applePulse: "apple-pulse",
  
  // Apple-style gradients
  appleGradientBlue: "apple-gradient-blue",
  appleGradientPurple: "apple-gradient-purple",
  appleGradientGreen: "apple-gradient-green",
  appleGradientOrange: "apple-gradient-orange",
  appleGradientRed: "apple-gradient-red",
  
  // Apple-style text gradients
  appleTextGradientBlue: "apple-text-gradient-blue",
  appleTextGradientPurple: "apple-text-gradient-purple",
  appleTextGradientGreen: "apple-text-gradient-green",
  
  // Apple-style shadows
  appleShadowSmall: "apple-shadow-small",
  appleShadowMedium: "apple-shadow-medium",
  appleShadowLarge: "apple-shadow-large",
  appleShadowXl: "apple-shadow-xl",
};

export { styles };