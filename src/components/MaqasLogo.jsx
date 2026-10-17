import React from 'react';

export default function MaqasLogo({ 
  className = "w-12 h-12", 
  variant = "light", // "light", "dark", "monochrome", "gold"
  showText = false,
  textClass = "text-xl",
  subtextClass = "text-xs"
}) {
  // Brand Colors from guidelines:
  // Off-white: #F5F5F5
  // Mauve: #E0B1CB
  // Medium Purple: #5E548E
  // Deep Night Violet: #231942

  const isDarkBg = variant === "dark";
  const circleOuter = isDarkBg ? "#E0B1CB" : "#5E548E";
  const circleInner = isDarkBg ? "#FAF5F9" : "#231942";
  const needleColor = isDarkBg ? "#FFFFFF" : "#5E548E";
  const threadColor = isDarkBg ? "#E0B1CB" : "#5E548E";
  const mannequinFill = isDarkBg ? "rgba(224, 177, 203, 0.15)" : "rgba(94, 84, 142, 0.08)";
  const mannequinStroke = isDarkBg ? "#E0B1CB" : "#231942";

  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-500 hover:rotate-6"
        >
          {/* Dual Circle: Sanctuary, containment, total privacy for women */}
          <circle 
            cx="50" 
            cy="50" 
            r="46" 
            stroke={circleOuter} 
            strokeWidth="1.2" 
            strokeDasharray="2 3"
            opacity="0.7"
          />
          <circle 
            cx="50" 
            cy="50" 
            r="42" 
            stroke={circleInner} 
            strokeWidth="1.8"
          />
          <circle 
            cx="50" 
            cy="50" 
            r="38.5" 
            stroke={circleOuter} 
            strokeWidth="0.8"
            opacity="0.5"
          />

          {/* Mannequin Finial / Top Knob */}
          <circle cx="50" cy="22" r="3" fill={circleOuter} />
          <path d="M48.5 25 H51.5 V29 H48.5 Z" fill={mannequinStroke} />

          {/* Feminine Dressmaker Torso Form */}
          <path 
            d="M39 32 C42 30, 58 30, 61 32 C62.5 37, 60.5 43, 58 48 C56 52, 55 57, 59 63 C60.5 66, 58 67.5, 50 67.5 C42 67.5, 39.5 66, 41 63 C45 57, 44 52, 42 48 C39.5 43, 37.5 37, 39 32 Z" 
            fill={mannequinFill} 
            stroke={mannequinStroke} 
            strokeWidth="1.4"
            strokeLinejoin="round"
          />

          {/* Mannequin Stand Pole & Tripod Base */}
          <line x1="50" y1="67.5" x2="50" y2="82" stroke={circleOuter} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M42 82 H58 M45 82 L41 86 M55 82 L59 86" stroke={circleOuter} strokeWidth="1.5" strokeLinecap="round" />

          {/* Sewing Needle (Passes diagonally through form) */}
          <g transform="rotate(-28 50 48)">
            <line x1="50" y1="16" x2="50" y2="76" stroke={needleColor} strokeWidth="1.6" strokeLinecap="round" />
            {/* Eye of the Needle */}
            <ellipse cx="50" cy="21" rx="0.8" ry="2.2" fill={isDarkBg ? "#231942" : "#FFFFFF"} />
          </g>

          {/* Delicate Couture Thread Loop (Minimalist Line Art) */}
          <path 
            d="M46 23 C32 25, 30 42, 44 46 C58 50, 64 58, 52 66 C43 72, 36 65, 34 58" 
            stroke={threadColor} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            fill="none" 
            opacity="0.9"
          />

          {/* Delicate Accent Star / Diamond (Craftsmanship sparkle) */}
          <path d="M66 26 L67.5 22.5 L69 26 L72.5 27.5 L69 29 L67.5 32.5 L66 29 L62.5 27.5 Z" fill={circleOuter} opacity="0.85" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-right">
          <div className="flex items-center gap-2">
            <span className={`font-amiri font-bold tracking-wide leading-none ${isDarkBg ? 'text-[#F5F5F5]' : 'text-[#231942]'} ${textClass}`}>
              مَقاس
            </span>
            <span className={`font-tajawal font-light tracking-widest text-sm ${isDarkBg ? 'text-[#E0B1CB]' : 'text-[#5E548E]'}`}>
              | MAQAS
            </span>
          </div>
          <span className={`font-tajawal mt-0.5 tracking-tight ${isDarkBg ? 'text-gray-300' : 'text-[#5E548E]'} ${subtextClass}`}>
            للخياطة النسائية وتعديل الملابس
          </span>
        </div>
      )}
    </div>
  );
}
