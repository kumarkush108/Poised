import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [y, setY] = useState(0);

  const CARD_HEIGHT = 200;
  const VIEWPORT_HEIGHT = 460;
  const maxScroll = -(services.length * CARD_HEIGHT - VIEWPORT_HEIGHT);

  /* 🔹 Detect section in viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* 🔹 Mouse / trackpad scroll (desktop only) */
  useEffect(() => {
    const onWheel = (e) => {
      if (!inView) return;
      if (window.innerWidth < 768) return;

      const delta = e.deltaY;
      const atTop = y >= 0;
      const atBottom = y <= maxScroll;

      if ((delta < 0 && atTop) || (delta > 0 && atBottom)) return;

      e.preventDefault();
      setY((prev) => {
        const next = prev - delta * 0.8;
        return Math.max(Math.min(next, 0), maxScroll);
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [inView, y, maxScroll]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#020617] text-white py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* LEFT CONTENT */}
        <div className="md:sticky md:top-28 text-center md:text-left">
          <p className="text-cyan-400 tracking-widest uppercase mb-3 text-xs sm:text-sm">
            Solutions we offer
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
            Discover Our Expertise <br className="hidden sm:block" /> in Digital Solutions
          </h2>

          <p className="text-gray-300 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
            Scroll to explore our services. Each solution is crafted to solve
            real business challenges.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative md:h-[460px] overflow-hidden">
          <motion.div
            animate={{ y: window.innerWidth < 768 ? 0 : y }}
            transition={{ type: "tween", ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {services.map((item, i) => (
              <ServiceCard key={i} service={item} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
