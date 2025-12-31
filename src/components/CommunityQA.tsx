import React, { useState } from 'react';

const CommunityQA = () => {
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'ingredients', name: 'Ingredient Help' },
    { id: 'techniques', name: 'Cooking Techniques' },
    { id: 'storage', name: 'Food Storage' },
    { id: 'recipes', name: 'Recipe Ideas' },
    { id: 'equipment', name: 'Kitchen Equipment' }
  ];

  const questions = [
    {
      id: 1,
      user: 'Sarah K.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      question: 'I have leftover roasted chicken, some wilted spinach, and half an onion. Quick dinner ideas?',
      category: 'recipes',
      answers: 5,
      likes: 12,
      time: '2 hours ago',
      isAnswered: true
    },
    {
      id: 2,
      user: 'Mike T.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      question: 'Best way to store fresh herbs so they last longer?',
      category: 'storage',
      answers: 8,
      likes: 24,
      time: '5 hours ago',
      isAnswered: true
    },
    {
      id: 3,
      user: 'Chef Ana',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      question: 'Can I substitute Greek yogurt for sour cream in baking?',
      category: 'ingredients',
      answers: 3,
      likes: 7,
      time: '1 day ago',
      isAnswered: true
    },
    
    {
      id: 4,
      user: 'David L.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      question: 'My rice always comes out mushy. What am I doing wrong?',
      category: 'techniques',
      answers: 2,
      likes: 5,
      time: '2 days ago',
      isAnswered: false
    },

     {
      id: 5,
      user: 'Tom R.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      question: 'What\'s the most essential kitchen equipment for beginners on a budget?',
      category: 'equipment',
      answers: 7,
      likes: 18,
      time: '1 day ago',
      isAnswered: true
    },
    {
      id: 6, 
      user: 'Lisa M.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      question: 'Is an air fryer worth it for small apartment cooking?',
      category: 'equipment',
      answers: 4,
      likes: 9,
      time: '3 hours ago',
      isAnswered: true
    }
  ];

  const filteredQuestions = selectedCategory === 'all' 
    ? questions 
    : questions.filter(q => q.category === selectedCategory);

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      // In real app, submit to backend
      setQuestion('');
      setIsSubmitting(false);
      alert('Question submitted! Our community will help you soon.');
    }, 1000);
  };

  const handleLikeQuestion = (questionId: number) => {
    // In real app, update likes in backend
    console.log('Liked question:', questionId);
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Community <span className="text-green-600">Q&A</span>
          </h2>
          <p className="text-xl text-gray-600">
            Got cooking questions? Our community of food waste warriors has answers!
          </p>
        </div>

        {/* Ask Question Form */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ask the Community</h3>
          <form onSubmit={handleSubmitQuestion}>
            <div className="mb-4">
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                What's your cooking challenge?
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Example: 'How can I use overripe bananas besides banana bread?'"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="text-sm text-gray-600">
                Pro tip: Be specific about ingredients you have and equipment available
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !question.trim()}
                className={`px-6 py-3 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                  isSubmitting || !question.trim()
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-teal-500 text-white hover:opacity-90'
                }`}
              >
                {isSubmitting ? 'Posting...' : 'Ask Question'}
              </button>
            </div>
          </form>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.map((q) => (
            <div key={q.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {/* Updated: Using actual image instead of initials */}
                  <div className="flex-shrink-0">
                    <img 
                      src={q.avatar} 
                      alt={q.user}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-12 h-12 bg-gradient-to-r from-green-400 to-teal-300 rounded-full flex items-center justify-center text-white font-bold';
                          fallback.textContent = q.user.split(' ').map(n => n[0]).join('');
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-gray-900">{q.user}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        q.isAnswered 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {q.isAnswered ? '✓ Answered' : 'Awaiting answers'}
                      </span>
                      <span className="text-sm text-gray-500">{q.time}</span>
                    </div>
                    <p className="text-gray-800 mb-4">{q.question}</p>
                    <div className="flex items-center space-x-6">
                      <button 
                        onClick={() => handleLikeQuestion(q.id)}
                        className="flex items-center text-gray-600 hover:text-green-600"
                      >
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span>{q.likes} likes</span>
                      </button>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>{q.answers} answers</span>
                      </div>
                      <button className="text-green-600 hover:text-green-800 font-medium">
                        View Answers →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expert Answers Preview */}
        <div className="mt-12 bg-gray-900 text-white rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Expert Answers</h3>
              <p className="text-gray-300 mb-6">
                Our certified chefs and food scientists provide detailed, science-backed answers to your toughest cooking questions.
              </p>
              <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white">
                Meet Our Experts
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400">24h</div>
                <div className="text-sm text-gray-300">Average response time</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400">95%</div>
                <div className="text-sm text-gray-300">Questions answered</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400">50+</div>
                <div className="text-sm text-gray-300">Expert contributors</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400">4.9★</div>
                <div className="text-sm text-gray-300">Satisfaction rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityQA;