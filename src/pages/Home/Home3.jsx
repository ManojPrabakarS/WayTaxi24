import {
  FaUsers,
  FaUserTie,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

export default function Home3() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "10,000+",
      title: "Happy Customers",
    },
    {
      icon: <FaUserTie />,
      number: "500+",
      title: "Professional Drivers",
    },
    {
      icon: <FaChartLine />,
      number: "1,500+",
      title: "Trips Completed Daily",
    },
    {
      icon: <FaShieldAlt />,
      number: "50+",
      title: "Destinations Covered",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-[#071016]
        py-6
        sm:py-7
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1400px]
          grid-cols-2
          px-5
          sm:px-6
          lg:grid-cols-4
          lg:px-8
        "
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              group
              flex
              items-center
              justify-center
              gap-2
              border-white/10
              px-3
              py-5
              transition-all
              duration-300

              lg:border-r
              lg:last:border-r-0
            "
          >
            {/* ICON */}
            <div
              className="
                flex
                h-[55px]
                w-[55px]
                shrink-0
                items-center
                justify-center
                text-[34px]
                text-[#ffbd00]
                transition-all
                duration-300

                group-hover:-translate-y-1
                group-hover:scale-110
              "
            >
              {stat.icon}
            </div>

            {/* CONTENT */}
            <div>
              <h3
                className="
                  m-0
                  text-[22px]
                  font-extrabold
                  leading-none
                  text-[#ffbd00]
                  sm:text-[25px]
                "
              >
                {stat.number}
              </h3>

              <p
                className="
                  m-0
                  mt-2
                  text-[11px]
                  font-medium
                  text-white
                  sm:text-[12px]
                "
              >
                {stat.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}