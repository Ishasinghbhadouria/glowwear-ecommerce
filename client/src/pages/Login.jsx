import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaGoogle, FaUser, FaLock } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", res.data.token);

      if (res.data.user) {
        localStorage.setItem("userEmail", res.data.user.email || email);
        localStorage.setItem("userName", res.data.user.name || "User");
      } else {
        localStorage.setItem("userEmail", email);
      }

      alert("Login Successful");
      navigate("/");
    } catch (error) {
      alert("Login Failed");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-rose-100">
      <Navbar />

      <div className="flex items-center justify-center py-16 px-4">
        <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-pink-600 mb-2">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Login to continue shopping
          </p>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Email</label>
            <div className="flex items-center border rounded-xl px-3">
              <FaUser className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Password</label>
            <div className="flex items-center border rounded-xl px-3">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold"
          >
            Login
          </button>

          <button className="w-full mt-4 border py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50">
            <FaGoogle />
            Continue with Google
          </button>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-pink-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;