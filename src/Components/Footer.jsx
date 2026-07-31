import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

import logo from "../assets/carlogofooter.png";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "One Way Taxi",
    "Round Trip",
    "Airport Transfer",
    "Local Rental",
    "Corporate Cab",
  ];

  const socialIcons = [
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
  ];

  return (
    <footer className="mt-20 bg-[#071016] text-white">

      {/* Top Accent */}
      <div className="h-1 bg-linear-to-r from-yellow-500 via-yellow-400 to-amber-300"></div>

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>

            <img
              src={logo}
              alt="WayTaxi24"
              className="mb-1 h-28 w-auto sm:h-36 lg:h-36"
            />
            <p className="text-sm leading-7 text-gray-300">
              WayTaxi24 provides safe, affordable and reliable cab services
              across Tamil Nadu. We are committed to delivering comfortable,
              on-time and hassle-free travel experiences.
            </p>

            <div className="mt-7 flex gap-3">

              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400"
                >
                  <Icon className="text-white transition group-hover:text-black" />
                </a>
              ))}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="relative mb-8 inline-block text-xl font-bold">
              Quick Links

              <span className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-yellow-400"></span>

            </h3>

            <ul className="space-y-4">

              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-3 text-gray-300 transition"
                  >
                    <FaChevronRight className="text-xs text-yellow-400 transition-transform group-hover:translate-x-1" />

                    <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-yellow-400">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="relative mb-8 inline-block text-xl font-bold">
              Our Services

              <span className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-yellow-400"></span>

            </h3>

            <ul className="space-y-4">

              {services.map((service) => (
                <li
                  key={service}
                  className="group flex cursor-pointer items-center gap-3 text-gray-300 transition"
                >
                  <FaChevronRight className="text-xs text-yellow-400 transition-transform group-hover:translate-x-1" />

                  <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-yellow-400">
                    {service}
                  </span>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="relative mb-8 inline-block text-xl font-bold">
              Contact Us

              <span className="absolute -bottom-2 left-0 h-1 w-12 rounded-full bg-yellow-400"></span>

            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-400">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Address
                  </h4>

                  <p className="mt-1 text-sm text-gray-300">
                    Chennai,
                    Tamil Nadu,
                    India
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-400">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black">
                  <FaPhoneAlt />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Call Us
                  </h4>

                  <a
                    href="tel:+919500008304"
                    className="mt-1 block text-sm text-gray-300 transition hover:text-yellow-400"
                  >
                    +91 95000 08304
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-400">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black">
                  <FaEnvelope />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <a
                    href="mailto:support@waytaxi24.com"
                    className="mt-1 block text-sm text-gray-300 transition hover:text-yellow-400"
                  >
                    support@waytaxi24.com
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-white/10 pt-6">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()}
              <span className="font-semibold text-white">
                {" "}WayTaxi24
              </span>
              . All Rights Reserved.
            </p>

            <div className="hidden h-5 w-px bg-white/20 md:block"></div>

            <p className="text-sm text-gray-400">
              Designed & Developed by{" "}
              <span className="font-semibold text-yellow-400">
                MP & Webniqo
              </span>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}