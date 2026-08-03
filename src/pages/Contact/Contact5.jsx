import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaTaxi,
} from "react-icons/fa";

export default function Contact5() {

  useEffect(() => {

    anime({
      targets: ".follow-title",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".social-card",
      opacity: [0, 1],
      translateY: [60, 0],
      delay: anime.stagger(180),
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".taxi-icon",
      rotate: [0, 10],
      direction: "alternate",
      loop: true,
      duration: 1800,
      easing: "easeInOutSine",
    });

  }, []);

  return (

    <section className="bg-[#071016] py-16 md:py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}

        <div className="follow-title opacity-0 text-center">

          <span className="uppercase tracking-[4px] text-[#FBBF24] font-semibold">

            Stay Connected

          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">

            Follow WayTaxi24

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-gray-300">

            Connect with us through social media and stay updated
            with special offers, travel updates and taxi services.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {/* Instagram */}

          <a
            href="#"
            className="social-card opacity-0 rounded-3xl bg-white/5 border border-white/10 p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-[#FBBF24]"
          >

            <FaInstagram className="mx-auto text-5xl text-[#FBBF24]" />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Instagram
            </h3>

            <p className="mt-3 text-gray-400">
              Follow our latest travel stories.
            </p>

          </a>

          {/* Facebook */}

          <a
            href="#"
            className="social-card opacity-0 rounded-3xl bg-white/5 border border-white/10 p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-[#FBBF24]"
          >

            <FaFacebookF className="mx-auto text-5xl text-[#FBBF24]" />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Facebook
            </h3>

            <p className="mt-3 text-gray-400">
              Join our growing community.
            </p>

          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/919944817224"
            target="_blank"
            rel="noreferrer"
            className="social-card opacity-0 rounded-3xl bg-white/5 border border-white/10 p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-[#25D366]"
          >

            <FaWhatsapp className="mx-auto text-5xl text-[#25D366]" />

            <h3 className="mt-6 text-2xl font-bold text-white">
              WhatsApp
            </h3>

            <p className="mt-3 text-gray-400">
              Book your taxi instantly.
            </p>

          </a>

          {/* Call */}

          <a
            href="tel:+919944817224"
            className="social-card opacity-0 rounded-3xl bg-[#FBBF24] p-8 text-center transition-all duration-300 hover:scale-105"
          >

            <FaPhoneAlt className="mx-auto text-5xl text-black" />

            <h3 className="mt-6 text-2xl font-bold text-black">
              Call Now
            </h3>

            <p className="mt-3 text-black/80">
              +91 99448 17224
            </p>

          </a>

        </div>

        {/* Bottom CTA */}

        <div className="mt-16 rounded-[30px] bg-white p-8 sm:p-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <div className="taxi-icon inline-block">

                <FaTaxi className="text-5xl text-[#FBBF24]" />

              </div>

              <h3 className="mt-4 text-3xl font-bold text-[#071016]">

                Your Ride Is Just One Click Away

              </h3>

              <p className="mt-4 max-w-2xl text-gray-600 leading-8">

                Safe journeys, professional drivers,
                affordable fares and 24/7 availability.
                Book your next ride with WayTaxi24 today.

              </p>

            </div>

            <a
              href="https://wa.me/919944817224"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#071016] px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-black"
            >

              Book via WhatsApp

            </a>

          </div>

        </div>

      </div>

    </section>

  );

}