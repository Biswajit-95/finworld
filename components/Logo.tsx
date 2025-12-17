import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 
        INSTRUCTIONS: 
        1. Save your logo image as 'logo.png' in the 'public' folder.
        2. If you have a specific white version for dark backgrounds, save it as 'logo-white.png' 
           and update the src logic below, or rely on the CSS filter.
      */}
      <img 
        src="/finWorld_logo.png" 
        alt="FinWorld - Securing Your World" 
        className={`h-20 w-auto object-contain transition-all duration-300 rounded-lg ${light ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};

export default Logo;