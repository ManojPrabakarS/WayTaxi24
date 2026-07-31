import { FaPhoneAlt, FaArrowRight, FaTaxi } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="my-16">
      <div className="relative overflow-hidden rounded-4xl bg-[#0f0f0f] px-8 py-10 shadow-[0_25px_60px_rgba(0,0,0,.35)]">

        {/* Animated Glow */}
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-yellow-400/15 blur-[120px] animate-pulse"></div>

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-300/10 blur-[130px]"></div>

        {/* Small Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,#facc15_1px,transparent_1px)] bg-size-[28px_28px]"></div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row">

          {/* Left Content */}
          <div className="max-w-xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-semibold text-yellow-300 backdrop-blur">
              <FaTaxi />
              Premium Taxi Service
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white lg:text-5xl">
              Ride Smarter,
              <span className="block text-yellow-400">
                Travel Better.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              Airport Transfers • Local Trips • Outstation Rides •
              Professional Drivers • Available 24/7
            </p>

          </div>

          {/* Right Card */}
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
              Need a Taxi?
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              Book Instantly
            </h3>

            <div className="my-6 h-px bg-white/10"></div>

            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 transition-all duration-300 hover:bg-yellow-400 hover:text-black"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-sm text-gray-300 group-hover:text-black">
                  Call Us Anytime
                </p>

                <h4 className="text-xl font-bold text-white group-hover:text-black ">
                  +91 98765 43210
                </h4>
              </div>
            </a>

            {/* Button */}
            <button className="group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-yellow-400 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(250,204,21,.45)]">
              Book Your Ride
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}