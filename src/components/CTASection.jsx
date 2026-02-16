import React from 'react';
import Button from './Button';

const CTASection = ({ 
  title, 
  description, 
  primaryCTA, 
  secondaryCTA, 
  bgColor = 'bg-blue-600',
  textColor = 'text-white'
}) => {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${textColor}`}>
          {title}
        </h2>
        
        {description && (
          <p className={`text-xl mb-10 ${textColor === 'text-white' ? 'text-blue-100' : 'text-gray-600'}`}>
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryCTA && (
            <Button 
              variant={bgColor === 'bg-blue-600' ? 'secondary' : 'primary'}
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
              className={bgColor === 'bg-blue-600' ? 'border-white text-white hover:bg-blue-700' : ''}
            >
              {secondaryCTA.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
