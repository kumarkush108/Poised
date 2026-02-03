import bgImage from "../assets/banner-2.jpg";

export default function PageHeader({
  title = "About",
  breadcrumb = "Home / About",
}) {
  return (
    <section
      className="relative h-[280px] md:h-[360px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          {title}
        </h1>

        <p className="mt-4 text-sm uppercase tracking-widest text-gray-300">
          {breadcrumb.split("/").map((item, i, arr) => (
            <span key={i}>
              <span
                className={
                  i === arr.length - 1
                    ? "hero-tag"
                    : "text-white"
                }
              >
                {item.trim()}
              </span>
              {i !== arr.length - 1 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
