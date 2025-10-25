import { motion } from "framer-motion";
import ProjectsCard from "../components/ProjectCard";
import project from "../assets/try.png";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่ออกแบบด้วย React และ Tailwind CSS เน้นความมินิมอลและ smooth animation.",
      img: "https://webdisignagency-rh54.vercel.app/assets/tumblr_232d3f25b3b5cf39e0f5dfe7a734e340_59629050_1280-j4ItRCqb.gif",
      link: "https://example.com/portfolio",
    },
    {
      title: "Game Giveaway Tracker",
      desc: "เว็บแจ้งเตือนเกมแจกฟรีจาก SteamDB พร้อมระบบ Discord Bot แจ้งอัตโนมัติ.",
      img: "https://webdisignagency-rh54.vercel.app/assets/tumblr_232d3f25b3b5cf39e0f5dfe7a734e340_59629050_1280-j4ItRCqb.gif",
      link: "https://example.com/game-tracker",
    },
    {
      title: "UI Design to Code",
      desc: "บริการแปลง Figma ดีไซน์เป็นเว็บไซต์จริงด้วย Next.js / Tailwind CSS ให้ pixel-perfect.",
      img: "https://webdisignagency-rh54.vercel.app/assets/tumblr_232d3f25b3b5cf39e0f5dfe7a734e340_59629050_1280-j4ItRCqb.gif",
      link: "https://example.com/ui-to-code",
    },
  ];

  return (
    <section className="min-h-screen px-6 py-28 text-white select-none">
      {/* --- Header Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
          โปรเจกต์ที่ผมสร้างขึ้น ทั้งงานส่วนตัวและลูกค้า เน้นดีไซน์เรียบหรู
          ใช้งานง่าย และพัฒนาอย่างมีคุณภาพ
        </p>
      </motion.div>

      {/* --- Projects Grid --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
          >
            <ProjectsCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

