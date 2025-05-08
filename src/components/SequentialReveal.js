import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import LoveList from './LoveList';
import SweetNote from './SweetNote';

const SequentialReveal = () => {
  const [step, setStep] = useState(1);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (step <= 3) {
      const fadeOutTimer = setTimeout(() => setFade(false), 7000);
      const nextStepTimer = setTimeout(() => {
        setStep(step + 1);
        setFade(true);
      }, 7500);
      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(nextStepTimer);
      };
    }
  }, [step]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
      {step === 1 && <div className={fade ? 'fade-slide-in' : 'fade-slide-out'}><Hero /></div>}
      {step === 2 && <div className={fade ? 'fade-slide-in' : 'fade-slide-out'}><LoveList /></div>}
      {step === 3 && <div className={fade ? 'fade-slide-in' : 'fade-slide-out'}><SweetNote /></div>}
    </div>
  );
};

export default SequentialReveal;
