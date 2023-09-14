import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import Welcome from '../emails/Welcome'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'webdevfibr@protonmail.com',
      subject: 'Thanks for reaching out 🤝',
      text: 'Hello World!',
      react: Welcome(),
    })
    return NextResponse.json({
      data,
      status: 'Ok'
    })
  } catch(error) {
    console.log(error)
    return NextResponse.json({ error })
  }

  

  
}