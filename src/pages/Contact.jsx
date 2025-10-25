import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-white bg-transparent relative overflow-hidden">
      {/* Soft Gradient Background Accent */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/70 pointer-events-none" /> */}

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get in{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="text-white/70 text-lg">
          Let’s create something amazing together ✨
        </p>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 flex md:flex-row flex-col w-full max-w-6xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden"
      >
        {/* LEFT: Contact Form */}
        <div className="md:w-1/2 w-full p-8 md:p-12">
          <h3 className="text-2xl font-semibold mb-6 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
            Send a Message
          </h3>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/60 transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/60 transition-all duration-300"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/60 transition-all duration-300"
            />
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 py-3 rounded-lg font-semibold text-black hover:opacity-90 hover:scale-[1.03] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: Social Links */}
        <div className="md:w-1/2 w-full bg-black/30 p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-6 border-t md:border-t-0 md:border-l border-white/10">
          <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
            Connect with Me
          </h3>
          <p className="text-white/70 max-w-sm">
            I’d love to collaborate or hear your ideas. Reach out through any of
            the channels below 👇
          </p>

          <div className="flex space-x-6 text-2xl mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-purple-400 transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
