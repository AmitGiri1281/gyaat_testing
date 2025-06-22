import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiMail, FiPhone, FiMapPin, FiClock,
  FiFacebook, FiInstagram, FiTwitter, FiLinkedin,
  FiYoutube, FiHome, FiUser, FiBookmark,
  FiHelpCircle, FiShield, FiBriefcase,
  FiLayers, FiTool, FiTruck, FiFeather, FiAnchor,
  FiChevronRight
} from 'react-icons/fi';

import { FaRupeeSign } from 'react-icons/fa'; // ✅ Use Font Awesome's rupee icon


import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Business services data
  const businessServices = [
    {
      title: "Aashray Realty Consultancy",
      description: "From your dream to your home",
      icon: <FiHome className="text-amber-500" />,
      services: [
        "Residential Properties",
        "Commercial Properties",
        "Primary/Secondary Market",
        "Developer Partnerships"
      ],
      email: "aashrayrealtyconsultancy@gmail.com"
      
    },
    {
      title: "Sampaadana",
      description: "Premium building materials",
      icon: <FiLayers className="text-amber-500" />,
      services: [
        "Tiles & Flooring",
        "Solar Solutions",
        "Elevators",
        "External Cladding"
      ]
    },
    
    {
      title: "Siddhant",
      description: "Comprehensive real estate legal services",
      icon: <FiShield className="text-amber-500" />,
      services: [
        "Property Due Diligence",
        "Sale Deed & Registration",
        "Title Verification",
        "Property Transfer"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Kalpa",
      description: "Designing your vision",
      icon: <FiFeather className="text-amber-500" />,
      services: [
        "Architectural Design",
        "Interior Design",
        "Space Planning",
        "3D Visualization"
      ]
    },
    {
      title: "Neeti BMS",
      description: "Safety and security solutions",
      icon: <FiTool className="text-amber-500" />,
      services: [
        "Security Systems",
        "Building Automation",
        "Maintenance Contracts",
        "Manpower Management"
      ]
    },
   {
      title: "Vriddhi ",
      description: "Financial solutions for all needs",
      icon: <FaRupeeSign className="text-amber-500" />,
      services: [
        "Home Loans",
        "Loan Against Property",
        "Business Loans",
        "Personal Loans"
      ],
      email: "vriddhi.gyaat@gmail.com"
    },
    {
      title: "Manthan",
      description: "Consultancy & Turnkey Projects",
      icon: <FiAnchor className="text-amber-500" />,
      services: [
        "Agricultural Consultancy",
        "Industrial Projects",
        "Medical Setups",
        "Project Management"
      ]
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Properties", href: "/properties" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" }
  ];

  const contactInfo = [
    { icon: <FiMapPin />, text: "Gyaat Solutions, Pune, Maharashtra" },
    { icon: <FiPhone />, text: "+91 77580 59177" },
    { icon: <FiMail />, text: "infogyaat@gmail.com" },
    { icon: <FiClock />, text: "Mon-Sat: 9:00 AM - 7:00 PM" }
  ];

  const socialLinks = [
    { icon: <FiFacebook />, name: "Facebook", href: "#" },
    { icon: <FiInstagram />, name: "Instagram", href: "#" },
    { icon: <FiTwitter />, name: "Twitter", href: "#" },
    { icon: <FiLinkedin />, name: "LinkedIn", href: "#" },
    { icon: <FiYoutube />, name: "YouTube", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand and contact info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-amber-600 text-white p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Gyaat</h2>
            </div>
            <p className="text-gray-400 mb-6">#lets find solutions - Comprehensive real estate and business solutions under one roof</p>
            
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-500 mt-1 mr-3">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 hover:bg-amber-600 text-gray-300 hover:text-white p-2 rounded-full transition-colors"
                    whileHover={{ y: -3 }}
                    aria-label={social.name}
                  >
                    {React.cloneElement(social.icon, { size: 18 })}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <FiChevronRight className="text-amber-500 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors flex items-center"
                  >
                    <FiChevronRight className="mr-1 text-xs text-amber-500" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Main Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Core Services</h3>
            <div className="space-y-6">
              {businessServices.map((service, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    {service.icon}
                    <h4 className="ml-2 font-medium text-white">{service.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{service.description}</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <FiChevronRight className="mr-1 text-amber-500 text-xs" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {service.email && (
                    <div className="mt-2 flex items-center text-xs text-amber-400">
                      <FiMail className="mr-1" size={12} />
                      {service.email}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Specialized Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {additionalServices.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/30 hover:bg-gray-800/50 p-4 rounded-lg border border-gray-800 hover:border-amber-500/30 transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center mb-2">
                    {service.icon}
                    <h4 className="ml-2 font-medium text-white">{service.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{service.description}</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {service.services.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center">
                        <FiChevronRight className="mr-1 text-amber-500 text-xs" />
                        {item}
                      </li>
                    ))}
                    {service.services.length > 3 && (
                      <li className="text-amber-500 text-xs mt-1">+ {service.services.length - 3} more</li>
                    )}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>
        
        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Gyaat Solutions. All rights reserved. 
            <span className="mx-2">|</span>
            <Link to="/privacy" className="hover:text-amber-500">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="hover:text-amber-500">Terms of Service</Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Partnered with:</span>
            <div className="flex space-x-4">
              <img src="https://via.placeholder.com/80x30?text=IJM" alt="IJM City" className="h-6 opacity-70 hover:opacity-100 transition" />
              <img src="https://via.placeholder.com/80x30?text=Godrej" alt="Godrej Properties" className="h-6 opacity-70 hover:opacity-100 transition" />
              <img src="https://via.placeholder.com/80x30?text=Kalpataru" alt="Kalpataru Group" className="h-6 opacity-70 hover:opacity-100 transition" />
            </div>
          </div>
        </div>
        
        {/* Back to top button */}
        <motion.div 
          className="fixed bottom-6 right-6 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg cursor-pointer z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;