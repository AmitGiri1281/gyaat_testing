import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FiHome, FiMapPin, FiDollarSign, FiHeart, FiSearch,
  FiUser, FiPhone, FiMail, FiClock, FiCheckCircle,
  FiArrowRight, FiChevronRight, FiStar, FiGrid, FiLayers,
  FiShield, FiBriefcase, FiTool, FiFeather, FiAnchor
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import all images

import heroFallback from '../assets/images/hero-realestate.jpg';
import property1 from '../assets/images/property-1.jpg';
import property2 from '../assets/images/property-2.jpg';
import property3 from '../assets/images/property-3.jpg';
import property4 from '../assets/images/property-4.jpg';
import aboutTeam from '../assets/images/about-team.jpg';
import patternBg from '../assets/images/pattern.png';
import service1 from '../assets/images/service-1.jpg';
import service2 from '../assets/images/service-2.jpg';
import service3 from '../assets/images/service-3.jpg';
import service4 from '../assets/images/service-4.jpg';
import service5 from '../assets/images/service-5.jpg';
import service6 from '../assets/images/service-6.jpg';
import service7 from '../assets/images/service-7.jpg';
import city1 from '../assets/images/city-1.jpg';
import city2 from '../assets/images/city-2.jpg';
import city3 from '../assets/images/city-3.jpg';
import city4 from '../assets/images/city-4.jpg';
import city5 from '../assets/images/city-5.jpg';
import city6 from '../assets/images/city-6.jpg';

// Data
const propertyTypes = [
  { name: "Residential", icon: <FiHome />, count: 245 },
  { name: "Commercial", icon: <FiBriefcase />, count: 89 },
  { name: "Plots", icon: <FiLayers />, count: 112 },
  { name: "Villas", icon: <FiHome />, count: 67 },
  { name: "Farm Houses", icon: <FiHome />, count: 34 },
  { name: "Industrial", icon: <FiTool />, count: 42 }
];

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Apartment in City Center",
    location: "Mumbai, Maharashtra",
    price: "₹2.5 Cr",
    beds: 3,
    baths: 2,
    area: "1800 sq.ft",
    image: property1,
    featured: true,
    type: "Residential"
  },
  {
    id: 2,
    title: "Modern Office Space",
    location: "Bangalore, Karnataka",
    price: "₹4.2 Cr",
    beds: "Open",
    baths: 4,
    area: "3200 sq.ft",
    image: property2,
    featured: true,
    type: "Commercial"
  },
  {
    id: 3,
    title: "Premium Villa with Pool",
    location: "Goa",
    price: "₹5.8 Cr",
    beds: 4,
    baths: 3,
    area: "4500 sq.ft",
    image: property3,
    featured: true,
    type: "Villas"
  },
  {
    id: 4,
    title: "Residential Plot",
    location: "Pune, Maharashtra",
    price: "₹1.2 Cr",
    beds: "-",
    baths: "-",
    area: "2400 sq.ft",
    image: property4,
    featured: true,
    type: "Plots"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Home Buyer",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=RajeshSharma",
    content: "ARC made my home buying experience seamless. Their team was professional and understood exactly what I was looking for."
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Investor",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=PriyaPatel",
    content: "As an NRI investor, I was hesitant about buying property in India. ARC's transparent process and regular updates gave me confidence."
  },
  {
    id: 3,
    name: "Amit Desai",
    role: "Commercial Client",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=AmitDesai",
    content: "We found the perfect office space for our startup through ARC. Their market knowledge saved us months of searching."
  }
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2500+", label: "Happy Clients" },
  { value: "₹500Cr+", label: "Property Value" },
  { value: "50+", label: "Locations" }
];

const cities = [
  { name: "Mumbai", properties: 342, image: city1 },
  { name: "Delhi", properties: 289, image: city2 },
  { name: "Bangalore", properties: 267, image: city3 },
  { name: "Hyderabad", properties: 198, image: city4 },
  { name: "Pune", properties: 231, image: city5 },
  { name: "Chennai", properties: 187, image: city6 }
];

const businessServices = [
  {
    title: "Aashray Realty",
    description: "From your dream to your home",
    icon: <FiHome className="text-amber-500" />,
    services: [
      "Residential Properties",
      "Commercial Properties",
      "Primary/Secondary Market",
      "Developer Partnerships"
    ],
    email: "aashrayrealtyconsultancy@gmail.com",
    image: service1
  },
  {
    title: "Vriddhi Loans",
    description: "Financial solutions for all needs",
    icon: <FiDollarSign className="text-amber-500" />,
    services: [
      "Home Loans",
      "Loan Against Property",
      "Business Loans",
      "Personal Loans"
    ],
    email: "vriddhi.gyaat@gmail.com",
    image: service2
  },
  {
    title: "Siddhant Legal",
    description: "Comprehensive real estate legal services",
    icon: <FiShield className="text-amber-500" />,
    services: [
      "Property Due Diligence",
      "Sale Deed & Registration",
      "Title Verification",
      "Property Transfer"
    ],
    image: service3
  },
  {
    title: "Kalpa Architectural",
    description: "Designing your vision",
    icon: <FiFeather className="text-amber-500" />,
    services: [
      "Architectural Design",
      "Interior Design",
      "Space Planning",
      "3D Visualization"
    ],
    image: service4
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
    ],
    image: service5
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
    ],
    image: service6
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
    ],
    image: service7
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProperties = featuredProperties.filter(property => {
    const matchesFilter = activeFilter === "All" || property.type === activeFilter;
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = !selectedCity || property.location.includes(selectedCity);
    
    return matchesFilter && matchesSearch && matchesCity;
  });

  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowSearchModal(false);
    // You would typically navigate to search results here
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % businessServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-[Poppins] bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            poster={heroFallback}
          >
            {/* <source src={heroVideo} type="video/mp4" /> */}
            <img src={heroFallback} alt="Luxury Home" className="w-full h-full object-cover" />
          </video>
        </div>
        
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              className="text-white max-w-2xl px-4 sm:px-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Find Your <span className="text-amber-500">Dream</span> Property
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Gyaat - Comprehensive real estate and business solutions under one roof
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  onClick={() => setShowSearchModal(true)}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold shadow-lg flex items-center justify-center gap-3 transition-all duration-300"
                >
                  <FiSearch className="text-xl" />
                  Search Properties
                </button>
                <Link
                  to="/services"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Stats floating bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md z-20 py-4 sm:py-6 shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Search Modal */}
      <AnimatePresence>
        {showSearchModal && (
          <motion.div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Advanced Property Search</h3>
                  <button 
                    onClick={() => setShowSearchModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <form onSubmit={handleSearchSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Location</label>
                      <select 
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                      >
                        <option value="">Any Location</option>
                        {cities.map(city => (
                          <option key={city.name} value={city.name}>{city.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Property Type</label>
                      <select 
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        value={activeFilter}
                        onChange={(e) => setActiveFilter(e.target.value)}
                      >
                        <option value="All">All Types</option>
                        {propertyTypes.map(type => (
                          <option key={type.name} value={type.name}>{type.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Price Range (₹)</label>
                      <div className="flex items-center gap-3">
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          step="5"
                          className="w-full"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
                        />
                        <span className="text-amber-600 font-medium whitespace-nowrap text-sm sm:text-base">
                          ₹{priceRange[0]}L - ₹{priceRange[1]}Cr
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Keywords</label>
                      <input 
                        type="text" 
                        placeholder="Search by name, features..."
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-3 sm:gap-4">
                    <button 
                      type="button"
                      onClick={() => setShowSearchModal(false)}
                      className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors text-sm sm:text-base"
                    >
                      <FiSearch />
                      Search Properties
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Property Types */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Explore <span className="text-amber-600">Property</span> Types
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the perfect property that matches your needs and lifestyle
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {propertyTypes.map((type, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer group"
              >
                <div className="p-4 sm:p-6 text-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-amber-600 text-xl sm:text-2xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    {type.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{type.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{type.count} Properties</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                <span className="text-amber-600">Featured</span> Properties
              </h2>
              <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Handpicked properties for you</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap gap-1 sm:gap-2 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
                {["All", ...propertyTypes.map(t => t.name)].map((filter, i) => (
                  <button
                    key={i}
                    className={`px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${activeFilter === filter ? 'bg-amber-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
          
          {filteredProperties.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredProperties.map((property, index) => (
                <motion.div 
                  key={property.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-48 sm:h-60 object-cover"
                      loading="lazy"
                    />
                    {property.featured && (
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-amber-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                    <button className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 p-1 sm:p-2 rounded-full text-gray-800 hover:text-amber-600 transition-colors">
                      <FiHeart className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2">{property.title}</h3>
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded whitespace-nowrap">
                        {property.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-3 sm:mb-4">
                      <FiMapPin className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm line-clamp-1">{property.location}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-600">
                        <span className="flex items-center">
                          <FiHome className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
                          {property.beds}
                        </span>
                        <span className="flex items-center">
                          <FiCheckCircle className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
                          {property.baths}
                        </span>
                        <span className="flex items-center">
                          <FiLayers className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
                          {property.area}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 sm:pt-4 border-t border-gray-100">
                      <span className="text-lg sm:text-xl font-bold text-amber-600">{property.price}</span>
                      <button 
                        onClick={() => handlePropertyClick(property.id)}
                        className="text-amber-600 hover:text-amber-700 font-medium flex items-center text-sm sm:text-base"
                      >
                        View Details <FiChevronRight className="ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-8 sm:py-12 bg-white rounded-xl shadow-sm">
              <h3 className="text-lg sm:text-xl font-medium text-gray-700">No properties match your current filters</h3>
              <button 
                onClick={() => {
                  setActiveFilter("All");
                  setSearchQuery("");
                  setSelectedCity("");
                }}
                className="mt-3 sm:mt-4 text-amber-600 hover:text-amber-700 font-medium text-sm sm:text-base"
              >
                Clear filters
              </button>
            </div>
          )}
          
          <motion.div 
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/properties"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-amber-600 text-amber-600 rounded-lg font-medium hover:bg-amber-600 hover:text-white transition-colors text-sm sm:text-base"
            >
              View All Properties
              <FiArrowRight className="ml-1 sm:ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our <span className="text-amber-600">Comprehensive</span> Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions for all your real estate needs
            </p>
          </motion.div>

          <div className="relative h-80 sm:h-96 mb-12 sm:mb-16">
            {businessServices.map((service, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-1000 ${index === activeService ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                animate={{
                  opacity: index === activeService ? 1 : 0,
                  y: index === activeService ? 0 : 20
                }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="lg:w-1/2 h-48 sm:h-64 lg:h-full">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-3 sm:mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {service.services.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700 text-xs sm:text-sm">
                          <FiCheckCircle className="text-amber-500 mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {service.email && (
                      <div className="mt-auto">
                        <Link 
                          to={`/contact?service=${service.title}`}
                          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
                        >
                          Contact for {service.title}
                          <FiArrowRight className="ml-1 sm:ml-2" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-1 sm:gap-2">
            {businessServices.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${index === activeService ? 'bg-amber-600' : 'bg-gray-300'}`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            <motion.div 
              className="lg:w-1/2 w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={aboutTeam} 
                  alt="Gyaat Team" 
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl font-semibold">15+ Years of Trusted Service</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Serving clients since 2008</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Choose <span className="text-amber-600">Gyaat</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <FiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Trusted Expertise</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      With over 15 years in the real estate industry, we bring unmatched market knowledge and negotiation skills.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <FiShield className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Verified Properties</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Every listing undergoes strict verification for legal clearances and accurate documentation.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <FiUser className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Personalized Service</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Dedicated relationship managers provide tailored solutions for your unique property needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <FiDollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Best Price Guarantee</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Our strong market presence ensures you get the best deals whether buying or selling.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our <span className="text-amber-600">Clients</span> Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of happy customers across India
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={!isMobile}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }}
              className="pb-8 sm:pb-12"
            >
              {testimonials.map(testimonial => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md h-full mx-2 sm:mx-0">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-amber-100 mr-3 sm:mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-amber-600">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">"{testimonial.content}"</p>
                    
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="fill-current w-3 h-3 sm:w-4 sm:h-4" />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Popular <span className="text-amber-600">Locations</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore properties in these high-demand cities
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cities.map((city, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{city.name}</h3>
                  <p className="text-white/80 text-sm sm:text-base">{city.properties} Properties</p>
                  <Link 
                    to={`/properties?city=${city.name}`}
                    className="mt-2 sm:mt-3 inline-flex items-center text-amber-400 hover:text-amber-300 font-medium text-sm sm:text-base"
                  >
                    View Properties <FiArrowRight className="ml-1 sm:ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={patternBg} alt="Pattern background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-800/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Find Your <span className="text-amber-400">Dream</span> Property?
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our experts guide you through every step of your property journey
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold shadow-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <FiPhone />
                Contact Us
              </Link>
              <Link 
                to="/properties"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-white/10 text-white border border-white rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <FiSearch />
                Browse Properties
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;