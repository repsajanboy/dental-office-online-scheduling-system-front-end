import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Footer from "./components/Footer";
import Register from "./routes/Register";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
