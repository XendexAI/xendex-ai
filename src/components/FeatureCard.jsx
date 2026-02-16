import React from 'react';

const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <div className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
      {icon && (
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed mb-4">
        {description}
      </p>
      
      {link && (
        <a 
          href={link.href} 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          {link.text}
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default FeatureCard;
