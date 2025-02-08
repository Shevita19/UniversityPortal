import { NextResponse } from 'next/server'
import PDFDocument from 'pdfkit'

export async function GET() {
  try {
    // Create a new PDF document
    const doc = new PDFDocument()
    const chunks: Buffer[] = []

    // Collect PDF data
    doc.on('data', chunk => chunks.push(chunk))
    
    // Add content to PDF
    doc.fontSize(25).text('Tech University', { align: 'center' })
    doc.moveDown()
    doc.fontSize(18).text('Placement Brochure 2024', { align: 'center' })
    doc.moveDown()
    doc.fontSize(12).text('This is a sample placement brochure.')
    
    // Finalize the PDF
    doc.end()

    // Combine chunks into a single buffer
    const pdfBuffer = Buffer.concat(chunks)

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Disposition': 'attachment; filename=placement-brochure-2024.pdf',
        'Content-Type': 'application/pdf',
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