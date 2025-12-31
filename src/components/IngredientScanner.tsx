// components/IngredientScanner.tsx - Scanner component with AI integration
import React, { useState } from 'react';

const IngredientScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [scannedItems, setScannedItems] = useState<string[]>(['Tomatoes', 'Bell Peppers', 'Onions', 'Chicken Breast', 'Rice']);
  const [newItem, setNewItem] = useState('');

  const handleScan = () => {
    setScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      const newItems = [...scannedItems, 'Carrots', 'Broccoli'];
      setScannedItems(newItems);
      setScanning(false);
    }, 1500);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      setScannedItems([...scannedItems, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index: number) => {
    const newItems = scannedItems.filter((_, i) => i !== index);
    setScannedItems(newItems);
  };

  return (
    <section 
      id="scanner" 
      className="py-16 md:py-24 px-4 bg-white"
      aria-labelledby="scanner-heading"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              id="scanner-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Smart <span className="text-green-600">Ingredient Scanner</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Use your phone's camera to instantly add ingredients to your virtual pantry. Our AI recognizes thousands of food items and even estimates quantities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Quick Scanning</h3>
                  <p className="text-gray-600">Point your camera at ingredients or receipts to add them instantly.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Expiration Tracking</h3>
                  <p className="text-gray-600">Get smart alerts before ingredients go bad with priority use suggestions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Voice Commands</h3>
                  <p className="text-gray-600">Hands-free ingredient adding while you're cooking or unpacking groceries.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 shadow-xl">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">Your Pantry</h3>
                  <div className="text-sm text-green-600 font-medium">
                    {scannedItems.length} items
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-1">Last updated: Just now</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900">Scanned Ingredients</h4>
                    <button 
                      onClick={handleScan}
                      disabled={scanning}
                      className={`px-4 py-2 rounded-lg font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        scanning 
                          ? 'bg-gray-100 text-gray-400' 
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                      aria-label={scanning ? "Scanning ingredients..." : "Scan new ingredients"}
                    >
                      {scanning ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Scanning...
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Scan New Items
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {scannedItems.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center bg-green-50 text-green-800 px-3 py-2 rounded-lg"
                      >
                        <span>{item}</span>
                        <button 
                          onClick={() => handleRemoveItem(index)}
                          className="ml-2 text-green-600 hover:text-green-800 focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
                          aria-label={`Remove ${item} from pantry`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <form onSubmit={handleAddItem} className="mb-6">
                  <label htmlFor="add-item" className="block text-sm font-medium text-gray-700 mb-2">
                    Add Item Manually
                  </label>
                  <div className="flex">
                    <input
                      id="add-item"
                      type="text"
                      value={newItem}
                      onChange={(e) => setNewItem(e.target.value)}
                      className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g., Bell peppers, Chicken..."
                      aria-label="Add ingredient manually"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white font-medium rounded-r-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Add
                    </button>
                  </div>
                </form>
                
                <div className="bg-gradient-to-r from-green-500 to-teal-400 rounded-lg p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold">AI Analysis Complete</div>
                      <div className="text-sm opacity-90">5 recipes match your ingredients</div>
                    </div>
                    <button 
                      className="px-4 py-2 bg-white text-green-700 font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
                      aria-label="View matching recipes"
                    >
                      View Recipes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientScanner;