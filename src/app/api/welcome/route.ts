import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import Email from '../../../emails/Welcome'

const resend = new Resend(process.env.RESEND_API_KEY)

type Credentials = {
  username: string,
  email: string,
  message: string
}

export async function POST(req: Request) {

  const { username } = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'filippeffx@hotmail.com',
      subject: 'Thanks for reaching out 🤝',
      text: 'Hello World!',
      react: Email({ username }),
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