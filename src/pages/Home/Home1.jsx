import { useState } from "react";
import heroBg from "../../assets/h1.png";

import {
  FaCar,
  FaShieldAlt,
  FaUserCheck,
  FaHeadset,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaPlane,
  FaExchangeAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function Home1() {
  const [tripType, setTripType] = useState("oneway");

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        pt-[90px]
      "
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* ================= OVERLAY ================= */}

      <div
        className="
          absolute
          inset-0
          bg-black/50

          lg:bg-gradient-to-r
          lg:from-black/95
          lg:via-black/70
          lg:to-black/25
        "
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]

          px-4
          pb-6
          pt-7

          sm:px-5
          sm:pt-8

          md:px-6

          lg:px-8
          lg:pb-7
          lg:pt-9
        "
      >
        {/* =================================================
            HERO CONTENT
        ================================================= */}

        {/* ================= HERO CONTENT ================= */}

<div
  className="
    w-full
    max-w-[650px]
    pt-2

    sm:pt-3
    md:pt-4
    lg:pt-5
  "
>
  {/* BADGE */}

  <div
    className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-yellow-400
      bg-black/30
      px-3
      py-1.5
    "
  >
    <FaCar className="text-[10px] text-yellow-400" />

    <span
      className="
        text-[9px]
        font-bold
        uppercase
        tracking-[0.7px]
        text-yellow-400

        sm:text-[10px]
      "
    >
      All India Taxi Service
    </span>
  </div>

  {/* HEADING */}

  <h1
    className="
      m-0
      mt-4
      font-['Poppins']
      text-[35px]
      font-extrabold
      leading-[1.08]
      tracking-[-1.3px]
      !text-white

      sm:text-[42px]
      sm:tracking-[-1.5px]

      md:text-[48px]

      lg:text-[52px]
      lg:leading-[1.05]

      xl:text-[56px]
    "
  >
    Comfortable Rides,
    <br />

    Every Time,
    <br />

    <span className="!text-[#FBBF24]">
      Every Mile.
    </span>
  </h1>

  {/* DESCRIPTION */}

  <p
    className="
      m-0
      mt-4
      max-w-[570px]
      font-['Poppins']
      text-[11px]
      font-normal
      leading-[18px]
      !text-gray-200

      sm:text-[12px]
      sm:leading-[20px]

      md:text-[13px]
      md:leading-[21px]

      lg:text-[14px]
      lg:leading-[22px]
    "
  >
    Safe, reliable and affordable taxi service across India.
    Travel
    <br className="hidden sm:block" />
    comfortably with professional drivers and well-maintained vehicles.
  </p>

  {/* ================= HERO FEATURES ================= */}

  <div
    className="
      mt-4
      grid
      w-full
      max-w-[650px]
      grid-cols-2
      gap-x-4
      gap-y-4

      sm:grid-cols-4
      sm:gap-x-5

      md:gap-x-6

      lg:mt-6
    "
  >
    <HeroFeature
      icon={<FaShieldAlt />}
      title="Best Price"
      text="Guaranteed"
    />

    <HeroFeature
      icon={<FaUserCheck />}
      title="Verified"
      text="Drivers"
    />

    <HeroFeature
      icon={<FaCar />}
      title="Clean & Safe"
      text="Vehicles"
    />

    <HeroFeature
      icon={<FaHeadset />}
      title="24/7"
      text="Support"
    />
  </div>
