import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import taxiVideo from "../../assets/taxi.mp4";

export default function Service1() {
  useEffect(() => {

  anime({
    targets: ".hero-subtitle",
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    easing: "easeOutExpo",
  });

  anime({
    targets: ".hero-title",
    opacity: [0, 1],
    translateY: [60, 0],
    delay: 200,
    duration: 1200,
    easing: "easeOutExpo",
  });

  anime({
    targets: ".hero-text",
    opacity: [0, 1],
    translateY: [40, 0],
    delay: 500,
    duration: 1000,
    easing: "easeOutExpo",
  });

  anime({
    targets: ".hero-btn",
    opacity: [0, 1],
    translateY: [30, 0],
    delay: anime.stagger(200, { start: 800 }),
    duration: 1000,
    easing: "easeOutExpo",
  });

  anime({
    targets: ".scroll-icon",
    translateY: [0, 12],
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
    duration: 1200,
  });

}, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={taxiVideo} type="video/mp4" />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero */}

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

        <p className="hero-subtitle text-xs sm:text-sm lg:text-base uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[7px] text-[#FBBF24] font-semibold opacity-0">
          PREMIUM TAXI SERVICES
        </p>

        <h1 className="hero-title mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] text-white opacity-0">
          Safe.
          <br />
          Reliable.
          <br />
          <span className="text-[#FBBF24]">Comfortable.</span>
        </h1>

        <p className="hero-text mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-200 opacity-0">
          Whether it's an airport transfer, outstation journey or local city
          ride, WayTaxi24 delivers professional drivers, clean vehicles and
          affordable fares for every trip.
        </p>

       <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">

          <Link
            to="/contact"
            className="hero-btn inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#FBBF24] px-7 py-4 text-base sm:text-lg font-semibold text-black opacity-0 transition-all duration-300 hover:scale-105 hover:bg-yellow-500"
          >
            Book Taxi

            <FaArrowRight />

          </Link>

          <Link
            to="/about"
className="hero-btn inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-white px-7 py-4 text-base sm:text-lg font-semibold text-white opacity-0 transition-all duration-300 hover:border-[#FBBF24] hover:text-[#FBBF24]"
          >
            Learn More
          </Link>

        </div>

      </div>

      {/* Scroll */}

      <div className="scroll-icon absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#FBBF24]"
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