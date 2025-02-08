"use client"

import Image from 'next/image'
import { FaCalendar, FaTag } from 'react-icons/fa'

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "University Ranked #1 in Technical Education",
      date: "2025-01-15",
      category: "Achievement",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      content: "Tech University has achieved another milestone by securing the top position in technical education rankings. The university's commitment to excellence in research, innovation, and industry collaboration has been recognized nationally.",
      details: [
        "Ranked #1 in Research Output",
        "100% Placement Record",
        "State-of-the-art Infrastructure",
        "Industry-Academia Partnerships"
      ]
    },
    // Add more news items...
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Latest News & Updates</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center text-gray-600 text-sm">
                    <FaCalendar className="mr-2" />
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center text-blue-600 text-sm">
                    <FaTag className="mr-2" />
                    {item.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-6">{item.content}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsPage 