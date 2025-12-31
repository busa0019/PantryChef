import React, { useState } from 'react';

interface ShoppingItem {
  id: number;
  name: string;
  quantity: string;
  category: 'vegetables' | 'protein' | 'grains' | 'dairy' | 'spices' | 'fruits' | 'other';
  checked: boolean;
  priority?: 'high' | 'medium' | 'low';
}

interface ShoppingListProps {
  items: ShoppingItem[];
  onItemsChange: (items: ShoppingItem[]) => void;
  user?: { name: string; email: string } | null;
}

const ShoppingList: React.FC<ShoppingListProps> = ({ items, onItemsChange, user }) => {
  const [newItem, setNewItem] = useState('');
  const [newCategory, setNewCategory] = useState<ShoppingItem['category']>('vegetables');
  const [showCompleted, setShowCompleted] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = {
    vegetables: { label: '🥦 Vegetables', color: 'bg-green-100 text-green-800' },
    protein: { label: '🍗 Protein', color: 'bg-red-100 text-red-800' },
    grains: { label: '🌾 Grains', color: 'bg-amber-100 text-amber-800' },
    dairy: { label: '🥛 Dairy', color: 'bg-blue-100 text-blue-800' },
    spices: { label: '🌶️ Spices', color: 'bg-orange-100 text-orange-800' },
    fruits: { label: '🍎 Fruits', color: 'bg-pink-100 text-pink-800' },
    other: { label: '📦 Other', color: 'bg-gray-100 text-gray-800' }
  };

  const priorityColors = {
    high: 'bg-red-50 border-red-200',
    medium: 'bg-yellow-50 border-yellow-200',
    low: 'bg-green-50 border-green-200'
  };

  const handleCheck = (id: number) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    onItemsChange(updatedItems);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    const newShoppingItem: ShoppingItem = {
      id: Date.now(),
      name: newItem.trim(),
      quantity: '1',
      category: newCategory,
      checked: false,
      priority: 'medium'
    };

    onItemsChange([...items, newShoppingItem]);
    setNewItem('');
  };

  const handleRemoveItem = (id: number) => {
    onItemsChange(items.filter(item => item.id !== id));
  };

  const handleClearCompleted = () => {
    onItemsChange(items.filter(item => !item.checked));
  };

  const handleGenerateAIList = () => {
    if (!user) {
      alert('Please login to use AI features!');
      return;
    }
    
    const aiItems: ShoppingItem[] = [
      { id: Date.now() + 1, name: 'Tomatoes', quantity: '4 pieces', category: 'vegetables', checked: false, priority: 'medium' },
      { id: Date.now() + 2, name: 'Onions', quantity: '2 pieces', category: 'vegetables', checked: false, priority: 'medium' },
      { id: Date.now() + 3, name: 'Olive Oil', quantity: '500ml', category: 'other', checked: false, priority: 'high' },
    ];
    onItemsChange([...items, ...aiItems]);
  };

  const filteredItems = items.filter(item => {
    if (categoryFilter === 'all') return true;
    if (categoryFilter === 'unchecked') return !item.checked;
    if (categoryFilter === 'checked') return item.checked;
    return item.category === categoryFilter;
  });

  const uncheckedCount = items.filter(item => !item.checked).length;
  const totalEstimatedCost = items.reduce((total, item) => {
    const basePrice = item.priority === 'high' ? 5 : item.priority === 'medium' ? 3 : 2;
    return total + (item.checked ? 0 : basePrice);
  }, 0);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-bold text-gray-900">Smart Shopping List</h3>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              {uncheckedCount} items
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              ${totalEstimatedCost.toFixed(2)}
            </span>
          </div>
        </div>
        <p className="text-gray-600">AI-generated based on your meal plan and pantry inventory</p>
      </div>
      
      <div className="p-6">
        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${categoryFilter === 'all' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            All Items
          </button>
          <button
            onClick={() => setCategoryFilter('unchecked')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${categoryFilter === 'unchecked' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            To Buy ({uncheckedCount})
          </button>
          <button
            onClick={() => setCategoryFilter('checked')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${categoryFilter === 'checked' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Purchased
          </button>
          <div className="flex-1"></div>
          <button
            onClick={() => setShowCompleted(!showCompleted)}
            className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900"
          >
            {showCompleted ? 'Hide Completed' : 'Show Completed'}
          </button>
        </div>

        {/* Shopping List Items */}
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
          {filteredItems
            .filter(item => showCompleted || !item.checked)
            .map((item) => (
              <div 
                key={item.id} 
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${priorityColors[item.priority || 'medium']} ${item.checked ? 'opacity-60' : ''}`}
              >
                <div className="flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheck(item.id)}
                    className="h-5 w-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                    aria-label={`Mark ${item.name} as purchased`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`font-medium ${item.checked ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-0.5 text-xs rounded-full ${categories[item.category].color}`}>
                          {categories[item.category].label}
                        </span>
                        <span className="text-sm text-gray-500">{item.quantity}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.priority === 'high' && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                          🔥 High Priority
                        </span>
                      )}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50"
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">All items purchased!</h4>
              <p className="text-gray-600">Your shopping list is empty. Great job!</p>
            </div>
          )}
        </div>

        {/* Add Item Form */}
        <form onSubmit={handleAddItem} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-5">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Add new item (e.g., Avocados)"
              />
            </div>
            <div className="md:col-span-3">
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as ShoppingItem['category'])}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {Object.entries(categories).map(([key, { label }]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Add Item
              </button>
            </div>
            <div className="md:col-span-2">
              <button
                type="button"
                onClick={handleGenerateAIList}
                className="w-full py-3 bg-white border-2 border-green-200 text-green-700 font-medium rounded-lg hover:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                AI Suggest
              </button>
            </div>
          </div>
        </form>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100">
          <button
            onClick={handleClearCompleted}
            className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Clear Purchased
          </button>
          <button className="px-4 py-2 bg-green-50 text-green-700 font-medium rounded-lg hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500">
            Save List
          </button>
          <button className="px-4 py-2 bg-green-50 text-green-700 font-medium rounded-lg hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500">
            Share List
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 ml-auto">
            Print List
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{items.length}</div>
            <div className="text-sm text-gray-600">Total Items</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{uncheckedCount}</div>
            <div className="text-sm text-gray-600">To Purchase</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600">${totalEstimatedCost.toFixed(2)}</div>
            <div className="text-sm text-gray-600">Estimated Cost</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {items.length > 0 ? Math.round((items.filter(item => item.checked).length / items.length) * 100) : 0}%
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;