import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logo from "../assets/calogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // ================= SCROLL DETECTION =================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ================= LOCK MOBILE SCROLL =================

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        bg-white
        transition-shadow
        duration-300

        ${
          scrolled
            ? "shadow-[0_5px_25px_rgba(0,0,0,0.12)]"
            : "shadow-sm"
        }
      `}
    >
      <nav
        className="
          mx-auto
          flex
          h-[90px]
          w-full
          max-w-[1440px]
          items-center
          justify-between
          px-4
          sm:px-5
          md:px-6
          lg:px-8
        "
      >

        {/* ==================================================
            LOGO
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.6,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.03,
          }}
        >
          <Link
            to="/"
            className="flex shrink-0 items-center no-underline"
          >
            <img
              src={logo}
              alt="WayTaxi24"
              className="
                h-auto
                w-[155px]
                object-contain
                sm:w-[170px]
                md:w-[185px]
                lg:w-[210px]
                xl:w-[220px]
              "
            />
          </Link>
        </motion.div>


        {/* ==================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div
          className="
            hidden
            items-center
            gap-8
            lg:flex
            xl:gap-10
          "
        >
          {navLinks.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2 + index * 0.08,
                duration: 0.45,
                ease: "easeOut",
              }}
              whileHover={{
                y: -2,
              }}
              className="relative"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `
                    group
                    relative
                    block
                    whitespace-nowrap
                    no-underline
                    text-[14px]
                    font-semibold
                    transition-colors
                    duration-300

                    ${
                      isActive
                        ? "!text-[#FBBF24]"
                        : "!text-[#18181B] hover:!text-[#FBBF24]"
                    }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {/* Animated small line */}

                    <span
                      className={`
                        absolute
                        -bottom-[7px]
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        rounded-full
                        bg-[#FBBF24]
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "w-[18px]"
                            : "w-0 group-hover:w-[18px]"
                        }
                      `}
                    />
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </div>


        {/* ==================================================
            DESKTOP RIGHT SIDE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            hidden
            items-center
            gap-3
            lg:flex
            xl:gap-4
          "
        >

          {/* ================= PHONE ================= */}

          <motion.a
            href="tel:+919876543210"
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              group
              flex
              h-[43px]
              items-center
              gap-2.5
              rounded-full
              border
              border-gray-300
              bg-white
              px-5
              no-underline
              !text-[#18181B]
              text-[13px]
              font-semibold
              transition-colors
              duration-300

              hover:border-[#FBBF24]
              hover:bg-[#FFFBEB]
              hover:!text-[#18181B]
            "
          >
            <motion.span
              whileHover={{
                rotate: 15,
              }}
              className="flex"
            >
              <FaPhoneAlt className="text-[12px] text-[#FBBF24]" />
            </motion.span>

            <span>
              +91 98765 43210
            </span>
          </motion.a>


          {/* ================= BOOK RIDE ================= */}

          <motion.div
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <Link
              to="/contact"
              className="
                relative
                flex
                h-[43px]
                items-center
                justify-center
                overflow-hidden
                rounded-lg
                bg-[#FBBF24]
                px-6
                no-underline
                !text-[#111111]
                text-[13px]
                font-bold
                shadow-[0_5px_18px_rgba(251,191,36,0.25)]
                transition-all
                duration-300

                hover:bg-[#F59E0B]
                hover:!text-[#111111]
                hover:shadow-[0_8px_25px_rgba(251,191,36,0.40)]
              "
            >
              Book a Ride
            </Link>
          </motion.div>
        </motion.div>


        {/* ==================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <motion.button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          whileTap={{
            scale: 0.88,
          }}
          whileHover={{
            scale: 1.05,
          }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-gray-200
            bg-white
            text-[20px]
            text-[#18181B]
            transition-colors
            duration-300

            hover:border-[#FBBF24]
            hover:bg-[#FFFBEB]
            hover:text-[#FBBF24]

            lg:hidden
          "
        >
          <AnimatePresence mode="wait" initial={false}>

            {menuOpen ? (
              <motion.span
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.6,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.6,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <FaTimes />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.6,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.6,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <FaBars />
              </motion.span>
            )}

          </AnimatePresence>
        </motion.button>

      </nav>


      {/* ==================================================
          MOBILE MENU
      ================================================== */}

      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              height: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              y: -15,
              height: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="
              absolute
              left-0
              top-[90px]
              w-full
              overflow-hidden
              border-t
              border-gray-100
              bg-white
              shadow-xl
              lg:hidden
            "
          >
            <div className="mx-auto max-w-[1450px] px-5 py-5">

              {/* ================= MOBILE LINKS ================= */}

              <div className="flex flex-col">

                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.08 + index * 0.07,
                      duration: 0.3,
                    }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `
                          block
                          border-b
                          border-gray-100
                          py-4
                          no-underline
                          text-[14px]
                          font-semibold
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "!text-[#FBBF24]"
                              : "!text-[#18181B] hover:pl-2 hover:!text-[#FBBF24]"
                          }
                        `
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}

              </div>


              {/* ================= MOBILE PHONE ================= */}

              <motion.a
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="tel:+919876543210"
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  py-3
                  no-underline
                  !text-[#18181B]
                  text-[13px]
                  font-semibold
                  transition-colors
                  duration-300

                  hover:border-[#FBBF24]
                  hover:bg-[#FFFBEB]
                "
              >
                <FaPhoneAlt className="text-[#FBBF24]" />

                +91 98765 43210
              </motion.a>


              {/* ================= MOBILE BOOK BUTTON ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.42,
                  duration: 0.3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="
                    mt-3
                    block
                    rounded-xl
                    bg-[#FBBF24]
                    py-3
                    text-center
                    no-underline
                    !text-[#111111]
                    text-[14px]
                    font-bold
                    shadow-[0_5px_15px_rgba(251,191,36,0.20)]
                    transition-all
                    duration-300

                    hover:bg-[#F59E0B]
                    hover:!text-[#111111]
                  "
                >
                  Book a Ride
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.header>
  );
}