import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Booking from "./routes/Booking";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";
import LayoutWithNavbar from "./layouts/LayoutWithNavbar";
import LayoutWithSidebar from "./layouts/LayoutWithSidebar";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import { AppointmentProvider } from "./contexts/AppointmentContext";
import { DentistProvider } from "./contexts/DentistContext";
import { useContext } from "react";

function AppContent() {
  const { token } = useContext(AuthContext);

  const routes = (
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
  );

  return token ? (
    <AppointmentProvider>
      <DentistProvider>{routes}</DentistProvider>
    </AppointmentProvider>
  ) : (
    routes
  );
}

function App() {
  return (
    <>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </>
  );
}

export default App;
