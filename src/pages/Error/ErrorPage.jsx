import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaRedoAlt,
  FaTaxi,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCar,
} from "react-icons/fa";
import { FaCableCar } from "react-icons/fa6";

export default function ErrorPage({ type = 404 }) {
  const is404 = type === 404;

  const error = {
    code: is404 ? "404" : "500",
    title: is404 ? "Destination Not Found" : "Unexpected Detour",
    desc: is404
      ? "Looks like this route doesn't exist anymore. Let's get you back on track."
      : "Our server hit a traffic jam. Please try again in a few moments.",
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#facc1515,transparent_40%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Floating Glow */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-20 top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]"
      />

      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]"
      />

      {/* Floating Particles */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0.2,
            y: Math.random() * 700,
            x: Math.random() * 1200,
          }}
          animate={{
            y: ["0%", "-120%"],
            opacity: [0.1, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-yellow-300"
        />
      ))}

      {/* Huge Background Number */}
      <h1 className="absolute text-[300px] font-black tracking-widest text-white/3 select-none">
        {error.code}
      </h1>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-[0_25px_80px_rgba(0,0,0,.6)] backdrop-blur-2xl"
      >

        {/* Top Badge */}
        <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-medium text-yellow-300">
          <FaTaxi />
          WayTaxi24 Error
        </div>

        {/* Taxi */}
        <motion.div
          animate={{
            x: [-12, 12, -12],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-br from-yellow-300 to-yellow-500 text-5xl text-black shadow-[0_0_60px_rgba(250,204,21,.45)]"
        >
          <FaTaxi />
        </motion.div>

        {/* Error */}
        <h1 className="mt-8 text-center text-8xl font-black text-yellow-400">
          {error.code}
        </h1>

        <h2 className="mt-3 text-center text-4xl font-bold text-white">
          {error.title}
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-center text-gray-400">
          {error.desc}
        </p>


        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <Link
            to="/"
            className="group flex flex-1 items-center justify-center gap-3 rounded-2xl bg-yellow-400 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-yellow-300"
          >
            <FaHome />
            Back Home

            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <FaArrowRight />
            </motion.span>

          </Link>

          {!is404 && (
            <button
              onClick={() => window.location.reload()}
              className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              <FaRedoAlt />
              Try Again
            </button>
          )}

        </div>

        {/* Bottom Glow */}
        <div className="absolute -bottom-28 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[120px]" />

      </motion.div>
    </div>
  );
}