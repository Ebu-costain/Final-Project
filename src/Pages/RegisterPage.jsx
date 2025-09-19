import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const [role, setRole] = useState('student')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    dob: '',
    address: '',
    secretKey: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const requestData = {
        email: formData.email,
        password: formData.password,
        first_name: formData.firstname,
        last_name: formData.lastname,
        phone: formData.phone,
        date_of_birth: formData.dob,
        address: formData.address,
      }

      if (role === 'admin') {
        requestData.admin_secret = formData.secretKey
      }

      const response = await fetch(
        'https://sophisticated-eden-dr-white004-48b8c072.koyeb.app/api/auth/register/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData),
        }
      )

      const data = await response.json()

      if (response.ok) {
        if (data.access && data.refresh) {
          localStorage.setItem('accessToken', data.access)
          localStorage.setItem('refreshToken', data.refresh)
        } else {
          setError('Registration succeeded, but tokens are missing.')
          setLoading(false)
          return
        }

        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user))
        }

        if (data.user?.role === 'student') {
          navigate('/student/dashboard')
        } else if (data.user?.role === 'admin') {
          navigate('/admin/dashboard')
        } else {
          navigate('/home')
        }
      } else {
        setError(data.message || 'Registration failed. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-screen flex">
      {/* Left Side with Background Image and Welcome Text */}
      <div
        className="w-1/2 relative bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Welcome Message */}
        <div className="relative text-center text-amber-500  px-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg max-w-md mx-auto">
            Join us today and start your journey as a Student or Admin. Create an account to unlock all features.
          </p>
        </div>
      </div>

      {/* Right Side with Form */}
      <div className="w-1/2 flex items-center justify-center  bg-gradient-to-r from-pink-600 to-yellow-300 backdrop-blur-md">
        <div className="p-10 max-w-md w-full bg-white/70 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>
          )}

          <div className="mb-4 flex justify-center space-x-4">
            <label>
              <input
                type="radio"
                value="student"
                checked={role === 'student'}
                onChange={() => setRole('student')}
              />{' '}
              Student
            </label>
            <label>
              <input
                type="radio"
                value="admin"
                checked={role === 'admin'}
                onChange={() => setRole('admin')}
              />{' '}
              Admin
            </label>
          </div>

          <form className="space-y-4" onSubmit={handleRegister}>
            <input
              name="email"
              value={formData.email}
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <input
              name="firstname"
              type="text"
              value={formData.firstname}
              placeholder="First Name"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <input
              name="lastname"
              type="text"
              value={formData.lastname}
              placeholder="Last Name"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <input
              name="password"
              type="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <input
              name="address"
              value={formData.address}
              type="text"
              placeholder="Address"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            {role === 'admin' && (
              <input
                name="secretKey"
                type="password"
                value={formData.secretKey}
                placeholder="Secret Key"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            )}

            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 rounded w-full text-white 
                ${loading ? 'bg-amber-300 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600'}`}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span>Registering...</span>
                </div>
              ) : (
                'Register'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
