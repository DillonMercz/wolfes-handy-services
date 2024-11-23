import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'renovation', name: 'Home Renovations' },
    { id: 'exterior', name: 'Exterior Work' },
    { id: 'handyman', name: 'Handyman Services' }
  ];

  const services = [
    {
      category: 'renovation',
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen with modern designs and premium materials.',
      features: [
        'Custom cabinet installation',
        'Countertop replacement',
        'Appliance installation',
        'Lighting upgrades',
        'Flooring installation'
      ],
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500',
      timeframe: '2-4 weeks',
      priceRange: '$$$$'
    },
    {
      category: 'renovation',
      title: 'Bathroom Renovation',
      description: 'Create your dream bathroom with our expert renovation services.',
      features: [
        'Tile installation',
        'Fixture upgrades',
        'Vanity installation',
        'Shower/tub replacement',
        'Plumbing updates'
      ],
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=500',
      timeframe: '1-3 weeks',
      priceRange: '$$$'
    },
    {
      category: 'exterior',
      title: 'Deck Construction',
      description: 'Custom deck design and construction for outdoor living.',
      features: [
        'Custom design options',
        'Premium materials',
        'Built-in seating',
        'Railing installation',
        'Staining and sealing'
      ],
      image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=500',
      timeframe: '1-2 weeks',
      priceRange: '$$$'
    },
    {
      category: 'exterior',
      title: 'Exterior Painting',
      description: 'Professional exterior painting to enhance curb appeal.',
      features: [
        'Surface preparation',
        'Premium paint products',
        'Trim and detail work',
        'Siding repair',
        'Color consultation'
      ],
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=500',
      timeframe: '3-5 days',
      priceRange: '$$'
    },
    {
      category: 'handyman',
      title: 'General Repairs',
      description: 'Quick and reliable repairs for various home issues.',
      features: [
        'Drywall repair',
        'Door adjustments',
        'Window repairs',
        'Hardware installation',
        'Minor plumbing fixes'
      ],
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=500',
      timeframe: '1-2 days',
      priceRange: '$'
    },
    {
      category: 'handyman',
      title: 'Home Maintenance',
      description: 'Regular maintenance to keep your home in top condition.',
      features: [
        'Gutter cleaning',
        'Pressure washing',
        'Weather stripping',
        'Caulking',
        'General inspections'
      ],
      image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&w=500',
      timeframe: '1 day',
      priceRange: '$'
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  const processSteps = [
    {
      title: 'Initial Consultation',
      description: 'We discuss your needs and vision for the project.',
      icon: '📋'
    },
    {
      title: 'Project Planning',
      description: 'Detailed planning and cost estimation.',
      icon: '📐'
    },
    {
      title: 'Execution',
      description: 'Professional and efficient project completion.',
      icon: '🛠️'
    },
    {
      title: 'Final Inspection',
      description: 'Quality check and client walkthrough.',
      icon: '✓'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional handyman and renovation services tailored to your needs.
            Quality craftsmanship and attention to detail in every project.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="service-card group hover:shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-semibold px-3 py-1 rounded-full bg-primary/80">
                    {service.timeframe}
                  </span>
                  <span className="ml-2 text-white font-semibold px-3 py-1 rounded-full bg-secondary/80">
                    {service.priceRange}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-secondary mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl text-white mb-4 floating">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-center text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary text-white py-16 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. Let's bring your vision to life!
          </p>
          <Link
            to="/contact"
            className="btn-secondary shine inline-block"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
