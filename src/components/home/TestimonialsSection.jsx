import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "CTO, EdTech Solutions",
    content:
      "Poised helped us automate our assessment platform with exceptional precision. Their technical expertise and delivery commitment truly set them apart.",
  },
  {
    name: "Anita Sharma",
    role: "Operations Head, Enterprise Client",
    content:
      "From biometric integration to secure authentication, Poised delivered a scalable and reliable solution that exceeded our expectations.",
  },
  {
    name: "Vikram Singh",
    role: "Founder, Skill Development Startup",
    content:
      "Their understanding of enterprise workflows and attention to detail helped us scale faster with confidence.",
  },
  {
    name: "Priya Kapoor",
    role: "Product Manager, FinTech Startup",
    content:
      "The team at Poised brought clarity to complex problems and delivered a seamless solution that boosted our productivity significantly.",
  },
];

export default function TestimonialsSection() {
  const [maxHeight, setMaxHeight] = useState(0);
  const slideRefs = useRef([]);

  useEffect(() => {
    const heights = slideRefs.current.map((slide) =>
      slide ? slide.offsetHeight : 0
    );
    setMaxHeight(Math.max(...heights));
  }, []);

  return (
    <section className="bg-[#020617] text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <p className="text-cyan-400 tracking-widest uppercase mb-3 text-sm">
            Testimonials
          </p>

          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            What Our Clients Say About Us
          </h2>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className="h-auto">
              <div
                ref={(el) => (slideRefs.current[i] = el)}
                style={{ minHeight: maxHeight }}
                className="
                  flex flex-col
                  rounded-2xl
                  p-6 sm:p-8
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  transition
                "
              >
                {/* QUOTE ICON */}
                <div className="mb-4 text-cyan-400">
                  <Quote size={24} />
                </div>

                {/* CONTENT */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                  “{item.content}”
                </p>

                {/* AUTHOR */}
                <div>
                  <p className="font-semibold text-white text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
