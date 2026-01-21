import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative text-white pt-16 pb-12"
      style={{
        background: "linear-gradient(135deg, rgba(5,112,184,0.9) 0%, rgba(0,156,255,0.9) 100%)",
        color: "#ffffff",
        paddingBottom: `calc(env(safe-area-inset-bottom) + 3rem)`,
        backdropFilter: "saturate(180%) blur(10px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ABOUT US */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-sm opacity-90 leading-relaxed mb-4">
            Poised builds robust features which are tailored to serve any scale of an enterprise with apt cloud application development, CX & UX/UI designs to cater to the business needs. API integrations, data migration & consolidation services back our overall offerings and deliver high-performance.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-cyan-300 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-300 transition duration-300">About</a>
            </li>
            <li>
              <a href="#solutions" className="hover:text-cyan-300 transition duration-300">Solutions</a>
            </li>
            <li>
              <a href="#services" className="hover:text-cyan-300 transition duration-300">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-300 transition duration-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm opacity-90 mb-2">
            F-15, First Floor, Block D 242, Sector 63, Noida-201301
          </p>
          <p className="text-sm opacity-90 mb-2">info@poised.co.in</p>
          <p className="text-sm opacity-90 mb-4">01204598152</p>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-cyan-300 transition duration-300"><Facebook size={24} /></a>
            <a href="#" className="hover:text-cyan-300 transition duration-300"><Twitter size={24} /></a>
            <a href="#" className="hover:text-cyan-300 transition duration-300"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-cyan-300 transition duration-300"><Instagram size={24} /></a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm opacity-80">
        &copy; {new Date().getFullYear()} Poised. All rights reserved.
      </div>
    </footer>
  );
}
