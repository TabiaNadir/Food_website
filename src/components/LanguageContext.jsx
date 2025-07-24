import React, { createContext, useState, useContext } from 'react';

// Language Context banane ke liye
const LanguageContext = createContext();

// Language Provider jo language state aur translations manage karta hai
export const LanguageProvider = ({ children }) => {
  // Current language state
  const [language, setLanguage] = useState('English');

  // Translations for different languages
  const translations = {
    English: {
      menuItems: [
        { name: 'HOME', href: '#home' },
        { name: 'TRACK CALORIES', href: '#calorie-tracker' },
        { name: 'MEAL PLANNER', href: '#meal-planner' },
        { name: 'PROGRESS HUB', href: '#progress-hub' },
        { name: 'RESOURCES', href: '#resources' },
      ],
      getStarted: 'GET STARTED',
      exploreOptions: 'Explore Options',
      trackCalories: 'Track Calories',
      planMeals: 'Plan Meals',
      loadingText: 'Loading your health journey...',
      keyFeaturesTitle: 'KEY FEATURES',
      features: {
        smartSearch: {
          name: 'Smart Nutrition Search',
          description: 'Instantly find detailed nutritional info for any food or dish.',
        },
        mealGenerator: {
          name: 'AI Meal Planner',
          description: 'Get personalized meal plans tailored to your dietary needs and goals.',
        },
        progressTracker: {
          name: 'Health Progress Tracker',
          description: 'Track your health journey with insightful charts and analytics.',
        },
        free: 'Free',
      },
    },
    Spanish: {
      menuItems: [
        { name: 'INICIO', href: '#home' },
        { name: 'SEGUIR CALORÍAS', href: '#calorie-tracker' },
        { name: 'PLANIFICADOR DE COMIDAS', href: '#meal-planner' },
        { name: 'CENTRO DE PROGRESO', href: '#progress-hub' },
        { name: 'RECURSOS', href: '#resources' },
      ],
      getStarted: 'COMENZAR',
      exploreOptions: 'Explorar Opciones',
      trackCalories: 'Seguir Calorías',
      planMeals: 'Planificar Comidas',
      loadingText: 'Cargando tu viaje de salud...',
      keyFeaturesTitle: 'CARACTERÍSTICAS CLAVE',
      features: {
        smartSearch: {
          name: 'Búsqueda Inteligente de Nutrición',
          description: 'Encuentra información nutricional detallada para cualquier alimento al instante.',
        },
        mealGenerator: {
          name: 'Planificador de Comidas IA',
          description: 'Obtén planes de comidas personalizados según tus necesidades y objetivos dietéticos.',
        },
        progressTracker: {
          name: 'Seguimiento de Progreso de Salud',
          description: 'Monitorea tu viaje de salud con gráficos y análisis perspicaces.',
        },
        free: 'Gratis',
      },
    },
    French: {
      menuItems: [
        { name: 'ACCUEIL', href: '#home' },
        { name: 'SUIVI DES CALORIES', href: '#calorie-tracker' },
        { name: 'PLANIFICATEUR DE REPAS', href: '#meal-planner' },
        { name: 'CENTRE DE PROGRÈS', href: '#progress-hub' },
        { name: 'RESSOURCES', href: '#resources' },
      ],
      getStarted: 'COMMENCER',
      exploreOptions: 'Explorer les Options',
      trackCalories: 'Suivi des Calories',
      planMeals: 'Planifier les Repas',
      loadingText: 'Chargement de votre parcours santé...',
      keyFeaturesTitle: 'CARACTÉRISTIQUES CLÉS',
      features: {
        smartSearch: {
          name: 'Recherche Nutritionnelle Intelligente',
          description: 'Trouvez instantanément des informations nutritionnelles détaillées pour tout aliment.',
        },
        mealGenerator: {
          name: 'Planificateur de Repas IA',
          description: 'Obtenez des plans de repas personnalisés adaptés à vos besoins et objectifs.',
        },
        progressTracker: {
          name: 'Suivi des Progrès de Santé',
          description: 'Suivez votre parcours santé avec des graphiques et analyses perspicaces.',
        },
        free: 'Gratuit',
      },
    },
    German: {
      menuItems: [
        { name: 'STARTSEITE', href: '#home' },
        { name: 'KALORIEN VERFOLGEN', href: '#calorie-tracker' },
        { name: 'MAHLZEITENPLANER', href: '#meal-planner' },
        { name: 'FORTSCHRITTSZENTRUM', href: '#progress-hub' },
        { name: 'RESSOURCEN', href: '#resources' },
      ],
      getStarted: 'LOSLEGEN',
      exploreOptions: 'Optionen Erkunden',
      trackCalories: 'Kalorien Verfolgen',
      planMeals: 'Mahlzeiten Planen',
      loadingText: 'Lade deine Gesundheitsreise...',
      keyFeaturesTitle: 'HAUPTMERKMALE',
      features: {
        smartSearch: {
          name: 'Intelligente Ernährungssuche',
          description: 'Finden Sie sofort detaillierte Nährwertinformationen für jedes Lebensmittel.',
        },
        mealGenerator: {
          name: 'KI-Mahlzeitenplaner',
          description: 'Erhalten Sie personalisierte Mahlzeitenpläne, die auf Ihre Ernährungsbedürfnisse abgestimmt sind.',
        },
        progressTracker: {
          name: 'Gesundheitsfortschritts-Tracker',
          description: 'Verfolgen Sie Ihre Gesundheitsreise mit aufschlussreichen Diagrammen und Analysen.',
        },
        free: 'Kostenlos',
      },
    },
    Arabic: {
      menuItems: [
        { name: 'الرئيسية', href: '#home' },
        { name: 'تتبع السعرات', href: '#calorie-tracker' },
        { name: 'مخطط الوجبات', href: '#meal-planner' },
        { name: 'مركز التقدم', href: '#progress-hub' },
        { name: 'الموارد', href: '#resources' },
      ],
      getStarted: 'ابدأ',
      exploreOptions: 'استكشاف الخيارات',
      trackCalories: 'تتبع السعرات',
      planMeals: 'تخطيط الوجبات',
      loadingText: 'جارٍ تحميل رحلتك الصحية...',
      keyFeaturesTitle: 'الميزات الرئيسية',
      features: {
        smartSearch: {
          name: 'البحث الذكي عن التغذية',
          description: 'اعثر فورًا على معلومات غذائية مفصلة لأي طعام أو طبق.',
        },
        mealGenerator: {
          name: 'مخطط وجبات الذكاء الاصطناعي',
          description: 'احصل على خطط وجبات مخصصة تناسب احتياجاتك وأهدافك الغذائية.',
        },
        progressTracker: {
          name: 'متتبع تقدم الصحة',
          description: 'تابع رحلتك الصحية بمساعدة الرسوم البيانية والتحليلات الثاقبة.',
        },
        free: 'مجاني',
      },
    },
    Urdu: {
      menuItems: [
        { name: 'ہوم', href: '#home' },
        { name: 'کیلوریز ٹریک کریں', href: '#calorie-tracker' },
        { name: 'کھانے کا پلانر', href: '#meal-planner' },
        { name: 'پروگریس ہب', href: '#progress-hub' },
        { name: 'وسائل', href: '#resources' },
      ],
      getStarted: 'شروع کریں',
      exploreOptions: 'اختیارات دریافت کریں',
      trackCalories: 'کیلوریز ٹریک کریں',
      planMeals: 'کھانے کی منصوبہ بندی کریں',
      loadingText: 'آپ کا صحت کا سفر لوڈ ہو رہا ہے...',
      keyFeaturesTitle: 'اہم خصوصیات',
      features: {
        smartSearch: {
          name: 'سمارٹ نیوٹریشن سرچ',
          description: 'کسی بھی کھانے یا ڈش کی تفصیلی غذائی معلومات فوری طور پر حاصل کریں۔',
        },
        mealGenerator: {
          name: 'اے آئی کھانے کا پلانر',
          description: 'آپ کی غذائی ضروریات اور اہداف کے مطابق ذاتی کھانے کے پلان حاصل کریں۔',
        },
        progressTracker: {
          name: 'صحت پروگریس ٹریکر',
          description: 'بصیرت افروز چارٹس اور تجزیات کے ساتھ اپنے صحت کے سفر کی نگرانی کریں۔',
        },
        free: 'مفت',
      },
    },
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to access Language Context
export const useLanguage = () => useContext(LanguageContext);