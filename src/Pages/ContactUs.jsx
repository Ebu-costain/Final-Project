import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-green-300 via-blue-50 to-purple-700 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-green-300 rounded-full blur-3xl opacity-30 -z-10"
        animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/2 w-[500px] h-[500px] bg-blue-300 rounded-full blur-3xl opacity-30 -z-10"
        animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 font-sans z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h1 className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h1>
          <motion.div
            className="h-1 bg-green-600 mt-2 rounded-full w-24 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Let’s Start a Conversation
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Whether you have a question, need support, or just want to say hi,
            we’d love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <Mail className="text-green-600 w-7 h-7" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <span className="text-gray-600">support@edumanager.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <Phone className="text-blue-600 w-7 h-7" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <span className="text-gray-600">+234 7062684057</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <MapPin className="text-purple-600 w-7 h-7" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <span className="text-gray-600">
                    Digital Fortress Akuwonjo
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                LinkedIn
              </a>
              <a href="#" className="text-sky-500 hover:text-sky-700 font-medium">
                Twitter
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 font-medium">
                Instagram
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            className="bg-gradient-to-r from-blue-50 to-green-50 backdrop-blur-sm rounded-xl shadow-lg p-8 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! 🚀");
            }}
          >
            <div>
              <label className="block text-black font-medium mb-2">Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-black rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-300 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2">Email</label>
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-black rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-300 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2">Message</label>
              <textarea
                rows="4"
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 border border-black rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-300 outline-none transition"
              />
            </div>
            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} /> Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Google Map */}
        <motion.div
          className="mt-20 rounded-xl overflow-hidden shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 text-center pt-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Location</h3>
            <p className="text-gray-600">Find us at Digital Fortress Akuwonjo</p>
          </div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509354!2d144.95373531531588!3d-37.81627977975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE5LjQiRQ!5e0!3m2!1sen!2sus!4v1614640991234!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
