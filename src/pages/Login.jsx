// // // // // import { useState } from 'react';
// // // // // import { Link, useNavigate } from 'react-router-dom';
// // // // // import { FiEye, FiEyeOff } from 'react-icons/fi';
// // // // // import { useAuth } from '../context/AuthContext';
// // // // // import { toast } from 'react-toastify';
// // // // // import { motion } from 'framer-motion';

// // // // // function Login() {
// // // // //   const [formData, setFormData] = useState({
// // // // //     email: '',
// // // // //     password: '',
// // // // //     role: 'student'
// // // // //   });
// // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const { login } = useAuth();
// // // // //   const navigate = useNavigate();
  
// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData(prev => ({ ...prev, [name]: value }));
// // // // //   };
  
// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
    
// // // // //     if (!formData.email || !formData.password) {
// // // // //       toast.error('Please fill in all fields');
// // // // //       return;
// // // // //     }
    
// // // // //     setIsLoading(true);
    
// // // // //     try {
// // // // //       // In a real app, this would validate with an API
// // // // //       // For demo purposes, we'll just simulate a successful login
      
// // // // //       // Mock user data
// // // // //       const userData = {
// // // // //         id: 'user-123',
// // // // //         name: formData.email.split('@')[0],
// // // // //         email: formData.email,
// // // // //         role: formData.role,
// // // // //         // Add role-specific data
// // // // //         ...(formData.role === 'student' && { 
// // // // //           studentId: 'ST-12345',
// // // // //           school: 'Green Valley High School',
// // // // //           grade: '10th',
// // // // //           subscription: {
// // // // //             plan: 'Monthly',
// // // // //             expiresAt: '2025-05-30'
// // // // //           }
// // // // //         }),
// // // // //         ...(formData.role === 'parent' && {
// // // // //           children: [
// // // // //             { id: 'ST-12345', name: 'Alex', school: 'Green Valley High School', grade: '10th' }
// // // // //           ]
// // // // //         })
// // // // //       };
      
// // // // //       await login(userData);
      
// // // // //       toast.success('Login successful!');
      
// // // // //       // Redirect based on role
// // // // //       if (formData.role === 'student') {
// // // // //         navigate('/student');
// // // // //       } else if (formData.role === 'parent') {
// // // // //         navigate('/parent');
// // // // //       } else if (formData.role === 'admin') {
// // // // //         navigate('/admin');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       toast.error('Login failed. Please check your credentials and try again.');
// // // // //       console.error(error);
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };
  
// // // // //   return (
// // // // //     <div className="min-h-screen py-12 flex items-center justify-center bg-secondary">
// // // // //       <motion.div 
// // // // //         className="w-full max-w-md"
// // // // //         initial={{ opacity: 0, y: 20 }}
// // // // //         animate={{ opacity: 1, y: 0 }}
// // // // //         transition={{ duration: 0.5 }}
// // // // //       >
// // // // //         <div className="card">
// // // // //           <div className="text-center mb-8">
// // // // //             <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
// // // // //             <p className="text-gray-600 mt-2">Sign in to access your GreenRide account</p>
// // // // //           </div>
          
// // // // //           <form onSubmit={handleSubmit}>
// // // // //             <div className="mb-4">
// // // // //               <label htmlFor="role" className="form-label">I am a</label>
// // // // //               <select
// // // // //                 id="role"
// // // // //                 name="role"
// // // // //                 value={formData.role}
// // // // //                 onChange={handleChange}
// // // // //                 className="form-input"
// // // // //               >
// // // // //                 <option value="student">Student</option>
// // // // //                 <option value="parent">Parent</option>
// // // // //                 <option value="admin">Administrator</option>
// // // // //               </select>
// // // // //             </div>
            
// // // // //             <div className="mb-4">
// // // // //               <label htmlFor="email" className="form-label">Email Address</label>
// // // // //               <input
// // // // //                 type="email"
// // // // //                 id="email"
// // // // //                 name="email"
// // // // //                 value={formData.email}
// // // // //                 onChange={handleChange}
// // // // //                 className="form-input"
// // // // //                 placeholder="your.email@example.com"
// // // // //                 required
// // // // //               />
// // // // //             </div>
            
