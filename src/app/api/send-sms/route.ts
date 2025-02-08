import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { to, message } = await req.json()

    // Basic validation
    if (!to || !message) {
      return NextResponse.json(
        { error: 'Phone number and message are required' },
        { status: 400 }
      )
    }

    // Format phone number
    const formattedPhone = to.startsWith('+') ? to : `+91${to}`

    // Mock SMS sending (for development)
    console.log('Sending SMS to:', formattedPhone)
    console.log('Message:', message)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      messageId: 'mock-' + Date.now(),
      message: 'Message sent successfully (Development Mode)',
      details: {
        to: formattedPhone,
        message: message,
        timestamp: new Date().toISOString()
      }
    })
  } catch (error) {
    console.error('SMS sending failed:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send SMS',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 