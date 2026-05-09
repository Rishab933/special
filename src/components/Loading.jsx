// src/components/LoadingPage.jsx

import React, { useEffect, useState } from "react";
import panda from "/pvt/panda.webp";
import Icon1 from "/pvt/Icon1.webp"
import Icon2 from "/pvt/Icon2.webp"

const LoadingPage = ({ onDone }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // loader bar fills over 3 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    // auto-dismiss after 3 seconds
    const timer = setTimeout(() => {
      onDone();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const icons = [
    { src: panda,  delay: "0s",    label: "panda" },
    { src: Icon2,    delay: "0.2s",  label: "Icon2"   },
    { src: Icon1, delay: "0.4s",  label: "Icon1"},
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#ff0303c7] overflow-hidden">

      {/* dancing icons */}
      <div className="flex items-end gap-8 sm:gap-12 mb-12">
        {icons.map((icon) => (
          <img
            key={icon.label}
            src={icon.src}
            alt={icon.label}
            className="w-20 sm:w-24 drop-shadow-lg"
            style={{
              animation: `dance 0.6s ease-in-out infinite alternate`,
              animationDelay: icon.delay,
            }}
          />
        ))}
      </div>

      {/* loading text */}
      <p className="font-bubble text-white text-lg sm:text-xl tracking-widest mb-6 opacity-80">
        loading...
      </p>

      {/* loader bar */}
      <div className="w-64 sm:w-80 h-3 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* percentage */}
      <p className="font-bubble text-white/60 text-sm mt-3">
        {progress}%
      </p>

      <style>{`
        @keyframes dance {
          from { transform: translateY(0px) rotate(-8deg) scale(1);   }
          to   { transform: translateY(-24px) rotate(8deg) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;