import React from 'react';
import MethodCard from './MethodCard';

const MethodsSection = () => {
  const cookingMethods = [
    {
      title: 'Perfect Pan Searing',
      description: 'Learn to achieve restaurant-quality crust on proteins and vegetables for maximum flavor.',
      difficulty: 'Beginner' as const,
      time: 15,
      tools: ['Heavy skillet', 'Tongs', 'Oil with high smoke point', 'Paper towels'],
      steps: [
        {
          step: 1,
          title: 'Dry & Season',
          description: 'Pat protein completely dry with paper towels. Season generously with salt and pepper.',
          tip: 'Moisture is the enemy of a good sear - dry thoroughly!'
        },
        {
          step: 2,
          title: 'Heat the Pan',
          description: 'Heat your skillet over medium-high heat until very hot. Add oil and swirl to coat.',
          tip: 'Oil should shimmer but not smoke immediately'
        },
        {
          step: 3,
          title: 'Sear Without Moving',
          description: 'Place protein in pan and don\'t move it for 2-3 minutes to develop a crust.',
          tip: 'Resist the urge to peek! Let the crust form.'
        },
        {
          step: 4,
          title: 'Flip & Finish',
          description: 'Flip and cook other side. For thick cuts, finish in oven at 400°F for even cooking.',
          tip: 'Use tongs to avoid piercing the protein'
        }
      ],
      videoUrl: 'https://example.com/pan-searing'
    },
    {
      title: 'Knife Skills: The Rock Chop',
      description: 'Master the fundamental chopping technique for efficiency and safety in the kitchen.',
      difficulty: 'Advanced' as const,
      time: 10,
      tools: ['Chef\'s knife', 'Cutting board', 'Damp towel'],
      steps: [
        {
          step: 1,
          title: 'Proper Grip',
          description: 'Hold knife with thumb and index finger on the blade, other fingers wrapped around handle.',
          tip: 'This gives you maximum control'
        },
        {
          step: 2,
          title: 'Guide Hand',
          description: 'Curl fingers of other hand into a claw, using knuckles to guide the blade.',
          tip: 'Keep fingertips tucked in to avoid cuts'
        },
        {
          step: 3,
          title: 'Rocking Motion',
          description: 'Use a gentle rocking motion from tip to heel of blade, keeping tip on board.',
          tip: 'Let the knife do the work - don\'t force it'
        },
        {
          step: 4,
          title: 'Consistent Size',
          description: 'Aim for uniformly sized pieces for even cooking.',
          tip: 'Practice makes perfect!'
        }
      ],
      videoUrl: 'https://example.com/pan-searing'
    },
    {
      title: 'Flavor Building: The Fond',
      description: 'Harness the power of browned bits in your pan to create rich, complex sauces.',
      difficulty: 'Intermediate' as const,
      time: 25,
      tools: ['Heavy-bottomed pan', 'Wooden spoon', 'Liquid (wine, broth)', 'Butter or cream'],
      steps: [
        {
          step: 1,
          title: 'Create the Fond',
          description: 'After searing meat or vegetables, browned bits (fond) will stick to pan.',
          tip: 'Don\'t wash this away - it\'s pure flavor!'
        },
        {
          step: 2,
          title: 'Deglaze',
          description: 'Add a splash of wine, broth, or water and scrape bottom with wooden spoon.',
          tip: 'Listen for the satisfying sizzle'
        },
        {
          step: 3,
          title: 'Reduce',
          description: 'Simmer liquid until reduced by half, dissolving all browned bits.',
          tip: 'This concentrates the flavor'
        },
        {
          step: 4,
          title: 'Finish',
          description: 'Mount with cold butter or add cream for a luxurious sauce.',
          tip: 'Remove from heat before adding butter'
        }
      ],
      videoUrl: 'https://example.com/fond-technique'
    }
  ];

  return (
    <section 
      id="methods"  
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-green-50"
      aria-labelledby="methods-heading"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
           
            MASTER THE METHOD
          </div>
          <h2 
            id="methods-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Level Up Your <span className="text-green-600">Cooking Skills</span>
          </h2>
          <p className="text-xl text-gray-600">
            Essential techniques from The Cookful to help you cook smarter, waste less, and enjoy more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {cookingMethods.map((method, index) => (
            <MethodCard key={index} {...method} />
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-green-500">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
            Explore All Techniques
          </button>
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;