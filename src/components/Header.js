"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BorderBeam } from "./magicui/border-beam";
import Link from "next/link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show header when at top
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header
      className={`root-padding fixed top-0 left-0 right-0 z-50 text-blue-300 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="bg-white/20 backdrop-blur-md relative px-4 py-2 rounded-full">
            <div className="w-8 h-8  rounded-full flex items-center justify-center">
              <span className="font-bold text-lg text-blue-300">My</span>

              <BorderBeam
                size={130}
                borderWidth={2}
                className="from-transparent via-blue-300 via-blue-500 to-transparent"
              />
            </div>
          </div>

          {/* Navigation Section - Desktop */}
          <div className="hidden md:block group bg-white/20 backdrop-blur-md">
            <nav className="relative px-6 lg:px-8 py-3 rounded-full overflow-hidden">
              <ul className="flex items-center space-x-8 lg:space-x-10">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="lg:min-w-24 flex items-center justify-center"
                  >
                    <Link href={item.href} className="font-medium cursor-none">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <BorderBeam
                duration={8}
                size={900}
                borderWidth={2}
                className="from-transparent via-blue-300  via-blue-400 to-transparent"
              />
            </nav>
          </div>

          {/* Connect Button - Desktop */}
          <div className="hidden md:block relative bg-white/20 backdrop-blur-md group rounded-full">
            <button className="px-6 py-3 font-medium">Connect</button>

            <BorderBeam
              size={300}
              borderWidth={2}
              className="from-transparent via-blue-300 to-transparent"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden group">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-full text-lg"
            >
              {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="">
            <div className="p-6 rounded-2xl">
              <nav className="mb-4">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block text-gray-200 hover:text-white transition-colors duration-200 font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <button
                className="w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
