import { Check } from "lucide-react";
import AboutImage from "../../assets/about-mockup.png";

export default function AboutHome() {
  return (
    <section className="relative bg-[#050726] text-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <p className="uppercase text-cyan-400 tracking-[0.25em] text-xs mb-4">
            ABOUT US
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Innovative IT Consulting Firm Delivering <br />
            <span className="text-cyan-400">Smart Digital Solutions</span>
          </h2>

          <ul className="mt-8 md:mt-10 space-y-5 max-w-xl mx-auto md:mx-0">
            <li className="flex items-start gap-4">
              <Check className="text-cyan-400 mt-1 shrink-0" />
              <p className="text-sm sm:text-md">
                Technology-Driven Platforms{" "}
                <span className="text-cyan-400 font-semibold">
                  To Automate Business Processes
                </span>
              </p>
            </li>

            <li className="flex items-start gap-4">
              <Check className="text-cyan-400 mt-1 shrink-0" />
              <p className="text-sm sm:text-md">
                Secure Identity, Assessment &{" "}
                <span className="text-cyan-400 font-semibold">
                  Authentication Solutions
                </span>
              </p>
            </li>

            <li className="flex items-start gap-4">
              <Check className="text-cyan-400 mt-1 shrink-0" />
              <p className="text-sm sm:text-md">
                Scalable Systems to Support{" "}
                <span className="text-cyan-400 font-semibold">
                  Digital & Electric Mobility Growth
                </span>
              </p>
            </li>
          </ul>

          <p className="mt-8 md:mt-10 text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
            We are an information technology consulting firm focused on helping
            organizations automate, manage, and scale their operations through
            smart digital solutions. From online assessments and biometric
            identity management to second-factor authentication and EV charging
            management systems, we deliver secure and high-performance platforms.
          </p>

          <button className="mt-8 md:mt-10 bg-cyan-400 text-[#050726] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:scale-105 transition">
            Learn More →
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center mt-10 md:mt-0">
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src={AboutImage}
              alt="Agency Work Showcase"
              className="w-full rounded-2xl shadow-2xl rotate-0 md:rotate-3"
            />

            {/* Floating glow */}
            <div className="absolute -inset-6 bg-cyan-400/20 blur-3xl -z-10" />
          </div>
        </div>

      </div>
    </section>
  );
}
