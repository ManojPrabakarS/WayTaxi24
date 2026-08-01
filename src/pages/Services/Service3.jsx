import {
  FaShieldAlt,
  FaClock,
  FaMapMarkedAlt,
  FaUserTie,
  FaMoneyBillWave,
  FaHeadset,
} from "react-icons/fa";

import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "100% Safe Journey",
    description:
      "Every ride is secured with verified drivers and regularly inspected vehicles.",
  },
  {
    icon: <FaClock />,
    title: "Always On Time",
    description:
      "Punctual pickups and timely drop-offs with real-time ride tracking.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Wide Coverage",
    description:
      "Serving local, airport and outstation destinations across South India.",
  },
  {
    icon: <FaUserTie />,
    title: "Professional Drivers",
    description:
      "Experienced chauffeurs providing a smooth and comfortable travel experience.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Pricing",
    description:
      "Transparent fares with no hidden charges or surge pricing surprises.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description:
      "Our customer support team is available anytime you need assistance.",
  },
];

export default function Service3() {
useEffect(() => {
  anime({
    targets: ".service3-heading",
    opacity: [0, 1],
    translateY: [60, 0],
    duration: 1000,
    easing: "easeOutExpo",
  });

  anime({
    targets: ".service3-subtitle",
    opacity: [0, 1],
    translateY: [40, 0],
    delay: 200,
    duration: 1000,
    easing: "easeOutExpo",
  });

  anime({
    targets: ".service-card",
    opacity: [0, 1],
    translateY: [80, 0],
    scale: [0.9, 1],
    delay: anime.stagger(150),
    duration: 1200,
    easing: "easeOutExpo",
  });

  anime({
    targets: ".service-icon",
    rotate: [-180, 0],
    scale: [0.5, 1],
    delay: anime.stagger(150, { start: 500 }),
    duration: 1000,
    easing: "easeOutBack",
  });
}, []);

  return (
    <section className="bg-[#0B1117] py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="service3-subtitle uppercase tracking-[4px] text-[#FBBF24] font-semibold opacity-0">
            Why Choose WayTaxi24
          </span>

          <h2 className="service3-heading mt-4 text-4xl md:text-5xl font-bold text-white opacity-0">
            Your Trusted Travel Partner
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            We combine safety, comfort and affordability to deliver
            premium taxi services for every journey.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => (

            <div
              key={index}
              className="service-card group rounded-3xl border border-white/10 bg-white/5 p-8 opacity-0 transition-all duration-500 hover:-translate-y-4 hover:border-[#FBBF24] hover:bg-[#111827] hover:shadow-[0_20px_50px_rgba(251,191,36,0.25)]"
            >

              <div className="service-icon flex h-20 w-20 items-center justify-center rounded-2xl bg-[#FBBF24]/10 text-4xl text-[#FBBF24] transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-[#FBBF24] group-hover:text-black">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-4 text-gray-300 leading-7">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}