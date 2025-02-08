"use client"

import { btechCourses, bcaCourse, mcaCourse } from '@/types/courses'
import type { Course } from '@/types/courses'

interface CourseDetailsProps {
  params: {
    program: string
  }
}

const CourseDetails = ({ params }: CourseDetailsProps) => {
  let course: Course | null = null

  switch(params.program) {
    case 'btech':
      course = btechCourses.cse // Default to CSE, you can add branch selection
      break
    case 'bca':
      course = bcaCourse
      break
    case 'mca':
      course = mcaCourse
      break
  }

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{course.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Overview</h2>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Duration</h3>
            <p className="text-gray-600">{course.duration}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Eligibility</h3>
            <p className="text-gray-600">{course.eligibility}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Core Subjects</h2>
          <ul className="list-disc list-inside space-y-2">
            {course.subjects.map((subject, index) => (
              <li key={index} className="text-gray-600">{subject}</li>
            ))}
          </ul>
        </div>
      </div>

      {course.labs && (
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Laboratory Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.labs.map((lab, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{lab.name}</h3>
                <p className="text-gray-600 mb-3">{lab.description}</p>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Equipment</h4>
                <ul className="list-disc list-inside space-y-1">
                  {lab.equipment.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Career Opportunities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {course.careers.map((career, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-700">{career}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseDetails 