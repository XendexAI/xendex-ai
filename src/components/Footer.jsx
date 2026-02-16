import React from 'react';

const Footer = ({ logo, columns, socialLinks, copyright }) => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-1">
            {logo?.text && (
              <div className="mb-4">
                <span className="text-2xl font-bold text-white">{logo.text}</span>
              </div>
            )}
            {logo?.description && (
              <p className="text-sm text-gray-400">
                {logo.description}
              </p>
            )}
          </div>

          {/* Footer columns */}
          {columns?.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            {copyright || '© 2026 Xendex AI. All rights reserved.'}
          </p>

          {/* Social links */}
          {socialLinks && (
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
