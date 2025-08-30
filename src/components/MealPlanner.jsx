import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import {  Camera, List } from 'lucide-react';

const MealPlanner = () => {
  const { language, translations } = useLanguage();

  const [dietaryPrefs, setDietaryPrefs] = useState('');
  const [calorieGoal, setCalorieGoal] = useState('');
  const [mealPlan, setMealPlan] = useState(null);
  const [groceryList, setGroceryList] = useState([]);

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [suggestedCalories, setSuggestedCalories] = useState(null);

  // ✅ BMI Calculation
  const calculateBMI = () => {
    if (!height || !weight) return;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let suggestion = 2000;
    if (bmiValue < 18.5) suggestion = 2500;
    else if (bmiValue > 25) suggestion = 1800;

    setSuggestedCalories(suggestion);
    setCalorieGoal(suggestion);
  };

    // ✅ Meal Plan Generator (Groq API backend)
const generateMealPlan = async () => {
  try {
    const prompt = `Generate a meal plan for a person with dietary preference: ${dietaryPrefs || "none"}, calorie goal: ${calorieGoal || "default"}. 
    Give breakfast, lunch, and dinner with name, calories, and ingredients in JSON format.`;

    const response = await fetch("http://localhost:5000/api/mealplan", { // Groq backend endpoint
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();

    let parsedPlan;
    try {
      parsedPlan = JSON.parse(data.mealPlan); // Groq ka response string hoga, JSON parse karenge
    } catch {
      console.error("Failed to parse Groq JSON:", data.mealPlan);
      alert("AI response parsing failed.");
      return;
    }

    setMealPlan(parsedPlan);

    const ingredients = [
      ...(parsedPlan.breakfast?.ingredients || []),
      ...(parsedPlan.lunch?.ingredients || []),
      ...(parsedPlan.dinner?.ingredients || []),
    ];

    setGroceryList([...new Set(ingredients)]);
  } catch (error) {
    console.error("Failed to fetch meal plan:", error);
    alert("Failed to generate meal plan. Please check the server.");
  }
 };
  const handleSubmit = (e) => {
    e.preventDefault();
    generateMealPlan();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black text-center mb-12 text-gray-800 animate-slideInUp">
          {translations[language]?.mealPlanner?.title || 'AI Meal Planner'}
        </h2>

        {/* 👉 BMI Section */}
        <div className="max-w-lg mx-auto mb-8 bg-white rounded-3xl shadow-xl p-6">
          <h3 className="text-2xl font-bold mb-4">BMI & Calorie Calculator</h3>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Height (cm)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full p-3 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Weight (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full p-3 border rounded-lg" />
          </div>
          <button
            onClick={calculateBMI}
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-bold hover:scale-105 transition-all duration-300"
          >
            Calculate BMI
          </button>
          {bmi && (
            <p className="mt-4 text-gray-700">
              BMI: <strong>{bmi}</strong> — Suggested Calories: <strong>{suggestedCalories}</strong>
            </p>
          )}
        </div>

        {/* 👉 Form Section */}
        <div className="max-w-lg mx-auto mb-12 bg-white rounded-3xl shadow-xl p-6 animate-fadeInUp">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Dietary Preferences</label>
              <select value={dietaryPrefs} onChange={(e) => setDietaryPrefs(e.target.value)} className="w-full p-3 border rounded-lg">
                <option value="">Select</option>
                <option value="vegan">Vegan</option>
                <option value="keto">Keto</option>
                <option value="gluten-free">Gluten-Free</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Calorie Goal</label>
              <input type="number" value={calorieGoal} onChange={(e) => setCalorieGoal(e.target.value)} className="w-full p-3 border rounded-lg" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white p-3 rounded-lg font-bold hover:scale-105 transition-all duration-300">
              Generate Meal Plan
            </button>
          </form>
          <div className="mt-4 flex items-center justify-center">
            <Camera className="w-6 h-6 mr-2" />
            <span>Upload Food Photo (AI Analysis)</span>
          </div>
        </div>

        {/* 👉 Meal Plan Display */}
        {mealPlan && (
          <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp">
            {Object.entries(mealPlan).map(([meal, details], index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{details.name}</h3>
                <p className="text-gray-600 mb-2">Calories: {details.calories}</p>
                <p className="text-gray-600">Ingredients: {details.ingredients.join(', ')}</p>
              </div>
            ))}
          </div>
        )}

        {/* 👉 Grocery List */}
        {groceryList.length > 0 && (
          <div className="mt-12 bg-white rounded-3xl shadow-xl p-6 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <List className="w-6 h-6 mr-2" />
              Grocery List
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
