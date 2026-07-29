import { useEffect, useState } from "react";
import {
  FaStar,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
  FaPhoneAlt,
  FaUserCircle,
} from "react-icons/fa";

export default function Home4() {
  const testimonials = [
    {
      name: "Rohit Kumar",
      location: "Chennai",
      review:
        "Excellent service! Driver was on time, very polite and the ride was extremely comfortable.",
    },
    {
      name: "Anitha S",
      location: "Bangalore",
      review:
        "I booked a round trip to Pondicherry. Everything was smooth and hassle free. Highly recommended!",
    },
    {
      name: "Vijay P",
      location: "Coimbatore",
      review:
        "Very professional and reliable service. The cab was clean and the driver was very courteous.",
    },
    {
      name: "Arun Kumar",
      location: "Madurai",
      review:
        "Booking was quick and simple. The driver arrived on time and our entire family had a comfortable journey.",
    },
    {
      name: "Priya R",
      location: "Trichy",
      review:
        "Great experience with WayTaxi24. Affordable fare, clean vehicle and excellent customer support.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const previousSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Get 3 testimonials starting from current
  const visibleTestimonials = [0, 1, 2].map(
    (offset) =>
      testimonials[(current + offset) % testimonials.length]
  );

  return (
    <section className="bg-[#f8f8f8] py-10 sm:py-12">

      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">

        {/* ==========================================
            TITLE
        ========================================== */}

        <div className="mb-8 text-center">

          <p
            className="
              mb-2
              text-[11px]
              font-bold
              uppercase
              tracking-[2px]
              text-[#ffbd00]
            "
          >
            Testimonials
          </p>

          <h2
            className="
              m-0
              text-[26px]
              font-extrabold
              text-[#111]
              sm:text-[30px]
            "
          >
            What Our Customers Say
          </h2>

          {/* Yellow line */}

          <div
            className="
              mx-auto
              mt-3
              h-[3px]
              w-[45px]
              rounded-full
              bg-[#ffbd00]
            "
          ></div>
        </div>


        {/* ==========================================
            TESTIMONIAL CAROUSEL
        ========================================== */}

        <div className="relative">

          {/* PREVIOUS BUTTON */}

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous testimonial"
            className="
              absolute
              -left-3
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-[12px]
              text-[#111]
              shadow-md
              transition-all
              duration-300

              hover:border-[#ffbd00]
              hover:bg-[#ffbd00]
              hover:text-black

              sm:-left-5
            "
          >
            <FaChevronLeft />
          </button>


          {/* CARDS */}

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${current}-${index}`}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>


          {/* NEXT BUTTON */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="
              absolute
              -right-3
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-white
              text-[12px]
              text-[#111]
              shadow-md
              transition-all
              duration-300

              hover:border-[#ffbd00]
              hover:bg-[#ffbd00]
              hover:text-black

              sm:-right-5
            "
          >
            <FaChevronRight />
          </button>
        </div>


        {/* ==========================================
            CAROUSEL DOTS
        ========================================== */}

        <div className="mt-6 flex items-center justify-center gap-2">

          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                h-[7px]
                rounded-full
                border-0
                transition-all
                duration-300

                ${
                  current === index
                    ? "w-[25px] bg-[#ffbd00]"
                    : "w-[7px] bg-gray-300 hover:bg-gray-400"
                }
              `}
            ></button>
          ))}

        </div>


        {/* ==========================================
            NEED HELP BOX
        ========================================== */}

        <div
          className="
            mt-9
            flex
            flex-col
            gap-5
            rounded-xl
            bg-[#ffbd00]
            px-6
            py-5
            shadow-[0_8px_25px_rgba(255,189,0,0.18)]

            md:flex-row
            md:items-center
            md:justify-between

            lg:px-8
          "
        >

          {/* LEFT */}

          <div>
            <p
              className="
                m-0
                text-[14px]
                font-medium
                text-black
              "
            >
              <span className="font-extrabold">
                Need Help?
              </span>{" "}
              We are just a call away!
            </p>
          </div>


          {/* PHONE */}

          <a
            href="tel:+919876543210"
            className="
              group
              flex
              items-center
              gap-3
              no-underline
              !text-black
            "
          >
            <FaPhoneAlt
              className="
                text-[19px]
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            />

            <span
              className="
                text-[19px]
                font-extrabold
                sm:text-[21px]
              "
            >
              +91 98765 43210
            </span>
          </a>


          {/* ENQUIRE BUTTON */}

          <a
            href="/contact"
            className="
              flex
              min-h-[42px]
              items-center
              justify-center
              rounded-lg
              bg-[#071016]
              px-8
              no-underline
              !text-white
              text-[12px]
              font-bold
              transition-all
              duration-300

              hover:-translate-y-[2px]
              hover:bg-black
              hover:!text-[#ffbd00]
              hover:shadow-lg
            "
          >
            Enquire Now
          </a>

        </div>

      </div>
    </section>
  );
}


/* ==========================================================
   TESTIMONIAL CARD
========================================================== */

function TestimonialCard({ testimonial }) {
  return (
    <div
      className="
        group
        relative
        min-h-[220px]
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-[#ffbd00]/60
        hover:shadow-xl
      "
    >

      {/* STARS */}

      <div className="flex gap-1 text-[14px] text-[#ffbd00]">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>


      {/* QUOTE */}

      <FaQuoteRight
        className="
          absolute
          right-6
          top-5
          text-[32px]
          text-gray-100
          transition-colors
          duration-300
          group-hover:text-yellow-100
        "
      />


      {/* REVIEW */}

      <p
        className="
          m-0
          mt-5
          min-h-[65px]
          text-[12px]
          leading-[20px]
          text-gray-600
        "
      >
        {testimonial.review}
      </p>


      {/* CUSTOMER */}

      <div className="mt-5 flex items-center gap-3">

        {/* Customer placeholder */}

        <div
          className="
            flex
            h-[46px]
            w-[46px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-gray-100
            text-[34px]
            text-gray-400
          "
        >
          <FaUserCircle />
        </div>


        <div>

          <h3
            className="
              m-0
              text-[12px]
              font-extrabold
              text-[#111]
            "
          >
            {testimonial.name}
          </h3>

          <p
            className="
              m-0
              mt-[3px]
              text-[10px]
              text-gray-500
            "
          >
            {testimonial.location}
          </p>

        </div>

      </div>

    </div>
  );
}