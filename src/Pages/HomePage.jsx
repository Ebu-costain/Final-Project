import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { BarChart3, GraduationCap, ShieldCheck } from "lucide-react"

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex flex-col justify-center items-center px-6"
        style={{ backgroundImage: "url('/imageBack.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight font-serif mb-6 drop-shadow-lg">
            Welcome to <span className="text-amber-400">EduManager</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-serif drop-shadow-md">
            The smart platform for students and administrators to{" "}
            <span className="font-semibold">learn, manage, and grow</span>.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/register"
              className="bg-amber-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-amber-600 hover:scale-105 transition transform font-medium text-lg"
            >
              Get Started
            </Link>
            <Link
              to="/auth"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition transform font-medium text-lg"
            >
              Login
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-red-300 to-black">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Why EduManager?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-300 p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <BarChart3 className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Smart Dashboards</h3>
            <p className="font-serif text-black">
              Administrators get full control to track students, courses, and
              enrollment progress in real-time.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-300 p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <GraduationCap className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Student-Friendly</h3>
            <p className="font-serif text-black">
              Students can easily browse courses, enroll, and manage their
              learning journey.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-red-300 p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <ShieldCheck className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Secure Access</h3>
            <p className="font-serif text-black">
              Role-based login keeps your data safe and provides a smooth
              experience for both students and admins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-amber-500 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 font-serif"
        >
          Start Your EduManager Journey Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-8 text-lg"
        >
          Empower your institution with modern tools for managing courses,
          students, and success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/register"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition transform text-lg"
          >
            Create Your Account
          </Link>
        </motion.div>
      </section>
    </>
  )
}

export default HomePage
