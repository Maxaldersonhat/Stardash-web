import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function QuoteSection() {
  return (
    <section id="QuoteSection" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-8">
        <h2 className="text-4xl font-bold">
          Get Your <span className="text-blue-600">Free Quote</span>
        </h2>
        <p className="text-gray-600 mt-2">Questions? We're here to help—reach out anytime!</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <form className="space-y-4 bg-white shadow-lg rounded-2xl p-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Tell us about your cleaning needs..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
          >
            Get My Free Quote
          </button>
        </form>

        {/* Contact Info + Map */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaPhone className="text-blue-600 text-xl mt-1 shrink-0 rotate-90" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-600">+254 716 533 478</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-blue-600 text-xl mt-1 shrink-0" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-600">info@stardash.co.ke</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-600 text-xl mt-1 shrink-0" />
                <div>
                  <div className="font-medium">Service Area</div>
                  <div className="text-gray-600">Nairobi County</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="text-blue-600 text-xl mt-1 shrink-0" />
                <div>
                  <div className="font-medium">Business Hours</div>
                  <div className="text-gray-600">
                    Mon–Sat: 7:00 AM – 7:00 PM<br />
                    Sunday: Emergency calls only
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden">
            <iframe
              title="NextGen Mall Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.9543830318938!2d36.83542651619911!3d-1.3117402020219019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f113bd5f56505%3A0x6fffc207fcd80c1a!2sNextgen%20Mall!5e0!3m2!1sen!2ske!4v1629090783911!5m2!1sen!2ske"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full h-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
}