

import { useState } from "react";
import Navbar from "../components/Navbar";

function Wishlist() {
  const [wishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          My Wishlist ❤️
        </h1>

        {wishlist.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold">
              Your wishlist is empty
            </h2>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {wishlist.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover rounded-xl"
                />

                <h2 className="text-lg font-bold mt-3">
                  {item.name}
                </h2>

                <p className="text-pink-600 font-semibold">
                  ₹{item.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;