"use client"

import { useState } from 'react'
import Link from 'next/link'
import { FaCalendar, FaNewspaper, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const NewsAndEvents = () => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news')

  const news = [
    {
      id: 1,
      title: "University Ranked #1 in Technical Education",
      date: "2025-01-15",
      category: "Achievement",
      excerpt: "Tech University has been ranked as the top technical institution in the country for its exceptional academic standards, research output, and industry collaborations."
    },
    {
      id: 2,
      title: "New AI Research Center Inauguration",
      date: "2025-02-01",
      category: "Research",
      excerpt: "State-of-the-art AI research facility inaugurated with ₹100 crore investment, featuring advanced computing infrastructure and collaboration with leading tech companies."
    },
    {
      id: 3,
      title: "Industry Partnership with Leading Tech Companies",
      date: "2025-01-20",
      category: "Partnership",
      excerpt: "Strategic partnerships established with Google, Microsoft, and Amazon for student internships, research collaboration, and curriculum development."
    }
  ]

  const events = [
    {
      id: 1,
      title: "Annual Tech Symposium 2025",
      date: "2025-03-15",
      time: "9:00 AM",
      venue: "Main Auditorium",
      type: "Academic",
      description: "Featuring keynote speakers from leading tech companies and research presentations."
    },
    {
      id: 2,
      title: "Hackathon Spring 2025",
      date: "2025-03-20",
      time: "10:00 AM",
      venue: "Innovation Hub",
      type: "Competition",
      description: "48-hour coding challenge with prizes worth ₹10 lakhs and job opportunities."
    },
    {
      id: 3,
      title: "Campus Recruitment Drive 2025",
      date: "2025-03-25",
      time: "9:00 AM",
      venue: "Placement Cell",
      type: "Career",
      description: "Top companies visiting for campus placements with package offerings up to 45 LPA."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Latest Updates</h2>
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center px-6 py-3 rounded-md text-base font-semibold ${
                activeTab === 'news'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <FaNewspaper className="mr-2" />
              News
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center px-6 py-3 rounded-md text-base font-semibold ${
                activeTab === 'events'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <FaCalendar className="mr-2" />
              Events
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTab === 'news' ? (
            news.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-4 text-base leading-relaxed">{item.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-600 font-medium">
                    <FaCalendar className="mr-2" />
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            ))
          ) : (
            events.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-green-600 bg-green-50 rounded-full mb-4">
                    {item.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-4 text-base leading-relaxed">{item.description}</p>
                  <div className="space-y-2 text-gray-600 font-medium">
                    <p className="flex items-center">
                      <FaCalendar className="mr-2" />
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="flex items-center">
                      <FaClock className="mr-2" />
                      {item.time}
                    </p>
                    <p className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      {item.venue}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-8">
          <Link
            href={activeTab === 'news' ? '/news' : '/events'}
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
          >
            View All {activeTab === 'news' ? 'News' : 'Events'}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsAndEvents 