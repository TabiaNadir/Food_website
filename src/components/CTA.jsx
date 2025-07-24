import React from 'react';

const CTA = () => {
  const handleClick = () => {
    const targetSection = document.querySelector('#calorie-tracker');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-labelledby="cta-heading"
      className="py-24 bg-gradient-to-br from-green-500 via-emerald-600 to-emerald-700 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center">
        <h2
          id="cta-heading"
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 animate-fade-in"
        >
          Start Your Fitness Journey Today
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in delay-100">
          Take control of your health by tracking calories, setting goals, and staying motivated.
        </p>
        <button
          onClick={handleClick}
          className="inline-block bg-white text-emerald-700 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 animate-fade-in delay-200"
        >
          Join Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
