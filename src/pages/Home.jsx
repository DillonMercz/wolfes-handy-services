import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'Home Renovations',
      description: 'Transform your living space with our expert renovation services.',
      icon: '🏠'
    },
    {
      title: 'Exterior Work',
      description: 'Enhance your home\'s curb appeal with our professional exterior services.',
      icon: '🏡'
    },
    {
      title: 'Handyman Services',
      description: 'From minor repairs to major improvements, we handle it all.',
      icon: '🔧'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Wolfe's Handy Services transformed my outdated kitchen into a modern masterpiece. Their attention to detail and professionalism was outstanding.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "I've used their services for multiple commercial projects. They're always reliable, efficient, and deliver quality work on time.",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      content: "Their maintenance services have been invaluable for our properties. Quick response times and excellent workmanship.",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  const featuredProjects = [
    {
      title: "Modern Kitchen Renovation",
      description: "Complete kitchen remodel with custom cabinets and island installation",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500"
    },
    {
      title: "Deck Construction",
      description: "Custom-built outdoor living space with premium materials",
      image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=500"
    },
    {
      title: "Bathroom Remodel",
      description: "Luxury bathroom renovation with modern fixtures",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-white py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6 floating">
              Professional Handyman Services You Can Trust
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Expert craftsmanship and reliable service for all your home improvement needs.
            </p>
            <Link 
              to="/contact" 
              className="btn-hover-slide inline-block px-8 py-4 bg-secondary text-white rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-pattern-2">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-primary text-4xl font-bold">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card hover-lift group">
                <div className="text-4xl mb-4 floating">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-pattern-1">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-primary text-4xl font-bold">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="card-hover bg-white rounded-lg overflow-hidden">
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold px-4 py-2 rounded-lg bg-primary/80">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary hover-lift">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-pattern-2">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-primary text-4xl font-bold">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card hover-lift">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-secondary hover-grow"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 bg-pattern-3">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-primary text-4xl font-bold">Maintenance Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="feature-card hover-glow">
              <h3 className="text-xl font-semibold mb-3 text-primary">Seasonal Home Maintenance</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center hover-lift">
                  <span className="text-secondary mr-2">•</span>
                  Clean gutters and downspouts regularly
                </li>
                <li className="flex items-center hover-lift">
                  <span className="text-secondary mr-2">•</span>
                  Check and replace HVAC filters monthly
                </li>
                <li className="flex items-center hover-lift">
                  <span className="text-secondary mr-2">•</span>
                  Inspect roof for damaged shingles
                </li>
              </ul>
            </div>
            <div className="feature-card hover-glow">
              <h3 className="text-xl font-semibold mb-3 text-primary">Energy Saving Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center hover-lift">
                  <span className="text-secondary mr-2">•</span>
                  Seal windows and doors
                </li>
                <li className="flex items-center hover-lift">
                  <span className="text-secondary mr-2">•</span>
                  Install LED light bulbs
                </li>
                <li className="flex items-center hover-lift">
                  <span className="text-secondary mr-2">•</span>
                  Add insulation to reduce energy loss
                </li>
              </ul>
            </div>
            <div className="feature-card hover-glow">
              <h3 className="text-xl font-semibold mb-3 text-primary">Preventive Maintenance</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center hover-lift">
                  <span className="text-secondary mr-2">•</span>
                  Regular plumbing inspections
                </li>
                <li className="flex items-center hover-lift">
                  <span className="text-secondary mr-2">•</span>
                  Test smoke detectors monthly
                </li>
                <li className="flex items-center hover-lift">
                  <span className="text-secondary mr-2">•</span>
                  Check for water leaks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-pattern-2">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-primary text-4xl font-bold">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="feature-card hover-lift">
              <h3 className="text-xl font-semibold mb-3">Professional Excellence</h3>
              <p className="text-gray-600">
                Years of experience delivering quality craftsmanship and superior results.
              </p>
            </div>
            <div className="feature-card hover-lift">
              <h3 className="text-xl font-semibold mb-3">Reliable Service</h3>
              <p className="text-gray-600">
                On-time, efficient service with clear communication throughout your project.
              </p>
            </div>
            <div className="feature-card hover-lift">
              <h3 className="text-xl font-semibold mb-3">Fair Pricing</h3>
              <p className="text-gray-600">
                Competitive rates with no hidden fees. Get the best value for your investment.
              </p>
            </div>
            <div className="feature-card hover-lift">
              <h3 className="text-xl font-semibold mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We stand behind our work with a 100% guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hero-section text-white py-20">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Contact us today for a free consultation and quote.
          </p>
          <Link 
            to="/contact" 
            className="btn-hover-slide inline-block px-8 py-4 bg-secondary text-white rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
