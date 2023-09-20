import React from 'react';

function HeroVideo() {
  return (
    <div className="hero-video relative">
      {/* Background Video */}
      <video
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
        poster="poster.jpg" // Add a poster image for mobile devices
      >
        <source src="../videos/hero_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="info-container">
        <h1 className="info-header text-5xl md:text-7xl font-bold ">Live Your Best Life</h1>
        <p className="info-subtext text-xl md:text-2xl max-w-3xl">Thrive is a three-in-one training system focused on helping you live a happier, more fulfilling life. In order to change our lives into what we want them to be, we need to change how we’re living. Change is really just a two-part process. First is knowledge, followed by application. We need to know and understand what makes a good life and what our goals for our life should be. After that, we need to apply that knowledge in our lives.</p>
      </div>
    </div>
  );
}

export default HeroVideo;
