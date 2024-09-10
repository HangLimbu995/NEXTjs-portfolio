import React, { useEffect, useRef } from 'react'
import rocket from '../assets/rocket.png'
import Typed from 'typed.js'
import { FaWhatsapp } from "react-icons/fa";
import ImageImporter from '../helpers/ImageImporter'

const { google, slack, shopify, wordpress, fiveStar, target, support, growth, light, headerImg } = ImageImporter

const Home = () => {
    const el = useRef(null)

    useEffect(() => {
        var typed = new Typed(el.current, {
            strings: ['Trusted', 'Affordable', 'Reliable'],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
        })

        return () => {
            typed.destroy()
        }
    }, [])

    useEffect(() => {
        const movingItems = document.querySelectorAll('.moving-item');

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            movingItems.forEach((item) => {
                const rect = item.getBoundingClientRect();
                const itemCenterX = rect.left + rect.width / 2;
                const itemCenterY = rect.top + rect.height / 2;

                const deltaX = (clientX - centerX) / 50;
                const deltaY = (clientY - centerY) / 50;

                const offsetX = (itemCenterX - centerX) / 100;
                const offsetY = (itemCenterY - centerY) / 100;

                item.style.transform = `translate(${(deltaX + offsetX) * -1}px, ${(deltaY + offsetY) * -1}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='relative w-full h-full bg-red-900'>
            <header className='relative w-full min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 -mt-[75px] flex items-center justify-center'>
                <div className='content w-full lg:w-[90%] flex flex-wrap justify-center items-center py-7'>
                    <div className='text-content min-w-[250px] w-full lg:w-1/2 p-2 flex-1 flex flex-col items-start justify-center gap-5 mt-[55px]'>
                        <div className='relative w-[80%] max-w-md rounded-3xl shadow-[5px_5px_30px_rgba(255,192,203,0.4),-5px_-5px_30px_rgba(255,192,203,0.4)] py-1 px-1 flex items-center gap-5 bg-white transition-all duration-300 '>
                            <div className=' bg-[#1965DF] flex items-start text-center px-4 py-2 rounded-2xl '>
                                <h2 className='text-white text-[17px] leading-[17px] font-[400]'>Hi,</h2>
                            </div>
                            <h2 className='text-[17px] leading-[17px] font-[400]'>Welcome to WebStark</h2>
                        </div>
                        <div className='flex flex-col items-start gap-5 capitalize justify-center text-[54px] font-[600px] leading-[54px] tracking-tighter'>
                            <h2 className='flex flex-wrap items-center text-3xl sm:text-4xl md:text-5xl lg:text-[54px]'>
                                Lets grow your brand
                                <img src={rocket} className='w-[30px] sm:w-[35px] md:w-[40px] lg:w-[45px] ml-2' alt="Rocket" />
                            </h2>
                            <span className='text-2xl sm:text-3xl md:text-4xl lg:text-[54px] leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[64.8px] font-[600] text-blue-600 tracking-tight animate-pulse-and-disappear'>To the Next Level</span>
                            <div className='text-base sm:text-lg md:text-xl lg:text-[21px] font-[600] leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[27.6px] flex flex-wrap gap-1 sm:gap-2 md:gap-3'>
                                <span className='flex tracking-tighter text-[#5A00C9]'>Nepal's Most</span>
                                <span ref={el} className='flex tracking-tighter text-[#0048ff]'></span>
                                <span className='flex tracking-tighter text-[#5A00C9]'>Web Development Services</span>
                            </div>
                            <p className='text-[14px] sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[20px] md:leading-[22px] tracking-tighter text-[#535353] max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto sm:mx-0'>
                                Unlock your brand's full potential with WebStark's cutting-edge digital strategies and innovative design. Partner with us to create a thriving online future for your business.
                            </p>
                        </div>
                        <div className='flex gap-5 text-white mt-3'>
                            <button className='py-1 px-3 bg-[#236ADD] rounded'>Call Now</button>
                            <button className='py-2 px-3 bg-[#32AA42] rounded flex items-center gap-2'><FaWhatsapp color='white' /> WhatsApp</button>
                        </div>
                        <div className='flex gap-5'>
                            <h2>Trusted by</h2>
                            <div className='flex gap-1'>
                                <a href='#' className='p-1 flex items-center justify-center bg-white rounded-full'>
                                    <img src={google} alt="Google logo" className='w-[15px]' />
                                </a>
                                <a href='#' className='p-1 flex items-center justify-center bg-white rounded-full'>
                                    <img src={wordpress} alt="Google logo" className='w-[15px]' />
                                </a>
                                <a href='#' className='p-1 flex items-center justify-center bg-white rounded-full'>
                                    <img src={shopify} alt="Google logo" className='w-[15px]' />
                                </a>
                                <a href='#' className='p-1 flex items-center justify-center bg-white rounded-full'>
                                    <img src={slack} alt="Google logo" className='w-[15px]' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='min-w-[250px] w-full lg:w-1/2 p-2 flex-1 flex justify-center items-center mt-9'>

                        <div className='moving-context relative w-[70%] md:w-[30vw] aspect-square border-2 border-[#02ABF7] rounded-full flex justify-center items-center'>
                            <div className='relative w-[70%] aspect-square bg-gradient-to-br from-blue-200 via-blue-500 to-blue-900 rounded-full flex justify-center items-center overflow-hidden shadow-[0_0_40px_20px_#8EDAF8]'>
                                <img src={headerImg} className='absolute w-[300px]' />
                            </div>
                            <div>
                                <div className='moving-item absolute top-[5%] left-[5%] bg-white bg-opacity-70 shadow-lg shadow-blue-200 rounded-3xl p-2 '>
                                    <img src={light} alt="Light bulb" className='w-[40px] md:w-[35px]' />
                                </div>
                                <div className='moving-item absolute top-[10%] right-[-5%] px-2 bg-white bg-opacity-70 shadow-lg shadow-blue-200 rounded-3xl '>
                                    <img src={fiveStar} alt="Five star rating" className='w-[70px] md:w-[80px]' />
                                </div>
                                <div className='moving-item absolute top-[45%] right-[-10%] p-3 bg-white bg-opacity-70 shadow-lg shadow-blue-200 rounded-full '>
                                    <img src={wordpress} alt="WordPress logo" className='w-[30px]' />
                                </div>
                                <div className='moving-item absolute right-[-5%] bottom-[5%] '>
                                    <img src={target} alt="Target" className='w-[120px] md:w-[130px]' />
                                </div>
                                <div className='moving-item absolute top-[38%] left-[-10%] p-3 bg-white bg-opacity-70 shadow-lg shadow-blue-200 rounded-full '>
                                    <img src={growth} alt="Growth chart" className='w-[40px]' />
                                </div>
                                <div className='moving-item absolute bottom-[5%] left-[5%] py-2 px-1 bg-white bg-opacity-70 shadow-lg shadow-blue-200 rounded-full sm:py-1.5 sm:px-0.5 md:py-2 md:px-1 lg:py-3 lg:px-2 '>
                                    <img src={support} alt="Customer support" className='w-[6vw] md:w-[5vw]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home
