"use client";

import React from 'react';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaWhatsapp 
} from 'react-icons/fa';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  ];

  const services = [
    "Web Development",
    "Mobile App Development", 
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "E-commerce Solutions"
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info & Social Media */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">My Company</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We are a leading technology company providing innovative solutions 
                to help businesses grow and succeed in the digital world.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center",
                        "transition-all duration-300 ease-in-out",
                        "hover:bg-blue-600 hover:scale-110 hover:shadow-lg",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      )}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4 text-gray-300 hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    123 Business Street,<br />
                    Tech District, City 12345<br />
                    Country
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a 
                  href="tel:+1234567890"
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a 
                  href="mailto:info@company.com"
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
                >
                  info@company.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className={cn(
                      "text-gray-300 text-sm transition-all duration-300",
                      "hover:text-white hover:pl-2 relative",
                      "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2",
                      "before:w-0 before:h-px before:bg-blue-400",
                      "before:transition-all before:duration-300",
                      "hover:before:w-4"
                    )}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className={cn(
                      "text-gray-300 text-sm transition-all duration-300",
                      "hover:text-white hover:pl-2 relative",
                      "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2",
                      "before:w-0 before:h-px before:bg-blue-400",
                      "before:transition-all before:duration-300",
                      "hover:before:w-4"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-3">Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    "flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md",
                    "text-white placeholder-gray-400 text-sm",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    "transition-all duration-300"
                  )}
                />
                <button
                  className={cn(
                    "px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md",
                    "hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
                    "transition-all duration-300 hover:shadow-lg"
                  )}
                >
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} My Company. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;