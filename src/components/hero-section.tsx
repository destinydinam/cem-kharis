"use client";

import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Heart, Play, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Slider images data
const sliderImages = [
  {
    id: 1,
    src: "/images/slider-1.jpg",
    alt: "Church Service Slide 1",
  },
  {
    id: 2,
    src: "/images/slider-2.jpg",
    alt: "Church Service Slide 2",
  },
  {
    id: 3,
    src: "/images/slider-3.jpg",
    alt: "Church Service Slide 3",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality - changes slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Manual navigation functions
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Carousel Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${sliderImages[currentSlide].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-10" />

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-4 mb-30">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-serif">
                CEM-Kharis Temple
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We&apos;re helping people reconnect with God as a Family!
            </motion.p>
          </div>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="church-button-primary text-lg px-8 py-4 shadow-2xl hover:shadow-primary/25 transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <Heart className="mr-2 h-5 w-5" />
                Join Our Family Today
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-xl"
              asChild
            >
              <Link
                href="https://youtu.be/2BU9oZ0VZ6Y"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Live Service
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
