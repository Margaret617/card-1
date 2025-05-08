import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [showNote, setShowNote] = useState(false);

  const toggleNote = () => {
    setShowNote(!showNote);
  };

  return (
    <section className="hero fade-slide-in">
      <h1 className="bouncing-text">Happy Mother's Day, Mom!</h1>
      <p>Celebrating the love, strength, and beauty of you.</p>
      <button className="note-button" onClick={toggleNote}>
        {showNote ? 'Hide Sweet Note' : 'Show Sweet Note'}
      </button>
      <div className={`sweet-note-container ${showNote ? 'expanded' : ''}`}>
        <div className="sweet-note">
          <h3>A Sweet Note</h3>
          <p>
            Dear Mum,
            <br /><br />
            Your smile—wow. It’s one of those things that just makes everything feel lighter. Softer. Like suddenly the world isn't so heavy. I don’t think you know how much peace it brings, just seeing you happy.
            <br /><br />
            You give so much, effortlessly. Always helping, always showing up, always putting others first—even when no one’s watching or clapping. And somehow, you make it look easy. That kind of heart? Rare. Priceless.
            <br /><br />
            Your cooking? Elite. Healing, even. But more than that, it’s the way you love—quietly, consistently, without needing a thank you—that stays with us.
            <br /><br />
            We might not say “I love you” all the time, but please know this: we feel it, every single day. In the way you care. In the space you fill in this home. You are deeply appreciated, and we are so lucky to have you.
            <br /><br />
            Happy Mother’s Day. We see you. We love you. We always will.
            <br /><br />
            With all our love,<br />
            Your Family ❤️
          </p>
        </div>
      </div>
      <div className="hero-flowers">
        🌸🌷🌹💐🌺
      </div>
      <section className="about-mom fade-slide-in">
        <h2>What I Love About You</h2>
        <ul className="love-list">
          <li>Your kindness and warmth</li>
          <li>Your endless support</li>
          <li>Your beautiful smile</li>
          <li>Your strength and courage</li>
        </ul>
      </section>
    </section>
  );
};

export default Hero;