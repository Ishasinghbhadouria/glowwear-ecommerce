import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (index, change) => {
    const updatedCart = [...cartItems];

    if (!updatedCart[index].quantity) {
      updatedCart[index].quantity = 1;
    }

    updatedCart[index].quantity += change;

    if (updatedCart[index].quantity < 1) {
      updatedCart[index].quantity = 1;
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Shopping Cart 🛒
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-between"
                >
                  <div>
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p className="text-pink-600 font-semibold">
                      ₹{item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        -
                      </button>

                      <span className="font-bold">
                        {item.quantity || 1}
                      </span>

                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 text-right">
              <h2 className="text-2xl font-bold">
                Total: ₹{totalPrice}
              </h2>
              <button
                onClick={() => (window.location.href = "/checkout")}
                className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-xl font-bold"
              >
                Proceed To Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
