import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptop,
  FaClock,
  FaBroom,
  FaHeart,
} from 'react-icons/fa';

const steps = [
  {
    icon: FaLaptop,
    title: 'Book Online',
    description:
      'Schedule your cleaning service through our easy online booking bot or give us a call.',
  },
  {
    icon: FaClock,
    title: 'We Arrive on Time',
    description:
      'Our professional team arrives punctually with all the necessary equipment and eco-friendly supplies.',
  },
  {
    icon: FaBroom,
    title: 'We Clean Meticulously',
    description:
      'We clean every corner with attention to detail, using proven techniques and quality products.',
  },
  {
    icon: FaHeart,
    title: 'You Enjoy a Pristine Space',
    description:
      "Relax in your beautifully cleaned space and enjoy the fresh, spotless environment we've created.",
  },
];

// Variants
const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, when: 'beforeChildren' },
  },
};
const fillVariants = {
  hidden: { width: 0 },
  visible: { width: '100%', transition: { duration: 2, ease: 'easeOut' } },
};
const iconVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
  hover: { rotateY: 360, scale: 1.2, transition: { duration: 0.6 } },
};
const cardsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.03 },
};

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold">
          How It <span className="text-blue-600">Works</span>
        </h2>
        <p className="mt-2 text-gray-600">
          From booking to blissful shine—our 4-step process makes clean easy
        </p>
      </div>

      {/* Desktop timeline */}
      <motion.div
        className="hidden lg:block relative max-w-6xl mx-auto px-4 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={timelineVariants}
      >
        {/* Track */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-1 bg-gray-200 rounded-full" />
          <motion.div
            className="absolute left-0 h-1 bg-blue-600 rounded-full"
            variants={fillVariants}
          />
        </div>

        {/* Icons */}
        <div className="relative flex justify-between">
          {steps.map(({ icon: Icon }, idx) => (
            <motion.div
              key={idx}
              className="bg-blue-50 p-4 rounded-full"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Icon className="w-6 h-6 text-blue-600" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Step cards */}
      <motion.div
        className="mt-16 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardsContainer}
      >
        {steps.map(({ icon: Icon, title, description }, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Icon on mobile */}
            <div className="block lg:hidden bg-blue-50 p-4 rounded-full mb-4">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