// // // // //             <div className="mb-6">
// // // // //               <label htmlFor="password" className="form-label">Password</label>
// // // // //               <div className="relative">
// // // // //                 <input
// // // // //                   type={showPassword ? 'text' : 'password'}
// // // // //                   id="password"
// // // // //                   name="password"
// // // // //                   value={formData.password}
// // // // //                   onChange={handleChange}
// // // // //                   className="form-input pr-10"
// // // // //                   placeholder="••••••••"
// // // // //                   required
// // // // //                 />
// // // // //                 <button
// // // // //                   type="button"
// // // // //                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
// // // // //                   onClick={() => setShowPassword(!showPassword)}
// // // // //                 >
// // // // //                   {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
            
// // // // //             <div className="flex items-center justify-between mb-6">
// // // // //               <div className="flex items-center">
// // // // //                 <input
// // // // //                   id="remember-me"
// // // // //                   name="remember-me"
// // // // //                   type="checkbox"
// // // // //                   className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
// // // // //                 />
// // // // //                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
// // // // //                   Remember me
// // // // //                 </label>
// // // // //               </div>
// // // // //               <div className="text-sm">
// // // // //                 <a href="#" className="text-primary hover:text-primary-dark">
// // // // //                   Forgot password?
// // // // //                 </a>
// // // // //               </div>
// // // // //             </div>
            
// // // // //             <button
// // // // //               type="submit"
// // // // //               className="btn btn-primary w-full"
// // // // //               disabled={isLoading}
// // // // //             >
// // // // //               {isLoading ? 'Signing in...' : 'Sign in'}
// // // // //             </button>
// // // // //           </form>
          
// // // // //           <div className="text-center mt-6">
// // // // //             <p className="text-gray-600">
// // // // //               Don't have an account?{' '}
// // // // //               <Link to="/signup" className="text-primary hover:text-primary-dark">
// // // // //                 Sign up
// // // // //               </Link>
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </motion.div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Login;









// // /// update login code by amit giri

// // import { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { FiEye, FiEyeOff, FiLock, FiMail, FiArrowRight } from 'react-icons/fi';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';
// // import { motion, AnimatePresence } from 'framer-motion';

// // // Animation Variants
// // const containerVariants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.6,
// //       staggerChildren: 0.1,
// //       when: "beforeChildren"
// //     }
// //   }
// // };

// // const itemVariants = {
// //   hidden: { opacity: 0, y: 10 },
// //   visible: { opacity: 1, y: 0 }
// // };

