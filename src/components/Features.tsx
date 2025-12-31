// components/Features.tsx - Key features section
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      ),
      title: "AI-Powered Recipe Matching",
      description: "Our advanced algorithm finds perfect recipes based on what you have, your dietary preferences, and cooking time."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Expiration Tracking",
      description: "Get smart notifications about ingredients nearing expiration so you can use them first."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community Recipes",
      description: "Share your creations and discover recipes from a global community of waste-conscious cooks."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Meal Planning",
      description: "Plan your weekly meals and generate smart shopping lists to minimize waste from the start."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Save Money",
      description: "Reduce grocery bills by up to 25% by making the most of what you already have."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Environmental Impact",
      description: "Track your positive environmental impact with CO₂ savings and reduced food waste metrics."
    }
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-24 px-4 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            id="features-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Everything You Need to <span className="text-green-600">Cook Smarter</span>
          </h2>
          <p className="text-xl text-gray-600">
            PantryChef combines cutting-edge technology with practical kitchen wisdom to help you reduce waste and discover delicious meals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-teal-400 flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to transform your kitchen habits?
              </h3>
              <p className="text-gray-700 mb-6">
                Join thousands of home cooks who have saved an average of $40 per week and reduced their food waste by 60%.
              </p>
              <button 
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-4 focus:ring-green-300"
                aria-label="Sign up for PantryChef"
              >
                Start Your Free Trial
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <div className="text-2xl font-bold text-green-600">60%</div>
                <div className="text-sm text-gray-600">Less Food Waste</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <div className="text-2xl font-bold text-green-600">$160/mo</div>
                <div className="text-sm text-gray-600">Average Savings</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <div className="text-2xl font-bold text-green-600">4.8★</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;