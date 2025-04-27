import React from "react";
import { FiPhone } from "react-icons/fi";

function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto gap-4">
      <div className="md:w-1/2 text-center md:text-left space-y-6 flex flex-col justify-evenly gap-20">
        <h1 className="text-6xl font-bold text-left mt-20">
          Brighten Your Smile, Brighten Your Day.
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, amet
          fugit? Amet expedita possimus, laboriosam maiores quia dignissimos
          ullam at labore voluptatem quidem laudantium, temporibus optio
          repellat fuga, qui omnis.
        </p>
        <div className="flex flex-col items-center md:flex-row gap-5">
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Book an appointment
            </button>
          </div>
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">24H Emergency Call</p>
                <p className="text-lg font-semibold text-gray-800">
                  +1 (800) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 mb-10">
        <img
          src="/images/photo-smiling-dentist-hero-section.jpg"
          alt="Smiling Dentist"
          className="w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}

export default HeroSection;
