import { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How do I book a taxi with WayTaxi24?",
    answer:
      "You can easily book your ride through our website or by calling our customer support team. We provide instant booking confirmation.",
  },
  {
    question: "Do you provide airport pickup and drop services?",
    answer:
      "Yes. We provide reliable airport transfers with timely pickups and professional drivers across Tamil Nadu.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept Cash, UPI, Credit/Debit Cards and Net Banking for your convenience.",
  },
  {
    question: "Can I book an outstation round trip?",
    answer:
      "Absolutely! We offer One Way, Round Trip and Multi-day outstation taxi packages.",
  },
  {
    question: "Are your drivers verified?",
    answer:
      "Yes. Every driver is professionally trained, background verified and experienced.",
  },
];

export default function Service7() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    anime({
      targets: ".faq-heading",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".faq-subtitle",
      opacity: [0, 1],
      translateY: [30, 0],
      delay: 200,
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".faq-card",
      opacity: [0, 1],
      translateY: [70, 0],
      delay: anime.stagger(150),
      duration: 1200,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section className="bg-[#f8f9fb] py-20 lg:py-24">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="faq-subtitle uppercase tracking-[4px] text-[#FBBF24] font-semibold opacity-0">
            FAQ
          </span>

          <h2 className="faq-heading mt-4 text-4xl md:text-5xl font-bold text-[#071016] opacity-0">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Find answers to the most common questions about our taxi
            services and booking process.
          </p>

        </div>

        {/* FAQ */}

        <div className="space-y-5">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="faq-card opacity-0 rounded-2xl bg-white shadow-lg overflow-hidden border border-gray-200 hover:border-[#FBBF24] transition duration-300"
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >

                <h3 className="text-lg md:text-xl font-semibold text-[#071016]">

                  {item.question}

                </h3>

                <div className="text-[#FBBF24] text-xl">

                  {active === index ? <FaMinus /> : <FaPlus />}

                </div>

              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  active === index
                    ? "max-h-96 pb-6"
                    : "max-h-0"
                }`}
              >

                <p className="px-8 text-gray-600 leading-8">

                  {item.answer}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}