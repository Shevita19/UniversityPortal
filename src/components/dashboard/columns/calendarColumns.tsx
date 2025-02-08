"use client"

import { createColumnHelper } from "@tanstack/react-table"

export type CalendarEvent = {
  id: string
  date: string
  event: string
  type: "academic" | "exam" | "holiday" | "other"
  location: string
  description: string
}

const columnHelper = createColumnHelper<CalendarEvent>()

export const calendarColumns = [
  columnHelper.accessor("date", {
    header: "Date",
    cell: ({ getValue }) => new Date(getValue()).toLocaleDateString(),
  }),
  columnHelper.accessor("event", {
    header: "Event",
  }),
  columnHelper.accessor("type", {
    header: "Type",
    cell: ({ getValue }) => {
      const type = getValue()
      const styles = {
        academic: "bg-blue-100 text-blue-800",
        exam: "bg-red-100 text-red-800",
        holiday: "bg-green-100 text-green-800",
        other: "bg-gray-100 text-gray-800"
      }
      return (
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${styles[type]}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
      )
    },
  }),
  columnHelper.accessor("location", {
    header: "Location",
  }),
  columnHelper.accessor("description", {
    header: "Description",
  }),
] 