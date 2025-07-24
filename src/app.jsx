import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HoursPopup from './components/HoursPopup';
import KeyFeatures from './components/KeyFeatures';
import AdvancedFeatures from './components/AdvancedFeatures';
import VisualShowcase from './components/VisualShowcase';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageContext';

// Main App component jo website ka core structure handle karta hai
const App = () => {
  // State variables for loading, scrolling, aur UI interactions
  const [isLoading, setIsLoading] = useState(true); // Loading screen ke liye
  const [isScrolled, setIsScrolled] = useState(false); // Header scroll effect ke liye
  const [showNavOrderOptions, setShowNavOrderOptions] = useState(false); // Header dropdown
  const [showHeroOrderOptions, setShowHeroOrderOptions] = useState(false); // Hero section dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
  const [showHoursPopup, setShowHoursPopup] = useState(false); // Hours popup toggle

  // Effect to handle loading screen aur scroll detection
  useEffect(() => {
    // 2 seconds ke baad loading screen hide karna
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Scroll position check karke header style update karna
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup timer aur scroll event listener
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Loading screen jo website load hone ke waqt dikhta hai
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 flex items-center justify-center z-50 animate-pulse-slower">
        <div className="flex flex-col items-center justify-center">
          {/* Logo with animation aur fallback image */}
          <img
            src="/logo.png"
            alt="NutriTrack Logo"
            className="w-40 h-40 object-contain mb-4 animate-bounce-subtle"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/128x128?text=Logo+Not+Available';
            }}
          />
          {/* Loading spinner */}
          <div className="animate-spin-slow w-16 h-16 border-4 border-white border-t-transparent rounded-full mb-4"></div>
          {/* Translatable loading text */}
          <p className="text-white text-lg font-semibold animate-fadeInUp">
            Loading your health journey...
          </p>
        </div>
      </div>
    );
  }

  // Main content with all components wrapped in LanguageProvider
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        {/* Header with navigation aur language selector */}
        <Header
          isScrolled={isScrolled}
          showNavOrderOptions={showNavOrderOptions}
          setShowNavOrderOptions={setShowNavOrderOptions}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        {/* Hero section with main call-to-action */}
        <Hero
          showHeroOrderOptions={showHeroOrderOptions}
          setShowHeroOrderOptions={setShowHeroOrderOptions}
        />
        {/* Popup for showing hours of operation */}
        <HoursPopup
          showHoursPopup={showHoursPopup}
          setShowHoursPopup={setShowHoursPopup}
        />
        {/* Key features of the app */}
        <KeyFeatures />
        {/* Advanced features section */}
        <AdvancedFeatures />
        {/* Visual showcase of app features */}
        <VisualShowcase />
        {/* User testimonials */}
        <Testimonials />
        {/* Call-to-action section */}
        <CTA />
        {/* Footer with additional links aur info */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;