import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import logo from "./assets/logo.png";
import Home from "./pages/Home.jsx";
import HomeCleaning from "./pages/HomeCleaning.jsx";
import OfficeCleaning from "./pages/OfficeCleaning.jsx";
import BookingBot from './components/BookingBot.jsx';

const NAV_LINKS = [
  { label: "Home",         sectionId: "Hero" },
  { label: "Services",     sectionId: "ServicesSection" },
  { label: "How it works", sectionId: "HowItWorksSection" },
  { label: "Testimonials", sectionId: "TestimonialCarousel" },
  { label: "Contact",      sectionId: "QuoteSection" },
];

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hideMainLayout = location.pathname === "/editor";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavigation = (sectionId = null) => {
    closeMobileMenu();
    if (!sectionId) {
      navigate("/");
      return;
    }
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 150);
    }
  };

  const logoBtn =
    "flex items-center bg-transparent border-none outline-none focus:outline-none focus:ring-0 p-0";

  const btnBase =
    "px-3 py-2 text-base font-medium rounded-lg border-none outline-none focus:outline-none transition duration-200 ease-out";

  return (
    <div className="app min-h-screen">
      {!hideMainLayout && (
        <>
          {/* HEADER */}
          <header className="fixed top-0 left-0 right-0 z-50">
            <nav
              className={`transition-all duration-500 ease-in-out px-6 py-7 ${
                isScrolled
                  
                  ? "mt-4 mx-auto max-w-6xl bg-white/95 backdrop-blur-lg shadow-lg border border-gray-200 rounded-2xl"
                  
                  : "w-full bg-transparent border-b border-transparent"
              }`}
            >
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <button onClick={() => handleNavigation()} className={logoBtn}>
                  <img
                    className="h-10 w-90 object-contain"
                    src={logo}
                    alt="Stardash Logo"
                  />
                </button>

                {/* Desktop nav */}
                <div className="hidden lg:flex flex-grow justify-center space-x-8">
                  {NAV_LINKS.map(({ label, sectionId }) => (
                    <button
                      key={sectionId}
                      onClick={() => handleNavigation(sectionId)}
                      className={`${btnBase} bg-transparent hover:-translate-y-0.5 hover:scale-105 ${
                        isScrolled
                          ? "text-gray-900 hover:bg-blue-100 hover:text-blue-600"
                          : "text-white drop-shadow hover:bg-white/20"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex">
                  <button
                    onClick={() => handleNavigation("QuoteSection")}
                    className={`${btnBase} hover:scale-105 active:scale-95 ${
                      isScrolled
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white text-blue-600 hover:bg-blue-50 shadow"
                    }`}
                  >
                    Get a Free Quote
                  </button>
                </div>

                {/* Hamburger */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setIsMobileMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                    className={`p-2 rounded-lg focus:outline-none transition ${
                      isMobileMenuOpen
                        ? "text-blue-600 bg-blue-50"
                        : isScrolled
                        ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    {isMobileMenuOpen ? "✕" : "☰"}
                  </button>
                </div>
              </div>

              {/* Mobile menu — always solid white so it's readable regardless of hero */}
              {isMobileMenuOpen && (
                <div className="lg:hidden mt-2 px-6 pb-4 space-y-2 border-t border-white/20 bg-white/95 backdrop-blur-lg rounded-2xl animate-slide-down">
                  {NAV_LINKS.map(({ label, sectionId }) => (
                    <button
                      key={sectionId}
                      onClick={() => handleNavigation(sectionId)}
                      className={`${btnBase} w-full text-left text-gray-700 bg-transparent hover:bg-blue-100 hover:text-blue-600`}
                    >
                      {label}
                    </button>
                  ))}
                  <button
                    onClick={() => handleNavigation("QuoteSection")}
                    className={`${btnBase} w-full text-left bg-blue-600 text-white hover:bg-blue-700`}
                  >
                    Get a Free Quote
                  </button>
                </div>
              )}
            </nav>
          </header>

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/254723531085?text=Hi%2C%20I%20need%20help%20with%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 bottom-6 right-6 flex items-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-green-600 group"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2.003c-5.513 0-9.997 4.484-9.997 10.001 0 1.767.464 3.484 1.348 5.001l-1.437 5.25 5.39-1.415c1.449.793 3.086 1.165 4.696 1.165h.002c5.512 0 9.998-4.484 9.998-10.001s-4.486-10.001-10-10.001zm0 18.4c-1.389 0-2.756-.369-3.956-1.067l-.283-.165-3.198.84.852-3.09-.184-.295c-.817-1.306-1.245-2.823-1.245-4.365 0-4.418 3.58-8.001 8.001-8.001s8.001 3.583 8.001 8.001c0 4.42-3.583 8.002-8.001 8.002zm4.385-5.975c-.238-.119-1.403-.692-1.621-.77-.217-.079-.375-.119-.533.119s-.612.77-.75.929c-.139.158-.276.178-.514.06-.238-.119-1.003-.369-1.91-1.178-.706-.63-1.183-1.41-1.321-1.648-.138-.238-.015-.366.104-.484.107-.106.238-.277.356-.415.12-.139.158-.238.238-.396.079-.158.04-.297-.02-.415-.06-.119-.533-1.286-.729-1.76-.192-.46-.387-.398-.533-.406-.138-.008-.297-.01-.455-.01s-.416.06-.634.297c-.217.238-.826.808-.826 1.972s.846 2.288.964 2.448c.119.158 1.66 2.54 4.023 3.557.562.242 1 .387 1.341.495.563.179 1.075.154 1.48.093.451-.067 1.403-.573 1.602-1.126.197-.554.197-1.03.139-1.127-.058-.099-.217-.158-.455-.277z" />
            </svg>
            <span className="hidden sm:inline group-hover:scale-105 transition-transform">
              Need help?
            </span>
          </a>

          {/* ROUTES — no pt-24, hero bleeds up behind the transparent nav */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/homecleaning" element={<HomeCleaning />} />
              <Route path="/OfficeCleaning" element={<OfficeCleaning />} />
            </Routes>
          </main>
          <BookingBot />
        </>
      )}
    </div>
  );
};

export default App;