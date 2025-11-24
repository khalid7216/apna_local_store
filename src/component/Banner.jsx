import React, { useState, useEffect } from 'react';

function Banner() {
  const images = [
    'https://via.placeholder.com/1200x400/FF5733/FFFFFF?text=Banner+1',
    'https://via.placeholder.com/1200x400/33FF57/FFFFFF?text=Banner+2',
    'https://via.placeholder.com/1200x400/3357FF/FFFFFF?text=Banner+3',
    'https://via.placeholder.com/1200x400/F4FF33/000000?text=Banner+4'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
      );
    }, 5000); // 5 seconds mein image change hogi

    return () => clearInterval(interval); // Component unmount hone par interval clear karein
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="flex transition-transform ease-out duration-500" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img 
              src={image} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-48 md:h-80 lg:h-96 object-cover" 
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons (Prev/Next) */}
      <button 
        onClick={goToPrev} 
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors focus:outline-none"
      >
        &#10094;
      </button>
      <button 
        onClick={goToNext} 
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors focus:outline-none"
      >
        &#10095;
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'} focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Banner;