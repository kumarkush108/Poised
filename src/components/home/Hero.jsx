import Banner1 from "../../assets/banner-1.jpg";
import Banner2 from "../../assets/banner-3.jpg";
import Banner3 from "../../assets/banner-4.jpg";
import Banner4 from "../../assets/banner-3.jpg";
import Banner5 from "../../assets/banner-2.jpg";
import Banner6 from "../../assets/banner-1.jpg";
import Banner7 from "../../assets/banner-4.jpg";
import Banner8 from "../../assets/banner-1.jpg";
import Banner9 from "../../assets/banner-3.jpg";
import Banner10 from "../../assets/banner-2.jpg";

const images = [Banner1, Banner4, Banner3, Banner2, Banner5, Banner6, Banner7, Banner8, Banner9, Banner10];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#00042a] text-white">

      {/* BACKGROUND COLUMNS */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130%] flex gap-3 rotate-[15deg]">

          {[false, true, false].map((reverse, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col animate-scroll ${reverse ? "animate-scroll-reverse" : ""
                }`}
            >
              {/* Duplicate images for seamless scroll */}
              {[...images, ...images].map((img, i) => (
                <img
                  key={`${colIndex}-${i}`}
                  src={img}
                  className="w-[300px] h-60 object-cover rounded-xl shadow-2xl mb-2"
                  alt=""
                />
              ))}
            </div>
          ))}

        </div>
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00042a] via-[#00042a]/70 to-transparent" />
      {/* HERO CONTENT */}
      <div className="relative z-20 flex items-center min-h-[85vh] px-6 md:px-20">
        <div className="max-w-xl">
          <p className="tracking-widest text-purple-400 text-sm mb-4">
            PREMIUM WEB DESIGN AGENCY
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            We Grow Brands <br /> Online
          </h1>

          <p className="mt-6 text-gray-300">
            Custom websites, branding & digital marketing that accelerates growth.
          </p>

          <button className="mt-8 bg-white text-[#00042a] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Request a Quote →
          </button>
        </div>
      </div>

      {/* CSS for smooth vertical scroll */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }

          @keyframes scroll-reverse {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }

          .animate-scroll {
            animation: scroll 180s linear infinite;
          }

          .animate-scroll-reverse {
            animation: scroll-reverse 180s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
