import React from 'react'
import AdminLogin from './AdminLogin'
import AdminSignUp from './AdminSignup'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navabar'

const AdminPage = () => {
  return (
    <div>
      <Navbar/>
      <AdminSignUp/>
      <Footer/>
    </div>
  )
}

export default AdminPage
