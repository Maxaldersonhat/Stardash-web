import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer.jsx';
import Deepcleaning from '../assets/deep-clean.png'; 
import Basiccleaning from '../assets/basic-image.png';
import Premuimclean from '../assets/premuim-clean.png'; 

const packages = [
  {
    title: 'Basic Clean',
    duration: '2–3 hrs',
    image: Basiccleaning,
  },
  {
    title: 'Deep Clean',
    duration: '4–5 hrs',
    image: Deepcleaning, 
  },
  {
    title: 'Premium Clean',
    duration: '6–7 hrs',
    image: Premuimclean,
  },
];

const HomeCleaning = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleOpenModal = (pkgTitle) => {
    setSelectedPackage(pkgTitle);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPackage('');
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white w-full max-w-md rounded-lg p-6 shadow-lg relative"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">
              Book: <span className="text-blue-600">{selectedPackage}</span>
            </h3>
            <form>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Preferred Date</label>
                <input
                  type="date"
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <motion.section
        className="py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Sparkling <span className="text-blue-600">Home Cleaning</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Affordable, flexible, and reliable cleaning solutions.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </motion.section>

      {/* Packages */}
      <motion.section
        className="py-16 px-6 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Choose Your <span className="text-blue-600">Package</span>
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Find the perfect plan for your home.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{pkg.title}</h3>
                <p className="text-sm text-gray-500 mb-4">🕒 {pkg.duration}</p>
                <button
                  onClick={() => handleOpenModal(pkg.title)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Select Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section with scroll animation */}
      <motion.section
        className="py-20 px-6 bg-blue-600 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Let’s Sparkle Your Home!</h2>
          <p className="mb-6">Book now and come home to a fresh, clean space.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-blue-100 transition">
            Get Free Quote
          </button>
        </div>
      </motion.section>
      < Footer />
    </div>
  );
};

export default HomeCleaning;

