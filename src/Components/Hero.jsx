import React, { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    cabType: "Sedan",
  });

  // Replace with your WhatsApp number
  const whatsappNumber = "9894170320";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, pickup, drop, date, time, cabType } = formData;

    if (!name || !phone || !pickup || !drop || !date || !time) {
      alert("Please fill all fields.");
      return;
    }

    const message = `🚕CAB BOOKING REQUEST

 🧑🏼‍💼Name: ${name}
 📞Phone: ${phone}
 📍Pickup: ${pickup}
 🎯Drop: ${drop}

 🗓️Date: ${date}
 ⏰Time: ${time}

 🚖Cab Type: ${cabType}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* Left Side */}
          <div className="col-lg-6 text-white">
            <span className="badge bg-warning text-dark mb-3 fs-6">
              Trusted Cab Service
            </span>

            <h1 className="display-4 fw-bold mb-3">
              Book Your Ride in Seconds
            </h1>

            <p className="lead text-light">
              Safe, affordable, and reliable cab service for Local, Airport,
              and Outstation trips. Book instantly through WhatsApp.
            </p>

            <div className="mt-4">
              <button className="btn btn-warning btn-lg me-3">
                Book Now
              </button>

              <button className="btn btn-outline-light btn-lg">
                Contact Us
              </button>
            </div>
          </div>

          {/* Booking Form */}
          <div className="col-lg-5 offset-lg-1">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">

                <h3 className="fw-bold text-center mb-4">
                  Book Your Cab
                </h3>

                <form onSubmit={handleSubmit}>

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <input
                    type="tel"
                    className="form-control mb-3"
                    placeholder="Mobile Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Pickup Location"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Drop Location"
                    name="drop"
                    value={formData.drop}
                    onChange={handleChange}
                  />

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <input
                        type="time"
                        className="form-control"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <select
                    className="form-select mb-4"
                    name="cabType"
                    value={formData.cabType}
                    onChange={handleChange}
                  >
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>Mini</option>
                    <option>Luxury</option>
                  </select>

                  <button
                    type="submit"
                    className="btn btn-success w-100 py-3 fw-bold"
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                    Book via WhatsApp
                  </button>

                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;