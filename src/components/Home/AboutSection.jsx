import React from "react";

function AboutSection() {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Orthodontist",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Dr. Michael Lee",
      role: "Pediatric Dentist",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Dr. Emma Watson",
      role: "Periodontist",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-left text-gray-800 mb-5">
          About ToothFairy Clinic
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-600 mb-4">
              At ToothFairy Dental Clinic, we believe that a healthy smile can
              change lives. For over 10 years, our dedicated team has provided
              compassionate and expert dental care in a friendly environment.
            </p>
            <p className="text-gray-600 mb-4">
              From routine checkups to advanced cosmetic procedures, we make
              sure every patient feels comfortable, informed, and cared for.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              earum, perferendis repellendus omnis odio dolores repudiandae
              maxime magnam eius, tempore dolorem. Nesciunt repudiandae beatae
              tempora quo enim ut cum voluptatum.
            </p>
          </div>

          <div>
            <img
              src="/images/dental-chair-other.jpg"
              alt="Dental Clinic"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Meet Our Expert Dentists
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                {member.name}
              </h4>
              <p className="text-blue-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
