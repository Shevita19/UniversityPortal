"use client"

import { DataTable } from "@/components/dashboard/DataTable"
import { calendarColumns } from "@/components/dashboard/columns/calendarColumns"
import type { CalendarEvent } from "@/components/dashboard/columns/calendarColumns"

const sampleEvents: CalendarEvent[] = [
  {
    id: "1",
    date: "2024-03-01",
    event: "Spring Semester Begins",
    type: "academic",
    location: "All Campuses",
    description: "First day of spring semester classes"
  },
  {
    id: "2",
    date: "2024-03-15",
    event: "Mid-term Examinations",
    type: "exam",
    location: "Examination Halls",
    description: "Mid-term examinations for all courses"
  },
  {
    id: "3",
    date: "2024-04-01",
    event: "Spring Break",
    type: "holiday",
    location: "University Closed",
    description: "University closed for spring break"
  },
  {
    id: "4",
    date: "2024-05-15",
    event: "Final Examinations Begin",
    type: "exam",
    location: "Examination Halls",
    description: "Final examinations for spring semester"
  }
]

const AcademicCalendar = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Academic Calendar</h1>
      <DataTable 
        columns={calendarColumns} 
        data={sampleEvents}
      />
    </div>
  )
}

export default AcademicCalendar 