import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// Header component with language selection and stylish design
const Header = React.memo(({ isScrolled, showNavOrderOptions, setShowNavOrderOptions, isMenuOpen, setIsMenuOpen }) => {
  // State for controlling orbiting images visibility
  const [showImages, setShowImages] = useState(true);

  // Access language context
  const { language, setLanguage, translations } = useLanguage();

  // Define orbiting images for visual effect
  const orbitingImages = [
    {
      src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=150&auto=format&fit=crop',
      alt: 'Healthy Smoothie',
    },
    {
      src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=150&auto=format&fit=crop',
      alt: 'Fresh Salad',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=150&auto=format&fit=crop',
      alt: 'Balanced Meal',
    },
  ];

  // Handle "Get Started" button click to toggle dropdown
  const handleNavOrderClick = useCallback((e) => {
    e.stopPropagation();
    setShowNavOrderOptions(!showNavOrderOptions);
    setIsMenuOpen(false);
  }, [showNavOrderOptions, setIsMenuOpen]);

  // Handle language selection
  const handleLanguageChange = useCallback((lang) => {
    setLanguage(lang);
  }, [setLanguage]);

  // Rotate orbiting images
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(rotateInterval);
  }, []);

  // Hide orbiting images on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowImages(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on Escape key press
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && showNavOrderOptions) {
      setShowNavOrderOptions(false);
    }
  }, [showNavOrderOptions, setShowNavOrderOptions]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // List of supported languages
  const languages = ['English', 'Spanish', 'French', 'German', 'Arabic', 'Urdu'];

  return (
    // Navigation bar with dynamic background based on scroll
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-br from-gray-900/80 via-black/50 to-gray-800/80'} ${showImages ? 'h-48 md:h-20' : 'h-16'}`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 py-2">
        {/* Header content with logo and navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo section */}
          <div className="flex items-center space-x-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-16 h-16 object-contain animate-slideInLeft"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div
              className="w-16 h-16 bg-gradient-to-br from-orange-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse-glow"
              style={{ display: 'none' }}
            >
              <span className="text-white font-bold text-lg uppercase">F</span>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {translations[language].menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-semibold transition-colors animate-slideInUp ${isScrolled ? 'text-gray-700 hover:text-emerald-500' : 'text-white hover:text-orange-300'}`}
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </a>
            ))}
            {/* Get Started button and dropdown */}
            <div className="relative">
              <button
                onClick={handleNavOrderClick}
                className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-emerald-500/50"
                aria-haspopup="true"
                aria-expanded={showNavOrderOptions}
              >
                {translations[language].getStarted}
              </button>
              {showNavOrderOptions && (
                <div className="absolute right-0 mt-2 w-64 bg-gradient-to-br from-orange-400 to-emerald-500 rounded-lg shadow-xl z-[100] overflow-hidden animate-fadeInUp">
                  <div className="flex justify-between items-center px-4 py-2 bg-orange-500/50">
                    <h3 className="text-white font-semibold">{translations[language].exploreOptions}</h3>
                    <button
                      onClick={() => setShowNavOrderOptions(false)}
                      className="text-white hover:text-gray-200"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      window.location.href = '#calorie-tracker';
                      setShowNavOrderOptions(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-white font-semibold hover:bg-orange-500 transition-colors"
                  >
                    {translations[language].trackCalories}
                  </button>
                  <button
                    onClick={() => {
                      window.location.href = '#meal-planner';
                      setShowNavOrderOptions(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-white font-semibold hover:bg-emerald-600 transition-colors"
                  >
                    {translations[language].planMeals}
                  </button>
                </div>
              )}
            </div>
            {/* Language selector */}
            <div className="relative group">
              <button
                className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-emerald-500 text-white px-5 py-2 rounded-full hover:from-orange-500 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                aria-haspopup="true"
                aria-expanded={false}
              >
                <Globe className="w-5 h-5" />
                {language}
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-gradient-to-br from-orange-400 to-emerald-500 rounded-lg shadow-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className="block w-full text-left px-4 py-2 text-white font-semibold hover:bg-orange-500 transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'} p-2 rounded-full hover:bg-gray-200/50 transition-all duration-300`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setShowNavOrderOptions(false);
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Orbiting images section */}
        {showImages && (
          <div className="relative h-28 flex items-center justify-center mt-2 transition-opacity duration-500 animate-fadeInUp">
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-orange-400/20 to-emerald-500/20 shadow-2xl animate-spin-slow">
              <img
                src={orbitingImages[0].src}
                alt={orbitingImages[0].alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Available';
                }}
              />
              <div className="absolute -top-10 -left-10 w-16 h-16 animate-orbit-1">
                <div className="w-full h-full rounded-full overflow-hidden shadow-md">
                  <img
                    src={orbitingImages[0].src}
                    alt={orbitingImages[0].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150x150?text=Image+Not+Available';
                    }}
                  />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-14 h-14 animate-orbit-2">
                <div className="w-full h-full rounded-full overflow-hidden shadow-md">
                  <img
                    src={orbitingImages[1].src}
                    alt={orbitingImages[1].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150x150?text=Image+Not+Available';
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-12 h-12 animate-orbit-3">
                <div className="w-full h-full rounded-full overflow-hidden shadow-md">
                  <img
                    src={orbitingImages[2].src}
                    alt={orbitingImages[2].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150x150?text=Image+Not+Available';
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-10 h-10 animate-orbit-4">
                <div className="w-full h-full rounded-full overflow-hidden shadow-md">
                  <img
                    src={orbitingImages[0].src}
                    alt={orbitingImages[0].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150x150?text=Image+Not+Available';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg z-50 animate-slideInUp">
            <div className="px-4 py-4 space-y-2">
              {translations[language].menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-800 font-semibold hover:bg-orange-100 rounded-lg transition-all duration-300 animate-slideInUp"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile Get Started button and dropdown */}
              <div className="relative">
                <button
                  onClick={handleNavOrderClick}
                  className="block w-full text-left px-4 py-3 text-gray-800 font-semibold hover:bg-orange-100 rounded-lg transition-all duration-300 animate-slideInUp"
                  aria-haspopup="true"
                  aria-expanded={showNavOrderOptions}
                >
                  {translations[language].getStarted}
                </button>
                {showNavOrderOptions && (
                  <div className="mt-2 w-full bg-gradient-to-br from-orange-400 to-emerald-500 rounded-lg shadow-xl overflow-hidden animate-fadeInUp">
                    <div className="flex justify-between items-center px-4 py-2 bg-orange-500/50">
                      <h3 className="text-white font-semibold">{translations[language].exploreOptions}</h3>
                      <button
                        onClick={() => setShowNavOrderOptions(false)}
                        className="text-white hover:text-gray-200"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        window.location.href = '#calorie-tracker';
                        setShowNavOrderOptions(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-white font-semibold hover:bg-orange-500 transition-colors"
                    >
                      {translations[language].trackCalories}
                    </button>
                    <button
                      onClick={() => {
                        window.location.href = '#meal-planner';
                        setShowNavOrderOptions(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-white font-semibold hover:bg-emerald-600 transition-colors"
                    >
                      {translations[language].planMeals}
                    </button>
                  </div>
                )}
              </div>
              {/* Mobile language selector */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 w-full text-left px-4 py-3 text-gray-800 font-semibold hover:bg-orange-100 rounded-lg transition-all duration-300 animate-slideInUp"
                  aria-haspopup="true"
                  aria-expanded={false}
                >
                  <Globe className="w-5 h-5" />
                  {language}
                </button>
                <div className="mt-2 w-full bg-gradient-to-br from-orange-400 to-emerald-500 rounded-lg shadow-xl overflow-hidden animate-fadeInUp">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className="block w-full text-left px-4 py-2 text-white font-semibold hover:bg-orange-500 transition-colors"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animations and styling */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes orbit1 {
          0% { transform: rotate(0deg) translateX(96px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(96px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          0% { transform: rotate(90deg) translateX(96px) rotate(-90deg); }
          100% { transform: rotate(450deg) translateX(96px) rotate(-450deg); }
        }
        @keyframes orbit3 {
          0% { transform: rotate(180deg) translateX(96px) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(96px) rotate(-540deg); }
        }
        @keyframes orbit4 {
          0% { transform: rotate(270deg) translateX(96px) rotate(-270deg); }
          100% { transform: rotate(630deg) translateX(96px) rotate(-630deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(251, 191, 36, 0.8); }
          50% { text-shadow: 0 0 40px rgba(245, 158, 11, 0.8); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideInUp { animation: slideInUp 1s ease-out 0.3s both; }
        .animate-slideInLeft { animation: slideInLeft 1.2s ease-out; }
        .animate-orbit-1 { animation: orbit1 20s linear infinite; }
        .animate-orbit-2 { animation: orbit2 25s linear infinite; }
        .animate-orbit-3 { animation: orbit3 30s linear infinite; }
        .animate-orbit-4 { animation: orbit4 35s linear infinite; }
        .animate-spin-slow { animation: spinSlow 20s linear infinite; }
        .animate-pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .object-contain {
          padding-top: 6px;
          object-fit: contain;
          margin-top: -10px;
          width: 64px;
          height: auto;
          image-rendering: -webkit-optimize-contrast;
          -ms-interpolation-mode: bicubic;
        }
      `}</style>
    </nav>
  );
});

Header.displayName = 'Header';
export default Header;