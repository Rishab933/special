import React, { useState, useEffect } from "react";
import Letter from "/pvt/Letter.webp";
import Letter2 from "/pvt/Letter2.webp";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../components/LoadingContext";

const paragraphs = [
  {
    id: 1,
    text: `Before you, I didn't know what it felt like to be truly understood. Not just heard but understood. The way you listen, the way you never make me feel like too much or too little, the way you just… get me. That's rarer than anything in this world.`,
  },
  {
    id: 2,
    text: `You support me in ways I didn't even know I needed. On the days I doubt myself the most, you somehow always know what to say or when to say nothing at all and just be there. That quiet strength you give me? It's my favourite thing.`,
  },
  {
    id: 3,
    text: `I love the way you are. Not a version of you but you as my cute little panda. Your laugh, your dance, your softness, the way you hold me, feels like I am in a place which I always wished for. Every single piece of you is something I am endlessly grateful for.`,
  },
  {
    id: 4,
    text: `I waited a long time for love. There were moments I wondered if it was meant for me at all. And then you walked in uff and suddenly the wait made complete sense. Every moment of it. Because it was all leading me to you.`,
  },
  {
    id: 5,
    text: `Thank you for choosing me. Thank you for staying. Thank you for being the reason my heart finally feels at home. I love you more than these words can ever carry — but I'll keep trying to show you, every single day. 💌`,
  },
];

const LoveLetter = () => {
  const [visible, setVisible] = useState([]);
  const [imgLoaded, setImgLoaded] = useState(false);
  const navigate = useNavigate();
  const { triggerLoading } = useLoading();

  useEffect(() => {
    // stagger paragraph reveal
    paragraphs.forEach((p, i) => {
      setTimeout(
        () => {
          setVisible((prev) => [...prev, p.id]);
        },
        400 + i * 350,
      );
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#ff0303c7] relative overflow-hidden flex flex-col items-center py-12 px-4 sm:px-8">
      {/* ── decorative background petals ── */}
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-white/10 select-none pointer-events-none"
          style={{
            fontSize: `${Math.random() * 40 + 16}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `drift ${4 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite alternate`,
          }}
        >
          ❤
        </div>
      ))}

      {/* ── header ── */}
      <div className="relative z-10 text-center mb-10 sm:mb-14">
        <p className="font-bubble text-white/60 text-xs sm:text-sm tracking-[0.3em] uppercase mb-2">
          a letter for you
        </p>
        <h1
          className="font-bubble text-white text-4xl sm:text-5xl lg:text-6xl drop-shadow-lg"
          style={{ textShadow: "0 0 40px #ff6b9d, 0 4px 12px rgba(0,0,0,0.3)" }}
        >
          My Love 💌
        </h1>
        {/* decorative line */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-16 sm:w-24 bg-white/40" />
          <span className="text-white/60 text-lg">♥</span>
          <div className="h-px w-16 sm:w-24 bg-white/40" />
        </div>
      </div>

      {/* ── letter card ── */}
      <div className="relative z-10 w-full max-w-3xl">
        <div
          className="relative rounded-3xl shadow-2xl overflow-hidden"
          style={{
            boxShadow: "0 0 60px #ff6b9d88, 0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Letter.jpg as full background */}
          <img
            src={Letter}
            alt="letter bg"
            className="absolute inset-0 w-full h-full object-fill"
          />
          <img
            src={Letter2}
            alt="letter bg"
            className="absolute inset-0 w-full h-full object-fill opacity-50"
          />

          {/* dark overlay so text is readable on top of image */}
          <div className="absolute inset-0 bg-[#fff8f0] opacity-40" />

          {/* all letter content sits on top */}
          <div className="relative z-10 px-6 sm:px-10 py-10">
            {/* salutation */}
            <p
              className="font-bubble text-[#e8194b] text-xl sm:text-2xl mb-6 transition-all duration-700"
              style={{
                opacity: visible.includes(1) ? 1 : 0,
                transform: visible.includes(1)
                  ? "translateY(0)"
                  : "translateY(16px)",
              }}
            >
              To my Babu,
            </p>

            {/* paragraphs */}
            <div className="flex flex-col gap-5">
              {paragraphs.map((p) => (
                <p
                  key={p.id}
                  className="text-[#5a2a2a] text-sm sm:text-base leading-relaxed transition-all duration-700"
                  style={{
                    fontFamily: "'Georgia', serif",
                    opacity: visible.includes(p.id) ? 1 : 0,
                    transform: visible.includes(p.id)
                      ? "translateY(0)"
                      : "translateY(20px)",
                  }}
                >
                  {p.text}
                </p>
              ))}
            </div>

            {/* sign off */}
            <div
              className="mt-8 text-left transition-all duration-700"
              style={{
                opacity: visible.includes(5) ? 1 : 0,
                transform: visible.includes(5)
                  ? "translateY(0)"
                  : "translateY(16px)",
                transitionDelay: "200ms",
              }}
            >
              <p
                className="text-[#5a2a2a] text-sm italic"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                forever yours,
              </p>
              <p
                className="font-bubble text-[#e8194b] text-2xl sm:text-3xl mt-1"
                style={{ textShadow: "0 0 20px #ff6b9d66" }}
              >
                Your Love ❤️
              </p>
            </div>
          </div>
        </div>

        {/* wax seal */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => triggerLoading(() => navigate("/bestMoments"))}
            className="font-bubble text-white text-base tracking-widest px-10 py-3 rounded-full
            bg-[#e8194b] border-[3px] border-white font-bold cursor-pointer
            shadow-[0_0_30px_#ff6b9d,0_0_60px_#ff6b9d]
            hover:scale-105 hover:shadow-[0_0_40px_#ff6b9d,0_0_80px_#ff6b9d]
            active:scale-95 transition-all duration-300"
          >
            Next ♥
          </button>
        </div>
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes drift {
          from { transform: translateY(0px) rotate(0deg); }
          to   { transform: translateY(-20px) rotate(15deg); }
        }
      `}</style>
    </div>
  );
};

export default LoveLetter;
