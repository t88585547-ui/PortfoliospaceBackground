import { NavLink } from "react-router-dom";
// 1. (แนะนำ) Import framer-motion เพื่อทำอนิเมชั่น
// ให้ติดตั้งด้วย: npm install framer-motion
import { motion } from "framer-motion";

// --- Constants ---
// ใช้ตัวแปรเดียวกับหน้า Home เพื่อความสอดคล้อง
const primaryGradientText =
  "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent";

const primaryButtonClasses =
  "inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-black font-semibold hover:opacity-90 transform transition-all duration-300 hover:scale-105";

// --- Data ---
const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Next.js", level: 75 },
  { name: "Node.js", level: 70 },
];

export default function About() {
  return (
    <section
      // 2. ปรับ Padding ให้สอดคล้องกับหน้า Home (pt-24, pb-24)
      // 3. เปลี่ยน layout หลักเป็น items-center เพื่อให้ section ต่างๆ อยู่กึ่งกลาง
      className="min-h-screen px-6 pt-24 pb-24 flex flex-col items-center gap-24 text-white select-none"
    >
      {/* --- Top Section: About Me --- */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* รูป */}
        <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-lg transform transition-all duration-300 hover:scale-105">
          <img
            src="https://nameless3143-portfolio.vercel.app/assets/logo-DunCstsT.png"
            alt="My Photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ข้อความ */}
        <div className="flex-1 text-center md:text-left">
          <h2 className={`text-3xl font-bold mb-4 ${primaryGradientText}`}>
            About Me
          </h2>
          {/* 4. ลบ <br /> ออก ให้ข้อความขึ้นบรรทัดใหม่ตามธรรมชาติ (Responsive) */}
          {/* 5. ปรับความสว่างข้อความเป็น 85% ให้อ่านง่ายขึ้น */}
          <p className="text-white/85 mb-6 leading-relaxed">
            สวัสดีครับ ผมเป็นนักพัฒนาเว็บไซต์ที่ชื่นชอบความเรียบง่าย <br />
            และให้ความสำคัญกับการออกแบบที่สะอาดตาและมีประสิทธิภาพ <br />
            ผมมุ่งเน้นสร้างประสบการณ์ใช้งานที่ราบรื่น พร้อมรองรับทุกอุปกรณ์ <br />
            ทั้งในด้านความเร็ว ความปลอดภัย และความสวยงาม <br />
          </p>
          <NavLink to="/contact" className={primaryButtonClasses}>
            Contact Me
          </NavLink>
        </div>
      </div>

      {/* --- Skills Section --- */}
      {/* 6. เพิ่ม w-full เพื่อให้แน่ใจว่า section นี้จะกว้างเต็ม container */}
      <div className="max-w-6xl mx-auto w-full">
        <h3
          className={`text-2xl font-bold mb-8 text-center ${primaryGradientText}`}
        >
          My Skills
        </h3>
        {/* 7. ปรับ layout ของ skill list ให้ดู modern ขึ้น */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-white/90 font-medium">{skill.name}</span>
                <span className="text-white/70 font-medium">
                  {skill.level}%
                </span>
              </div>
              {/* 8. แก้ไข Bug: w-[100vh] (ความกว้างเท่าความสูงจอ) เป็น w-full */}
              {/* 9. เพิ่ม overflow-hidden เพื่อให้แถบ progress bar ที่อยู่ข้างในโค้งตาม */}
              <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                {/* 10. ใช้ motion.div เพื่อให้แถบ % "วิ่ง" เมื่อ scroll มาถึง */}
                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-blue-400 to-pink-400"
                  // 11. (Accessibility) เพิ่ม ARIA attributes สำหรับ Screen Readers
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${skill.name} skill level`}
                  // 12. (Animation) ตั้งค่าอนิเมชั่น
                  initial={{ width: 0 }} // เริ่มต้นที่ 0%
                  whileInView={{ width: `${skill.level}%` }} // วิ่งไปที่ % ที่กำหนดเมื่อเห็น
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }} // ทำงานแค่ครั้งเดียว
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}