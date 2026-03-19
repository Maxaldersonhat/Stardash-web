import React from 'react';
import heroBg from "../assets/hero-bg.png";

const STAR_POSITIONS = [
  { style: { top: '10%', left: '15%', animationDelay: '0s' } },
  { style: { top: '20%', right:'20%', animationDelay: '0.5s' } },
  { style: { top: '40%', left: '25%', animationDelay: '1s' } },
  { style: { bottom:'15%', left: '30%', animationDelay: '1.5s' } },
  { style: { bottom:'10%', right:'15%', animationDelay: '0.8s' } },
];

const Hero = () => (
  <section id="Hero" className="relative overflow-hidden min-h-screen w-full">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-blue-50/80" />
    </div>

    {/* Animated stars */}
    {STAR_POSITIONS.map((star, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        className="absolute w-8 h-8 text-blue-300 fill-current animate-bounce z-20 drop-shadow-lg"
        style={star.style}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}

    {/* Hero content — pt-28 so it clears the nav height */}
    <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 pt-28 pb-24 min-h-screen flex flex-col justify-center">
      <div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
        Proffessional Cleaning Services <br />
          <span className="text-blue-300">You Can Trust</span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-white/80 drop-shadow">
         Reliable, affordable cleaning for homes and businesses in Nairobi.
        </p>
        <div className="mt-8 flex flex-col justify-center items-center gap-4">
          <div className="px-6 py-3 text-white font-medium border-b-2 border-white/60 animate-pulse cursor-pointer hover:border-white transition">
            See All Services
          </div>
        </div>
        {/* Down-arrow bounce */}
        <div className="mt-12">
          <span className="block w-1 h-8 mx-auto bg-white/40 animate-bounce rounded" />
        </div>
      </div>
    </div>
  </section>
);

const Home = () => (
  <div className="min-h-screen">
    <Hero />
  </div>
);

export default Home;