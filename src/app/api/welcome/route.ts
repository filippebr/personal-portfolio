import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import Welcome from '../../../emails/Welcome'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(req: NextRequest) {

  // const data = req.body

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'filippeffx@hotmail.com',
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