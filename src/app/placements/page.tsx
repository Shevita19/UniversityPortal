"use client"

import Image from 'next/image'
import { FaBriefcase, FaHandshake, FaChartLine, FaLaptopCode, FaUserTie, FaAward, FaBuilding, FaDownload } from 'react-icons/fa'
import { useState } from 'react'

const PlacementsPage = () => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    try {
      setIsDownloading(true)
      const response = await fetch('/api/download-brochure')
      
      if (!response.ok) {
        throw new Error('Download failed')
      }
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Tech-University-Placement-Brochure-2024.pdf'
      document.body.appendChild(a)
      a.click()
      
      // Cleanup
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Download failed:', error)
      // You could add a toast notification here
      alert('Failed to download brochure. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  const stats = [
    { label: 'Companies Visited', value: '500+', icon: <FaBuilding className="w-6 h-6" /> },
    { label: 'Highest Package', value: '₹45 LPA', icon: <FaAward className="w-6 h-6" /> },
    { label: 'Average Package', value: '₹8.5 LPA', icon: <FaChartLine className="w-6 h-6" /> },
    { label: 'Placement Rate', value: '95%', icon: <FaUserTie className="w-6 h-6" /> }
  ]

  const trainingPrograms = [
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: 'Technical Training',
      description: 'Advanced programming, system design, and cutting-edge technologies',
      features: ['Data Structures & Algorithms', 'Web Development', 'Cloud Computing', 'Machine Learning']
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: 'Soft Skills Development',
      description: 'Comprehensive personality development program',
      features: ['Communication Skills', 'Leadership Training', 'Group Discussions', 'Interview Preparation']
    },
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      title: 'Industry Exposure',
      description: 'Real-world experience through industry collaboration',
      features: ['Industry Projects', 'Internships', 'Expert Sessions', 'Company Visits']
    }
  ]

  const placementProcess = [
    { 
      step: 1, 
      title: 'Pre-Placement Training',
      description: 'Intensive training on technical and soft skills'
    },
    { 
      step: 2, 
      title: 'Company Registration',
      description: 'Students register for their preferred companies'
    },
    { 
      step: 3, 
      title: 'Aptitude Tests',
      description: 'Online/offline screening and aptitude assessments'
    },
    { 
      step: 4, 
      title: 'Technical Interviews',
      description: 'In-depth technical knowledge evaluation'
    },
    { 
      step: 5, 
      title: 'HR Rounds',
      description: 'Final interview and salary discussion'
    }
  ]

  const companies = [
    'Google', 'Microsoft', 'Amazon', 'IBM', 'Oracle', 'Adobe', 
    'Goldman Sachs', 'JP Morgan', 'Deloitte', 'Accenture', 'TCS', 'Infosys'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Training & Placements
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Building careers through industry partnerships and comprehensive training programs
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white border border-white/20 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2 text-center">{stat.value}</div>
                <div className="text-sm opacity-90 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Programs */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Training Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-blue-600 mb-4 flex justify-center">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {program.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {program.description}
              </p>
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Placement Process */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Placement Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {placementProcess.map((phase, index) => (
              <div key={phase.step} className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {phase.step}
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Recruiters */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Top Recruiters
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {companies.map((company, index) => (
            <div key={index} 
              className="bg-white rounded-xl shadow p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <span className="text-gray-700 font-semibold">{company}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Get in Touch with TPO
          </h2>
          <p className="text-xl mb-8 text-center opacity-90">
            For placement related queries and corporate partnerships
          </p>
          
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                <div>
                  <p className="font-medium">Training & Placement Officer</p>
                  <p>Prof. Rahul Sharma</p>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+91 98765 43210</p>
                  <p>+91 12345 67890</p>
                </div>
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </div>

              {/* Email Queries */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Email Queries</h3>
                <div>
                  <p className="font-medium">For Companies</p>
                  <a href="mailto:tpo@techuniversity.edu" className="hover:text-blue-200 transition-colors">
                    tpo@techuniversity.edu
                  </a>
                </div>
                <div>
                  <p className="font-medium">For Students</p>
                  <a href="mailto:placements@techuniversity.edu" className="hover:text-blue-200 transition-colors">
                    placements@techuniversity.edu
                  </a>
                </div>
                <div>
                  <p className="font-medium">For Internships</p>
                  <a href="mailto:internships@techuniversity.edu" className="hover:text-blue-200 transition-colors">
                    internships@techuniversity.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Download Brochure Button */}
            <div className="mt-8 text-center">
              <button 
                onClick={handleDownload}
                disabled={isDownloading}
                className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDownloading ? (
                  <>
                    <span className="animate-spin mr-2">⌛</span>
                    Downloading...
                  </>
                ) : (
                  <>
                    <FaDownload className="mr-2" />
                    Download Placement Brochure
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacementsPage 