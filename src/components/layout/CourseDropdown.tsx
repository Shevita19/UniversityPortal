"use client"

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

const CourseDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const courses = {
    'B.Tech Programs': [
      { 
        name: 'Computer Science & Engineering',
        href: '/courses/btech-cse',
        subMenu: [
          { name: 'Artificial Intelligence & ML', href: '/courses/btech-cse/aiml' },
          { name: 'Data Science', href: '/courses/btech-cse/data-science' },
          { name: 'Cyber Security', href: '/courses/btech-cse/cyber-security' },
          { name: 'Cloud Computing', href: '/courses/btech-cse/cloud-computing' },
          { name: 'IoT & Embedded Systems', href: '/courses/btech-cse/iot' }
        ]
      },
      { name: 'Electronics & Communication', href: '/courses/btech-ece' },
      { name: 'Mechanical Engineering', href: '/courses/btech-me' },
      { name: 'Civil Engineering', href: '/courses/btech-ce' }
    ],
    'Other Programs': [
      { 
        name: 'BCA',
        href: '/courses/bca',
        subMenu: [
          { name: 'Cloud Computing & DevOps', href: '/courses/bca/cloud-devops' },
          { name: 'Full Stack Development', href: '/courses/bca/full-stack' },
          { name: 'Data Analytics', href: '/courses/bca/data-analytics' }
        ]
      },
      { 
        name: 'MCA',
        href: '/courses/mca',
        subMenu: [
          { name: 'AI & Machine Learning', href: '/courses/mca/ai-ml' },
          { name: 'Big Data Analytics', href: '/courses/mca/big-data' },
          { name: 'Software Engineering', href: '/courses/mca/software-eng' }
        ]
      }
    ]
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setActiveSubmenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = (itemName: string) => {
    setActiveSubmenu(itemName)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 focus:outline-none"
      >
        <span>Courses</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 z-50">
          {Object.entries(courses).map(([category, items]) => (
            <div key={category} className="px-4 py-2">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">{category}</h3>
              <div className="space-y-1">
                {items.map((item) => (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                  >
                    <div className="flex items-center justify-between px-2 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md cursor-pointer">
                      <span>{item.name}</span>
                      {item.subMenu && <FaChevronRight className="w-3 h-3" />}
                    </div>
                    
                    {/* Submenu */}
                    {item.subMenu && activeSubmenu === item.name && (
                      <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-lg shadow-lg py-2">
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => {
                              setIsOpen(false)
                              setActiveSubmenu(null)
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CourseDropdown 