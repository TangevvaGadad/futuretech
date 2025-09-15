import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendContactPageNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to database
    const contact = await prisma.contactPage.create({
      data: {
        name,
        email,
        company: company || null,
        message,
      },
    })

    // Send email notification
    try {
      await sendContactPageNotification({
        name,
        email,
        company: company || undefined,
        message,
      })
      console.log('Email notification sent for contact page submission')
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: contact.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving contact page:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contactPage.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Error fetching contact page:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