</div>

        {/* =================================================
            BOOKING BOX
        ================================================= */}

        <div
          id="booking"
          className="
            mt-6
            w-full
            overflow-hidden
            rounded-xl
            bg-white
            shadow-[0_15px_45px_rgba(0,0,0,0.30)]

            sm:mt-7

            lg:mt-8
          "
        >
          {/* ================= TRIP TYPES ================= */}

          <div
            className="
              border-b
              border-gray-100
              px-3
              pt-3

              sm:px-4
              sm:pt-3
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-2

                min-[430px]:grid-cols-3

                sm:flex
              "
            >
              <TripButton
                active={tripType === "oneway"}
                onClick={() => setTripType("oneway")}
                icon={<FaCar />}
              >
                One Way
              </TripButton>

              <TripButton
                active={tripType === "round"}
                onClick={() => setTripType("round")}
                icon={<FaExchangeAlt />}
              >
                Round Trip
              </TripButton>

              <TripButton
                active={tripType === "airport"}
                onClick={() => setTripType("airport")}
                icon={<FaPlane />}
              >
                Airport Transfer
              </TripButton>
            </div>
          </div>

          {/* ================= BOOKING FORM ================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-3
              p-3

              sm:p-4

              md:grid-cols-2

              lg:grid-cols-12
              lg:gap-3
            "
          >
            {/* FROM */}

            <div className="w-full lg:col-span-3">
              <FieldLabel>From</FieldLabel>

              <div className="booking-field">
                <FaMapMarkerAlt className="mr-2 shrink-0 text-[13px] text-yellow-500" />

                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="
                    min-w-0
                    flex-1
                    border-0
                    bg-transparent
                    text-[10px]
                    text-gray-800
                    outline-none
                    placeholder:text-gray-400
                  "
                />
              </div>
            </div>

            {/* TO */}

            <div className="w-full lg:col-span-3">
              <FieldLabel>To</FieldLabel>

              <div className="booking-field">
                <FaMapMarkerAlt className="mr-2 shrink-0 text-[13px] text-yellow-500" />

                <input
                  type="text"
                  placeholder="Enter drop location"
                  className="
                    min-w-0
                    flex-1
                    border-0
                    bg-transparent
                    text-[11px]
                    text-gray-800
                    outline-none
                    placeholder:text-gray-400
                  "
                />

                <FaExchangeAlt className="ml-2 shrink-0 text-[11px] text-gray-400" />
              </div>
            </div>

            {/* DATE */}

            <div className="w-full lg:col-span-2">
              <FieldLabel>Pickup Date</FieldLabel>

              <div className="booking-field">
                <FaCalendarAlt className="mr-2 shrink-0 text-[12px] text-yellow-500" />

                <input
                  type="date"
                  className="
                    min-w-0
                    flex-1
                    border-0
                    bg-transparent
                    text-[10px]
                    text-gray-700
                    outline-none
                  "
                />
              </div>
            </div>

            {/* TIME */}

            <div className="w-full lg:col-span-2">
              <FieldLabel>Pickup Time</FieldLabel>

              <div className="booking-field">
                <FaClock className="mr-2 shrink-0 text-[12px] text-yellow-500" />

                <input
                  type="time"
                  className="
                    min-w-0
                    flex-1
                    border-0
                    bg-transparent
                    text-[10px]
                    text-gray-700
                    outline-none
                  "
                />
              </div>
            </div>

            {/* CHECK FARE */}

            <div
              className="
                flex
                w-full
                items-end

                md:col-span-2

                lg:col-span-2
              "
            >
              <button
                type="button"
                className="
                  flex
                  h-[46px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border-0
                  bg-yellow-400
                  text-[12px]
                  font-bold
                  !text-black
                  shadow-[0_6px_18px_rgba(250,204,21,.25)]
                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:bg-yellow-500
                "
              >
                Check Fare

                <FaCar className="text-[12px]" />
              </button>
            </div>
          </div>

          {/* ================= BOTTOM INFO ================= */}

          <div
            className="
              flex
              flex-col
              gap-2
              border-t
              border-gray-100
              bg-gray-50
              px-3
              py-2

              sm:flex-row
              sm:flex-wrap
              sm:items-center
              sm:gap-x-6
              sm:px-4
            "
          >
            <SmallCheck text="No hidden charges" />

            <SmallCheck text="Verified drivers" />

            <SmallCheck text="24/7 booking support" />
          </div>
        </div>

        {/* =================================================
            TRUST CARDS
        ================================================= */}

        {/* ================= TRUST CARDS ================= */}

<div
  className="
    mt-4
    grid
    w-full
    grid-cols-1
    overflow-hidden
    rounded-xl
    border
    border-white/20
    bg-[#071016]/95
    shadow-lg
    backdrop-blur-md

    sm:grid-cols-2
    lg:grid-cols-4
  "
>
  <TrustCard
    icon={<FaCar />}
    title="Well Maintained Cabs"
    text="Clean and comfortable vehicles for a smooth journey."
  />

  <TrustCard
    icon={<FaUserCheck />}
    title="Verified Drivers"
    text="Professional and experienced drivers for your safety."
  />

  <TrustCard
    icon={<FaMapMarkerAlt />}
    title="On Time Pickup"
    text="Punctual pickup and timely drop for every booking."
  />

  <TrustCard
    icon={<FaHeadset />}
    title="24/7 Customer Support"
    text="Our support team is available whenever you need us."
  />
</div>
      </div>
    </section>
  );
}

