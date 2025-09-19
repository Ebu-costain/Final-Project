import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  BookOpen,
  Users,
  PlusCircle,
  Trash2,
  LogOut,
  CheckCircle,
  XCircle
} from "lucide-react"

const AdminDashboard = () => {
  const [courses, setCourses] = useState([])
  const [enrollments, setEnrollments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    thumbnail: null
  })

  const user = JSON.parse(localStorage.getItem("user"))
  const cloudBase = "https://res.cloudinary.com/dlev4b4pu"
  const getThumbnailUrl = (path) => {
    if (!path || typeof path !== "string") return null
    if (path.startsWith("http")) return path
    if (path.startsWith("/")) return `${cloudBase}${path}`
    return `${cloudBase}/${path}`
  }

  // Fetch courses
  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem("accessToken")
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

  // Fetch enrollments
  const fetchEnrollments = async () => {
    try {
      const token = localStorage.getItem("accessToken")
      const res = await fetch(
        "https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/enrollments/",
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

  // Create course
  const handleCreateCourse = async (e) => {
    e.preventDefault()
    setError("")
    setMessage("")
    try {
      const token = localStorage.getItem("accessToken")
      const body = new FormData()
      body.append("title", formData.title)
      body.append("description", formData.description)
      body.append("start_date", formData.start_date)
      body.append("end_date", formData.end_date)
      if (formData.thumbnail) body.append("thumbnail", formData.thumbnail)
      if (user?.id) body.append("instructor", user.id)

      const res = await fetch(
        "https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/courses/",
        { method: "POST", headers: { Authorization: `Bearer ${token}` }, body }
      )
      const data = await res.json()
      if (!res.ok) throw new Error(JSON.stringify(data))
      setMessage("Course created successfully")
      setFormData({ title: "", description: "", start_date: "", end_date: "", thumbnail: null })
      fetchCourses()
    } catch {
      setError("Error creating course")
    }
  }

  // Delete course
  const handleDeleteCourse = async (courseId) => {
    try {
      const token = localStorage.getItem("accessToken")
      const res = await fetch(
        `https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/courses/${courseId}/`,
        { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
      )
      if (!res.ok) throw new Error()
      setMessage("Course deleted successfully")
      fetchCourses()
    } catch {
      setError("Error deleting course")
    }
  }

  // Approve/reject enrollment
  const handleUpdateEnrollment = async (id, status) => {
    try {
      const token = localStorage.getItem("accessToken")
      const res = await fetch(
        `https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/enrollments/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ status })
        }
      )
      if (!res.ok) throw new Error()
      setMessage(`Enrollment ${status}`)
      fetchEnrollments()
    } catch {
      setError("Error updating enrollment")
    }
  }

  useEffect(() => {
    fetchCourses()
    fetchEnrollments()
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-gray-100 flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
          Edu Manager
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <Link to="/course/" className="flex items-center gap-2 hover:text-indigo-400">
            <BookOpen size={18} /> Courses
          </Link>
          <Link to="/admin/profile" className="flex items-center gap-2 hover:text-indigo-400">
            <Users size={18} /> Profile
          </Link>
          <Link to="/admin/dashboard" className="flex items-center gap-2 hover:text-indigo-400">
            <PlusCircle size={18} /> Create Course
          </Link>
        </nav>
        <button className="p-4 flex items-center gap-2 hover:text-red-400">
          <LogOut size={18} /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <img
              src="https://ui-avatars.com/api/?name=Admin"
              alt="Admin"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-600">{message}</p>}

        {/* Create Course */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 bg-white shadow rounded p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Create New Course</h2>
          <form onSubmit={handleCreateCourse} className="space-y-4">
            <input type="text" name="title" value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Course Title" className="w-full p-2 border rounded" required />
            <textarea name="description" value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Course Description" className="w-full p-2 border rounded" required />
            <div className="flex gap-4">
              <input type="date" name="start_date" value={formData.start_date}
                onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                className="w-1/2 p-2 border rounded" required />
              <input type="date" name="end_date" value={formData.end_date}
                onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                className="w-1/2 p-2 border rounded" required />
            </div>
            <input type="file" name="thumbnail" accept="image/*"
              onChange={(e) => setFormData({ ...formData, thumbnail: e.target.files[0] })}
              className="w-full p-2 border rounded" />
            <button type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Create Course
            </button>
          </form>
        </motion.div>

        {/* Courses List */}
        <h2 className="text-xl font-semibold mb-2">Your Courses</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {courses.filter(c => c.instructor === user?.id).map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 border rounded bg-white shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold">{course.title}</h3>
              <p className="text-sm text-gray-600">
                {course.start_date} - {course.end_date}
              </p>
              {course.thumbnail && (
                <img src={getThumbnailUrl(course.thumbnail)} alt={course.title}
                     className="w-full h-40 object-cover rounded mb-2" />
              )}
              <p>{course.description}</p>
              <div className="flex gap-3 mt-2">
                <Link to={`/course/${course.id}`}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  View Details
                </Link>
                <button onClick={() => handleDeleteCourse(course.id)}
                  className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pending Enrollments */}
        <h2 className="text-xl font-semibold mt-8 mb-2">Pending Enrollments</h2>
        {enrollments.filter(en => en.status === "pending").length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {enrollments.filter(en => en.status === "pending").map((en) => (
              <motion.div
                key={en.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 border rounded bg-white shadow"
              >
                <p>
                  Student ID: <b>{en.student}</b> requested enrollment in course <b>{en.course}</b>
                </p>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => handleUpdateEnrollment(en.id, "approved")}
                    className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    <CheckCircle size={16} /> Approve
                  </button>
                  <button onClick={() => handleUpdateEnrollment(en.id, "rejected")}
                    className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    <XCircle size={16} /> Reject
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : <p>No pending enrollments</p>}
      </div>
    </div>
  )
}

export default AdminDashboard
