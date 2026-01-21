import Hero from "../components/home/Hero";
import BrandSlider from "../components/home/BrandSlider";
import AboutHome from "../components/home/AboutHome";
import Services from "../components/home/Services";
import CmsServicesSection from "../components/home/CmsServicesSection";
import AchievementsSection from "../components/home/AchievementsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      {/* BRAND SLIDER BOTTOM */}
      <BrandSlider />
      <AboutHome />
      <Services />
      <CmsServicesSection />
      <AchievementsSection />
      <TestimonialsSection />
      {/* Home page ke baaki sections */}
    </>
  );
}
