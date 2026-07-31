import {
  FaUserFriends,
  FaSuitcase,
  FaSnowflake,
  FaGasPump,
} from "react-icons/fa";

import fleet1 from "../../assets/Dzire.png";
import fleet2 from "../../assets/5seater.png";
import fleet3 from "../../assets/4seater.png";
import fleet4 from "../../assets/7seater.png";

const fleet = [
  {
    image: fleet1,
    name: "Sedan",
    passengers: "4 Passengers",
    luggage: "2 Bags",
    fuel: "Petrol / Diesel",
  },
  {
    image: fleet2,
    name: "SUV",
    passengers: "5 Passengers",
    luggage: "4 Bags",
    fuel: "Diesel",
  },
  {
    image: fleet3,
    name: "Premium Sedan",
    passengers: "4 Passengers",
    luggage: "3 Bags",
    fuel: "Petrol",
  },
  {
    image: fleet4,
    name: "Premium SUV",
    passengers: "7 Passengers",
    luggage: "8 Bags",
    fuel: "Diesel",
  },
];

export default function About6() {
  return (
    <section className="bg-[#0B1117] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#FBBF24]">
            Our Fleet
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-white md:text-5xl">
            Travel in
            <span className="text-[#FBBF24]"> Comfort & Style</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Choose from our wide range of clean, well-maintained vehicles
            designed to provide a safe and comfortable journey for every
            occasion.
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {fleet.map((car, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900">
                  {car.name}
                </h3>

                <div className="mt-6 space-y-4">

                  <div className="flex items-center gap-3">
                    <FaUserFriends className="text-[#FBBF24]" />
                    <span className="text-gray-700">
                      {car.passengers}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaSuitcase className="text-[#FBBF24]" />
                    <span className="text-gray-700">
                      {car.luggage}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaGasPump className="text-[#FBBF24]" />
                    <span className="text-gray-700">
                      {car.fuel}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaSnowflake className="text-[#FBBF24]" />
                    <span className="text-gray-700">
                      Air Conditioned
                    </span>
                  </div>

                </div>

                <button className="mt-8 w-full rounded-xl bg-[#FBBF24] py-3 font-semibold text-black transition hover:bg-yellow-500">
                  Book This Vehicle
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}