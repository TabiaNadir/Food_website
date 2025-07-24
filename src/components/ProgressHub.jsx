import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Trophy, Target } from 'lucide-react';

// ProgressHub component jo health progress aur gamification handle karta hai
const ProgressHub = () => {
  // Language context se translations aur current language access karna
  const { language, translations } = useLanguage();

  // State for goals aur progress
  const [weightGoal, setWeightGoal] = useState('');
  const [progressData, setProgressData] = useState([]);
  const [badges, setBadges] = useState([]);

  // Simulated progress logging aur badge unlocking
  const logProgress = (e) => {
    e.preventDefault();
    if (weightGoal) {
      const newProgress = {
        date: new Date().toLocaleDateString(),
        weight: parseFloat(weightGoal),
      };
      setProgressData([...progressData, newProgress]);
      // Simulated badge unlocking
      if (progressData.length + 1 >= 5) {
        setBadges([...badges, translations[language]?.progressHub?.badge || '5 Days Streak']);
      }
      setWeightGoal('');
    }
  };

  return (
    // Main section for progress hub with vibrant styling
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading with animation */}
        <h2 className="text-5xl font-black text-center mb-12 text-gray-800 animate-slideInUp">
          {translations[language]?.progressHub?.title || 'Progress Hub'}
        </h2>
        {/* Form for goal setting */}
        <div className="max-w-lg mx-auto mb-12 bg-white rounded-3xl shadow-xl p-6 animate-fadeInUp">
          <form onSubmit={logProgress}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                {translations[language]?.progressHub?.weightGoal || 'Weight Goal (kg)'}
              </label>
              <input
                type="number"
                value={weightGoal}
                onChange={(e) => setWeightGoal(e.target.value)}
                placeholder="e.g., 70"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white p-3 rounded-lg font-bold hover:scale-105 transition-all duration-300"
            >
              {translations[language]?.progressHub?.logProgress || 'Log Progress'}
            </button>
          </form>
        </div>
        {/* Progress data */}
        {progressData.length > 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-6 mb-12 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {translations[language]?.progressHub?.progress || 'Your Progress'}
            </h3>
            <ul className="space-y-4">
              {progressData.map((entry, index) => (
                <li key={index} className="border-b pb-2">
                  <div className="flex justify-between">
                    <span>{entry.date}</span>
                    <span>{entry.weight} kg</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Badges section */}
        {badges.length > 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-6 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              {translations[language]?.progressHub?.badges || 'Your Badges'}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-orange-400 to-emerald-500 text-white p-4 rounded-lg text-center"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgressHub;