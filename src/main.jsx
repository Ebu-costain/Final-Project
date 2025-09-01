import { StrictMode } from "react"; 
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage.jsx";
import StudentPage from "./Pages/StudentPage.jsx";
import AdminPage from "./Pages/AdminPage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import GetStarted from "./Pages/GetStarted.jsx";
import AdminSignUp from "./Pages/AdminSignup.jsx";
import AdminLogin from "./Pages/AdminLogin.jsx";
import StudentLogin from "./Pages/StudentLogin.jsx";
import StudentSignUp from "./Pages/Studentsignup.jsx";

import "./App.css";
  


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes> 
        < Route path="/" element={<HomePage/>}/>
        < Route path="/first" element={<GetStarted/>}/>
        < Route path="/student" element={<StudentPage/>}/>
        < Route path="/admin" element={<AdminPage/>}/>
        < Route path="/landing" element={<LandingPage/>}/>
        < Route path="/get-started" element={<GetStarted/>}/>
        < Route path="/admin" element={<AdminSignUp/>}/>
        < Route path="/admin/login" element={<AdminLogin/>}/>
        < Route path="/student/login" element={<StudentLogin/>}/>
        < Route path="/student/signup" element={<StudentSignUp/>}/>
        

      </Routes>
     </BrowserRouter>
  </StrictMode> 
);