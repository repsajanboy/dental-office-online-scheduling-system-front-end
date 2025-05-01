import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppointmentContext } from "../contexts/AppointmentContext";

function formatAppointmentDate(dateStr) {
  if (!dateStr) return "";

  const date = new Date(dateStr);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${formattedDate}`;
}

function formatAppointmentTime(timeStr) {
  if (!timeStr) return "";

  const [hours, minutes, seconds] = timeStr.split(":");
  const date = new Date();
  date.setHours(Number(hours));
  date.setMinutes(Number(minutes));
  date.setSeconds(Number(seconds));

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${formattedTime}`;
}

function Dashboard() {
  const { appointments } = useContext(AppointmentContext);
  return (
    <>
      <div className="flex-1 p-8">
        <div className="flex justify-between py-4">
          <h1 className="text-3xl font-bold mb-6">Welcome, John Doe!</h1>
          <Link
            to="/booking"
            className="bg-blue-500 hover:bg-blue-700 transition px-6 rounded-xl text-center text-white flex justify-center items-center"
          >
            Book an appointment
          </Link>
        </div>

        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {appointments && appointments.length === 0 ? (
              <p className="text-center text-gray-500">
                You have no upcoming appointments.
              </p>
            ) : (
              <div>
                {appointments.map((appointment) => (
                  <div className="p-4 border rounded-md flex items-center justify-between mb-3">
                    <div key={appointment.id}>
                      <p className="font-semibold">
                        {appointment.dentist_name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {formatAppointmentDate(appointment.appointment_date)} at{" "}
                        {formatAppointmentTime(appointment.appointment_time)}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
                        Reschedule Appointment
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                        Cancel Appointment
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">All Appointments</h2>
          <table className="min-w-full text-left text-gray-600">
            <thead>
              <tr>
                <th className="py-2">Date</th>
                <th className="py-2">Dentist</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => {
                const { appointment_date, dentist_name, status } = appointment;
                return (
                  <tr className="border-t">
                    <td className="py-2">
                      {formatAppointmentDate(appointment_date)}
                    </td>
                    <td className="py-2">{dentist_name}</td>
                    <td className="py-2 text-green-500 font-semibold">
                      {status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
