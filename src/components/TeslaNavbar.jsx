import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeslaNavbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    {
      name: 'Services',
      items: [
        {
          title: 'XenPods',
          description: 'Outcome-driven sprints with fixed scope',
          image:'/images/pods-icon.png',
          link: '/services/xenpods'
        },
        {
          title: 'XenBuilds',
          description: 'Production-ready AI systems',
          image: '/images/builds-icon.png',
          link: '/services/xenbuilds'
        }
      ]
    },
    {
      name: 'Builds',
      items: [
        {
          title: 'Conversational AI',
          image: '/images/builds/ca.png',
          link: '/builds/conversational-ai'
        },
        {
          title: 'Document Search',
          image: '/images/builds/ds.png',
          link: '/builds/document-search'
        },
        {
          title: 'Data Analysis',
          image: '/images/builds/da.png',
          link: '/builds/data-analysis'
        },
        {
          title: 'Fundamental Analysis',
          image: '/images/builds/ma.png',
          link: '/builds/fundamental-analysis'
        }
      ]
    }
  ];

  const simpleLinks = [
    { name: 'About', link: '/about' },
    // { name: 'Services', link: '/services' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-secondary-darker/80 backdrop-blur-xl border-b border-brand-gray-800/50">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-brand-primary-light via-brand-primary to-brand-accent-purple bg-clip-text text-transparent hover:from-brand-primary hover:via-brand-primary-dark hover:to-brand-accent-purple transition-all">
              Xendex AI
            </Link>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((menu) => (
                <div
                  key={menu.name}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(menu.name)}
                  onMouseLeave={() => {}}
                >
                  <button
                    className="text-sm font-medium text-brand-gray-300 hover:text-white transition-colors duration-150 py-2"
                  >
                    {menu.name}
                  </button>
                </div>
              ))}
              
              {simpleLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.link}
                  className="text-sm font-medium text-brand-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="/contact"
                className="px-6 py-2 bg-brand-primary text-white text-sm font-medium rounded-lg hover:bg-brand-primary-dark transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-brand-gray-700">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mega Menu Dropdowns */}
      <AnimatePresence>
        {hoveredMenu && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.15
              }}
              className="fixed inset-0 bg-black/50 z-40"
              style={{ top: '64px' }}
            />

            {/* Dropdown Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.15
              }}
              className="fixed left-0 right-0 z-50 bg-brand-secondary-darker/80 backdrop-blur-xl border-b border-brand-gray-800/50 shadow-2xl will-change-[opacity]"
              style={{ top: '64px' }}
              onMouseEnter={() => setHoveredMenu(hoveredMenu)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <div className="max-w-7xl mx-auto px-8 py-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {menuItems
                    .find((m) => m.name === hoveredMenu)
                    ?.items.map((item, index) => (
                      <div
                        key={item.title}
                        style={{
                          animation: `slideInRight 0.35s ease-out ${index * 0.04}s both`
                        }}
                      >
                        <Link
                          to={item.link}
                          onClick={() => setHoveredMenu(null)}
                          className="block rounded-xl bg-brand-gray-900/50 hover:bg-brand-gray-800/70 border border-brand-gray-700/50 hover:border-brand-primary/50 transition-all duration-200 ease-out group will-change-[background-color,border-color] overflow-hidden flex flex-col items-center text-center w-56 min-h-40"
                        >
                          <div className="transform group-hover:scale-105 transition-transform duration-200 ease-out will-change-transform overflow-hidden rounded-lg h-20 w-20 mt-4 mb-3 flex items-center justify-center bg-brand-gray-800/30">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="p-3 pt-0">
                            <h3 className="text-lg font-semibold text-white group-hover:text-brand-primary-light mb-2 transition-colors duration-200">
                              {item.title}
                            </h3>
                            <div className="flex items-center justify-center text-sm text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out">
                              Learn more
                              <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
              
              <style jsx>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                @keyframes slideInRight {
                  from {
                    opacity: 0;
                    transform: translateX(-16px);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
              `}</style>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeslaNavbar;