import { Check } from "lucide-react";
import AboutImage from "../../assets/about-mockup.png"; // replace with your image

export default function AboutHome() {
    return (
        <section className="relative bg-[#050726] text-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <p className="uppercase text-cyan-400 tracking-[0.25em] text-xs mb-4">
                        ABOUT US 
                    </p>
                    <h2 className="text-4xl md:text-4xl font-extrabold leading-tight">
                        Innovative IT Consulting Firm Delivering <br />
                        <span className="text-cyan-400">Smart Digital Solutions</span>
                    </h2>

                    <ul className="mt-10 space-y-6">
                        <li className="flex items-start gap-4">
                            <Check className="text-cyan-400 mt-1" />
                            <p className="text-md">
                                Technology-Driven Platforms {" "}
                                <span className="text-cyan-400 font-semibold">
                                    To Automate Business Processes
                                </span>
                            </p>
                        </li>

                        <li className="flex items-start gap-4">
                            <Check className="text-cyan-400 mt-1" />
                            <p className="text-md">
                                Secure Identity, Assessment & {" "}
                                <span className="text-cyan-400 font-semibold">
                                    Authentication Solutions
                                </span>
                            </p>
                        </li>

                        <li className="flex items-start gap-4">
                            <Check className="text-cyan-400 mt-1" />
                            <p className="text-md">
                                Scalable Systems to Support {" "}
                                <span className="text-cyan-400 font-semibold">
                                    Digital & Electric Mobility Growth
                                </span>
                            </p>
                        </li>
                    </ul>

                    <p className="mt-10 text-gray-300 leading-relaxed max-w-xl">
                        We are an information technology consulting firm focused on helping organizations automate, manage, and scale their operations through smart digital solutions. From online assessments and biometric identity management to second-factor authentication, content development, and EV charging management systems, we deliver reliable, secure, and high-performance platforms that drive efficiency and business growth.
                    </p>

                    <button className="mt-10 bg-cyan-400 text-[#050726] px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
                        Learn More →
                    </button>
                </div>

                {/* RIGHT VISUAL */}
                <div className="relative flex justify-center">
                    <div className="relative">
                        <img
                            src={AboutImage}
                            alt="Agency Work Showcase"
                            className="rounded-2xl shadow-2xl rotate-3"
                        />

                        {/* Floating glow */}
                        <div className="absolute -inset-4 bg-cyan-400/20 blur-3xl -z-10" />
                    </div>
                </div>

            </div>
        </section>
    );
}
