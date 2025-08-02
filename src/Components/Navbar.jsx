import React from 'react';

function Navbar(){
    return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">Mohammad Ishaan</h1>
      <nav className="hidden md:flex gap-6">
        <a href="#hero" className="hover:text-blue-600">Home</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#resume" className="hover:text-blue-600">Resume</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