/* =========================================================
   TRIP BUTTON
========================================================= */

function TripButton({ active, onClick, icon, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        h-[40px]
        w-full
        items-center
        justify-center
        gap-2
        rounded-t-lg
        border-0
        px-4
        text-[11px]
        font-bold
        transition-all
        duration-300

        sm:w-auto
        sm:min-w-[140px]

        ${
          active
            ? "bg-yellow-400 !text-black"
            : "bg-gray-100 !text-gray-700 hover:bg-yellow-50 hover:!text-yellow-600"
        }
      `}
    >
      {icon}

      <span className="whitespace-nowrap">
        {children}
      </span>
    </button>
  );
}

/* =========================================================
   FIELD LABEL
========================================================= */

function FieldLabel({ children }) {
  return (
    <label
      className="
        mb-1.5
        block
        text-[10px]
        font-semibold
        !text-gray-600
      "
    >
      {children}
    </label>
  );
}

/* =========================================================
   HERO FEATURE
========================================================= */

function HeroFeature({ icon, title, text }) {
  return (
    <div className="group flex min-w-0 items-center gap-2">
      <div
        className="
          flex
          h-[36px]
          w-[36px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-yellow-400
          bg-yellow-400/10
          text-[12px]
          !text-yellow-400
          transition-all
          duration-300

          sm:h-[38px]
          sm:w-[38px]

          group-hover:bg-yellow-400
          group-hover:!text-black
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            m-0
            whitespace-nowrap
            text-[9px]
            font-bold
            !text-white

            sm:text-[10px]
          "
        >
          {title}
        </p>

        <p className="m-0 mt-[1px] text-[8px] !text-gray-300 sm:text-[9px]">
          {text}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   TRUST CARD
========================================================= */

function TrustCard({ icon, title, text }) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        border-b
        border-white/10
        p-3
        transition-all
        duration-300

        sm:min-h-[95px]
        sm:p-4
        sm:odd:border-r

        lg:min-h-[100px]
        lg:border-b-0
        lg:border-r
        lg:odd:border-r
        lg:last:border-r-0

        hover:bg-white/[0.05]
      "
    >
      <div
        className="
          flex
          h-[40px]
          w-[40px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-yellow-400
          bg-yellow-400/10
          text-[14px]
          !text-yellow-400
          transition-all
          duration-300

          group-hover:bg-yellow-400
          group-hover:!text-black
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <h3
          className="
            m-0
            text-[11px]
            font-bold
            !text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            m-0
            mt-1
            text-[9px]
            leading-[15px]
            !text-gray-300
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   SMALL CHECK
========================================================= */

function SmallCheck({ text }) {
  return (
    <div
      className="
        flex
        items-center
        gap-1.5
        text-[9px]
        font-medium
        !text-gray-500
      "
    >
      <FaCheckCircle className="shrink-0 text-[10px] !text-yellow-500" />

      <span>{text}</span>
    </div>
  );
}