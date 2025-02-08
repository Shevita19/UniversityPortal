"use client"

import Image from 'next/image'
import { FaBriefcase, FaChartLine, FaHandshake, FaGraduationCap } from 'react-icons/fa'

const TrainingPlacementsPage = () => {
  const stats = [
    { icon: <FaBriefcase />, value: "100%", label: "Placement Rate" },
    { icon: <FaChartLine />, value: "45 LPA", label: "Highest Package" },
    { icon: <FaHandshake />, value: "500+", label: "Recruiting Partners" },
    { icon: <FaGraduationCap />, value: "98%", label: "Students Placed" }
  ]

  const topRecruiters = [
    { name: "Google", logo: "/images/companies/google.png" },
    { name: "Microsoft", logo: "/images/companies/microsoft.png" },
    { name: "Amazon", logo: "/images/companies/amazon.png" },
    // Add more companies...
  ]

  const placements = [
    {
      year: "2024-25",
      stats: {
        averagePackage: "12.5 LPA",
        highestPackage: "45 LPA",
        totalOffers: 850,
        companiesVisited: 120
      }
    },
    // Add more years...
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Training & Placements
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Empowering students with industry-relevant skills and connecting them with leading global organizations.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="text-blue-600 text-3xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Training Programs */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Training Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Skills</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Advanced Programming</li>
                <li>• Data Structures & Algorithms</li>
                <li>• Web Development</li>
                <li>• Cloud Computing</li>
                <li>• Machine Learning</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Soft Skills</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Communication Skills</li>
                <li>• Interview Preparation</li>
                <li>• Group Discussions</li>
                <li>• Leadership Training</li>
                <li>• Team Building</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Training</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Internship Programs</li>
                <li>• Industry Projects</li>
                <li>• Workshops</li>
                <li>• Expert Sessions</li>
                <li>• Industry Visits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Placement Statistics
          </h2>
          {placements.map((year, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Academic Year {year.year}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-gray-600">Average Package</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {year.stats.averagePackage}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Highest Package</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {year.stats.highestPackage}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Total Offers</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {year.stats.totalOffers}+
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Companies Visited</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {year.stats.companiesVisited}+
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TrainingPlacementsPage 