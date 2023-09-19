import React from 'react';

const HeroSection = () => {
  const handleButtonClick = () => {
    // Add your button click logic here
    alert('Button Clicked!');
  };

  return (
    <div className="bg-hero-gradient-end text-white py-16 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-7xl font-semibold mb-4">Why Join?</h1>
        <p className="text-lg mb-8">
        Life is not something we should take for granted. We all want to make the most of the time we have here on earth, but it’s easy for us to get distracted. Thrive was created to help people live their best lives.
        </p>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 hover:text-gray-800 py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
          onClick={handleButtonClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
