import React from 'react';

const LoadingSpinner = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-green-50"
      role="status"
      aria-label="Loading PantryChef"
    >
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-4 border-gray-200 border-t-green-600 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-teal-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">PC</span>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Preparing PantryChef</h2>
        <p className="text-gray-600">Loading your kitchen assistant...</p>
      </div>
      <div className="mt-8 flex space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;