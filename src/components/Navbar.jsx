import React from 'react';

const Navbar = ({ logo, links, ctaButton }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              {logo?.image ? (
                <img src={logo.image} alt={logo.text} className="h-8 w-auto" />
              ) : (
                <span className="text-2xl font-bold text-blue-600">{logo?.text || 'Xendex AI'}</span>
              )}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links?.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            {ctaButton && (
              <a
                href={ctaButton.href}
                className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {ctaButton.text}
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {links?.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.text}
              </a>
            ))}
            {ctaButton && (
              <a
                href={ctaButton.href}
                className="mt-4 block w-full text-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {ctaButton.text}
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
