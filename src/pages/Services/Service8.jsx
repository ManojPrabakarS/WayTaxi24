import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaArrowRight,
  FaTaxi,
} from "react-icons/fa";

import taxiBg from "../../assets/corporate.png";

export default function Service8() {

  useEffect(() => {

    anime({
      targets: ".cta-badge",
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 900,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".cta-title",
      opacity: [0, 1],
      translateY: [70, 0],
      delay: 200,
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".cta-text",
      opacity: [0, 1],
      translateY: [40, 0],
      delay: 450,
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".cta-btn",
      opacity: [0, 1],
      scale: [0.8, 1],
      translateY: [30, 0],
      delay: anime.stagger(200, { start: 700 }),
      duration: 1000,
      easing: "easeOutBack",
    });

    anime({
      targets: ".floating-taxi",
      translateY: [-10, 10],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 2200,
    });

  }, []);

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32 bg-cover bg-center"
      style={{
        backgroundImage: `url(${taxiBg})`,
      }}
    >

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      {/* Decorative Taxi */}

      <div className="floating-taxi absolute right-10 top-10 hidden lg:block">

        <FaTaxi className="text-[140px] text-[#FBBF24]/10" />

      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <span className="cta-badge inline-block rounded-full bg-[#FBBF24] px-6 py-2 font-semibold text-black opacity-0">

          READY TO TRAVEL?

        </span>

        <h2 className="cta-title mt-8 text-4xl md:text-6xl font-extrabold leading-tight text-white opacity-0">

          Book Your Taxi
          <br />

          <span className="text-[#FBBF24]">

            Anytime, Anywhere

          </span>

        </h2>

        <p className="cta-text mt-8 text-lg md:text-xl leading-8 text-gray-300 opacity-0">

          Experience safe rides, professional drivers,
          transparent pricing and premium comfort with
          WayTaxi24. Book your next journey today.

        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            to="/contact"
            className="cta-btn opacity-0 inline-flex items-center justify-center gap-3 rounded-full bg-[#FBBF24] px-10 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(251,191,36,.6)]"
          >

            Book Now

            <FaArrowRight />

          </Link>

          <a
            href="tel:+919876543210"
            className="cta-btn opacity-0 inline-flex items-center justify-center gap-3 rounded-full border-2 border-white px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-[#FBBF24] hover:bg-[#FBBF24] hover:text-black"
          >

            <FaPhoneAlt />

            Call Now

          </a>

        </div>

      </div>

    </section>
  );
}