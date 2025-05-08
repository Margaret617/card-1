import React from 'react';
import './PikachuAnimation.css';

const PikachuAnimation = () => {
  return (
    <div className="pikachu-container" aria-label="Cute Pikachu animation" role="img">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="100"
        height="100"
        className="pikachu-svg"
      >
        {/* Simplified Pikachu face */}
        <circle cx="32" cy="32" r="30" fill="#ffde00" stroke="#000" strokeWidth="2" />
        <circle cx="20" cy="25" r="5" fill="#000" />
        <circle cx="44" cy="25" r="5" fill="#000" />
        <circle cx="20" cy="25" r="2" fill="#fff" />
        <circle cx="44" cy="25" r="2" fill="#fff" />
        <path d="M20 45 Q32 55 44 45" stroke="#000" strokeWidth="3" fill="none" />
        <circle cx="15" cy="35" r="6" fill="#ff0000" />
        <circle cx="49" cy="35" r="6" fill="#ff0000" />
      </svg>
    </div>
  );
};

export default PikachuAnimation;
