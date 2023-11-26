import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header flex justify-between items-center">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">MK</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          Projects
        </NavLink>
        <a href="https://gtvault-my.sharepoint.com/:w:/g/personal/mkhawaldeh3_gatech_edu/EVYBfKDYqMhPm-ElWW5Mlr0BHdgfAkpD-I6JmLAEAlkyBQ?e=u4GW8E"
         target="_blank" rel="noopener noreferrer" className="resume-link">
          My Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
