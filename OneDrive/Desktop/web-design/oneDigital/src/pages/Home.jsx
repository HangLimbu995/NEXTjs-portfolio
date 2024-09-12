import React, { useEffect, useRef } from 'react'
import rocket from '../assets/rocket.png'
import Typed from 'typed.js'
import { FaWhatsapp } from "react-icons/fa";
import ImageImporter from '../helpers/ImageImporter'

import choose from '../assets/choose.png'
import WorkCard from '../components/WorkCard';

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
        <div className='relative w-full h-full mb-9'>
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
                            <p className='text-[14px] sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[20px] md:leading-[22px] tracking-tight text-[#535353] max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto sm:mx-0'>
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
            <section className='w-full min-h-screen py-16 bg-gray-100'>

                {/* Our Service */}
                <div className=' mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-700 mb-4'>Our Services</h2>
                    <div className='w-24 h-1 bg-blue-700 mx-auto mb-8'></div>
                    <p className='text-lg sm:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto'>
                        Elevate your business with our comprehensive suite of digital solutions tailored to your needs.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1600px] mx-auto'>
                        {serviceData.map((service, index) => (
                            <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                                <div className='h-56 bg-blue-600 overflow-hidden'>
                                    <img src={service.image} className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' alt={service.title} />
                                </div>
                                <div className='p-6'>
                                    <h3 className='text-2xl font-semibold mb-3'>{service.title}</h3>
                                    <p className='text-gray-600 text-base mb-5'>{service.description}</p>
                                    <button className='w-full py-3 bg-blue-700 rounded-lg text-white text-sm font-medium transition-colors duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* why choose us */}
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 mt-24'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-700 mb-4'>Why Choose Webstark?</h2>
                    <div className='w-24 h-1 bg-blue-700 mx-auto mb-8'></div>
                    <p className='text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto'>
                        At Webstark, we blend innovation with functionality to propel your brand to new heights. Experience unmatched dedication, tailored solutions, and a commitment to your success.
                    </p>
                    <div className='relative flex flex-col-reverse md:flex-col'>
                        <img src={choose} className='mx-auto w-full max-w-3xl mt-8 md:mt-0' alt="Why choose Webstark" />
                        <div className='md:absolute inset-0 flex items-center justify-center'>
                            <div className='flex flex-col w-full relative'>
                                {[
                                    { icon: '🏆', title: 'Expertise', description: 'Years of industry experience' },
                                    { icon: '💡', title: 'Innovation', description: 'Cutting-edge technologies' },
                                    { icon: '🎨', title: 'Customization', description: 'Tailored to your needs' },
                                    { icon: '🛠️', title: 'Support', description: '24/7 customer assistance' },
                                    { icon: '📈', title: 'Results', description: 'Proven track record of success' },
                                    { icon: '💰', title: 'Value', description: 'Competitive pricing' }
                                ].map((item, index) => (
                                    <div key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-5 relative`}>
                                        <div className={`bg-white bg-opacity-90 p-4 rounded-lg shadow-md w-full md:w-1/2 ${index % 2 === 0 ? 'md:rounded-tl-none' : 'md:rounded-tr-none'} flex items-center`}>
                                            <div className="text-3xl mr-4">{item.icon}</div>
                                            <div>
                                                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                                                <p className='text-sm text-gray-600'>{item.description}</p>
                                            </div>
                                        </div>
                                        <div className={`hidden md:block absolute ${index % 2 === 0 ? 'left-[calc(50%-10px)]' : 'right-[calc(50%-10px)]'} top-1/2 transform -translate-y-1/2 w-0 h-0 border-solid border-[10px] ${index % 2 === 0 ? 'border-l-white border-r-transparent' : 'border-r-white border-l-transparent'} border-t-transparent border-b-transparent`}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achivements */}
                <div className='relative w-full min-h-[70vh] bg-fixed bg-center bg-no-repeat bg-cover' style={{ backgroundImage: "url('https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/12/29122131/pokhra-1-1600x900.jpeg')" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 w-full">
                        <path fill="#ffffff" fillOpacity="0.5" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,106.7C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                    <div className='relative z-10 container mx-auto px-4 py-12 h-full flex items-center justify-center'>
                        <div className='flex flex-wrap justify-center items-center gap-4 h-full'>
                            {[
                                { icon: '🚀', number: '500+', text: 'Projects Delivered' },
                                { icon: '😊', number: '300+', text: 'Happy Clients' },
                                { icon: '⏳', number: '10+', text: 'Years of Experience' },
                                { icon: '👥', number: '1000+', text: 'Customers' },
                                { icon: '✅', number: '100%', text: 'Satisfaction Guarantee' }
                            ].map((item, index) => (
                                <div key={index} className='bg-white bg-opacity-90 rounded-lg p-3 sm:p-4 text-center transform transition-all duration-300 hover:scale-105 w-full xs:w-[calc(50%-8px)] sm:w-[calc(33.333%-10.667px)] md:w-[calc(33.333%-10.667px)] lg:w-[calc(20%-12.8px)] flex flex-col justify-center'>
                                    <div className='text-2xl xs:text-3xl sm:text-4xl mb-1 sm:mb-2'>{item.icon}</div>
                                    <div className='text-xl xs:text-2xl sm:text-3xl font-bold text-blue-700 mb-1 sm:mb-2'>{item.number}</div>
                                    <p className='text-xs sm:text-sm md:text-base text-gray-700'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
                        <path fill="#ffffff" fillOpacity="0.4" d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,256C672,277,768,299,864,293.3C960,288,1056,256,1152,245.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>

                {/* Our Latest Work */}
                <div className=" mx-auto px-4 py-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-2 border-b-2 border-blue-500 inline-block">Our Latest Work</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Explore our portfolio to see the range of projects we have successfully completed. From website designs to mobile apps, our work speaks for itself.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {worksData.map((project, index) => (
                            <WorkCard key={index} project={project} index={index} />
                        ))}
                    </div>
                    <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                        View More Projects
                    </button>
                </div>

                {/* Testimonials */}
                <div className='relative w-full h-full flex justify-center px-4 py-12'>
                    <div className='w-full lg:w-[90%] xl:w-[80%] h-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
                        <div className='w-full lg:w-1/2 h-full p-6 bg-white rounded-lg shadow-md'>
                            <div className='inline-block py-2 px-4 bg-blue-500 text-white rounded-lg mb-4'>
                                <h2 className='text-lg font-semibold'>Testimonials</h2>
                            </div>
                            <p className='text-3xl lg:text-4xl font-bold leading-tight mb-4'>Appreciations from <span className='text-blue-500'>Clients</span></p>
                            <p className='text-sm lg:text-base font-normal leading-relaxed text-gray-600 mb-8'>We take pride in the success of our clients and the strong relationships we build along the way. Here's a glimpse at the experiences they've shared with us.</p>
                            <div className='flex flex-wrap justify-center lg:justify-start gap-6 items-center'>
                                <div className='flex flex-col items-center p-4'>
                                    <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="#4285F4">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        <path d="M1 1h22v22H1z" fill="none" />
                                    </svg>
                                    <div className="flex text-yellow-400 mb-1">
                                        {'★'.repeat(5)}
                                    </div>
                                    <h2 className="font-semibold">5/5</h2>
                                </div>
                                <div className='flex flex-col items-center p-4'>
                                    <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="#1877F2">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    <div className="flex text-yellow-400 mb-1">
                                        {'★'.repeat(5)}
                                    </div>
                                    <h2 className="font-semibold">Facebook</h2>
                                </div>
                                <div className='flex flex-col items-center p-4'>
                                    <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="#1DA1F2">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                    <div className="flex text-yellow-400 mb-1">
                                        {'★'.repeat(5)}
                                    </div>
                                    <h2 className="font-semibold">Twitter</h2>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 h-full flex flex-col gap-6'>
                            {[
                                {
                                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPcCvhIcUpVMqNdX31gJU90TGEO2YZBxWPuvuiSMIwJaJ8LyHJqwL7wW32hX_2_H9kCU&usqp=CAU',
                                    text: 'Onetech Solution transformed our online presence with their exceptional web design and SEO services. Highly recommend!',
                                    name: 'SHIVAM VERMA',
                                    position: 'Founder at Digital Fort'
                                },
                                {
                                    image: 'https://randomuser.me/api/portraits/women/65.jpg',
                                    text: 'The digital marketing strategy implemented by Onetech Solution boosted our online visibility significantly. Great team to work with!',
                                    name: 'SARAH JOHNSON',
                                    position: 'Marketing Director at TechInnovate'
                                },
                                {
                                    image: 'https://randomuser.me/api/portraits/men/32.jpg',
                                    text: 'Onetech Solution\'s e-commerce platform development revolutionized our online sales. Their expertise is unmatched!',
                                    name: 'MICHAEL CHEN',
                                    position: 'CEO at GlobalTrade'
                                }
                            ].map((testimonial, index) => (
                                <div key={index} className={`flex gap-5 py-4 px-6 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right ml-[10%]'}`}>
                                    <div className='flex-shrink-0'>
                                        <img className='w-16 h-16 object-cover rounded-full' src={testimonial.image} alt={testimonial.name} />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex text-yellow-400'>
                                            {'★'.repeat(5)}
                                        </div>
                                        <h2 className='text-sm lg:text-base font-medium leading-snug'>{testimonial.text}</h2>
                                        <div>
                                            <p className='text-xs lg:text-sm font-normal leading-relaxed text-gray-600'>
                                                <span className='font-medium'>{testimonial.name}</span> / {testimonial.position}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tech Blogs */}
                <div className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Latest Tech Blogs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "The Future of AI in Web Development",
                                excerpt: "Explore how artificial intelligence is reshaping the landscape of web development...",
                                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                                date: "May 15, 2023",
                                author: "John Doe",
                                link: "/blog/future-of-ai-in-web-development"
                            },
                            {
                                title: "5G Technology: What It Means for Web Performance",
                                excerpt: "Discover the impact of 5G on web applications and user experience...",
                                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                                date: "May 10, 2023",
                                author: "Jane Smith",
                                link: "/blog/5g-technology-and-web-performance"
                            },
                            {
                                title: "The Rise of Progressive Web Apps",
                                excerpt: "Learn why PWAs are becoming increasingly popular and how to implement them...",
                                image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                                date: "May 5, 2023",
                                author: "Alex Johnson",
                                link: "/blog/rise-of-progressive-web-apps"
                            }
                        ].map((blog, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                                        <span>{blog.date}</span>
                                        <span>By {blog.author}</span>
                                    </div>
                                    <a href={blog.link} className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a href="/blogs" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 inline-block">
                            View All Blogs
                        </a>
                    </div>
                </div>

                {/* NewsLetter */}
                <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                            <div className="p-6 sm:p-10">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Subscribe to Our Newsletter</h2>
                                <p className="text-gray-600 text-center mb-6">Stay updated with our latest news, articles, and exclusive offers.</p>
                                <form className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-blue-500"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                                <p className="text-sm text-gray-500 mt-4 text-center">We respect your privacy. Unsubscribe at any time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const serviceData = [
    { title: 'Web Development', description: 'Custom websites that engage and convert visitors, built with cutting-edge technologies.', image: 'https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid' },
    { title: 'Digital Marketing', description: 'Comprehensive strategies to boost your online presence and reach your target audience effectively.', image: 'https://img.freepik.com/free-vector/digital-marketing-infographic_52683-9003.jpg?size=626&ext=jpg&ga=GA1.1.123217531.1718750106&semt=ais_hybrid' },
    { title: 'E-commerce Solutions', description: 'Robust and scalable platforms to power your online store and drive sales growth.', image: 'https://static3.bigstockphoto.com/2/7/1/large1500/172620335.jpg' },
    { title: 'UI/UX Design', description: 'Intuitive and visually appealing interfaces that enhance user experience and satisfaction.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6C0qHN0Ho90IKgg3LJkcia_YqnMRL9JcaGTY9vkd5idoYKdh-m4m9B-lMzK0AcM1l-o&usqp=CAU' },
    { title: 'Graphic Design', description: 'Creative designs that visually communicate your brand message and captivate your audience.', image: 'https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg' },
    { title: 'Animation Video', description: 'Engaging animated videos that tell your story and promote your products or services.', image: 'https://media.licdn.com/dms/image/D5612AQE2ddwB_5SSkQ/article-cover_image-shrink_600_2000/0/1700816309601?e=2147483647&v=beta&t=eTOVcyKrlX9udTyvjsWTK5p-E91NmwJEqMalNc1S-Ww' },
    { title: 'WhatsApp/Email Marketing', description: 'Targeted marketing campaigns through WhatsApp and email to reach your audience directly.', image: 'https://eyekillerweb.s3.amazonaws.com/eyekiller-blog-email-marketing.jpg' },
    { title: 'SEO', description: 'Search engine optimization strategies to improve your website’s visibility and ranking.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfniX2Xro4UBGMPRc62rIRqRhYDPgM1_IRMQRz5ZS39G2gmYpGOc4JrHVtXmHPaNMpq7o&usqp=CAU' }
]

const worksData = [
    { title: 'E-Commerce Platform', category: 'Web Development', image: 'https://bcns.com.bd/wp-content/uploads/2020/07/E-Commerce-Web.jpg', link: 'https://ecommerce-example.com' },
    { title: 'EdTech Learning App', category: 'Mobile App', image: 'https://cdn.dribbble.com/userupload/4445138/file/original-1510c6891ade67e94b7d83af325650c3.png?resize=400x0', link: 'https://edtech-example.com' },
    { title: 'Corporate Website Redesign', category: 'UI/UX Design', image: 'https://miro.medium.com/v2/resize:fit:1400/1*3LB01xra89ACJIgwPhLlIw.jpeg', link: 'https://corporate-example.com' },
    { title: 'Social Media Dashboard', category: 'Web Application', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Va-Q3rHJnSovXfmaB-Gga5OO6OluUJVpIZDpkQxdARM4WYKjVm5lkpwQZFP4kgyh5Vc&usqp=CAU', link: 'https://dashboard-example.com' }
]

export default Home
