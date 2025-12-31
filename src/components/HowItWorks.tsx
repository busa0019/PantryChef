// components/HowItWorks.tsx - Process explanation
import React, { useRef, useState, useEffect } from 'react';

const HowItWorks = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoDuration, setVideoDuration] = useState('2:15');
  const videoRef = useRef<HTMLVideoElement>(null);

  const steps = [
    {
      number: "01",
      title: "Add Your Ingredients",
      description: "Quickly add what's in your fridge, pantry, and freezer using our scanner or manual entry.",
      color: "from-green-500 to-emerald-400"
    },
    {
      number: "02",
      title: "Set Preferences",
      description: "Tell us about dietary restrictions, favorite cuisines, and how much time you have.",
      color: "from-teal-500 to-cyan-400"
    },
    {
      number: "03",
      title: "Get AI Recommendations",
      description: "Our smart algorithm finds perfect recipes that match your ingredients and preferences.",
      color: "from-blue-500 to-indigo-400"
    },
    {
      number: "04",
      title: "Cook & Enjoy",
      description: "Follow step-by-step instructions, track your savings, and share your creations.",
      color: "from-purple-500 to-pink-400"
    }
  ];

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  // Format time in MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        setVideoDuration(formatTime(video.duration));
      };
      
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  return (
    <section 
      id="how-it-works" 
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            id="how-it-works-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Simple Steps to <span className="text-green-600">Smarter Cooking</span>
          </h2>
          <p className="text-xl text-gray-600">
            PantryChef makes it effortless to reduce waste and discover amazing meals in just four easy steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-teal-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg`}>
                  {step.number}
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center max-w-xs">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-green-50 rounded-full px-6 py-3 mb-8">
            <span className="text-green-700 font-medium">
              🎥 Watch how it works in under 2 minutes
            </span>
          </div>
          
          {/* Video Section - Updated with background video preview */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="relative">
              <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                {/* Video element always visible but muted when not playing */}
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted={!isVideoPlaying}
                  playsInline
                  loop={false}
                  preload="metadata"
                  onClick={isVideoPlaying ? undefined : handlePlayVideo}
                  style={{ cursor: isVideoPlaying ? 'default' : 'pointer' }}
                >
                  <source src="/vid-1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Dark overlay for better text visibility */}
                {!isVideoPlaying && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                )}
                
                {/* Play Button Overlay - Only shown when video is not playing */}
                {!isVideoPlaying && (
                  <div 
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                    onClick={handlePlayVideo}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handlePlayVideo()}
                    aria-label="Play PantryChef demonstration video"
                  >
                    <div className="mb-6">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all group mb-4">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 md:w-10 md:h-10 text-green-700 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                )}
                
                {/* Control bar - Only shown when video is playing */}
                {isVideoPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={handlePauseVideo}
                        className="text-white hover:text-gray-300 transition-colors flex items-center space-x-2"
                        aria-label="Pause video"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium hidden md:inline">Pause</span>
                      </button>
                      
                      <button
                        onClick={() => {
                          if (videoRef.current) {
                            videoRef.current.currentTime = 0;
                            videoRef.current.play();
                          }
                        }}
                        className="text-white hover:text-gray-300 transition-colors flex items-center space-x-2"
                        aria-label="Replay video"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium hidden md:inline">Replay</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Video Info Section - Always visible below video */}
              <div className="p-6">
                <div className=" flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">See PantryChef in Action</h3>
                    <p className="text-gray-300">From scanning ingredients to cooking your first waste-free meal</p>
                  </div>
                </div>
                
                {/* Video Stats */}
                <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                  <div className="flex items-center bg-gray-800/50 px-3 py-1.5 rounded-lg">
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" clipRule="evenodd" />
                    </svg>
                    <span>Step-by-step demo</span>
                  </div>
                  <div className="flex items-center bg-gray-800/50 px-3 py-1.5 rounded-lg">
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
                    </svg>
                    <span>HD 1080p</span>
                  </div>
                  <div className="flex items-center bg-gray-800/50 px-3 py-1.5 rounded-lg">
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>No setup required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Features - Below the video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Real Demo</h4>
              </div>
              <p className="text-sm text-gray-600">Watch an actual user scanning ingredients and cooking a meal from start to finish.</p>
            </div>
            
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Quick Overview</h4>
              </div>
              <p className="text-sm text-gray-600">Get the complete picture of how PantryChef works in less than 3 minutes.</p>
            </div>
            
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">No Technical Jargon</h4>
              </div>
              <p className="text-sm text-gray-600">See exactly how it works with simple, clear instructions anyone can follow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;