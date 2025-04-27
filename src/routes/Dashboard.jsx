import React from "react";
import { useState } from "react";

function Dashboard() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      dentist: "Dr. Sarah Johnson",
      date: "2024-05-10",
      time: "10:30 AM",
    },
    {
      id: 2,
      dentist: "Dr. Mark Wilson",
      date: "2024-05-15",
      time: "2:00 PM",
    },
  ]);

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const handleCancel = (id) => {
    setAppointments((prev) => prev.filter((appt) => appt.id !== id));
    setShowCancelModal(false);
  };

  const handleRescheduleSubmit = () => {
    if (newDate && newTime) {
      setAppointments((prev) =>
        prev.map((appt) =>
          appt.id === selectedAppointment.id
            ? { ...appt, date: newDate, time: newTime }
            : appt
        )
      );
      setShowRescheduleModal(false);
      setNewDate("");
      setNewTime("");
      alert("Appointment rescheduled successfully!");
    } else {
      alert("Please select both a new date and time.");
    }
  };

  const openCancelModal = (appointment) => {
    setSelectedAppointment(appointment);
    setShowCancelModal(true);
  };

  const openRescheduleModal = (appointment) => {
    setSelectedAppointment(appointment);
    setShowRescheduleModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          My Appointments
        </h1>

        {appointments.length === 0 ? (
          <p className="text-center text-gray-500">
            You have no upcoming appointments.
          </p>
        ) : (
          <div className="grid gap-6">
            {appointments.map((appt) => (
              <div
                key={appt.id}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {appt.dentist}
                  </h2>
                  <p className="text-gray-500 mt-2">
                    {appt.date} at {appt.time}
                  </p>
                </div>

                <div className="flex gap-4 mt-4 md:mt-0">
                  <button
                    onClick={() => openRescheduleModal(appt)}
                    className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
                  >
                    Reschedule
                  </button>

                  <button
                    onClick={() => openCancelModal(appt)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cancel Modal */}
      {showCancelModal && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-sm w-full text-center shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Cancel Appointment?
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel this appointment?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowCancelModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                No
              </button>
              <button
                onClick={() => handleCancel(selectedAppointment.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reschedule Modal */}
      {showRescheduleModal && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full text-center shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Reschedule Appointment
            </h2>
            <div className="space-y-4">
              <div className="text-left">
                <label className="block text-gray-700 mb-1 font-semibold">
                  New Date
                </label>
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="text-left">
                <label className="block text-gray-700 mb-1 font-semibold">
                  New Time
                </label>
                <input
                  type="time"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setShowRescheduleModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleRescheduleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Dashboard;
