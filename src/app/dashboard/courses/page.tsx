"use client"

import { DataTable } from "@/components/dashboard/DataTable"
import { courseColumns } from "@/components/dashboard/columns/courseColumns"
import type { Course } from "@/components/dashboard/columns/courseColumns"

const sampleCourses: Course[] = [
  {
    id: "CS101",
    name: "Introduction to Computer Science",
    instructor: "Dr. Sarah Johnson",
    credits: 3,
    capacity: 50,
    enrolled: 45,
    schedule: "Mon/Wed 10:00-11:30",
    status: "open"
  },
  {
    id: "MATH201",
    name: "Advanced Calculus",
    instructor: "Prof. Michael Chen",
    credits: 4,
    capacity: 40,
    enrolled: 40,
    schedule: "Tue/Thu 13:00-14:30",
    status: "closed"
  },
  {
    id: "PHY301",
    name: "Quantum Physics",
    instructor: "Dr. Robert Wilson",
    credits: 4,
    capacity: 30,
    enrolled: 25,
    schedule: "Mon/Wed 14:00-15:30",
    status: "open"
  }
]

const CourseRegistration = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Course Registration</h1>
      <DataTable 
        columns={courseColumns} 
        data={sampleCourses}
      />
    </div>
  )
}

export default CourseRegistration 