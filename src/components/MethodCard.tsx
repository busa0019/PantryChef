import React, { useState } from 'react';

interface MethodCardProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  time: number;
  tools: string[];
  steps: Array<{
    step: number;
    title: string;
    description: string;
    tip?: string;
  }>;
  videoUrl?: string;
}

const MethodCard: React.FC<MethodCardProps> = ({
  title,
  description,
  difficulty,
  time,
  tools,
  steps,
  videoUrl
}) => {
  const [showSteps, setShowSteps] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center bg-gray-50 rounded-lg p-3">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <div className="text-sm text-gray-600">Time</div>
              <div className="font-semibold">{time} minutes</div>
            </div>
          </div>
          
          <div className="flex items-center bg-gray-50 rounded-lg p-3">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <div>
              <div className="text-sm text-gray-600">Tools Needed</div>
              <div className="font-semibold">{tools.length}</div>
            </div>
          </div>
          
          <div className="flex items-center bg-gray-50 rounded-lg p-3">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <div className="text-sm text-gray-600">Success Rate</div>
              <div className="font-semibold">95%</div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Required Tools</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span key={index} className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Steps Toggle */}
        <button
          onClick={() => setShowSteps(!showSteps)}
          className="w-full py-3 px-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold text-green-700">
              {showSteps ? 'Hide Step-by-Step Guide' : 'Show Step-by-Step Guide'}
            </span>
            <svg 
              className={`w-5 h-5 text-green-600 transition-transform ${showSteps ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Steps Content */}
        {showSteps && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-gray-900">Step-by-Step Instructions</h4>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  disabled={currentStep === steps.length - 1}
                  className="px-3 py-1 rounded-lg bg-green-600 text-white disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                  {currentStep + 1}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-lg">{steps[currentStep].title}</h5>
                  <p className="text-gray-700 mt-1">{steps[currentStep].description}</p>
                  {steps[currentStep].tip && (
                    <div className="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-500">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-yellow-800 text-sm font-medium">Pro Tip: {steps[currentStep].tip}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step Progress */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>Step {currentStep + 1} of {steps.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-teal-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Quick Steps Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
              {steps.map((step, index) => (
                <button
                  key={step.step}
                  onClick={() => setCurrentStep(index)}
                  className={`p-2 rounded-lg text-center transition-colors ${
                    currentStep === index 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="text-xs font-semibold">Step {step.step}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Video Section */}
        {videoUrl && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-gray-900">Video Tutorial</h4>
              <button className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Full Tutorial
              </button>
            </div>
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Cooking tutorial thumbnail" 
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-6">
          <button className="flex-1 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500">
            Save for Later
          </button>
          <button className="px-4 py-3 bg-white border-2 border-green-200 text-green-700 font-semibold rounded-xl hover:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500">
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default MethodCard;