import React from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  return (
    <div className="background-animation">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="petal" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 10}s`, animationDuration: `${5 + Math.random() * 5}s` }} />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
