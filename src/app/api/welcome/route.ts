import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import Email from '../../../emails/Welcome'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {

  const { username, email, message } = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Thanks for reaching out 🤝',
      text: 'Hello World!',
      react: Email({ username, email, message }),
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