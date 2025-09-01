import { Link } from "react-router-dom";




export default function LandingPage() {
  return (
    <div className="bg-[url(/imageBack.webp)] bg-no-repeat bg-cover flex flex-col min-h-screen text-pink-800">
      
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-6 font-serif">Student & Course Management</h1>
        <p className="text-lg mb-8 text-center max-w-xl font-serif">
          A platform to manage students, courses, and enrollments easily.
        </p>
        <Link
          to="/get-started"
          className="px-6 py-3 bg-linear-to-t from yellow-800 to-blue-300 shadow-md text-blue-600 font-serif font-semibold rounded-lg hover:bg-gray-200 transition">
          Get Started
        </Link>
      </div>

    </div>
  );
}


