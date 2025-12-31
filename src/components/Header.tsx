// components/Header.tsx - Fixed version
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onSectionChange: (sectionId: string) => void;
  activeSection: string;
  user?: { 
    name: string; 
    email: string; 
    avatar?: string;
  } | null;
  onLoginClick: (mode: 'login' | 'signup') => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onSectionChange, 
  activeSection, 
  user, 
  onLoginClick, 
  onLogout 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main navigation items (visible)
  const mainNavItems = [
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'recipes', label: 'Recipes' },
    { id: 'community', label: 'Community' },
  ];

  // Dropdown navigation items
  const dropdownNavItems = [
    { id: 'scanner', label: 'Ingredient Scanner' },
    { id: 'shopping-list', label: 'Shopping List' },
    { id: 'methods', label: 'Master Methods' },
  ];

  const handleUserAction = () => {
    if (user) {
      setIsUserMenuOpen(!isUserMenuOpen);
      setIsMoreMenuOpen(false);
    } else {
      onLoginClick('login');
    }
  };

  const handleMoreMenuToggle = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
    setIsUserMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
              onClick={() => onSectionChange('home')}
              aria-label="Go to homepage"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">PC</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">
                Pantry<span className="text-green-600">Chef</span>
              </h1>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2" aria-label="Main navigation">
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                className={`font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 px-3 py-1.5 rounded ${
                  activeSection === item.id
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMenuOpen(false);
                }}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
            
            {/* More Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center font-medium px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  isMoreMenuOpen || dropdownNavItems.some(item => activeSection === item.id)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
                onClick={handleMoreMenuToggle}
                aria-expanded={isMoreMenuOpen}
                aria-label="More options"
              >
                More
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${isMoreMenuOpen ? 'rotate-180' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isMoreMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 border border-gray-100 z-50 animate-fadeIn">
                  {dropdownNavItems.map((item) => (
                    <button
                      key={item.id}
                      className={`w-full text-left px-4 py-3 hover:bg-green-50 flex items-center ${
                        activeSection === item.id ? 'text-green-600' : 'text-gray-700'
                      }`}
                      onClick={() => {
                        onSectionChange(item.id);
                        setIsMoreMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* User/Login Section */}
          <div className="flex items-center space-x-4">
            {/* Desktop User Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                // Logged In View - Shows user menu
                <div className="relative">
                  <button
                    className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg p-1.5"
                    onClick={() => {
                      setIsUserMenuOpen(!isUserMenuOpen);
                      setIsMoreMenuOpen(false);
                    }}
                    aria-expanded={isUserMenuOpen}
                    aria-label="User menu"
                  >
                    {user.avatar ? (
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                    ) : (
                      <div className="w-9 h-9 bg-gradient-to-r from-green-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="text-left hidden lg:block">
                      <div className="font-medium text-gray-900 text-sm">
                        {user.name.split(' ')[0]}
                      </div>
                      <div className="text-xs text-gray-500 truncate max-w-[120px]">
                        {user.email.split('@')[0]}
                      </div>
                    </div>
                    <svg 
                      className={`w-4 h-4 text-gray-500 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {/* User Dropdown Menu */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 border border-gray-100 z-50 animate-fadeIn">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="font-semibold text-gray-900 truncate">{user.name}</div>
                        <div className="text-sm text-gray-600 truncate">{user.email}</div>
                      </div>
                      <button 
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 flex items-center"
                        onClick={() => {
                          onSectionChange('dashboard');
                          setIsUserMenuOpen(false);
                        }}
                      >
                        <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        My Dashboard
                      </button>
                      <button 
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 flex items-center"
                        onClick={() => {
                          onSectionChange('saved-recipes');
                          setIsUserMenuOpen(false);
                        }}
                      >
                        <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        Saved Recipes
                      </button>
                      <button 
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 flex items-center"
                      >
                        <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </button>
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <button 
                          onClick={() => {
                            onLogout();
                            setIsUserMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 flex items-center"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // Logged Out View - Shows login/signup buttons
                <>
                  <button 
                    onClick={() => onLoginClick('login')}
                    className="px-5 py-2 font-medium text-green-700 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 rounded hidden lg:block"
                  >
                    Log In
                  </button>
                  <button 
                    onClick={() => onLoginClick('signup')}
                    className="px-5 py-2 bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-2">
              {mainNavItems.map((item) => (
                <button
                  key={item.id}
                  className={`font-medium text-left px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                    activeSection === item.id
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Dropdown Items */}
              <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                More
              </div>
              {dropdownNavItems.map((item) => (
                <button
                  key={item.id}
                  className={`font-medium text-left px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                    activeSection === item.id
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile User Actions */}
              <div className="border-t border-gray-200 pt-4 mt-2">
                {user ? (
                  <>
                    <div className="px-4 py-3 bg-gray-50 rounded-lg mb-3 flex items-center space-x-3">
                      {user.avatar ? (
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-600 truncate">{user.email}</div>
                      </div>
                    </div>
                    <button 
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                      onClick={() => {
                        onSectionChange('dashboard');
                        setIsMenuOpen(false);
                      }}
                    >
                      My Dashboard
                    </button>
                    <button 
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                      onClick={() => {
                        onSectionChange('saved-recipes');
                        setIsMenuOpen(false);
                      }}
                    >
                      Saved Recipes
                    </button>
                    <button 
                      onClick={() => {
                        onLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg mt-2"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      className="w-full text-left px-4 py-3 font-medium text-green-700 hover:text-green-800 hover:bg-green-50 rounded-lg mb-2"
                      onClick={() => {
                        onLoginClick('login');
                        setIsMenuOpen(false);
                      }}
                    >
                      Log In
                    </button>
                    <button 
                      className="w-full text-center px-4 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                      onClick={() => {
                        onLoginClick('signup');
                        setIsMenuOpen(false);
                      }}
                    >
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;