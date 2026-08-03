import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { Link } from "react-router-dom";
import {
  FaQuestionCircle,
  FaTaxi,
  FaArrowRight,
} from "react-icons/fa";

const faqs = [
  {
    question: "How can I book a taxi?",
    answer:
      "You can book through our website, WhatsApp, or by calling our customer support team.",
  },
  {
    question: "Are your services available 24/7?",
    answer:
      "Yes. WayTaxi24 operates 24 hours a day, 7 days a week for all local and outstation trips.",
  },
  {
    question: "Do you provide airport pickup & drop?",
    answer:
      "Yes, we offer reliable airport pickup and drop services with timely arrivals.",
  },
  {
    question: "Which cities do you cover?",
    answer:
      "We serve Chennai, Pondicherry, Mahabalipuram, Ooty, Bangalore and many destinations across South India.",
  },
];

export default function Contact4() {
  useEffect(() => {
    anime({
      targets: ".faq-title",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".faq-card",
      opacity: [0, 1],
      translateY: [70, 0],
      delay: anime.stagger(150),
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".cta-box",
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 1200,
      delay: 500,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".floating-taxi",
      translateX: [-15, 15],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 2500,
    });
  }, []);

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Heading */}

        <div className="faq-title text-center opacity-0">

          <span className="uppercase tracking-[4px] text-[#FBBF24] font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071016]">
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-gray-600">
            Find quick answers to the most common questions about
            our taxi services and booking process.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="faq-card opacity-0 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#FBBF24] hover:shadow-xl"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#FBBF24] text-black text-2xl">

                  <FaQuestionCircle />

                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#071016]">
                  {faq.question}
                </h3>

              </div>

              <p className="mt-5 text-gray-600 leading-8">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="cta-box opacity-0 mt-20 overflow-hidden rounded-[32px] bg-[#071016] px-6 py-10 sm:px-10 lg:px-16">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="text-center lg:text-left">

              <div className="floating-taxi inline-block">

                <FaTaxi className="text-5xl text-[#FBBF24]" />

              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-white">
                Ready To Book Your Next Ride?
              </h2>

              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-8 text-gray-300">
                Experience safe, affordable and comfortable taxi
                services with WayTaxi24. Book your ride today
                and travel stress-free.
              </p>

            </div>

            <div className="flex flex-col gap-4 sm:flex-row">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FBBF24] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-500"
              >
                Book Taxi

                <FaArrowRight />

              </Link>

              <a
                href="tel:+919944817224"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Call Now
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}