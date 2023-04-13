import React from 'react'

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex justify-center text-lg lg:flex-grow">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="/#resume" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Resume/CV
          </a>
          <a href="/#portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Portfolio
          </a>
          <a href="/#travel" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Travels 
          </a>
        </div>
      </div>
    </nav>
  );
}
