import React from 'react';
import './VineDecoration.css';

const VineDecoration = ({ position }) => {
  return (
    <div className={`vine-decoration vine-${position}`}>
      <svg
        width="80"
        height="300"
        viewBox="0 0 80 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 0 C20 50, 60 100, 40 150 C20 200, 60 250, 40 300"
          stroke="#ffffff"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Leaves */}
        <path
          d="M35 45 Q40 35 45 45 Q40 55 35 45 Z"
          fill="#ffffff"
        />
        <path
          d="M35 115 Q40 105 45 115 Q40 125 35 115 Z"
          fill="#ffffff"
        />
        <path
          d="M35 185 Q40 175 45 185 Q40 195 35 185 Z"
          fill="#ffffff"
        />
        <path
          d="M35 255 Q40 245 45 255 Q40 265 35 255 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};

export default VineDecoration;
