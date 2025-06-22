import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  FiMenu, FiX, FiSearch, FiUser, FiHome, FiDollarSign, FiMail, 
  FiMapPin, FiBriefcase, FiLayers, FiShield, FiTool, FiPhone,
  FiHeart, FiBookmark, FiBell
} from 'react-icons/fi';
import { 
  FaChevronDown, FaBuilding, FaHome, FaIndustry, 
  FaHandshake, FaWhatsapp 
} from 'react-icons/fa';
import { 
  GiHouseKeys, GiOfficeChair, GiSolarPower, GiFarmer 
} from 'react-icons/gi';
import { 
  MdApartment, MdRealEstateAgent, MdEngineering, 
  MdDesignServices, MdSecurity 
} from 'react-icons/md';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const servicesRef = useRef(null);
  const mobileServicesRef = useRef(null);
  const searchRef = useRef(null);
  const userMenuRef = useRef(null);
  const notificationsRef = useRef(null);

  // Mock notifications
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New property in Pune matches your criteria', time: '2 hours ago', read: false },
    { id: 2, text: 'Your loan application is under review', time: '1 day ago', read: false },
    { id: 3, text: 'Price reduced on a property you saved', time: '3 days ago', read: true },
  ]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (mobileServicesRef.current && !mobileServicesRef.current.contains(event.target)) {
        setMobileServicesOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setSearchOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
    setUserMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const markNotificationsAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <a href="tel:7758059177" className="flex items-center hover:text-blue-200 transition-colors">
              <FiPhone className="mr-1" /> 7758059177
            </a>
            <a href="mailto:infogyaat@gmail.com" className="flex items-center hover:text-blue-200 transition-colors">
              <FiMail className="mr-1" /> infogyaat@gmail.com
            </a>
            <a href="https://wa.me/917758059177" className="flex items-center hover:text-blue-200 transition-colors">
              <FaWhatsapp className="mr-1" /> WhatsApp
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/partners" className="hover:text-blue-200 transition-colors">Our Partners</Link>
            <Link to="/careers" className="hover:text-blue-200 transition-colors">Careers</Link>
            <div className="hidden md:flex items-center space-x-3">
              <span>Connect:</span>
              <a href="#" className="hover:text-blue-200 transition-colors" aria-label="Facebook">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors" aria-label="Instagram">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors" aria-label="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo and mobile menu button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none mr-2"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
              
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-800">Gyaat</span>
                <span className="ml-2 text-xs italic text-gray-600 hidden md:block">#lets find solutions</span>
              </Link>
            </div>
            
            {/* Desktop search bar */}
            <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
              <form onSubmit={handleSearch} className="w-full relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search properties, locations..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit"
                  className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-white bg-blue-600 rounded-r-full hover:bg-blue-700 focus:outline-none transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              
              <div className="relative" ref={servicesRef}>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 flex items-center transition-colors"
                >
                  Services
                  <FaChevronDown size={12} className={`ml-1 transition-transform ${servicesOpen ? 'transform rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-[800px] bg-white text-gray-800 rounded-lg shadow-2xl overflow-hidden z-50 border border-gray-200"
                    >
                      <div className="grid grid-cols-3 gap-0">
                        {/* Aashray Realty */}
                        <div className="p-4 border-r border-b border-gray-100">
                          <div className="flex items-center mb-3">
                            <FaHome className="text-blue-600 text-xl mr-2" />
                            <h3 className="font-bold text-lg text-blue-800">Aashray Realty</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-3 italic">#From your dream to your home</p>
                          <div className="space-y-2">
                            <Link to="/services/realty/residential" className="flex items-center text-sm hover:text-blue-600 transition-colors">
                              <MdApartment className="mr-2" /> Residential Properties
                            </Link>
                            <Link to="/services/realty/commercial" className="flex items-center text-sm hover:text-blue-600 transition-colors">
                              <FaBuilding className="mr-2" /> Commercial Spaces
                            </Link>
                            <Link to="/services/realty/industrial" className="flex items-center text-sm hover:text-blue-600 transition-colors">
                              <FaIndustry className="mr-2" /> Industrial Land
                            </Link>
                            <Link to="/services/realty/partners" className="flex items-center text-sm hover:text-blue-600 transition-colors">
                              <FaHandshake className="mr-2" /> Channel Partners
                            </Link>
                          </div>
                        </div>
                        
                        {/* Vriddhi Loans */}
                        <div className="p-4 border-r border-b border-gray-100">
                          <div className="flex items-center mb-3">
                            <FiDollarSign className="text-green-600 text-xl mr-2" />
                            <h3 className="font-bold text-lg text-green-800">Vriddhi Loans</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">PAN India financial solutions</p>
                          <div className="space-y-2">
                            <Link to="/services/loans/housing" className="flex items-center text-sm hover:text-green-600 transition-colors">
                              <GiHouseKeys className="mr-2" /> Housing Loan
                            </Link>
                            <Link to="/services/loans/property" className="flex items-center text-sm hover:text-green-600 transition-colors">
                              <MdRealEstateAgent className="mr-2" /> Loan Against Property
                            </Link>
                            <Link to="/services/loans/business" className="flex items-center text-sm hover:text-green-600 transition-colors">
                              <FiBriefcase className="mr-2" /> Business Loans
                            </Link>
                            <Link to="/services/loans/personal" className="flex items-center text-sm hover:text-green-600 transition-colors">
                              <FiUser className="mr-2" /> Personal Loan
                            </Link>
                          </div>
                        </div>
                        
                        {/* Other Services */}
                        <div className="p-4 border-b border-gray-100">
                          <h3 className="font-bold text-lg text-gray-800 mb-3">Support Services</h3>
                          <div className="space-y-3">
                            <Link to="/services/legal" className="flex items-center text-sm hover:text-purple-600 transition-colors">
                              <FiShield className="text-purple-600 mr-2" /> Siddhant Legal Services
                            </Link>
                            <Link to="/services/architecture" className="flex items-center text-sm hover:text-orange-600 transition-colors">
                              <MdDesignServices className="text-orange-600 mr-2" /> Kalpa Architecture
                            </Link>
                            <Link to="/services/bms" className="flex items-center text-sm hover:text-red-600 transition-colors">
                              <MdSecurity className="text-red-600 mr-2" /> Neeti BMS
                            </Link>
                            <Link to="/services/suppliers" className="flex items-center text-sm hover:text-amber-600 transition-colors">
                              <GiSolarPower className="text-amber-600 mr-2" /> Sampaadana Suppliers
                            </Link>
                            <Link to="/services/consultancy" className="flex items-center text-sm hover:text-teal-600 transition-colors">
                              <GiFarmer className="text-teal-600 mr-2" /> Manthan Consultancy
                            </Link>
                          </div>
                        </div>
                        
                        {/* Bottom row */}
                        <div className="col-span-3 bg-gray-50 p-4 border-t border-gray-200">
                          <div className="flex justify-between items-center">
                            <Link to="/services" className="text-blue-600 font-medium hover:underline transition-colors">
                              Explore all services →
                            </Link>
                            <div className="flex space-x-4">
                              <a href="mailto:aashrayrealtyconsultancy@gmail.com" className="text-sm flex items-center hover:text-blue-600 transition-colors">
                                <FiMail className="mr-1" /> Realty Contact
                              </a>
                              <a href="mailto:vriddhi.gyaat@gmail.com" className="text-sm flex items-center hover:text-blue-600 transition-colors">
                                <FiMail className="mr-1" /> Loans Contact
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link to="/properties" className="px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Properties
              </Link>
              
              <Link to="/about" className="px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              
              <Link to="/contact" className="px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              
              {currentUser ? (
                <>
                  <div className="relative" ref={notificationsRef}>
                    <button 
                      onClick={() => {
                        setNotificationsOpen(!notificationsOpen);
                        if (notificationsOpen) markNotificationsAsRead();
                      }}
                      className="p-2 rounded-full hover:bg-gray-100 relative transition-colors"
                    >
                      <FiBell size={20} />
                      {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {unreadCount}
                        </span>
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {notificationsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-200"
                        >
                          <div className="py-1">
                            <div className="px-4 py-2 border-b border-gray-200 font-medium bg-gray-50">
                              Notifications
                            </div>
                            {notifications.length > 0 ? (
                              notifications.map(notification => (
                                <div 
                                  key={notification.id} 
                                  className={`px-4 py-3 hover:bg-gray-50 transition-colors ${!notification.read ? 'bg-blue-50' : ''}`}
                                >
                                  <p className="text-sm">{notification.text}</p>
                                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                </div>
                              ))
                            ) : (
                              <div className="px-4 py-3 text-sm text-gray-500">
                                No new notifications
                              </div>
                            )}
                            <Link 
                              to="/notifications" 
                              className="block px-4 py-2 text-sm text-center text-blue-600 border-t border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                              View all notifications
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <Link to="/saved" className="p-2 rounded-full hover:bg-gray-100 relative transition-colors">
                    <FiBookmark size={20} />
                  </Link>
                  
                  <div className="relative" ref={userMenuRef}>
                    <button 
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center space-x-1 focus:outline-none"
                    >
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800">
                        {currentUser.photoURL ? (
                          <img src={currentUser.photoURL} alt="Profile" className="h-full w-full rounded-full" />
                        ) : (
                          <FiUser size={16} />
                        )}
                      </div>
                      <FaChevronDown size={12} className={`transition-transform ${userMenuOpen ? 'transform rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {userMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-200"
                        >
                          <div className="py-1">
                            <div className="px-4 py-2 border-b border-gray-200">
                              <p className="text-sm font-medium">{currentUser.displayName || 'User'}</p>
                              <p className="text-xs text-gray-500">{currentUser.email}</p>
                            </div>
                            <Link 
                              to="/dashboard" 
                              className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                            >
                              My Dashboard
                            </Link>
                            <Link 
                              to="/profile" 
                              className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                            >
                              My Profile
                            </Link>
                            <Link 
                              to="/saved" 
                              className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                            >
                              Saved Properties
                            </Link>
                            <button 
                              onClick={handleLogout}
                              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 border-t border-gray-200 transition-colors"
                            >
                              Sign Out
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="px-4 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    Login
                  </Link>
                  <Link to="/register" className="ml-2 px-4 py-2 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    Register
                  </Link>
                </>
              )}
            </div>
            
            {/* Mobile navigation buttons */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <FiSearch size={20} />
              </button>
              
              {currentUser && (
                <>
                  <Link to="/saved" className="p-2 rounded-full hover:bg-gray-100 relative transition-colors">
                    <FiBookmark size={20} />
                  </Link>
                  
                  <div className="relative">
                    <button 
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center space-x-1 focus:outline-none"
                    >
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800">
                        {currentUser.photoURL ? (
                          <img src={currentUser.photoURL} alt="Profile" className="h-full w-full rounded-full" />
                        ) : (
                          <FiUser size={16} />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {userMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-200"
                        >
                          <div className="py-1">
                            <div className="px-4 py-2 border-b border-gray-200">
                              <p className="text-sm font-medium">{currentUser.displayName || 'User'}</p>
                              <p className="text-xs text-gray-500">{currentUser.email}</p>
                            </div>
                            <Link 
                              to="/dashboard" 
                              className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                            >
                              My Dashboard
                            </Link>
                            <Link 
                              to="/profile" 
                              className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                            >
                              My Profile
                            </Link>
                            <Link 
                              to="/saved" 
                              className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                            >
                              Saved Properties
                            </Link>
                            <button 
                              onClick={handleLogout}
                              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 border-t border-gray-200 transition-colors"
                            >
                              Sign Out
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Mobile search bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
                ref={searchRef}
              >
                <form onSubmit={handleSearch} className="pb-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiSearch className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search properties..."
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Home
                </Link>
                
                <div className="relative" ref={mobileServicesRef}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <span>Our Services</span>
                    <FaChevronDown size={12} className={`transition-transform ${mobileServicesOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  {mobileServicesOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {/* Aashray Realty */}
                      <div className="pt-2">
                        <div className="flex items-center text-blue-600">
                          <FaHome className="mr-2" />
                          <span className="font-medium">Aashray Realty</span>
                        </div>
                        <div className="pl-6 mt-1 space-y-2">
                          <Link to="/services/realty/residential" className="block text-sm hover:text-blue-600 transition-colors">
                            Residential Properties
                          </Link>
                          <Link to="/services/realty/commercial" className="block text-sm hover:text-blue-600 transition-colors">
                            Commercial Spaces
                          </Link>
                          <Link to="/services/realty/industrial" className="block text-sm hover:text-blue-600 transition-colors">
                            Industrial Land
                          </Link>
                        </div>
                      </div>
                      
                      {/* Vriddhi Loans */}
                      <div className="pt-2">
                        <div className="flex items-center text-green-600">
                          <FiDollarSign className="mr-2" />
                          <span className="font-medium">Vriddhi Loans</span>
                        </div>
                        <div className="pl-6 mt-1 space-y-2">
                          <Link to="/services/loans/housing" className="block text-sm hover:text-green-600 transition-colors">
                            Housing Loan
                          </Link>
                          <Link to="/services/loans/property" className="block text-sm hover:text-green-600 transition-colors">
                            Loan Against Property
                          </Link>
                          <Link to="/services/loans/business" className="block text-sm hover:text-green-600 transition-colors">
                            Business Loans
                          </Link>
                        </div>
                      </div>
                      
                      {/* Other Services */}
                      <div className="pt-2">
                        <div className="font-medium">Support Services</div>
                        <div className="pl-2 mt-1 space-y-2">
                          <Link to="/services/legal" className="flex items-center text-sm hover:text-purple-600 transition-colors">
                            <FiShield className="text-purple-600 mr-2" /> Siddhant Legal
                          </Link>
                          <Link to="/services/architecture" className="flex items-center text-sm hover:text-orange-600 transition-colors">
                            <MdDesignServices className="text-orange-600 mr-2" /> Kalpa Architecture
                          </Link>
                          <Link to="/services/bms" className="flex items-center text-sm hover:text-red-600 transition-colors">
                            <MdSecurity className="text-red-600 mr-2" /> Neeti BMS
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <Link
                  to="/properties"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Properties
                </Link>
                
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  About Us
                </Link>
                
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Contact
                </Link>
                
                {!currentUser && (
                  <div className="pt-2 border-t border-gray-200">
                    <Link
                      to="/login"
                      className="block w-full px-4 py-2 text-center rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors mb-2"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block w-full px-4 py-2 text-center rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Navbar