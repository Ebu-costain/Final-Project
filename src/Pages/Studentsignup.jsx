import { Link } from "react-router-dom";
import Navbar from "../Components/Navabar";
import Footer from "../Components/Footer";




export default function StudentSignUp() {
  return (
    <>
    <Navbar/>
    <div className="bg-[url(/imageTwo.jpg)] flex items-center justify-center min-h-screen bg-green-50">
      <div className="max-w-md mx-auto p-15 bg-white/20 backdrop-blur-md rounded-lg shadow-lg mt-30">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Student Sign Up
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>
            
            <div>
         <label className="block text-sm font-medium mb-1">Date of Birth</label>
                <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                />  
            </div>
             
             <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            /> 
            </div>    
            
            <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
             placeholder="Enter your lastname"
             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
            />
            </div>

           <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
         >
            Sign Up
          </button>
          <div className="text-sm text-center">
              Already have an account?{" "}
              <Link to ="/student/login"
               className="text-blue-600 hover:underline">
               Sign In 
              </Link>
            </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}
