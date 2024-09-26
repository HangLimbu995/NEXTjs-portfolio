import React from 'react'
import whatsapp from '../assets/whatsapp.gif'
import { motion } from 'framer-motion'
import {Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import social from '../assets/digital-marketing/social.jpeg'
import seo from '../assets/digital-marketing/seo.jpeg'
import ppc from '../assets/digital-marketing/ppc.jpg'


const Marketing = () => {
  return (
    <div className="min-h-screen flex flex-col">
    <header className='relative h-[60vh] md:h-[70vh] bg-gradient-to-r from-green-400 to-green-600 flex flex-col justify-center items-center overflow-hidden'>
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-white text-4xl md:text-5xl lg:text-6xl font-bold z-10 text-center px-4 capitalize'
      >
        WhatsApp Marketing
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='text-white text-xl md:text-2xl text-center mt-4 px-4 max-w-3xl'
      >
        Unlock the power of direct communication with your audience
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-0 w-full"
      >
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
      </motion.div>
    </header>
    <section>
      {/* MasterPieces */}
      <div className='container w-full sm:w-[90%] px-4 mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          <div className='w-full lg:w-1/2 flex flex-col gap-8'>
            <h3 className='text-3xl md:text-4xl font-bold leading-tight text-gray-800'>
              <span className="block mb-2">Maximize Your Reach with Seamless</span>
              <div className="relative h-16 overflow-hidden">
              <motion.div
                animate={{ y: [0, -64, -64, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-start"
              >
                <span className="text-purple-600">WhatsApp Automation</span>
              </motion.div>
              <motion.div
                animate={{ y: [64, 0, -64, 64] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-start"
              >
                <span className="text-indigo-600 whitespace-nowrap">Email Marketing</span>
              </motion.div>
            </div>
            </h3>
          
            <ul className='space-y-4'>
              {[
                "Personalized Messaging at Scale",
                "Automated Customer Engagement",
                "Targeted Email Campaigns",
                "Interactive WhatsApp Chatbots",
                "Data-Driven Marketing Strategies",
                "Seamless Multi-Channel Integration"
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
          <div className=''>
            <img
              src={whatsapp}
              alt="Digital Marketing Strategies"
              className='w-full h-auto5'
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* persuasion */}
      <div className='container mx-auto px-4 py-12 lg:py-16'>
        <div className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-lg p-8 md:p-12'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>Revolutionize Your Communication with Email & WhatsApp Marketing</h2>
            <p className='text-lg md:text-xl text-blue-100 leading-relaxed'>
              At WEBSTARK, we specialize in driving engagement and achieving measurable results through our innovative email and WhatsApp marketing services. Our team of experts leverages cutting-edge strategies and tools to elevate your brand's communication and connect with your audience on their preferred platforms.
            </p>
          </div>
        </div>
      </div>

    


      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Our WhatsApp Marketing Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { 
              title: "Campaign Management", 
              image: seo, 
              description: "Powerful tools for email and WhatsApp campaign creation and management."
            },
            { 
              title: "Automation", 
              image: ppc, 
              description: "Set up automated flows and responses for both email and WhatsApp."
            },
            { 
              title: "Analytics & Reporting", 
              image: social, 
              description: "Comprehensive insights for email and WhatsApp marketing performance."
            },
            { 
              title: "Integration", 
              image: social, 
              description: "Seamlessly integrate email and WhatsApp with your existing systems."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-4 flex flex-col items-center text-center h-full justify-between">
                <img src={feature.image} alt={feature.title} className="w-12 h-12 object-contain mb-3" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
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

export default Marketing
