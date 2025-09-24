import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "cod", // default: cash on delivery
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill all details!");
      return;
    }
    alert(`✅ Order placed successfully!\nTotal: $${totalPrice}`);
    clearCart(); // Empty cart after checkout
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      {/* Cart Summary */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        {cart.length === 0 ? (
          <p>
            Your cart is empty.{" "}
            <Link to="/smart-nutrition-menu" className="text-blue-600">
               Go to Menu
           </Link>
          </p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between py-2">
               <span>
                 {item.name} (x{item.quantity})
               </span>
               <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="text-right mt-4 font-bold text-lg">
          Total: ${totalPrice}
        </div>
    </div>


      {/* Checkout Form */}
      <form onSubmit={handleCheckout} className="space-y-4">
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded p-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded p-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Address</label>
          <textarea
            name="address"
            className="w-full border rounded p-2"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Payment Method</label>
          <select
            name="payment"
            className="w-full border rounded p-2"
            value={formData.payment}
            onChange={handleChange}
          >
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
