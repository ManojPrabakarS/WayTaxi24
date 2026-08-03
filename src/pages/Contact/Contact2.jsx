import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

import Contactform from "./Contactform";

export default function Contact2() {

  useEffect(() => {

    anime({
      targets: ".contact-left",
      opacity: [0, 1],
      translateX: [-100, 0],
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".contact-card",
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(150),
      duration: 900,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".contact-form-wrapper",
      opacity: [0, 1],
      translateX: [100, 0],
      duration: 1200,
      delay: 300,
      easing: "easeOutExpo",
    });

  }, []);
  
  

  return (

    <section className="bg-[#f8f9fb] py-16 md:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left */}

          <div className="contact-left opacity-0">

            <span className="uppercase tracking-[4px] text-[#FBBF24] font-semibold">

              Contact Information

            </span>

           <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#071016]">

              Let's Talk About
              <br />

              Your Journey

            </h2>

           <p className="mt-5 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">

              Need an airport transfer, outstation taxi,
              corporate cab or local ride?
              Our support team is available 24/7.

            </p>

            <div className="mt-10 space-y-6">

              <div className="contact-card opacity-0 flex items-start sm:items-center gap-4 sm:gap-5 rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FBBF24] text-2xl">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h4 className="text-xl font-bold">

                    Address

                  </h4>

                  <p className="text-gray-600">

                    Chennai, Tamil Nadu

                  </p>

                </div>

              </div>

              <div className="contact-card opacity-0 flex items-start sm:items-center gap-4 sm:gap-5 rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FBBF24] text-2xl">

                  <FaPhoneAlt />

                </div>

                <div>

                <h4 className="text-lg sm:text-xl font-bold">

                    Phone

                  </h4>

                  <p className="text-sm sm:text-base text-gray-600">

                    +91 99448 17224

                  </p>

                </div>

              </div>

              <div className="contact-card opacity-0 flex items-start sm:items-center gap-4 sm:gap-5 rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

               <div className="flex h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#FBBF24] text-xl sm:text-2xl">

                  <FaEnvelope />

                </div>

                <div>

                 <h4 className="text-lg sm:text-xl font-bold">

                    Email

                  </h4>

                <p className="text-sm sm:text-base text-gray-600 break-all">
  support@waytaxi24.com
</p>

                </div>

              </div>

              <div className="contact-card opacity-0 flex items-center gap-5 rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FBBF24] text-2xl">

                  <FaClock />

                </div>

                <div>

                  <h4 className="text-lg sm:text-xl font-bold">

                    Working Hours

                  </h4>

                 <p className="text-sm sm:text-base text-gray-600">

                    24 Hours • 7 Days

                  </p>

                </div>

              </div>

              <div className="contact-card opacity-0 rounded-2xl sm:rounded-3xl bg-[#071016] p-6 sm:p-8 text-white">

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">

                  <FaWhatsapp className="text-5xl sm:text-6xl text-[#25D366]" />

                  <div>

                    <h3 className="text-2xl font-bold">

                      WhatsApp Booking

                    </h3>

                    <p className="mt-2 text-gray-300">

                      Get instant booking confirmation.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="contact-form-wrapper opacity-0 w-full">

            <Contactform />

          </div>

        </div>

      </div>

    </section>

  );

}