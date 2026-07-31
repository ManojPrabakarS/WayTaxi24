import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaCar,
  FaMapMarkerAlt,
  FaSmileBeam,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaMobileAlt />,
    title: "Book Your Ride",
    description:
      "Choose your pickup and drop location, select your preferred vehicle, and confirm your booking in just a few clicks.",
  },
  {
    id: "02",
    icon: <FaCar />,
    title: "Driver Assigned",
    description:
      "A verified professional driver is instantly assigned to your trip with real-time tracking and ride details.",
  },
  {
    id: "03",
    icon: <FaMapMarkerAlt />,
    title: "Enjoy the Journey",
    description:
      "Travel safely in clean, comfortable vehicles while our experienced drivers ensure a smooth ride.",
  },
  {
    id: "04",
    icon: <FaSmileBeam />,
    title: "Reach Your Destination",
    description:
      "Arrive on time with transparent pricing and enjoy a seamless travel experience every time.",
  },
];

export default function About8() {
  return (
    <section className="bg-[#0B1117] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#FBBF24]">
            How It Works
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-white md:text-5xl">
            Booking a Ride is
            <span className="text-[#FBBF24]"> Quick & Easy</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Just four simple steps to enjoy a safe, comfortable, and reliable
            ride with WayTaxi24.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-yellow-500/20 lg:block"></div>

          <div className="space-y-14">

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="w-full lg:w-5/12">
                  <div className="rounded-3xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2">
                    <span className="text-5xl font-black text-yellow-200">
                      {step.id}
                    </span>

                    <h3 className="mt-5 text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#0B1117] bg-[#FBBF24] text-4xl text-black shadow-2xl">
                  {step.icon}
                </div>

                {/* Empty Side */}
                <div className="hidden lg:block lg:w-5/12"></div>

              </motion.div>
            ))}

          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Your Next Ride is Just a Few Clicks Away
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Experience fast booking, professional drivers, and comfortable
            journeys with WayTaxi24. Wherever you need to go, we're ready to
            take you there.
          </p>

          <button className="mt-8 rounded-xl bg-[#FBBF24] px-10 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-500">
            Book Your Ride
          </button>
        </motion.div>

      </div>
    </section>
  );
}