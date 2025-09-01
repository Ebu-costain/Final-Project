export default function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-600 py-11 mt-1">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <h2 className="text-xl font-bold text-blue-600 mb-4 md:mb-0">
          EduManage
        </h2>
         
         <div className="font-serif flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-blue-600 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        
        <p className="text-sm">
          © {new Date().getFullYear()} EduManage. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
