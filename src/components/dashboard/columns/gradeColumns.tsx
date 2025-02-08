"use client"

import { createColumnHelper } from "@tanstack/react-table"

export type Grade = {
  id: string
  courseId: string
  courseName: string
  studentName: string
  assignment: number
  midterm: number
  final: number
  total: number
  grade: string
}

const columnHelper = createColumnHelper<Grade>()

export const gradeColumns = [
  columnHelper.accessor("courseId", {
    header: "Course ID",
  }),
  columnHelper.accessor("courseName", {
    header: "Course Name",
  }),
  columnHelper.accessor("studentName", {
    header: "Student Name",
  }),
  columnHelper.accessor("assignment", {
    header: "Assignment",
    cell: ({ getValue }) => `${getValue()}%`,
  }),
  columnHelper.accessor("midterm", {
    header: "Midterm",
    cell: ({ getValue }) => `${getValue()}%`,
  }),
  columnHelper.accessor("final", {
    header: "Final",
    cell: ({ getValue }) => `${getValue()}%`,
  }),
  columnHelper.accessor("total", {
    header: "Total",
    cell: ({ getValue }) => `${getValue()}%`,
  }),
  columnHelper.accessor("grade", {
    header: "Grade",
    cell: ({ getValue }) => (
      <div className="font-semibold text-center px-3 py-1 bg-blue-100 text-blue-800 rounded-lg">
        {getValue()}
      </div>
    ),
  }),
] 