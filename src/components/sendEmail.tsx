import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import WelcomeEmail from '@/src/emails/welcome'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { firstName } = await request.json()

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'webdevfibr@protonmail.com',
    subject: 'Message from contact form',
    text: 'Hello World!',
    react: WelcomeEmail({
      firstName
    })
  })

  return NextResponse.json({
    status: 'Ok'
  })
}