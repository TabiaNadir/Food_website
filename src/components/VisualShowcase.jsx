import React from 'react';

const VisualShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black text-center mb-12 text-gray-800">
          NUTRITRACK IN ACTION
        </h2>
        <div className="relative">
          <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
            <img 
              src="https://via.placeholder.com/800x400?text=App+Demo" 
              alt="NutriTrack Demo" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x400?text=Image+Not+Available';
              }}
            />
          </div>
          <button
            onClick={() => window.open("#", "_blank")}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors"
          >
            WATCH DEMO
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;