import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { FileText, Image, Video, Upload, Edit2, Trash2 } from "lucide-react"

export default function CourseDetails() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [contents, setContents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  // form state
  const [title, setTitle] = useState("")
  const [contentType, setContentType] = useState("")
  const [file, setFile] = useState(null)
  const [description, setDescription] = useState("")
  const [order, setOrder] = useState(0)
  const [editingId, setEditingId] = useState(null)

  const token = localStorage.getItem("accessToken")
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem("user"))
    } catch {
      return null
    }
  })()

  const cloudBase = "https://res.cloudinary.com/dlev4b4pu"
  const getFileUrl = (path) => {
    if (!path || typeof path !== "string") return null
    if (path.startsWith("http")) return path
    if (path.startsWith("/")) return `${cloudBase}${path}`
    return `${cloudBase}/${path}`
  }

  // --- Fetch Course + Contents ---
  const fetchCourse = async () => {
    try {
      const res = await fetch(
        `https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/courses/${id}/`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      const data = await res.json()
      if (!res.ok) return setError("Failed to load course")
      setCourse(data)
    } catch {
      setError("Failed to load course")
    }
  }

  const fetchContents = async () => {
    try {
      const res = await fetch(
        `https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/contents/?course=${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      const data = await res.json()
      if (!res.ok) {
        setError("Failed to load contents")
        return setContents([])
      }
      const list = Array.isArray(data.results) ? data.results : data
      setContents(list || [])
    } catch {
      setError("Failed to load contents")
      setContents([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchCourse()
    fetchContents()
  }, [id])

  // --- Helpers ---
  const isOwner =
    course &&
    (typeof course.instructor === "object"
      ? Number(course.instructor.id)
      : Number(course.instructor)) === Number(user?.id)

  const resetForm = () => {
    setTitle("")
    setContentType("")
    setFile(null)
    setDescription("")
    setOrder(0)
    setEditingId(null)
  }

  // --- Upload / Update ---
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (!title || !contentType || (!file && !editingId)) {
      return setError("Provide title, type, and file (for new uploads)")
    }

    if (!user || user.role !== "admin" || !isOwner) {
      return setError("Not allowed")
    }

    try {
      if (editingId) {
        // Update existing content
        const payload = {
          title,
          content_type: contentType,
          description,
          order: Number(order),
          is_active: true,
          course: Number(id),
        }
        const res = await fetch(
          `https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/contents/${editingId}/`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        )
        const data = await res.json()
        if (!res.ok) return setError(data.detail || "Update failed")
        setMessage("Content updated")
      } else {
        // Upload new content
        const form = new FormData()
        form.append("course", id)
        form.append("title", title)
        form.append("content_type", contentType)
        form.append("content_file", file)
        form.append("description", description || "")
        form.append("order", order)
        form.append("is_active", true)

        const res = await fetch(
          `https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/contents/`,
          { method: "POST", headers: { Authorization: `Bearer ${token}` }, body: form }
        )
        const data = await res.json()
        if (!res.ok) return setError(data.detail || "Upload failed")
        setMessage("Content uploaded")
      }

      resetForm()
      fetchContents()
    } catch {
      setError(editingId ? "Update failed" : "Upload failed")
    }
  }

  // --- Delete ---
  const handleDelete = async (contentId) => {
    try {
      const res = await fetch(
        `https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/contents/${contentId}/`,
        { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
      )
      if (!res.ok) return setError("Delete failed")
      setMessage("Content deleted")
      setContents((prev) => prev.filter((c) => c.id !== contentId))
    } catch {
      setError("Delete failed")
    }
  }

  // --- Preview Renderer ---
  const renderContentPreview = (c) => {
    const url = getFileUrl(c.content_file)
    if (!url) return null
    if (c.content_type === "video")
      return (
        <video controls className="w-full rounded mt-2">
          <source src={url} type="video/mp4" />
        </video>
      )
    if (c.content_type === "image")
      return (
        <img
          src={url}
          alt={c.title}
          className="w-full h-48 object-cover rounded mt-2"
        />
      )
    if (c.content_type === "document")
      return (
        <div className="mt-2">
          <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(
              url
            )}&embedded=true`}
            className="w-full h-80 border rounded"
            title={c.title}
          />
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline mt-2 inline-block"
          >
            Open Document
          </a>
        </div>
      )
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline mt-2 inline-block"
      >
        Download File
      </a>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
        )}
        {message && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            {message}
          </div>
        )}

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : course ? (
          <>
            {/* Course Header */}
            <motion.div
              className="bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-6 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {course.title}
              </h1>
              <p className="text-gray-600 mb-4">{course.description}</p>
              {course.thumbnail && (
                <img
                  src={getFileUrl(course.thumbnail)}
                  alt={course.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}
            </motion.div>

            {/* --- Admin View (Instructor) --- */}
            {user?.role === "admin" && isOwner ? (
              <>
                <motion.form
                  onSubmit={handleSubmit}
                  className="bg-white/80 backdrop-blur-lg shadow-md rounded-xl p-6 mb-8 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Upload size={20} />
                    {editingId ? "Edit Content" : "Upload Content"}
                  </h2>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full p-2 border rounded"
                    required
                  />
                  <select
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="video">Video</option>
                    <option value="document">Document</option>
                    <option value="image">Image</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="number"
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                    placeholder="Order"
                    className="w-full p-2 border rounded"
                  />
                  {!editingId && (
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="w-full"
                      required
                    />
                  )}
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                      {editingId ? "Update" : "Upload"}
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={resetForm}
                        className="bg-gray-200 px-4 py-2 rounded"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </motion.form>

                <h2 className="text-2xl font-semibold mb-4">Manage Contents</h2>
                {contents.length === 0 ? (
                  <p className="text-gray-600">No content uploaded yet</p>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2">
                    {contents.map((c, i) => (
                      <motion.div
                        key={c.id}
                        className="bg-white/70 backdrop-blur-lg shadow-md rounded-xl p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-gray-800">
                              {c.title}
                            </p>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              {c.content_type === "video" && <Video size={14} />}
                              {c.content_type === "image" && <Image size={14} />}
                              {c.content_type === "document" && (
                                <FileText size={14} />
                              )}
                              {c.content_type}
                            </p>
                            {c.description && (
                              <p className="text-sm mt-1">{c.description}</p>
                            )}
                            {renderContentPreview(c)}
                          </div>
                          <div className="flex flex-col gap-2 ml-3">
                            <button
                              onClick={() => {
                                setEditingId(c.id)
                                setTitle(c.title)
                                setContentType(c.content_type)
                                setDescription(c.description || "")
                                setOrder(c.order || 0)
                              }}
                              className="bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-1"
                            >
                              <Edit2 size={14} /> Edit
                            </button>
                            <button
                              onClick={() => handleDelete(c.id)}
                              className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1"
                            >
                              <Trash2 size={14} /> Delete
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              // --- Student View ---
              <>
                <h2 className="text-2xl font-semibold mb-4">Course Contents</h2>
                {contents.length === 0 ? (
                  <p className="text-gray-600">No content available yet</p>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2">
                    {contents.map((c, i) => (
                      <motion.div
                        key={c.id}
                        className="bg-white/70 backdrop-blur-lg shadow-md rounded-xl p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <p className="font-semibold text-gray-800">{c.title}</p>
                        <p className="text-sm text-gray-500">
                          {c.content_type}
                        </p>
                        {c.description && (
                          <p className="text-sm mt-1">{c.description}</p>
                        )}
                        {renderContentPreview(c)}
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <p className="text-center">Course not found</p>
        )}
      </div>
    </section>
  )
}
