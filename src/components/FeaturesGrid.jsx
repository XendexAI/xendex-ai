import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesGrid = ({ title, subtitle, features }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {subtitle && (
              <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-4">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                {title}
              </h2>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
