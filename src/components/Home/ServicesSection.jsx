import React from "react";

function ServicesSection() {
  const services = [
    {
      title: "Teeth Cleaning",
      description:
        "Professional teeth cleaning to keep your smile healthy and bright.",
      icon: "🦷",
    },
    {
      title: "Dental Implants",
      description: "Restore your smile with high-quality dental implants.",
      icon: "🛠️",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Improve your smile with whitening, veneers, and more.",
      icon: "🎨",
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with modern braces or Invisalign.",
      icon: "🧩",
    },
  ];
  return (
    <section id="services" className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
          quibusdam ratione corporis, amet ex quaerat assumenda quia accusantium
          maiores cum quis, sit veritatis tenetur deserunt magni. Ut cupiditate
          architecto delectus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
