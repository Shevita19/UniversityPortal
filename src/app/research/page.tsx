"use client"

import { FaFlask, FaBook, FaUsers, FaChartLine, FaGlobe, FaMedal } from 'react-icons/fa'

const ResearchPage = () => {
  const researchAreas = [
    {
      icon: <FaFlask className="w-8 h-8 text-blue-600" />,
      title: "Artificial Intelligence & Machine Learning",
      description: "Research in deep learning, computer vision, and natural language processing."
    },
    {
      icon: <FaGlobe className="w-8 h-8 text-green-600" />,
      title: "Sustainable Technologies",
      description: "Green energy solutions and environmental engineering research."
    },
    {
      icon: <FaUsers className="w-8 h-8 text-purple-600" />,
      title: "IoT & Smart Systems",
      description: "Connected devices, smart cities, and automation research."
    }
  ]

  const publications = [
    {
      title: "Advanced Machine Learning Algorithms",
      authors: "Dr. Smith, Dr. Johnson",
      journal: "International Journal of Computer Science",
      year: 2024
    },
    {
      title: "Smart City Infrastructure",
      authors: "Dr. Williams, Prof. Brown",
      journal: "Urban Technology Review",
      year: 2024
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Research & Innovation
            </h1>
            <p className="text-xl text-white/90">
              Pushing the boundaries of technology and innovation
            </p>
          </div>
        </div>
      </div>

      {/* Research Areas */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Research Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {area.title}
              </h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Publications */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Recent Publications
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {pub.title}
                </h3>
                <p className="text-gray-600">By: {pub.authors}</p>
                <p className="text-gray-600">{pub.journal}, {pub.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchPage 