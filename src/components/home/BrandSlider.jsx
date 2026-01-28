import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Add brand names along with logos
const brands = [
  { logo: "/brands/CZlogo.png", name: "Corezone" },
  { logo: "/brands/Eindhan.png", name: "Eindhan" },
  { logo: "/brands/SPMS.png", name: "Poisedol" },
  { logo: "/brands/Eindhan.png", name: "Eindhan" },
  { logo: "/brands/CZlogo.png", name: "Corezone" },
  { logo: "/brands/SPMS.png", name: "Poisedol" },
];

export default function BrandSlider() {
  return (
    <div className="bg-[#00042a]/90 py-3">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={140}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="max-w-full mx-auto"
      >
        {brands.map((brand, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col justify-center items-center h-24 opacity-70 hover:opacity-100 transition">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 object-contain mb-2"
              />
              <span className="text-white text-sm">{brand.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
