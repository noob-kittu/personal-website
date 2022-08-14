import React from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SiCodersrank } from "react-icons/si";
import Home from '../Pages/Home';
import About from '../Pages/About'

function Header() {
  return (
    <Router>

      <header className="text-gray-600 body-font bg-gray-100 px-2">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <SiCodersrank className='text-30 text-blue-500' />
            <span className="ml-3 text-xl">Vimal Sahu</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

            <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
            <Link to="/about" className="mr-5 hover:text-gray-900">About Me</Link>
          </nav>
          <a href="#footer"> <button className="inline-flex items-center bg-blue-500  text-white border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">Hire Me
            <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> </a>


        </div>
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>

  )
}

export default Header