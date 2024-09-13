import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
            <header className='relative h-[50vh] bg-gradient-to-r from-blue-600 to-indigo-600 flex justify-center items-center overflow-hidden'>
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 text-transparent bg-clip-text text-4xl md:text-6xl lg:text-7xl font-bold z-10 text-center px-4 drop-shadow-lg'
                >
                    Let's Create Something Amazing Together
                </motion.h1>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#f3f4f6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213J,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
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
            <section className="flex-grow bg-gray-100 px-4 py-16 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 rounded-lg shadow-lg"
                        >
                            <h3 className="text-3xl font-semibold mb-6 text-indigo-700">Get in Touch</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        <option value="web-design">Web Design</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="seo">SEO</option>
                                        <option value="digital-marketing">Digital Marketing</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 rounded-lg shadow-lg"
                        >
                            <h3 className="text-3xl font-semibold mb-6 text-indigo-700">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <FaPhone className="text-indigo-600 text-xl mr-4" />
                                    <span className="text-lg">+1 (123) 456-7890</span>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="text-indigo-600 text-xl mr-4" />
                                    <span className="text-lg">info@webstarkagency.com</span>
                                </div>
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="text-indigo-600 text-xl mr-4" />
                                    <span className="text-lg">123 Web Street, Digital City, 12345</span>
                                </div>
                            </div>
                            <div className="mt-12">
                                <h4 className="text-2xl font-semibold mb-4 text-indigo-700">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition duration-300">
                                        <FaFacebookF className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition duration-300">
                                        <FaTwitter className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition duration-300">
                                        <FaInstagram className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 transition duration-300">
                                        <FaLinkedinIn className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-16"
                    >
                        <h3 className="text-3xl font-semibold mb-6 text-indigo-700">Our Location</h3>
                        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14126.303518993462!2d85.31153367801643!3d27.73687059206286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1920c7d7b1c3%3A0x3c0b3c1d5e4f2a61!2sGongabu%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1653905955250!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
