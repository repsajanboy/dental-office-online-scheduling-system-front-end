import React from "react";
import { BiLogoReact } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg bg-slate-800 shadow-lg flex item-center justify-around py-3 px-32 fixed top-0 z-[20] left-0 w-full">
      <Link to="/">
        <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
          <BiLogoReact className="text-6xl" />
          <span className="font-semibold text-2xl">ToothFairy</span>
        </span>
      </Link>

      <div className="flex items-center gap-5 text-black">
        <a
          href="/#home"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Home
        </a>
        <a
          href="/#services"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Services
        </a>
        <a
          href="/#about"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          About Us
        </a>
        <a
          href="/#contact"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Contact
        </a>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-700 max-w-36 transition px-6 py-3 rounded-xl text-center block md:inline w-auto text-white"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
