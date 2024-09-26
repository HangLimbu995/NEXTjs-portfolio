import React from 'react'
import DigitalMarketingImage from '../helpers/DigitalMarketingImage'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import rocket from '../assets/rocket.png'

const {
  content,
  cro,
  customize,
  email,
  improvement,
  ppc,
  skyrocket,
  team,
  transparent,
  seo,
  social,
} = DigitalMarketingImage

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className='relative h-[60vh] md:h-[80vh] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex flex-col justify-center items-center overflow-hidden'>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <h1 className='text-white text-4xl md:text-6xl lg:text-7xl font-bold z-20 text-center px-4 capitalize mb-4'>
          Digital Marketing
        </h1>
        <p className="text-white text-xl md:text-2xl text-center mt-4 px-4 max-w-3xl z-20">
          Elevate Your Brand in the Digital Landscape
        </p>
        <Link to="/contact-us" className="mt-8 z-20">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300 shadow-lg">
            Start Your Digital Journey
          </button>
        </Link>
        <div className="absolute bottom-0 left-0 w-full z-10">
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
      <section className='container w-full sm:w-[90%] px-4 mx-auto'>
        {/* MasterPieces */}
        <div className='container mx-auto px-4 py-12 lg:py-16'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
            <div className='w-full lg:w-1/2 flex flex-col gap-8'>
              <h3 className='text-3xl md:text-4xl font-bold leading-tight text-gray-800'>
                <span className="block mb-2">Elevate Your Brand with</span>
                <span className="animate-wave inline-block text-pink-600">Cutting-Edge</span>
                <span className="mt-2 whitespace-nowrap flex items-center gap-3">
                  Digital Marketing Solutions
                  <img src={rocket} alt="Rocket" className='w-8 h-8 ml-2 animate-bounce' />
                </span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unlock your business's full potential with our comprehensive digital marketing strategies tailored to your unique needs and goals.
              </p>
              <ul className='space-y-4'>
                {[
                  "Data-Driven SEO Strategies for Increased Visibility",
                  "Engaging Social Media Campaigns to Build Brand Loyalty",
                  "Targeted PPC Advertising for Immediate Results",
                  "Content Marketing that Resonates with Your Audience",
                  "Email Marketing Automation for Nurturing Leads",
                  "Analytics and Reporting for Continuous Improvement"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                    <span>Chat with an Expert</span>
                  </button>
                </Link>
                <Link to='/contact-us' className='w-full sm:w-auto'>
                  <button className='w-full sm:w-auto py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white transition duration-300 ease-in-out rounded-full shadow-md flex items-center justify-center space-x-2'>
                    <span>Get Your Free Strategy Session</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <img
                src={skyrocket}
                alt="Digital Marketing Strategies"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* persuasion */}
        <div className='container mx-auto px-4 py-12 lg:py-16'>
          <div className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-lg p-8 md:p-12'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>Unleash Your Brand's Potential with Our Digital Marketing Services</h2>
              <p className='text-lg md:text-xl text-blue-100 leading-relaxed'>
                At WEBSTARK, we specialize in driving growth and achieving measurable results through our comprehensive digital marketing services. Our team of experts uses the latest strategies and tools to elevate your brand and connect with your target audience.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Search Engine Optimization (SEO)", image: seo, color: "green", items: ["On-Page SEO", "Off-Page SEO", "Technical SEO"] },
              { title: "Pay-Per-Click (PPC) Advertising", image: ppc, color: "blue", items: ["Keyword Research", "Ad Creation", "Bid Management"] },
              { title: "Social Media Marketing", image: social, color: "purple", items: ["Content Creation", "Community Management", "Paid Advertising"] },
              { title: "Content Marketing", image: content, color: "yellow", items: ["Blog Writing", "Ebooks & Whitepapers", "Infographics"] },
              { title: "Email Marketing", image: email, color: "red", items: ["List Building", "Automation", "Personalization"] },
              { title: "Conversion Rate Optimization (CRO)", image: cro, color: "indigo", items: ["A/B Testing", "User Experience Analysis", "Landing Page Optimization"] }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="flex justify-center items-center pt-6">
                  <img src={service.image} alt={service.title} className="w-24 h-24 object-cover object-center rounded-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">Improve your digital presence with our expert {service.title} strategies.</p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className={`w-4 h-4 mr-2 text-${service.color}-500`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Experienced Team", image: team, description: "Our team of digital marketing experts brings years of experience and a proven track record of success." },
              { title: "Customized Solutions", image: customize, description: "We tailor our strategies to meet your unique business needs and goals." },
              { title: "Transparent", image: transparent, description: "We believe in open communication and provide regular, detailed reports on your campaign's performance." },
              { title: "Continuous Improvement", image: improvement, description: "We constantly analyze and refine our strategies to ensure optimal results for your business." }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="flex justify-center items-center pt-4">
                  <img src={feature.image} alt={feature.title} className="w-20 h-20 object-cover object-center rounded-full" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DigitalMarketing
