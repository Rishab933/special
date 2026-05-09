import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../components/LoadingContext";
import flower from "../assets/gardening.png";
import kiss from "../assets/kisses.png";
import img1 from "../assets/pvt/img1.webp"
import img2 from "../assets/pvt/img2.jpg"
import img3 from "../assets/pvt/img3.jpg"
import img4 from "../assets/pvt/img4.jpg"
import img5 from "../assets/pvt/img5.jpg"
import img6 from "../assets/pvt/img6.jpg"
import img7 from "../assets/pvt/img7.jpg"
import img8 from "../assets/pvt/img8.jpg"
import img9 from "../assets/pvt/img9.jpg"
import img10 from "../assets/pvt/img10.jpg"
import img11 from "../assets/pvt/img11.jpg"

const placeholder = (color) =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Crect width='400' height='500' fill='${encodeURIComponent(color)}'/%3E%3C/svg%3E`;

const photos = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 }, // centre — biggest
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
];

const BestMoments = () => {
  const navigate = useNavigate();
  const { triggerLoading } = useLoading();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#ff0303c7] relative overflow-hidden flex flex-col items-center pb-16 px-4">
      {/* ── decorative flower bottom right (like reference) ── */}
      <div className="absolute w-50 bottom-10 right-6 sm:right-16 lg:right-[20%] sm:text-[180px] select-none pointer-events-none opacity-40">
        <img src={flower} alt="" />
      </div>

      {/* ━━━ HEADER ━━━ */}
      <div
        className="relative w-full max-w-2xl pt-10 pb-4 px-2 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <div className="flex flex-col gap-5 sm:flex-row items-center justify-between pb-10">
          <div className="ml-2 sm:ml-6">
            <p
              className="text-5xl sm:text-7xl md:text-8xl text-gray-900 leading-none"
              style={{
                fontFamily: "'Dancing Script', cursive, Georgia, serif",
              }}
            >
              Us
            </p>
            <p
              className="text-5xl sm:text-7xl md:text-8xl text-gray-900 leading-none"
              style={{
                fontFamily: "'Dancing Script', cursive, Georgia, serif",
              }}
            >
              Together
            </p>
          </div>

          <div>
            <img className="w-32 sm:w-44 opacity-40"
            src={kiss} alt="kiss" />
          </div>
        </div>
      </div>

      {/* ━━━ PHOTO COLLAGE ━━━ */}
      <div
        className="relative w-full max-w-3xl mx-auto transition-all duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transitionDelay: "200ms",
        }}
      >
        {/* ROW 1 — 3 photos, middle is tallest (offset up) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 items-end mb-2 sm:mb-3">
          <img
            src={photos[0].src}
            alt="moment 1"
            className="w-full h-32 sm:h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src={photos[1].src}
            alt="moment 2"
            className="w-full h-44 sm:h-64 object-cover rounded-lg shadow-md -mt-8 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={photos[2].src}
            alt="moment 3"
            className="w-full h-32 sm:h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* ROW 2 — left small, centre TALL (spans rows), right small */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 items-start">
          <div className="flex flex-col gap-2 sm:gap-3">
            <img
              src={photos[3].src}
              alt="moment 4"
              className="w-full h-35 sm:h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={photos[6].src}
              alt="moment 7"
              className="w-full h-30 sm:h-44 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* centre big photo */}
          <img
            src={photos[4].src}
            alt="moment 5 centre"
            className="w-full h-60 sm:h-95 object-cover rounded-lg shadow-xl ring-2 ring-[#e8194b]/30 hover:scale-105 transition-transform duration-300"
          />

          <div className="flex flex-col gap-2 sm:gap-3">
            <img
              src={photos[5].src}
              alt="moment 6"
              className="w-full h-28 sm:h-44 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={photos[7].src}
              alt="moment 8"
              className="w-full h-40 sm:h-52 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-2 sm:mb-"
            />
          </div>
        </div>

        {/* ROW 3 — 3 photos, left offset */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 items-start">
          <img
            src={photos[9].src}
            alt="moment 9"
            className="w-full h-32 sm:h-56 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 -mt-3 sm:mt-[1px] -rotate-90"
          />
          <img
            src={photos[8].src}
            alt="moment 10"
            className="w-full h-44 sm:h-82 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 -mt-10 sm:mt-[1px]"
          />
          <img
            src={photos[10].src}
            alt="moment 11"
            className="w-full h-36 sm:h-66 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* ━━━ FOOTER ━━━ */}
      <div
        className="relative z-10 w-full max-w-2xl mt-10 px-2 transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transitionDelay: "500ms" }}
      >
        <p className="text-xs font-bubble sm:text-sm font-bold tracking-[0.2em] text-white uppercase mb-2">
          05 · 22 · forever
        </p>
        <p
          className="text-xs sm:text-sm text-white max-w-xs leading-relaxed font-bubble"
        >
        Every photo is a moment I never want to forget and babu every moment is us!!
        </p>
      </div>

      {/* ━━━ NEXT BUTTON ━━━ */}
      <div className="mt-10 z-10">
        <button
          onClick={() => triggerLoading(() => navigate("/music"))}
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
  );
};

export default BestMoments;
