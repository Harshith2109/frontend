import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {

  return (

    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="">

          <span className="ml-3 text-xl"><b>Harshith</b></span>
        </Link>
        <nav className="md:mr-auto md:ml-6  md:py-1 md:pl-4 md:border-l  md:border-gray-400	flex flex-wrap items-center text-base justify-between">
          <Link className="mr-5 hover:text-gray-900" to="">Home</Link>
          <Link className="mr-5 hover:text-gray-900" to="about">About</Link>
          <Link className="mr-5 hover:text-gray-900" to="contact">Contact</Link>

        </nav>

      </div>
    </header>
  );
}