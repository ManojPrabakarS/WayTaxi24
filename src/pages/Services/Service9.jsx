import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import {
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import ooty from "../../assets/ooty.png";
import kodaikanal from "../../assets/kodaikanal.jpg";
import pondicherry from "../../assets/pondycherri.png";
import mamallapuram from "../../assets/mamallapuram.png";

const places = [
  {
    title: "Ooty",
    image: ooty,
  },
  {
    title: "Kodaikanal",
    image: kodaikanal,
  },
  {
    title: "Pondicherry",
    image: pondicherry,
  },
  {
    title: "Mamallapuram",
    image: mamallapuram,
  },
];

export default function Service9() {

  useEffect(() => {

    anime({
      targets: ".destination-title",
      opacity: [0,1],
      translateY: [60,0],
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".destination-subtitle",
      opacity: [0,1],
      translateY: [30,0],
      delay:200,
      duration:1000,
      easing:"easeOutExpo",
    });

    anime({
      targets: ".destination-card",
      opacity:[0,1],
      translateY:[100,0],
      scale:[0.9,1],
      delay:anime.stagger(180),
      duration:1200,
      easing:"easeOutExpo",
    });

    anime({
      targets: ".floating-car",
      translateX:[-20,20],
      direction:"alternate",
      loop:true,
      easing:"easeInOutSine",
      duration:3000,
    });

  },[]);

  return (

    <section className="relative overflow-hidden bg-[#071016] py-24">

      {/* Floating Car */}

      <div className="floating-car absolute right-10 top-16 hidden lg:block">

        🚖

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center">

          <span className="destination-subtitle uppercase tracking-[4px] text-[#FBBF24] font-semibold opacity-0">

            Popular Routes

          </span>

          <h2 className="destination-title mt-5 text-5xl font-bold text-white opacity-0">

            Explore South India
            <br />

            With WayTaxi24

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-300">

            Comfortable rides to famous tourist destinations,
            pilgrimage centres and hill stations across
            South India.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {places.map((item,index)=>(

            <div
              key={index}
              className="destination-card group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 opacity-0 hover:border-[#FBBF24] hover:-translate-y-4 transition-all duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

             <div className="p-6">

  <div className="flex items-center gap-2 text-[#FBBF24]">

    <FaMapMarkerAlt className="text-lg" />

    <span className="font-medium">
      {item.title}
    </span>

  </div>

  <p className="mt-4 text-gray-300 leading-7">
    Enjoy a safe, comfortable and affordable taxi ride to
    {` ${item.title}`} with professional drivers and
    well-maintained vehicles.
  </p>

  

</div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}