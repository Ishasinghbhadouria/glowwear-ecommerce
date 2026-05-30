import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5001/api/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", name);

      alert("Signup Successful! Now login.");
      window.location.href = "/login";
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error.response?.data);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Signup Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-rose-100">
      <Navbar />

      <div className="flex justify-center items-center py-16">
        <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">
            Create Account
          </h1>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded-xl mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-xl mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-xl mb-4"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;