// // function Login() {
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '',
// //     role: 'admin'
// //   });
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const navigate = useNavigate();
  
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };
  
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     if (!formData.email || !formData.password) {
// //       toast.error('Please fill in all fields');
// //       return;
// //     }
    
// //     setIsLoading(true);
    
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/auth/login', {
// //         email: formData.email,
// //         password: formData.password,
// //         role: formData.role
// //       });

// //       console.log('Login response:', response.data);

// //       if (!response.data?.success) {
// //         throw new Error(response.data?.message || 'Authentication failed');
// //       }

// //       const { user, token } = response.data;
      
// //       // Store authentication data
// //       localStorage.setItem('authToken', token);
// //       localStorage.setItem('userData', JSON.stringify(user));
      
// //       toast.success('Login successful! Redirecting...');
      
// //       // Determine redirect path based on user role from server
// //       const getDashboardPath = (role) => {
// //         const rolePaths = {
// //           student: '/student',
// //          parent: '/parent',
// //           admin: '/admin',
// //         };
        
// //         // Normalize role (trim, lowercase, handle undefined)
// //         const normalizedRole = String(role || '').trim().toLowerCase();
// //         return rolePaths[normalizedRole] || '/';
// //       };

// //       const dashboardPath = getDashboardPath(user.role);
// //       console.log(`Redirecting to: ${dashboardPath}`);

// //       // Wait briefly before redirecting to show success message
// //       setTimeout(() => {
// //         navigate(dashboardPath, { replace: true });
// //       }, 1500);

// //     } catch (error) {
// //       setIsLoading(false);
// //       console.error('Login error:', error);
      
// //       let errorMessage = 'Login failed. Please try again.';
      
// //       if (axios.isAxiosError(error)) {
// //         errorMessage = error.response?.data?.message || error.message;
// //       } else if (error instanceof Error) {
// //         errorMessage = error.message;
// //       }
      
// //       toast.error(errorMessage);
// //     }
// //   };
  
// //   return (
// //     <div className="min-h-screen py-12 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
// //       <motion.div 
// //         className="w-full max-w-md px-4"
// //         initial={{ opacity: 0, scale: 0.95 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         transition={{ type: 'spring', stiffness: 120 }}
// //       >
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate="visible"
// //           className="bg-white rounded-2xl shadow-xl p-8"
// //         >
// //           {/* Header Section */}
// //           <motion.div variants={itemVariants} className="text-center mb-8">
// //             <div className="flex justify-center mb-4">
// //               <motion.div
// //                 className="p-3 bg-indigo-100 rounded-full"
// //                 animate={{ rotate: 360 }}
// //                 transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
// //               >
// //                 <FiLock className="w-8 h-8 text-indigo-600" />
// //               </motion.div>
// //             </div>
// //             <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
// //             <p className="text-gray-600 mt-2">Sign in to continue your journey</p>
// //           </motion.div>

// //           {/* Role Selector */}
// //           <motion.div variants={itemVariants} className="mb-6">
// //             <div className="flex rounded-lg bg-gray-100 p-1">
// //               {['student', 'parent', 'admin'].map((role) => (
// //                 <motion.button
// //                   key={role}
// //                   type="button"
// //                   onClick={() => setFormData(prev => ({ ...prev, role }))}
// //                   className={`flex-1 text-sm font-medium py-2 rounded-md transition-colors ${
// //                     formData.role === role 
// //                       ? 'bg-white text-indigo-600 shadow-sm' 
// //                       : 'text-gray-600 hover:text-indigo-600'
// //                   }`}
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   {role.charAt(0).toUpperCase() + role.slice(1)}
// //                 </motion.button>
// //               ))}
// //             </div>
// //           </motion.div>

// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             {/* Email Input */}
// //             <motion.div variants={itemVariants}>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Email Address
// //               </label>
// //               <div className="relative">
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                   placeholder="your.email@example.com"
// //                   required
// //                 />
// //                 <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
// //               </div>
// //             </motion.div>

// //             {/* Password Input */}
// //             <motion.div variants={itemVariants}>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Password
// //               </label>
// //               <div className="relative">
// //                 <input
// //                   type={showPassword ? 'text' : 'password'}
// //                   name="password"
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                   className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
// //                   placeholder="••••••••"
// //                   required
// //                   minLength="6"
// //                 />
// //                 <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
// //                 <button
// //                   type="button"
// //                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
// //                   onClick={() => setShowPassword(!showPassword)}
// //                 >
// //                   {showPassword ? <FiEyeOff /> : <FiEye />}
// //                 </button>
// //               </div>
// //             </motion.div>

// //             {/* Remember Me & Forgot Password */}
// //             <motion.div 
// //               variants={itemVariants}
// //               className="flex items-center justify-between"
// //             >
// //               <label className="flex items-center">
// //                 <input
// //                   type="checkbox"
// //                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
// //                 />
// //                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
// //               </label>
              
// //               <Link 
// //                 to="/forgot-password" 
// //                 className="text-sm text-indigo-600 hover:text-indigo-700"
// //               >
// //                 Forgot password?
// //               </Link>
// //             </motion.div>

// //             {/* Submit Button */}
// //             <motion.button
// //               type="submit"
// //               disabled={isLoading}
// //               className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2"
// //               whileHover={{ scale: 1.02 }}
// //               whileTap={{ scale: 0.98 }}
// //             >
// //               <AnimatePresence mode='wait'>
// //                 {isLoading ? (
// //                   <motion.div
// //                     key="loading"
// //                     initial={{ rotate: 0 }}
// //                     animate={{ rotate: 360 }}
// //                     transition={{ duration: 1, repeat: Infinity }}
// //                     className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
// //                   />
// //                 ) : (
// //                   <motion.div
// //                     key="text"
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     className="flex items-center gap-2"
// //                   >
// //                     <span>Sign In</span>
// //                     <FiArrowRight className="w-4 h-4" />
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </motion.button>
// //           </form>

// //           {/* Sign Up Link */}
// //           <motion.div
// //             variants={itemVariants}
// //             className="mt-6 text-center text-gray-600"
// //           >
// //             <p>
// //               Don't have an account?{' '}
// //               <Link
// //                 to="/signup"
// //                 className="text-indigo-600 hover:text-indigo-700 font-medium"
// //               >
// //                 <motion.span
// //                   className="inline-block"
// //                   whileHover={{ 
// //                     backgroundImage: 'linear-gradient(to right, currentColor 0%, currentColor 100%)',
// //                     backgroundSize: '100% 2px',
// //                     backgroundPosition: '0 100%',
// //                     backgroundRepeat: 'no-repeat'
// //                   }}
// //                 >
// //                   Sign up now
// //                 </motion.span>
// //               </Link>
// //             </p>
// //           </motion.div>
// //         </motion.div>
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default Login;

// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FiEye, FiEyeOff, FiLock, FiMail, FiArrowRight, FiUser } from 'react-icons/fi';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { motion, AnimatePresence } from 'framer-motion';

// // Animation Variants
// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       staggerChildren: 0.1,
//       when: "beforeChildren"
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0 }
// };

// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     role: 'admin'
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isGuestLoading, setIsGuestLoading] = useState(false);
//   const navigate = useNavigate();
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!formData.email || !formData.password) {
//       toast.error('Please fill in all fields');
//       return;
//     }
    
//     setIsLoading(true);
    
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         email: formData.email,
//         password: formData.password,
//         role: formData.role
//       });

//       console.log('Login response:', response.data);

//       if (!response.data?.success) {
//         throw new Error(response.data?.message || 'Authentication failed');
//       }

//       handleLoginSuccess(response.data);
//     } catch (error) {
//       setIsLoading(false);
//       console.error('Login error:', error);
      
//       let errorMessage = 'Login failed. Please try again.';
      
//       if (axios.isAxiosError(error)) {
//         errorMessage = error.response?.data?.message || error.message;
//       } else if (error instanceof Error) {
//         errorMessage = error.message;
//       }
      
//       toast.error(errorMessage);
//     }
//   };

//   const handleGuestLogin = async () => {
//     setIsGuestLoading(true);
    
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/guest', {
//         role: formData.role
//       });

//       console.log('Guest login response:', response.data);

//       if (!response.data?.success) {
//         throw new Error(response.data?.message || 'Guest authentication failed');
//       }

//       handleLoginSuccess(response.data);
//     } catch (error) {
//       setIsGuestLoading(false);
//       console.error('Guest login error:', error);
      
//       let errorMessage = 'Guest login failed. Please try again.';
      
//       if (axios.isAxiosError(error)) {
//         errorMessage = error.response?.data?.message || error.message;
//       } else if (error instanceof Error) {
//         errorMessage = error.message;
//       }
      
//       toast.error(errorMessage);
//     }
//   };

//   const handleLoginSuccess = (data) => {
//     const { user, token } = data;
    
//     // Store authentication data
//     localStorage.setItem('authToken', token);
//     localStorage.setItem('userData', JSON.stringify(user));
    
//     toast.success(user.isGuest ? 'Guest login successful!' : 'Login successful! Redirecting...');
    
//     // Determine redirect path based on user role from server
//     const getDashboardPath = (role) => {
//       const rolePaths = {
//         student: '/student',
//         parent: '/parent',
//         admin: '/admin',
//       };
      
//       // Normalize role (trim, lowercase, handle undefined)
//       const normalizedRole = String(role || '').trim().toLowerCase();
//       return rolePaths[normalizedRole] || '/';
//     };

//     const dashboardPath = getDashboardPath(user.role);
//     console.log(`Redirecting to: ${dashboardPath}`);

//     // Wait briefly before redirecting to show success message
//     setTimeout(() => {
//       navigate(dashboardPath, { replace: true });
//     }, 1500);
//   };
  
//   return (
//     <div className="min-h-screen py-12 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
//       <motion.div 
//         className="w-full max-w-md px-4"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ type: 'spring', stiffness: 120 }}
//       >
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="bg-white rounded-2xl shadow-xl p-8"
//         >
//           {/* Header Section */}
//           <motion.div variants={itemVariants} className="text-center mb-8">
//             <div className="flex justify-center mb-4">
//               <motion.div
//                 className="p-3 bg-indigo-100 rounded-full"
//                 animate={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//               >
//                 <FiLock className="w-8 h-8 text-indigo-600" />
//               </motion.div>
//             </div>
//             <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
//             <p className="text-gray-600 mt-2">Sign in to continue your journey</p>
//           </motion.div>

//           {/* Role Selector */}
//           <motion.div variants={itemVariants} className="mb-6">
//             <div className="flex rounded-lg bg-gray-100 p-1">
//               {['student', 'parent', 'admin'].map((role) => (
//                 <motion.button
//                   key={role}
//                   type="button"
//                   onClick={() => setFormData(prev => ({ ...prev, role }))}
//                   className={`flex-1 text-sm font-medium py-2 rounded-md transition-colors ${
//                     formData.role === role 
//                       ? 'bg-white text-indigo-600 shadow-sm' 
//                       : 'text-gray-600 hover:text-indigo-600'
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {role.charAt(0).toUpperCase() + role.slice(1)}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email Input */}
//             <motion.div variants={itemVariants}>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                   placeholder="your.email@example.com"
//                   required
//                 />
//                 <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//               </div>
//             </motion.div>

