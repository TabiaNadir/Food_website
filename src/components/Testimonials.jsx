import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ali Khan',
    text: 'NutriTrack helped me lose 10kg with its easy-to-use calorie tracker!',
    image: 'https://via.placeholder.com/50x50?text=Ali',
  },
  {
    name: 'Sana Malik',
    text: 'The AI meal planner is a game-changer for my busy lifestyle.',
    image: 'https://via.placeholder.com/50x50?text=Sana',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black text-center mb-16 text-gray-800 tracking-tight">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-3xl p-8 bg-white border border-gray-200 shadow-2xl hover:shadow-emerald-300 transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/50x50?text=User';
                  }}
                />
                <h3 className="text-xl font-semibold text-emerald-700">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 text-lg italic leading-relaxed">
                “{testimonial.text}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
