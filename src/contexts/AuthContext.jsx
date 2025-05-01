import React, { createContext, useState, useEffect } from "react";
import setAuthToken from "../api/setAuthToken.js";
import { jwtDecode } from "jwt-decode";
import api from "../api/axios.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(() => (token ? jwtDecode(token) : null));
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
        console.log(email);
      const result = await api.post("/auth/login", { email, password });
      console.log(result);
      const { token } = result.data;
      setAuthToken(token);
      localStorage.setItem("token", token);
      setToken(token);
      setUser(jwtDecode(token));
      setError(null);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      return false;
    }
  };

  const register = async (userData) => {
    try {
      const res = await api.post("/auth/register", userData);
      const { token } = res.data;
      localStorage.setItem("token", token);
      setToken(token);
      setUser(jwtDecode(token));
      setAuthToken(token);
      setError(null);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setAuthToken(null);
  };

  useEffect(() => {;
    if (token) setAuthToken(token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, user, login, register, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
