import { useEffect, useRef, useState } from "react";
import {
  Users,
  MapPin,
  Cpu,
  GraduationCap,
} from "lucide-react";

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Clients",
    icon: <Users size={26} />,
  },
  {
    value: 1550,
    suffix: "+",
    label: "Locations",
    icon: <MapPin size={26} />,
  },
  {
    value: 5000,
    suffix: "+",
    label: "Devices Installed",
    icon: <Cpu size={26} />,
  },
  {
    value: 364194,
    suffix: "+",
    label: "Total Enrolled Candidates",
    icon: <GraduationCap size={26} />,
  },
];

/* ---------- COUNTER ---------- */
function Counter({ value, suffix, delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setTimeout(() => {
          const duration = 4200; // 🐢 SLOWER animation
          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min(
              (time - startTime) / duration,
              1
            );
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }, delay);

        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------- MAIN SECTION ---------- */
export default function AchievementsSection() {
  return (
    <section
      className="relative bg-gradient-to-b from-[#cfeeff] via-[#eaf6ff] to-white"
      style={{
        backgroundColor: "#173471",
        backgroundImage:
          "linear-gradient(-97.8deg, #723fc7 30%, #5192f7 76.87%, #407cd9 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24 text-white">

        {/* HEADING */}
        <div className="text-center mb-[40px]">
          <p className="text-cyan-300 tracking-widest uppercase">
            Our Impact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Achievements That Define Us
          </h2>
        </div>

        {/* STATS */}
        <div className="flex items-center justify-between">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative flex-1 px-6"
            >
              <div className="flex items-center justify-center gap-4">

                {/* ICON LEFT */}
                <div className="text-white/90">
                  {stat.icon}
                </div>

                {/* NUMBER */}
                <div className="text-5xl md:text-6xl font-extrabold">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    delay={i * 500} // ⏱ more stagger
                  />
                </div>

              </div>

              {/* LABEL */}
              <div className="mt-4 text-center text-sm md:text-base uppercase tracking-wider opacity-90">
                {stat.label}
              </div>

              {/* DIVIDER */}
              {i !== stats.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-20 w-px bg-white/30" />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
