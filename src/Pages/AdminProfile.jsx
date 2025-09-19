// src/pages/AdminProfilePage.jsx
import React from "react"
import { motion } from "framer-motion"
import {
  User,
  Mail,
  Shield,
  Users,
  BookOpen,
  Settings,
  Lock,
  Activity,
} from "lucide-react"

function AdminProfilePage() {
  const stats = [
    { id: 1, label: "Total Users", value: "1,245", icon: Users, color: "text-blue-600" },
    { id: 2, label: "Active Courses", value: "32", icon: BookOpen, color: "text-green-600" },
    { id: 3, label: "Reports", value: "7", icon: Activity, color: "text-red-600" },
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
        Admin Dashboard
      </motion.h1>

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow rounded-lg p-6 flex items-center gap-6 mb-8"
      >
        <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-3xl font-bold shadow-inner">
          <Shield className="w-12 h-12" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Admin John</h2>
          <p className="text-gray-600 flex items-center gap-2">
            <Mail className="w-4 h-4" /> admin@email.com
          </p>
          <p className="text-sm text-purple-600 font-medium mt-1">
            Super Administrator
          </p>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-6 mb-6"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow rounded-lg p-6 flex items-center gap-4"
          >
            <stat.icon className={`w-10 h-10 ${stat.color}`} />
            <div>
              <p className="text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {stat.value}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Management Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow rounded-lg p-6 mb-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Management Tools
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4 hover:shadow-md transition cursor-pointer">
            <Users className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-800">Manage Users</h3>
            <p className="text-sm text-gray-600">
              Add, edit, and remove platform users.
            </p>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-md transition cursor-pointer">
            <BookOpen className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-semibold text-gray-800">Manage Courses</h3>
            <p className="text-sm text-gray-600">
              Create and update course details.
            </p>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-md transition cursor-pointer">
            <Activity className="w-8 h-8 text-red-600 mb-2" />
            <h3 className="font-semibold text-gray-800">View Reports</h3>
            <p className="text-sm text-gray-600">
              Monitor platform activity and logs.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Settings Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow rounded-lg p-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Admin Settings</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
            <Settings className="w-4 h-4" /> Platform Settings
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
            <Lock className="w-4 h-4" /> Change Password
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default AdminProfilePage
