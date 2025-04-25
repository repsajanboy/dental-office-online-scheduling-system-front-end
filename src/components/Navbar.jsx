import React from "react";
import { BiLogoReact } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg bg-slate-800 shadow-lg flex item-center justify-around py-3 px-32 fixed top-0 left-0 w-full">
      <Link to="/">
        <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
          <BiLogoReact className="text-6xl" />
          <span className="font-semibold text-2xl">Tooth Fairy</span>
        </span>
      </Link>

      <div className="flex items-center gap-5 text-black">
        <Link
          to="/"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          About Us
        </Link>
        <Link
          to="/services"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Services
        </Link>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-700 max-w-36 transition px-6 py-3 rounded-full text-center block md:inline w-auto text-white"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
