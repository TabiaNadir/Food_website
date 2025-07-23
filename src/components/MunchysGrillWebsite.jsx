import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Clock, Phone, Mail, Facebook, Twitter, Instagram, Menu, X, Star, Award, Users, Utensils } from 'lucide-react';

import burgerImg from '/public/burger.png';
import friesImg from '/public/Shawarma.png';
import pizzaImg from '/public/Shawarma2.png';
import saladImg from '/public/salad.png';
import drinkImg from '/public/salad2.png';
import logoImg from '/public/logo2.png';
import vaadLogoImg from '/public/vaadlogo.png'; // Add the Vaad logo image path here

const MunchysGrillWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavOrderOptions, setShowNavOrderOptions] = useState(false);
  const [showHeroOrderOptions, setShowHeroOrderOptions] = useState(false);
  const [showHoursPopup, setShowHoursPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavOrderClick = (e) => {
    e.stopPropagation();
    setShowNavOrderOptions(!showNavOrderOptions);
    setShowHeroOrderOptions(false);
    setIsMenuOpen(false);
  };

  const handleHeroOrderClick = (e) => {
    e.stopPropagation();
    setShowHeroOrderOptions(!showHeroOrderOptions);
    setShowNavOrderOptions(false);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'OUR STORY', href: '#story' },
    { name: 'MENU', href: 'https://order.toasttab.com/online/munchy-s-grill-12-irving-place' },
    { name: 'CATERING', href: '#catering' },
    { name: 'LOCATIONS', href: '#locations' },
  ];

  const bestDishes = [
    {
      name: 'Classic Burger',
      description: 'The Classic Burger stacked with mouth watering sauce and toppings or add double meat your way.',
      price: '$17.50',
      color: 'bg-orange-400',
      image: 'ClassicBurger.jpg',
      link: 'https://order.toasttab.com/online/munchy-s-grill-12-irving-place/item-1-classic-burger_78f6f67c-3cb5-46f3-91d3-c28ca808f071'
    },
    {
      name: 'Cheese Burger',
      description: 'Juicy beef patty with melted cheese and your choice of toppings. Classic with a kick.',
      price: '$19.50',
      color: 'bg-emerald-500',
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=200&fit=crop',
      link: 'https://order.toasttab.com/online/munchy-s-grill-12-irving-place/item-2-cheese-burger_91bb5624-2209-44d1-8079-bbfe1d4d277c'
    },
    {
      name: 'Schnitzel Burger',
      description: 'Stacked with a beef patty and crispy fried schnitzel along your choice of toppings. Big, bold, and packed with flavor.',
      price: '$26.00',
      color: 'bg-orange-500',
      image: '/SchnitzelBurger.png',
      link: 'https://order.toasttab.com/online/munchy-s-grill-12-irving-place/item-3-schnitzel-burger_551624fb-c85c-44a2-9c10-557cb57b455b'
    },
    {
      name: 'Shnitzel Baguette',
      description: 'Golden crunchy shnitzel on a toasted baguette with your choice of toppings.',
      price: '$17.50',
      color: 'bg-emerald-400',
      image: '/ShnitzelBaguette.jpg',
      link: 'https://order.toasttab.com/online/munchy-s-grill-12-irving-place/item-4-shnitzel-baguette_9087235a-51d5-4c49-9582-662288758852'
    },
    {
      name: 'Munchys Wrap',
      description: 'Your choice of meat in a white or whole wheat wrap, with your sauce and toppings. Simple, fresh, and fire.',
      price: '$17.50',
      color: 'bg-orange-300',
      image: '/munchyswrap.jpg',
      link: 'https://order.toasttab.com/online/munchy-s-grill-12-irving-place/item-5-munchys-wrap_dbebf7a2-1009-43df-a8f6-731967979343'
    },
    {
      name: 'Mazalito Chicken Shawarma',
      description: 'Tender, spiced chicken shawarma served your way — in a warm laffa, soft pita, or fresh wrap. Customize with your favorite fresh veggies, each added to your taste.',
      price: '$19.00',
      color: 'bg-emerald-300',
      image: '/MazalitoShawarma.jpg',
      link: 'https://order.toasttab.com/online/munchy-s-grill-12-irving-place/item-6-mazalito-chicken-shawarma_d4759acf-fbd4-456b-9501-082bb0f158ba'
    }
  ];

  const hoursOfOperation = [
    { day: 'Sunday', hours: '11:00 AM - 1:00 AM' },
    { day: 'Monday', hours: '11:00 AM - 1:00 AM' },
    { day: 'Tuesday', hours: '11:00 AM - 1:00 AM' },
    { day: 'Wednesday', hours: '11:00 AM - 1:00 AM' },
    { day: 'Thursday', hours: '11:00 AM - 1:00 AM' },
    { day: 'Friday', hours: '11:00 AM - 4:00 PM' },
    { day: 'Saturday', hours: '10:00 PM - 1:00 AM' },
  ];

  const promotions = [
    {
      title: 'EVERY SUN - THURS',
      subtitle: 'OPEN LATE ON THURSDAYS!',
      date: '11AM - 1AM',
      color: 'bg-orange-500',
      buttonColor: 'bg-emerald-700 hover:bg-emerald-800',
      animation: 'animate-pulse-slow'
    },
    {
      title: 'FRIDAY',
      subtitle: 'ONE HOUR BEFORE SHABAT',
      date: '11 AM',
      color: 'bg-orange-500',
      buttonColor: 'bg-emerald-700 hover:bg-emerald-800',
      animation: 'animate-bounce-subtle'
    },
    {
      title: 'SATURDAY',
      subtitle: 'ONE HOUR AFTER SHABAT',
      date: 'UNTIL 1AM',
      color: 'bg-orange-500',
      buttonColor: 'bg-emerald-700 hover:bg-emerald-800',
      animation: 'animate-pulse-slow'
    }
  ];

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'CONVENIENT LOCATION',
      description: 'Located in the heart of Woodmere',
      color: 'bg-orange-400'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'GOURMET GOODNESS-FRIENDLY DEALS',
      description: 'Quality food at affordable prices',
      color: 'bg-orange-400'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'SIMPLY SMASHING EXPERIENCES',
      description: 'Creating memorable dining experiences',
      color: 'bg-orange-400'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'MOUTHWATERING FRESH MENU',
      description: 'Fresh ingredients, bold flavors',
      color: 'bg-orange-400'
    }
  ];

  const galleryImages = [
    '/HamsaLamb.jpg',
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop',
    '/MazalitoShawarma.jpg',
    'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=300&fit=crop',
    '/munchyswrap.jpg',
    '/ShnitzelBaguette.jpg',
    '/salad.png'
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-orange-400 via-emerald-500 to-teal-600 flex items-center justify-center z-50">
        <div className="flex flex-col items-center justify-center">
          <img 
            src={logoImg} 
            alt="Munchy's Grill Logo" 
            className="w-40 h-40 object-contain mb-4"
            style={{ marginTop: '14px' }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/128x128?text=Logo+Not+Available';
            }}
          />
          <div className="animate-spin w-16 h-16 border-4 border-white border-t-transparent rounded-full mb-4"></div>
          <p className="text-white text-lg">Loading delicious content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImg} 
                alt="Munchy's Grill Logo" 
                className="w-24 h-24 object-contain"
                style={{ marginTop: '14px' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-emerald-500 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-white font-bold text-xl">M</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-semibold transition-colors ${isScrolled ? 'text-gray-700 hover:text-emerald-500' : 'text-white hover:text-orange-300'}`}
                >
                  {item.name}
                </a>
              ))}
              <div className="relative">
                <button
                  onClick={handleNavOrderClick}
                  className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
                >
                  ORDER NOW
                </button>
                {showNavOrderOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-gradient-to-br from-orange-400 to-emerald-500 rounded-lg shadow-xl z-[100] overflow-hidden">
                    <div className="flex justify-between items-center px-4 py-2 bg-orange-500/50">
                      <h3 className="text-white font-semibold"></h3>
                      <button
                        onClick={() => setShowNavOrderOptions(false)}
                        className="text-white hover:text-gray-200"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        window.open("tel:5165953500", "_blank");
                        setShowNavOrderOptions(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-white font-semibold hover:bg-orange-500 transition-colors"
                    >
                      Call Now
                    </button>
                    <button
                      onClick={() => {
                        window.open("https://order.toasttab.com/online/munchy-s-grill-12-irving-place", "_blank");
                        setShowNavOrderOptions(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-white font-semibold hover:bg-emerald-600 transition-colors"
                    >
                      View Menu
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setShowNavOrderOptions(false);
                setShowHeroOrderOptions(false);
              }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t z-40">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-emerald-500 font-semibold"
                >
                  {item.name}
                </a>
              ))}
              <div className="relative">
                {showNavOrderOptions && (
                  <div className="mt-2 w-full bg-gradient-to-br from-orange-400 to-emerald-500 rounded-lg shadow-xl z-[100] overflow-hidden">
                    <div className="flex justify-between items-center px-4 py-2 bg-orange-500/50">
                      <h3 className="text-white font-semibold"></h3>
                      <button
                        onClick={() => setShowNavOrderOptions(false)}
                        className="text-white hover:text-gray-200"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        window.open("tel:5165953500", "_blank");
                        setShowNavOrderOptions(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-white font-semibold hover:bg-orange-500 transition-colors"
                    >
                      Call Now
                    </button>
                    <button
                      onClick={() => {
                        window.open("https://order.toasttab.com/online/munchy-s-grill-12-irving-place", "_blank");
                        setShowNavOrderOptions(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-white font-semibold hover:bg-emerald-600 transition-colors"
                    >
                      View Menu
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Vaad Logo */}
      <section className="relative min-h-[calc(100vh-80px)] bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-emerald-500/30 to-teal-600/20"></div>
        
        <div className="absolute inset-0 overflow-hidden"></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-orange-400/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse-slower"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-20 pb-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
            <div className="text-white animate-slideInLeft">
              <div className="mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-emerald-500 text-black px-4 py-2 rounded-full font-bold text-sm animate-bounce-subtle">
                  🔥 EAT IN - TAKE OUT - DELIVERY
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                <span className="block animate-typewriter">IF YOU AIN'T HERE...</span>
                <span className="block animate-slideInUp">YOU AIN'T</span>
                <span className="block bg-gradient-to-r from-orange-300 via-amber-400 to-red-500 bg-clip-text text-transparent animate-glow py-1 md:py-2">
                  MUNCHING!
                </span>
              </h1>
              
              <p className="text-lg md:text-xl mb-6 text-gray-300 animate-fadeInUp max-w-lg">
                Savor the sizzle at <span className="text-orange-400 font-bold">5 Town’s go-to spot</span>, for 
                <span className="text-amber-400 font-bold"> Kosher Burgers, </span> Shawarma, and Flame-Grilled Chicken 
                <span className="text-emerald-400 font-bold"> only at Munchys Grill.
                Real Flavor</span> Real Kosher. Real Munch.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 animate-slideInUp">
                <div className="w-full sm:w-auto">
                  <button
                    onClick={handleHeroOrderClick}
                    className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-emerald-700 transition-colors shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-110"
                  >
                    ORDER NOW
                  </button>
                  {showHeroOrderOptions && (
                    <div className="absolute left-0 mt-2 w-48 bg-gradient-to-br from-orange-400 to-emerald-500 rounded-lg shadow-xl z-[100] overflow-hidden">
                      <div className="flex justify-between items-center px-4 py-2 bg-orange-500/50">
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
                          window.open("tel:5165953500", "_blank");
                          setShowHeroOrderOptions(false);
                        }}
                        className="block w-full text-left px-4 py-3 text-white font-semibold hover:bg-orange-500 transition-colors"
                      >
                        Call Now
                      </button>
                      <button
                        onClick={() => {
                          window.open("https://order.toasttab.com/online/munchy-s-grill-12-irving-place", "_blank");
                          setShowHeroOrderOptions(false);
                        }}
                        className="block w-full text-left px-4 py-3 text-white font-semibold hover:bg-emerald-600 transition-colors"
                      >
                        View Menu
                      </button>
                    </div>
                  )}
                </div>
                <div className="w-full sm:w-auto sm:max-w-xs">
                  <button
                    onClick={() => window.open("https://www.google.com/maps/place/12+Irving+Pl,+Woodmere,+NY+11598,+USA", "_blank")}
                    className="group w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-110 shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center gap-1"
                  >
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    FIND LOCATION
                    <ChevronDown className="w-5 h-5 flex-shrink-0 group-hover:animate-bounce" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slideInRight">
              <div className="relative z-10 flex items-center justify-center">
                <div className="relative">
                  <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-emerald-500/20 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-4 bg-gradient-to-br from-amber-400/30 to-emerald-500/30 rounded-full animate-spin-reverse"></div>
                    <div className="absolute inset-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 overflow-hidden group hover:scale-110 transition-transform duration-700">
                      <img 
                        src="/munchyswrap.jpg" 
                        alt="Ultimate MUNCHY'S GRILL" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/500x500?text=Image+Not+Available';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-8 -left-8 w-24 h-24 animate-orbit-1">
                    <div className="w-full h-full bg-transparent overflow-hidden">
                      <img 
                        src={friesImg} 
                        alt="Fries" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Available';
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="absolute -top-8 -right-8 w-20 h-20 animate-orbit-2">
                    <div className="w-full h-full bg-transparent overflow-hidden">
                      <img 
                        src={burgerImg} 
                        alt="Burger" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Available';
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-8 -left-8 w-18 h-18 animate-orbit-3">
                    <div className="w-full h-full bg-transparent overflow-hidden">
                      <img 
                        src={burgerImg} 
                        alt="Burger" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Available';
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-8 -right-8 w-16 h-16 animate-orbit-4">
                    <div className="w-full h-full bg-transparent overflow-hidden">
                      <img 
                        src={pizzaImg} 
                        alt="Pizza" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Available';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-emerald-500/10 rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-10 bg-gradient-to-br from-amber-400/5 to-emerald-500/5 rounded-full animate-pulse-glow-reverse"></div>
            </div>
          </div>
        </div>

        {/* Vaad Logo inside Hero Section */}
        <div className="absolute top-20 right-4 z-50 hidden md:block">
          <img src={vaadLogoImg} alt="Vaad Logo" className="w-20 h-20 object-contain" />
        </div>
        <div className="absolute top-20 right-2 z-50 md:hidden">
          <img src={vaadLogoImg} alt="Vaad Logo" className="w-[149px] h-auto object-contain" />
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Hours Popup */}
      {showHoursPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Hours of Operation</h2>
              <button
                onClick={() => setShowHoursPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4 mb-6">
              {hoursOfOperation.map((day, index) => (
                <div key={index} className="flex justify-between text-gray-700">
                  <span className="font-semibold">{day.day}</span>
                  <span>{day.hours}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => window.open("tel:5165953500", "_blank")}
              className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </button>
          </div>
        </div>
      )}

      {/* Promotions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-800">
            HOURS OF OPERATION
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className={`${promo.color} p-8 rounded-3xl text-white transform hover:scale-105 transition-all duration-300 shadow-xl ${promo.animation}`}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-lg mb-4">{promo.subtitle}</p>
                  {promo.date && (
                    <div className="text-3xl font-black mb-4">{promo.date}</div>
                  )}
                  {promo.description && (
                    <p className="text-sm mb-6">{promo.description}</p>
                  )}
                  <button 
                    onClick={() => setShowHoursPopup(true)}
                    className={`${promo.buttonColor} px-6 py-3 rounded-full font-bold transition-colors`}
                  >
                    MORE INFO
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Dishes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-800">
            Burgers/Baguette Sandwiches
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestDishes.map((dish, index) => (
              <button
                key={index}
                onClick={() => window.open(dish.link, '_blank')}
                className="text-left bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`${dish.color} h-4`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{dish.name}</h3>
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="w-full h-32 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                      }}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => window.open("https://order.toasttab.com/online/munchy-s-grill-12-irving-place", "_blank")}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-colors"
            >
              SHOW ME THE MENU
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="story" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-800">
            ABOUT US
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                Started in Woodmere NYC, MUNCHY'S GRILL in Five Towns Area. This local joint boasts a outstanding fusion of 
                delicious burgers, crispy fries, and mouth-watering Shawarma
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-sm mb-2">{feature.title}</h3>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-colors">
                  GET TO KNOW US BETTER
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-emerald-500 p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop" 
                    alt="Restaurant Interior" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/500x400?text=Image+Not+Available';
                    }}
                  />
                </div>
                <div className="relative text-center text-white">
                  <h3 className="text-4xl font-black mb-4">MUNCHY'S GRILL</h3>
                  <p className="text-lg">Authentic Flavors, Fresh Ingredients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 text-gray-800">
            Order Catering From US!
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => window.open("tel:5165953500")}
              className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors"
            >
              ORDER NOW
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-800">
            CHECK OUT OUR GRAMS!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, i) => (
              <div key={i} className="aspect-square bg-orange-400 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg">
                <img 
                  src={image} 
                  alt={`Delicious Food ${i + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Available';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">OUR LOCATION</h3>
              <div className="space-y-2 text-sm">
                <p>12 Irving Pl,</p>
                <p>Woodmere, NY 11598</p>
                <p>Next to the Woodmere Fire House.</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">MUNCHY'S GRILL</h3>
              <div className="space-y-2 text-sm">
                <p>About Us</p>
                <p>Menu</p>
                <p>Catering</p>
                <p>Blog</p>
                <p>Locations</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">CONTACT US!</h3>
              <div className="space-y-2 text-sm">
                <p>munchygrillny@gmail.com</p>
                <p>516-595-3500</p>
              </div>
            </div>
            <div>
              <div className="flex space-x-4 mb-4">
                <Facebook className="w-6 h-6 hover:text-emerald-400 cursor-pointer" />
                <Twitter className="w-6 h-6 hover:text-emerald-400 cursor-pointer" />
                <Instagram className="w-6 h-6 hover:text-emerald-400 cursor-pointer" />
              </div>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.3055876875637!2d-73.71566468459394!3d40.63231887934194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24e5b6b7e5f5b%3A0x9b9e8c1f4e5a2b3d!2s12%20Irving%20Pl%2C%20Woodmere%2C%20NY%2011598%2C%20USA!5e0!3m2!1sen!2us!4v1697051234567"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>Copyright © 2025 - Munchy's Grill Burgers. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
          }
          50% {
            text-shadow: 0 0 40px rgba(245, 158, 11, 0.8);
          }
        }
        
        @keyframes float1 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes float2 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }
        
        @keyframes float3 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }
        
        @keyframes float4 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(-5deg);
          }
        }
        
        @keyframes float5 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-22px) rotate(5deg);
          }
        }
        
        @keyframes float6 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }
        
        @keyframes orbit1 {
          0% {
            transform: rotate(0deg) translateX(120px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }
        
        @keyframes orbit2 {
          0% {
            transform: rotate(90deg) translateX(120px) rotate(-90deg);
          }
          100% {
            transform: rotate(450deg) translateX(120px) rotate(-450deg);
          }
        }
        
        @keyframes orbit3 {
          0% {
            transform: rotate(180deg) translateX(120px) rotate(-180deg);
          }
          100% {
            transform: rotate(540deg) translateX(120px) rotate(-540deg);
          }
        }
        
        @keyframes orbit4 {
          0% {
            transform: rotate(270deg) translateX(120px) rotate(-270deg);
          }
          100% {
            transform: rotate(630deg) translateX(120px) rotate(-630deg);
          }
        }
        
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        @keyframes pulseSlower {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }
        
        @keyframes pulseGlowReverse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1.05);
          }
          50% {
            opacity: 0.3;
            transform: scale(1);
          }
        }
        
        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes countUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1.2s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1.2s ease-out;
        }
        
        .animate-slideInUp {
          animation: slideInUp 1s ease-out 0.3s both;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out 0.5s both;
        }
        
        .animate-typewriter {
          animation: slideInUp 1s ease-out;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-float-1 {
          animation: float1 6s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float2 8s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float3 7s ease-in-out infinite;
        }
        
        .animate-float-4 {
          animation: float4 9s ease-in-out infinite;
        }
        
        .animate-float-5 {
          animation: float5 5s ease-in-out infinite;
        }
        
        .animate-float-6 {
          animation: float6 7s ease-in-out infinite;
        }
        
        .animate-orbit-1 {
          animation: orbit1 20s linear infinite;
        }
        
        .animate-orbit-2 {
          animation: orbit2 25s linear infinite;
        }
        
        .animate-orbit-3 {
          animation: orbit3 30s linear infinite;
        }
        
        .animate-orbit-4 {
          animation: orbit4 35s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spinReverse 15s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulseSlower 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow-reverse {
          animation: pulseGlowReverse 4s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }
        
        .animate-countUp {
          animation: countUp 1s ease-out 1s both;
        }

        .object-contain {
        padding-top: 6px;
          -o-object-fit: contain;
          object-fit: contain;
          margin-top: -27px;
          width: 110px;
          height: auto;
          image-rendering: -webkit-optimize-contrast;
          -ms-interpolation-mode: bicubic;
        }

        .pb-8 {
          padding-bottom: 10rem;
        }

        img {
          max-width: 100%;
          height: auto;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default MunchysGrillWebsite;
