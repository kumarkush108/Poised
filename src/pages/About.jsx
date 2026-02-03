import { CheckCircle } from "lucide-react";
import AboutImage from "../assets/about-mockup.png";
import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <>
      <PageHeader title="About Us" breadcrumb="Home / About" />

      {/* ABOUT SECTION */}
      <section className="bg-[#f8fafc] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* SECTION HEADER */}
          <div className="max-w-4xl mb-16">
            <p className="text-cyan-600 uppercase tracking-widest text-xs mb-3">
              About Our Company
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] leading-tight">
              Trusted IT Consulting Partner for <br className="hidden sm:block" />
              Scalable Digital Solutions
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
              We help organizations modernize operations, strengthen security,
              and build reliable digital platforms through tailored IT
              consulting and engineering services.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#0f172a] mb-6">
                Our Expertise
              </h3>

              <ul className="space-y-5">
                {[
                  "Custom web and mobile application development",
                  "Enterprise platforms for assessment, identity & authentication",
                  "Cloud-native, scalable and secure system architecture",
                  "API integration, data migration & legacy modernization",
                  "UI/UX engineering focused on usability and performance",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-1 shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-gray-600 leading-relaxed max-w-xl">
                Our consulting-driven approach ensures every solution aligns
                with business goals, regulatory requirements, and long-term
                scalability.
              </p>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={AboutImage}
                  alt="IT Consulting Services"
                  className="w-full max-w-md rounded-2xl shadow-xl"
                />
                {/* Soft accent glow */}
                <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl -z-10" />
              </div>
            </div>

          </div>

          {/* VALUES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">

            {[
              {
                title: "Consulting-First Approach",
                desc: "We begin with business understanding, not just development, ensuring solutions deliver measurable impact.",
              },
              {
                title: "Enterprise-Grade Security",
                desc: "Security, compliance, and performance are embedded into every system we design and deploy.",
              },
              {
                title: "Long-Term Partnership",
                desc: "We work as a technology partner, supporting growth through continuous improvement and innovation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-[#0f172a] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}
