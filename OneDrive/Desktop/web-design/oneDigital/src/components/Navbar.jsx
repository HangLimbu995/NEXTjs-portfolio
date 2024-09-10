import React, { useEffect, useState } from 'react'
import './style.css'
import { FaPlus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [sticked, setSticked] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 80) {
                setSticked(true);
            } else {
                setSticked(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`nav-container transition-all duration-5000 bg-transparent ${sticked ? 'bg-[rgba(255,255,255,0.3)] backdrop-blur-[20px]' : 'bg-transparent'} sticky top-0 left-0 right-0 w-full py-1 `} style={{ zIndex: 9 }}>
            <nav className="relative w-full flex justify-around items-center ">
                <div>
                    <h1 className='text-2xl text-white font-bold flex items-start !z-[2000]'>logo</h1>
                </div>
                <div>
                    <ul className=' gap-7 font-[600] text-[16px] capitalize hidden md:flex'>
                        <li>home</li>
                        <li>about us</li>
                        <li>our protfolio</li>
                        <li>our services</li>
                    </ul>
                </div>
                <button className='py-2.5 px-3 rounded text-[15px] font-[600] text-white bg-gradient-to-b from-[#1D68E1] to-[#649FFB] hidden md:flex'>Enquire Now
                </button>
                <span className='flex md:hidden' onClick={() => setShowNav(!showNav)}>
                    <FaPlus size={25} color='white' className={`transition-transform duration-300 !z-[1000] ${showNav ? 'rotate-45' : 'rotate-0'}`} />
                </span>
                <div className={`fixed right-0 max-w-[300px] w-full h-[100vh] top-9 bg-blue-700 z-30 transition-all duration-500 ${showNav ? 'translate-x-0' : 'translate-x-full'} `}>
                    <ul className='w-full text-white mt-[100px] ml-9 text-[19px] font-[500] flex flex-col gap-3'>
                        <li className='w-[80%] border-b border-white pb-2'>home</li>
                        <li className='relative w-[80%] border-b border-white pb-2 flex  justify-between items-center'>
                            <span className='absolute right-1 top-1'>
                                <IoIosArrowForward className={`transition-transform duration-300 ${dropdown ? 'rotate-90' : 'rotate-0'}`} />
                            </span>
                            <details>
                                <summary className='list-none' onClick={() => setDropdown(!dropdown)}> about us</summary>
                                <div className='absolute w-full flex flex-col gap-1 mt-2 bg-blue-700 shadow-md py-2 px-4'>
                                    <ul className='flex flex-col gap-2'>
                                        <li className="border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">About Our Team</li>
                                        <li className="border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">Our Mission</li>
                                        <li className="border-b border-white pb-2 hover:bg-blue-600 transition-colors duration-300 cursor-pointer">Company History</li>
                                    </ul>
                                </div>
                            </details>
                        </li>
                        <li className='w-[80%] border-b border-white pb-2'>our protfolio</li>
                        <li className='w-[80%] border-b border-white pb-2'>our services</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar