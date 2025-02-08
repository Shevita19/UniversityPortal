import { NextResponse } from 'next/server'
import jsPDF from 'jspdf'

export async function GET() {
  try {
    // Create new PDF document
    const doc = new jsPDF()

    // Add content
    // Title
    doc.setFontSize(24)
    doc.text('Tech University', 105, 20, { align: 'center' })
    
    doc.setFontSize(18)
    doc.text('Placement Brochure 2024', 105, 30, { align: 'center' })
    
    doc.setFontSize(14)
    doc.text('Training & Placement Office', 105, 40, { align: 'center' })

    // Placement Highlights
    doc.setFontSize(16)
    doc.text('Placement Highlights', 20, 60)
    doc.line(20, 62, 100, 62)

    doc.setFontSize(12)
    doc.text([
      '• Companies Visited: 500+',
      '• Highest Package: ₹45 LPA',
      '• Average Package: ₹8.5 LPA',
      '• Placement Rate: 95%'
    ], 25, 70)

    // Contact Information
    doc.setFontSize(16)
    doc.text('Contact Information', 20, 100)
    doc.line(20, 102, 100, 102)

    doc.setFontSize(12)
    doc.text([
      'Training & Placement Officer: Prof. Rahul Sharma',
      'Email: tpo@techuniversity.edu',
      'Phone: +91 98765 43210',
      'Office Hours: Monday - Friday, 9:00 AM - 5:00 PM'
    ], 25, 110)

    // Top Recruiters
    doc.setFontSize(16)
    doc.text('Our Top Recruiters', 20, 140)
    doc.line(20, 142, 100, 142)

    doc.setFontSize(12)
    const companies = [
      '• Google', '• Microsoft', '• Amazon', '• IBM',
      '• Oracle', '• Adobe', '• Goldman Sachs', '• JP Morgan',
      '• Deloitte', '• Accenture', '• TCS', '• Infosys'
    ]

    // Split companies into columns
    const leftColumn = companies.slice(0, 6)
    const rightColumn = companies.slice(6)

    doc.text(leftColumn, 25, 150)
    doc.text(rightColumn, 105, 150)

    // Get PDF as array buffer
    const pdfBuffer = doc.output('arraybuffer')

    // Return the PDF as a response
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=Tech-University-Placement-Brochure-2024.pdf',
        'Content-Length': pdfBuffer.byteLength.toString(),
      },
    })

  } catch (error) {
    console.error('PDF generation failed:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    )
  }
} 