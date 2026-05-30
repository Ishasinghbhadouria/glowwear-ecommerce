import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-5xl font-bold text-pink-600 mb-2">
          Welcome to GlowWear 👋
        </h1>

        <p className="text-gray-600 mb-8">
          Manage your shopping activity from one place.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <h3 className="text-3xl">🛒</h3>
            <p className="font-bold mt-2">Cart</p>
            <p>{JSON.parse(localStorage.getItem("cart") || "[]").length} Items</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <h3 className="text-3xl">❤️</h3>
            <p className="font-bold mt-2">Wishlist</p>
            <p>{JSON.parse(localStorage.getItem("wishlist") || "[]").length} Items</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <h3 className="text-3xl">📦</h3>
            <p className="font-bold mt-2">Orders</p>
            <p>{JSON.parse(localStorage.getItem("orders") || "[]").length} Orders</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <h3 className="text-3xl">⭐</h3>
            <p className="font-bold mt-2">Member</p>
            <p>GlowWear Club</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-2">Exclusive Member Offer</h2>
          <p className="text-lg">Get an extra 15% off on your next order.</p>
          <div className="mt-4 inline-block bg-white text-black px-5 py-2 rounded-xl font-bold">
            USE CODE: GLOW15
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-pink-600">🎉 New User Offer</h3>
            <p className="mt-3">Flat 20% OFF on your first order.</p>
            <p className="mt-3 font-bold">Code: NEW20</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-pink-600">💄 Beauty Sale</h3>
            <p className="mt-3">Buy 2 Beauty Products and get 1 free.</p>
            <p className="mt-3 font-bold">Code: BEAUTYFREE</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-pink-600">👗 Fashion Deal</h3>
            <p className="mt-3">Extra 25% OFF on Women's Fashion.</p>
            <p className="mt-3 font-bold">Code: STYLE25</p>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">🔥 Active Coupons</h2>

          <div className="space-y-4">
            <div className="border rounded-2xl p-4">
              <h3 className="font-bold">SAVE100</h3>
              <p>₹100 OFF on orders above ₹999</p>
            </div>

            <div className="border rounded-2xl p-4">
              <h3 className="font-bold">FREESHIP</h3>
              <p>Free shipping on all orders above ₹499</p>
            </div>

            <div className="border rounded-2xl p-4">
              <h3 className="font-bold">GLOW15</h3>
              <p>15% OFF for GlowWear Club members</p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-white shadow-xl">
          <h2 className="text-4xl font-bold">🏆 Premium Member Benefits</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>✔ Early access to sales</li>
            <li>✔ Exclusive coupon codes</li>
            <li>✔ Faster delivery</li>
            <li>✔ Special birthday discounts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;