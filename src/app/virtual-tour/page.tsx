"use client"

import { useState } from 'react'
import Image from 'next/image'
import { FaAngleRight, FaAngleLeft, FaExpand } from 'react-icons/fa'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import { placeholderImages } from '@/lib/placeholderImages'
import Link from 'next/link'

const VirtualTourPage = () => {
  const [currentLocation, setCurrentLocation] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const locations = [
    {
      name: "Main Building",
      image: placeholderImages.building,
      description: "The iconic main building housing administrative offices and lecture halls",
      details: "Built in modern architecture style, our main building is the heart of the campus featuring smart classrooms and advanced facilities."
    },
    {
      name: "Central Library",
      image: placeholderImages.library,
      description: "Modern library with vast collection of books and digital resources",
      details: "A three-story building with over 50,000 books, digital archives, and quiet study spaces."
    },
    {
      name: "Sports Complex",
      image: placeholderImages.sports,
      description: "State-of-the-art sports facilities for various indoor and outdoor games",
      details: "Features an Olympic-size swimming pool, indoor courts, and outdoor playing fields."
    },
    {
      name: "Auditorium",
      image: placeholderImages.auditorium,
      description: "Multi-purpose auditorium for events and performances",
      details: "1000-seat capacity with advanced audio-visual systems and stage facilities."
    },
    {
      name: "Student Hostels",
      image: placeholderImages.hostel,
      description: "Comfortable accommodation for residential students",
      details: "Modern amenities with separate wings for boys and girls, featuring recreation areas and study rooms."
    },
    {
      name: "Research Labs",
      image: placeholderImages.labs,
      description: "Advanced laboratories for research and experimentation",
      details: "Equipped with the latest technology and equipment for cutting-edge research."
    },
    {
      name: "Campus Garden",
      image: placeholderImages.garden,
      description: "Beautiful green spaces for relaxation and outdoor activities",
      details: "Landscaped gardens with walking paths and outdoor seating areas."
    }
  ]

  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % locations.length)
  }

  const prevLocation = () => {
    setCurrentLocation((prev) => (prev - 1 + locations.length) % locations.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Virtual Campus Tour
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore our campus from anywhere in the world
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => document.getElementById('tour-viewer')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50"
              >
                Start Tour
              </button>
              <Link 
                href="/book-visit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-400"
              >
                Book Campus Visit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Tour Viewer */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Viewer */}
          <div className={`relative ${isFullscreen ? 'h-screen' : 'h-[600px]'} rounded-xl overflow-hidden shadow-xl mb-8`}>
            <ImageWithFallback
              src={locations[currentLocation].image}
              alt={locations[currentLocation].name}
              fill
              className="object-cover"
            />
            
            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prevLocation}
                className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              >
                <FaAngleLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextLocation}
                className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              >
                <FaAngleRight className="w-6 h-6" />
              </button>
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-lg hover:bg-black/70 transition-colors"
            >
              <FaExpand className="w-5 h-5" />
            </button>

            {/* Location Info */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-black/0 text-white p-6">
              <h2 className="text-3xl font-bold mb-2">
                {locations[currentLocation].name}
              </h2>
              <p className="text-white/90 text-lg mb-2">
                {locations[currentLocation].description}
              </p>
              <p className="text-white/80">
                {locations[currentLocation].details}
              </p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setCurrentLocation(index)}
                className={`relative h-20 rounded-lg overflow-hidden ${
                  currentLocation === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 ${
                  currentLocation === index ? 'bg-blue-500/20' : 'bg-black/40'
                }`} />
                <span className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium truncate">
                  {location.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualTourPage 