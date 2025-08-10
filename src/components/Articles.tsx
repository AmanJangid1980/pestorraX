'use client';

import { Shield, Clock, Award, Users, CheckCircle, Star, Zap, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Licensed & Certified',
      description: 'All our technicians are fully licensed, certified, and insured. We follow industry best practices and safety standards.',
      color: 'green'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Emergency Service',
      description: 'Pest problems don\'t wait for business hours. We provide round-the-clock emergency pest control services.',
      color: 'blue'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Guaranteed Results',
      description: 'We stand behind our work with satisfaction guarantees. If pests return, we\'ll treat again at no extra cost.',
      color: 'purple'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Our team has over 8 years of combined experience in pest control, ensuring professional and effective solutions.',
      color: 'indigo'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Response',
      description: 'We understand urgency. Our team responds quickly to emergency calls and provides same-day service when possible.',
      color: 'yellow'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Eco-Friendly',
      description: 'We use environmentally responsible pest control methods that are safe for your family, pets, and the environment.',
      color: 'green'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Homeowner',
      rating: 5,
      text: 'Excellent service! The team was professional, thorough, and completely eliminated our termite problem. Highly recommend!',
      avatar: 'PS'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Restaurant Owner',
      rating: 5,
      text: 'PestGuard Pro has been managing our restaurant\'s pest control for 3 years. Reliable, professional, and effective.',
      avatar: 'RK'
    },
    {
      name: 'Anita Patel',
      role: 'Property Manager',
      rating: 5,
      text: 'Outstanding service quality and customer support. They handle all our properties with care and professionalism.',
      avatar: 'AP'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      yellow: 'bg-yellow-100 text-yellow-600'
    };
    return colors[color] || colors.green;
  };

  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The PestGuard Pro Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just eliminate pests - we provide comprehensive solutions that protect your property 
            and give you peace of mind. Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div key={index} className="card card-hover fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-8">
                <div className={`w-16 h-16 ${getColorClasses(advantage.color)} rounded-2xl flex items-center justify-center mb-6`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card card-hover fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="p-8">
                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h3>
            <p className="text-xl text-gray-600">Join our growing community of satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">5000+</p>
              <p className="text-gray-600">Services Completed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">4.9/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">1000+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
