import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../components/LoadingContext";



const CONFIG = {
  heartColor: "#e8194b",        // color of the heart
  heartGlow: "#ff6b9d",         // glow/shadow color around heart
  heartSize: 470,               // size of heart in px (canvas width & height)
  drawSpeed: 8,                 // how fast the heart draws (1=slow, 20=instant)
  bgColor: "#ff0303c7",         // background color (matches your app)
  text: ["correct password", "babu 😘"], // text inside the heart
  textColor: "#ffffff",         // text color
  textSize: 22,                 // text font size in px
  particleCount: 80,            // number of floating particles
  particleColor: "#ff6b9d",     // particle color
};


const CorrectPassWord = () => {
  const navigate = useNavigate()
  const { triggerLoading } = useLoading();

  const canvasRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  // generate floating particles
  useEffect(() => {
    const p = Array.from({ length: CONFIG.particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,       // % from left
      y: Math.random() * 100,       // % from top
      size: Math.random() * 12 + 4, // px
      duration: Math.random() * 4 + 3, // animation seconds
      delay: Math.random() * 3,     // animation delay
      opacity: Math.random() ,
    }));
    setParticles(p);
  }, []);

  // draw heart on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const S = CONFIG.heartSize;
    canvas.width = S;
    canvas.height = S;

    // heart path points using parametric equation
    const heartPoints = [];
    for (let t = 0; t <= Math.PI * 2; t += 0.01) {
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      heartPoints.push({
        x: S / 2 + (x / 17) * (S * 0.43),
        y: S / 2 + (y / 17) * (S * 0.43),
      });
    }

    let idx = 0;
    const total = heartPoints.length;

    const draw = () => {
      // clear & redraw filled heart as we go
      ctx.clearRect(0, 0, S, S);

      // glow effect
      ctx.shadowColor = CONFIG.heartGlow;
      ctx.shadowBlur = 30;

      // filled heart (grows as we draw)
      if (idx > 10) {
        ctx.beginPath();
        ctx.moveTo(heartPoints[0].x, heartPoints[0].y);
        for (let i = 1; i <= idx && i < total; i++) {
          ctx.lineTo(heartPoints[i].x, heartPoints[i].y);
        }
        ctx.fillStyle = CONFIG.heartColor;
        ctx.fill();
      }

      // stroke outline on top
      ctx.beginPath();
      ctx.moveTo(heartPoints[0].x, heartPoints[0].y);
      for (let i = 1; i <= idx && i < total; i++) {
        ctx.lineTo(heartPoints[i].x, heartPoints[i].y);
      }
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 3;
      ctx.lineJoin = "round";
      ctx.stroke();

      idx += CONFIG.drawSpeed;

      if (idx < total) {
        requestAnimationFrame(draw);
      } else {
        // heart done — show text
        setTimeout(() => setTextVisible(true), 200);
      }
    };

    // slight delay before starting
    setTimeout(draw, 400);
  }, []);

  return (
    <div
      className="min-h-screen w-screen flex flex-col gap-10 items-center justify-center overflow-hidden relative"
      style={{ background: CONFIG.bgColor }}
    >
      {/* floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: CONFIG.particleColor,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* centre content */}
      <div className="flex flex-col items-center gap-0 relative z-10">

        {/* canvas heart */}
        <div className="relative" style={{ width: CONFIG.heartSize, height: CONFIG.heartSize }}>
          <canvas ref={canvasRef} className="drop-shadow-2xl" />

          {/* text inside heart — fades in after drawing */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-700 font-extrabold"
            style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? "scale(1)" : "scale(0.7)" }}
          >
            <p
              className="font-bubble text-center px-8 leading-snug"
              style={{
                color: CONFIG.textColor,
                fontSize: CONFIG.textSize,
                textShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              {CONFIG.text[0]} <br /> {CONFIG.text[1]}
            </p>
          </div>
        </div>

        {/* subtitle below heart */}
        <p
          className="font-bubble text-white/70 text-sm tracking-widest uppercase transition-all duration-1000"
          style={{ opacity: textVisible ? 1 : 0, marginTop: -20 }}
        >
          you made it ✨
        </p>
      </div>

      {/* float animation keyframes */}
      <style>{`
        @keyframes float {
          from { transform: translateY(0px) scale(1); }
          to   { transform: translateY(-24px) scale(1.1); }
        }
      `}</style>
      <button
          onClick={() => triggerLoading(() => navigate("/loveletter"))}
          className="font-bubble text-white text-base tracking-widest px-10 py-3 rounded-full
            bg-[#e8194b] border-[3px] border-white font-bold cursor-pointer
            shadow-[0_0_30px_#ff6b9d,0_0_60px_#ff6b9d]
            hover:scale-105 hover:shadow-[0_0_40px_#ff6b9d,0_0_80px_#ff6b9d]
            active:scale-95 transition-all duration-300"
        >
          Next ♥
        </button>
    </div>
  );
};

export default CorrectPassWord;