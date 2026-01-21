import { useState } from "react";
import { motion } from "framer-motion";

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ height: hovered ? 300 : 180 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="relative overflow-hidden rounded-2xl
                 border border-slate-200
                 bg-white p-8 cursor-pointer"
    >
      {/* 🌈 AURORA GRADIENT — ONLY ON HOVER */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.35),transparent_60%),
              radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.35),transparent_60%)]"
        />
      )}

      {/* CONTENT */}
      <div className="relative z-10 flex gap-6 h-full">
        {/* ICON */}
        <div className="shrink-0">
          <div
            className="w-14 h-14 rounded-full border border-cyan-400/40
                       flex items-center justify-center text-cyan-500 text-2xl
                       bg-white"
          >
            {service.icon}
          </div>
        </div>

        {/* TEXT */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4 text-slate-900">
            {service.title}
          </h3>

          <p className="text-slate-700 text-sm leading-relaxed">
            {service.shortDesc}
          </p>

          <motion.p
            initial={false}
            animate={{
              opacity: hovered ? 1 : 0,
              height: hovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="text-slate-700 text-sm leading-relaxed mt-4 overflow-hidden"
          >
            {service.longDesc}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
