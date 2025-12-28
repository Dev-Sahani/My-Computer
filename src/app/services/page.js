'use client'

import { CheckCircle, Shield, Wrench, Camera, Package, Lock, Headphones, ArrowRight, Star, Users, Award, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      name: "Laptop & Computer Repair",
      description: "We repair all brands of laptops and computers including Apple, Dell, HP, Lenovo, Asus, Acer and more.",
      image: "https://images.unsplash.com/photo-1573164574230-db1d5e960238",
      icon: <Wrench className="w-8 h-8" />,
      features: ["All Brands Supported", "Expert Technicians", "Quick Turnaround"]
    },
    {
      name: "CCTV Camera Sales & Installation",
      description: "We install all brands of CCTV cameras including Secure-Eye, Axis, etc. We also install all brands of DVRs and NVRs. We give you full guidance and support you need.",
      image: "https://images.unsplash.com/photo-1715543866781-edcc8e1f0907",
      icon: <Camera className="w-8 h-8" />,
      features: ["Professional Installation", "All Brands Available", "Full Support"]
    },
    {
      name: "Wholesale & Retail Home Security Appliances",
      description: "We offer both wholesale and retail services for a wide range of home security appliances, including digital locks, door/window sensors, smoke detectors, and more.",
      image: "https://images.unsplash.com/photo-1510849911856-cdc9335e1597",
      icon: <Shield className="w-8 h-8" />,
      features: ["Bulk Orders Available", "Latest Technology", "Competitive Pricing"]
    },
    {
      name: "Wholesale & Retail Computer & Accessories",
      description: "We offer both wholesale and retail services for a wide range of products, including laptops, desktops, printers, scanners, and cameras.",
      image: "https://images.unsplash.com/photo-1636979648933-6d06b1ce9ad7",
      icon: <Package className="w-8 h-8" />,
      features: ["Wide Product Range", "Wholesale Pricing", "Quality Guaranteed"]
    },
    {
      name: "Anti-Virus & Security",
      description: "We sell all brands of antivirus and security including Norton, Avira, etc. We also sell all brands of firewalls and routers.",
      image: "https://images.unsplash.com/photo-1556559343-8594f8854d52",
      icon: <Lock className="w-8 h-8" />,
      features: ["Trusted Brands", "Complete Protection", "Expert Setup"]
    },
    {
      name: "Any Other Services",
      description: "We are a one stop solution for all your IT needs. Just give us a call or visit us in person, we will solve all of yours problems.",
      image: "https://images.pexels.com/photos/11158027/pexels-photo-11158027.jpeg",
      icon: <Headphones className="w-8 h-8" />,
      features: ["Custom Solutions", "24/7 Support", "Flexible Services"]
    }
  ]

  const whyChooseUs = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Team",
      description: "Certified professionals with years of experience"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Quality Service",
      description: "We guarantee high-quality service on every project"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Quick Response",
      description: "Fast turnaround time for all services"
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Trusted Partner",
      description: "Serving customers with excellence for years"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-28 overflow-hidden animated-bg"
        style={{
          backgroundImage: 'url(/bg-services.png)',
          backgroundSize: '200%',
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-800/75 to-blue-900/85 opacity-90"></div> */}
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-white font-semibold">Professional IT Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to meet all your technology needs - from repairs to installations and security
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span>Expert Technicians</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span>Competitive Pricing</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Service Name on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 bg-gradient-to-br from-white to-blue-50">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and support to all our customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl mb-6 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and let us help you with all your IT needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center gap-2">
                Contact Us Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+15551234567" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition border-2 border-white/20">
                Call: +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
