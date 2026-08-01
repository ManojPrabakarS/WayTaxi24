import {
  FaMobileAlt,
  FaTaxi,
  FaMapMarkedAlt,
  FaSmile,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaMobileAlt />,
    number: "01",
    title: "Book Your Ride",
    description:
      "Book your taxi online or by phone within a few seconds.",
  },
  {
    icon: <FaTaxi />,
    number: "02",
    title: "Driver Assigned",
    description:
      "Our nearest professional driver is assigned instantly.",
  },
  {
    icon: <FaMapMarkedAlt />,
    number: "03",
    title: "Enjoy Your Journey",
    description:
      "Track your ride and travel safely with our experienced drivers.",
  },
  {
    icon: <FaSmile />,
    number: "04",
    title: "Reach Destination",
    description:
      "Arrive comfortably and pay using your preferred payment method.",
  },
];

export default function Service4() {
  return (
    <section className="bg-white py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#FBBF24] font-semibold">
            Booking Process
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#071016]">
            How WayTaxi24 Works
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Booking a taxi with WayTaxi24 is quick, easy and hassle-free.
            Follow these simple steps and enjoy a comfortable journey.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Desktop Line */}

          <div className="hidden lg:block absolute top-16 left-0 w-full h-1 bg-gray-200">
            <div className="h-full w-full bg-[#FBBF24]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">

            {steps.map((step, index) => (

              <div
                key={index}
                className="group text-center"
              >

                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#071016] text-[#FBBF24] text-5xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FBBF24] group-hover:text-black">

                  {step.icon}

                </div>

                <div className="mt-6">

                  <span className="inline-flex rounded-full bg-[#FBBF24] px-4 py-1 text-sm font-bold text-black">

                    {step.number}

                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-[#071016]">

                    {step.title}

                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">

                    {step.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}