import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaTaxi } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient sticky-top shadow-lg border-bottom border-3 border-warning"
    >
      <div className="container py-2">
        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-2 text-warning text-uppercase fst-italic"
          to="/"
        >
          <motion.span
            whileHover={{ rotate: -15, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="d-inline-flex bg-warning bg-opacity-25 rounded-circle p-2 border border-warning"
          >
            <FaTaxi className="text-warning fs-4" />
          </motion.span>
          WayTaxi 24
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-2 align-items-center py-2">
            {navLinks.map((item, i) => {
              const isActive = location.pathname === item.path;
              const isHighlighted = hovered === i || (hovered === null && isActive);

              return (
                <motion.li
                  key={item.path}
                  className="nav-item position-relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Link
                    className={`nav-link position-relative px-3 py-2 fw-semibold text-uppercase small ${
                      isHighlighted ? "text-dark" : "text-light"
                    }`}
                    to={item.path}
                    style={{ zIndex: 2 }}
                  >
                    {item.name}
                  </Link>

                  {isHighlighted && (
                    <motion.div
                      layoutId="navPill"
                      className="position-absolute top-0 start-0 w-100 h-100 bg-warning rounded-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.li>
              );
            })}
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="badge rounded-pill bg-success bg-opacity-75 d-none d-lg-inline-flex align-items-center gap-1 px-3 py-2"
            >
              <span className="bg-white rounded-circle" style={{ width: 6, height: 6 }}></span>
              Online 24/7
            </motion.span>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              href="tel:+919876543210"
              className="btn btn-outline-warning rounded-pill fw-bold px-3 d-flex align-items-center gap-2 shadow-sm"
            >
              <FaPhoneAlt /> Call
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="btn btn-warning text-dark fw-bold rounded-pill px-3 d-flex align-items-center gap-2 shadow"
            >
              <FaWhatsapp className="fs-5" /> Book Now
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;