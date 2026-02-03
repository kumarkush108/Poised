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
      className="relative"
      style={{
        backgroundColor: "#173471",
        backgroundImage:
          "linear-gradient(-97.8deg, #723fc7 30%, #5192f7 76.87%, #407cd9 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-white">

        {/* HEADING */}
        <div className="text-center mb-14">
          <p className="text-cyan-300 tracking-widest uppercase mb-2 text-xs sm:text-sm">
            Our Impact
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Achievements That Define Us
          </h2>
        </div>

        {/* STATS */}
        <div
          className="
            flex flex-col gap-14
            sm:grid sm:grid-cols-2 sm:gap-12
            md:flex md:flex-row md:justify-between md:gap-0
          "
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="
                relative
                flex flex-col items-center text-center
                md:flex-1 md:px-6
              "
            >
              {/* ICON */}
              <div className="mb-4 md:mb-0 md:absolute md:top-0 md:-translate-y-10 text-white/80">
                {stat.icon}
              </div>

              {/* NUMBER */}
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  delay={i * 500}
                />
              </div>

              {/* LABEL */}
              <div className="mt-3 text-xs sm:text-sm md:text-base uppercase tracking-wider opacity-90 max-w-[200px]">
                {stat.label}
              </div>

              {/* DIVIDER (DESKTOP ONLY) */}
              {i !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-white/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
