import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Company */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="fw-bold text-warning">WayTaxi24</h4>
            <p className="text-white-50">
              Your trusted cab booking partner for local, outstation,
              airport transfers, and corporate travel. Safe rides,
              affordable prices, available 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none text-light">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-decoration-none text-light">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none text-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-warning">Our Services</h5>
            <ul className="list-unstyled">
              <li>Local Taxi</li>
              <li>Airport Pickup & Drop</li>
              <li>Outstation Trips</li>
              <li>Corporate Cab</li>
              <li>One Way Taxi</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-warning">Contact Us</h5>

            <p className="mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i>
              Chennai, Tamil Nadu
            </p>

            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              +91 98765 43210
            </p>

            <p className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              support@waytaxi24.com
            </p>

            <div className="mt-3">
              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="text-light me-3 fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#" className="text-light fs-5">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center text-white-50">
          © {new Date().getFullYear()} <strong>WayTaxi24</strong>. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;