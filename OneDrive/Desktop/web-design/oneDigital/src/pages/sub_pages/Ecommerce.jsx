import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaShoppingCart, FaMobileAlt, FaLock, FaSearch, FaChartLine } from 'react-icons/fa'

const Ecommerce = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className='absolute top-0  w-full h-[60vh] md:h-[70vh] bg-gradient-to-r from-blue-400 to-blue-600 flex justify-center items-center overflow-hidden'>
        <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold z-10 text-center px-4'>E-Commerce Excellence</h1>
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

      <section className='container mx-auto px-4 py-12 lg:py-16 mt-[50vh]'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>Why Choose Our E-Commerce Solutions?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            { icon: <FaShoppingCart />, title: 'User-Friendly Interface', description: 'Intuitive design for seamless shopping experiences' },
            { icon: <FaMobileAlt />, title: 'Mobile Responsive', description: 'Perfect performance across all devices' },
            { icon: <FaLock />, title: 'Secure Transactions', description: 'State-of-the-art security for customer peace of mind' },
            { icon: <FaSearch />, title: 'SEO Optimized', description: 'Boost your visibility in search engine results' },
            { icon: <FaChartLine />, title: 'Analytics Integration', description: 'Data-driven insights to grow your business' },
            { icon: <FaShoppingCart />, title: 'Customizable Features', description: 'Tailored solutions to match your brand' },
          ].map((item, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
              <div className='text-4xl text-blue-600 mb-4'>{item.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-gray-100 py-12 lg:py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>Our E-Commerce Development Process</h2>
          <div className='space-y-8'>
            {[
              { step: '1', title: 'Requirement Analysis', description: 'We start by understanding your business needs and goals.' },
              { step: '2', title: 'Design & Prototyping', description: 'Creating visually appealing and functional designs.' },
              { step: '3', title: 'Development', description: 'Building robust and scalable e-commerce platforms.' },
              { step: '4', title: 'Testing & Quality Assurance', description: 'Rigorous testing to ensure flawless performance.' },
              { step: '5', title: 'Launch & Support', description: 'Smooth deployment and ongoing technical support.' },
            ].map((item, index) => (
              <div key={index} className='flex items-start'>
                <div className='bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0'>
                  {item.step}
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                  <p className='text-gray-600'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='container mx-auto px-4 py-12 lg:py-16'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>Our Previous E-Commerce Work</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            { image: 'https://miro.medium.com/v2/0*OWInRiH6bKB8v55F', title: 'Fashion Boutique', description: 'A sleek online store for a trendy fashion brand.' },
            { image: 'https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-technogy-new-modern-prestashop-theme-for-tech-gadgets-electronics-online-store.jpg?v=1647485995', title: 'Tech Gadgets Store', description: 'An innovative e-commerce platform for the latest tech products.' },
            { image: 'https://htmlcodex.com/wp-content/uploads/2022/04/organic-food-website-template.jpg', title: 'Organic Food Market', description: 'A user-friendly online marketplace for organic produce.' },
          ].map((item, index) => (
            <div key={index} className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
              <img src={item.image} alt={item.title} className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                <p className='text-gray-600'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='container mx-auto px-4 py-12 lg:py-16'>
        <div className='bg-blue-600 text-white rounded-lg p-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Ready to Boost Your Online Sales?</h2>
          <p className='text-xl mb-6'>Let's create an e-commerce solution that drives results!</p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link to="https://wa.me/9779849992404" target='_blank' className='inline-block'>
              <button className='w-full sm:w-auto py-3 px-6 bg-green-500 hover:bg-green-600 text-white transition duration-300 ease-in-out rounded-full shadow-md flex items-center justify-center space-x-2'>
                <FaWhatsapp className='text-xl' />
                <span>WhatsApp Us</span>
              </button>
            </Link>
            <Link to='/contact-us' className='inline-block'>
              <button className='w-full sm:w-auto py-3 px-6 bg-white hover:bg-gray-100 text-blue-600 transition duration-300 ease-in-out rounded-full shadow-md flex items-center justify-center space-x-2'>
                <span>Get Free Quotation</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ecommerce
