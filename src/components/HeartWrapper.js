import React from 'react';

const HeartWrapper = ({ children, style }) => {
  return (
    <svg viewBox="0 0 100 90" style={{ width: '100%', height: 'auto', ...style }} preserveAspectRatio="xMidYMid meet">
      <defs>
        <clipPath id="heartClip" clipPathUnits="userSpaceOnUse">
          <path d="M50 15
                   C35 0, 0 25, 50 75
                   C100 25, 65 0, 50 15Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#heartClip)">
        <foreignObject x="0" y="0" width="100" height="90">
          <div style={{ width: '100%', height: '100%' }}>
            {children}
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};

export default HeartWrapper;
