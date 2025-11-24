import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 p-4 text-amber-50">
        <div className="container mx-auto flex justify-between items-center">
          
          <div className='font-extrabold text-xl'> 
            apna Local Mart
          </div>
          
          <div className="hidden md:flex flex space-x-6 items-center">
            <a href="#" className="hover:text-amber-400 transition duration-150">Home</a>
            <a href="#" className="hover:text-amber-400 transition duration-150">Products</a>
            <a href="#" className="hover:text-amber-400 transition duration-150">Categories</a>
            <a href="#" className="hover:text-amber-400 transition duration-150">Contact</a> 
          </div> 
          
          <div className='font-extrabold text-xl invisible hidden md:block'> 
            apna Local Mart 
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
            </svg>
          </button>

        </div> 
        
        <div className={`md:hidden ${isOpen ? 'flex' : 'hidden'} flex-col items-center pt-2 pb-3 space-y-2`}>
            <a href="#" className="block hover:bg-gray-700 w-full text-center py-2 rounded-md">Home</a>
            <a href="#" className="block hover:bg-gray-700 w-full text-center py-2 rounded-md">Products</a>
            <a href="#" className="block hover:bg-gray-700 w-full text-center py-2 rounded-md">Categories</a>
            <a href="#" className="block hover:bg-gray-700 w-full text-center py-2 rounded-md">Contact</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;