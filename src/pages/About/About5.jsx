import {
  FaPlaneDeparture,
  FaMapMarkedAlt,
  FaCity,
  FaBusinessTime,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPlaneDeparture />,
    title: "Airport Transfers",
    description:
      "Enjoy hassle-free airport pickups and drop-offs with timely service and professional drivers.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Outstation Trips",
    description:
      "Travel comfortably to nearby cities with affordable fares and well-maintained vehicles.",
  },
  {
    icon: <FaCity />,
    title: "Local City Rides",
    description:
      "Book instant rides for shopping, office commutes, medical visits, and daily travel needs.",
  },
  {
    icon: <FaBusinessTime />,
    title: "Corporate Travel",
    description:
      "Reliable transportation solutions for businesses, meetings, and executive travel.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Hourly Rental",
    description:
      "Hire a cab for a few hours or the entire day with flexible packages and transparent pricing.",
  },
  {
    icon: <FaUsers />,
    title: "Family & Group Travel",
    description:
      "Spacious vehicles for family vacations, group outings, and special occasions.",
  },
];

export default function About5() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#FBBF24]">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Premium Taxi Services
            <span className="text-[#FBBF24]"> For Every Journey</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're commuting within the city or planning a long-distance
            trip, WayTaxi24 offers reliable transportation solutions designed
            for comfort, safety, and convenience.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-[#FBBF24] hover:shadow-2xl"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 text-4xl text-[#FBBF24] transition-all duration-300 group-hover:bg-[#FBBF24] group-hover:text-black">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}