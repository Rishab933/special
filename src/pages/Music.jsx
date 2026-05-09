import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../components/LoadingContext";
import myCdImage from "/pvt/cd.webp";
import card from "/pvt/img12.webp";
import cardbg from "/pvt/musicCardbg.webp";
import song from "/pvt/fav_song.mp3";

const MusicPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const { triggerLoading } = useLoading();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen w-full bg-[#ff4d4d] flex flex-col items-center justify-center p-4 sm:p-10 relative overflow-hidden font-bubble">
      {/* Main Container: Stacks on mobile, Side-by-side on desktop */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 w-full max-w-6xl">
        {/* LEFT SIDE: Visual CD (No buttons here now) */}
        <div className="relative">
          <div
            className={`w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-[#1a1a1a] shadow-2xl flex items-center justify-center relative overflow-hidden ${isPlaying ? "animate-spin-slow" : "pause-animation"}`}
          >
            {/* Your CD Image */}
            <img
              src={myCdImage}
              alt="CD Cover"
              className="w-full h-full object-cover opacity-90 scale-110"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Music Card & External Next Button */}
        <div className="flex flex-col items-center w-full max-w-md">
          {/* The Music Card */}
          <div
            className="rounded-[2.5rem] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full flex flex-col items-center mb-5"
            style={{
              backgroundImage: `url(${cardbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Card Banner (Pure CSS Design) */}
            <div className="w-full h-72 sm:h-90 rounded-3xl mb-6 relative overflow-hidden border-2 flex flex-col items-center justify-center shadow-inner">
              <img className="-rotate-90"
              src={card} alt="card_img_us" />
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-300 rounded-full mb-8 relative">
              <div
                className={`h-full bg-[#e8194b] rounded-full transition-all duration-500 ${isPlaying ? "w-2/3" : "w-1/4"}`}
              ></div>
            </div>

            {/* Play/Pause Control (Only here now) */}
            <div className="flex items-center gap-8">
              <button className="text-3xl text-gray-900 hover:text-[#e8194b] transition-colors">
                ⏮
              </button>
              <button
                onClick={togglePlay}
                className="w-20 h-20 bg-[#e8194b] rounded-full flex items-center justify-center text-gray-900 text-3xl shadow-[0_8px_20px_rgba(232,25,75,0.4)] hover:scale-110 active:scale-90 transition-all border-4 border-gray-900"
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button className="text-3xl text-gray-900 hover:text-[#e8194b] transition-colors">
                ⏭
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => triggerLoading(() => navigate("/lastpage"))}
        className="font-bubble text-white text-base tracking-widest px-10 py-3 rounded-full
            bg-[#e8194b] border-[3px] border-white font-bold cursor-pointer
            shadow-[0_0_30px_#ff6b9d,0_0_60px_#ff6b9d]
            hover:scale-105 hover:shadow-[0_0_40px_#ff6b9d,0_0_80px_#ff6b9d]
            active:scale-95 transition-all duration-300"
      >
        Next ♥
      </button>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={song} onEnded={() => setIsPlaying(false)} />

      {/* Animation Styles */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
        .font-bubble {
          font-family: 'Fredoka One', cursive, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default MusicPage;
