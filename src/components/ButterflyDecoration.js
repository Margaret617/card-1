import React from 'react';
import './ButterflyDecoration.css';

const ButterflyDecoration = ({ position }) => {
  return (
    <div className={`butterfly-decoration butterfly-${position}`}>
      <svg
        width="80"
        height="300"
        viewBox="0 0 80 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Butterfly body */}
        <ellipse cx="40" cy="150" rx="6" ry="20" fill="#ff69b4" />
        {/* Left wing */}
        <path
          d="M40 150 C10 100, 10 200, 40 250"
          fill="#ffb6c1"
          stroke="#ff69b4"
          strokeWidth="2"
        />
        {/* Right wing */}
        <path
          d="M40 150 C70 100, 70 200, 40 250"
          fill="#ffb6c1"
          stroke="#ff69b4"
          strokeWidth="2"
        />
        {/* Antennae */}
        <line x1="35" y1="130" x2="30" y2="110" stroke="#ff69b4" strokeWidth="2" />
        <line x1="45" y1="130" x2="50" y2="110" stroke="#ff69b4" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default ButterflyDecoration;
