'use client';

import { Calendar, Clock, ArrowRight, BookOpen, Shield, Bug, Rat } from 'lucide-react';

const Updates = () => {
  const articles = [
    {
      title: '5 Essential Tips for Preventing Termite Infestation',
      excerpt: 'Learn the most effective ways to protect your home from termite damage with these proven prevention strategies.',
      category: 'Prevention Tips',
      readTime: '5 min read',
      date: 'August 10, 2024',
      icon: <Shield className="w-6 h-6" />,
      color: 'green'
    },
    {
      title: 'Seasonal Pest Control: What to Expect This Summer',
      excerpt: 'Discover which pests are most active during summer months and how to prepare your home accordingly.',
      category: 'Seasonal Awareness',
      readTime: '7 min read',
      date: 'August 8, 2024',
      icon: <Bug className="w-6 h-6" />,
      color: 'blue'
    },
    {
      title: 'Eco-Friendly Pest Control: Safe Solutions for Your Family',
      excerpt: 'Explore natural and chemical-free pest control methods that are safe for children, pets, and the environment.',
      category: 'Eco-Friendly Methods',
      readTime: '6 min read',
      date: 'August 5, 2024',
      icon: <Shield className="w-6 h-6" />,
      color: 'purple'
    },
    {
      title: 'The Complete Guide to Rodent-Proofing Your Home',
      excerpt: 'Step-by-step instructions to seal entry points and create a rodent-free environment in your home.',
      category: 'Prevention Tips',
      readTime: '8 min read',
      date: 'August 3, 2024',
      icon: <Rat className="w-6 h-6" />,
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      yellow: 'bg-yellow-100 text-yellow-600'
    };
    return colors[color] || colors.green;
  };

  return (
    <section id="updates" className="section-padding gradient-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Latest News & Tips</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Stay Informed with Expert Advice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the latest pest control tips, seasonal alerts, and industry insights 
            to keep your home and business pest-free year-round.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Featured Article Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  <BookOpen className="w-4 h-4" />
                  <span>Featured Article</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  The Ultimate Guide to Eco-Friendly Pest Control in 2024
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover the latest innovations in environmentally responsible pest control, 
                  from natural repellents to smart monitoring systems that protect your home 
                  without harming the planet.
                </p>

                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>August 12, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>12 min read</span>
                  </div>
                </div>

                <button className="btn-primary">
                  Read Full Article
                </button>
              </div>

              {/* Featured Article Image */}
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-2xl p-8 h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-green-700 font-medium">
                    Eco-Friendly Pest Control Guide
                  </p>
                  <p className="text-sm text-green-600 px-4">
                    Comprehensive guide with modern solutions<br />
                    and sustainable practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="card card-hover fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(article.color)}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 ${getColorClasses(article.color)} rounded-xl flex items-center justify-center`}>
                    {article.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                    {article.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center space-x-1 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="gradient-primary rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Stay Updated with Pest Control Tips
              </h3>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
                Get weekly pest control tips, seasonal alerts, and exclusive offers 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-green-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updates;
