import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import reviewimage1 from '../assets/Review-image1.png';
import reviewimage2 from '../assets/reveiw-image2.png';
import reviewimage3 from '../assets/review-image3.png';

const testimonials = [
  {
    name: 'Grace Achieng',
    role: 'Restaurant Owner, Karen',
    avatar: reviewimage1,
    content:
      'I needed deep cleaning after renovations, and Stardash exceeded my expectations. They made my space sparkle like new. Highly recommended!',
  },
  {
    name: 'John Mwangi',
    role: 'CEO, Acme Corp',
    avatar: reviewimage2,
    content:
      'Our offices have never looked better. The team was friendly, punctual, and super thorough. Five stars!',
  },
  {
    name: 'Maria',
    role: 'Homeowner, Westlands',
    avatar: reviewimage3,
    content:
      'I book every month now, these people are absolute pros. My home always smells fresh and looks spotless.',
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const transition = {
  x: { type: 'spring', stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
};

export default function TestimonialCarousel() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);
  const count = testimonials.length;

  const paginate = useCallback(
    (newDirection) => {
      setDirection(newDirection);
      setPage((prev) => (prev + newDirection + count) % count);
    },
    [count]
  );

  const goTo = useCallback(
    (idx) => {
      setDirection(idx > page ? 1 : -1);
      setPage(idx);
    },
    [page]
  );

  
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => paginate(1), 5000);
  }, [paginate]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const handlePrev = () => {
    paginate(-1);
    startTimer();
  };

  const handleNext = () => {
    paginate(1);
    startTimer();
  };

  const handleDot = (idx) => {
    goTo(idx);
    startTimer();
  };

  const { name, role, avatar, content } = testimonials[page];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Don't just take our word for it, hear from our satisfied customers
          across Nairobi
        </p>
      </div>

     
      <div className="relative max-w-3xl mx-auto mt-12 px-10">
        <button
          onClick={handlePrev}
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-100 focus:outline-none"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

 
        <div className="relative overflow-hidden" style={{ minHeight: '240px' }}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="bg-white rounded-2xl shadow-lg p-8 text-center w-full"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400 mx-0.5" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic leading-relaxed mb-6">
                &ldquo;{content}&rdquo;
              </p>

              {/* Avatar & name */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={avatar}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-800">{name}</div>
                  <div className="text-gray-500 text-sm">{role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-gray-100 focus:outline-none"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDot(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none ${
              idx === page ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}