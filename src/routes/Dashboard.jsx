import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
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
            <div className="p-4 border rounded-md flex items-center justify-between">
              <div>
                <p className="font-semibold">Dr. Emily Johnson</p>
                <p className="text-gray-600 text-sm">Teeth Cleaning</p>
                <p className="text-gray-500 text-sm">May 3, 2025 | 2:00 PM</p>
              </div>
              <div className="flex flex-col gap-4">
                <buton className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
                  Reschedule Appointment
                </buton>
                <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                  Cancel Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Past Appointments */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Past Appointments</h2>
          <table className="min-w-full text-left text-gray-600">
            <thead>
              <tr>
                <th className="py-2">Date</th>
                <th className="py-2">Dentist</th>
                <th className="py-2">Service</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2">Apr 5, 2025</td>
                <td className="py-2">Dr. Jane Smith</td>
                <td className="py-2">Cavity Filling</td>
                <td className="py-2 text-green-500 font-semibold">Completed</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">Mar 20, 2025</td>
                <td className="py-2">Dr. John Doe</td>
                <td className="py-2">Whitening</td>
                <td className="py-2 text-green-500 font-semibold">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
