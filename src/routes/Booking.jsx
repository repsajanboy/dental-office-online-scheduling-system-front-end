import React from "react";
import { useState } from "react";

function Booking() {
  const [selectedDentist, setSelectedDentist] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const dentists = [
    { id: 1, name: "Dr. Sarah Johnson" },
    { id: 2, name: "Dr. Mark Wilson" },
    { id: 3, name: "Dr. Emily Davis" },
  ];

  const slots = [
    "9:00 AM",
    "10:30 AM",
    "12:00 PM",
    "2:00 PM",
    "3:30 PM",
    "5:00 PM",
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    if (selectedDentist && selectedSlot) {
      alert(`Appointment booked with ${selectedDentist} at ${selectedSlot}`);
      setSelectedDentist("");
      setSelectedSlot("");
    } else {
      alert("Please select both dentist and time slot.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Book Your Appointment
        </h1>

        <form onSubmit={handleBooking} className="space-y-6">
          {/* Select Dentist */}
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">
              Choose Dentist
            </label>
            <select
              value={selectedDentist}
              onChange={(e) => setSelectedDentist(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">-- Select a Dentist --</option>
              {dentists.map((dentist) => (
                <option key={dentist.id} value={dentist.name}>
                  {dentist.name}
                </option>
              ))}
            </select>
          </div>

          {/* Select Slot */}
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">
              Choose Time Slot
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {slots.map((slot, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`p-3 border rounded-lg text-center font-medium 
                      ${
                        selectedSlot === slot
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 hover:bg-blue-100"
                      }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Confirm Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
