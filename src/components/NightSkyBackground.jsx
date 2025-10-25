import { useEffect, useRef } from "react";

export default function NightSkyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = [];
    const numStars = Math.floor((width * height) / 5000); // จำนวนดาวพอดีจอ

    const colors = [
      "rgba(255,255,255,0.9)",
      "rgba(200,220,255,0.9)",
      "rgba(255,220,200,0.9)",
      "rgba(200,255,230,0.9)",
    ];

    const random = (min, max) => Math.random() * (max - min) + min;

    // สร้างดาว
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: random(0, width),
        y: random(0, height),
        r: random(0.5, 1.3),
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkle: random(0.002, 0.005),
        phase: Math.random() * Math.PI * 2,
      });
    }

    function draw() {
      // พื้นหลังท้องฟ้าเรียบสีดำอมฟ้า
      ctx.fillStyle = "#050716";
      ctx.fillRect(0, 0, width, height);

      for (const s of stars) {
        const brightness = Math.sin(Date.now() * s.twinkle + s.phase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.fillStyle = s.color.replace("0.9", brightness.toFixed(2));
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    draw();

    // ปรับขนาดตามหน้าจอ
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 bg-black"
    />
  );
}
