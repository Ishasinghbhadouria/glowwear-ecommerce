

import { useState } from "react";
import Navbar from "../components/Navbar";

function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      date: new Date().toLocaleDateString(),
      status: "Placed",
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    localStorage.removeItem("cart");
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-pink-50">
        <Navbar />
        <div className="max-w-3xl mx-auto p-10 text-center">
          <h1 className="text-5xl font-bold text-green-600 mb-4">
            🎉 Order Placed Successfully!
          </h1>
          <p className="text-xl text-gray-600">
            Thank you for shopping with GlowWear.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-8">
          Checkout
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 space-y-5"
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full border p-3 rounded-xl"
          />

          <textarea
            placeholder="Full Address"
            required
            className="w-full border p-3 rounded-xl"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              required
              className="border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Pincode"
              required
              className="border p-3 rounded-xl"
            />
          </div>

          <div>
            <h3 className="font-bold mb-3">Payment Method</h3>

            <label className="block mb-2">
              <input type="radio" name="payment" defaultChecked /> Cash On Delivery
            </label>

            <label className="block mb-2">
              <input type="radio" name="payment" /> UPI
            </label>

            <label className="block">
              <input type="radio" name="payment" /> Credit / Debit Card
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;