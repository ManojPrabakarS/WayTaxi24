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
        py-4

        sm:py-5
        md:py-6
        lg:py-7
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1400px]
          grid-cols-1
          px-4

          min-[480px]:grid-cols-2

          sm:px-5
          md:px-6

          lg:grid-cols-4
          lg:px-8
        "
      >
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            number={stat.number}
            title={stat.title}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}


/* =========================================================
   STAT CARD
========================================================= */

function StatCard({ icon, number, title, index }) {
  return (
    <div
      className={`
        group
        flex
        w-full
        items-center
        justify-start
        gap-4
        px-4
        py-4

        border-b
        border-white/10

        transition-all
        duration-300

        min-[480px]:min-h-[105px]
        min-[480px]:justify-center
        min-[480px]:gap-3
        min-[480px]:px-3

        sm:min-h-[110px]
        sm:gap-4
        sm:px-4

        md:min-h-[115px]
        md:px-5

        lg:min-h-[120px]
        lg:border-b-0
        lg:border-r
        lg:px-5

        xl:gap-5
        xl:px-7

        ${index === 3 ? "border-b-0 lg:border-r-0" : ""}
      `}
    >
      {/* ================= ICON ================= */}

      <div
        className="
          flex
          h-[45px]
          w-[45px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#ffbd00]/10

          text-[22px]
          !text-[#ffbd00]

          transition-all
          duration-300

          min-[480px]:h-[46px]
          min-[480px]:w-[46px]
          min-[480px]:text-[23px]

          sm:h-[48px]
          sm:w-[48px]
          sm:text-[24px]

          md:h-[50px]
          md:w-[50px]
          md:text-[26px]

          lg:h-[52px]
          lg:w-[52px]
          lg:text-[27px]

          xl:h-[54px]
          xl:w-[54px]
          xl:text-[28px]

          group-hover:-translate-y-1
          group-hover:bg-[#ffbd00]
          group-hover:!text-[#071016]
        "
      >
        {icon}
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
          min-w-0
          flex-1

          min-[480px]:flex-none
        "
      >
        {/* NUMBER */}

        <h3
          className="
            m-0
            whitespace-nowrap
            font-['Poppins']
            text-[18px]
            font-bold
            leading-none
            !text-[#ffbd00]

            min-[480px]:text-[17px]

            sm:text-[18px]
            md:text-[19px]
            lg:text-[20px]
            xl:text-[22px]
          "
        >
          {number}
        </h3>

        {/* TITLE */}

        <p
          className="
            m-0
            mt-1.5
            font-['Poppins']
            text-[10px]
            font-medium
            leading-[15px]
            !text-white

            min-[480px]:max-w-[120px]
            min-[480px]:text-[9px]
            min-[480px]:leading-[14px]

            sm:max-w-[135px]
            sm:text-[10px]
            sm:leading-[15px]

            md:max-w-[145px]

            lg:max-w-[150px]
            lg:text-[10px]
            lg:leading-[16px]

            xl:text-[11px]
          "
        >
          {title}
        </p>
      </div>
    </div>
  );
}