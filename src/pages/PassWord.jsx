import React, { useState, useEffect } from "react";
import bow from "../assets/bow.png";
import panda from "../assets/panda.png";
import panda2 from "../assets/panda2.png";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../components/LoadingContext";
import img from "../assets/pvt/password_page/img13.jpg"

const keypadRows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["empty", 0, "del"],
];

const PARTICLES = {
  count: 200,
  color: "#ff6b9d",
  minSize: 4,
  maxSize: 16,
  minDuration: 3,
  maxDuration: 7,
};

const PassWord = () => {
  const {triggerLoading} = useLoading()
  const [pin, setPin] = useState([]);
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [isShake, setIsShake] = useState(false);
  const correct_password = "0522";
  const navigate = useNavigate();

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const p = Array.from({ length: PARTICLES.count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size:
        Math.random() * (PARTICLES.maxSize - PARTICLES.minSize) +
        PARTICLES.minSize,
      duration:
        Math.random() * (PARTICLES.maxDuration - PARTICLES.minDuration) +
        PARTICLES.minDuration,
      delay: Math.random() * 3,
      opacity: Math.random(),
    }));
    setParticles(p);
  }, []);

  const handlepress = (num) => {
    if (pin.length < 4) {
      const newPin = [...pin, num];
      setPin(newPin);
      setStatus(null);

      if (newPin.length === 4) {
        setTimeout(() => {
          if (newPin.join("") === correct_password) {
            setPin([]);
            triggerLoading(()=>navigate("/correctpassword"));
          } else {
            setStatus("error");
            setIsShake(true);
            setPin([]);
            setTimeout(() => {
              setIsShake(false);
              setStatus(null);
            }, 1200);
          }
        }, 100);
      }
    }
  };

  const handledelete = () => {
    setPin((p) => p.slice(0, -1));
    setStatus(null);
  };

  return (
    <div className="min-h-screen w-full bg-[#ff0303c7] flex items-center justify-center p-10 sm:px-16 lg:p-20 relative overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: PARTICLES.color,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
    @keyframes float {
      from { transform: translateY(0px) scale(1); }
      to   { transform: translateY(-20px) scale(1.15); }
    }
  `}</style>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 w-full max-w-4xl z-10">
        {/* ── LEFT CARD ── */}
        <div className="relative flex bg-white/85 rounded-2xl justify-center w-full lg:w-[45%] h-[440px] sm:h-[550px] lg:h-[580px] shadow-2xl shadow-[#4d0101]">
          <img
            className="sm:block absolute w-32 sm:w-36 lg:w-36 -top-6 -right-8 z-10 rotate-55 drop-shadow-md"
            src={bow}
            alt="bow"
          />

          <div className="relative top-6 sm:top-8 lg:top-10 bg-[#bbb6b6e7] border-2 rounded-2xl w-[85%] h-[75%] overflow-hidden shadow-inner">
            <img
              className="h-full w-full object-cover scale-100"
              src={img }
              alt="Banner"
            />
          </div>

          <div className="flex items-end absolute -bottom-5 -left-13 sm:-left-8 z-10">
            <img
              className="w-44 sm:w-50 drop-shadow-lg"
              src={panda}
              alt="panda"
            />
            <div className="text-lg sm:text-xl lg:text-2xl font-bubble font-extrabold text-[#dd1a7bcf] mb-15 ml-4 whitespace-nowrap">
              <Typewriter
                words={["Hii Babu!!"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT CARD ── */}
        <div
          className={`relative flex flex-col bg-amber-50 border-2 items-center justify-between shadow-xl shadow-[#9b0505]
            w-full lg:w-[50%] rounded-2xl shadow-xl p-4 sm:p-6 overflow-hidden transition-all
            mt-6 sm:mt-8 lg:mt-0
            ${isShake ? "animate-shake border-red-500" : "border-transparent"}`}
        >
          {/* Status banner */}
          {status && (
            <div
              className={`absolute top-0 inset-x-0 text-center text-sm font-bubble py-2 rounded-t-2xl z-10
                ${status === "success" ? "bg-green-400 text-white" : "bg-red-400 text-white"}`}
            >
              {status === "success"
                ? "🎉 Correct! Welcome!"
                : "❌ Wrong password, try again!"}
            </div>
          )}

          {/* Header */}
          <div className="text-center flex flex-col items-center mt-6 sm:mt-4 mb-3">
            <img
              className="h-16 sm:h-20 lg:h-24 object-contain drop-shadow-md"
              src={panda2}
              alt="panda"
            />
            <p className="text-[9px] sm:text-[10px] text-gray-400 font-bubble italic uppercase tracking-widest mt-1">
              Enter the 4-digit code
            </p>
          </div>

          {/* PIN dots */}
          <div className="flex gap-2 sm:gap-3 items-center justify-center py-2 mb-4">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`border-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl font-bold text-sm sm:text-base transition-all
                  ${
                    pin[index] !== undefined
                      ? "border-[#dd1a7c] bg-[#dd1a7c] text-white scale-110"
                      : "border-[#dd1a7c96] bg-white text-[#dd1a7c]"
                  }`}
              >
                {pin[index] !== undefined ? pin[index] : ""}
              </div>
            ))}
          </div>

          {/* Keypad — plain grid, no slider dependency */}
          <div className="w-full max-w-[260px] flex flex-col gap-3 sm:gap-4 mb-2">
            {keypadRows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="grid grid-cols-3 gap-3 sm:gap-4 justify-items-center"
              >
                {row.map((key, colIdx) => {
                  if (key === "empty") {
                    return (
                      <div key={colIdx} className="w-12 h-12 sm:w-14 sm:h-14" />
                    );
                  }
                  if (key === "del") {
                    return (
                      <button
                        key={colIdx}
                        onClick={handledelete}
                        className="text-lg sm:text-xl h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full bg-pink-100 text-[#dd1a7c] hover:bg-pink-300 transition-all active:scale-90 shadow-sm"
                      >
                        ⌫
                      </button>
                    );
                  }
                  return (
                    <button
                      key={colIdx}
                      onClick={() => handlepress(key)}
                      className="font-bubble text-lg sm:text-xl h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full bg-white border-2 border-[#dd1a7c40] text-[#dd1a7c] hover:bg-[#dd1a7c] hover:text-white transition-all shadow-sm active:scale-90"
                    >
                      {key}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassWord;
