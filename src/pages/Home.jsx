import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// --- Data ---
const services = [
  {
    title: "บริการทำเว็บไซต์ราคาถูก",
    desc: "ออกแบบและพัฒนาเว็บไซต์สวยทันสมัย รองรับมือถือ ใช้งานง่ายในงบจำกัด",
    link: "/contact",
  },
  {
    title: "บริการแปลงดีไซน์เป็นเว็บไซต์",
    desc: "เปลี่ยนดีไซน์จาก Figma หรือ Photoshop ให้กลายเป็นเว็บจริงด้วย React / Tailwind / Next.js",
    link: "/contact",
  },
];

// --- Constants ---
const primaryGradientText =
  "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent";

const primaryButtonClasses =
  "px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-black font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105";

const secondaryButtonClasses =
  "px-6 py-2 rounded-full border border-white/30 text-white/90 hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center min-h-screen text-white select-none px-6 pt-24 pb-24 overflow-hidden"
    >
      {/* --- Gradient Overlay (เพิ่ม depth ให้พื้นหลัง) --- */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" /> */}

      {/* --- Hero Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl relative z-10"
      >
        <p className="text-lg text-white/70 mb-2">Hi, I’m</p>

        <h1
          className={`text-5xl md:text-6xl font-bold mb-4 ${primaryGradientText}`}
        >
          Nameless 3143
        </h1>

        <p className="text-white/80 text-lg leading-relaxed mb-8">
          ผมเป็นนักพัฒนาเว็บไซต์ที่ชื่นชอบการสร้างประสบการณ์ดิจิทัลที่{" "}
          <span className={`${primaryGradientText} font-medium`}>
            เรียบง่าย
          </span>{" "}
          และ{" "}
          <span className={`${primaryGradientText} font-medium`}>ราบรื่น</span>
          <br />
          สนุกกับการผสมผสานการออกแบบและโค้ดเพื่อสร้างสิ่งที่สวยงาม
        </p>

        <div className="flex justify-center gap-4">
          <NavLink to="/contact" className={secondaryButtonClasses}>
            Contact
          </NavLink>
          <NavLink to="/projects" className={primaryButtonClasses}>
            View Work
          </NavLink>
        </div>
      </motion.div>

      {/* --- Services Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-28 grid md:grid-cols-2 gap-8 max-w-5xl w-full relative z-10"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/10"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-white/70 mb-6 leading-relaxed">{service.desc}</p>
            <NavLink to={service.link} className={primaryButtonClasses}>
              Get Started
            </NavLink>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
