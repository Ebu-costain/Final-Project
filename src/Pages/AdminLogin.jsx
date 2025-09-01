import { useState } from "react";
import Navbar from "../Components/Navabar";
import Footer from "../Components/Footer";






export default function AdminLogin() {
  
  
  
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen h-14 bg-linear-to-t from-sky-500 to-green-500">
      
      <div className="max-w-md mx-auto p-20 bg-black/30 backdrop-blur-md rounded-xl shadow-xl mt-20">
        <h2 className="text-5xl font-bold text-center font-serif text-blue-800 mb-13">
          Admin Login
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
     
    </div>
     <Footer/>
    </>
  );
}
