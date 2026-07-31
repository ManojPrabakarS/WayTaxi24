import {
  FaTaxi,
  FaShieldAlt,
  FaClock,
  FaRupeeSign,
  FaStar,
  FaPhoneAlt,
} from "react-icons/fa";
import CallToAction from "../../Components/CallToAction";
import TC from "../../Components/TC";

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

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-14">

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


        <TC />
        <CallToAction />

      </div>

    </section>
  );
}