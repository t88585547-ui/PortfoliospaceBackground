import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-sm text-white z-50 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <p className="text-2xl font-semibold tracking-wide select-none">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nameless
            </span>{" "}
            <span className="text-white/80">3143</span>
          </p>
        </NavLink>

        {/* ปุ่ม Burger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* เมนูหลัก */}
        <ul
          className={`absolute md:static left-0 top-full md:flex md:items-center md:space-x-8 
          bg-black/50 md:bg-transparent w-full md:w-auto text-center md:text-left 
          transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 md:opacity-100 md:translate-y-0"
          }`}
        >
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Projects", "/projects"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <li key={path} className="py-3 md:py-0">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition-all duration-200 font-medium ${
                    isActive
                      ? "text-blue-400"
                      : "text-white/80 hover:text-blue-300"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
