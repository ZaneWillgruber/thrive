import React, { useState, useEffect } from 'react';

function Navbar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            }
            else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = `bg-transparent py-4 fixed top-0 w-full transition-all duration-300 z-50 ${
        scrolling ? 'bg-blue-900' : ''
      }`;

    return (
        <nav className={navbarClasses}>
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-2xl font-semibold"><img src='../images/small_thrive_logo.webp' /></a>
                <ul className="flex space-x-6">
                    <li><a href="/" className="text-white hover:text-blue-500">Home</a></li>
                    <li><a href="/about" className="text-white hover:text-blue-500">About</a></li>
                    <li><a href="/services" className="text-white hover:text-blue-500">Services</a></li>
                    <li><a href="/contact" className="text-white hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
