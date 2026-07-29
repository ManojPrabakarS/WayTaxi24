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
      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/35
          lg:bg-gradient-to-r
          lg:from-black/95
          lg:via-black/75
          lg:to-black/30
        "
      />

      {/* MAIN CONTAINER */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          pb-6
          pt-8
          sm:px-6
          sm:pt-10
          lg:px-8
          lg:pb-8
          lg:pt-12
          xl:px-10
        "
      >
        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="w-full max-w-[650px]">
          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-yellow-400/60
              bg-black/20
              px-3
              py-1.5
              backdrop-blur-sm
              sm:px-4
              sm:py-2
            "
          >
            <FaCar className="text-[12px] text-yellow-400" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[1px]
                text-yellow-400
                sm:text-[11px]
                sm:tracking-[1.5px]
              "
            >
              All India Taxi Service
            </span>
          </div>

          {/* TITLE */}
          <h1
            className="
              mt-4
              text-[36px]
              font-extrabold
              leading-[1.08]
              tracking-[-1px]
              text-white
              sm:text-[46px]
              md:text-[54px]
              lg:text-[60px]
              xl:text-[64px]
            "
          >
            Comfortable Rides,
            <br />

            Every Time,
            <br />

            <span className="text-yellow-400">
              Every Mile.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              max-w-[520px]
              text-[13px]
              leading-6
              text-gray-200
              sm:text-[14px]
              sm:leading-7
              lg:text-[15px]
            "
          >
            Safe, reliable and affordable taxi service across India.
            Travel comfortably with professional drivers and
            well-maintained vehicles.
          </p>

          {/* =================================================
              HERO FEATURES
          ================================================= */}

          <div
            className="
              mt-6
              grid
              max-w-[620px]
              grid-cols-2
              gap-x-4
              gap-y-4
              sm:mt-7
              sm:grid-cols-4
              sm:gap-x-5
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

        {/* =====================================================
            BOOKING BOX
        ===================================================== */}

        <div
          className="
            mt-8
            w-full
            overflow-hidden
            rounded-xl
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            sm:mt-10
            sm:rounded-2xl
            lg:mt-10
          "
        >
          {/* TRIP TYPES */}

          <div
            className="
              border-b
              border-gray-100
              p-3
              sm:px-5
              sm:pb-0
              sm:pt-4
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-2
                min-[420px]:grid-cols-3
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

          {/* =================================================
              BOOKING FIELDS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              p-4
              sm:p-5
              md:grid-cols-2
              lg:grid-cols-12
              lg:gap-3
              xl:gap-4
            "
          >
            {/* FROM */}

            <div className="w-full lg:col-span-3">
              <FieldLabel>From</FieldLabel>

              <div className="booking-field">
                <FaMapMarkerAlt className="mr-3 shrink-0 text-[14px] text-yellow-500" />

                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="
                    min-w-0
                    flex-1
                    border-none
                    bg-transparent
                    text-[12px]
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
                <FaMapMarkerAlt className="mr-3 shrink-0 text-[14px] text-yellow-500" />

                <input
                  type="text"
                  placeholder="Enter drop location"
                  className="
                    min-w-0
                    flex-1
                    border-none
                    bg-transparent
                    text-[12px]
                    text-gray-800
                    outline-none
                    placeholder:text-gray-400
                  "
                />

                <FaExchangeAlt className="ml-2 shrink-0 text-[12px] text-gray-400" />
              </div>
            </div>

            {/* DATE */}

            <div className="w-full lg:col-span-2">
              <FieldLabel>Pickup Date</FieldLabel>

              <div className="booking-field">
                <FaCalendarAlt className="mr-2 shrink-0 text-[13px] text-yellow-500" />

                <input
                  type="date"
                  className="
                    min-w-0
                    flex-1
                    border-none
                    bg-transparent
                    text-[11px]
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
                <FaClock className="mr-2 shrink-0 text-[13px] text-yellow-500" />

                <input
                  type="time"
                  className="
                    min-w-0
                    flex-1
                    border-none
                    bg-transparent
                    text-[11px]
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
                  h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border-0
                  bg-yellow-400
                  text-[13px]
                  font-extrabold
                  text-black
                  shadow-[0_8px_20px_rgba(250,204,21,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:bg-yellow-500
                  hover:shadow-[0_10px_25px_rgba(250,204,21,0.35)]
                "
              >
                Check Fare
                <FaCar />
              </button>
            </div>
          </div>

          {/* SMALL INFORMATION */}

          <div
            className="
              flex
              flex-col
              gap-2
              border-t
              border-gray-100
              bg-gray-50
              px-4
              py-3
              sm:flex-row
              sm:flex-wrap
              sm:items-center
              sm:gap-x-7
              sm:px-5
            "
          >
            <SmallCheck text="No hidden charges" />
            <SmallCheck text="Verified drivers" />
            <SmallCheck text="24/7 booking support" />
          </div>
        </div>

        {/* =====================================================
            TRUST CARDS
        ===================================================== */}

        <div
          className="
            mt-4
            grid
            grid-cols-1
            overflow-hidden
            rounded-xl
            border
            border-white/15
            bg-black/65
            shadow-xl
            backdrop-blur-md
            sm:grid-cols-2
            sm:rounded-2xl
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
        h-[44px]
        w-full
        items-center
        justify-center
        gap-2
        rounded-lg
        border-0
        px-4
        text-[11px]
        font-bold
        transition-all
        duration-300
        sm:w-auto
        sm:min-w-[145px]
        sm:rounded-b-none
        sm:text-[12px]

        ${
          active
            ? "bg-yellow-400 text-black shadow-sm"
            : "bg-gray-100 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
        }
      `}
    >
      {icon}
      <span className="whitespace-nowrap">{children}</span>
    </button>
  );
}

/* =========================================================
   LABEL
========================================================= */

function FieldLabel({ children }) {
  return (
    <label
      className="
        mb-2
        block
        text-[11px]
        font-bold
        text-gray-700
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
    <div className="group flex min-w-0 items-center gap-2.5">
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
          text-yellow-400
          transition-all
          duration-300
          group-hover:bg-yellow-400
          group-hover:text-black
          sm:h-[42px]
          sm:w-[42px]
          sm:text-[15px]
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="m-0 whitespace-nowrap text-[10px] font-bold text-white sm:text-[11px]">
          {title}
        </p>

        <p className="m-0 mt-[2px] text-[9px] text-gray-300">
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
        items-start
        gap-3
        border-b
        border-white/10
        p-4
        transition-all
        duration-300
        hover:bg-white/[0.05]
        sm:min-h-[120px]
        sm:gap-4
        sm:p-5
        sm:odd:border-r
        lg:border-b-0
        lg:border-r
        lg:odd:border-r
        lg:last:border-r-0
      "
    >
      <div
        className="
          flex
          h-[44px]
          w-[44px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-yellow-400
          bg-yellow-400/10
          text-[16px]
          text-yellow-400
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:bg-yellow-400
          group-hover:text-black
          sm:h-[46px]
          sm:w-[46px]
          sm:text-[17px]
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <h3 className="m-0 text-[12px] font-bold text-white">
          {title}
        </h3>

        <p className="m-0 mt-1.5 text-[10px] leading-[17px] text-gray-300">
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
    <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-500">
      <FaCheckCircle className="shrink-0 text-[11px] text-yellow-500" />
      <span>{text}</span>
    </div>
  );
}