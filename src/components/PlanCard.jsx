import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function PlanCard({ title, price, duration, features, recommended }) {
  return (
    <motion.div 
      className={`card border-2 ${recommended ? 'border-primary' : 'border-gray-200'} relative`}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {recommended && (
        <div className="absolute top-0 right-0 bg-primary text-white py-1 px-3 text-sm font-medium rounded-bl-lg rounded-tr-lg">
          Recommended
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="text-4xl font-bold text-primary mb-1">₹{price}</div>
        <div className="text-gray-500">per {duration}</div>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FiCheck className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        to="/login" 
        className={`btn w-full ${recommended ? 'btn-primary' : 'btn-secondary'}`}
      >
        Choose Plan
      </Link>
    </motion.div>
  );
}

export default PlanCard;