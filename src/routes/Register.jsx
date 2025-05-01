import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const formatPhoneNumber = (value) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, "");
    const len = digits.length;

    if (len <= 3) return digits;
    if (len <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({...prev, [e.target.name]: formatted}));
  };

  const handleChange = (e) => {
    const {name, value} = e.target
    let formattedValue = value;
    if(name === "phone") {
      formattedValue = formatPhoneNumber(e.target.value);
    }
    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await register(formData);
      navigate("/dashboard");
    } catch (err) {
      console.log(err.message);
    }

  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600">Create Account</h1>
          <p className="text-gray-500 mt-2">Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={handleChange}
              maxLength={12}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
