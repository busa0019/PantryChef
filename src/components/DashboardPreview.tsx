import React from 'react';

const DashboardPreview = () => {
  const stats = [
    { label: 'Food Waste Reduced', value: '62%', color: 'text-green-600' },
    { label: 'Weekly Savings', value: '$42.50', color: 'text-teal-600' },
    { label: 'Recipes Tried', value: '17', color: 'text-blue-600' },
    { label: 'CO₂ Saved', value: '28 kg', color: 'text-emerald-600' }
  ];

  const upcomingIngredients = [
    { name: 'Bell Peppers', expires: 'Tomorrow', priority: 'high' },
    { name: 'Greek Yogurt', expires: '2 days', priority: 'high' },
    { name: 'Spinach', expires: '3 days', priority: 'medium' },
    { name: 'Chicken Breast', expires: '4 days', priority: 'medium' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-green-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Personal <span className="text-green-600">Kitchen Dashboard</span>
          </h2>
          <p className="text-xl text-gray-600">
            Track your progress, manage ingredients, and discover insights to cook smarter.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Stats Section */}
            <div className="lg:col-span-2 p-8 border-r border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Impact This Month</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Weekly Progress</h4>
                <div className="space-y-3">
                  {[80, 65, 90, 75].map((percent, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-gray-700 mb-1">
                        <span>{['Monday', 'Tuesday', 'Wednesday', 'Thursday'][index]}</span>
                        <span>{percent}% waste avoidance</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-teal-400 rounded-full"
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ingredients Section */}
            <div className="p-8 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ingredients Expiring Soon</h3>
              <div className="space-y-4 mb-8">
                {upcomingIngredients.map((ingredient, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-gray-900">{ingredient.name}</div>
                        <div className="text-sm text-gray-600">Expires in {ingredient.expires}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        ingredient.priority === 'high' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {ingredient.priority === 'high' ? 'Use Today' : 'Plan Soon'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500">
                View All Ingredients
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full font-medium mb-6">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            Pro Tip: Plan meals around expiring ingredients first
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI analyzes your inventory daily and suggests recipes that prioritize ingredients nearing expiration, 
            helping you save money and reduce waste automatically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;