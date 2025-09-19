"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-extrabold text-blue-600 tracking-wide">
            EduManager
          </h2>
          <p className="mt-3 text-gray-400 max-w-xs">
            Simplifying education management with smart tools and intuitive design.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col space-y-3"
        >
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition">Terms of Service</a>
          <a href="#" className="hover:text-blue-500 transition">Contact</a>
        </motion.div>

        {/* Social Media */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col"
        >
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-500 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition"><Linkedin size={20} /></a>
          </div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col"
        >
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-gray-400 mb-4 text-sm">
            Subscribe to our newsletter for the latest updates and features.
          </p>
          <form className="flex items-center bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
            <Mail className="text-gray-400 ml-3" size={18} />
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent flex-1 px-3 py-2 text-sm outline-none text-white placeholder-gray-500"
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      <p className="text-xs text-center text-gray-500 mt-6">
  By logging in, you agree to our{" "}
  <span className="text-amber-600 hover:underline cursor-pointer">Terms of Service</span>  
  and{" "}
  <span className="text-amber-600 hover:underline cursor-pointer">Privacy Policy</span>.
</p>


      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} EduManager. All rights reserved.
      </motion.div>
    </footer>
  );
}
