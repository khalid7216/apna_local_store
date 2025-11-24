import React, { useState, useEffect } from 'react';

function Banner() {
  const images = [
    'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
   
    'https://images.unsplash.com/photo-1758520388397-bf53b6e11bba?q=80&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1758520388397-bf53b6e11bba?q=80&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    // Placeholder ko bhi standard size par rakha
    'https://images.unsplash.com/photo-1758520388397-bf53b6e11bba?q=80&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
      );
    }, 5000); 

    return () => clearInterval(interval); 
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
    <div className="relative w-full overflow-hidden mt-4 mb-8">
      <div 
        className="flex transition-transform ease-out duration-500" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          // Parent div mein bg-color lagaya taaki khali space fill ho jaaye
          <div key={index} className="w-full flex-shrink-0 bg-gray-900"> 
            <img 
              src={image} 
              alt={`Banner ${index + 1}`} 
              // FIX: object-contain lagaya (No Cutting) aur height ko behtar set kiya.
              className="w-full h-48 md:h-64 lg:h-80 object-contain" 
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
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