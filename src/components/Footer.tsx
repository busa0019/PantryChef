import React from 'react';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'How It Works', 'Pricing', 'API'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Support: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms'],
    Connect: ['Twitter', 'Instagram', 'Facebook', 'YouTube']
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4" role="contentinfo">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">PC</span>
              </div>
              <h2 className="text-2xl font-bold">
                Pantry<span className="text-green-400">Chef</span>
              </h2>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming kitchens worldwide by reducing food waste through AI-powered recipe matching and smart inventory management.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="font-medium">{social.charAt(0)}</span>
                </button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button 
                      className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:underline"
                      onClick={() => console.log(`Navigate to ${link}`)}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © {new Date().getFullYear()} PantryChef. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <button className="text-gray-400 hover:text-white focus:outline-none focus:underline">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white focus:outline-none focus:underline">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white focus:outline-none focus:underline">
                Cookie Policy
              </button>
              <button className="text-gray-400 hover:text-white focus:outline-none focus:underline">
                Accessibility
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-500 text-sm">
            <p>PantryChef is committed to sustainability and reducing global food waste.</p>
            <p className="mt-2">Together, our community has saved over 1.2 million kg of food from waste.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;