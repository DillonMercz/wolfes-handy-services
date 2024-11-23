import { useState } from 'react';

const Tips = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tips' },
    { id: 'seasonal', name: 'Seasonal Maintenance' },
    { id: 'emergency', name: 'Emergency Repairs' },
    { id: 'diy', name: 'DIY Guides' },
    { id: 'preventive', name: 'Preventive Maintenance' }
  ];

  const tips = [
    {
      category: 'seasonal',
      title: 'Fall Home Maintenance Checklist',
      content: [
        'Clean gutters and downspouts',
        'Check and seal windows and doors',
        'Schedule HVAC maintenance',
        'Inspect roof for damage',
        'Drain outdoor faucets and irrigation systems'
      ],
      difficulty: 'Medium',
      timeEstimate: '1-2 days'
    },
    {
      category: 'emergency',
      title: 'How to Handle a Plumbing Emergency',
      content: [
        'Locate and shut off main water valve',
        'Open faucets to drain remaining water',
        'Document damage with photos',
        'Remove valuable items from affected area',
        'Contact a professional plumber'
      ],
      difficulty: 'High',
      timeEstimate: 'Immediate action required'
    },
    {
      category: 'diy',
      title: 'Basic Drywall Repair Guide',
      content: [
        'Clean and prepare the damaged area',
        'Cut drywall patch to size',
        'Apply joint compound',
        'Sand smooth when dry',
        'Prime and paint to match'
      ],
      difficulty: 'Medium',
      timeEstimate: '2-3 hours'
    },
    {
      category: 'preventive',
      title: 'Monthly Home Maintenance Tasks',
      content: [
        'Test smoke and CO detectors',
        'Inspect plumbing for leaks',
        'Check HVAC filters',
        'Clean range hood filters',
        'Inspect grout and caulking'
      ],
      difficulty: 'Easy',
      timeEstimate: '2-3 hours'
    },
    {
      category: 'seasonal',
      title: 'Spring Cleaning and Maintenance',
      content: [
        'Inspect exterior for winter damage',
        'Clean windows and screens',
        'Service lawn equipment',
        'Check outdoor drainage',
        'Inspect deck or patio condition'
      ],
      difficulty: 'Medium',
      timeEstimate: '2-3 days'
    },
    {
      category: 'diy',
      title: 'Paint Like a Pro',
      content: [
        'Properly prepare surfaces',
        'Choose the right paint and tools',
        'Use proper painting techniques',
        'Maintain wet edge while painting',
        'Clean up and proper storage'
      ],
      difficulty: 'Medium',
      timeEstimate: 'Varies by project'
    }
  ];

  const filteredTips = activeCategory === 'all' 
    ? tips 
    : tips.filter(tip => tip.category === activeCategory);

  return (
    <div className="min-h-screen py-16">
      <div className="container-custom">
        <h1 className="text-center mb-4">Home Maintenance Tips & Resources</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover professional tips and guides to help maintain your home and handle common repairs.
          From seasonal maintenance to emergency fixes, we've got you covered.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{tip.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    tip.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    tip.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {tip.difficulty}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {tip.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Time Estimate:</span> {tip.timeEstimate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Notice */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Safety First</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  While these tips can help with basic maintenance, always consult a professional
                  for complex repairs or if you're unsure about any procedure. Safety should
                  always be your top priority.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Help CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Need Professional Help?</h3>
          <p className="text-gray-600 mb-6">
            Our experienced team is ready to assist with any home maintenance or repair project.
          </p>
          <button className="btn-primary">
            Contact Us for Expert Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tips;
