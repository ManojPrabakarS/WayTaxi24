import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import {
  FaUsers,
  FaTaxi,
  FaMapMarkedAlt,
  FaStar,
  FaCheckCircle,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    value: "5000+",
    title: "Happy Customers",
  },
  {
    icon: <FaTaxi />,
    value: "250+",
    title: "Premium Cabs",
  },
  {
    icon: <FaMapMarkedAlt />,
    value: "100+",
    title: "Destinations",
  },
  {
    icon: <FaStar />,
    value: "4.9",
    title: "Customer Rating",
  },
];

const trust = [
  "Verified Professional Drivers",
  "Transparent & Affordable Pricing",
  "24/7 Customer Support",
  "Safe & Sanitized Vehicles",
];

export default function Contact6() {
  useEffect(() => {
    anime({
      targets: ".trust-title",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".stat-card",
      opacity: [0, 1],
      scale: [0.8, 1],
      translateY: [40, 0],
      delay: anime.stagger(150),
      duration: 1000,
      easing: "easeOutBack",
    });

    anime({
      targets: ".trust-item",
      opacity: [0, 1],
      translateX: [-40, 0],
      delay: anime.stagger(120),
      duration: 900,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".award-icon",
      rotate: [0, 10],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 1800,
    });
  }, []);

  return (
    <section className="bg-[#f8f9fb] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Heading */}

        <div className="trust-title text-center opacity-0">

          <span className="uppercase tracking-[4px] text-[#FBBF24] font-semibold">
            Trusted By Thousands
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071016]">
            Why Customers Choose WayTaxi24
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-gray-600">
            We are committed to providing safe, reliable and affordable
            taxi services with customer satisfaction as our top priority.
          </p>

        </div>

        {/* Statistics */}

        <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">

          {stats.map((item, index) => (

            <div
              key={index}
              className="stat-card opacity-0 rounded-3xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FBBF24] text-3xl text-black">

                {item.icon}

              </div>

              <h3 className="mt-6 text-4xl font-bold text-[#071016]">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.title}
              </p>

            </div>

          ))}

        </div>

        {/* Trust Box */}

        <div className="mt-20 rounded-[32px] bg-[#071016] p-8 sm:p-10 lg:p-14">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}

            <div>

              <div className="award-icon inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#FBBF24]">

                <FaAward className="text-4xl text-black" />

              </div>

              <h3 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
                Your Trusted Travel Partner
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-300">
                From airport transfers to long-distance journeys,
                WayTaxi24 ensures every trip is comfortable,
                punctual and memorable.
              </p>

            </div>

            {/* Right */}

            <div className="space-y-6">

              {trust.map((item, index) => (

                <div
                  key={index}
                  className="trust-item opacity-0 flex items-center gap-4 rounded-2xl bg-white/10 p-5"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBBF24]">

                    <FaCheckCircle className="text-black" />

                  </div>

                  <h4 className="text-lg font-semibold text-white">

                    {item}

                  </h4>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}