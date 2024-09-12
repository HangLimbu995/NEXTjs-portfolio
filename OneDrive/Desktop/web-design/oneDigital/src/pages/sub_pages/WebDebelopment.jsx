import React, { useEffect } from 'react'
import rocket from '../../assets/rocket.png'
import ServiceImageImporter from '../../helpers/ServiceImageImporter'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";

const {
    approach,
    customWebsite,
    eCommerce,
    informative,
    innovative,
    masterPieces,
    team,
    result,
} = ServiceImageImporter;

const WebDebelopment = () => {
    useEffect(() => {
        const animateWave = document.querySelector('.animate-wave');
        if (animateWave) {
            const textContent = animateWave.textContent;
            const textSplit = textContent.split('');
            animateWave.innerHTML = textSplit.map(char => `<span>${char}</span>`).join('');

            textSplit.forEach((char, index) => {
                const span = animateWave.children[index];
                span.style.animationDelay = `${index * 0.1}s`;
            });

            console.log('Text split and animated:', textSplit);
        }
    }, [])
    return (
        <div className="min-h-screen flex flex-col">
            <header className='absolute top-0 w-full h-[50vh] bg-blue-200 flex justify-center items-center'>
                <h2 className='text-[#1965DF] text-4xl md:text-5xl lg:text-6xl font-bold z-10 text-center px-4'>Website Designing & Development</h2>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                            <animate
                                attributeName="d"
                                dur="10s"
                                repeatCount="indefinite"
                                values="
            M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,149.3C672,160,768,224,864,229.3C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            />
                        </path>
                    </svg>
                </div>
            </header>
            <section className='mt-[50vh]'>
                {/* MasterPieces */}
                <div className='container mx-auto px-4 py-12 lg:py-16'>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
                        <div className='w-full lg:w-1/2 flex flex-col gap-8'>
                            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800'>
                                <span className="block mb-2">Designing Digital</span>
                                <span className="animate-wave inline-block text-pink-800">Masterpieces</span>
                                <span className="mt-2 whitespace-nowrap flex items-center gap-3">
                                    for Your Success
                                    <img src={rocket} alt="Rocket" className='w-[30px] h-[30px] ml-2 animate-pulse' />
                                </span>
                            </h3>
                            <ul className='space-y-4'>
                                {[
                                    "Ability to Easily Add, Update & Manage Content",
                                    "Custom Functionality & Data Integration",
                                    "Easy-to-Use Content Management System",
                                    "Industry-Leading Speed & Conversion Rates",
                                    "Powerful eCommerce SEO & Search Marketing",
                                    "Secured with Firewall Protection & Web Antivirus"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex flex-col sm:flex-row gap-6 mt-4'>
                                <Link to="https://wa.me/9779849992404" target='_blank' className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto py-3 px-6 bg-green-600 hover:bg-green-700 text-white transition duration-300 ease-in-out rounded-full shadow-md flex items-center justify-center space-x-2'>
                                        <FaWhatsapp className='text-xl' />
                                        <span>WhatsApp Us</span>
                                    </button>
                                </Link>
                                <Link to='/contact-us' className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white transition duration-300 ease-in-out rounded-full shadow-md flex items-center justify-center space-x-2'>
                                        <span>Get Free Quotation</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <img
                                src={masterPieces}
                                alt="Our Approach to Web Development"
                                className='w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
    {/* persuation */}
    
    <div className='container mx-auto px-4 py-12 lg:py-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-lg'>
    <div className='max-w-4xl mx-auto text-center'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>Unleash Your Brand's Potential with Our Digital Marketing Services</h2>
      <p className='text-lg md:text-xl text-blue-100 leading-relaxed'>
        At Onetech Solution, we specialize in driving growth and achieving measurable results through our comprehensive digital marketing services. Our team of experts uses the latest strategies and tools to elevate your brand and connect with your target audience.
      </p>
    </div>
  </div>

                {/* Informative Websites */}
                <div className='container mx-auto px-4 py-12 lg:py-16'>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
                        <div className='w-full lg:w-1/2 order-2 lg:order-1'>
                            <img
                                src={informative}
                                alt="Informative Websites"
                                className='w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'
                                loading="lazy"
                            />
                        </div>
                        <div className='w-full lg:w-1/2 flex flex-col gap-8 order-1 lg:order-2'>
                            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800'>
                                Informative Websites
                            </h3>
                            <div className='bg-gradient-to-r from-blue-500 to-blue-300 py-3 px-4 rounded-lg shadow-md'>
                                <h3 className='text-xl font-semibold text-white'>Engage & Inform Your Audience</h3>
                            </div>
                            <p className='text-lg text-gray-600 leading-relaxed'>
                                Our informative websites are designed to effectively communicate your message and showcase your expertise. Perfect for businesses, services, blogs, and portfolios.
                            </p>

                            <ul className='space-y-4'>
                                {[
                                    "Clear & Concise Layouts",
                                    "Easy Navigation",
                                    "SEO-Friendly Content Structure",
                                    "Engaging Visuals & Media",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                                <Link to="https://wa.me/9779849992404" target='_blank' className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto py-3 px-6 bg-green-600 hover:bg-green-700 text-white transition duration-300 ease-in-out rounded-full shadow-md flex items-center justify-center space-x-2'>
                                        <FaWhatsapp className='text-xl' />
                                        <span>WhatsApp Us</span>
                                    </button>
                                </Link>
                                <Link to='/contact-us' className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white transition duration-300 ease-in-out rounded-full shadow-md flex items-center justify-center space-x-2'>
                                        <span>Get Free Quotation</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* E-Commerce Websites */}
                <div className='container mx-auto px-4 py-12 lg:py-16'>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
                        <div className='w-full lg:w-1/2 flex flex-col gap-8'>
                            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800'>
                                E-Commerce Websites
                            </h3>
                            <div className='bg-gradient-to-r from-purple-500 to-indigo-500 py-3 px-4 rounded-lg shadow-md'>
                                <h3 className='text-xl font-semibold text-white'>Boost Your Online Sales</h3>
                            </div>
                            <p className='text-lg text-gray-600 leading-relaxed'>
                                Our e-commerce solutions are designed to create powerful online stores that drive sales and enhance customer experience. Perfect for businesses looking to expand their reach in the digital marketplace.
                            </p>

                            <ul className='space-y-4'>
                                {[
                                    "User-Friendly Shopping Interface",
                                    "Secure Payment Gateways",
                                    "Inventory Management Systems",
                                    "Mobile-Responsive Design",
                                    "SEO Optimization for Products",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="w-6 h-6 mr-3 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                                <Link to="https://wa.me/9779849992404" target='_blank' className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto py-3 px-6 bg-green-600 hover:bg-green-700 text-white transition duration-300 ease-in-out rounded-full shadow-md flex items-center justify-center space-x-2'>
                                        <FaWhatsapp className='text-xl' />
                                        <span>WhatsApp Us</span>
                                    </button>
                                </Link>
                                <Link to='/contact-us' className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white transition duration-300 ease-in-out rounded-full shadow-md flex items-center justify-center space-x-2'>
                                        <span>Get Free Quotation</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <img
                                src={eCommerce}
                                alt="E-Commerce Websites"
                                className='w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>


                {/* Custom Websites */}
                <div className='container mx-auto px-4 py-12 lg:py-16'>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
                        <div className='w-full lg:w-1/2 order-2 lg:order-1'>
                            <img
                                src={customWebsite}
                                alt="Custom Websites"
                                className='w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'
                                loading="lazy"
                            />
                        </div>
                        <div className='w-full lg:w-1/2 flex flex-col gap-8 order-1 lg:order-2'>
                            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-800'>
                                Custom Websites
                            </h3>
                            <div className='bg-gradient-to-r from-indigo-500 to-purple-500 py-3 px-4 rounded-lg shadow-md'>
                                <h3 className='text-xl font-semibold text-white'>Tailored to Your Unique Vision</h3>
                            </div>
                            <p className='text-lg text-gray-600 leading-relaxed'>
                                Our custom website solutions are meticulously crafted to reflect your brand's unique identity and meet your specific business needs. We create bespoke digital experiences that set you apart from the competition.
                            </p>

                            <ul className='space-y-4'>
                                {[
                                    "Unique Design Tailored to Your Brand",
                                    "Custom Functionality and Features",
                                    "Scalable Architecture for Future Growth",
                                    "Integration with Third-party Systems",
                                    "Advanced Security Measures",
                                    "Optimized Performance and Speed"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                                <Link to="https://wa.me/9779849992404" target='_blank' className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto py-3 px-6 bg-green-600 hover:bg-green-700 text-white transition duration-300 ease-in-out rounded-full shadow-md flex items-center justify-center space-x-2'>
                                        <FaWhatsapp className='text-xl' />
                                        <span>WhatsApp Us</span>
                                    </button>
                                </Link>
                                <Link to='/contact-us' className='w-full sm:w-auto'>
                                    <button className='w-full sm:w-auto py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white transition duration-300 ease-in-out rounded-full shadow-md flex items-center justify-center space-x-2'>
                                        <span>Get Free Quotation</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Web Development Expertise</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
                                <img src={team} alt="Expert Team" className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-center mb-2">Expert Team</h3>
                                <p className="text-gray-600 text-center">Experienced professionals dedicated to delivering excellence.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
                                <img src={innovative} alt="Innovative Solutions" className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-center mb-2">Innovative Solutions</h3>
                                <p className="text-gray-600 text-center">Cutting-edge technologies to keep you ahead of the curve.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
                                <img src={customWebsite} alt="Custom Design" className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-center mb-2">Custom Design</h3>
                                <p className="text-gray-600 text-center">Tailored websites that reflect your unique brand identity.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
                                <img src={approach} alt="Agile Approach" className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-center mb-2">Agile Approach</h3>
                                <p className="text-gray-600 text-center">Flexible development process ensuring timely delivery.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
                                <img src={informative} alt="24/7 Support" className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-center mb-2">24/7 Support</h3>
                                <p className="text-gray-600 text-center">Round-the-clock assistance to keep your website running smoothly.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
                                <img src={result} alt="Proven Results" className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-center mb-2">Proven Results</h3>
                                <p className="text-gray-600 text-center">Track record of successful projects with measurable impact.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                        <p className="text-xl text-white mb-8">Contact us today to discuss your website design needs and discover how we can help you achieve your business goals.</p>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link to='tel:+977-9849992404' >
                                <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-indigo-100 transition duration-300 ease-in-out flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    Call Us
                                </button>
                            </Link>
                            <Link to="https://wa.me/9779849992404" >
                                <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 ease-in-out flex items-center">
                                    <FaWhatsapp className="mr-2" />
                                    WhatsApp
                                </button>
                            </Link>
                            <Link to="/contact-us">
                                <button className="bg-indigo-100 text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-indigo-200 transition duration-300 ease-in-out flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    Schedule Call Back
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WebDebelopment
