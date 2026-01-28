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
    // Calculate max height of all slides
    const heights = slideRefs.current.map((slide) =>
      slide ? slide.offsetHeight : 0
    );
    setMaxHeight(Math.max(...heights));
  }, []);

  return (
    <section className="py-28 bg-[#020617] text-white">
      <div className="max-w-full mx-auto px-6">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-cyan-400 tracking-widest uppercase mb-4">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            What Our Clients Say About Us
          </h2>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                ref={(el) => (slideRefs.current[i] = el)}
                style={{ minHeight: maxHeight }}
                className="flex flex-col rounded-3xl p-10
                           bg-white/5 backdrop-blur-md
                           border border-white/10
                           hover:bg-white/10 transition"
              >
                {/* QUOTE ICON */}
                <div className="mb-6 text-cyan-400">
                  <Quote size={28} />
                </div>

                {/* CONTENT */}
                <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                  “{item.content}”
                </p>

                {/* AUTHOR */}
                <div>
                  <p className="font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-400">
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
