import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Business Traveler",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "WayTaxi24 has completely changed the way I travel for work. Their drivers are always punctual, the cars are spotless, and the booking process is incredibly simple.",
  },
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "I booked an airport transfer with WayTaxi24 and had an excellent experience. The driver arrived early, helped with my luggage, and ensured a smooth journey.",
  },
  {
    name: "Rahul Verma",
    role: "Family Traveler",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    review:
      "Affordable pricing, professional drivers, and comfortable vehicles. My family always prefers WayTaxi24 for outstation trips because they never disappoint.",
  },
];

export default function About9() {
  return (
    <section className="bg-white py-24">
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
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            What Our
            <span className="text-[#FBBF24]"> Customers Say</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Thousands of customers trust WayTaxi24 for safe, comfortable, and
            reliable transportation every day.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-[#FBBF24] hover:shadow-2xl"
            >
              {/* Quote */}
              <FaQuoteLeft className="text-5xl text-[#FBBF24]" />

              {/* Review */}
              <p className="mt-6 leading-8 text-gray-600">
                "{item.review}"
              </p>

              {/* Rating */}
              <div className="mt-6 flex gap-1 text-[#FBBF24]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full border-4 border-yellow-400 object-cover"
                />

                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-[#0B1117] px-10 py-14 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Join Thousands of Happy Travelers
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Experience premium taxi services with professional drivers,
            transparent pricing, and 24/7 support. Your comfort and safety are
            always our priority.
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