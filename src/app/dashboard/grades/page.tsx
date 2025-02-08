"use client"

import { DataTable } from "@/components/dashboard/DataTable"
import { gradeColumns } from "@/components/dashboard/columns/gradeColumns"
import type { Grade } from "@/components/dashboard/columns/gradeColumns"

const sampleGrades: Grade[] = [
  {
    id: "1",
    courseId: "CS101",
    courseName: "Introduction to Computer Science",
    studentName: "John Doe",
    assignment: 85,
    midterm: 78,
    final: 88,
    total: 84,
    grade: "A-"
  },
  {
    id: "2",
    courseId: "MATH201",
    courseName: "Advanced Calculus",
    studentName: "Jane Smith",
    assignment: 92,
    midterm: 88,
    final: 95,
    total: 92,
    grade: "A"
  },
  {
    id: "3",
    courseId: "PHY301",
    courseName: "Quantum Physics",
    studentName: "Mike Johnson",
    assignment: 75,
    midterm: 82,
    final: 79,
    total: 79,
    grade: "B+"
  }
]

const GradeManagement = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Grade Management</h1>
      <DataTable 
        columns={gradeColumns} 
        data={sampleGrades}
      />
    </div>
  )
}

export default GradeManagement 