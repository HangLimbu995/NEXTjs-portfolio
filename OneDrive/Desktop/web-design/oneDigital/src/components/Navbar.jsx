import React, { useEffect, useState } from 'react'
import './style.css'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNav = () => setShowNav(!showNav);
    const toggleDropdown = () => setDropdown(!dropdown);

    return (
        <div className={`sticky top-0 left-0 right-0 transition-all duration-500 w-full py-1 ${scrolled ? 'bg-white/30 backdrop-blur-md' : 'bg-transparent'}`} style={{ zIndex: 9999 }}>
            <nav className="relative w-full flex justify-around items-center">
                <div>
                    <Link to="/" className='text-2xl text-white font-bold flex items-start z-[2000]'>Logo</Link>
                </div>
                <div>
                    <ul className='gap-7 font-semibold text-base capitalize hidden md:flex'>
                        <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                            <Link to='/about-us'>About Us</Link>
                        </li>
                        <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                            <Link to='/our-portfolio'>Our Portfolio</Link>
                        </li>
                        <li className="relative group hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                            <span className="flex items-center">
                                Our Services
                                <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </span>
                            <div className='absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-all duration-200 origin-top-left'>
                                <ul className="py-2">
                                    <li><Link to="/services/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Web Development</Link></li>
                                    <li><Link to="/services/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Digital Marketing</Link></li>
                                    <li><Link to="/services/ecommerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">E-commerce Solutions</Link></li>
                                    <li><Link to="/services/ui-ux" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">UI/UX Design</Link></li>
                                    <li><Link to="/services/graphic-design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Graphic Design</Link></li>
                                    <li><Link to="/services/animation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Animation Video</Link></li>
                                    <li><Link to="/services/marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">WhatsApp / Email Marketing</Link></li>
                                    <li><Link to="/services/seo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">SEO</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <Link to='/contact-us'>
                    <button className='py-2.5 px-3 rounded text-sm font-semibold text-white bg-gradient-to-b from-blue-600 to-blue-400 hidden md:flex hover:from-blue-700 hover:to-blue-500 transition-colors duration-300'>
                        Enquire Now
                    </button>
                </Link>
                <span className='flex md:hidden cursor-pointer' onClick={toggleNav}>
                    <FaPlus size={25} color='white' className={`transition-transform duration-300 z-[1000] ${showNav ? 'rotate-45' : 'rotate-0'}`} />
                </span>
                <div className={`fixed top-0 right-0 max-w-[300px] w-full h-screen bg-blue-700 z-30 transition-all duration-500 overflow-x-hidden ${showNav ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className='w-full text-white mt-24 ml-9 text-lg font-medium flex flex-col gap-3'>
                        <li className='w-4/5 border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer'><Link to='/'>Home</Link></li>
                        <li className='w-4/5 border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer'><Link to='/about-us'>About Us</Link></li>
                        <li className='w-4/5 border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer'><Link to='/our-portfolio'>Our Portfolio</Link></li>
                        <li className='relative w-4/5 border-b border-white pb-2 flex justify-between items-center'>
                            <span className='absolute right-1 top-1'>
                                <IoIosArrowForward className={`transition-transform duration-300 ${dropdown ? 'rotate-90' : 'rotate-0'}`} />
                            </span>
                            <details>
                                <summary className='list-none cursor-pointer' onClick={toggleDropdown}>Our Service</summary>
                                <div className='absolute w-full flex flex-col gap-1 mt-2 bg-blue-700 shadow-md py-2 px-4'>
                                    <ul className='flex flex-col gap-2'>
                                        <li className="border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer"><Link to="/services/web-development" className="block text-sm text-white">Web Development</Link></li>
                                        <li className="border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer"><Link to="/services/digital-marketing" className="block text-sm text-white">Digital Marketing</Link></li>
                                        <li className="border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer"><Link to="/services/ecommerce" className="block text-sm text-white">E-commerce Solutions</Link></li>
                                        <li className="border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer"><Link to="/services/ui-ux" className="block text-sm text-white">UI/UX Design</Link></li>
                                        <li className="border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer"><Link to="/services/graphic-design" className="block text-sm text-white">Graphic Design</Link></li>
                                        <li className="border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer"><Link to="/services/animation" className="block text-sm text-white">Animation Video</Link></li>
                                        <li className="border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer"><Link to="/services/marketing" className="block text-sm text-white">WhatsApp / Email Marketing</Link></li>
                                        <li className="border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer"><Link to="/services/seo" className="block text-sm text-white">SEO</Link></li>
                                    </ul>

                                </div>
                            </details>
                        </li>

                        <li className='w-4/5 border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer'><Link to='/contact-us'>Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar