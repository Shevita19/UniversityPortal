"use client"

import { createColumnHelper } from "@tanstack/react-table"

export type Course = {
  id: string
  name: string
  instructor: string
  credits: number
  capacity: number
  enrolled: number
  schedule: string
  status: "open" | "closed"
}

const columnHelper = createColumnHelper<Course>()

export const courseColumns = [
  columnHelper.accessor("id", {
    header: "Course ID",
  }),
  columnHelper.accessor("name", {
    header: "Course Name",
  }),
  columnHelper.accessor("instructor", {
    header: "Instructor",
  }),
  columnHelper.accessor("credits", {
    header: "Credits",
  }),
  columnHelper.accessor("enrolled", {
    header: "Enrollment",
    cell: ({ row }) => `${row.original.enrolled}/${row.original.capacity}`,
  }),
  columnHelper.accessor("schedule", {
    header: "Schedule",
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue()
      return (
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            status === "open"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status.toUpperCase()}
        </div>
      )
    },
  }),
] 