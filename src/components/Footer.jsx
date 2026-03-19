import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const QUICK_LINKS = [
  { label: 'Home',         sectionId: 'Hero' },
  { label: 'Services',     sectionId: 'ServicesSection' },
  { label: 'How it works', sectionId: 'HowItWorksSection' },
  { label: 'Testimonials', sectionId: 'TestimonialCarousel' },
  { label: 'Contact',      sectionId: 'QuoteSection' },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleQuickLink = (sectionId) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  };

  return (
    <footer className="bg-blue-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div className="space-y-4">
          <img src={logo} alt="Stardash Logo" className="h-20 w-70" />
          <p className="text-sm leading-relaxed">
            Kenya's new standard in sparkling clean. Professional cleaning services
            across Nairobi with eco-friendly products and guaranteed satisfaction.
          </p>
          <div className="flex space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition">
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition">
              <FaTwitter className="w-3.5 h-3.5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition">
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition">
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/homecleaning"     className="hover:text-white transition">Home Cleaning</Link></li>
            <li><Link to="/OfficeCleaning"   className="hover:text-white transition">Office Cleaning</Link></li>
            <li><Link to="/Deepcleaning"     className="hover:text-white transition">Deep Cleaning</Link></li>
            <li><Link to="/postconstruction" className="hover:text-white transition">Post Construction</Link></li>
            <li><Link to="/Move-in/Move-out" className="hover:text-white transition">Move-in / Move-out</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {QUICK_LINKS.map(({ label, sectionId }) => (
              <li key={sectionId}>
                <button
                  onClick={() => handleQuickLink(sectionId)}
                  className="hover:text-white transition text-left bg-transparent focus:outline-none border-none p-0"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-400 shrink-0 rotate-90" />
              <span>+254 716 533 478</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400 shrink-0" />
              <span>info@stardash.co.ke</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-400 shrink-0 mt-0.5" />
              <span>Nairobi County, Kenya</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Stardash Services. All rights reserved.&nbsp;&nbsp;
        <span className="hover:text-gray-300 cursor-pointer transition">Privacy Policy</span>
        &nbsp;|&nbsp;
        <span className="hover:text-gray-300 cursor-pointer transition">Terms of Service</span>
        &nbsp;|&nbsp;
        <span className="hover:text-gray-300 cursor-pointer transition">Cookie Policy</span>
      </div>
    </footer>
  );
}