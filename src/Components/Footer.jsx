
// Premium Footer.jsx (compact example)
import { Link } from "react-router-dom";
import {
  FaFacebookF,FaInstagram,FaWhatsapp,FaYoutube,
  FaPhoneAlt,FaEnvelope,FaMapMarkerAlt
} from "react-icons/fa";
import logo from "../assets/carlogofooter.png";

export default function Footer(){
  const links=[
    {name:"Home",path:"/"},
    {name:"About",path:"/about"},
    {name:"Services",path:"/services"},
    {name:"Contact",path:"/contact"},
  ];
  const services=[
    "One Way Taxi","Round Trip","Airport Transfer","Local Rental"
  ];

  return (
 <footer className="bg-[#071016] text-white mt-10">
  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-4">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

      {/* Company */}
      <div>
        <img
          src={logo}
          alt="WayTaxi24"
          className="h-16 w-auto mb-2"
        />

        <p className="text-gray-300 text-[15px] leading-7">
          Your trusted outstation cab partner providing safe, affordable and
          comfortable taxi services across Tamil Nadu.
        </p>

        <div className="flex gap-3 mt-6">
          {[FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#ffbd00] hover:text-black hover:-translate-y-1"
              >
                <Icon />
              </a>
            )
          )}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-6">
          Quick Links
        </h3>

   <ul className="space-y-2.5">
  {links.map((link) => (
    <li key={link.name}>
      <Link
        to={link.path}
        className="block text-white no-underline transition-all duration-300 hover:text-[#ffbd00] hover:translate-x-2"
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-6">
          Services
        </h3>

        <ul className="space-y-3">
          {services.map((service) => (
            <li
              key={service}
              className="text-white cursor-pointer transition-all duration-300 hover:text-[#ffbd00] hover:translate-x-2"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-6">
          Contact Us
        </h3>

        <div className="space-y-5">

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-[#ffbd00] mt-1" />
            <span className="text-white">
              Chennai, Tamil Nadu
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#ffbd00]" />
            <a
              href="tel:+919876543210"
              className="text-white hover:text-[#ffbd00] transition"
            >
              +91 98765 43210
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#ffbd00]" />
            <a
              href="mailto:support@waytaxi24.com"
              className="text-white hover:text-[#ffbd00] transition"
            >
              support@waytaxi24.com
            </a>
          </div>

        </div>
      </div>

    </div>

    {/* Bottom Footer */}

    <div className="border-t border-white/10 mt-3 pt-2">

      <div className="flex flex-col md:flex-row justify-between items-center gap-3">

        <p className="text-gray-400 text-sm text-center md:text-left">
          © 2026 WayTaxi24. All Rights Reserved.
        </p>

        <p className="text-gray-400 text-sm text-center">
          Designed & Developed by{" "}
          <span className="text-[#ffbd00] font-semibold">
            Webniqo & MP
          </span>
        </p>

      </div>

    </div>

  </div>
</footer>
  );
}