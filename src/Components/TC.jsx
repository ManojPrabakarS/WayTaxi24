import React, { useState } from "react";
import {
  FaRoad,
  FaTaxi,
  FaMoneyBillWave,
  FaReceipt,
} from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
const TC = () => {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      badge: "Terms & Conditions",
      heading: "Booking Guidelines",
      subtitle:
        "Please read the following terms before confirming your booking.",
      booking: "For Bookings",
      availability: "Available 24 × 7",
      footer:
        "By confirming your booking, you agree to all the above Terms & Conditions.",
      terms: [
        {
          icon: <FaRoad />,
          title: "Minimum Distance",
          desc: "Minimum billing distance is 130 KM.",
        },
        {
          icon: <FaTaxi />,
          title: "Distance Calculation",
          desc: "Charges are calculated only for One Side Kilometers.",
        },
        {
          icon: <FaMoneyBillWave />,
          title: "Driver allowance",
          desc: "Driver allowance of ₹400 per day is applicable.",
        },
        {
          icon: <FaReceipt />,
          title: "Tolls & State Permit",
          desc:
            "Toll charges, State Permit and Parking charges should be paid by the customer.",
        },
      ],
    },

    ta: {
      badge: "விதிமுறைகள்",
      heading: "முன்பதிவு விதிமுறைகள்",
      subtitle:
        "முன்பதிவை உறுதிப்படுத்தும் முன் கீழே உள்ள விதிமுறைகளை கவனமாக படிக்கவும்.",
      booking: "முன்பதிவிற்கு",
      availability: "24 × 7 சேவை",
      footer:
        "முன்பதிவை உறுதிப்படுத்துவதன் மூலம் மேற்கண்ட அனைத்து விதிமுறைகளையும் நீங்கள் ஏற்கிறீர்கள்.",
      terms: [
        {
          icon: <FaRoad />,
          title: "குறைந்தபட்ச தூரம்",
          desc: "குறைந்தபட்ச கட்டண தூரம் 130 கிலோமீட்டர்.",
        },
        {
          icon: <FaTaxi />,
          title: "தூர கணக்கீடு",
          desc:
            "ஒரு வழி பயண தூரம் (One Side KM) மட்டுமே கட்டணமாக கணக்கிடப்படும்.",
        },
        {
          icon: <FaMoneyBillWave />,
          title: "ஓட்டுநர் படி",
          desc:
            "ஒரு நாளுக்கு ₹400 ஓட்டுநர் படி தனியாக வசூலிக்கப்படும்.",
        },
        {
          icon: <FaReceipt />,
          title: "சுங்கவரி & மாநில அனுமதி",
          desc:
            "சுங்கவரி (Toll), மாநில அனுமதி (State Permit) மற்றும் பார்க்கிங் கட்டணங்களை வாடிக்கையாளர் செலுத்த வேண்டும்.",
        },
      ],
    },
  };

  const data = content[lang];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-5">



        {/* Heading */}
        <div className="mb-10 flex flex-col items-center gap-1 text-center">
          <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black">
            {data.badge}
          </span>

          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            {data.heading}
          </h2>

          <p className="max-w-2xl text-gray-600">
            {data.subtitle}
          </p>
        </div>

        {/* Terms Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

          <div className="flex items-center justify-between bg-linear-to-r from-yellow-400 to-yellow-300 px-6 py-4">
            <h3 className="text-xl font-bold text-black">
              {data.badge}
            </h3>

            <button
              onClick={() => setLang(lang === "en" ? "ta" : "en")}
              className="flex h-10 items-center gap-2 rounded-full bg-white px-3 text-sm font-semibold text-black shadow transition hover:scale-105"
            >
              <FaGlobeAsia className="text-base" />
              <span>{lang === "en" ? "EN" : "தமிழ்"}</span>
            </button>
          </div>
          <div className="space-y-5 p-8">
            {data.terms.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 rounded-2xl border border-gray-200 p-5 transition hover:border-yellow-400 hover:bg-yellow-50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-lg text-black sm:h-12 sm:w-12 sm:text-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t bg-gray-100 p-6 text-center text-sm text-gray-700">
            {data.footer}
          </div>
        </div>

        {/* Booking */}
        <div className="mt-10 rounded-3xl border-2 border-dashed border-yellow-400 bg-white p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900">
            {data.booking}
          </h3>

          <p className="mt-4 text-4xl font-extrabold text-black">
            95000 08304
          </p>

          <p className="mt-2 text-gray-500">
            {data.availability}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TC;