"use client"

import { DataTable } from "@/components/dashboard/DataTable"
import { studentColumns } from "@/components/dashboard/columns/studentColumns"
import type { Student } from "@/components/dashboard/columns/studentColumns"

const sampleData: Student[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@university.edu",
    enrollmentNo: "2024001",
    department: "Computer Science",
    year: 2,
    status: "active"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@university.edu",
    enrollmentNo: "2024002",
    department: "Engineering",
    year: 1,
    status: "active"
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.j@university.edu",
    enrollmentNo: "2024003",
    department: "Business",
    year: 3,
    status: "inactive"
  }
]

const StudentManagement = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Student Management</h1>
      <DataTable 
        columns={studentColumns} 
        data={sampleData}
      />
    </div>
  )
}

export default StudentManagement 