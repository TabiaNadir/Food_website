import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Utensils, Camera, List } from 'lucide-react';

// MealPlanner component jo AI-driven meal plans banata hai
const MealPlanner = () => {
  // Language context se translations aur current language access karna
  const { language, translations } = useLanguage();

  // State for meal plan inputs aur generated plan
  const [dietaryPrefs, setDietaryPrefs] = useState('');
  const [calorieGoal, setCalorieGoal] = useState('');
  const [mealPlan, setMealPlan] = useState(null);
  const [groceryList, setGroceryList] = useState([]);

  // Simulated AI meal plan generation
  const generateMealPlan = () => {
    // Yeh sirf placeholder hai; actual AI ke liye Groq API ya OpenFoodFacts API use karo
    const samplePlan = {
      breakfast: {
        name: translations[language]?.mealPlanner?.breakfast || 'Healthy Oatmeal Bowl',
        calories: 300,
        ingredients: ['Oats', 'Almond Milk', 'Berries', 'Chia Seeds'],
      },
      lunch: {
        name: translations[language]?.mealPlanner?.lunch || 'Grilled Chicken Salad',
        calories: 400,
        ingredients: ['Chicken', 'Spinach', 'Avocado', 'Tomatoes'],
      },
      dinner: {
        name: translations[language]?.mealPlanner?.dinner || 'Quinoa Veggie Stir-Fry',
        calories: 350,
        ingredients: ['Quinoa', 'Broccoli', 'Carrots', 'Soy Sauce'],
      },
    };
    setMealPlan(samplePlan);
    setGroceryList([...new Set([...samplePlan.breakfast.ingredients, ...samplePlan.lunch.ingredients, ...samplePlan.dinner.ingredients])]);
  };

  // Handle form submission for meal plan
  const handleSubmit = (e) => {
    e.preventDefault();
    generateMealPlan();
  };

  return (
    // Main section for meal planner with vibrant styling
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading with animation */}
        <h2 className="text-5xl font-black text-center mb-12 text-gray-800 animate-slideInUp">
          {translations[language]?.mealPlanner?.title || 'AI Meal Planner'}
        </h2>
        {/* Form for dietary preferences aur calorie goals */}
        <div className="max-w-lg mx-auto mb-12 bg-white rounded-3xl shadow-xl p-6 animate-fadeInUp">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                {translations[language]?.mealPlanner?.dietaryPrefs || 'Dietary Preferences'}
              </label>
              <select
                value={dietaryPrefs}
                onChange={(e) => setDietaryPrefs(e.target.value)}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">{translations[language]?.mealPlanner?.select || 'Select'}</option>
                <option value="vegan">Vegan</option>
                <option value="keto">Keto</option>
                <option value="gluten-free">Gluten-Free</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                {translations[language]?.mealPlanner?.calorieGoal || 'Daily Calorie Goal'}
              </label>
              <input
                type="number"
                value={calorieGoal}
                onChange={(e) => setCalorieGoal(e.target.value)}
                placeholder="e.g., 2000"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white p-3 rounded-lg font-bold hover:scale-105 transition-all duration-300"
            >
              {translations[language]?.mealPlanner?.generate || 'Generate Meal Plan'}
            </button>
          </form>
          {/* Photo upload placeholder */}
          <div className="mt-4 flex items-center justify-center">
            <Camera className="w-6 h-6 mr-2" />
            <span>{translations[language]?.mealPlanner?.photoUpload || 'Upload Food Photo (AI Analysis)'}</span>
          </div>
        </div>
        {/* Generated meal plan */}
        {mealPlan && (
          <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp">
            {Object.entries(mealPlan).map(([meal, details], index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{details.name}</h3>
                <p className="text-gray-600 mb-2">
                  {translations[language]?.mealPlanner?.calories || 'Calories'}: {details.calories}
                </p>
                <p className="text-gray-600">
                  {translations[language]?.mealPlanner?.ingredients || 'Ingredients'}: {details.ingredients.join(', ')}
                </p>
              </div>
            ))}
          </div>
        )}
        {/* Grocery list */}
        {groceryList.length > 0 && (
          <div className="mt-12 bg-white rounded-3xl shadow-xl p-6 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <List className="w-6 h-6 mr-2" />
              {translations[language]?.mealPlanner?.groceryList || 'Grocery List'}
            </h3>
            <ul className="list-disc pl-6">
              {groceryList.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default MealPlanner;