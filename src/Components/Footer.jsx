import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../assets/carlogofooter.png";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    "One Way Taxi",
    "Round Trip",
    "Airport Transfer",
    "Local Rental",
    "Corporate Travel",
  ];

  const importantLinks = [
    "Terms & Conditions",
    "Privacy Policy",
    "Refund Policy",
    "Cancellation Policy",
    "FAQ",
  ];

  return (
    <footer className="w-full bg-[#071016] text-white">
      {/* ================= MAIN FOOTER ================= */}

  <div
  className="
    mx-auto
    grid
    w-full
    max-w-[1400px]
    grid-cols-1
    gap-7
    px-5
    py-7
    text-center

    sm:px-6
    sm:py-8

    md:grid-cols-2
    md:gap-x-8
    md:gap-y-7
    md:text-left

    lg:grid-cols-[1.35fr_.75fr_.9fr_1fr_1.25fr]
    lg:gap-6
    lg:px-8
    lg:py-9
  "
>
        {/* ================= COMPANY ================= */}

        <div
          className="
            flex
            flex-col
            items-center
            md:items-start
          "
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center no-underline"
          >
            <img
              src={logo}
              alt="WayTaxi24"
              className="
                h-[85px]
                w-auto
                object-contain
                sm:h-[90px]
                lg:h-[88px]
              "
            />
          </Link>

          <p
            className="
              m-0
              mt-4
              max-w-[300px]
              text-[13px]
              leading-[22px]
              !text-gray-400
            "
          >
            Your trusted outstation cab partner. Safe rides, best prices and
            comfortable journeys across India.
          </p>

          {/* SOCIAL MEDIA */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2.5
              md:justify-start
            "
          >
            <SocialIcon
              href="#"
              icon={<FaFacebookF />}
              label="Facebook"
            />

            <SocialIcon
              href="#"
              icon={<FaInstagram />}
              label="Instagram"
            />

            <SocialIcon
              href="https://wa.me/919876543210"
              icon={<FaWhatsapp />}
              label="WhatsApp"
            />

            <SocialIcon
              href="#"
              icon={<FaYoutube />}
              label="YouTube"
            />
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}

        <FooterColumn title="Quick Links">
          {quickLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="
                group
                flex
                items-center
                justify-center
                gap-2
                no-underline
                text-[13px]
                font-medium
                !text-gray-400
                transition-all
                duration-300

                hover:!text-[#ffbd00]

                md:justify-start
                md:hover:translate-x-1
              "
            >
              <FaArrowRight
                className="
                  hidden
                  text-[9px]
                  !text-[#ffbd00]
                  opacity-0
                  transition-all
                  duration-300

                  md:block
                  group-hover:opacity-100
                "
              />

              {item.name}
            </Link>
          ))}
        </FooterColumn>

        {/* ================= SERVICES ================= */}

        <FooterColumn title="Our Services">
          {services.map((service) => (
            <Link
              key={service}
              to="/services"
              className="
                no-underline
                text-[13px]
                font-medium
                !text-gray-400
                transition-all
                duration-300

                hover:!text-[#ffbd00]
                md:hover:translate-x-1
              "
            >
              {service}
            </Link>
          ))}
        </FooterColumn>

        {/* ================= IMPORTANT LINKS ================= */}

        <FooterColumn title="Important Links">
          {importantLinks.map((item) => (
            <Link
              key={item}
              to="#"
              className="
                no-underline
                text-[13px]
                font-medium
                !text-gray-400
                transition-all
                duration-300

                hover:!text-[#ffbd00]
                md:hover:translate-x-1
              "
            >
              {item}
            </Link>
          ))}
        </FooterColumn>

        {/* ================= CONTACT ================= */}

        <div
          className="
            flex
            flex-col
            items-center
            md:items-start
          "
        >
          <FooterTitle>Contact Us</FooterTitle>

          <div
            className="
              mt-5
              flex
              w-full
              flex-col
              items-center
              gap-5

              md:items-start
            "
          >
            {/* LOCATION */}

            <div
              className="
                flex
                max-w-[290px]
                flex-col
                items-center
                gap-2
                text-center

                md:flex-row
                md:items-start
                md:gap-3
                md:text-left
              "
            >
              <FaMapMarkerAlt
                className="
                  shrink-0
                  text-[17px]
                  !text-[#ffbd00]
                  md:mt-1
                "
              />

              <div>
                <p
                  className="
                    m-0
                    text-[13px]
                    font-bold
                    !text-white
                  "
                >
                  Head Office
                </p>

                <p
                  className="
                    m-0
                    mt-1
                    text-[12px]
                    leading-[20px]
                    !text-gray-400
                  "
                >
                  No. 123, Anna Salai,
                  <br />
                  Chennai - 600002,
                  <br />
                  Tamil Nadu
                </p>
              </div>
            </div>

            {/* PHONE */}

            <a
              href="tel:+919876543210"
              className="
                group
                flex
                items-center
                justify-center
                gap-3
                no-underline
                text-[12px]
                font-medium
                !text-gray-400
                transition-colors
                duration-300

                hover:!text-[#ffbd00]

                md:justify-start
              "
            >
              <FaPhoneAlt
                className="
                  shrink-0
                  text-[14px]
                  !text-[#ffbd00]
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
              />

              +91 98765 43210
            </a>

            {/* EMAIL */}

            <a
              href="mailto:support@waytaxi24.com"
              className="
                flex
                items-center
                justify-center
                gap-3
                no-underline
                text-[12px]
                font-medium
                !text-gray-400
                transition-colors
                duration-300

                hover:!text-[#ffbd00]

                md:justify-start
              "
            >
              <FaEnvelope
                className="
                  shrink-0
                  text-[15px]
                  !text-[#ffbd00]
                "
              />

              <span className="break-all">
                support@waytaxi24.com
              </span>
            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                w-fit
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-[#ffbd00]/50
                px-4
                py-2.5
                no-underline
                text-[12px]
                font-bold
                !text-[#ffbd00]
                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:bg-[#ffbd00]
                hover:!text-black
              "
            >
              <FaWhatsapp className="text-[17px]" />

              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}

      <div className="border-t border-white/10">
        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            flex-col
            items-center
            justify-center
            gap-2
            px-5
            py-5
            text-center

            sm:px-6

            md:flex-row
            md:justify-between
            md:gap-4
            md:text-left

            lg:px-8
          "
        >
          <p
            className="
              m-0
              text-[11px]
              !text-gray-500
              sm:text-[12px]
            "
          >
            © 2026 WayTaxi24. All Rights Reserved.
          </p>

          <p
            className="
              m-0
              text-[11px]
              !text-gray-500
              sm:text-[12px]
            "
          >
            Designed & Developed by{" "}
            <span className="font-bold !text-[#ffbd00]">
              Webniqo
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({ title, children }) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-center

        md:items-start
        md:text-left
      "
    >
      <FooterTitle>{title}</FooterTitle>

      <div
        className="
          mt-5
          flex
          flex-col
          items-center
          gap-3

          md:items-start
        "
      >
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   FOOTER TITLE
========================================================= */

function FooterTitle({ children }) {
  return (
    <div
      className="
        flex
        flex-col
        items-center

        md:items-start
      "
    >
      <h3
        className="
          m-0
          text-[16px]
          font-bold
          leading-tight
          !text-white
        "
      >
        {children}
      </h3>

      <div
        className="
          mt-2
          h-[2px]
          w-[32px]
          rounded-full
          bg-[#ffbd00]
        "
      />
    </div>
  );
}

/* =========================================================
   SOCIAL ICON
========================================================= */

function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex
        h-[38px]
        w-[38px]
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.05]
        no-underline
        text-[14px]
        !text-gray-300
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#ffbd00]
        hover:bg-[#ffbd00]
        hover:!text-black
      "
    >
      {icon}
    </a>
  );
}