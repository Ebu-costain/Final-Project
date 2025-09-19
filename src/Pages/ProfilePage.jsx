// src/pages/ProfilePage.jsx
import React from "react"
import { motion } from "framer-motion"
import {
  User,
  Mail,
  Calendar,
  MapPin,
  Settings,
  Lock,
  BookOpen,
  Clock,
} from "lucide-react"

function ProfilePage() {
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      instructor: "Jane Smith",
      duration: "4 weeks",
      thumbnail:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
    {
      id: 2,
      title: "Advanced Node.js",
      instructor: "John Brown",
      duration: "6 weeks",
      thumbnail:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Emily Johnson",
      duration: "3 weeks",
      thumbnail:
        "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        Profile
      </motion.h1>

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow rounded-lg p-6 flex items-center gap-6 mb-8"
      >
        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-bold shadow-inner">
          <User className="w-12 h-12" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600 flex items-center gap-2">
            <Mail className="w-4 h-4" /> john.doe@email.com
          </p>
        </div>
      </motion.div>

      {/* Personal Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow rounded-lg p-6 mb-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Personal Information
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />{" "}
            <span>Username: johndoe123</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />{" "}
            <span>Joined: Jan 12, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />{" "}
            <span>Email: john.doe@email.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />{" "}
            <span>Location: New York, USA</span>
          </div>
        </div>
      </motion.div>

      {/* My Courses */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow rounded-lg p-6 mb-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          My Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" /> {course.title}
                </h3>
                <p className="text-sm text-gray-600">
                  Instructor: {course.instructor}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-2">
                  <Clock className="w-4 h-4 text-gray-400" /> {course.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Settings Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow rounded-lg p-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Settings</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            <Settings className="w-4 h-4" /> Edit Profile
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
            <Lock className="w-4 h-4" /> Change Password
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfilePage
