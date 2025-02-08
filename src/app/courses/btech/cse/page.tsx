"use client"

import Image from 'next/image'
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaChalkboardTeacher } from 'react-icons/fa'

const BTechCSEPage = () => {
  const highlights = [
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: "Modern Curriculum",
      description: "Industry-aligned syllabus covering latest technologies"
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Professors with extensive industry experience"
    },
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      title: "100% Placement",
      description: "Excellent placement record with top companies"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Research Focus",
      description: "State-of-the-art research facilities"
    }
  ]

  const courseStructure = {
    "First Year": [
      "Engineering Mathematics",
      "Programming Fundamentals",
      "Digital Logic Design",
      "Physics & Chemistry"
    ],
    "Second Year": [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Computer Organization",
      "Database Management Systems"
    ],
    "Third Year": [
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
      "Machine Learning"
    ],
    "Fourth Year": [
      "Cloud Computing",
      "Information Security",
      "Project Work",
      "Industry Internship"
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
          alt="Computer Science"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              B.Tech in Computer Science & Engineering
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Build your future in technology with our comprehensive CSE program
            </p>
          </div>
        </div>
      </div>

      {/* Program Highlights */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Program Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-blue-600 flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Structure */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Course Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(courseStructure).map(([year, subjects]) => (
              <div key={year} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {year}
                </h3>
                <ul className="space-y-2">
                  {subjects.map((subject, index) => (
                    <li key={index} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Prospects */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Career Prospects
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Job Roles
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Software Developer</li>
                <li>Data Scientist</li>
                <li>Cloud Engineer</li>
                <li>DevOps Engineer</li>
                <li>AI/ML Engineer</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Top Recruiters
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Google</li>
                <li>Microsoft</li>
                <li>Amazon</li>
                <li>IBM</li>
                <li>Oracle</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Average Package
              </h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  ₹8.5 LPA
                </p>
                <p className="text-gray-600">
                  Highest Package: ₹45 LPA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BTechCSEPage 