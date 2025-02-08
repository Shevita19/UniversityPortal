"use client"

import Link from 'next/link'
import { Feature } from '@/types/features'

const features: Feature[] = [
  {
    title: "Student Management",
    description: "Comprehensive student data management and tracking system",
    icon: "👥",
    path: "/dashboard/students"
  },
  {
    title: "Course Registration",
    description: "Easy course enrollment and academic planning",
    icon: "📚",
    path: "/dashboard/courses"
  },
  {
    title: "Grade Management",
    description: "Efficient grade recording and report generation",
    icon: "📊",
    path: "/dashboard/grades"
  },
  {
    title: "Academic Calendar",
    description: "Important dates and event management",
    icon: "📅",
    path: "/dashboard/calendar"
  }
]

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <Link 
              key={index}
              href={feature.path}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              tabIndex={0}
              role="link"
              aria-label={`Access ${feature.title}`}
            >
              <div className="text-6xl mb-6" role="img" aria-label={feature.title}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 