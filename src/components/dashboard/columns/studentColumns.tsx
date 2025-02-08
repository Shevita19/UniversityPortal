"use client"

import { createColumnHelper } from "@tanstack/react-table"

export type Student = {
  id: string
  name: string
  email: string
  enrollmentNo: string
  department: string
  year: number
  status: "active" | "inactive"
}

const columnHelper = createColumnHelper<Student>()

export const studentColumns = [
  columnHelper.accessor("enrollmentNo", {
    header: "Enrollment No",
  }),
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("department", {
    header: "Department",
  }),
  columnHelper.accessor("year", {
    header: "Year",
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue()
      return (
        <div
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </div>
      )
    },
  }),
] 