import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../api/axios";

export const DentistContext = createContext();

export const DentistProvider = ({ children }) => {
  const [dentists, setDentists] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDentists = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/dentist`);
      setDentists(res.data);
    } catch (err) {
      console.error("Failed to fetch dentists:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDentists();
  }, []);

  return (
    <DentistContext.Provider value={{ dentists, loading, fetchDentists }}>
      {children}
    </DentistContext.Provider>
  );
};
