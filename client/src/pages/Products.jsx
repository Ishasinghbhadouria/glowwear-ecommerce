import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Summer Dress",
    price: 1499,
    category: "Women",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Sneakers",
    price: 2499,
    category: "Men",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Beauty Kit",
    price: 999,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Handbag",
    price: 1999,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Party Wear",
    price: 2999,
    category: "Women",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Watch",
    price: 3499,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
    rating: 4.9,
  },
];

function Products() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [timeLeft, setTimeLeft] = useState("23:59:59");

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const parts = prev.split(":").map(Number);
        let [h, m, s] = parts;

        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
          }
        }

        return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [selectedCategory, searchTerm]);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };

  const buyNow = (product) => {
    const cart = [product];
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "/cart";
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);

    let updatedWishlist;

    if (exists) {
      updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      updatedWishlist = [...wishlist, product];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-3xl p-8 mb-10 text-center shadow-xl">
          <h2 className="text-4xl font-bold mb-2">🔥 Fashion Flash Sale</h2>
          <p className="text-lg">Up to 70% OFF on Beauty, Fashion & Accessories</p>
          <div className="mt-4 text-2xl font-bold">
            Ends In: {timeLeft}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["All", "Women", "Men", "Beauty", "Accessories"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full ${selectedCategory === cat ? "bg-pink-500 text-white" : "bg-white shadow"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md border rounded-xl p-3 shadow"
          />
        </div>

        <h1 className="text-5xl font-bold text-center mb-3">
          Trending Collection
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Fashion • Beauty • Accessories
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-pink-500 font-medium">
                    {product.category}
                  </span>
                  <FaHeart
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product);
                    }}
                    className={`cursor-pointer ${wishlist.find((item) => item.id === product.id)
                      ? "text-red-500"
                      : "text-gray-400 hover:text-red-500"}`}
                  />
                </div>

                <h2 className="font-bold text-lg">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 my-2">
                  <div className="flex text-yellow-500 gap-1">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>

                <p className="text-pink-600 font-bold text-xl">
                  ₹{product.price}
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart /> Add To Cart
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      buyNow(product);
                    }}
                    className="flex-1 bg-black hover:bg-gray-800 text-white py-2 rounded-xl"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Join Our Fashion Club</h2>
          <p className="text-gray-500 mb-4">
            Get exclusive offers, beauty tips and new arrivals.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-3 rounded-xl w-full max-w-md"
          />
          <button className="ml-3 bg-pink-500 text-white px-6 py-3 rounded-xl mt-3 md:mt-0">
            Subscribe
          </button>
        </div>

        <footer className="mt-12 text-center text-gray-500 py-6 border-t">
          <p>© 2026 GlowWear Fashion Store</p>
          <p>Follow us on Instagram • Facebook • Pinterest</p>
        </footer>
      </div>
    </div>
  );
}

export default Products;