import React from 'react';

function HeroVideo() {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
        poster="poster.jpg" // Add a poster image for mobile devices
      >
        <source src="../videos/hero_vid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Live Your Best Life</h1>
        <p className="text-lg md:text-xl text-center">Thrive is a three-in-one training system focused on helping you live a happier, more fulfilling life. In order to change our lives into what we want them to be, we need to change how we’re living. Change is really just a two-part process. First is knowledge, followed by application. We need to know and understand what makes a good life and what our goals for our life should be. After that, we need to apply that knowledge in our lives.</p>
      </div>
    </div>
  );
}

export default HeroVideo;
