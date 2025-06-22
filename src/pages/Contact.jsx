import { useState } from 'react';
import { FaPhone, FaEnvelope, FaHome, FaHandshake, FaBalanceScale, FaBuilding, FaShieldAlt, FaTools, FaLeaf, FaChevronDown } from 'react-icons/fa';

const Contact = () => {
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    {
      id: 'aashray',
      title: 'Aashray Realty Consultancy',
      tagline: 'From your dream to your home',
      description: 'Property dealing in Primary and Secondary Markets: Residential (Plot, House, Flat) and Commercial (Plot, Office/shop space, Industrial land/setup). Channel partner for Developers and corporate tie-ups (IJM City, Godrej Properties Limited and Kalaptaru group).',
      icon: <FaHome className="text-2xl" />
    },
    {
      id: 'vriddhi',
      title: 'Vriddhi Loans',
      tagline: 'Financial solutions PAN India',
      description: 'Housing Loan, Loan against Property, Loan against Securities, Personal Loan, Vehicle Loan, Balance transfers, MSME Loans (CC, OD, Working capital loans), Business Loans.',
      icon: <FaHandshake className="text-2xl" />
    },
    {
      id: 'siddhant',
      title: 'Siddhant Legal Services',
      tagline: 'Expert real estate legal support',
      description: 'Search Report, Due Diligence, Agreement to Sale, Sale deed & Registration, Property transfer, Mutation.',
      icon: <FaBalanceScale className="text-2xl" />
    },
    {
      id: 'kalpa',
      title: 'Kalpa Architectural Services',
      tagline: 'Designing your vision',
      description: 'Architects and Interior designers to bring your property dreams to life.',
      icon: <FaBuilding className="text-2xl" />
    },
    {
      id: 'neeti',
      title: 'Neeti Building Management',
      tagline: 'Safety and security solutions',
      description: 'PEC (Procurement, Erection and Commissioning), Annual Maintenance, Manpower management for building safety systems.',
      icon: <FaShieldAlt className="text-2xl" />
    },
    {
      id: 'sampaadana',
      title: 'Sampaadana Suppliers',
      tagline: 'Premium construction materials',
      description: 'Tiles, Chimneys, Solar systems (including installation), Lifts, External cladding.',
      icon: <FaTools className="text-2xl" />
    },
    {
      id: 'manthan',
      title: 'Manthan Consultancy',
      tagline: 'Innovative project solutions',
      description: 'Agriculture consultancy, Industrial consultancy, Medical environment setups through turnkey projects.',
      icon: <FaLeaf className="text-2xl" />
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Gyaat - Let's Find Solutions
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Comprehensive real estate services under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service Interested In
                </label>
                <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>{service.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info and Services */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaPhone className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <p className="text-lg font-medium text-gray-900">+91 7758059177</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaEnvelope className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-lg font-medium text-gray-900">infogyaat@gmail.com</p>
                    <p className="text-sm font-medium text-gray-500 mt-1">Aashray Realty: aashrayrealtyconsultancy@gmail.com</p>
                    <p className="text-sm font-medium text-gray-500">Vriddhi Loans: vriddhi.gyaat@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleService(service.id)}
                      className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-3 text-indigo-600">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                          <p className="text-sm text-indigo-600">{service.tagline}</p>
                        </div>
                      </div>
                      <FaChevronDown className={`transition-transform ${activeService === service.id ? 'transform rotate-180' : ''}`} />
                    </button>
                    {activeService === service.id && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;