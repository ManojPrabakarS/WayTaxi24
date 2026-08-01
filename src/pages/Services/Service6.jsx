import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const testimonials = [
  {
    name: "Arun Kumar",
    location: "Chennai",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "WayTaxi24 provided an excellent airport transfer service. The driver arrived on time, the car was spotless, and the journey was very comfortable.",
  },
  {
    name: "Priya Sharma",
    location: "Coimbatore",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Booked an outstation trip to Ooty with my family. The Innova Crysta was spacious and the driver was very professional. Highly recommended!",
  },
  {
    name: "Rahul Verma",
    location: "Bangalore",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    review:
      "Transparent pricing, clean vehicles and excellent customer support. My corporate travel experience was smooth from start to finish.",
  },
];

export default function Service6() {
    useEffect(() => {
  // Heading
  anime({
    targets: ".testimonial-heading",
    opacity: [0, 1],
    translateY: [60, 0],
    duration: 1000,
    easing: "easeOutExpo",
  });

  // Subtitle
  anime({
    targets: ".testimonial-subtitle",
    opacity: [0, 1],
    translateY: [40, 0],
    delay: 250,
    duration: 1000,
    easing: "easeOutExpo",
  });

  // Cards
  anime({
    targets: ".testimonial-card",
    opacity: [0, 1],
    translateY: [80, 0],
    scale: [0.9, 1],
    delay: anime.stagger(200),
    duration: 1200,
    easing: "easeOutExpo",
  });

  // Quote Icon
  anime({
    targets: ".quote-icon",
    rotate: [-180, 0],
    scale: [0, 1],
    delay: anime.stagger(200, { start: 600 }),
    duration: 1000,
    easing: "easeOutBack",
  });

  // Profile Image
  anime({
    targets: ".profile-img",
    scale: [0.5, 1],
    delay: anime.stagger(200, { start: 900 }),
    duration: 800,
    easing: "easeOutElastic(1, .6)",
  });

}, []);
  return (
    <section className="py-20 bg-[#071016]">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="testimonial-subtitle uppercase tracking-[4px] text-[#FBBF24] font-semibold opacity-0">
            Testimonials
          </span>

          <h2 className="testimonial-heading mt-4 text-4xl md:text-5xl font-bold text-white opacity-0">
            What Our Customers Say
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Customer satisfaction is our highest priority. Here's what
            our happy travellers have to say about WayTaxi24.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="
testimonial-card
group
rounded-3xl
bg-white/5
border
border-white/10
p-8
opacity-0
transition-all
duration-500
hover:-translate-y-5
hover:scale-105
hover:border-[#FBBF24]
hover:bg-[#111827]
hover:shadow-[0_25px_70px_rgba(251,191,36,0.25)]
"
            >

             <FaQuoteLeft className="quote-icon text-5xl text-[#FBBF24] opacity-20" />

              <p className="mt-6 text-gray-300 leading-8 italic">
                "{item.review}"
              </p>

              <div className="flex mt-6">

                {[1,2,3,4,5].map((star)=>(
                  <FaStar
                    key={star}
                    className="text-[#FBBF24] mr-1"
                  />
                ))}

              </div>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="profile-img w-16 h-16 rounded-full object-cover border-2 border-[#FBBF24]"
                />

                <div>

                  <h4 className="text-xl font-semibold text-white">
                    {item.name}
                  </h4>

                  <p className="text-gray-400">
                    {item.location}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}