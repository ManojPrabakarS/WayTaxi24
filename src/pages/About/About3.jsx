import {
  FaCarSide,
  FaUserShield,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCarSide />,
    title: "Well Maintained Cabs",
    description:
      "Our fleet is regularly serviced, cleaned, and sanitized to ensure every ride is comfortable and safe.",
  },
  {
    icon: <FaUserShield />,
    title: "Verified Drivers",
    description:
      "All our drivers are experienced, background-verified, and committed to providing a professional travel experience.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Pickup",
    description:
      "We value your time with prompt pickups and reliable drop-offs for every booking.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available round the clock to assist you whenever you need help.",
  },
];

export default function About3() {
  return (
    <section className="bg-[#0B1117] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-yellow-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#FBBF24]">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-white md:text-5xl">
            Experience the
            <span className="text-[#FBBF24]"> WayTaxi24 Difference</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            We are committed to providing a premium travel experience with
            trusted drivers, clean vehicles, affordable pricing, and exceptional
            customer support.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#FBBF24] hover:bg-[#111827]"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400/10 text-4xl text-[#FBBF24] transition-all duration-300 group-hover:bg-[#FBBF24] group-hover:text-black">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-300">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}