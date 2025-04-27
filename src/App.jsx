import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Footer from "./components/Footer";
import Register from "./routes/Register";
import Booking from "./routes/Booking";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";
import LayoutWithNavbar from "./layouts/LayoutWithNavbar";
import LayoutWithSidebar from "./layouts/LayoutWithSidebar";
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <Routes>
          <Route element={<LayoutWithNavbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
          </Route>
          <Route element={<LayoutWithSidebar />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
