'use client';

import { Shield, Bug, Rat, Zap, Droplets, Building, Home, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Termite Control',
      description: 'Advanced termite detection and elimination using eco-friendly treatments. Protect your property from costly structural damage.',
      features: ['Advanced detection methods', 'Eco-friendly treatments', 'Prevention barriers', 'Regular monitoring'],
      price: 'Starting from ₹2,999',
      duration: '2-4 hours'
    },
    {
      icon: <Rat className="w-8 h-8" />,
      title: 'Rodent Control',
      description: 'Comprehensive rodent elimination through safe removal methods and prevention strategies to keep them from returning.',
      features: ['Entry point sealing', 'Safe removal methods', 'Prevention strategies', 'Ongoing monitoring'],
      price: 'Starting from ₹1,999',
      duration: '1-2 hours'
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: 'Cockroach Control',
      description: 'Targeted cockroach elimination using proven methods that ensure long-term pest-free environments for your family.',
      features: ['Targeted treatment', 'Residual protection', 'Sanitation guidance', 'Follow-up visits'],
      price: 'Starting from ₹1,499',
      duration: '1-2 hours'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Mosquito Control',
      description: 'Comprehensive mosquito control for outdoor spaces, gardens, and commercial properties. Enjoy your outdoor areas again.',
      features: ['Outdoor treatment', 'Larval control', 'Repellent application', 'Seasonal programs'],
      price: 'Starting from ₹2,499',
      duration: '2-3 hours'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Bedbug Treatment',
      description: 'Professional bedbug elimination using heat treatment and chemical solutions for complete eradication.',
      features: ['Heat treatment', 'Chemical treatment', 'Furniture treatment', 'Prevention guidance'],
      price: 'Starting from ₹3,999',
      duration: '3-5 hours'
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'General Pest Control',
      description: 'Wide range of pest control services for common household and commercial pest problems.',
      features: ['Multi-pest treatment', 'Preventive measures', 'Regular maintenance', 'Emergency response'],
      price: 'Starting from ₹1,999',
      duration: '1-3 hours'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Pest Control Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional, eco-friendly pest control services tailored to your specific needs. 
            From residential to commercial, we provide effective solutions with guaranteed results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="card card-hover fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Service Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-green-600 font-medium">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Features */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">What's Included:</h4>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {service.duration}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="btn-primary w-full">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="gradient-primary rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Need a Custom Solution?
              </h3>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
                Every pest problem is unique. Contact us for a personalized pest control plan 
                that addresses your specific needs and concerns. Get a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                  Get Custom Quote
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
