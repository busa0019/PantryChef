import React from 'react';

const CommunitySection = () => {
  const communityFeatures = [
    {
      title: 'Share Your Creations',
      description: 'Upload photos and recipes of your meals to inspire others.',
      icon: '📸'
    },
    {
      title: 'Join Cooking Challenges',
      description: 'Weekly challenges to use specific ingredients creatively.',
      icon: '🏆'
    },
    {
      title: 'Follow Favorite Cooks',
      description: 'Connect with friends and discover new cooking styles.',
      icon: '👨‍🍳'
    },
    {
      title: 'Rate & Review Recipes',
      description: 'Help others find the best recipes with your feedback.',
      icon: '⭐'
    }
  ];

  const recentPosts = [
    { user: 'Sarah K.', recipe: 'Leftover Veggie Soup', likes: 245 },
    { user: 'Mike T.', recipe: 'Stale Bread Pudding', likes: 189 },
    { user: 'Chef Ana', recipe: 'Zero-Waste Broth', likes: 312 },
    { user: 'David L.', recipe: 'Apple Peel Tea', likes: 156 }
  ];

  return (
    <section 
      id="community" 
      className="py-16 md:py-24 px-4 bg-white"
      aria-labelledby="community-heading"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            id="community-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Join Our <span className="text-green-600">Community</span> of Waste-Conscious Cooks
          </h2>
          <p className="text-xl text-gray-600">
            Share tips, recipes, and success stories with thousands of home cooks committed to reducing food waste.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Features</h3>
              <div className="space-y-6">
                {communityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-2xl mr-4">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Recent Community Posts</h3>
              <div className="space-y-4 mb-8">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                    <div>
                      <div className="font-bold">{post.user}</div>
                      <div className="text-gray-300 text-sm">{post.recipe}</div>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>{post.likes}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-green-500 to-teal-400 text-white font-semibold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-300">
                Join Community Discussion
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Ready to cook smarter and waste less?</h3>
              <p className="mb-6 opacity-90">
                Join 10,000+ home cooks who have transformed their kitchens with PantryChef.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white">
                  Start Free Trial
                </button>
                <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">4.8★</div>
              <div className="text-sm opacity-90">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;