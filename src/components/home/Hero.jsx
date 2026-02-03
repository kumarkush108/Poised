import "../../styles/Hero.css";

import Banner1 from "../../assets/banner-1.jpg";
import Banner2 from "../../assets/banner-3.jpg";
import Banner3 from "../../assets/banner-4.jpg";
import Banner4 from "../../assets/banner-3.jpg";
import Banner5 from "../../assets/banner-2.jpg";
import Banner6 from "../../assets/banner-1.jpg";
import Banner7 from "../../assets/banner-4.jpg";
import Banner8 from "../../assets/banner-1.jpg";
import Banner9 from "../../assets/banner-3.jpg";
import Banner10 from "../../assets/banner-2.jpg";

const images = [
  Banner1, Banner4, Banner3, Banner2, Banner5,
  Banner6, Banner7, Banner8, Banner9, Banner10
];

export default function Hero() {
  return (
    <section className="hero md:px-20">

      {/* BACKGROUND COLUMNS */}
      <div className="hero-bg ">
        {/* OVERLAY */}
      <div className="hero-overlay"></div>
        <div className="hero-bg-wrapper">

          {[false, true, false].map((reverse, colIndex) => (
            <div
              key={colIndex}
              className={`hero-column ${reverse ? "reverse" : ""}`}
            >
              {[...images, ...images].map((img, i) => (
                <img
                  key={`${colIndex}-${i}`}
                  src={img}
                  alt=""
                />
              ))}
            </div>
          ))}

        </div>
      </div>

      {/* CONTENT */}
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-tag">PREMIUM WEB DESIGN AGENCY</p>

          <h1>
            We Grow Brands <br /> Online
          </h1>

          <p className="hero-desc">
            Custom websites, branding & digital marketing that accelerates growth.
          </p>

          <button className="hero-btn">
            Request a Quote →
          </button>
        </div>
      </div>

    </section>
  );
}
