import React from 'react';

interface MotifProps {
  className?: string;
}

/**
 * Twin roasted coffee beans in a delicate circular frame,
 * directly inspired by the top-left emblem of the physical Ameen Coffee menu.
 */
export const CoffeeBeanCrest: React.FC<MotifProps> = ({ className = 'w-14 h-14' }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle
      cx="40"
      cy="40"
      r="36"
      stroke="#D6B477"
      strokeOpacity="0.4"
      strokeWidth="1.2"
    />
    <circle
      cx="40"
      cy="40"
      r="31"
      stroke="#D6B477"
      strokeOpacity="0.2"
      strokeWidth="0.8"
      strokeDasharray="2 3"
    />
    {/* Left coffee bean */}
    <g transform="rotate(-22 31 41)">
      <ellipse
        cx="31"
        cy="41"
        rx="9.5"
        ry="13.5"
        fill="#332D27"
        stroke="#D6B477"
        strokeWidth="1.6"
      />
      <path
        d="M31 28.5C28.5 34 33.5 46 30.5 53.5"
        stroke="#D6B477"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>
    {/* Right coffee bean */}
    <g transform="rotate(18 49 39)">
      <ellipse
        cx="49"
        cy="39"
        rx="9.5"
        ry="13.5"
        fill="#252321"
        stroke="#D6B477"
        strokeWidth="1.6"
      />
      <path
        d="M49 26.5C46.5 32 51.5 44 48.5 51.5"
        stroke="#D6B477"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

/**
 * Top-down latte-art cup illustration in warm gold,
 * directly inspired by the top-right emblem of the physical Ameen Coffee menu.
 */
export const LatteCupBadge: React.FC<MotifProps> = ({ className = 'w-16 h-16' }) => (
  <svg
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Saucer outer rim */}
    <ellipse
      cx="50"
      cy="50"
      rx="38"
      ry="34"
      fill="#332D27"
      fillOpacity="0.6"
      stroke="#D6B477"
      strokeOpacity="0.45"
      strokeWidth="1.4"
    />
    {/* Cup handle on left (matching the physical menu photo) */}
    <path
      d="M17 48C10 48 8 55 13 59C16 61.5 21 60 24 57"
      stroke="#D6B477"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Cup rim */}
    <ellipse
      cx="51"
      cy="48"
      rx="29"
      ry="25"
      fill="#252321"
      stroke="#D6B477"
      strokeWidth="2"
    />
    {/* Crema swirls */}
    <ellipse
      cx="51"
      cy="48"
      rx="24"
      ry="20"
      stroke="#D6B477"
      strokeOpacity="0.55"
      strokeWidth="1.2"
    />
    <path
      d="M34 46C34 37 42 32 51 32C60 32 68 37 68 46C68 55 59 61 51 63C43 61 34 55 34 46Z"
      stroke="#D6B477"
      strokeOpacity="0.7"
      strokeWidth="1.2"
    />
    {/* Heart/rosette latte art center */}
    <path
      d="M51 56C51 56 41 49.5 41 43C41 39.8 43.5 37.5 46.5 37.5C48.5 37.5 50.1 38.6 51 40.2C51.9 38.6 53.5 37.5 55.5 37.5C58.5 37.5 61 39.8 61 43C61 49.5 51 56 51 56Z"
      fill="#D6B477"
      fillOpacity="0.85"
    />
  </svg>
);

/**
 * Botanical coffee-blossom corner line-art inspired by the corners of the physical menu.
 */
export const FloralCornerOrnament: React.FC<MotifProps> = ({
  className = 'w-24 h-24',
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M8 112C12 72 36 36 86 14"
      stroke="#D6B477"
      strokeOpacity="0.28"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    {/* Leaves & coffee blossoms */}
    <path
      d="M24 82C14 75 13 61 23 54C31 62 31 74 24 82Z"
      stroke="#D6B477"
      strokeOpacity="0.32"
      strokeWidth="1.2"
    />
    <path
      d="M42 58C31 49 32 34 44 28C51 37 50 50 42 58Z"
      stroke="#D6B477"
      strokeOpacity="0.32"
      strokeWidth="1.2"
    />
    <path
      d="M52 66C63 68 74 60 76 48C64 46 55 54 52 66Z"
      stroke="#D6B477"
      strokeOpacity="0.28"
      strokeWidth="1.2"
    />
    <path
      d="M28 92C40 95 52 88 56 76C44 73 33 80 28 92Z"
      stroke="#D6B477"
      strokeOpacity="0.25"
      strokeWidth="1.2"
    />
    <circle cx="67" cy="24" r="5" stroke="#D6B477" strokeOpacity="0.35" strokeWidth="1.2" />
    <circle cx="84" cy="15" r="3.5" fill="#D6B477" fillOpacity="0.3" />
  </svg>
);

/**
 * Centered ornamental divider used beneath section titles.
 */
export const OrnamentalDivider: React.FC<MotifProps> = ({ className = '' }) => (
  <div
    className={`flex items-center justify-center gap-3 select-none ${className}`}
    aria-hidden="true"
  >
    <span className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent to-[#D6B477]/60" />
    <span className="w-1.5 h-1.5 rotate-45 bg-[#D6B477]/70" />
    <span className="w-2.5 h-2.5 rotate-45 border border-[#D6B477] bg-[#332D27]" />
    <span className="w-1.5 h-1.5 rotate-45 bg-[#D6B477]/70" />
    <span className="h-[1px] w-14 sm:w-24 bg-gradient-to-l from-transparent to-[#D6B477]/60" />
  </div>
);
