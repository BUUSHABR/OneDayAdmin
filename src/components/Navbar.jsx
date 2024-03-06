import React, { useState, useEffect } from 'react';
import { ReactComponent as OnedayIcon } from '../assets/icons/OneDayBlack.svg';

function Navbar() {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 100) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
    <div className={`bg-black fixed top-0 left-0 w-full flex justify-between items-center py-2 px-5 text-white ${!scrolled?'shadow-lg shadow-int-primary':''} transition-transform duration-500 ease-in-out z-50 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className='cursor-pointer'>
        <OnedayIcon className='w-25 h-25' />
      </div>
      <div className="flex space-x-4">
        <p className='cursor-pointer hover:text-int-primary'>Home</p>
        <p className='cursor-pointer hover:text-int-primary'>Menu</p>
        <p className='cursor-pointer hover:text-int-primary'>Services</p>
        <p className='cursor-pointer hover:text-int-primary'>Contact Us</p>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
