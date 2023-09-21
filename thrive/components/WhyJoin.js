import React from 'react';

const HeroSection = ({ subject, info, hasButton, color }) => {
  const handleButtonClick = () => {
    // Add your button click logic here
    alert('Button Clicked!');
  };

  var classNames = 'py-16 px-4 text-center pb-0';

  switch (color) {
    case 'green':
      classNames += ' bg-hero-gradient-end text-white';
      break;
    case 'white':
      classNames += ' bg-white text-black';
      break;
  }

  const itemElements = info.map((item, index) => (
    <div>
      <p key={index}>{item}</p>
      <br />
    </div>
  ));

  return (
    <div className={classNames}>
      <div className="container mx-auto flex justify-center items-center flex-col">
        <h1 className="text-7xl font-semibold mb-4">{subject}</h1>
        <div className="text-lg mb-8 w-3/6">
          {itemElements}
        </div>
        {hasButton && (
          <button
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 hover:text-gray-800 py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={handleButtonClick}
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
