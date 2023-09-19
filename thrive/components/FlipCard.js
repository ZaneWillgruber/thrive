import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-64 h-96 mx-auto">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front Side */}
        <div
          key="front"
          className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 text-center cursor-pointer"
          onClick={handleCardClick}
        >
          <h2 className="text-4xl font-semibold">Front Side</h2>
          <p className="text-lg mt-4">Click to flip</p>
        </div>

        {/* Back Side */}
        <div
          key="back"
          className="w-full h-full bg-gray-300 text-gray-800 p-6 text-center cursor-pointer"
          onClick={handleCardClick}
        >
          <h2 className="text-4xl font-semibold">Back Side</h2>
          <p className="text-lg mt-4">Click to flip back</p>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
