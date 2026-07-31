import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import aboutBg from "../../assets/a1.png";
import { motion } from "framer-motion";

export default function About1() {
  return (
    <motion.section
  initial={{ scale: 1.15 }}
  animate={{ scale: 1 }}
  transition={{ duration: 8, ease: "easeOut" }}
  className="relative flex min-h-[65vh] items-center justify-center overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${aboutBg})` }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* Breadcrumb */}
        <p className="mb-5 text-sm font-medium uppercase tracking-[3px] text-yellow-400">
          Home / About Us
        </p>

        {/* Heading */}
       <motion.h1
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl"
>
  About <span className="text-[#FBBF24]">WayTaxi24</span>
</motion.h1>

        {/* Description */}
        <motion.p
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="mx-auto mb-10 max-w-3xl text-base leading-8 text-gray-300 md:text-lg"
>
  WayTaxi24 is committed to providing safe, reliable, and affordable
  taxi services. Whether it's a local trip, airport transfer, or
  outstation journey, we ensure every ride is comfortable, punctual,
  and memorable.
</motion.p>

        {/* Buttons */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="flex flex-col justify-center gap-4 sm:flex-row"
>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#FBBF24] px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-yellow-500 hover:scale-105"
          >
            Book Your Ride
            <FaArrowRight />
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-lg border border-white px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-[#FBBF24] hover:text-[#FBBF24]"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}