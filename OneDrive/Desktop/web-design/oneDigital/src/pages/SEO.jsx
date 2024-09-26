import React, { useEffect } from 'react'
import seoMain from '../assets/seo-main.svg'
import rocket from '../assets/rocket.png'
import {motion} from 'framer-motion'
import {Link } from 'react-router-dom'
import {FaWhatsapp } from 'react-icons/fa'

const SEO = () => {
  useEffect(() => {
    const animateWave = document.querySelector('.animate-wave');
    if (animateWave) {
        const words = animateWave.textContent.split(' ');
        animateWave.innerHTML = words.map(word => {
            return `<span class="word">${word.split('').map(char => `<span class="char">${char}</span>`).join('')}</span>`;
        }).join(' ');

        const chars = animateWave.querySelectorAll('.char');
        chars.forEach((char, index) => {
            char.style.animationDelay = `${index * 0.1}s`;
        });

    }
}, [])
  
  return (
    <div className="min-h-screen flex flex-col">
    <header className='relative h-[60vh] md:h-[70vh] lg:h-[80vh] bg-gradient-to-r from-green-400 to-green-600 flex flex-col justify-center items-center overflow-hidden'>
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold z-10 text-center px-4 capitalize'
      >
        WhatsApp Marketing
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='text-white text-lg md:text-xl lg:text-2xl text-center mt-4 px-4 max-w-3xl'
      >
        Unlock the power of direct communication and skyrocket your business growth
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='mt-8'
      >
        <Link 
          to="/contact-us" 
          className='
            text-white bg-green-600 hover:bg-green-700 
            transition-all duration-300 ease-in-out
            font-bold py-3 px-8 rounded-full 
            shadow-lg hover:shadow-xl
            transform hover:scale-105
            flex items-center justify-center
            z-50 relative
          '
        >
          <FaWhatsapp className="mr-2" />
          Start Your WhatsApp Campaign
        </Link>
      </motion.div>
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
        <div className='flex flex-col lg:flex-row items-center justify-between gap-16'>
          <div className='w-full lg:w-1/2 flex flex-col gap-10'>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight text-gray-800'>
              <span className="block mb-3">Boost Your Online Visibility with</span>
              <div className="flex items-center">
                <span className="animate-wave inline-block text-blue-600 mr-3">Organic Growth</span>
                <img src={rocket} alt="Rocket" className="w-10 h-10 animate-bounce" />
              </div>
            </h2>
          
            <ul className='space-y-6'>
              {[
                "Comprehensive Website Audits",
                "Keyword Research and Optimization",
                "On-Page and Off-Page SEO Strategies",
                "Content Optimization and Creation",
                "Technical SEO Improvements",
                "Local SEO for Businesses"
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <svg className="w-6 h-6 mr-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className='flex flex-col sm:flex-row gap-6 mt-8'>
              <Link to="/contact-us" className='w-full sm:w-auto'>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full sm:w-auto py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white transition duration-300 ease-in-out rounded-full shadow-lg flex items-center justify-center space-x-2 text-lg'
                >
                  <span>Get Your Free SEO Audit</span>
                </motion.button>
              </Link>
              <Link to='/contact-us' className='w-full sm:w-auto'>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full sm:w-auto py-4 px-8 bg-green-600 hover:bg-green-700 text-white transition duration-300 ease-in-out rounded-full shadow-lg flex items-center justify-center space-x-2 text-lg'
                >
                  <span>Schedule a Consultation</span>
                </motion.button>
              </Link>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={seoMain}
                alt="SEO Strategies"
                className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300'
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* persuasion */}
      <div className='container mx-auto px-4 py-12 lg:py-16'>
        <div className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-lg p-8 md:p-12'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>Dominate Search Rankings with Our Expert SEO Services</h2>
            <p className='text-lg md:text-xl text-blue-100 leading-relaxed'>
              At WEBSTARK, we specialize in boosting your online visibility and driving organic traffic through cutting-edge SEO strategies. Our team of SEO experts utilizes data-driven techniques and industry best practices to optimize your website, improve your search engine rankings, and connect you with your target audience effectively.
            </p>
          </div>
        </div>
      </div>

    


      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Comprehensive SEO Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "On-Page Optimization", 
              icon: "🔍", 
              description: "Optimize your website's content, structure, and meta elements to improve search engine visibility."
            },
            { 
              title: "Technical SEO", 
              icon: "⚙️", 
              description: "Enhance your website's backend to ensure search engines can crawl and index your site effectively."
            },
            { 
              title: "Content Strategy", 
              icon: "📝", 
              description: "Develop high-quality, relevant content that attracts and engages your target audience."
            },
            { 
              title: "Link Building", 
              icon: "🔗", 
              description: "Build high-quality backlinks to boost your website's authority and search engine rankings."
            },
            { 
              title: "Local SEO", 
              icon: "📍", 
              description: "Optimize your online presence for local searches to attract nearby customers."
            },
            { 
              title: "Analytics & Reporting", 
              icon: "📊", 
              description: "Track and analyze your SEO performance with detailed reports and actionable insights."
            },
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6 flex flex-col items-center text-center h-full justify-between">
                <span className="text-4xl mb-4">{service.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
  )
}

export default SEO
