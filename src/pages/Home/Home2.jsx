import {
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaPlane,
  FaClock,
  FaArrowRight,
  FaUsers,
  FaPhoneAlt,
  FaWhatsapp,
  FaTaxi,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import sedan from "../../assets/4seater.png";
import creta from "../../assets/5seater.png";
import innova from "../../assets/7seater.png";

export default function Home2() {
  const services = [
    {
      icon: <FaMapMarkerAlt />,
      title: "One Way Taxi",
      text: "Affordable one way drops",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Round Trip",
      text: "Travel more and back",
    },
    {
      icon: <FaPlane />,
      title: "Airport Transfer",
      text: "On-time airport pick & drop",
    },
    {
      icon: <FaClock />,
      title: "Local Rental",
      text: "Hourly & daily rental packages",
    },
  ];

  const cars = [
    {
      image: sedan,
      name: "Sedan",
      seats: "4 Seats",
      price: "₹ 12/km",
    },
    {
      image: creta,
      name: "SUV",
      seats: "6 Seats",
      price: "₹ 16/km",
      popular: true,
    },
    {
      image: innova,
      name: "Innova",
      seats: "7 Seats",
      price: "₹ 20/km",
    },
  ];

  const routes = [
    { from: "Chennai", to: "Pondicherry", price: "₹ 1499" },
    { from: "Chennai", to: "Vellore", price: "₹ 1299" },
    { from: "Chennai", to: "Bangalore", price: "₹ 2799" },
    { from: "Chennai", to: "Madurai", price: "₹ 2599" },
    { from: "Chennai", to: "Trichy", price: "₹ 1799" },
  ];

  return (
    <section className="w-full bg-[#fafafa] py-6 sm:py-7 lg:py-8">
      <div className="mx-auto w-full max-w-[1450px] px-4 sm:px-5 lg:px-7">

        {/* =====================================================
            TOP SECTION
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-7

            lg:grid-cols-2

            xl:grid-cols-[1.18fr_1.18fr_.84fr]
            xl:gap-5
          "
        >

          {/* =====================================================
              SERVICES
          ===================================================== */}

          <div className="min-w-0">
            <SectionTitle>Our Services</SectionTitle>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  text={service.text}
                />
              ))}
            </div>
          </div>

          {/* =====================================================
              CARS
          ===================================================== */}

          <div className="min-w-0">
            <SectionTitle>Choose Your Cab</SectionTitle>

            <div className="relative mt-4">

              {/* LEFT ARROW */}

              <button
                type="button"
                aria-label="Previous cars"
                className="
                  absolute
                  -left-[16px]
                  top-1/2
                  z-20
                  hidden
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  p-0
                  text-[12px]
                  !text-[#111]
                  shadow-md
                  transition-all
                  hover:border-[#ffbd00]
                  hover:!text-[#ffbd00]
                  sm:flex
                "
              >
                <FaChevronLeft />
              </button>

              {/* CAR CARDS */}

              <div className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-3">
                {cars.map((car, index) => (
                  <CarCard key={index} car={car} />
                ))}
              </div>

              {/* RIGHT ARROW */}

              <button
                type="button"
                aria-label="Next cars"
                className="
                  absolute
                  -right-[16px]
                  top-1/2
                  z-20
                  hidden
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  p-0
                  text-[12px]
                  !text-[#111]
                  shadow-md
                  transition-all
                  hover:border-[#ffbd00]
                  hover:!text-[#ffbd00]
                  sm:flex
                "
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* =====================================================
              ROUTES
          ===================================================== */}

          <div className="min-w-0 lg:col-span-2 xl:col-span-1">

            <div className="flex items-center justify-between">
              <SectionTitle>Popular Routes</SectionTitle>

              <button
                type="button"
                className="
                  border-0
                  bg-transparent
                  p-0
                  text-[11px]
                  font-semibold
                  !text-[#333]
                  transition-colors
                  hover:!text-[#ffbd00]
                "
              >
                View All
              </button>
            </div>

            <div
              className="
                mt-4
                grid
                grid-cols-1
                gap-2

                sm:grid-cols-2

                xl:grid-cols-1
              "
            >
              {routes.map((route, index) => (
                <RouteCard key={index} route={route} />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOOK YOUR RIDE
        ===================================================== */}

        <div
          className="
            mt-5
            w-full
            rounded-[12px]
            bg-[#071016]
            px-5
            py-5

            sm:px-6

            lg:px-7
          "
        >
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-3

              sm:grid-cols-2

              lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]
              lg:gap-5
            "
          >

            {/* CTA TEXT */}

            <div
              className="
                pb-1
                text-center

                sm:col-span-2

                lg:col-span-1
                lg:pb-0
                lg:text-left
              "
            >
              <h2
                className="
                  m-0
                  text-[18px]
                  font-bold
                  leading-[1.3]
                  !text-white

                  sm:text-[19px]

                  lg:text-[20px]
                "
              >
                Book Your Ride Today!
              </h2>

              <p
                className="
                  mx-auto
                  mb-0
                  mt-2
                  max-w-[270px]
                  text-[11px]
                  leading-[17px]
                  !text-gray-300

                  lg:mx-0
                "
              >
                Quick booking, best prices and memorable journeys.
              </p>
            </div>

            {/* BOOK NOW */}

            <a
              href="#booking"
              className="
                group
                flex
                min-h-[70px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-[9px]
                bg-[#ffbd00]
                px-4
                no-underline
                !text-black
                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:bg-[#ffc928]
                hover:!text-black
              "
            >
              <FaTaxi
                className="
                  shrink-0
                  text-[21px]
                  !text-black
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <div className="text-left">
                <h3 className="m-0 text-[13px] font-bold !text-black">
                  Book Now
                </h3>

                <p className="m-0 mt-[3px] text-[10px] !text-black/75">
                  Reserve your cab
                </p>
              </div>
            </a>

            {/* CALL NOW */}

            <a
              href="tel:+919876543210"
              className="
                group
                flex
                min-h-[70px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-[9px]
                border
                border-[#ffbd00]
                bg-transparent
                px-4
                no-underline
                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:bg-[#ffbd00]/10
              "
            >
              <FaPhoneAlt
                className="
                  shrink-0
                  text-[20px]
                  !text-[#ffbd00]
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
              />

              <div className="text-left">
                <h3 className="m-0 text-[13px] font-bold !text-[#ffbd00]">
                  Call Now
                </h3>

                <p
                  className="
                    m-0
                    mt-[3px]
                    whitespace-nowrap
                    text-[10px]
                    !text-white
                  "
                >
                  +91 98765 43210
                </p>
              </div>
            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/919876543210?text=Hello%20WayTaxi24%2C%20I%20want%20to%20book%20a%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                min-h-[70px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-[9px]
                border
                border-[#ffbd00]
                bg-transparent
                px-4
                no-underline
                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:bg-[#ffbd00]/10
              "
            >
              <FaWhatsapp
                className="
                  shrink-0
                  text-[24px]
                  !text-[#ffbd00]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <div className="text-left">
                <h3
                  className="
                    m-0
                    whitespace-nowrap
                    text-[12px]
                    font-bold
                    !text-[#ffbd00]

                    sm:text-[13px]
                  "
                >
                  WhatsApp Booking
                </h3>

                <p className="m-0 mt-[3px] text-[10px] !text-gray-300">
                  Chat with us
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({ children }) {
  return (
    <h2
      className="
        m-0
        text-[18px]
        font-bold
        leading-[1.25]
        !text-[#111]

        sm:text-[19px]

        lg:text-[20px]
      "
    >
      {children}
    </h2>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ icon, title, text }) {
  return (
    <div
      className="
        group
        flex
        min-h-[170px]
        flex-col
        items-center
        justify-center
        rounded-[9px]
        border
        border-gray-200
        bg-white
        px-2
        py-4
        text-center
        shadow-[0_2px_8px_rgba(0,0,0,.04)]
        transition-all
        duration-300

        sm:min-h-[190px]

        hover:-translate-y-[3px]
        hover:border-[#ffbd00]
        hover:shadow-md
      "
    >
      {/* ICON */}

      <div
        className="
          flex
          h-[45px]
          items-center
          justify-center
          text-[27px]
          !text-[#111]
          transition-all
          duration-300

          sm:h-[50px]
          sm:text-[30px]

          group-hover:scale-110
          group-hover:!text-[#ffbd00]
        "
      >
        {icon}
      </div>

      {/* TITLE */}

      <h3
        className="
          m-0
          mt-3
          text-[10px]
          font-semibold
          leading-[15px]
          !text-[#111]

          sm:text-[11px]
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}

      <p
        className="
          m-0
          mt-2
          max-w-[110px]
          text-[9px]
          leading-[15px]
          !text-[#555]

          sm:text-[10px]
          sm:leading-[16px]
        "
      >
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   CAR CARD
========================================================= */

function CarCard({ car }) {
  return (
    <div
      className="
        group
        relative
        flex
        min-h-[190px]
        min-w-0
        flex-col
        items-center
        overflow-hidden
        rounded-[9px]
        border
        border-gray-200
        bg-white
        px-2
        pb-4
        pt-3
        text-center
        shadow-[0_2px_8px_rgba(0,0,0,.04)]
        transition-all
        duration-300

        hover:-translate-y-[3px]
        hover:border-[#ffbd00]
        hover:shadow-md
      "
    >

      {/* POPULAR */}

      {car.popular && (
        <span
          className="
            absolute
            left-1/2
            top-0
            z-20
            -translate-x-1/2
            rounded-b-md
            bg-[#ffbd00]
            px-3
            py-[3px]
            text-[8px]
            font-bold
            !text-black
          "
        >
          Popular
        </span>
      )}

      {/* IMAGE */}

      <div
        className="
          flex
          h-[90px]
          w-full
          items-end
          justify-center
          pt-3

          sm:h-[100px]
        "
      >
        <img
          src={car.image}
          alt={`${car.name} taxi`}
          className="
            h-full
            w-full
            object-contain
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* NAME */}

      <h3
        className="
          m-0
          mt-2
          text-[13px]
          font-bold
          !text-[#111]

          sm:text-[14px]
        "
      >
        {car.name}
      </h3>

      {/* SEATS */}

      <div
        className="
          mt-[5px]
          flex
          items-center
          justify-center
          gap-1
          text-[9px]
          !text-[#555]

          sm:text-[10px]
        "
      >
        <FaUsers className="text-[9px] !text-[#555]" />

        <span>{car.seats}</span>
      </div>

      {/* PRICE */}

      <p
        className="
          m-0
          mt-[5px]
          text-[11px]
          font-bold
          !text-[#111]

          sm:text-[12px]
        "
      >
        {car.price}
      </p>
    </div>
  );
}

/* =========================================================
   ROUTE CARD
========================================================= */

function RouteCard({ route }) {
  return (
    <div
      className="
        group
        flex
        min-h-[40px]
        w-full
        cursor-pointer
        items-center
        justify-between
        gap-2
        rounded-[7px]
        border
        border-gray-200
        bg-white
        px-3
        py-2
        shadow-[0_2px_7px_rgba(0,0,0,.04)]
        transition-all
        duration-300

        hover:border-[#ffbd00]
        hover:shadow-md
      "
    >

      {/* LOCATION */}

      <div className="flex min-w-0 items-center gap-1.5">
        <span
          className="
            truncate
            text-[9px]
            font-medium
            !text-[#222]

            sm:text-[10px]
          "
        >
          {route.from}
        </span>

        <FaArrowRight className="shrink-0 text-[7px] !text-[#555]" />

        <span
          className="
            truncate
            text-[9px]
            font-medium
            !text-[#222]

            sm:text-[10px]
          "
        >
          {route.to}
        </span>
      </div>

      {/* PRICE */}

      <div className="flex shrink-0 items-center gap-1.5">
        <span
          className="
            hidden
            text-[8px]
            !text-gray-400

            sm:inline
          "
        >
          From
        </span>

        <span
          className="
            whitespace-nowrap
            text-[9px]
            font-bold
            !text-[#111]

            sm:text-[10px]
          "
        >
          {route.price}
        </span>

        <FaChevronRight
          className="
            text-[7px]
            !text-gray-400
            transition-transform
            duration-300
            group-hover:translate-x-[2px]
          "
        />
      </div>
    </div>
  );
}