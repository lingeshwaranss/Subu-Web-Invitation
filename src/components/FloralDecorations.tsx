import React from 'react';

/**
 * Traditional South Indian Ceremonial Floral Decorations:
 * - Mango leaf thoranam (மாவிலை தோரணம்)
 * - Yellow & orange marigold garlands (சாமந்தி மாலை)
 * - Jasmine strings & ruby bead tassels
 * - Pink sacred lotus blooms (செந்தாமரை)
 */

export const MangoThoranam: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1200 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mangoLeafGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A852B" />
            <stop offset="60%" stopColor="#2E6319" />
            <stop offset="100%" stopColor="#1E4710" />
          </linearGradient>
          <linearGradient id="marigoldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD233" />
            <stop offset="50%" stopColor="#FF9900" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>
          <linearGradient id="jasmineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="80%" stopColor="#FFF8E7" />
            <stop offset="100%" stopColor="#EBD9A7" />
          </linearGradient>
          <linearGradient id="goldString" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C6A15B" />
            <stop offset="50%" stopColor="#ECC880" />
            <stop offset="100%" stopColor="#C6A15B" />
          </linearGradient>
          <filter id="garlandShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#20572C" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Top supporting sacred yellow/red thread */}
        <line x1="0" y1="12" x2="1200" y2="12" stroke="url(#goldString)" strokeWidth="6" />
        <line x1="0" y1="18" x2="1200" y2="18" stroke="#70451F" strokeWidth="2" strokeDasharray="6 4" />

        {/* Row of fresh green mango leaves pointing downwards */}
        {Array.from({ length: 32 }).map((_, i) => {
          const x = 20 + i * 37;
          return (
            <g key={`mango-${i}`} transform={`translate(${x}, 15)`} filter="url(#garlandShadow)">
              <path
                d="M 0 0 C -12 25 -10 65 0 95 C 10 65 12 25 0 0 Z"
                fill="url(#mangoLeafGrad)"
              />
              <path
                d="M 0 0 L 0 92"
                stroke="#6DB33F"
                strokeWidth="1.2"
                opacity="0.85"
              />
              {/* Subtle side leaf veins */}
              <path d="M 0 20 L -6 28 M 0 35 L -7 45 M 0 55 L -6 67 M 0 20 L 6 28 M 0 35 L 7 45 M 0 55 L 6 67" stroke="#6DB33F" strokeWidth="0.8" opacity="0.6" />
            </g>
          );
        })}

        {/* Swagged Marigold and Jasmine Garlands (மலர் மாலைகள்) */}
        {/* Swag 1: Left */}
        <path
          d="M 80 15 Q 300 120 520 15"
          fill="none"
          stroke="url(#marigoldGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray="6 8"
          filter="url(#garlandShadow)"
        />
        <path
          d="M 100 20 Q 300 135 500 20"
          fill="none"
          stroke="url(#jasmineGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />

        {/* Swag 2: Center */}
        <path
          d="M 380 15 Q 600 135 820 15"
          fill="none"
          stroke="url(#marigoldGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray="7 9"
          filter="url(#garlandShadow)"
        />
        <path
          d="M 400 20 Q 600 150 800 20"
          fill="none"
          stroke="url(#jasmineGrad)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />

        {/* Swag 3: Right */}
        <path
          d="M 680 15 Q 900 120 1120 15"
          fill="none"
          stroke="url(#marigoldGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray="6 8"
          filter="url(#garlandShadow)"
        />
        <path
          d="M 700 20 Q 900 135 1100 20"
          fill="none"
          stroke="url(#jasmineGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />

        {/* Hanging flower drops with crimson bells / lotus buds */}
        {[100, 300, 500, 600, 700, 900, 1100].map((cx, idx) => {
          const length = idx === 3 ? 165 : idx % 2 === 0 ? 110 : 135;
          return (
            <g key={`drop-${cx}`} transform={`translate(${cx}, 15)`}>
              {/* String of beads */}
              {Array.from({ length: Math.floor(length / 15) }).map((_, bIdx) => (
                <circle
                  key={bIdx}
                  cx="0"
                  cy={bIdx * 15 + 8}
                  r={bIdx % 2 === 0 ? 4 : 3}
                  fill={bIdx % 2 === 0 ? '#FFB300' : '#FFFDF3'}
                  stroke="#C6A15B"
                  strokeWidth="0.8"
                />
              ))}
              {/* Lotus bud pendant at tip */}
              <g transform={`translate(0, ${length})`}>
                <ellipse cx="0" cy="0" rx="9" ry="12" fill="#E99BB7" />
                <path d="M -8 2 C -5 -10 0 -14 0 -14 C 0 -14 5 -10 8 2 Z" fill="#D81B60" />
                <circle cx="0" cy="14" r="3.5" fill="#C6A15B" />
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export const LotusBloom: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 64,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-sm ${className}`}
    >
      <defs>
        <linearGradient id="lotusCenter" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#C2185B" />
          <stop offset="60%" stopColor="#E99BB7" />
          <stop offset="100%" stopColor="#FFF0F5" />
        </linearGradient>
        <linearGradient id="lotusSide" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#AD1457" />
          <stop offset="70%" stopColor="#F48FB1" />
          <stop offset="100%" stopColor="#FFF0F5" />
        </linearGradient>
      </defs>

      {/* Base green sepals */}
      <path d="M 50 68 C 30 72 20 62 15 55 C 25 54 40 60 50 68 Z" fill="#477A32" />
      <path d="M 50 68 C 70 72 80 62 85 55 C 75 54 60 60 50 68 Z" fill="#477A32" />

      {/* Outer Petals */}
      <path d="M 50 66 C 25 60 10 40 12 28 C 22 28 42 48 50 66 Z" fill="url(#lotusSide)" opacity="0.9" />
      <path d="M 50 66 C 75 60 90 40 88 28 C 78 28 58 48 50 66 Z" fill="url(#lotusSide)" opacity="0.9" />

      {/* Mid Petals */}
      <path d="M 50 66 C 30 52 20 28 26 15 C 36 20 45 42 50 66 Z" fill="url(#lotusCenter)" />
      <path d="M 50 66 C 70 52 80 28 74 15 C 64 20 55 42 50 66 Z" fill="url(#lotusCenter)" />

      {/* Central Majestic Petal */}
      <path d="M 50 66 C 42 42 42 18 50 6 C 58 18 58 42 50 66 Z" fill="url(#lotusCenter)" />
    </svg>
  );
};

export const KuthuvilakkuLamp: React.FC<{ className?: string; height?: number }> = ({
  className = '',
  height = 140,
}) => {
  return (
    <svg
      height={height}
      viewBox="0 0 100 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md ${className}`}
    >
      <defs>
        <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8A6025" />
          <stop offset="30%" stopColor="#C6A15B" />
          <stop offset="60%" stopColor="#F5DF9E" />
          <stop offset="85%" stopColor="#C6A15B" />
          <stop offset="100%" stopColor="#70451F" />
        </linearGradient>
        <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF3A8" />
          <stop offset="40%" stopColor="#FFA000" />
          <stop offset="100%" stopColor="#E65100" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Peacock Finial at the pinnacle (அன்னப்பட்சி / மயில்) */}
      <g transform="translate(50, 24)">
        <ellipse cx="-2" cy="-6" rx="6" ry="9" fill="url(#brassGrad)" />
        <circle cx="3" cy="-14" r="5" fill="url(#brassGrad)" />
        <path d="M 6 -15 L 12 -13 L 6 -11 Z" fill="#ECC880" />
        <path d="M -8 -8 C -14 -16 -18 -8 -16 -2 C -12 2 -8 -2 -8 -8 Z" fill="url(#brassGrad)" />
      </g>

      {/* Burning Golden Flame (சுடர்) with pulse */}
      <ellipse cx="50" cy="50" rx="16" ry="24" fill="url(#flameGlow)" className="animate-pulse" />
      <path
        d="M 50 34 C 44 44 45 52 50 56 C 55 52 56 44 50 34 Z"
        fill="#FFD54F"
      />
      <circle cx="50" cy="49" r="3.5" fill="#FFFFFF" />

      {/* Oil Dish (அகல்) */}
      <ellipse cx="50" cy="62" rx="36" ry="9" fill="url(#brassGrad)" />
      <ellipse cx="50" cy="59" rx="32" ry="6" fill="#70451F" />
      <ellipse cx="50" cy="60" rx="30" ry="4" fill="#C6A15B" />

      {/* Tiered Decorative Rings & Spindle Pillar */}
      <rect x="44" y="68" width="12" height="18" fill="url(#brassGrad)" />
      <ellipse cx="50" cy="88" rx="20" ry="6" fill="url(#brassGrad)" />
      <ellipse cx="50" cy="98" rx="16" ry="5" fill="url(#brassGrad)" />

      {/* Main Fluted Brass Column */}
      <path d="M 46 98 L 44 185 L 56 185 L 54 98 Z" fill="url(#brassGrad)" />

      {/* Mid tier decorative collar */}
      <ellipse cx="50" cy="140" rx="18" ry="6" fill="url(#brassGrad)" />

      {/* Lower Base Tiers */}
      <ellipse cx="50" cy="190" rx="26" ry="7" fill="url(#brassGrad)" />
      <ellipse cx="50" cy="205" rx="34" ry="9" fill="url(#brassGrad)" />
      <path d="M 12 225 C 12 215 88 215 88 225 L 82 235 L 18 235 Z" fill="url(#brassGrad)" />
      <ellipse cx="50" cy="235" rx="36" ry="5" fill="#583516" />
    </svg>
  );
};
