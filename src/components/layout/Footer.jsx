import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
// No import needed for public SVG

export default function Footer() {
  return (
    <footer
      className="relative min-h-[420px] text-white pt-16 pb-12"
      style={{
        backgroundImage: `url(../../assets/footer-bg.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundColor: "rgb(2, 6, 23)", // Fallback
      }}
    >
      {/* Remove debug overlay now */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Your existing content unchanged */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-sm opacity-90 leading-relaxed">
            Poised builds robust features which are tailored to serve any scale
            of an enterprise with apt cloud application development, CX & UX/UI
            designs to cater to the business needs. API integrations, data
            migration & consolidation services back our overall offerings and
            deliver high-performance.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Solutions", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-cyan-300 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm opacity-90 mb-2">
            F-15, First Floor, Block D 242, Sector 63, Noida-201301
          </p>
          <p className="text-sm opacity-90 mb-2">info@poised.co.in</p>
          <p className="text-sm opacity-90 mb-4">01204598152</p>

          <div className="flex space-x-4">
            <Facebook className="w-6 h-6 hover:text-cyan-300 cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 hover:text-cyan-300 cursor-pointer transition-colors" />
            <Linkedin className="w-6 h-6 hover:text-cyan-300 cursor-pointer transition-colors" />
            <Instagram className="w-6 h-6 hover:text-cyan-300 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm opacity-80 relative z-10">
        &copy; {new Date().getFullYear()} Poised. All rights reserved.
      </div>
    </footer>
  );
}
