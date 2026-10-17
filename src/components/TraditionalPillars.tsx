import React from 'react';

/**
 * Traditional Carved Wooden Temple Pillar (மரத்தூண்)
 * Inspired by ancient Dravidian temple architecture in Chidambaram and Chettinad heritage.
 * Flanked with lush banana leaves at the capital as in the reference invitation image.
 */

interface PillarProps {
  side: 'left' | 'right';
  className?: string;
}

export const TraditionalPillar: React.FC<PillarProps> = ({ side, className = '' }) => {
  const isLeft = side === 'left';

  return (
    <div
      className={`relative h-full flex flex-col items-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full drop-shadow-xl ${isLeft ? '' : 'scale-x-[-1]'}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="teakWoodGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4A260D" />
            <stop offset="25%" stopColor="#70451F" />
            <stop offset="50%" stopColor="#9C6430" />
            <stop offset="75%" stopColor="#70451F" />
            <stop offset="100%" stopColor="#3B1E0A" />
          </linearGradient>
          <linearGradient id="goldCarving" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9E7430" />
            <stop offset="50%" stopColor="#ECC880" />
            <stop offset="100%" stopColor="#9E7430" />
          </linearGradient>
          <linearGradient id="bananaLeafGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6DB33F" />
            <stop offset="50%" stopColor="#477A32" />
            <stop offset="100%" stopColor="#20572C" />
          </linearGradient>
          <filter id="pillarShadow" x="-20%" y="-10%" width="140%" height="120%">
            <feDropShadow dx={isLeft ? 4 : -4} dy="6" stdDeviation="5" floodColor="#20572C" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 1. Lush Banana Leaf Arching over the pillar top corner */}
        <g transform="translate(10, 5)">
          <path
            d="M 20 120 C -15 80 -10 20 60 0 C 110 -10 145 25 155 70 C 135 75 105 60 70 85 C 45 100 30 115 20 120 Z"
            fill="url(#bananaLeafGrad)"
          />
          <path
            d="M 60 0 C 70 30 65 65 20 120"
            stroke="#99D959"
            strokeWidth="2.5"
          />
          {/* Banana leaf vein lines */}
          <path d="M 55 20 L 75 32 M 52 40 L 82 50 M 45 60 L 78 72 M 35 80 L 62 92 M 28 100 L 45 108" stroke="#99D959" strokeWidth="1.2" opacity="0.75" />
        </g>

        {/* 2. Pillar Capital: Carved Teak Bracket & Beam (போதிகை) */}
        <g filter="url(#pillarShadow)">
          {/* Top horizontal beam tier */}
          <rect x="10" y="80" width="140" height="20" rx="3" fill="url(#teakWoodGrad)" />
          <rect x="15" y="85" width="130" height="4" fill="url(#goldCarving)" opacity="0.6" />

          {/* Stepped lotus corbel capital */}
          <path
            d="M 20 100 L 140 100 L 125 135 L 35 135 Z"
            fill="url(#teakWoodGrad)"
          />
          {/* Lotus petal carvings on corbel */}
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={`corbel-petal-${i}`}
              d={`M ${42 + i * 14} 135 C ${40 + i * 14} 115 ${52 + i * 14} 115 ${50 + i * 14} 135 Z`}
              fill="#522D10"
              stroke="url(#goldCarving)"
              strokeWidth="1"
            />
          ))}

          {/* Decorative round boss medallion with golden rosette */}
          <circle cx="80" cy="165" r="24" fill="url(#teakWoodGrad)" stroke="#3B1E0A" strokeWidth="2" />
          <circle cx="80" cy="165" r="18" fill="url(#goldCarving)" />
          <circle cx="80" cy="165" r="10" fill="#70451F" />
          <circle cx="80" cy="165" r="4" fill="#ECC880" />

          {/* Upper shaft transition ring */}
          <rect x="35" y="195" width="90" height="15" rx="3" fill="url(#teakWoodGrad)" />
          <line x1="38" y1="202" x2="122" y2="202" stroke="url(#goldCarving)" strokeWidth="2" />

          {/* 3. Main Pillar Shaft (கால்) - Intricately fluted with carved horizontal bands */}
          {/* Upper Fluted Shaft */}
          <rect x="42" y="210" width="76" height="150" fill="url(#teakWoodGrad)" />
          {/* Flute ridges */}
          <line x1="52" y1="210" x2="52" y2="360" stroke="#9C6430" strokeWidth="2" />
          <line x1="62" y1="210" x2="62" y2="360" stroke="#3B1E0A" strokeWidth="2" />
          <line x1="72" y1="210" x2="72" y2="360" stroke="#9C6430" strokeWidth="3" />
          <line x1="80" y1="210" x2="80" y2="360" stroke="#ECC880" strokeWidth="2" />
          <line x1="88" y1="210" x2="88" y2="360" stroke="#9C6430" strokeWidth="3" />
          <line x1="98" y1="210" x2="98" y2="360" stroke="#3B1E0A" strokeWidth="2" />
          <line x1="108" y1="210" x2="108" y2="360" stroke="#9C6430" strokeWidth="2" />

          {/* Mid-shaft decorative relief band with Yali / floral carving */}
          <g transform="translate(30, 360)">
            <rect x="0" y="0" width="100" height="30" rx="4" fill="url(#teakWoodGrad)" />
            <rect x="5" y="5" width="90" height="20" fill="#3B1E0A" />
            <ellipse cx="50" cy="15" rx="12" ry="8" fill="url(#goldCarving)" />
            <ellipse cx="20" cy="15" rx="8" ry="6" fill="url(#goldCarving)" />
            <ellipse cx="80" cy="15" rx="8" ry="6" fill="url(#goldCarving)" />
          </g>

          {/* Lower Shaft */}
          <rect x="42" y="390" width="76" height="210" fill="url(#teakWoodGrad)" />
          <line x1="52" y1="390" x2="52" y2="600" stroke="#9C6430" strokeWidth="2" />
          <line x1="62" y1="390" x2="62" y2="600" stroke="#3B1E0A" strokeWidth="2" />
          <line x1="80" y1="390" x2="80" y2="600" stroke="#ECC880" strokeWidth="2" />
          <line x1="98" y1="390" x2="98" y2="600" stroke="#3B1E0A" strokeWidth="2" />
          <line x1="108" y1="390" x2="108" y2="600" stroke="#9C6430" strokeWidth="2" />

          {/* Hanging brass temple bell from mid pillar */}
          <g transform="translate(120, 370)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="url(#goldCarving)" strokeWidth="2" />
            <path d="M -8 40 C -8 52 -16 60 -18 64 L 18 64 C 16 60 8 52 8 40 Z" fill="url(#goldCarving)" />
            <circle cx="0" cy="68" r="4" fill="#C6A15B" />
          </g>

          {/* Lower Decorative Collar Rings */}
          <ellipse cx="80" cy="610" rx="48" ry="12" fill="url(#teakWoodGrad)" />
          <ellipse cx="80" cy="610" rx="42" ry="8" stroke="url(#goldCarving)" strokeWidth="2" />

          <ellipse cx="80" cy="635" rx="55" ry="14" fill="url(#teakWoodGrad)" />
          <ellipse cx="80" cy="635" rx="48" ry="9" stroke="url(#goldCarving)" strokeWidth="2" />

          {/* 4. Pillar Pedestal Base (பாதம் / உபபீடம்) with Lotus Petals */}
          <path
            d="M 18 650 L 142 650 L 152 720 L 8 720 Z"
            fill="url(#teakWoodGrad)"
          />
          {/* Carved lotus petals on base */}
          {Array.from({ length: 7 }).map((_, i) => (
            <path
              key={`base-petal-${i}`}
              d={`M ${18 + i * 18} 720 C ${16 + i * 18} 670 ${32 + i * 18} 670 ${30 + i * 18} 720 Z`}
              fill="#522D10"
              stroke="url(#goldCarving)"
              strokeWidth="1.2"
            />
          ))}

          {/* Bottom ground plinth */}
          <rect x="0" y="720" width="160" height="40" rx="4" fill="url(#teakWoodGrad)" />
          <rect x="6" y="728" width="148" height="6" fill="url(#goldCarving)" opacity="0.7" />
          <rect x="0" y="760" width="160" height="40" fill="#3B1E0A" />
        </g>
      </svg>
    </div>
  );
};
