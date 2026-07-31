import { FaCheckCircle } from "react-icons/fa";
import aboutImg from "../../assets/a2.png";

export default function About2() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={aboutImg}
              alt="WayTaxi24"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">

          <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-600">
            Who We Are
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl">
            Your Trusted Travel
            <span className="text-[#FBBF24]"> Partner</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            WayTaxi24 is committed to providing safe, reliable, and affordable
            taxi services for every journey. Whether you're traveling within the
            city, heading to the airport, or planning an outstation trip, we
            ensure a comfortable and stress-free travel experience.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            With experienced drivers, well-maintained vehicles, transparent
            pricing, and 24/7 customer support, we make every ride smooth,
            secure, and enjoyable.
          </p>

          {/* Features */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-2xl text-[#FBBF24]" />
              <span className="text-lg font-medium text-gray-800">
                Verified Drivers
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-2xl text-[#FBBF24]" />
              <span className="text-lg font-medium text-gray-800">
                Safe & Clean Cars
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-2xl text-[#FBBF24]" />
              <span className="text-lg font-medium text-gray-800">
                Affordable Pricing
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-2xl text-[#FBBF24]" />
              <span className="text-lg font-medium text-gray-800">
                24/7 Customer Support
              </span>
            </div>

          </div>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl bg-gray-100 p-6 sm:grid-cols-4">

            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#FBBF24]">5000+</h3>
              <p className="mt-1 text-sm text-gray-600">Happy Customers</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#FBBF24]">150+</h3>
              <p className="mt-1 text-sm text-gray-600">Drivers</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#FBBF24]">100+</h3>
              <p className="mt-1 text-sm text-gray-600">Daily Trips</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#FBBF24]">4.9★</h3>
              <p className="mt-1 text-sm text-gray-600">Customer Rating</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}