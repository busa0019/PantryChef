// components/Hero.tsx - Main hero section
import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-16 pb-20 md:pt-24 md:pb-32 px-4"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Save Food, Save Money, Save the Planet
            </div>
            <h1 
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Transform Your <span className="text-green-600">Leftovers</span> Into Delicious Meals
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              PantryChef is your AI-powered kitchen assistant that helps reduce food waste by matching your available ingredients with personalized recipes. 
              Turn what you have into what you'll love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300 shadow-lg"
                aria-label="Get started with PantryChef"
              >
                Start Cooking Smarter
              </button>
              <button 
                className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-green-200 hover:border-green-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-100 shadow-md"
                aria-label="Watch how PantryChef works"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  See How It Works
                </span>
              </button>
            </div>
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-green-400 to-teal-300 flex items-center justify-center text-white font-bold"
                    aria-hidden="true"
                  >
                    {['J','M','S','T'][i-1]}
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-800">Join 10,000+ home cooks</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">4.8/5 from 2,500+ reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-2 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Colorful assortment of fresh vegetables and ingredients on a kitchen counter" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Today's Recipe Match</h3>
                      <p className="text-green-600 font-medium">Based on your ingredients</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      95% Match
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Rainbow Veggie Stir Fry</h4>
                  <p className="text-gray-600 mb-4">Uses your bell peppers, broccoli, carrots & onions expiring soon</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>25 mins</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                      <span>4 servings</span>
                    </div>
                    <button 
                      className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                      aria-label="View Rainbow Veggie Stir Fry recipe"
                    >
                      Cook This
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-teal-400 to-green-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;