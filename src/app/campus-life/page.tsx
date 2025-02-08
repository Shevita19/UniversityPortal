"use client"

import Image from 'next/image'
import { FaUsers, FaBasketballBall, FaBook, FaMusic, FaUtensils, FaBed } from 'react-icons/fa'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { placeholderImages } from '@/lib/placeholderImages'

const CampusLifePage = () => {
  const facilities = [
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      title: "Student Clubs",
      description: "Over 20 active student clubs and societies"
    },
    {
      icon: <FaBasketballBall className="w-8 h-8 text-green-600" />,
      title: "Sports Complex",
      description: "State-of-the-art indoor and outdoor sports facilities"
    },
    {
      icon: <FaBook className="w-8 h-8 text-purple-600" />,
      title: "Library",
      description: "24/7 library with vast digital resources"
    },
    {
      icon: <FaMusic className="w-8 h-8 text-red-600" />,
      title: "Cultural Center",
      description: "Dedicated space for arts and cultural activities"
    },
    {
      icon: <FaUtensils className="w-8 h-8 text-orange-600" />,
      title: "Cafeteria",
      description: "Multiple dining options with diverse cuisine"
    },
    {
      icon: <FaBed className="w-8 h-8 text-indigo-600" />,
      title: "Hostels",
      description: "Comfortable accommodation for all students"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <ImageWithFallback
          src={placeholderImages.campus}
          alt="Campus Life"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Campus Life
              </h1>
              <p className="text-xl text-white/90">
                Experience a vibrant and enriching student life
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Campus Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4">{facility.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {facility.title}
              </h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CampusLifePage 