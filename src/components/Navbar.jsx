import React from "react";
import { BiLogoReact } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const NavLinks = () => {
    return (
      <>
        <a
          href="/#home"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
          onClick={toggleMenu}
        >
          Home
        </a>
        <a
          href="/#services"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
          onClick={toggleMenu}
        >
          Services
        </a>
        <a
          href="/#about"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
          onClick={toggleMenu}
        >
          About Us
        </a>
        <a
          href="/#contact"
          className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
          onClick={toggleMenu}
        >
          Contact
        </a>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-700 max-w-36 transition px-6 py-3 rounded-xl text-center block md:inline w-auto text-white"
          onClick={toggleMenu}
        >
          Login
        </Link>
      </>
    );
  };

  return (
    <nav className="bg bg-slate-800 shadow-lg flex w-full flex-wrap items-center justify-between py-3 px-32 fixed top-0 z-[20] left-0 ">
      <Link to="/" className="inline-block">
        <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
          <BiLogoReact className="text-6xl" />
          <span className="font-semibold text-2xl">ToothFairy</span>
        </span>
      </Link>
      <div className="hidden md:flex justify-end gap-5 text-black">
        <NavLinks />
      </div>

      <div className="md:hidden justify-end flex">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4 text-gray-600 font-semibold">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
