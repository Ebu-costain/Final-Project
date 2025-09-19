import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  Info,
  BookOpen,
  Phone,
  LayoutDashboard,
  LogOut,
  LogIn,
  UserPlus,
  Menu,
  X,
  GraduationCap
} from "lucide-react"

const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const token = localStorage.getItem("accessToken")
  const user = JSON.parse(localStorage.getItem("user"))
  const isLoggedIn = !!token
  const role = user?.role

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("user")
    navigate("/") // send user to Home after logout
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-900 via-green-700 to-green-400 shadow-lg text-yellow-100 sticky top-0 w-full z-50"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center cursor-pointer"
      >
        <GraduationCap className="w-10 h-10 text-yellow-400" />
        <Link to="/" className="ml-3">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-extrabold tracking-wide text-yellow-100 hover:text-yellow-400"
          >
            EduManager
          </motion.span>
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">
        <motion.li whileHover={{ scale: 1.1 }} className="mx-4 flex items-center gap-1 hover:text-yellow-400">
          <Home size={18} /> <Link to="/">Home</Link>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }} className="mx-4 flex items-center gap-1 hover:text-yellow-400">
          <Info size={18} /> <Link to="/about">About Us</Link>
        </motion.li>

        {/* Show "Courses" only if logged in */}
        {isLoggedIn && (role === "student" || role === "admin") && (
          <motion.li whileHover={{ scale: 1.1 }} className="mx-4 flex items-center gap-1 hover:text-yellow-400">
            <BookOpen size={18} /> <Link to="/course/details/:id">Courses</Link>
          </motion.li>
        )}

        <motion.li whileHover={{ scale: 1.1 }} className="mx-4 flex items-center gap-1 hover:text-yellow-400">
          <Phone size={18} /> <Link to="/contact">Contact Us</Link>
        </motion.li>

        {/* Dashboards */}
        {isLoggedIn && role === "admin" && (
          <motion.li whileHover={{ scale: 1.1 }} className="mx-4 flex items-center gap-1 hover:text-yellow-400">
            <LayoutDashboard size={18} /> <Link to="/admin/dashboard">Admin Dashboard</Link>
          </motion.li>
        )}
        {isLoggedIn && role === "student" && (
          <motion.li whileHover={{ scale: 1.1 }} className="mx-4 flex items-center gap-1 hover:text-yellow-400">
            <LayoutDashboard size={18} /> <Link to="/student/dashboard">Student Dashboard</Link>
          </motion.li>
        )}
      </ul>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex space-x-4">
        {!isLoggedIn ? (
          <>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/auth">
                <button className="flex items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-yellow-500">
                  <LogIn size={18} /> Login
                </button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/register">
                <button className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-yellow-500">
                  <UserPlus size={18} /> Register
                </button>
              </Link>
            </motion.div>
          </>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleLogout}
            className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-yellow-500"
          >
            <LogOut size={18} /> Logout
          </motion.button>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-gray-900 text-yellow-100 shadow-lg p-6 flex flex-col space-y-4 md:hidden"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-yellow-400">
              <Home size={18} /> Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-yellow-400">
              <Info size={18} /> About Us
            </Link>
            {isLoggedIn && (role === "student" || role === "admin") && (
              <Link to={`/course/${course.id}`} onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-yellow-400">
                <BookOpen size={18} /> Courses
              </Link>
            )}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-yellow-400">
              <Phone size={18} /> Contact Us
            </Link>
            {isLoggedIn && role === "admin" && (
              <Link to="/admin/dashboard" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-yellow-400">
                <LayoutDashboard size={18} /> Admin Dashboard
              </Link>
            )}
            {isLoggedIn && role === "student" && (
              <Link to="/student/dashboard" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-yellow-400">
                <LayoutDashboard size={18} /> Student Dashboard
              </Link>
            )}
            {!isLoggedIn ? (
              <>
                <Link to="/auth" onClick={() => setIsOpen(false)} className="flex items-center gap-2 bg-blue-500 px-3 py-2 rounded hover:bg-yellow-500">
                  <LogIn size={18} /> Login
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)} className="flex items-center gap-2 bg-green-600 px-3 py-2 rounded hover:bg-yellow-500">
                  <UserPlus size={18} /> Register
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(false)
                  handleLogout()
                }}
                className="flex items-center gap-2 bg-red-500 px-3 py-2 rounded hover:bg-yellow-500"
              >
                <LogOut size={18} /> Logout
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
