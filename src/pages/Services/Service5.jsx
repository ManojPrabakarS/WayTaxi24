import { FaUserFriends, FaSuitcase, FaSnowflake, FaArrowRight } from "react-icons/fa";

import dzire from "../../assets/Dzire.png";
import innova from "../../assets/7seater.png";
import tempo from "../../assets/tempo.png";
import camry from "../../assets/4seater.png";

const fleet = [
  {
    name: "Swift Dzire",
    image: dzire,
    seats: "4 Seats",
    luggage: "2 Bags",
    type: "AC Sedan",
  },
  {
    name: "Toyota Innova Crysta",
    image: innova,
    seats: "7 Seats",
    luggage: "5 Bags",
    type: "Premium SUV",
  },
  {
    name: "Tempo Traveller",
    image: tempo,
    seats: "12 Seats",
    luggage: "10 Bags",
    type: "Group Travel",
  },
  {
    name: "Toyota Camry",
    image: camry,
    seats: "4 Seats",
    luggage: "3 Bags",
    type: "Executive",
  },
];

export default function Service5() {
  return (
    <section className="bg-[#f8f9fb] py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#FBBF24] font-semibold">
            Our Fleet
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#071016]">
            Choose Your Perfect Ride
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We offer a wide range of well-maintained vehicles for local,
            airport, corporate and outstation travel.
          </p>

        </div>

        {/* Fleet */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {fleet.map((car, index) => (

            <div
              key={index}
              className="group rounded-3xl bg-white overflow-hidden shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="overflow-hidden">

                <img
                  src={car.image}
                  alt={car.name}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#071016]">
                  {car.name}
                </h3>

                <div className="mt-5 space-y-3">

                  <div className="flex items-center gap-3">

                    <FaUserFriends className="text-[#FBBF24]" />

                    <span>{car.seats}</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <FaSuitcase className="text-[#FBBF24]" />

                    <span>{car.luggage}</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <FaSnowflake className="text-[#FBBF24]" />

                    <span>{car.type}</span>

                  </div>

                </div>

                

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}