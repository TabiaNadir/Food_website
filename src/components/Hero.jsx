import React from 'react';
import { ChevronDown, MapPin, X } from 'lucide-react';

const Hero = ({ showHeroOrderOptions, setShowHeroOrderOptions }) => {
  const handleHeroOrderClick = (e) => {
    e.stopPropagation();
    setShowHeroOrderOptions(!showHeroOrderOptions);
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-500/30 to-teal-600/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-green-400/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          <div className="text-white animate-slideInLeft">
            <div className="mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-4 py-2 rounded-full font-bold text-sm animate-bounce-subtle">
                🔥 TRACK - PLAN - SUCCEED
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              <span className="block animate-typewriter">TRANSFORM YOUR...</span>
              <span className="block animate-slideInUp">HEALTH WITH</span>
              <span className="block bg-gradient-to-r from-green-300 via-emerald-400 to-teal-500 bg-clip-text text-transparent animate-glow py-1 md:py-2">
                AI!
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-gray-300 animate-fadeInUp max-w-lg">
              Track your calories, plan healthy meals, and achieve your health goals with <span className="text-green-400 font-bold">NutriTrack</span>. 
              <span className="text-emerald-400 font-bold">Real Nutrition. Real Results.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 animate-slideInUp">
              <div className="w-full sm:w-auto">
                <button
                  onClick={handleHeroOrderClick}
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-emerald-700 transition-colors shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-110"
                >
                  START FOR FREE
                </button>
                {showHeroOrderOptions && (
                  <div className="absolute left-0 mt-2 w-48 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg shadow-xl z-[100] overflow-hidden">
                    <div className="flex justify-between items-center px-4 py-2 bg-green-500/50">
                      <h3 className="text-white font-semibold"></h3>
                      <button
                        onClick={() => setShowHeroOrderOptions(false)}
                        className="text-white hover:text-gray-200"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        window.location.href = "#calorie-tracker";
                        setShowHeroOrderOptions(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-white font-semibold hover:bg-green-500 transition-colors"
                    >
                      Track Calories
                    </button>
                    <button
                      onClick={() => {
                        window.location.href = "#meal-planner";
                        setShowHeroOrderOptions(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-white font-semibold hover:bg-emerald-600 transition-colors"
                    >
                      Plan Meals
                    </button>
                  </div>
                )}
              </div>
              <div className="w-full sm:w-auto sm:max-w-xs">
                <button
                  onClick={() => window.open("https://www.google.com/maps/place/12+Irving+Pl,+Woodmere,+NY+11598,+USA", "_blank")}
                  className="group w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-110 shadow-2xl hover:shadow-green-500/50 flex items-center justify-center gap-1"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  FIND SUPPORT
                  <ChevronDown className="w-5 h-5 flex-shrink-0 group-hover:animate-bounce" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slideInRight">
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative">
                <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 rounded-full animate-spin-reverse"></div>
                  <div className="absolute inset-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 overflow-hidden group hover:scale-110 transition-transform duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500&auto=format&fit=crop" 
                      alt="Healthy Salad Bowl" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/500x500?text=Image+Not+Available';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-500/10 rounded-full animate-pulse-glow"></div>
            <div className="absolute inset-10 bg-gradient-to-br from-emerald-400/5 to-teal-500/5 rounded-full animate-pulse-glow-reverse"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;