import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function About10() {
  return (
    <section className="relative overflow-hidden bg-[#0B1117] py-24">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#FBBF24]/10 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#FBBF24]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#FBBF24]">
            Ready to Ride?
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Book Your Next Journey
            <span className="block text-[#FBBF24]">
              With WayTaxi24
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Whether you need a quick city ride, an airport transfer, or an
            outstation trip, WayTaxi24 is here to make every journey safe,
            comfortable, and affordable.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-xl bg-[#FBBF24] px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-500"
          >
            Book Your Ride
            <FaArrowRight />
          </Link>

          <Link
            to="/services"
            className="rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-[#FBBF24] hover:text-[#FBBF24]"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FBBF24] text-2xl text-black">
              <FaPhoneAlt />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Call Us
            </h3>

            <p className="mt-3 text-gray-300">
              +91 95000 08304
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FBBF24] text-2xl text-black">
              <FaEnvelope />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Email Us
            </h3>

            <p className="mt-3 text-gray-300">
              waytaxi24@gmail.com
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FBBF24] text-2xl text-black">
              <FaMapMarkerAlt />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Visit Us
            </h3>

            <p className="mt-3 text-gray-300">
              Chennai, Tamil Nadu, India
            </p>
          </motion.div>

        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-8 text-center"
        >
          <h4 className="text-2xl font-bold text-white">
            Safe Rides. Trusted Drivers. Transparent Pricing.
          </h4>

          <p className="mt-4 text-gray-400">
            Thank you for choosing <span className="font-semibold text-[#FBBF24]">WayTaxi24</span>.
            We're committed to making every trip memorable with reliable service
            and customer-first support.
          </p>
        </motion.div>

      </div>
    </section>
  );
}