import { FaBullseye, FaEye } from "react-icons/fa";

export default function About4() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#FBBF24]">
            Our Purpose
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Mission &
            <span className="text-[#FBBF24]"> Vision</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At WayTaxi24, we strive to redefine urban transportation by
            providing safe, reliable, and customer-focused taxi services
            powered by technology and professional drivers.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Mission Card */}
          <div className="group rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FBBF24] text-4xl text-black transition-transform duration-300 group-hover:rotate-12">
              <FaBullseye />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              To provide dependable, affordable, and secure transportation
              services that make every journey comfortable. We are committed
              to punctuality, transparency, and delivering outstanding
              customer satisfaction through every ride.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#FBBF24]"></span>
                <span className="text-gray-700">
                  Safe & Comfortable Rides
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#FBBF24]"></span>
                <span className="text-gray-700">
                  Transparent Pricing
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#FBBF24]"></span>
                <span className="text-gray-700">
                  Professional Drivers
                </span>
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="group rounded-3xl bg-[#111827] p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FBBF24] text-4xl text-black transition-transform duration-300 group-hover:rotate-12">
              <FaEye />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Our Vision
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              To become the most trusted taxi service by combining innovation,
              safety, and exceptional customer service, making travel simple,
              accessible, and enjoyable for everyone.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#FBBF24]"></span>
                <span className="text-gray-300">
                  Technology-Driven Mobility
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#FBBF24]"></span>
                <span className="text-gray-300">
                  Nationwide Service Expansion
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#FBBF24]"></span>
                <span className="text-gray-300">
                  Sustainable Transportation
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}