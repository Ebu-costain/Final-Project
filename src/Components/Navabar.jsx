import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBook, FaBookOpen } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-linear-to-t from orange-500 to-pink-400 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-8xl mx-auto px-10">
      <div className="flex justify-between items-center h-25">
          <Link to="/" className="text-4xl font-bold text-gray-300 font-serif">
           📚 EduManage
          </Link>

          
          <div className="hidden md:flex space-x-6 font-serif text-yellow-100">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/get-started" className="hover:text-blue-600 transition">
              Get Started
            </Link>
            <Link to="/admin" className="hover:text-blue-600 transition">
              Admin
            </Link>
            <Link to="/student/signup" className="hover:text-blue-600 transition">
              Student
            </Link>
          </div>

        
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2 font-serif">
          <Link
            to="/"
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/get-started"
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
          <Link
            to="/auth/admin"
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Admin
          </Link>
          <Link
            to="/auth/student"
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Student
          </Link>
        </div>
      )}
    </nav>
  );
}

