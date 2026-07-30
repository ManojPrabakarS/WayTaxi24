import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaCar,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import sedan from "../../assets/4seater.png";
import creta from "../../assets/5seater.png";
import innova from "../../assets/7seater.png";

export default function Home2() {
  const [selectedCab, setSelectedCab] = useState("SUV");

  const cars = [
    {
      image: sedan,
      name: "Sedan",
      seats: "4 Seats",
      luggage: "2 Bags",
      price: "₹12/km",
      description: "Perfect for city rides & small families",
    },
    {
      image: creta,
      name: "SUV",
      seats: "5 Seats",
      luggage: "3 Bags",
      price: "₹16/km",
      description: "Comfortable choice for family trips",
      popular: true,
    },
    {
      image: innova,
      name: "Innova",
      seats: "7 Seats",
      luggage: "4 Bags",
      price: "₹20/km",
      description: "Ideal for groups & long journeys",
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
          max-w-[1440px]
          px-4
          sm:px-5
          md:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mx-auto max-w-[650px] text-center">
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
              !text-[#d99c00]

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
              leading-[1.25]
              !text-[#111]

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
              max-w-[520px]
              px-2
              font-['Poppins']
              text-[10px]
              leading-[17px]
              !text-gray-500

              sm:px-0
              sm:text-[11px]
              sm:leading-[19px]

              md:text-[12px]
            "
          >
            Enter your travel details, choose the right cab and enjoy a
            comfortable journey with WayTaxi24.
          </p>
        </div>

        {/* =====================================================
            BOOKING FORM
        ===================================================== */}

        <div
          id="booking"
          className="
            mt-6
            overflow-hidden
            rounded-xl
            border
            border-gray-200
            bg-white
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]

            sm:mt-7
            sm:rounded-2xl

            lg:mt-8
          "
        >
          {/* FORM HEADER */}

          <div
            className="
              flex
              flex-col
              gap-3
              border-b
              border-gray-100
              px-4
              py-4

              sm:px-5

              md:flex-row
              md:items-center
              md:justify-between
              md:gap-5

              lg:px-6
            "
          >
            <div>
              <h3
                className="
                  m-0
                  font-['Poppins']
                  text-[14px]
                  font-bold
                  !text-[#111]

                  sm:text-[15px]
                  lg:text-[16px]
                "
              >
                Tell Us About Your Trip
              </h3>

              <p
                className="
                  m-0
                  mt-1
                  text-[11px]
                  leading-[15px]
                  !text-gray-500

                  sm:text-[11px]
                "
              >
                Fill in your travel details to find the right cab.
              </p>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-[9px]
                font-medium
                !text-gray-500

                sm:text-[10px]
              "
            >
              <FaCheckCircle className="shrink-0 !text-[#ffbd00]" />

              <span>Quick booking in less than a minute</span>
            </div>
          </div>

          {/* =====================================================
              FORM FIELDS
          ===================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              p-3

              sm:grid-cols-2
              sm:p-5

              lg:gap-4
              lg:p-6

              xl:grid-cols-12
              xl:items-end
              xl:gap-3
            "
          >
            {/* PICKUP */}

            <div className="xl:col-span-3">
              <FormLabel>Pickup Location</FormLabel>

              <div className="home2-field">
                <FaMapMarkerAlt className="shrink-0 text-[13px] !text-[#ffbd00]" />

                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="home2-input"
                />
              </div>
            </div>

            {/* DROP */}

            <div className="xl:col-span-3">
              <FormLabel>Drop Location</FormLabel>

              <div className="home2-field">
                <FaMapMarkerAlt className="shrink-0 text-[13px] !text-[#ffbd00]" />

                <input
                  type="text"
                  placeholder="Enter drop location"
                  className="home2-input"
                />
              </div>
            </div>

            {/* DATE */}

            <div className="xl:col-span-2">
              <FormLabel>Journey Date</FormLabel>

              <div className="home2-field">
                <FaCalendarAlt className="shrink-0 text-[12px] !text-[#ffbd00]" />

                <input type="date" className="home2-input" />
              </div>
            </div>

            {/* TIME */}

            <div className="xl:col-span-2">
              <FormLabel>Pickup Time</FormLabel>

              <div className="home2-field">
                <FaClock className="shrink-0 text-[12px] !text-[#ffbd00]" />

                <input type="time" className="home2-input" />
              </div>
            </div>

            {/* PASSENGERS */}

            <div
              className="
                sm:col-span-2
                lg:col-span-1
                xl:col-span-2
              "
            >
              <FormLabel>Passengers</FormLabel>

              <div className="home2-field">
                <FaUsers className="shrink-0 text-[13px] !text-[#ffbd00]" />

                <select
                  defaultValue=""
                  className="home2-input cursor-pointer"
                >
                  <option value="" disabled>
                    Select seats
                  </option>

                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5">5 Passengers</option>
                  <option value="6">6 Passengers</option>
                  <option value="7">7 Passengers</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CHOOSE CAB
        ===================================================== */}

        <div className="mt-3 sm:mt-10 lg:mt-12">
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
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[1.3px]
                  !text-[#d99c00]

                  sm:text-[10px]
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
                  !text-[#111]

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
                  leading-[16px]
                  !text-gray-500

                  sm:text-[10px]
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
                !text-gray-500

                sm:flex
                sm:text-[10px]
              "
            >
              <FaCheckCircle className="!text-[#ffbd00]" />

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
                !text-[#ffbd00]

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
                !text-white

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
                leading-[16px]
                !text-gray-400

                sm:text-[10px]
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
              h-[44px]
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
              !text-black
              transition-all
              duration-300

              sm:w-auto
              sm:min-w-[190px]
              sm:text-[11px]

              hover:-translate-y-[2px]
              hover:bg-[#ffc928]
              hover:!text-black
            "
          >
            Continue Booking

            <FaArrowRight
              className="
                text-[9px]
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
   FORM LABEL
========================================================= */

function FormLabel({ children }) {
  return (
    <label
      className="
        mb-1.5
        block
        font-['Poppins']
        text-[9px]
        font-semibold
        !text-[#444]

        sm:text-[10px]
        lg:text-[11px]
      "
    >
      {children}
    </label>
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
        min-h-[325px]
        w-full
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-xl
        border
        bg-white
        transition-all
        duration-300

        sm:min-h-[345px]
        sm:rounded-2xl

        lg:min-h-[355px]

        ${
          selected
            ? "border-[#ffbd00] shadow-[0_10px_35px_rgba(255,189,0,.16)]"
            : "border-gray-200 shadow-[0_5px_20px_rgba(0,0,0,.05)] hover:border-[#ffbd00]"
        }

        hover:-translate-y-[4px]
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
            !text-black

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
          h-[22px]
          w-[22px]
          items-center
          justify-center
          rounded-full
          border-2
          transition-all
          duration-300

          sm:left-4
          sm:top-4
          sm:h-[24px]
          sm:w-[24px]

          ${
            selected
              ? "border-[#ffbd00] bg-[#ffbd00] !text-black"
              : "border-gray-300 bg-white !text-transparent"
          }
        `}
      >
        <FaCheckCircle className="text-[10px] sm:text-[11px]" />
      </div>

      {/* =====================================================
          CAR IMAGE
      ===================================================== */}

      <div
        className="
          flex
          h-[165px]
          w-full
          shrink-0
          items-center
          justify-center
          bg-gradient-to-b
          from-[#fafafa]
          to-white
          px-5
          pb-2
          pt-7

          sm:h-[180px]
          sm:px-6

          lg:h-[190px]

          xl:h-[195px]
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
                !text-[#111]

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
                max-w-[230px]
                text-[9px]
                leading-[15px]
                !text-gray-500

                sm:text-[10px]
                sm:leading-[16px]
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
                !text-gray-400

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
                !text-[#111]

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
                  !text-gray-600

                  sm:text-[10px]
                "
              >
                <FaUsers className="shrink-0 !text-[#ffbd00]" />

                {car.seats}
              </div>

              <span className="h-3 w-px shrink-0 bg-gray-200" />

              <div
                className="
                  flex
                  items-center
                  gap-1.5
                  whitespace-nowrap
                  text-[9px]
                  font-medium
                  !text-gray-600

                  sm:text-[10px]
                "
              >
                <FaCar className="shrink-0 !text-[#ffbd00]" />

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
                h-[36px]
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
                min-[380px]:min-w-[92px]

                sm:text-[10px]

                ${
                  selected
                    ? "border-[#ffbd00] bg-[#ffbd00] !text-black"
                    : "border-gray-200 bg-white !text-[#333] hover:border-[#ffbd00] hover:!text-[#d99c00]"
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