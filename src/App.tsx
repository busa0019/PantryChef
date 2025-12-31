import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import IngredientScanner from './components/IngredientScanner';
import RecipeFinder from './components/RecipeFinder';
import ShoppingList from './components/ShoppingList';
import MethodsSection from './components/MethodsSection';
import CommunityQA from './components/CommunityQA';
import DashboardPreview from './components/DashboardPreview';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import LoginModal from './components/LoginModal';

interface User {
  name: string;
  email: string;
}

interface ShoppingItem {
  id: number;
  name: string;
  quantity: string;
  category: 'vegetables' | 'protein' | 'grains' | 'dairy' | 'spices' | 'fruits' | 'other';
  checked: boolean;
  priority?: 'high' | 'medium' | 'low';
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginModalMode, setLoginModalMode] = useState<'login' | 'signup'>('login');
  const [user, setUser] = useState<User | null>(null);
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([
    { id: 1, name: 'Bell Peppers', quantity: '3 pieces', category: 'vegetables', checked: false, priority: 'high' },
    { id: 2, name: 'Chicken Breast', quantity: '500g', category: 'protein', checked: false, priority: 'high' },
    { id: 3, name: 'Basmati Rice', quantity: '1kg', category: 'grains', checked: true, priority: 'medium' },
    { id: 4, name: 'Greek Yogurt', quantity: '500g', category: 'dairy', checked: false, priority: 'medium' },
  ]);

  useEffect(() => {
    // Check for saved user session
    const savedUser = localStorage.getItem('pantryChefUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('pantryChefUser');
      }
    }

    // Load saved shopping list
    const savedList = localStorage.getItem('pantryChefShoppingList');
    if (savedList) {
      try {
        setShoppingItems(JSON.parse(savedList));
      } catch (error) {
        console.error('Error parsing shopping list:', error);
        localStorage.removeItem('pantryChefShoppingList');
      }
    }
    
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Save shopping list when it changes
  useEffect(() => {
    localStorage.setItem('pantryChefShoppingList', JSON.stringify(shoppingItems));
  }, [shoppingItems]);

  // Save user data when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('pantryChefUser', JSON.stringify(user));
    }
  }, [user]);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('pantryChefUser', JSON.stringify(userData));
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('pantryChefUser');
  };

  const handleLoginClick = (mode: 'login' | 'signup' = 'login') => {
    setLoginModalMode(mode);
    setIsLoginModalOpen(true);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50" role="main">
      <Header 
        onSectionChange={handleSectionChange} 
        activeSection={activeSection}
        user={user}
        onLoginClick={handleLoginClick}
        onLogout={handleLogout}
      />
      <Hero />
      <Features />
      <HowItWorks />
      <IngredientScanner />
      <RecipeFinder />
      
      {/* Shopping List Section */}
      <section id="shopping-list" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Smart <span className="text-green-600">Shopping List</span>
            </h2>
            <p className="text-xl text-gray-600">
              AI-generated grocery lists based on your meal plan and pantry inventory
            </p>
          </div>
          <ShoppingList items={shoppingItems} onItemsChange={setShoppingItems} user={user} />
        </div>
      </section>
      
      <MethodsSection />
      <CommunityQA />
      <DashboardPreview />
      <CommunitySection />
      <Footer />
      
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
        mode={loginModalMode}
        onModeChange={(newMode) => setLoginModalMode(newMode)}
      />
    </div>
  );
}

export default App;