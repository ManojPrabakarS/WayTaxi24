import {
  FaTaxi,
  FaShieldAlt,
  FaClock,
  FaRupeeSign,
  FaStar,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Home4() {
  const features = [
    {
      icon: <FaTaxi />,
      title: "24/7 Service",
      text: "Book your taxi anytime with instant confirmation.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Journey",
      text: "Professional drivers with verified vehicles.",
    },
    {
      icon: <FaClock />,
      title: "Always On Time",
      text: "We value your time with punctual pickups.",
    },
    {
      icon: <FaRupeeSign />,
      title: "Affordable Fare",
      text: "Transparent pricing without hidden charges.",
    },
  ];

  const reviews = [
    {
      name: "Rahul",
      city: "Chennai",
      img: "https://i.pravatar.cc/100?img=10",
      review:
        "Excellent taxi service. Driver arrived on time and the ride was very comfortable.",
    },
    {
      name: "Priya",
      city: "Bangalore",
      img: "https://i.pravatar.cc/100?img=15",
      review:
        "Affordable price and clean cab. Highly recommend WayTaxi24.",
    },
    {
      name: "Arun",
      city: "Coimbatore",
      img: "https://i.pravatar.cc/100?img=20",
      review:
        "Booking process was very easy. Fantastic customer support.",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-4 md:py-20 lg:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-yellow-500 font-semibold uppercase text-center tracking-widest">
          Why Choose Us
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mt-4 leading-tight text-gray-900">
          Trusted By Thousands Of Happy Customers
        </h2>

        <p className="text-center text-gray-600 mt-3 max-w-3xl mx-auto text-base md:text-sg leading-8">
          Premium taxi services with safe rides, affordable pricing and
          professional drivers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-4 gap-3 mt-14">

          {features.map((item, index) => (

            <div
              key={index}
              className="
group
bg-white
rounded-[30px]
border
border-gray-100
shadow-lg
p-4
text-center
transition-all
duration-500
hover:-translate-y-3
hover:shadow-2xl
hover:border-yellow-400
"
            >

             <div
className="
mx-auto
w-20
h-20
rounded-full
bg-yellow-400
text-black
flex
items-center
justify-center
text-4xl
mb-6
transition-transform
duration-500
group-hover:rotate-12
">

                {item.icon}

              </div>

             <h3 className="text-xl lg:text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.text}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-3">

          <p className="text-yellow-500 text-center font-semibold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold text-center mt-3">
            What Our Customers Say
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-3">

            {reviews.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-2 shadow-lg hover:shadow-2xl transition"
              >

                <div className="flex text-yellow-400 mb-2">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                <p className="text-gray-600 leading-8">
                  {item.review}
                </p>

                <div className="flex items-center mt-8">

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-full"
                  />

                  <div className="ml-4">

                    <h4 className="font-bold text-lg">
                      {item.name}
                    </h4>

                    <p className="text-gray-500">
                      {item.city}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      <div className="mt-8 bg-[#FBBF24] rounded-xl px-4 py-3 shadow-md">

 <div className="flex flex-col md:flex-row items-center justify-around w-full px-4">

    {/* Left */}

    <div className="text-center md:text-left">
      <h2 className="text-lg md:text-xl font-bold text-black">
        Need a Ride Today?
      </h2>

      <p className="text-xs md:text-sm text-gray-800 mt-1">
        Call us now and book your taxi instantly.
      </p>
    </div>

    {/* Right */}

    <div className="flex items-center gap-3">

      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
        <FaPhoneAlt className="text-base text-black" />
      </div>

      <div>
        <p className="text-[20px] text-gray-700">Call Now</p>
        <h4 className="text-base md:text-lg font-semibold text-black">
          +91 98765 43210
        </h4>
      </div>

      <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
        Book Now
      </button>

    </div>

  </div>

</div>

      </div>

    </section>
  );
}