import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Mail, Lock, KeyRound } from "lucide-react"

const Login = () => {
  const [role, setRole] = useState("student")
  const [formData, setFormData] = useState({ email: "", password: "", secretKey: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const requestData = { email: formData.email, password: formData.password }
      if (role === "admin") requestData.secretKey = formData.secretKey

      const response = await fetch(
        "https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/auth/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      )

      const data = await response.json()
      if (response.ok) {
        localStorage.setItem("accessToken", data.access)
        localStorage.setItem("refreshToken", data.refresh)
        localStorage.setItem("user", JSON.stringify(data.user))
        localStorage.setItem("userEmail", formData.email)

        if (role === "student" && data.user.id) {
          localStorage.setItem("studentId", data.user.id)
        }

        if (data.user.role === "admin") {
          navigate("/admin/dashboard")
        } else {
          navigate("/student/dashboard")
        }
      } else {
        setError(data.detail || data.message || "Login failed")
      }
    } catch (err) {
      console.error(err)
      setError("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-screen flex">
      {/* Left Side */}
      <div
        className="hidden md:flex w-1/2 relative bg-cover bg-center items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-orange-500 px-10">
          <h1 className="text-5xl font-extrabold mb-4">Welcome Back!</h1>
          <p className="text-center text-yellow-200 mb-6">
            Securely log in to access your personalized dashboard.  
             Whether you're a Student or Admin, we’ve got you covered.
        </p>

        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-r from-pink-600 to-yellow-400">
        <div className="p-10 max-w-md w-full bg-white/80 rounded-xl shadow-2xl backdrop-blur-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Role Selector */}
          <div className="mb-6 flex justify-center space-x-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value="student"
                checked={role === "student"}
                onChange={() => setRole("student")}
                className="accent-amber-500"
              />
              <span className="text-gray-700 font-medium">Student</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value="admin"
                checked={role === "admin"}
                onChange={() => setRole("admin")}
                className="accent-amber-500"
              />
              <span className="text-gray-700 font-medium">Admin</span>
            </label>
          </div>

          {/* Login Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
            {/* ✅ Email Input with Mail Icon */}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="p-4 bg-black text-gray-500">
                <Mail size={18} />
              </span>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full p-3 outline-none"
                required
              />
            </div>

            {/* ✅ Password Input with Lock Icon */}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="p-4 bg-black text-gray-500">
                <Lock size={18} />
              </span>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
                className="w-full p-3 outline-none"
                required
              />
            </div>

            {/* ✅ Secret Key Input with Key Icon (Admin only) */}
            {role === "admin" && (
              <div className="flex items-center border border-black rounded-lg overflow-hidden">
                <span className="p-4 bg-black text-gray-500">
                  <KeyRound size={18} />
                </span>
                <input
                  name="secretKey"
                  value={formData.secretKey}
                  onChange={handleChange}
                  type="password"
                  placeholder="Secret Key"
                  className="w-full p-3 outline-none"
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-lg w-full text-white font-semibold transition ${
                loading ? "bg-amber-300 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
              <p className="text-center text-gray-600 text-sm mt-4">
              Don’t have an account?{" "}
              <span className="text-amber-600 font-semibold cursor-pointer hover:underline">
                Sign up here
                </span>
              
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
