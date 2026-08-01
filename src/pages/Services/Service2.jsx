import {
  FaPlaneDeparture,
  FaRoute,
  FaCity,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

import airportImg from "../../assets/airport.jpg";
import outstationImg from "../../assets/outstation.png";
import localImg from "../../assets/Dzire.png";
import corporateImg from "../../assets/corporate.png";

const services = [
  {
    title: "Airport Transfer",
    image: airportImg,
    icon: <FaPlaneDeparture />,
    description:
      "Reliable airport pickup and drop-off services with on-time arrivals and professional drivers.",
  },
  {
    title: "Outstation Taxi",
    image: outstationImg,
    icon: <FaRoute />,
    description:
      "Travel comfortably to nearby cities with affordable one-way and round-trip taxi packages.",
  },
  {
    title: "Local City Ride",
    image: localImg,
    icon: <FaCity />,
    description:
      "Book taxis for shopping, office travel, hospital visits or hourly rental packages.",
  },
  {
    title: "Corporate Travel",
    image: corporateImg,
    icon: <FaBriefcase />,
    description:
      "Executive transportation solutions for companies, meetings and business events.",
  },
];

export default function Service2() {
  return (
    <section className="bg-[#f8f9fb] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-[#FBBF24] uppercase tracking-[4px] font-semibold">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Premium Taxi Services
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Whether it's a quick local ride or a long-distance journey,
            WayTaxi24 provides safe, affordable and reliable transportation
            with professional drivers.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {services.map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl h-[450px]"
            >

              {/* Image */}

              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Content */}

              <div className="absolute bottom-0 p-8 w-full">

                <div className="w-16 h-16 rounded-2xl bg-[#FBBF24] text-black flex items-center justify-center text-3xl mb-6">

                  {item.icon}

                </div>

                <h3 className="text-3xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="mt-4 text-gray-200 leading-7">

                  {item.description}

                </p>

                <button
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-[#FBBF24]
                    px-6
                    py-3
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                  "
                >

                  Book Now

                  <FaArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}