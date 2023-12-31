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
        <a href="https://docs.google.com/document/d/1eldR38UqWWzdSREJf7xxVJcGRgYccR0t/edit?usp=sharing&ouid=106902061766095177899&rtpof=true&sd=true"
         target="_blank" rel="noopener noreferrer" className="resume-link">
          My Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
