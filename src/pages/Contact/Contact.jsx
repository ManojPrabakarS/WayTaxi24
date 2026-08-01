import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
    const location = useLocation();
    const selectedCab = location.state?.cabType || "Swift Dzire";

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        pickup: "",
        drop: "",
        date: "",
        time: "",
        passengers: "1",
        cabType: selectedCab,
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `
*WAY TAXI 24 • CAB BOOKING REQUEST*

━━━━━━━━━━━━━━━━━━

*CUSTOMER DETAILS*
• Name      : ${formData.name}
• Phone     : ${formData.phone}

━━━━━━━━━━━━━━━━━━

*TRIP DETAILS*
• Pickup    : ${formData.pickup}
• Drop      : ${formData.drop}

• Date      : ${formData.date}
• Time      : ${formData.time}

━━━━━━━━━━━━━━━━━━

*BOOKING DETAILS*
• Cab Type      : ${formData.cabType}
• Passengers    : ${formData.passengers}

━━━━━━━━━━━━━━━━━━

*ADDITIONAL NOTES*
${formData.message || "None"}

━━━━━━━━━━━━━━━━━━

Please confirm the booking availability.

Thank you!
`;

        const phoneNumber = "919944817224"; // Replace with your WhatsApp number

        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <section className="min-h-screen bg-gray-100 py-12 px-4 mt-20">
            <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl">

                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Book Your Cab
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Fill in the details below to confirm your booking.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="grid gap-5 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="9876543210"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Pickup Location
                            </label>
                            <input
                                type="text"
                                name="pickup"
                                required
                                value={formData.pickup}
                                onChange={handleChange}
                                placeholder="Enter pickup location"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Drop Location
                            </label>
                            <input
                                type="text"
                                name="drop"
                                required
                                value={formData.drop}
                                onChange={handleChange}
                                placeholder="Enter destination"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Journey Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                required
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Pickup Time
                            </label>
                            <input
                                type="time"
                                name="time"
                                required
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Passengers
                            </label>
                            <select
                                name="passengers"
                                value={formData.passengers}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                            >
                                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                                    <option key={n}>{n}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Cab Type
                            </label>
                            <select
                                name="cabType"
                                value={formData.cabType}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                            >
                                <option>Sedan</option>
                                <option>SUV</option>
                                <option>Hatchback</option>
                                <option>Premium Sedan</option>
                                <option>Innova</option>
                                <option>Tempo Traveller</option>
                            </select>
                        </div>

                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold">
                            Additional Notes
                        </label>
                        <textarea
                            rows="5"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Any special instructions..."
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-yellow-400 py-4 text-lg font-bold text-black transition hover:bg-yellow-500"
                    >
                        Book via WhatsApp
                    </button>

                </form>

            </div>
        </section>
    );
};

export default Contact;