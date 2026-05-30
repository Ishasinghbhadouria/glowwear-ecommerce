import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail") || "user@example.com";
  const userName = userEmail.split("@")[0];
  const userInitial = userName.charAt(0).toUpperCase();

  const cartCount = JSON.parse(localStorage.getItem("cart") || "[]").length;
  const wishlistCount = JSON.parse(localStorage.getItem("wishlist") || "[]").length;
  const orderCount = JSON.parse(localStorage.getItem("orders") || "[]").length;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="w-28 h-28 mx-auto rounded-full bg-pink-500 text-white flex items-center justify-center text-4xl font-bold">
            {userInitial}
          </div>

          <h1 className="text-3xl font-bold mt-4">Welcome, {userName} 👋</h1>
          <p className="text-gray-500 mt-2">{userEmail}</p>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-pink-50 rounded-2xl p-5">
              <h3 className="font-bold text-xl">🛒 Cart</h3>
              <p>{cartCount} Items</p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-5">
              <h3 className="font-bold text-xl">❤️ Wishlist</h3>
              <p>{wishlistCount} Items</p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-5">
              <h3 className="font-bold text-xl">📦 Orders</h3>
              <p>{orderCount} Orders Completed</p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-5">
              <h3 className="font-bold text-xl">💳 Checkout</h3>
              <p>Ready for payment</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button onClick={() => navigate('/cart')} className="bg-purple-500 text-white px-5 py-3 rounded-xl">
              Go To Cart
            </button>

            <button onClick={() => navigate('/wishlist')} className="bg-pink-500 text-white px-5 py-3 rounded-xl">
              My Wishlist
            </button>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <button onClick={() => navigate('/dashboard')} className="bg-indigo-500 text-white px-5 py-3 rounded-xl">
              Open Dashboard
            </button>

            <button onClick={() => navigate('/checkout')} className="bg-green-500 text-white px-5 py-3 rounded-xl">
              Go To Checkout
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
