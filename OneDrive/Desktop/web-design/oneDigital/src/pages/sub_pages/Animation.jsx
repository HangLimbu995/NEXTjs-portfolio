import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

import editing from '../../assets/editing.jpg'

const Animation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className='relative h-[60vh] md:h-[70vh] bg-gradient-to-r from-purple-600 to-indigo-600 flex justify-center items-center overflow-hidden'>
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-white text-4xl md:text-6xl lg:text-7xl font-bold z-10 text-center px-4 capitalize'
        >
          Video Editing & Animation Services
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 w-full"
        >
          <svg className="w-full h-auto mt-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
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
            className='flex flex-col lg:flex-row items-center justify-between gap-12'
          >
            <div className='w-full lg:w-1/2 flex flex-col gap-8'>
              <h2 className='text-4xl md:text-5xl font-bold leading-tight text-gray-800'>
                <span className="block mb-2">Transforming Your Ideas with</span>
                <div className="relative h-16 overflow-hidden">
                  <motion.div
                    animate={{ y: [0, -64, -64, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-start"
                  >
                    <span className="text-purple-600">Expert Video Editing</span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [64, 0, -64, 64] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-start"
                  >
                    <span className="text-indigo-600 whitespace-nowrap">Stunning Animations</span>
                  </motion.div>
                </div>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Elevate your content with our professional video editing and animation services. We bring your vision to life with captivating visuals that engage, inform, and inspire your audience.
              </p>
              <ul className='space-y-4'>
                {[
                  "Professional Video Editing",
                  "2D and 3D Animation Creation",
                  "Motion Graphics Design",
                  "Visual Effects (VFX) Integration",
                  "Color Grading and Correction",
                  "Animated Explainer Videos"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <svg className="w-6 h-6 mr-3 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className='flex flex-col sm:flex-row gap-6 mt-8'>
                <Link to="https://wa.me/9779849992404" target='_blank' className='w-full sm:w-auto'>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-full sm:w-auto py-4 px-8 bg-green-600 hover:bg-green-700 text-white transition duration-300 ease-in-out rounded-full shadow-lg flex items-center justify-center space-x-2 text-lg'
                  >
                    <FaWhatsapp className='text-2xl' />
                    <span>Chat with an Expert</span>
                  </motion.button>
                </Link>
                <Link to='/contact-us' className='w-full sm:w-auto'>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-full sm:w-auto py-4 px-8 bg-purple-600 hover:bg-purple-700 text-white transition duration-300 ease-in-out rounded-full shadow-lg flex items-center justify-center space-x-2 text-lg'
                  >
                    <span>Get Your Free Consultation</span>
                  </motion.button>
                </Link>
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl shadow-2xl overflow-hidden"
              >
                <img src={editing} alt="Video Editing" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='container mx-auto px-4 py-12 lg:py-16'
        >
          <div className='bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl shadow-lg p-8 md:p-12'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>Elevate Your Content with Professional Editing and Animation</h2>
              <p className='text-lg md:text-xl text-purple-100 leading-relaxed'>
                At Onetech Solution, we combine creativity with technical expertise to deliver stunning video edits and animations that captivate your audience. Our skilled team uses cutting-edge tools and techniques to bring your ideas to life and make your content stand out in today's competitive digital landscape.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 py-12 lg:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Video and Animation Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Video Editing",
                description: "Transform raw footage into polished, engaging content that tells your story effectively.",
                features: ["Seamless transitions", "Audio enhancement", "Color grading"],
                img: 'https://media.licdn.com/dms/image/D5612AQE2ddwB_5SSkQ/article-cover_image-shrink_600_2000/0/1700816309601?e=2147483647&v=beta&t=eTOVcyKrlX9udTyvjsWTK5p-E91NmwJEqMalNc1S-Ww'
              },
              {
                title: "2D & 3D Animation",
                description: "Create captivating animated content for various applications, from explainer videos to character animations.",
                features: ["Character animation", "Explainer videos", "Logo animations"],
                img: 'https://img.freepik.com/free-vector/gradient-2d3d-software-developer-icons-set_23-2149373465.jpg'
              },
              {
                title: "Motion Graphics",
                description: "Bring static designs to life with dynamic motion graphics that enhance your message.",
                features: ["Kinetic typography", "Infographic animations", "Title sequences"],
                img: 'https://cdn.dribbble.com/users/1068771/screenshots/14225432/media/0da8c461ba3920a8c827d864a6e051ed.jpg'
              }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">{service.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:shadow-lg"
              >
                Start Your Video or Animation Project
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Animation
