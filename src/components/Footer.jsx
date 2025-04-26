import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} ToothFairy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
