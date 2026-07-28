import React, { useState } from "react";

/**
 * HeroSection — "Night Ride" cab booking hero
 *
 * Design concept: the booking form is styled as a taxi meter dashboard —
 * a glowing rooftop light badge, a live "route" connector line running
 * between pickup and drop (like a meter tracing a fare), and a
 * segmented cab-class selector instead of a plain dropdown.
 *
 * Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (meter/utility).
 * Requires Tailwind CSS in the host project. No external Tailwind config
 * changes needed — all custom colors are applied via arbitrary values.
 */

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

  const cabTypes = [
    { label: "Sedan", icon: "🚗" },
    { label: "SUV", icon: "🚙" },
    { label: "Mini", icon: "🚕" },
    { label: "Luxury", icon: "🏎️" },
  ];

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

    const message = `CAB BOOKING REQUEST

Name: ${name}
Phone: ${phone}
Pickup: ${pickup}
Drop: ${drop}

Date: ${date}
Time: ${time}

Cab Type: ${cabType}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0B1120] py-20 lg:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-meter { font-family: 'JetBrains Mono', monospace; }
        @keyframes pulseGlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes dashMove {
          to { stroke-dashoffset: -16; }
        }
        .rooftop-glow { animation: pulseGlow 2.4s ease-in-out infinite; }
        .available-dot { animation: pulseGlow 1.6s ease-in-out infinite; }
        .route-dash { stroke-dasharray: 4 4; animation: dashMove 1s linear infinite; }
      `}</style>

      {/* background: faint road-grid + glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#F4F6FB 1px, transparent 1px), linear-gradient(90deg, #F4F6FB 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#FFC93C]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FF9B42]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* Left: pitch */}
          <div className="lg:col-span-6 font-body">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFC93C]/30 bg-[#FFC93C]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#34D399] available-dot" />
              <span className="font-meter text-xs tracking-widest text-[#FFC93C] uppercase">
                Online now · Cabs nearby
              </span>
            </div>

            <h1 className="font-display mt-6 text-5xl font-bold leading-[1.05] text-[#F4F6FB] sm:text-6xl">
              Flag a ride,
              <br />
              not a hassle.
              <span className="text-[#FFC93C]">.</span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#8892A6]">
              Local, airport, and outstation trips — booked in under a
              minute, confirmed straight to your WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-xl bg-[#FFC93C] px-7 py-3.5 font-display text-sm font-bold text-[#0B1120] shadow-[0_0_0_1px_rgba(255,201,60,0.4)] transition hover:bg-[#ffd766]">
                Book Now
              </button>
              <button className="rounded-xl border border-white/15 px-7 py-3.5 font-display text-sm font-bold text-[#F4F6FB] transition hover:border-white/30 hover:bg-white/5">
                Contact Us
              </button>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <dt className="font-meter text-2xl font-medium text-[#F4F6FB]">12k+</dt>
                <dd className="mt-1 text-xs text-[#8892A6]">Rides completed</dd>
              </div>
              <div className="border-l border-white/10 pl-4">
                <dt className="font-meter text-2xl font-medium text-[#F4F6FB]">4.9<span className="text-[#FFC93C]">★</span></dt>
                <dd className="mt-1 text-xs text-[#8892A6]">Rider rating</dd>
              </div>
              <div className="border-l border-white/10 pl-4">
                <dt className="font-meter text-2xl font-medium text-[#F4F6FB]">24/7</dt>
                <dd className="mt-1 text-xs text-[#8892A6]">Always available</dd>
              </div>
            </dl>
          </div>

          {/* Right: meter-styled booking card */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md">
              {/* rooftop light badge */}
              <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2">
                <div className="rooftop-glow rounded-t-lg rounded-b-sm bg-[#FFC93C] px-5 py-1.5 shadow-[0_0_24px_6px_rgba(255,201,60,0.35)]">
                  <span className="font-display text-xs font-bold tracking-[0.3em] text-[#0B1120]">
                    TAXI
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#131B2E] p-6 pt-9 shadow-2xl sm:p-8 sm:pt-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="font-display text-xl font-bold text-[#F4F6FB]">
                    Book your cab
                  </h3>
                  <div className="flex items-center gap-1.5 rounded-full bg-[#34D399]/10 px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#34D399] available-dot" />
                    <span className="font-meter text-[10px] uppercase tracking-wider text-[#34D399]">
                      Available
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4 font-body">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-sm text-[#F4F6FB] placeholder-[#5A6478] outline-none transition focus:border-[#FFC93C]/60 focus:ring-1 focus:ring-[#FFC93C]/40"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-sm text-[#F4F6FB] placeholder-[#5A6478] outline-none transition focus:border-[#FFC93C]/60 focus:ring-1 focus:ring-[#FFC93C]/40"
                    />
                  </div>

                  {/* Route: pickup -> drop with animated connector */}
                  <div className="relative pl-8">
                    <svg
                      className="absolute left-[9px] top-3 h-[calc(100%-24px)] w-px"
                      width="2"
                      height="100%"
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="100%"
                        stroke="#FFC93C"
                        strokeWidth="2"
                        className="route-dash"
                      />
                    </svg>
                    <span className="absolute left-0 top-3 h-[9px] w-[9px] rounded-full border-2 border-[#FFC93C] bg-[#131B2E]" />
                    <span className="absolute -bottom-1 left-[1px] h-[9px] w-[9px] rounded-full bg-[#FF9B42]" />

                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Pickup location"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-sm text-[#F4F6FB] placeholder-[#5A6478] outline-none transition focus:border-[#FFC93C]/60 focus:ring-1 focus:ring-[#FFC93C]/40"
                      />
                      <input
                        type="text"
                        placeholder="Drop location"
                        name="drop"
                        value={formData.drop}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-sm text-[#F4F6FB] placeholder-[#5A6478] outline-none transition focus:border-[#FF9B42]/60 focus:ring-1 focus:ring-[#FF9B42]/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-meter mb-1.5 block text-[10px] uppercase tracking-wider text-[#8892A6]">
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-sm text-[#F4F6FB] outline-none transition focus:border-[#FFC93C]/60 focus:ring-1 focus:ring-[#FFC93C]/40 [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label className="font-meter mb-1.5 block text-[10px] uppercase tracking-wider text-[#8892A6]">
                        Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-sm text-[#F4F6FB] outline-none transition focus:border-[#FFC93C]/60 focus:ring-1 focus:ring-[#FFC93C]/40 [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  {/* Cab class — segmented pill selector */}
                  <div>
                    <label className="font-meter mb-1.5 block text-[10px] uppercase tracking-wider text-[#8892A6]">
                      Cab type
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {cabTypes.map(({ label, icon }) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, cabType: label })
                          }
                          className={`rounded-xl border px-2 py-2.5 text-center transition ${
                            formData.cabType === label
                              ? "border-[#FFC93C] bg-[#FFC93C]/10"
                              : "border-white/10 bg-[#0B1120] hover:border-white/25"
                          }`}
                        >
                          <div className="text-base leading-none">{icon}</div>
                          <div
                            className={`mt-1 text-[11px] font-medium ${
                              formData.cabType === label
                                ? "text-[#FFC93C]"
                                : "text-[#8892A6]"
                            }`}
                          >
                            {label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#34D399] py-3.5 font-display text-sm font-bold text-[#0B1120] shadow-[0_0_0_1px_rgba(52,211,153,0.4)] transition hover:bg-[#4ee3ac]"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.46 3.486 1.334 5.003L2 22l5.116-1.32a9.965 9.965 0 004.888 1.247h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.18-2.929-7.07a9.929 9.929 0 00-7.072-2.857zm5.848 15.845a8.34 8.34 0 01-4.235 1.152h-.003a8.335 8.335 0 01-4.256-1.164l-.305-.181-3.037.784.811-2.96-.198-.304a8.312 8.312 0 01-1.279-4.44c0-4.606 3.75-8.357 8.365-8.357a8.323 8.323 0 018.354 8.357 8.335 8.335 0 01-3.217 6.113z" />
                    </svg>
                    Book via WhatsApp
                  </button>

                  <p className="text-center text-[11px] text-[#5A6478]">
                    Your fare estimate is confirmed once a driver accepts.
                  </p>
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