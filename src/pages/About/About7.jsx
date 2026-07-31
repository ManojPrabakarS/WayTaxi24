import { motion } from "framer-motion";
import {
  FaUsers,
  FaTaxi,
  FaMapMarkedAlt,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "25K+",
    title: "Happy Customers",
  },
  {
    icon: <FaTaxi />,
    number: "500+",
    title: "Premium Vehicles",
  },
  {
    icon: <FaMapMarkedAlt />,
    number: "100K+",
    title: "Successful Trips",
  },
  {
    icon: <FaStar />,
    number: "4.9/5",
    title: "Customer Rating",
  },
];

export default function About7() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#FBBF24]">
            Our Achievements
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Numbers That
            <span className="text-[#FBBF24]"> Speak for Us</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our commitment to safety, punctuality, and customer satisfaction
            has made WayTaxi24 a trusted transportation partner for thousands
            of passengers.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-[#FBBF24] hover:shadow-2xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 text-4xl text-[#FBBF24] transition-all duration-300 group-hover:bg-[#FBBF24] group-hover:text-black">
                {item.icon}
              </div>

              <h3 className="mt-8 text-5xl font-extrabold text-gray-900">
                {item.number}
              </h3>

              <p className="mt-4 text-lg font-medium text-gray-600">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-[#0B1117] px-10 py-14 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Trusted by Thousands of Happy Travelers
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Every journey is powered by experienced drivers, clean vehicles,
            transparent pricing, and a commitment to delivering the best travel
            experience every time.
          </p>

          <button
  className="mt-8 w-full sm:w-auto whitespace-nowrap rounded-xl bg-[#FBBF24] px-6 sm:px-10 py-4 text-base sm:text-lg font-semibold text-black transition-all duration-300 hover:bg-yellow-500 hover:scale-105"
>
  Book Your Ride
</button>
        </motion.div>

      </div>
    </section>
  );
}