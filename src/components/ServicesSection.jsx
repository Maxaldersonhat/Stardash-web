import React from 'react';
import { FaHome, FaBuilding, FaMagic } from 'react-icons/fa';
import './ServicesSection.css'; 

const services = [
  {
    icon: FaHome,
    title: 'Home Cleaning',
    description:
      'Complete residential cleaning services for your home, from regular maintenance to deep cleaning sessions.',
    features: [
      'Regular weekly/bi-weekly cleaning',
      'Kitchen & bathroom deep clean',
      'Dusting & vacuuming',
      'Window cleaning',
    ],
  },
  {
    icon: FaBuilding,
    title: 'Office Cleaning',
    description:
      'Professional commercial cleaning to keep your workspace spotless and productive for your team.',
    features: [
      'Daily office maintenance',
      'Conference room cleaning',
      'Restroom sanitization',
      'Trash removal & recycling',
    ],
  },
  {
    icon: FaMagic,
    title: 'Deep/Specialised Cleaning',
    description:
      'Intensive cleaning services for move-ins, post-construction, and special occasions.',
    features: [
      'Move-in/move-out cleaning',
      'Post-construction cleanup',
      'Carpet & upholstery cleaning',
      'One-time deep cleaning',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="mt-2 text-gray-600">
          From homes to offices, we deliver exceptional cleaning services tailored to your needs.
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto grid gap-8 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description, features }) => (
          <div
            key={title}
            className="
              service-card group
              bg-white rounded-2xl shadow-lg p-6 flex flex-col
              transform transition duration-300 ease-out
              hover:-translate-y-2 hover:scale-105 hover:shadow-2xl
            "
          >
            
            <div className="icon-wrapper bg-blue-50 rounded-full p-4 inline-block mb-4">
              <div className="icon-inner">
                <Icon
                  className="
                    w-6 h-6 text-blue-500
                    transition-colors duration-300
                    group-hover:text-blue-600
                  "
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{description}</p>
            <ul className="space-y-2 list-disc list-inside text-gray-700 text-sm flex-1">
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
