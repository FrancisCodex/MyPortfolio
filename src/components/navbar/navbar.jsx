import React, { useState, useEffect } from 'react';
import Themechanger from '../themechanger';
import { useDropdownToggle } from './navhook';

export default function Navbar() {
  const { dropdownRef, isOpen, setIsOpen } = useDropdownToggle();
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };
  useEffect(() => { // Step 2: Add useEffect to monitor count
    if (count === 25) {
      alert("That's a lot of Coffee!");
    }
    if (count === 50) {
      alert("You should probably switch to water!");
    }
  }, [count]);

  return (
    <div className=''>
      <div className="navbar bg-base-100 fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown lg:hidden" ref={dropdownRef}>
            <div tabIndex={0} role="button" className="btn btn-ghost" onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            {isOpen && (
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-lg">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            )}
          </div>
          <a className="btn btn-ghost text-xl" href='/'>Francis<span className='dark:text-green-500 space-x-0 text-[#65c3c8]'>;</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold text-lg">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end bg-base-100">
          {/* <Themechanger /> */}
          <button className="btn btn-ghost" onClick={handleButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-coffee"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h18v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z"></path><path d="M6 1h12v4H6z"></path></svg>
          <i class="fa-solid fa-mug-hot"></i>
          <p className='text-sm md:text-lg'>Coffee {count}</p>
        </button>
        </div>
      </div>
    </div>
  );
}