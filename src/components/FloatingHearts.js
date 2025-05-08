import React from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
  return (
    <div className="floating-hearts">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="heart">❤️</span>
      ))}
    </div>
  );
};

export default FloatingHearts;
