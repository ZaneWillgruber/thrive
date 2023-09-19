import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

function Footer() {
  return (
    <footer className="bg-custom-gradient text-white">
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="mt-2">
              Have questions? Email us at <a href="mailto:contact@example.com" className="text-black">contact@example.com</a>
            </p>
          </div>
          <div className="flex space-x-4">
            {/* Social media icons */}
            <a href="#" className="text-white hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="text-white hover:text-blue-500"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-blue-500"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-blue-500"><FaLinkedin /></a>
          </div>
        </div>
        <hr className="my-4 border-t-2 white" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Thrive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
