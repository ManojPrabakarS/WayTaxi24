import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

import contactBg from "../../assets/s1.jpg";

export default function Contact1() {
  useEffect(() => {
    anime({
      targets: ".contact-badge",
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 800,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".contact-title",
      opacity: [0, 1],
      translateY: [70, 0],
      delay: 200,
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".contact-text",
      opacity: [0, 1],
      translateY: [40, 0],
      delay: 500,
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".contact-btn",
      opacity: [0, 1],
      scale: [0.8, 1],
      translateY: [30, 0],
      delay: anime.stagger(200, { start: 800 }),
      duration: 900,
      easing: "easeOutBack",
    });

    anime({
      targets: ".floating-phone",
      translateY: [-12, 12],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 1800,
    });
  }, []);

  return (
   <section
  className="relative flex min-h-[80vh] md:min-h-screen items-center overflow-hidden bg-cover bg-center pt-24 md:pt-28"
  style={{
    backgroundImage: `url(${contactBg})`,
  }}
>
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70"></div>

      {/* Floating Icon */}

     <div className="floating-phone absolute right-6 top-24 hidden xl:block">
  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FBBF24]/20 backdrop-blur-md border border-[#FBBF24]/30">
    <FaPhoneAlt className="text-5xl text-[#FBBF24]" />
  </div>
</div>

      {/* Content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Breadcrumb */}

      <span className="contact-badge inline-block rounded-full bg-[#FBBF24] px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-black opacity-0">
  Home / Contact
</span>

        {/* Heading */}

        <h1 className="contact-title mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-white opacity-0 sm:text-5xl md:text-6xl lg:text-7xl">
  Get In Touch
  <br />
  <span className="text-[#FBBF24]">
    Book Your Taxi Today
  </span>
</h1>

        {/* Description */}

        <p className="contact-text mt-8 max-w-2xl text-lg leading-8 text-gray-300 opacity-0">
          Need a safe airport transfer, local ride or outstation taxi?
          Our team is available 24/7 to provide comfortable,
          affordable and reliable taxi services across Tamil Nadu.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <Link
            to="/contact"
            className="contact-btn inline-flex items-center justify-center gap-3 rounded-full bg-[#FBBF24] px-8 py-4 text-lg font-semibold text-black opacity-0 transition-all duration-300 hover:scale-105 hover:bg-yellow-500"
          >
            Book Taxi

            <FaArrowRight />
          </Link>

          <a
            href="tel:+919876543210"
            className="contact-btn inline-flex items-center justify-center gap-3 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white opacity-0 transition-all duration-300 hover:border-[#FBBF24] hover:bg-[#FBBF24] hover:text-black"
          >
            <FaPhoneAlt />

            Call Now
          </a>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 animate-bounce text-[#FBBF24]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>

      </div>
    </section>
  );
}