'use client';

import { Shield, CheckCircle, Star, Users, Award, ArrowRight, Phone, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const router = useRouter();
  const [counts, setCounts] = useState({
    customers: 0,
    properties: 0,
    successRate: 0,
    experience: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      name: 'Termite Control',
      description: 'Professional termite inspection and treatment',
      image: '/termite-control.svg',
      icon: '🐜'
    },
    {
      name: 'Rodent Control',
      description: 'Safe and effective rodent elimination',
      image: '/rodent-control.svg',
      icon: '🐀'
    },
    {
      name: 'Cockroach Control',
      description: 'Complete cockroach eradication',
      image: '/cockroach-control.svg',
      icon: '🪳'
    },
    {
      name: 'Mosquito Control',
      description: 'Mosquito prevention and treatment',
      image: '/mosquito-control.svg',
      icon: '🦟'
    },
    {
      name: 'Bedbug Treatment',
      description: 'Thorough bedbug removal service',
      image: '/bedbug-treatment.svg',
      icon: '🛏️'
    },
    {
      name: 'General Pest Control',
      description: 'Comprehensive pest management',
      image: '/general-pest-control.svg',
      icon: '🕷️'
    },
    {
      name: 'Commercial Pest Management',
      description: 'Business pest control solutions',
      image: '/commercial-pest-management.svg',
      icon: '🏢'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounts();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    const finalCounts = {
      customers: 1000,
      properties: 5000,
      successRate: 99,
      experience: 8
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        customers: Math.floor(finalCounts.customers * easeOutQuart),
        properties: Math.floor(finalCounts.properties * easeOutQuart),
        successRate: Math.floor(finalCounts.successRate * easeOutQuart),
        experience: Math.floor(finalCounts.experience * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepDuration);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-light">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 lg:space-y-8 fade-in order-2 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-2 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium">
                  <Shield className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span>Trusted by 1000+ Customers</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional Pest Control{' '}
                  <span className="text-green-600">Solutions</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Protect your home and business with our comprehensive pest control services. 
                  Eco-friendly, safe, and effective solutions delivered by certified professionals.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <button 
                  onClick={() => router.push('/contact')}
                  className="btn-primary text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 flex items-center justify-center space-x-2"
                >
                  <Shield className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Get Free Inspection</span>
                </button>
                <button 
                  onClick={() => router.push('/services')}
                  className="btn-outline text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
                >
                  View Our Services
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 pt-4 lg:pt-6">
                <div className="text-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  </div>
                  <p className="text-xs lg:text-sm font-medium text-gray-700">Eco-Friendly</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  </div>
                  <p className="text-xs lg:text-sm font-medium text-gray-700">Child-Safe</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-500" />
                  </div>
                  <p className="text-xs lg:text-sm font-medium text-gray-700">5-Star Rated</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  </div>
                  <p className="text-xs lg:text-sm font-medium text-gray-700">24/7 Support</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative fade-in order-1 lg:order-2">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 h-72 sm:h-80 lg:h-[500px] flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-2 left-2 lg:top-4 lg:left-4 w-16 h-16 lg:w-20 lg:h-20 bg-green-300 rounded-full"></div>
                  <div className="absolute top-16 right-4 lg:top-20 lg:right-8 w-12 h-12 lg:w-16 lg:h-16 bg-green-400 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 w-20 h-20 lg:w-24 lg:h-24 bg-green-300 rounded-full"></div>
                </div>
                
                <div className="text-center space-y-3 lg:space-y-6 relative z-10 px-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-800 font-semibold text-sm sm:text-base lg:text-lg">
                      Professional Pest Control
                    </p>
                    <p className="text-xs lg:text-sm text-green-700 max-w-[200px] sm:max-w-xs mx-auto leading-relaxed">
                      Certified technicians using advanced equipment and eco-friendly solutions
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 border border-gray-100">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 lg:space-x-2 mb-2">
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500 fill-current" />
                  </div>
                  <p className="text-lg lg:text-2xl font-bold text-green-600">4.9/5</p>
                  <p className="text-xs lg:text-sm text-gray-600">Customer Rating</p>
                </div>
              </div>
              
              <div className="absolute -top-3 -right-3 lg:-top-6 lg:-right-6 bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 border border-gray-100">
                <div className="text-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  </div>
                  <p className="text-lg lg:text-2xl font-bold text-green-600">8+</p>
                  <p className="text-xs lg:text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Pest Control Services
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From residential homes to commercial properties, we provide expert pest control solutions 
              for all types of infestations with guaranteed results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  {/* Service Image */}
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center relative overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.name}
                      width={200}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                  
                  <div className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                      {service.name}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors duration-200">
                      <span className="text-sm lg:text-base">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <button 
              onClick={() => router.push('/services')}
              className="btn-primary text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Why Choose PestGuard Pro?
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8">
                We combine cutting-edge technology with eco-friendly solutions to deliver 
                the most effective pest control services in the industry.
              </p>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">Certified Technicians</h3>
                    <p className="text-sm lg:text-base text-gray-600">Our team consists of licensed and certified pest control professionals with extensive training.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">Eco-Friendly Solutions</h3>
                    <p className="text-sm lg:text-base text-gray-600">We use environmentally safe products that are effective against pests but harmless to your family and pets.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">24/7 Emergency Service</h3>
                    <p className="text-sm lg:text-base text-gray-600">Pest emergencies don't wait for business hours. We're available round the clock for urgent situations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl lg:rounded-3xl p-6 lg:p-8 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                <div className="text-center space-y-4 lg:space-y-6">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Award className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-800 font-semibold text-lg lg:text-xl">
                      Industry Leader
                    </p>
                    <p className="text-xs lg:text-sm text-green-700 max-w-xs">
                      Recognized for excellence in pest control services and customer satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-12 lg:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Success in Numbers
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Trusted by thousands of customers across the region with proven results and satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Users className="w-8 h-8 lg:w-10 lg:h-10 text-green-600" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">{counts.customers}+</div>
              <p className="text-sm lg:text-base text-gray-600 font-medium">Happy Customers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-green-600" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">{counts.properties}+</div>
              <p className="text-sm lg:text-base text-gray-600 font-medium">Properties Protected</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <CheckCircle className="w-8 h-8 lg:w-10 lg:h-10 text-green-600" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">{counts.successRate}%</div>
              <p className="text-sm lg:text-base text-gray-600 font-medium">Success Rate</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Award className="w-8 h-8 lg:w-10 lg:h-10 text-green-600" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">{counts.experience}+</div>
              <p className="text-sm lg:text-base text-gray-600 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                </div>
              </div>
              <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">
                "PestGuard Pro completely eliminated our termite problem. The team was professional, 
                thorough, and used eco-friendly solutions. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 lg:mr-4">
                  <span className="text-green-600 font-semibold text-sm lg:text-base">S</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm lg:text-base">Sarah Johnson</p>
                  <p className="text-xs lg:text-sm text-gray-600">Homeowner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                </div>
              </div>
              <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">
                "Excellent service for our restaurant. They handle all our pest control needs 
                professionally and ensure we maintain health standards. Great team!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 lg:mr-4">
                  <span className="text-green-600 font-semibold text-sm lg:text-base">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm lg:text-base">Mike Chen</p>
                  <p className="text-xs lg:text-sm text-gray-600">Restaurant Owner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                </div>
              </div>
              <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">
                "Fast response time and effective treatment. They solved our bedbug issue 
                completely. The staff is knowledgeable and courteous."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 lg:mr-4">
                  <span className="text-green-600 font-semibold text-sm lg:text-base">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm lg:text-base">Amanda Davis</p>
                  <p className="text-xs lg:text-sm text-gray-600">Hotel Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container-custom text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 lg:mb-6">
            Ready to Get Rid of Pests?
          </h2>
          <p className="text-lg lg:text-xl text-green-100 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Don't let pests take over your home or business. Contact us today for a free inspection 
            and professional pest control solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <button 
              onClick={() => router.push('/contact')}
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-base lg:text-lg"
            >
              Get Free Inspection
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-lg transition-all duration-200 text-base lg:text-lg">
              Call Now
            </button>
          </div>
          
          <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row items-center justify-center space-y-3 lg:space-y-0 sm:space-x-6 lg:space-x-8 text-green-100 text-sm lg:text-base">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>Serving All Areas</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
