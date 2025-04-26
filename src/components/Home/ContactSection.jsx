import React from "react";

function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-left text-gray-800 mb-12">
          Get in Touch
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          nesciunt, necessitatibus sit sapiente vel natus alias placeat,
          quibusdam quidem voluptatum dolor obcaecati velit nobis vero ex
          inventore ipsum. Doloremque, blanditiis.
        </p>
        {/* Grid Layout: Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Integration */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0861495582413!2d-122.41941508468123!3d37.774929779759664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cbcb1d69%3A0xb3b7df8e4e908e2b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1615864768962!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="h-[450px] w-full"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
