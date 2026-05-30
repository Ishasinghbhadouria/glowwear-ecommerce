import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const products = {
  1: {
    name: "Summer Dress",
    price: 1499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900",
    description: "Elegant summer dress perfect for casual outings and vacations.",
  },
  2: {
    name: "Sneakers",
    price: 2499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
    description: "Comfortable sneakers designed for everyday wear.",
  },
  3: {
    name: "Beauty Kit",
    price: 999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900",
    description: "Complete beauty essentials for your daily routine.",
  },
  4: {
    name: "Handbag",
    price: 1999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900",
    description: "Stylish handbag with premium finish and spacious design.",
  },
  5: {
    name: "Party Wear",
    price: 2999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=900",
    description: "Trendy party wear outfit for special occasions.",
  },
  6: {
    name: "Watch",
    price: 3499,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=900",
    description: "Premium watch with modern design and durability.",
  },
};

function ProductDetails() {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <h1 className="text-center text-3xl mt-20">Product Not Found</h1>
      </div>
    );
  }

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart successfully");
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />

      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-3xl shadow-xl"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold mb-4">{product.name}</h1>

          <p className="text-yellow-500 text-xl mb-3">
            ⭐ {product.rating}/5
          </p>

          <p className="text-3xl font-bold text-pink-600 mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <div className="space-y-3">
            <button
              onClick={addToCart}
              className="w-full bg-pink-600 text-white py-3 rounded-xl font-bold"
            >
              Add To Cart 🛒
            </button>

            <button
              className="w-full border-2 border-pink-600 text-pink-600 py-3 rounded-xl font-bold"
            >
              Add To Wishlist ❤️
            </button>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-5 shadow">
            <h3 className="font-bold text-xl mb-2">Delivery Information</h3>
            <p>🚚 Free delivery on orders above ₹299</p>
            <p>↩️ 7-day easy returns</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;