//             {/* Password Input */}
//             <motion.div variants={itemVariants}>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                   placeholder="••••••••"
//                   required
//                   minLength="6"
//                 />
//                 <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FiEyeOff /> : <FiEye />}
//                 </button>
//               </div>
//             </motion.div>

//             {/* Remember Me & Forgot Password */}
//             <motion.div 
//               variants={itemVariants}
//               className="flex items-center justify-between"
//             >
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                 />
//                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
//               </label>
              
//               <Link 
//                 to="/forgot-password" 
//                 className="text-sm text-indigo-600 hover:text-indigo-700"
//               >
//                 Forgot password?
//               </Link>
//             </motion.div>

//             {/* Submit Button */}
//             <motion.button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <AnimatePresence mode='wait'>
//                 {isLoading ? (
//                   <motion.div
//                     key="loading"
//                     initial={{ rotate: 0 }}
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity }}
//                     className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
//                   />
//                 ) : (
//                   <motion.div
//                     key="text"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="flex items-center gap-2"
//                   >
//                     <span>Sign In</span>
//                     <FiArrowRight className="w-4 h-4" />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.button>
//           </form>

//           {/* Divider */}
//           <motion.div variants={itemVariants} className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or continue with</span>
//             </div>
//           </motion.div>

//           {/* Guest Login Button */}
//           <motion.button
//             type="button"
//             onClick={handleGuestLogin}
//             disabled={isGuestLoading}
//             className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             variants={itemVariants}
//           >
//             <AnimatePresence mode='wait'>
//               {isGuestLoading ? (
//                 <motion.div
//                   key="loading"
//                   initial={{ rotate: 0 }}
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 1, repeat: Infinity }}
//                   className="w-5 h-5 border-2 border-gray-400 rounded-full border-t-transparent"
//                 />
//               ) : (
//                 <motion.div
//                   key="text"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="flex items-center gap-2"
//                 >
//                   <FiUser className="w-4 h-4" />
//                   <span>Continue as Guest</span>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.button>

