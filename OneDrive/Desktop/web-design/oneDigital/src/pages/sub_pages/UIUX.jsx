import React from 'react'
import { motion } from 'framer-motion'
import { FaDesktop, FaMobileAlt, FaPencilRuler, FaUserFriends } from 'react-icons/fa'

const UIUX = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className='relative h-[60vh] md:h-[70vh] bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center overflow-hidden'>
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-white text-4xl md:text-6xl lg:text-7xl font-bold z-10 text-center px-4'
        >
          UI/UX Design Services
        </motion.h1>
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

      <section className='mt-16 md:mt-24'>
        <div className='container mx-auto px-4 py-12 lg:py-16'>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Crafting Exceptional User Experiences</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We design intuitive and visually appealing interfaces that enhance user satisfaction and drive engagement.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              { icon: <FaDesktop />, title: 'Web Design', description: 'Create responsive and modern web interfaces' },
              { icon: <FaMobileAlt />, title: 'Mobile App Design', description: 'Design user-friendly mobile applications' },
              { icon: <FaPencilRuler />, title: 'Prototyping', description: 'Develop interactive prototypes for testing' },
              { icon: <FaUserFriends />, title: 'User Research', description: 'Conduct in-depth user research and analysis' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className='bg-white p-6 rounded-lg shadow-lg text-center'
              >
                <div className='text-4xl mb-4 text-blue-500 flex justify-center'>{service.icon}</div>
                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-gray-100 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>Our Design Process</h2>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8'>
            {['Research', 'Wireframing', 'Prototyping', 'User Testing', 'Implementation'].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className='bg-white p-4 rounded-full shadow-md'
              >
                <span className='text-lg font-semibold text-blue-600'>{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>Ready to Elevate Your User Experience?</h2>
          <div className='text-center'>
            <a href="/contact" className='bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300'>
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UIUX
