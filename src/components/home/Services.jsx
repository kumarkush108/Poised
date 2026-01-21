import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [y, setY] = useState(0);

  const CARD_HEIGHT = 200;     // adjust if card height changes
  const VIEWPORT_HEIGHT = 460;
  const maxScroll =
    -(services.length * CARD_HEIGHT - VIEWPORT_HEIGHT);

  /* 🔹 Detect when section is in viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* 🔹 Handle mouse / trackpad scroll */
  useEffect(() => {
    const onWheel = (e) => {
      if (!inView) return;

      // Disable on mobile
      if (window.innerWidth < 768) return;

      const delta = e.deltaY;
      const scrollingDown = delta > 0;
      const scrollingUp = delta < 0;

      const atTop = y >= 0;
      const atBottom = y <= maxScroll;

      // 🚫 Allow normal page scroll at edges
      if ((scrollingUp && atTop) || (scrollingDown && atBottom)) {
        return; // do NOT prevent default
      }

      // ✅ Otherwise hijack scroll
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
      className="bg-[#020617] text-white py-20"
    >
      <div className="max-w-7xl mx-auto md:px-20 grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT CONTENT (STICKY) */}
        <div className="sticky top-28">
          <p className="text-cyan-400 tracking-widest uppercase mb-4">
            Solutions we offer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Discover Our Expertise <br /> in Digital Solutions
          </h2>

          <p className="text-gray-300 max-w-lg">
            Scroll to explore our services. Each solution is crafted
            to solve real business challenges.
          </p>
        </div>

        {/* RIGHT USER-CONTROLLED SCROLL */}
        <div className="relative h-[460px] overflow-hidden">
          <motion.div
            animate={{ y }}
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
