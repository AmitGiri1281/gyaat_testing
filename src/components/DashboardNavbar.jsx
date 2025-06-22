import { FiMenu, FiBell, FiUser, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function DashboardNavbar({ username, role, toggleSidebar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  const notificationCount = 3; // Mock notification count
  
  const roleLabel = {
    'student': 'Student',
    'parent': 'Parent',
    'admin': 'Admin'
  };
  
  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="flex items-center justify-between">
        {/* Menu toggle and title */}
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="md:hidden mr-4 p-2 rounded-md text-gray-700 hover:text-primary"
          >
            <FiMenu size={24} />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">{roleLabel[role]} Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, {username}</p>
          </div>
        </div>
        
        {/* Notifications and profile */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button className="p-2 rounded-full text-gray-700 hover:bg-gray-100">
              <FiBell size={20} />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {notificationCount}
                </span>
              )}
            </button>
          </div>
          
          {/* Profile dropdown */}
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 p-2 rounded-full text-gray-700 hover:bg-gray-100"
            >
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <FiUser size={16} />
              </div>
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                >
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-medium text-gray-900">{username}</p>
                    <p className="text-xs text-gray-500">{roleLabel[role]}</p>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <FiLogOut className="mr-2" size={16} />
                    Sign out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;