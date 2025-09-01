import { Link } from "react-router-dom";
import Navbar from "../Components/Navabar";
import Footer from "../Components/Footer";






export default function LandingPage() {
  return (
    
    <>
    <Navbar/>
    <div className="flex flex-col min-h-screen relative mt-25">
     
      <div className="absolute inset-0 bg-[url(/imageback2.webp)] bg-cover bg-center">
      </div>

      <div className="absolute inset-0 bg-black/50">
      </div>
      

      
      <main className="flex-grow flex flex-col items-center justify-center px-6 pt-30 relative z-15">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6 text-center font-serif">
          Welcome to <span className="text-pink-400">EduManage</span>
        </h1>
        <p className=" font-serif text-lg md:text-xl text-indigo-200 max-w-2xl text-center mb-10 drop-shadow-md font-extrabold">
          Your all-in-one school management system 🚀 <br />
          Manage students, teachers, and records seamlessly.
        </p>

       
        <div className="flex space-x-25 ">
          <Link 
            to="/admin">
          <button className="px-25 py-25 bg-linear-to-t from yellow-800 to-blue-300 shadow-md text-white text-lg rounded-full shadow-lg hover:scale-105 hover:bg-indigo-700 transition font-serif">
            <span className=" text-xl font-extrabold text-pink-300">C</span>ontinue as Admin
          </button>
          </Link>

           <Link 
            to="/student/signup">
          <button className="px-25 py-25 bg-linear-to-t from orange-800 to-pink-300 shadow-md text-white text-lg rounded-full shadow-lg hover:scale-105 hover:bg-green-700 transition font-serif">
            <span className="font-extrabold text-xl text-yellow-300">C</span>ontinue as Student
          </button>
          </Link>
        </div>
      </main> 
    </div>
    
    <div className="py-0 bg-linear-to-t from-sky-500 to-green-500 font-sans">
        <h2 className=" text-2xl font-bold text-yellow-800 mb-4 ml-5">
          Why Choose EduManage?
        </h2>
        <ul className="space-y-3 text-yellow-300 ml-5 p">
          <li>✅ Simplified student and staff management</li>
          <li>✅ Secure record keeping with modern tech</li>
          <li>✅ Real-time communication between admins and students</li>
          <li>✅ Insightful dashboards & performance tracking</li>
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 my-5 mb-1">
          
          <div className="bg-green-700 shadow-lg rounded-full p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">🚀 Innovation</h3>
            <p className="text-white text-sm">
              Embracing modern technology to transform learning and school management.
            </p>
          </div>

          <div className="bg-indigo-700 shadow-md rounded-full text-center p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-2">🔍 Transparency</h3>
            <p className="text-white text-sm">
              Ensuring accurate records and accountability for all stakeholders.
            </p>
          </div>

          <div className="bg-pink-700 shadow-md rounded-full text-center p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">🤝 Collaboration</h3>
            <p className="text-white text-sm">
              Building stronger connections between students, teachers, and admins.
            </p>
          </div>

          <div className="bg-yellow-700 shadow-md rounded-full text-center p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">🌱 Excellence</h3>
            <p className="text-white text-sm">
              Helping learners and institutions achieve their full potential.
            </p>
          </div>
        </div>
    
      </div>
      <Footer/>
      </>
  );
}