//           {/* Sign Up Link */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-6 text-center text-gray-600"
//           >
//             <p>
//               Don't have an account?{' '}
//               <Link
//                 to="/signup"
//                 className="text-indigo-600 hover:text-indigo-700 font-medium"
//               >
//                 <motion.span
//                   className="inline-block"
//                   whileHover={{ 
//                     backgroundImage: 'linear-gradient(to right, currentColor 0%, currentColor 100%)',
//                     backgroundSize: '100% 2px',
//                     backgroundPosition: '0 100%',
//                     backgroundRepeat: 'no-repeat'
//                   }}
//                 >
//                   Sign up now
//                 </motion.span>
//               </Link>
//             </p>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default Login;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiLock, FiMail, FiArrowRight, FiUser, FiHome, FiKey } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'buyer' // Default to buyer role
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGuestLoading, setIsGuestLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await axios.post('/api/auth/login', {
        email: formData.email,
        password: formData.password,
        role: formData.role
      });

      if (!response.data?.success) {
        throw new Error(response.data?.message || 'Authentication failed');
      }

      handleLoginSuccess(response.data);
    } catch (error) {
      setIsLoading(false);
      console.error('Login error:', error);
      
      let errorMessage = 'Login failed. Please try again.';
      
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
    }
  };

  const handleGuestLogin = async () => {
    setIsGuestLoading(true);
    
    try {
      const response = await axios.post('/api/auth/guest', {
        role: formData.role
      });

      if (!response.data?.success) {
        throw new Error(response.data?.message || 'Guest authentication failed');
      }

      handleLoginSuccess(response.data);
    } catch (error) {
      setIsGuestLoading(false);
      console.error('Guest login error:', error);
      
      let errorMessage = 'Guest login failed. Please try again.';
      
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
    }
  };

  const handleLoginSuccess = (data) => {
    const { user, token } = data;
    
    // Store authentication data
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(user));
    
    toast.success(user.isGuest ? 
      `Guest ${user.role} session started!` : 
      `Welcome back, ${user.name || user.email}!`);
    
    // Determine redirect path based on user role
    const getDashboardPath = (role) => {
      const rolePaths = {
        buyer: '/properties',
        seller: '/my-listings',
        admin: '/admin/dashboard',
      };
      
      return rolePaths[role] || '/';
    };

    const dashboardPath = getDashboardPath(user.role);

    // Wait briefly before redirecting to show success message
    setTimeout(() => {
      navigate(dashboardPath, { replace: true });
    }, 1500);
  };

  // Role descriptions for tooltips
  const roleDescriptions = {
    buyer: 'Browse properties, save favorites, and contact sellers',
    seller: 'List properties, manage listings, and connect with buyers',
    admin: 'Manage users, listings, and platform settings'
  };
  
  return (
    <div className="min-h-screen py-12 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <motion.div 
        className="w-full max-w-md px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <motion.div
                className="p-3 bg-indigo-100 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <FiHome className="w-8 h-8 text-indigo-600" />
              </motion.div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Gyaat Group</h1>
            <p className="text-gray-600 mt-2">Access your account to continue</p>
          </motion.div>

          {/* Role Selector
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex rounded-lg bg-gray-100 p-1">
              {['buyer', 'seller', 'admin'].map((role) => (
                <motion.button
                  key={role}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, role }))}
                  className={`flex-1 text-sm font-medium py-2 rounded-md transition-colors relative group ${
                    formData.role === role 
                      ? 'bg-white text-indigo-600 shadow-sm' 
                      : 'text-gray-600 hover:text-indigo-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                  <span className="absolute z-10 hidden group-hover:block w-48 p-2 mt-2 -ml-20 text-xs text-white bg-gray-800 rounded shadow-lg">
                    {roleDescriptions[role]}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div> */}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                  minLength="6"
                />
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </motion.div>

            {/* Remember Me & Forgot Password */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-between"
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              
              <Link 
                to="/forgot-password" 
                className="text-sm text-indigo-600 hover:text-indigo-700"
              >
                Forgot password?
              </Link>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence mode='wait'>
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
                  />
                ) : (
                  <motion.div
                    key="text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <span>Sign In</span>
                    <FiArrowRight className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </form>

          {/* Divider */}
          <motion.div variants={itemVariants} className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </motion.div>

          {/* Guest Login Button */}
           <motion.button
            type="button"
            onClick={handleGuestLogin}
            disabled={isGuestLoading}
            className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
          >
            <AnimatePresence mode='wait'>
              {isGuestLoading ? (
                <motion.div
                  key="loading"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-5 h-5 border-2 border-gray-400 rounded-full border-t-transparent"
                />
              ) : (
                <motion.div
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <FiUser className="w-4 h-4" />
                  <span>Continue as Guest</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Sign Up Link */}
          <motion.div
            variants={itemVariants}
            className="mt-6 text-center text-gray-600"
          >
            <p>
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ 
                    backgroundImage: 'linear-gradient(to right, currentColor 0%, currentColor 100%)',
                    backgroundSize: '100% 2px',
                    backgroundPosition: '0 100%',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  Sign up now
                </motion.span>
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
export default Login;