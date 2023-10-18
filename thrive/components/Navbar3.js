import React, { useEffect, useState } from 'react';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 px-[12.5%] z-50 ${
        scrolling ? 'bg-hero-gradient-start' : 'bg-transparent'
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center">
        <img
          src="../images/small_thrive_logo.webp"
          alt="Logo"
          className="w-[121] h-[42] mr-2"
        />
      </div>
      <div className="hidden md:flex">
        {/* Add your navigation links or content here */}
        <a href="/about" className="text-white ml-4 hover:text-hero-gradient-end transition-all duration-300 ease-in-out">About</a>
        <a href="/contact" className="text-white ml-4 hover:text-hero-gradient-end transition-all duration-300 ease-in-out">Contact</a>
        <a href="/" className="text-white ml-4 hover:text-hero-gradient-end transition-all duration-300 ease-in-out">Welcome</a>
        {/* <a href="#" className="text-white ml-4 hover:text-hero-gradient-end transition-all duration-300 ease-in-out">Join</a> */}
        <a href="/#" className="text-white ml-4 hover:text-hero-gradient-end transition-all duration-100 ease-in-out">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
