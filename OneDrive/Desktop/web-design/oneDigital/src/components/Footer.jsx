import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">WebCraft Agency</h3>
            <p className="text-sm">Crafting digital experiences <br /> that inspire and engage.</p>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Web Design</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Web Development</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">SEO Optimization</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Digital Marketing</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">123 Web Street, Digital City</p>
            <p className="text-sm mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm mb-2">Email: info@webcraftagency.com</p>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="text-sm">
              <li className="mb-2"><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li className="mb-2"><Link to="/about-us" className="hover:text-gray-300">About</Link></li>
              <li className="mb-2"><Link to="/our-services" className="hover:text-gray-300">Services</Link></li>
              <li className="mb-2"><Link to="/our-portfolio" className="hover:text-gray-300">Our Portfolio</Link></li>
              <li className="mb-2"><Link to="/contact-us" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300"><FaFacebookF /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>&copy; 2023 WebCraft Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
