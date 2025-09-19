import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CourseDetails from "./Pages/CourseDetails";
import ProgressMonitoring from "./Pages/ProgressMonitoring";
import UserManagement from "./Pages/ContactUs";
import ProfilePage from "./Pages/ProfilePage";
import Navbar from "./Components/Navabar";
import Footer from "./Components/Footer";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import AdminDashboard from "./Pages/AdminDashboard";  
import StudentDashboard from "./Pages/StudentDashboard";
import AdminProfilePage from "./Pages/AdminProfile";
import AboutUs from "./Pages/Aboutpage";
import ContactUs from "./Pages/ContactUs";



function App() {
  return (
    
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow" />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/course/details/:id" element={<CourseDetails />} />
        <Route path="/student/progress" element={<ProgressMonitoring />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/admin/profile" element={<AdminProfilePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      

    </Routes>
      <main />
      <Footer />
    </div>
    

  );
}

export default App;