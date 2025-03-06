
import { motion } from 'framer-motion';
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const HeroSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const images = [
    "/uploads/1.jpg",
    "/uploads/2.jpg",
    "/uploads/3.jpg",
  ];


  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Automatically change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (<div className="container relative z-10 px-4 md:px-6 flex flex-col md:flex-row items-center pt-20">
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} className="w-full rounded-md flex-shrink-0" />
        ))}
      </motion.div>
      {/* <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full">
        <ChevronLeft className="text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full">
        <ChevronRight className="text-white" />
      </button> */}
    </div>
  </div>
  );
};

export default HeroSection;

