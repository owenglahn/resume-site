import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  let navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex justify-center text-sm lg:flex-grow">
          <a href="/resume" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Resume
          </a>
          <a href="/portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Portfolio
          </a>
          <a href="/about_me" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            About Me
          </a>
        </div>
      </div>
    </nav>
  );
}
