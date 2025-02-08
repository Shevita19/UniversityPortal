"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      // Using placeholder images from Unsplash
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80",
      title: "Welcome to Tech University",
      subtitle: "Shaping Tomorrow's Technology Leaders"
    },
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
      title: "World-Class Education",
      subtitle: "State-of-the-art facilities and expert faculty"
    },
    {
      image: "https://images.unsplash.com/photo-1532649842991-60f6a04df35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
      title: "Research & Innovation",
      subtitle: "Pushing the boundaries of technology"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeIn">
              {slide.subtitle}
            </p>
            <div className="space-x-4">
              <Link
                href="/admissions"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/virtual-tour"
                className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Quick Links */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-4 z-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <QuickLink
              title="Admissions Open"
              description="2024-25 Applications"
              href="/admissions"
            />
            <QuickLink
              title="Research"
              description="Latest Publications"
              href="/research"
            />
            <QuickLink
              title="Campus Life"
              description="Student Activities"
              href="/campus-life"
            />
            <QuickLink
              title="Placements"
              description="Career Opportunities"
              href="/placements"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const QuickLink = ({ title, description, href }: {
  title: string
  description: string
  href: string
}) => (
  <Link 
    href={href}
    className="flex flex-col items-center text-center p-2 hover:bg-blue-50 rounded-lg transition-colors"
  >
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </Link>
)

export default Hero 