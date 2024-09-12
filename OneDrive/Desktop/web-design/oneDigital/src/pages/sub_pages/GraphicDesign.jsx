import React from 'react'
import GraphicDesigniImage from '../../helpers/GraphicDesignImage'
import rocket from '../../assets/rocket.png'
import {Link } from 'react-router-dom'
import {FaWhatsapp} from 'react-icons/fa'
import social from '../../assets/digital-marketing/social.jpeg'

const {    brand,
  collaborative,
  collateral,
  creative,
  customized,
  detail,
  graphic,
  illustrations,
  logo,
  packageDesign,
  team,} = GraphicDesigniImage;

const GraphicDesign = () => {
  return (
    <div className="min-h-screen flex flex-col">
    <header className='absolute top-0 w-full h-[60vh] md:h-[70vh] bg-gradient-to-r from-blue-400 to-blue-600 flex justify-center items-center overflow-hidden'>
      <h2 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold z-10 text-center px-4 capitalize'>Graphic Designing</h2>
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
            <h3 className='text-3xl md:text-4xl font-bold leading-tight text-gray-800'>
              <span className="block mb-2">Bringing Your Brand to Life with</span>
              <span className="animate-wave inline-block text-pink-600">Cutting-Edge  <img src={rocket} alt="Rocket" className='w-8 h-8 ml-2 animate-bounce' /></span>
            </h3>
          
            <ul className='space-y-4'>
              {[
                "Unique & Custom Designs",
                "Strong Brand Identity Creation",
                "High-Quality Visuals",
                "Engaging & Memorable Graphics",
                "Creative & Innovative Solutions",
                "Professional & Polished Look"
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
              src={graphic}
              alt="Digital Marketing Strategies"
              className='w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'
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
              At Onetech Solution, we specialize in driving growth and achieving measurable results through our comprehensive digital marketing services. Our team of experts uses the latest strategies and tools to elevate your brand and connect with your target audience.
            </p>
          </div>
        </div>
      </div>

    

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Logo Design", image: logo, description: "Create a unique and memorable logo that represents your brand's identity and values." },
            { title: "Brand Identity Design", image: brand, description: "Develop a cohesive visual identity including color schemes, typography, and design elements." },
            { title: "Marketing Collateral", image: collateral, description: "Design professional brochures, flyers, business cards, and other marketing materials." },
            { title: "Social Media Graphics", image: social, description: "Create eye-catching graphics and visuals optimized for various social media platforms." },
            { title: "Packaging Design", image: packageDesign, description: "Design attractive and functional packaging that stands out on the shelf and protects your product." },
            { title: "Illustrations", image: illustrations, description: "Create custom illustrations to enhance your brand's visual storytelling and engagement." }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="flex justify-center items-center pt-6">
                <img src={service.image} alt={service.title} className="w-24 h-24 object-cover object-center rounded-full" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Creative Expertise", image: creative, description: "Our team brings innovative ideas and proven design skills to every project." },
          { title: "Customized Solutions", image: customized, description: "We craft unique designs tailored to your brand and business needs." },
          { title: "Attention to Detail", image: detail, description: "We ensure every element is perfect, delivering polished final products." },
          { title: "Collaborative Process", image: collaborative, description: "We work closely with you, incorporating feedback throughout the design process." }
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

export default GraphicDesign
