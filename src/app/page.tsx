"use client"

import { useState } from 'react'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import Hero from "@/components/home/Hero"
import Features from "@/components/home/Features"
import NewsAndEvents from "@/components/home/NewsAndEvents"

const HomePage = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)

  const courses = {
    'B.Tech Programs': {
      description: 'Four-year undergraduate engineering programs',
      branches: [
        {
          name: 'Computer Science & Engineering',
          specializations: [
            { name: 'Artificial Intelligence & ML', href: '/courses/btech/cse/aiml' },
            { name: 'Data Science', href: '/courses/btech/cse/data-science' },
            { name: 'Cyber Security', href: '/courses/btech/cse/cyber-security' },
            { name: 'Cloud Computing', href: '/courses/btech/cse/cloud' }
          ]
        },
        {
          name: 'Electronics & Communication',
          specializations: [
            { name: 'VLSI Design', href: '/courses/btech/ece/vlsi' },
            { name: 'Embedded Systems', href: '/courses/btech/ece/embedded' },
            { name: 'Communication Systems', href: '/courses/btech/ece/comm' }
          ]
        },
        {
          name: 'Mechanical Engineering',
          specializations: [
            { name: 'Robotics & Automation', href: '/courses/btech/mechanical/robotics' },
            { name: 'CAD/CAM', href: '/courses/btech/mechanical/cad-cam' },
            { name: 'Industrial Design', href: '/courses/btech/mechanical/industrial' }
          ]
        },
        {
          name: 'Civil Engineering',
          specializations: [
            { name: 'Structural Engineering', href: '/courses/btech/civil/structural' },
            { name: 'Environmental Engineering', href: '/courses/btech/civil/environmental' },
            { name: 'Transportation', href: '/courses/btech/civil/transportation' }
          ]
        }
      ]
    },
    'BCA': {
      description: 'Three-year undergraduate program in Computer Applications',
      href: '/courses/bca'
    },
    'MCA': {
      description: 'Two-year postgraduate program in Computer Applications',
      href: '/courses/mca'
    }
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <NewsAndEvents />

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Programs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(courses).map(([program, details]) => (
              <div 
                key={program}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedProgram(selectedProgram === program ? null : program)}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {program}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {details.description}
                  </p>
                  {'branches' in details ? (
                    <button className="text-blue-600 font-medium flex items-center">
                      View Specializations
                      <FaChevronRight className={`ml-1 transform transition-transform ${
                        selectedProgram === program ? 'rotate-90' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link 
                      href={details.href}
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      Learn More
                    </Link>
                  )}
                </div>

                {'branches' in details && selectedProgram === program && (
                  <div className="px-6 pb-6 space-y-4">
                    {details.branches.map((branch) => (
                      <div key={branch.name} className="border-t pt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {branch.name}
                        </h4>
                        <ul className="space-y-2">
                          {branch.specializations.map((spec) => (
                            <li key={spec.name}>
                              <Link 
                                href={spec.href}
                                className="text-gray-600 hover:text-blue-600 flex items-center"
                              >
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                {spec.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
