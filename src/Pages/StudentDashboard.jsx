// src/pages/StudentDashboard.jsx
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Book,
  Calendar,
  CheckCircle,
  AlertCircle,
  User,
  LayoutDashboard,
  LogOut,
} from "lucide-react"

const StudentDashboard = () => {
  const [courses, setCourses] = useState([])
  const [enrollments, setEnrollments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const user = JSON.parse(localStorage.getItem("user"))
  const token = localStorage.getItem("accessToken")
  const navigate = useNavigate()

  const cloudBase = "https://res.cloudinary.com/dlev4b4pu"
  const getThumbnailUrl = (path) => {
    if (!path || typeof path !== "string") return null
    if (path.startsWith("http")) return path
    if (path.startsWith("/")) return `${cloudBase}${path}`
    return `${cloudBase}/${path}`
  }

  const fetchCourses = async () => {
    try {
      const res = await fetch(
        "https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/courses/",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      const data = await res.json()
      if (res.ok) setCourses(data.results || data)
      else setError("Failed to fetch courses")
    } catch {
      setError("Error fetching courses")
    }
  }

  const fetchEnrollments = async () => {
    try {
      const res = await fetch(
        `https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/enrollments/?student=${user.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      const data = await res.json()
      if (res.ok) setEnrollments(data.results || data)
      else setError("Failed to fetch enrollments")
    } catch {
      setError("Error fetching enrollments")
    } finally {
      setLoading(false)
    }
  }

  const handleEnroll = async (courseId) => {
    try {
      const body = { student: user.id, course: courseId, status: "pending" }
      const res = await fetch(
        "https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/enrollments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      )
      if (!res.ok) throw new Error("Failed to enroll")
      setMessage("Enrollment request sent ✅")
      fetchEnrollments()
    } catch {
      setError("Error enrolling in course")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("accessToken")
    navigate("/login")
  }

  useEffect(() => {
    fetchCourses()
    fetchEnrollments()
  }, [])

  if (loading) return <p className="p-4">Loading...</p>
  if (error) return <p className="p-4 text-red-500">{error}</p>

  const approvedEnrollments = enrollments.filter((en) => en.status === "approved")

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-64 bg-gradient-to-b from-blue-500 to-purple-800 to-yellow-600 shadow-lg p-6 flex flex-col justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-white mb-8">
            Student Panel
          </h1>
          <nav className="space-y-4">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-black hover:text-blue-600"
            >
              <LayoutDashboard className="w-5 h-5" /> Dashboard
            </Link>
            <Link
              to="/profile"
              className="flex items-center gap-2 text-black hover:text-blue-600"
            >
              <User className="w-5 h-5" /> Profile
            </Link>
            
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-600 hover:text-red-700"
        >
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </motion.aside>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 flex items-center gap-2"
        >
          <Book className="text-blue-600" /> Student Dashboard
        </motion.h1>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 mb-4 flex items-center gap-2"
          >
            <CheckCircle className="w-5 h-5" /> {message}
          </motion.p>
        )}

        {/* My Courses */}
        <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
        {approvedEnrollments.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {approvedEnrollments.map((en, i) => {
              const course = courses.find((c) => c.id === en.course)
              if (!course) return null
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border rounded-lg overflow-hidden shadow hover:shadow-lg bg-white"
                >
                  {course.thumbnail && (
                    <img
                      src={getThumbnailUrl(course.thumbnail)}
                      alt={course.title}
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{course.title}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4" />
                      {course.start_date} - {course.end_date}
                    </p>
                    <p className="mt-2 text-gray-700">{course.description}</p>
                    <div className="mt-3">
                      <Link
                        to={`/course/${course.id || course._id}`}
                        className="text-blue-600 underline"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        ) : (
          <p className="mb-8 text-gray-600">No approved courses yet.</p>
        )}

        {/* Available Courses */}
        <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => {
            const enrollment = enrollments.find((en) => en.course === course.id)
            const status = enrollment?.status || null

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg bg-white"
              >
                {course.thumbnail && (
                  <img
                    src={getThumbnailUrl(course.thumbnail)}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-bold">{course.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4" />
                    {course.start_date} - {course.end_date}
                  </p>
                  <p className="mt-2 text-gray-700">{course.description}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <Link
                      to={`/course/${course.id || course._id}`}
                      className="text-blue-600 underline"
                    >
                      View Details
                    </Link>

                    {!status && (
                      <button
                        onClick={() => handleEnroll(course.id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Enroll
                      </button>
                    )}

                    {status && (
                      <span
                        className={`px-2 py-1 rounded text-white text-sm flex items-center gap-1 ${
                          status === "approved"
                            ? "bg-green-500"
                            : status === "rejected"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                        }`}
                      >
                        {status === "approved" ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <AlertCircle className="w-4 h-4" />
                        )}
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default StudentDashboard
