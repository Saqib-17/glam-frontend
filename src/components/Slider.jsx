import React, { useState } from 'react';

const Slider = () => {
  const slides = [
    'https://i.ibb.co.com/xLV9xDg/Product-1.webp',
    'https://i.ibb.co.com/WPRR3CZ/product-2.jpg',
    'https://i.ibb.co.com/ZdwQKSS/product-3.jpg',
    'https://i.ibb.co.com/P1fh7qK/product-4.webp',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform ${
            index === currentSlide ? 'block' : 'hidden'
          }`}
        >
          <img src={src} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        </div>
      ))}
      <button
        onClick={() => changeSlide(-1)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded"
      >
        ❮
      </button>
      <button
        onClick={() => changeSlide(1)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded"
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
