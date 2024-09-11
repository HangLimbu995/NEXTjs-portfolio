import React from 'react'
import ImageImporter from '../helpers/ImageImporter'

const { headerImg,target,growth } = ImageImporter

const AboutUs = () => {
    return (
        <div className=' w-full min-h-[100vh] mb-9'>
            <header className='absolute top-0 w-full h-[50vh] bg-blue-200 flex justify-center items-center'>
                <h2 className='text-[#1965DF] text-[50px] font-[600] leading-[50px] z-[99]'>About Us</h2>
            </header>
            <div className="relative w-full h-[200%]">
                <svg className="absolute bottom-[50%] left-0 w-full h-auto md:scale-150 md:-translate-y-[30%] scale-[2] -translate-y-[70%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
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
            <section className='mt-[50vh] flex flex-col items-center'>
                <div className='md:container w-full h-full flex flex-col lg:flex-row justify-between items-center px-4 py-8 lg:py-16'>
                    <div className=' w-full lg:w-3/5 h-full mb-8 lg:mb-0 lg:pr-8'>
                        <h2 className='text-2xl font-bold text-blue-600 mb-2'>Who We Are</h2>
                        <h2 className='text-4xl font-bold text-gray-800 mb-4'>Most Ranked Web Marketing Agency!</h2>
                        <h3 className='text-xl text-gray-600 mb-6'>WEBSTARK provides services to its customers worldwide with extensive technical knowledge and expertise.</h3>
                        <p className='mb-4 text-gray-700'><strong>WEBSTARK</strong> is a website designing and development company headquartered <strong>in KTM, Nepal.</strong> Our specialty is delivering complete and affordable business and IT solutions. With an extensive global workforce, we maintain high-quality standards by implementing our ethics and utilizing innovative tools and technology to equip our customers with cutting-edge business solutions.</p>
                        <p className='mb-4 text-gray-700'>We combine our industry experience, latest tools, and technical professionals to drive your business growth. Our expertise in <strong>web design, web development,</strong> implementation, and innovative business tactics enables streamlined operations, enhanced efficiency, and a competitive edge in the 24/7 e-business environment.</p>
                        <p className='text-gray-700'>We're more than just a Website Development Company. We're a relationship-based company where customers become long-term clients. By continuously learning and growing, we help our clients increase revenue and streamline operations through viable, cost-effective solutions.</p>
                    </div>
                    <div className='w-full lg:w-2/5 h-full flex flex-col items-center'>
                        <div className='w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 mb-4 shadow-lg overflow-hidden'>
                            <img src={headerImg} alt="Aakash Karki" className='w-full h-full object-cover' />
                        </div>
                        <h2 className='text-2xl font-bold text-gray-800'>Aakash Karki</h2>
                        <h3 className='text-xl text-gray-600'>Founder & CEO</h3>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="text-pink-600 hover:text-pink-800">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                </svg>
                            </a>
                            <a href="#" className="text-green-600 hover:text-green-800">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='container mx-auto mt-16 px-4 sm:px-6 lg:px-8 text-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                        <div className='bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl'>
                            <div className="flex items-center justify-center mb-4">
                               <img src={target} className='w-[70px]' />
                            </div>
                            <h2 className='text-2xl font-bold text-blue-600 mb-4'>Our Mission</h2>
                            <p className='text-gray-700 leading-relaxed'>
                                At Onetech Solution, our mission is to empower businesses by delivering innovative and high-quality digital solutions. We strive to provide exceptional website design, development, and digital marketing services that drive growth and success for our clients. Our commitment to excellence, customer satisfaction, and continuous improvement guides everything we do.
                            </p>
                        </div>
                        <div className='bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl'>
                            <div className="flex items-center justify-center mb-4">
                            <img src={growth} className='w-[70px]' />
                            </div>
                            <h2 className='text-2xl font-bold text-blue-600 mb-4'>Our Vision</h2>
                            <p className='text-gray-700 leading-relaxed'>
                                Our vision is to become the leading web agency in India, renowned for our creativity, technical expertise, and dedication to our clients' success. We aim to set the standard for quality and innovation in the digital industry, helping businesses of all sizes harness the power of technology to achieve their goals and transform their online presence. Through our work, we aspire to build lasting relationships and make a positive impact on the digital landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
