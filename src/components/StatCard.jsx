import React from 'react';

const StatCard = ({ value, label, description }) => {
  return (
    <div className="text-center p-6">
      <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-gray-900 mb-1">
        {label}
      </div>
      {description && (
        <p className="text-sm text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
};

export default StatCard;
