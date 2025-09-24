// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HoursPopup from "./components/HoursPopup";
import MealPlanner from "./components/MealPlanner";
import KeyFeatures from "./components/KeyFeatures";
import SmartNutritionMenu from "./components/SmartNutritionMenu";
import Checkout from "./components/Checkout";
import Resources from "./components/Resources";
import AdvancedFeatures from "./components/AdvancedFeatures";
import VisualShowcase from "./components/VisualShowcase";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageContext";
import ChatWidget from "./components/ChatWidget";
import { CartProvider } from "./context/CartContext";

function Layout({ children, isScrolled, showNavOrderOptions, setShowNavOrderOptions, isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();

  // jahan header hide karna ho
  const hideHeaderRoutes = ["/smart-nutrition-menu", "/checkout"];

  const hideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeader && (
        <Header
          isScrolled={isScrolled}
          showNavOrderOptions={showNavOrderOptions}
          setShowNavOrderOptions={setShowNavOrderOptions}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
      {children}
      <Footer />
      <ChatWidget />
    </>
  );
}

// Main App component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavOrderOptions, setShowNavOrderOptions] = useState(false);
  const [showHeroOrderOptions, setShowHeroOrderOptions] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHoursPopup, setShowHoursPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 flex items-center justify-center z-50 animate-pulse-slower">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/logo.png"
            alt="NutriTrack Logo"
            className="w-40 h-40 object-contain mb-4 animate-bounce-subtle"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/128x128?text=Logo+Not+Available";
            }}
          />
          <div className="animate-spin-slow w-16 h-16 border-4 border-white border-t-transparent rounded-full mb-4"></div>
          <p className="text-white text-lg font-semibold animate-fadeInUp">
            Loading your health journey...
          </p>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <Layout
            isScrolled={isScrolled}
            showNavOrderOptions={showNavOrderOptions}
            setShowNavOrderOptions={setShowNavOrderOptions}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          >
            <Routes>
              {/* Home page */}
              <Route
                path="/"
                element={
                  <>
                    <Hero
                      showHeroOrderOptions={showHeroOrderOptions}
                      setShowHeroOrderOptions={setShowHeroOrderOptions}
                    />
                    <HoursPopup
                      showHoursPopup={showHoursPopup}
                      setShowHoursPopup={setShowHoursPopup}
                    />
                    <MealPlanner />
                    <KeyFeatures />
                    <Resources />
                    <AdvancedFeatures />
                    <VisualShowcase />
                    <Testimonials />
                    <CTA />
                  </>
                }
              />

              {/* Smart Nutrition Menu page */}
              <Route path="/smart-nutrition-menu" element={<SmartNutritionMenu />} />

              {/* Checkout page */}
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;
