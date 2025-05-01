import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "./AuthContext";

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      console.log(user);
      const res = await api.get(`/appointments/${user.id}`);
      setAppointments(res.data);
    } catch (err) {
      console.error("Failed to fetch appointments:", err);
    }
  };

  const bookAppointment = async (
    dentist_id,
    appointment_date,
    appointment_time,
    status
  ) => {
    console.log(dentist_id, appointment_date, appointment_time);
    try {
      const res = await api.post(`/appointments`, {
        dentist_id,
        appointment_date,
        appointment_time,
        status
      });

      await fetchAppointments(); // refresh
      return res.data;
    } catch (err) {
        console.log(err.message);
      throw new Error(err.response?.data?.message || "Booking failed");
    }
  };

  const cancelAppointment = async (id) => {
    try {
      await api.delete(`${API_BASE_URL}/api/appointments/${id}`);
      await fetchAppointments(); // refresh
    } catch (err) {
      console.error("Failed to cancel:", err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        fetchAppointments,
        bookAppointment,
        cancelAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
