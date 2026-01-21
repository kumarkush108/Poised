export default function ExactServicesSection() {
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-[#cfeeff] via-[#eaf6ff] to-white">
            <div className="max-w-7xl mx-auto md:px-20 grid md:grid-cols-[1.1fr_80px_1fr]">

                {/* LEFT CONTENT (STICKY & CENTERED) */}
                <div className="sticky top-0 h-screen flex flex-col justify-center pr-10">
                    <p className="uppercase text-cyan-400 tracking-[0.25em] text-xs mb-4">
                        OUR SERVICE
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1f2b55] leading-tight mb-6">
                        A Powerful And Innovative <br /> Feature Set
                    </h2>

                    <p className="text-[#2f3a5f] max-w-lg leading-relaxed text-lg">
                        No matter which Content Management System (CMS) your website utilizes,
                        our experts tailor solutions to meet your needs — optimizing performance,
                        flexibility, and ease of use.
                    </p>
                </div>

                {/* CENTER DIVIDER */}
                <div className="relative flex justify-center">
                    <div className="w-[4px] h-full rounded-full bg-gradient-to-b from-blue-500 via-blue-400 to-green-400" />
                </div>

                {/* RIGHT CONTENT (SCROLLABLE) */}
                <div
                    className="h-screen overflow-y-auto pl-10 pr-6 space-y-32 py-32 hide-scrollbar"
                >

                    {/* MOBILE APP */}
                    <div className="relative">
                        {/* FADED ICON */}
                        <div className="absolute -left-20 top-0 opacity-10">
                            <span className="text-[240px] font-black text-blue-600">M</span>
                        </div>

                        <h3 className="text-3xl font-bold text-[#1f2b55] mb-4">
                            Mobile Application Development
                        </h3>

                        <p className="text-[#2f3a5f] text-lg leading-relaxed max-w-xl">
                            Mobile application development demands agility and cross-platform
                            functionality. Our mobile app solutions are designed to meet business
                            needs from startups to enterprises with a well-planned, high-quality
                            development process.
                        </p>
                    </div>

                    {/* WEB APP */}
                    <div className="relative">
                        <div className="absolute -left-20 top-0 opacity-10">
                            <span className="text-[240px] font-black text-indigo-600">W</span>
                        </div>

                        <h3 className="text-3xl font-bold text-[#1f2b55] mb-4">
                            Web Application Development
                        </h3>

                        <p className="text-[#2f3a5f] text-lg leading-relaxed max-w-xl">
                            Responsive, optimized, and mobile-first web applications are essential
                            for success in today’s digital world. Our UI/UX-first approach ensures
                            fast, scalable, and accessible enterprise-grade web solutions.
                        </p>
                    </div>

                    {/* ENTERPRISE APP */}
                    <div className="relative">
                        <div className="absolute -left-20 top-0 opacity-10">
                            <span className="text-[240px] font-black text-green-600">E</span>
                        </div>

                        <h3 className="text-3xl font-bold text-[#1f2b55] mb-4">
                            Enterprise Application Development
                        </h3>

                        <p className="text-[#2f3a5f] text-lg leading-relaxed max-w-xl">
                            ERP & CRM solutions improve efficiency across enterprises. We build
                            end-to-end systems with powerful dashboards, mobile compatibility,
                            on-demand notifications, and high-performance architecture.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
