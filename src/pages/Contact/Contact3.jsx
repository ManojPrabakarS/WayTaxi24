import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import {
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaLocationArrow,
  FaCarSide,
} from "react-icons/fa";

const serviceAreas = [
  "Chennai",
  "Mahabalipuram",
  "Pondicherry",
  "Vellore",
  "Tirupati",
  "Kanchipuram",
  "Bangalore",
  "Ooty",
];

export default function Contact3() {

  useEffect(() => {

    anime({
      targets: ".map-title",
      opacity: [0,1],
      translateY: [60,0],
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".map-card",
      opacity: [0,1],
      translateX: [-60,0],
      delay: anime.stagger(120),
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".map-frame",
      opacity: [0,1],
      scale: [0.95,1],
      duration: 1200,
      delay:400,
      easing:"easeOutExpo",
    });

    anime({
      targets: ".floating-car",
      translateX: [-20,20],
      direction:"alternate",
      loop:true,
      duration:2500,
      easing:"easeInOutSine",
    });

  },[]);

  return (

    <section className="overflow-hidden bg-[#071016] py-16 md:py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-[#FBBF24] font-semibold">

            Our Coverage

          </span>

          <h2 className="map-title mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white opacity-0">

            We Travel Across
            <span className="text-[#FBBF24]">
              {" "}South India
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">

            Wherever your destination is,
            WayTaxi24 is ready to take you there
            safely and comfortably.

          </p>

        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left */}

          <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

              {serviceAreas.map((city,index)=>(

                <div
                  key={index}
                  className="map-card opacity-0 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#FBBF24]"
                >

                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#FBBF24] text-black">

                    <FaLocationArrow />

                  </div>

                  <span className="text-sm sm:text-base font-medium text-white">

                    {city}

                  </span>

                </div>

              ))}

            </div>

            <div className="mt-8 sm:mt-10 rounded-3xl bg-[#FBBF24] p-6 sm:p-8">

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">

                <div className="floating-car">

                  <FaCarSide className="text-5xl sm:text-6xl text-black" />

                </div>

                <div>

                 <h3 className="text-2xl sm:text-3xl font-bold">

                    Need an Emergency Cab?

                  </h3>

                 <p className="mt-2 text-sm sm:text-base leading-7">

                    Call us anytime. Our taxis are available 24 Hours.

                  </p>

                  <a
                    href="tel:+919944817224"
                    className="mt-5 inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-full bg-black px-6 sm:px-8 py-3 text-white transition-all duration-300 hover:bg-[#071016]">

                    <FaPhoneAlt />

                    +91 99448 17224

                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* Map */}

          <div className="map-frame opacity-0 overflow-hidden rounded-3xl border-2 sm:border-4 border-[#FBBF24] shadow-2xl">

            <iframe
              title="WayTaxi24 Location"
              src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu&output=embed"
              className="h-[320px] sm:h-[420px] lg:h-[550px] w-full"
              loading="lazy"
            />

          </div>

        </div>

      </div>

    </section>

  );

}