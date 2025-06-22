import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';

// Layouts
import MainLayout from './components/layouts/MainLayout';


// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';




import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

// Protected Route
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
         
          <Route path="contact" element={<Contact />} />
        </Route>


       

     

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
