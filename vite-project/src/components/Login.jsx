import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const SignUp = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-4"
          />
          <button className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
          <p className="text-center mt-2">
            Already have an account? <Link to="/signin" className="text-blue-500">Sign In</Link>
          </p>
        </div>
      </div>
    );
  };

  export default SignUp;