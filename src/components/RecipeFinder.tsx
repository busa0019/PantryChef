import React, { useState } from 'react';

const RecipeFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDiet, setSelectedDiet] = useState('any');
  const [selectedTime, setSelectedTime] = useState('any');

  const diets = ['Any', 'Vegetarian', 'Vegan', 'Keto', 'Gluten-Free', 'Dairy-Free'];
  const timeFilters = ['Any', '15 mins', '30 mins', '45 mins', '60+ mins'];

  const sampleRecipes = [
    {
      id: 1,
      name: 'Rainbow Veggie Stir Fry',
      match: 95,
      time: 25,
      servings: 4,
      ingredients: ['Bell Peppers', 'Broccoli', 'Carrots', 'Onions'],
      diet: 'Vegetarian',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Leftover Chicken Fried Rice',
      match: 88,
      time: 20,
      servings: 3,
      ingredients: ['Chicken', 'Rice', 'Eggs', 'Peas'],
      diet: 'None',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Banana Oat Breakfast Cookies',
      match: 92,
      time: 30,
      servings: 12,
      ingredients: ['Bananas', 'Oats', 'Honey', 'Cinnamon'],
      diet: 'Vegan',
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  return (
    <section 
      id="recipes" 
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="recipes-heading"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            id="recipes-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Find Perfect <span className="text-green-600">Recipes</span> in Seconds
          </h2>
          <p className="text-xl text-gray-600">
            Our AI-powered recipe engine matches your ingredients with thousands of delicious recipes.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <label htmlFor="recipe-search" className="sr-only">Search recipes</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    id="recipe-search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Search for recipes or ingredients..."
                    aria-label="Search recipes"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Find Recipes
              </button>
            </div>
          </form>

          <div className="flex flex-wrap gap-4">
            <div>
              <label htmlFor="diet-filter" className="block text-sm font-medium text-gray-700 mb-1">Dietary</label>
              <select
                id="diet-filter"
                value={selectedDiet}
                onChange={(e) => setSelectedDiet(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                aria-label="Filter by dietary preference"
              >
                {diets.map((diet) => (
                  <option key={diet} value={diet.toLowerCase()}>{diet}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="time-filter" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <select
                id="time-filter"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                aria-label="Filter by cooking time"
              >
                {timeFilters.map((time) => (
                  <option key={time} value={time.toLowerCase()}>{time}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button className="px-4 py-2 text-green-600 font-medium hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Recipe Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleRecipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-green-600 text-white font-bold px-3 py-1 rounded-full">
                    {recipe.match}% Match
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{recipe.name}</h3>
                  {recipe.diet !== 'None' && (
                    <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded">
                      {recipe.diet}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">
                  Uses your {recipe.ingredients.slice(0, 2).join(', ')}{recipe.ingredients.length > 2 ? `, +${recipe.ingredients.length - 2} more` : ''}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {recipe.time} mins
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    {recipe.servings} servings
                  </div>
                  <button 
                    className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    aria-label={`View ${recipe.name} recipe`}
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white text-green-700 font-semibold rounded-lg border-2 border-green-200 hover:border-green-400 transition-all focus:outline-none focus:ring-2 focus:ring-green-500">
            Load More Recipes
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecipeFinder;