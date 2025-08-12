'use client';

import { Shield, Award, Users, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: '1000+', label: 'Happy Customers' },
    { icon: <Award className="w-6 h-6" />, number: '8+', label: 'Years Experience' },
    { icon: <Shield className="w-6 h-6" />, number: '5000+', label: 'Services Completed' },
    { icon: <Star className="w-6 h-6" />, number: '4.9/5', label: 'Customer Rating' },
  ];

  const features = [
    'Licensed and certified pest control technicians',
    'Eco-friendly and child-safe treatment methods',
    'Comprehensive pest identification and assessment',
    'Guaranteed results with follow-up services',
    '24/7 emergency pest control support',
    'Competitive pricing with transparent quotes',
  ];

  return (
    <section id="about" className="section-padding gradient-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                <span>About PestorraX</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner in{' '}
                <span className="text-green-600">Pest Control</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over 8 years of experience, PestorraX has been protecting homes and businesses 
                across the region with professional, eco-friendly pest control solutions. Our certified 
                technicians use advanced techniques and safe products to ensure your property remains 
                pest-free while protecting your family and the environment.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                Learn More About Us
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                View Our Certifications
              </button>
            </div>
          </div>

          {/* Stats and Image */}
          <div className="space-y-8 fade-in">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Company Image Placeholder */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 left-6 w-24 h-24 bg-green-300 rounded-full"></div>
                <div className="absolute bottom-6 right-6 w-20 h-20 bg-green-400 rounded-full"></div>
              </div>
              
              <div className="text-center space-y-4 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <p className="text-green-800 font-semibold text-lg">
                    Professional Team
                  </p>
                  <p className="text-sm text-green-700">
                    Certified technicians with years of experience
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Licensed & Insured</h4>
                  <p className="text-sm text-gray-600">All our services are fully licensed and insured for your peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
