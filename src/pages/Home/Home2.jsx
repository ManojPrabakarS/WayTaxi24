import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaCar,
  FaArrowRight,
  FaCheckCircle,
  FaLuggageCart,
} from "react-icons/fa";

import sedan from "../../assets/Dzire.png";
// import creta from "../../assets/5seater.png";
import innova from "../../assets/7seater.png";
import carens from '../../assets/Carens.png'
import { FaBagShopping } from "react-icons/fa6";
export default function Home2() {
  const [selectedCab, setSelectedCab] = useState("SUV");

  const cars = [
    {
      image: sedan,
      name: "Swift Dzire / Etios",
      seats: "4 Seats",
      luggage: "2 Bags",
      price: "₹15/km",
      description: "Perfect for city rides & small families",
    },
    {
      image: carens,
      name: "Kia Carens / Ertiga",
      seats: "6 Seats",
      luggage: "3 Bags",
      price: "₹20/km",
      description: "Ideal for groups & long journeys",
      popular: true,
    },
    {
      image: innova,
      name: "Innova / Innova Crysta",
      seats: "7 Seats",
      luggage: "4 Bags",
      price: "₹22/km",
      description: "Comfortable choice for family trips",
    },

  ];

  return (
    <section
      className="
        w-full
        bg-[#f8f9fa]
        py-8
        sm:py-10
        md:py-12
        lg:py-14
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-360
          px-4
          sm:px-5
          md:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mx-auto max-w-162.5 text-center">
          <span
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#ffbd00]/15
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[1.3px]
              text-[#d99c00]!

              sm:px-4
              sm:py-2
              sm:text-[10px]
            "
          >
            Quick & Easy Booking
          </span>

          <h2
            className="
              m-0
              mt-3
              font-['Poppins']
              text-[24px]
              font-bold
              leading-tight
              text-[#111]!

              sm:text-[28px]
              md:text-[30px]
              lg:text-[32px]
            "
          >
            Plan Your Perfect Ride
          </h2>

          <p
            className="
              mx-auto
              mb-0
              mt-2
              max-w-130
              px-2
              font-['Poppins']
              text-[10px]
              leading-4.25
              text-gray-500!

              sm:px-0
              sm:text-[11px]
              sm:leading-4.75

              md:text-[14px]
            "
          >
            Enter your travel details, choose the right cab and enjoy a
            comfortable journey with WayTaxi24.
          </p>
        </div>

        {/* =====================================================
            CHOOSE CAB
        ===================================================== */}

        <div className="mt-3 sm:mt-6 lg:mt-8">
          {/* CAB HEADING */}

          <div
            className="
              flex
              flex-col
              gap-2

              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <span
                className="
                  text-[14px]
                  font-bold
                  uppercase
                  tracking-[1.3px]
                  text-[#d99c00]!

                  sm:text-[14px]
                "
              >
                Our Fleet
              </span>

              <h2
                className="
                  m-0
                  mt-1
                  font-['Poppins']
                  text-[21px]
                  font-bold
                  leading-[1.3]
                  text-[#111]!

                  sm:text-[23px]
                  md:text-[25px]
                  lg:text-[27px]
                "
              >
                Choose Your Cab
              </h2>

              <p
                className="
                  m-0
                  mt-1
                  text-[9px]
                  leading-4
                  text-gray-500!

                  sm:text-[12px]
                "
              >
                Select the vehicle that best suits your journey.
              </p>
            </div>

            <div
              className="
                hidden
                items-center
                gap-2
                text-[9px]
                font-medium
                text-gray-500!

                sm:flex
                sm:text-[10px]
              "
            >
              <FaCheckCircle className="text-[#ffbd00]!" />

              Clean & verified vehicles
            </div>
          </div>

          {/* =====================================================
              CAB CARDS
          ===================================================== */}

          <div
            className="
              mt-5
              grid
              grid-cols-1
              items-stretch
              gap-5

              sm:grid-cols-2

              lg:grid-cols-3
              lg:gap-5

              xl:gap-6
            "
          >
            {cars.map((car) => (
              <CabCard
                key={car.name}
                car={car}
                selected={selectedCab === car.name}
                onSelect={() => setSelectedCab(car.name)}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            SELECTED CAB BAR
        ===================================================== */}

        <div
          className="
            mt-6
            flex
            flex-col
            items-center
            gap-4
            rounded-xl
            bg-[#071016]
            px-4
            py-5
            text-center
            shadow-[0_8px_25px_rgba(0,0,0,.10)]

            sm:mt-7
            sm:rounded-2xl
            sm:px-6

            md:flex-row
            md:justify-between
            md:text-left

            lg:px-8
            lg:py-6
          "
        >
          <div>
            <p
              className="
                m-0
                text-[8px]
                font-bold
                uppercase
                tracking-[1.4px]
                text-[#ffbd00]!

                sm:text-[9px]
              "
            >
              Your Selected Cab
            </p>

            <h3
              className="
                m-0
                mt-1
                font-['Poppins']
                text-[17px]
                font-bold
                text-white!

                sm:text-[19px]
                lg:text-[20px]
              "
            >
              {selectedCab}
            </h3>

            <p
              className="
                m-0
                mt-1
                text-[9px]
                leading-4
                text-gray-400!

                sm:text-[12px]
              "
            >
              Complete your booking and we'll confirm your ride.
            </p>
          </div>

          <a
            href="#booking"
            className="
              group
              flex
              h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-[#ffbd00]
              px-5
              no-underline
              text-[10px]
              font-bold
              text-black!
              transition-all
              duration-300

              sm:w-auto
              sm:min-w-47.5
              sm:text-[12px]

              hover:-translate-y-0.5
              hover:bg-[#ffc928]
              hover:text-black!
            "
          >
            Continue Booking

            <FaArrowRight
              className="
                text-[12px]
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CAB CARD
========================================================= */

function CabCard({ car, selected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`
        group
        relative
        flex
        h-full
        min-h-81.25
        w-full
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-xl
        border
        bg-white
        transition-all
        duration-300

        sm:min-h-86.25
        sm:rounded-2xl

        lg:min-h-88.75

        ${selected
          ? "border-[#ffbd00] shadow-[0_10px_35px_rgba(255,189,0,.16)]"
          : "border-gray-200 shadow-[0_5px_20px_rgba(0,0,0,.05)] hover:border-[#ffbd00]"
        }

        hover:-translate-y-1
      `}
    >
      {/* MOST POPULAR */}

      {car.popular && (
        <div
          className="
            absolute
            right-3
            top-3
            z-20
            rounded-full
            bg-[#ffbd00]
            px-2.5
            py-1
            text-[7px]
            font-bold
            uppercase
            tracking-[.4px]
            text-black!

            sm:right-4
            sm:top-4
            sm:px-3
            sm:text-[8px]
          "
        >
          Most Popular
        </div>
      )}

      {/* SELECTED CHECK */}

      <div
        className={`
          absolute
          left-3
          top-3
          z-20
          flex
          h-5.5
          w-5.5
          items-center
          justify-center
          rounded-full
          border-2
          transition-all
          duration-300

          sm:left-4
          sm:top-4
          sm:h-6
          sm:w-6

          ${selected
            ? "border-[#ffbd00] bg-[#ffbd00] text-black!"
            : "border-gray-300 bg-white text-transparent!"
          }
        `}
      >
        <FaCheckCircle className="text-[10px] sm:text-[15px]" />
      </div>

      {/* =====================================================
          CAR IMAGE
      ===================================================== */}

      <div
        className="
          flex
          h-41.25
          w-full
          shrink-0
          items-center
          justify-center
          bg-linear-to-b
          from-[#fafafa]
          to-white
          px-5
          pb-2
          pt-7

          sm:h-45
          sm:px-6

          lg:h-47.5

          xl:h-48.75
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

            group-hover:scale-[1.04]
          "
        />
      </div>

      {/* =====================================================
          CAB INFORMATION
      ===================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          border-t
          border-gray-100
          p-4

          sm:p-5
        "
      >
        {/* CAB NAME + PRICE */}

        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h3
              className="
                m-0
                font-['Poppins']
                text-[15px]
                font-bold
                text-[#111]!

                sm:text-[16px]
                lg:text-[17px]
              "
            >
              {car.name}
            </h3>

            <p
              className="
                m-0
                mt-1
                max-w-57.5
                text-[12px]
                leading-3.75
                text-gray-500!

                sm:text-[13px]
                sm:leading-4
              "
            >
              {car.description}
            </p>
          </div>

          {/* PRICE */}

          <div className="shrink-0 text-right">
            <p
              className="
                m-0
                text-[7px]
                font-medium
                uppercase
                tracking-[.3px]
                text-gray-400!

                sm:text-[8px]
              "
            >
              Starts at
            </p>

            <p
              className="
                m-0
                mt-1
                whitespace-nowrap
                text-[13px]
                font-bold
                text-[#111]!

                sm:text-[14px]
                lg:text-[15px]
              "
            >
              {car.price}
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DETAILS
        ===================================================== */}

        <div
          className="
            mt-auto
            border-t
            border-gray-100
            pt-3
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3

              min-[380px]:flex-row
              min-[380px]:items-center
              min-[380px]:justify-between
            "
          >
            {/* FEATURES */}

            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  items-center
                  gap-1.5
                  whitespace-nowrap
                  text-[9px]
                  font-medium
                  text-gray-600!

                  sm:text-[11px]
                "
              >
                <FaUsers className="shrink-0 text-[#ffbd00]!" size={18} />

                {car.seats}
              </div>

              <span className="h-3 w-px shrink-0 bg-gray-200" />

              <div
                className="
                  flex
                  items-center
                  gap-1.5
                  whitespace-nowrap
                  text-[10px]
                  font-medium
                  text-gray-600!

                  sm:text-[11px]
                "
              >
                <FaLuggageCart className="shrink-0 text-[#ffbd00]!" size={18} />

                {car.luggage}
              </div>
            </div>

            {/* SELECT BUTTON */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onSelect();
              }}
              className={`
                flex
                h-9
                w-full
                items-center
                justify-center
                rounded-lg
                border
                px-4
                text-[9px]
                font-bold
                transition-all
                duration-300

                min-[380px]:w-auto
                min-[380px]:min-w-23

                sm:text-[12px]

                ${selected
                  ? "border-[#ffbd00] bg-[#ffbd00] text-black!"
                  : "border-gray-200 bg-white text-[#333]! hover:border-[#ffbd00] hover:text-[#d99c00]!"
                }
              `}
            >
              {selected ? "Selected" : "Select Cab"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}