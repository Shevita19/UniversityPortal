"use client"

import Link from 'next/link'
import { useState } from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import CourseDropdown from './CourseDropdown'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks = [
    { 
      icon: <FaFacebook className="w-5 h-5" />, 
      href: "https://facebook.com/techuniversity", 
      label: "Facebook",
      color: "hover:text-[#1877F2]"
    },
    { 
      icon: <FaTwitter className="w-5 h-5" />, 
      href: "https://twitter.com/techuniversity", 
      label: "Twitter",
      color: "hover:text-[#1DA1F2]"
    },
    { 
      icon: <FaLinkedin className="w-5 h-5" />, 
      href: "https://linkedin.com/school/techuniversity", 
      label: "LinkedIn",
      color: "hover:text-[#0A66C2]"
    },
    { 
      icon: <FaInstagram className="w-5 h-5" />, 
      href: "https://instagram.com/techuniversity", 
      label: "Instagram",
      color: "hover:text-[#E4405F]"
    }
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            Tech University
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <CourseDropdown />
            <Link href="/admissions" className="text-gray-700 hover:text-blue-600">
              Admissions
            </Link>
            <Link href="/training-placements" className="text-gray-700 hover:text-blue-600">
              Training & Placements
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </Link>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 transition-colors ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 p-2"
          >
            <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <CourseDropdown />
              <Link href="/admissions" className="text-gray-700 hover:text-blue-600">
                Admissions
              </Link>
              <Link href="/training-placements" className="text-gray-700 hover:text-blue-600">
                Training & Placements
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact Us
              </Link>
            </div>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 