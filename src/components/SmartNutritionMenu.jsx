import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const SmartNutritionMenu = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
    totalCalories,
  } = useContext(CartContext);

    const menuItems = [
  // 🍔 Burgers
  {
    id: 1,
    name: "Classic Burger",
    category: "Burgers",
    calories: 350,
    price: 500,
    image: "/burger.png",
    description: "Juicy grilled chicken patty with fresh lettuce, tomatoes, and light mayo in a soft bun.",
  },
  {
    id: 2,
    name: "Cheese Burger",
    category: "Burgers",
    calories: 420,
    price: 600,
    image: "/burger2.png",
    description: "Classic beef burger loaded with cheddar cheese, onions, and our special sauce.",
  },
  {
    id: 3,
    name: "Beef Burger",
    category: "Burgers",
    calories: 480,
    price: 650,
    image: "/ClassicBurger.jpg",
    description: "Thick and juicy beef patty with lettuce, tomatoes, and smoky sauce in a toasted bun.",
  },
  {
    id: 4,
    name: "BBQ Burger",
    category: "Burgers",
    calories: 520,
    price: 700,
    image: "/cheeseburger.jpg",
    description: "Grilled beef patty topped with BBQ sauce, caramelized onions, and melted cheese.",
  },
  {
    id: 5,
    name: "Zinger Burger",
    category: "Burgers",
    calories: 550,
    price: 750,
    image: "/SchnitzelBurger.png",
    description: "Crispy fried chicken fillet with spicy mayo, lettuce, and pickles in a sesame bun.",
  },

  // 🍗 Sides & Appetizers
  {
    id: 6,
    name: "Chicken Wings",
    category: "Wraps",
    calories: 420,
    price: 650,
    image: "/chickenwings.png",
    description: "Crispy fried chicken wings tossed in spicy buffalo sauce.",
  },

  // 🥗 Salads
  {
    id: 7,
    name: "Russian Salad",
    category: "Salads",
    calories: 250,
    price: 450,
    image: "/salad2.png",
    description: "Creamy salad with potatoes, peas, carrots, apples, and mayonnaise.",
  },
  {
    id: 8,
    name: "Classic Salad",
    category: "Salads",
    calories: 180,
    price: 350,
    image: "/salad.png",
    description: "Fresh lettuce, cucumbers, tomatoes, and carrots served with a light dressing.",
  },

  // 🌯 Wraps & Sandwiches
  {
    id: 9,
    name: "Schnitzel Baguette",
    category: "Wraps",
    calories: 500,
    price: 750,
    image: "/ShnitzelBaguette.jpg",
    description: "Crispy chicken schnitzel served in a fresh baguette with lettuce and garlic mayo.",
  },
  {
    id: 10,
    name: "Chicken Wrap",
    category: "Wraps",
    calories: 420,
    price: 550,
    image: "/munchyswrap.jpg",
    description: "Grilled chicken strips, fresh veggies, and creamy dressing wrapped in tortilla.",
  },

  // 🥙 Shawarma
  {
    id: 11,
    name: "Shawarma",
    category: "Shawarma",
    calories: 380,
    price: 450,
    image: "/Shawarma.png",
    description: "Traditional Middle Eastern shawarma with grilled chicken, salad, and garlic sauce.",
  },
  {
    id: 12,
    name: "Classic Shawarma",
    category: "Shawarma",
    calories: 400,
    price: 500,
    image: "/Shawarma2.png",
    description: "Marinated beef shawarma with tahini sauce and pickled vegetables.",
  },

  // 🍕 Pizzas
  {
    id: 13,
    name: "BBQ Pizza",
    category: "Pizzas",
    calories: 680,
    price: 950,
    image: "/BBQ pizza.jpeg",
    description: "Smoky BBQ sauce base topped with grilled chicken, onions, mozzarella, and herbs.",
  },
  {
    id: 14,
    name: "Cream Pizza",
    category: "Pizzas",
    calories: 720,
    price: 1000,
    image: "/creame pizza.jpeg",
    description: "Creamy white sauce topped with mushrooms, chicken chunks, and mozzarella.",
  },
  {
    id: 15,
    name: "Double Cheese Pizza",
    category: "Pizzas",
    calories: 800,
    price: 1100,
    image: "/double cheese.jpeg",
    description: "Loaded with double layers of mozzarella and cheddar cheese on a soft crust base.",
  },

  // 🍨 Desserts
  {
    id: 16,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    calories: 450,
    price: 400,
    image: "/Lava Cake.jpeg",
    description: "Warm chocolate cake with a gooey molten center served with vanilla ice cream.",
  },
  {
    id: 17,
    name: "Donuts",
    category: "Desserts",
    calories: 320,
    price: 250,
    image: "/Donuts.jpeg",
    description: "Soft, fluffy, deep-fried treat glazed with sugar or chocolate, perfect for a sweet craving",
  },
  {
    id: 21,
    name: "Cookies",
    category: "Desserts",
    calories: 180,
    price: 150,
    image: "/Chocolate Cookies.jpeg",
    description: "Crispy on the edges, chewy in the center, loaded with chocolate chips for the ultimate snack",
  },

  // 🥤 Drinks
  {
    id: 18,
    name: "Fresh Orange Juice",
    category: "Drinks",
    calories: 120,
    price: 200,
    image: "/orange juice.jpeg",
    description: "Freshly squeezed orange juice full of vitamin C.",
  },
  {
    id: 19,
    name: "Cold Coffee",
    category: "Drinks",
    calories: 180,
    price: 250,
    image: "/Cold Coffee.jpeg",
    description: "Iced coffee with milk, cream, and a hint of vanilla.",
  },
  {
    id: 20,
    name: "Soft Drink",
    category: "Drinks",
    calories: 150,
    price: 120,
    image: "/Soft drink.jpeg",
    description: "Chilled carbonated soft drink of your choice.",
  },
  {
    id: 22,
    name: "Banana Shake",
    category: "Drinks",
    calories: 150,
    price: 180,
    image: "/Banana shake.jpeg",
    description: "Smooth and creamy banana juice packed with potassium and natural sweetness.",
  },
  {
    id: 23,
    name: "Chocolate Shake",
    category: "Drinks",
    calories: 350,
    price: 300,
    image: "/Chocolate Shake.jpeg",
    description: "Rich and indulgent chocolate shake made with cocoa and chilled milk.",
  },
  {
    id: 24,
    name: "Mango shake",
    category: "Drinks",
    calories: 200,
    price: 200,
    image: "/Mango shake.jpeg",
    description: "Refreshing tropical mango juice made from ripe, juicy mangoes full of vitamins.",
  },
 ];


  // 🔹 filter logic
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Smart Nutrition Menu
        </h2>

        {/* 🔹 Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-green-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔹 Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{item.description}</p>
              <p className="text-gray-500">Calories: {item.calories}</p>
              <p className="text-green-600 font-bold">PKR {item.price}</p>

              <button
                onClick={() => addToCart(item)}
                className="mt-4 w-full bg-emerald-500 text-white py-2 px-4 rounded-xl hover:bg-emerald-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* 🔹 Cart Section */}
        <div className="mt-12 bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-4">🛒 Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500">No items in cart.</p>
          ) : (
            <>
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-500">
                        {item.calories} cal × {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                      <span className="text-green-600 font-semibold">
                        PKR {item.price * item.quantity}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Totals */}
              <div className="mt-6 flex justify-between font-bold text-lg">
                <span>Total Calories: {totalCalories}</span>
                <span>Total Price: PKR {totalPrice}</span>
              </div>

              {/* Checkout */}
              <Link
                to="/checkout"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block mt-4"
              >
                Proceed to Checkout
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SmartNutritionMenu;
