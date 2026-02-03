export default function ExactServicesSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#cfeeff] via-[#eaf6ff] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 grid grid-cols-1 md:grid-cols-[1.1fr_80px_1fr] gap-16 md:gap-0">

        {/* LEFT CONTENT */}
        <div
          className="
            md:sticky md:top-0 md:h-screen
            flex flex-col justify-center
            pt-20 md:pt-0        /* ✅ MOBILE TOP PADDING ADDED */
            md:pr-10
            text-center md:text-left
            items-center md:items-start
          "
        >
          <p className="uppercase text-cyan-500 tracking-[0.25em] text-xs mb-4">
            OUR SERVICE
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2b55] leading-tight mb-6">
            A Powerful And Innovative <br className="hidden sm:block" /> Feature Set
          </h2>

          <p className="text-[#2f3a5f] max-w-lg leading-relaxed text-base sm:text-lg">
            No matter which Content Management System (CMS) your website utilizes,
            our experts tailor solutions to meet your needs — optimizing performance,
            flexibility, and ease of use.
          </p>
        </div>

        {/* CENTER DIVIDER (DESKTOP ONLY) */}
        <div className="hidden md:flex relative justify-center">
          <div className="w-[4px] h-full rounded-full bg-gradient-to-b from-blue-500 via-blue-400 to-green-400" />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            md:h-screen md:overflow-y-auto
            md:pl-10 md:pr-6
            space-y-20 md:space-y-32
            pt-0 md:py-32       /* ✅ MOBILE TOP PADDING REMOVED */
            pb-16 md:pb-32
            hide-scrollbar
            text-center md:text-left
            flex flex-col items-center md:items-start
          "
        >

          {/* MOBILE APP */}
          <div className="relative max-w-xl">
            <div className="absolute left-1/2 -translate-x-1/2 md:left-[-80px] md:translate-x-0 -top-12 opacity-10">
              <span className="text-[120px] sm:text-[160px] md:text-[240px] font-black text-blue-600">
                M
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1f2b55] mb-4">
              Mobile Application Development
            </h3>

            <p className="text-[#2f3a5f] text-base sm:text-lg leading-relaxed">
              Mobile application development demands agility and cross-platform
              functionality. Our mobile app solutions are designed to meet business
              needs from startups to enterprises.
            </p>
          </div>

          {/* WEB APP */}
          <div className="relative max-w-xl">
            <div className="absolute left-1/2 -translate-x-1/2 md:left-[-80px] md:translate-x-0 -top-12 opacity-10">
              <span className="text-[120px] sm:text-[160px] md:text-[240px] font-black text-indigo-600">
                W
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1f2b55] mb-4">
              Web Application Development
            </h3>

            <p className="text-[#2f3a5f] text-base sm:text-lg leading-relaxed">
              Responsive, optimized, and mobile-first web applications are essential
              for success in today’s digital world.
            </p>
          </div>

          {/* ENTERPRISE APP */}
          <div className="relative max-w-xl">
            <div className="absolute left-1/2 -translate-x-1/2 md:left-[-80px] md:translate-x-0 -top-12 opacity-10">
              <span className="text-[120px] sm:text-[160px] md:text-[240px] font-black text-green-600">
                E
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1f2b55] mb-4">
              Enterprise Application Development
            </h3>

            <p className="text-[#2f3a5f] text-base sm:text-lg leading-relaxed">
              ERP & CRM solutions improve efficiency across enterprises with
              high-performance architecture and dashboards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
