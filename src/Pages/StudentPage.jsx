import React from 'react'
import Navbar from '../Components/Navabar';
import Footer from "../Components/Footer";  
import StudentLogin from './StudentLogin';
import StudentSignUp from './Studentsignup';

const StudentPage = () => {
  return (
    <div>
      <Navbar/>
      <StudentLogin/>
      <StudentSignUp/>
      <Footer/>
    </div>
  )
}

export default StudentPage
