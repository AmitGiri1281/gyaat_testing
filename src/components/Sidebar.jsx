import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, FiMap, FiCreditCard, FiUsers, 
  FiSettings, FiVideo, FiCalendar 
} from 'react-icons/fi';
import Logo from './Logo';

function Sidebar({ role }) {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const navLinkClass = (active) => 
    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
      active ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
    }`;
  
  // Different menu items based on user role
  const renderNavLinks = () => {
    switch(role) {
      case 'student':
        return (
          <>
            <Link to="/student" className={navLinkClass(isActive('/student'))}>
              <FiHome size={20} />
              <span>Dashboard</span>
            </Link>
            <Link to="/student/track" className={navLinkClass(isActive('/student/track'))}>
              <FiMap size={20} />
              <span>Track My Bus</span>
            </Link>
            <Link to="/subscription" className={navLinkClass(isActive('/subscription'))}>
              <FiCreditCard size={20} />
              <span>Subscription</span>
            </Link>
          </>
        );
      
      case 'parent':
        return (
          <>
            <Link to="/parent" className={navLinkClass(isActive('/parent'))}>
              <FiHome size={20} />
              <span>Dashboard</span>
            </Link>
            <Link to="/parent/track" className={navLinkClass(isActive('/parent/track'))}>
              <FiMap size={20} />
              <span>Live Tracking</span>
            </Link>
            <Link to="/parent/cctv" className={navLinkClass(isActive('/parent/cctv'))}>
              <FiVideo size={20} />
              <span>CCTV Feed</span>
            </Link>
            <Link to="/subscription" className={navLinkClass(isActive('/subscription'))}>
              <FiCreditCard size={20} />
              <span>Subscription</span>
            </Link>
          </>
        );
      
      case 'admin':
        return (
          <>
            <Link to="/admin" className={navLinkClass(isActive('/admin'))}>
              <FiHome size={20} />
              <span>Dashboard</span>
            </Link>
            <Link to="/admin/routes" className={navLinkClass(isActive('/admin/routes'))}>
              <FiMap size={20} />
              <span>Routes</span>
            </Link>
            <Link to="/admin/buses" className={navLinkClass(isActive('/admin/buses'))}>
              <FiCalendar size={20} />
              <span>Bus Schedule</span>
            </Link>
            <Link to="/admin/users" className={navLinkClass(isActive('/admin/users'))}>
              <FiUsers size={20} />
              <span>Users</span>
            </Link>
            <Link to="/admin/settings" className={navLinkClass(isActive('/admin/settings'))}>
              <FiSettings size={20} />
              <span>Settings</span>
            </Link>
          </>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b">
        <Link to="/" className="flex items-center">
          <Logo className="h-8 w-auto" />
          <span className="ml-2 text-xl font-bold text-primary">GreenRide</span>
        </Link>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {renderNavLinks()}
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t">
        <div className="text-xs text-gray-500">
          <p>© 2025 GreenRide</p>
          <p>Smarter, Safer & Greener Rides</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;