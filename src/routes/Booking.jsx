import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const dentists = [
  { id: 1, name: "Dr. John Doe", specialization: "Orthodontist" },
  { id: 2, name: "Dr. Jane Smith", specialization: "Pediatric Dentist" },
  { id: 3, name: "Dr. Emily Johnson", specialization: "Cosmetic Dentist" },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const bookedSlots = {
  "2024-05-01": ["9:00 AM", "11:00 AM"],
  "2024-05-02": ["1:00 PM", "4:00 PM"],
  // Add more booked slots by date
};

function Booking() {
  const [selectedDentist, setSelectedDentist] = useState(dentists[0]);
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time slot.");
      return;
    }
    alert(
      `Appointment booked with ${selectedDentist.name} on ${selectedDate} at ${selectedTime}`
    );
  };

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const isBooked = (time) => {
    const formattedDate = formatDate(date);
    return bookedSlots[formattedDate]?.includes(time);
  };

  return (
    <div className="flex items-start justify-center">
      <div className="w-full p-8">
        <h1 className="text-3xl font-bold text-left mb-8">
          Book an Appointment
        </h1>
        <div className="bg-white shadow-lg rounded-lg px-4 py-6">
          <h2 className="text-2xl font-semibold mb-2">Select Dentist</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {dentists.map((dentist) => (
              <div
                key={dentist.id}
                onClick={() => setSelectedDentist(dentist)}
                className={`border rounded-lg p-6 cursor-pointer hover:shadow-md transition ${
                  selectedDentist?.id === dentist.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <h2 className="text-xl font-semibold">{dentist.name}</h2>
                <p className="text-gray-500">{dentist.specialization}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            Select Date & Time Slot
          </h2>
          <div className="flex flex-col items-start md:flex-row gap-5 mb-8">
            <div className="w-full max-w-md">
              <Calendar
                onChange={setDate}
                value={date}
                tileClassName={({ date, view }) => {
                  if (view === "month") {
                    const formatted = formatDate(date);
                    return bookedSlots[formatted] ? "bg-red-100" : "";
                  }
                }}
                className="border-0 text-center rounded-lg"
              />
            </div>

            <div>
              <div className="flex flex-wrap gap-4">
                {timeSlots.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedTime === time
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700"
                    } hover:bg-blue-100`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={handleBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
