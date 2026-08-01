import {
  FaUserShield,
  FaClock,
  FaHeadset,
  FaRupeeSign,
} from "react-icons/fa";

import aboutImg from "../../assets/a1.png";

const features = [
  {
    icon: <FaUserShield />,
    title: "Verified Drivers",
    text: "Experienced and background-verified drivers for safe journeys.",
  },
  {
    icon: <FaClock />,
    title: "On Time Pickup",
    text: "Always punctual with real-time booking confirmation.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    text: "Dedicated customer support whenever you need assistance.",
  },
  {
    icon: <FaRupeeSign />,
    title: "Affordable Fare",
    text: "Transparent pricing with no hidden charges.",
  },
];

export default function About3() {
  return (
    <section className="py-20 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

  {/* LEFT CONTENT */}

  <div>

    <span className="uppercase tracking-[4px] text-[#FBBF24] font-semibold">
      Why Choose Us
    </span>

    <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
      Trusted Taxi Partner For Every Journey
    </h2>

    <p className="mt-6 text-gray-600 leading-8 text-lg">
      WayTaxi24 provides premium taxi services with professional
      drivers, comfortable vehicles, transparent pricing and
      reliable customer support across Tamil Nadu.
    </p>

    <div className="mt-10 space-y-6">

      {features.map((item, index) => (

        <div
          key={index}
          className="flex gap-5 items-start rounded-2xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-[#FBBF24] text-3xl text-black">
            {item.icon}
          </div>

          <div>

            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="mt-2 leading-7 text-gray-600">
              {item.text}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

  {/* RIGHT IMAGE */}

  <div className="relative">

    <img
      src={aboutImg}
      alt="Taxi Service"
      className="h-[600px] w-full rounded-3xl object-cover shadow-2xl"
    />

    <div className="absolute bottom-8 left-8 rounded-2xl bg-[#FBBF24] px-8 py-6 shadow-xl">

      <h2 className="text-5xl font-bold text-black">
        10+
      </h2>

      <p className="font-medium text-black">
        Years Experience
      </p>

    </div>

  </div>

</div>

      </div>
    </section>
  );
}