import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Camera, Barcode } from 'lucide-react';

// CalorieTracker component jo calorie logging aur nutritional analysis karta hai
const CalorieTracker = () => {
  // Language context se translations aur current language access karna
  const { language, translations } = useLanguage();

  // State for food logging aur nutritional data
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [loggedFoods, setLoggedFoods] = useState([]);

  // Simulated barcode scanning aur photo logging
  const handleLogFood = (e) => {
    e.preventDefault();
    if (foodName && calories) {
      // Yeh placeholder hai; actual barcode scanning ya photo recognition ke liye backend API chahiye
      setLoggedFoods([
        ...loggedFoods,
        {
          name: foodName,
          calories: parseInt(calories),
          macros: {
            protein: Math.round(calories * 0.3 / 4), // Simulated protein
            carbs: Math.round(calories * 0.5 / 4), // Simulated carbs
            fat: Math.round(calories * 0.2 / 9), // Simulated fat
          },
        },
      ]);
      setFoodName('');
      setCalories('');
    }
  };

  return (
    // Main section for calorie tracker with vibrant styling
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading with animation */}
        <h2 className="text-5xl font-black text-center mb-12 text-gray-800 animate-slideInUp">
          {translations[language]?.calorieTracker?.title || 'Calorie Tracker'}
        </h2>
        {/* Form for manual food logging */}
        <div className="max-w-lg mx-auto mb-12 bg-white rounded-3xl shadow-xl p-6 animate-fadeInUp">
          <form onSubmit={handleLogFood}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                {translations[language]?.calorieTracker?.foodName || 'Food Name'}
              </label>
              <input
                type="text"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                placeholder={translations[language]?.calorieTracker?.foodPlaceholder || 'e.g., Apple'}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                {translations[language]?.calorieTracker?.calories || 'Calories'}
              </label>
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="e.g., 100"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white p-3 rounded-lg font-bold hover:scale-105 transition-all duration-300"
            >
              {translations[language]?.calorieTracker?.logFood || 'Log Food'}
            </button>
          </form>
          {/* Barcode scanning aur photo upload placeholders */}
          <div className="mt-4 flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <Barcode className="w-6 h-6 mr-2" />
              <span>{translations[language]?.calorieTracker?.barcode || 'Scan Barcode'}</span>
            </div>
            <div className="flex items-center">
              <Camera className="w-6 h-6 mr-2" />
              <span>{translations[language]?.calorieTracker?.photoUpload || 'Upload Food Photo'}</span>
            </div>
          </div>
        </div>
        {/* Logged foods list */}
        {loggedFoods.length > 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-6 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {translations[language]?.calorieTracker?.loggedFoods || 'Logged Foods'}
            </h3>
            <ul className="space-y-4">
              {loggedFoods.map((food, index) => (
                <li key={index} className="border-b pb-2">
                  <div className="flex justify-between">
                    <span className="font-bold">{food.name}</span>
                    <span>{food.calories} {translations[language]?.calorieTracker?.calories || 'cal'}</span>
                  </div>
                  <p className="text-gray-600">
                    {translations[language]?.calorieTracker?.macros || 'Macros'}: {food.macros.protein}g Protein, {food.macros.carbs}g Carbs, {food.macros.fat}g Fat
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default CalorieTracker;