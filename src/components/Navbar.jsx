import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-screen">
      <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold">Contact list</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
