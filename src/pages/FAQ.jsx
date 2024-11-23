import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Services',
      questions: [
        {
          question: 'What types of services do you offer?',
          answer: 'We offer a comprehensive range of services including home renovations, exterior work, and general handyman services. This includes kitchen and bathroom remodeling, deck construction, painting, repairs, and maintenance work.'
        },
        {
          question: 'Do you handle emergency repairs?',
          answer: 'Yes, we provide emergency repair services for urgent issues. Contact us immediately at (727) 504-4681 for emergency assistance.'
        },
        {
          question: 'What areas do you serve?',
          answer: 'We serve the local area and surrounding communities. Contact us to confirm service availability in your specific location.'
        }
      ]
    },
    {
      category: 'Pricing & Estimates',
      questions: [
        {
          question: 'How do you determine pricing?',
          answer: 'Our pricing is based on the scope of work, materials required, and time estimated for completion. We provide detailed written estimates before beginning any project.'
        },
        {
          question: 'Do you offer free estimates?',
          answer: 'Yes, we provide free estimates for all projects. Contact us to schedule an on-site evaluation of your project needs.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, checks, and major credit cards. For larger projects, we can discuss payment schedules.'
        }
      ]
    },
    {
      category: 'Process & Timeline',
      questions: [
        {
          question: 'How long do typical projects take?',
          answer: 'Project timelines vary based on scope and complexity. Small repairs might take a few hours, while larger renovations could take several weeks. We provide estimated timelines during the consultation.'
        },
        {
          question: 'Do you provide warranties on your work?',
          answer: 'Yes, we stand behind our work with a satisfaction guarantee. Specific warranty terms vary by project type and will be detailed in your service agreement.'
        },
        {
          question: 'Do I need to provide materials?',
          answer: 'We can handle all material procurement, ensuring quality and appropriate specifications. However, if you prefer to provide your own materials, we can work with that as well.'
        }
      ]
    },
    {
      category: 'Licensing & Insurance',
      questions: [
        {
          question: 'Are you licensed and insured?',
          answer: 'Yes, we are fully licensed and insured. We maintain comprehensive liability insurance and workers\' compensation coverage for your protection.'
        },
        {
          question: 'Do you pull necessary permits?',
          answer: 'Yes, we handle all required permits for projects that need them. Permit costs will be included in your project estimate.'
        }
      ]
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container-custom">
        <h1 className="text-center mb-4">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Find answers to common questions about our services, processes, and policies.
          Can't find what you're looking for? Don't hesitate to contact us.
        </p>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
              <h2 className="bg-primary text-white px-6 py-4 text-xl font-semibold">
                {category.category}
              </h2>
              <div className="p-6">
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    return (
                      <div key={questionIndex} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                        <button
                          className="w-full text-left flex justify-between items-center"
                          onClick={() => toggleQuestion(index)}
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          <svg
                            className={`w-5 h-5 text-gray-500 transform transition-transform ${
                              openIndex === index ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {openIndex === index && (
                          <div className="mt-4 text-gray-600">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 bg-background rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            We're here to help! Contact us for personalized assistance with your specific needs.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
