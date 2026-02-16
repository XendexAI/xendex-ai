import React from 'react';
import Button from './Button';

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA, 
  backgroundImage,
  badges = []
}) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {badges.length > 0 && (
            <div className="flex justify-center gap-2 mb-6 flex-wrap">
              {badges.map((badge, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          
          {subtitle && (
            <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-4">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <Button 
                variant="primary" 
                size="lg"
                href={primaryCTA.href}
                onClick={primaryCTA.onClick}
              >
                {primaryCTA.text}
              </Button>
            )}
            
            {secondaryCTA && (
              <Button 
                variant="outline" 
                size="lg"
                href={secondaryCTA.href}
                onClick={secondaryCTA.onClick}
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {backgroundImage && (
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent"></div>
      )}
    </section>
  );
};

export default Hero;
