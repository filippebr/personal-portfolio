import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import Email from '../../../emails/Welcome'

const resend = new Resend(process.env.RESEND_API_KEY)

type Credentials = {
  username: string,
  email: string,
  message: string
}

export async function GET({username, email, message}: Credentials, req: NextRequest) {

  console.log('body', req.body)

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'filippeffx@hotmail.com',
      subject: 'Thanks for reaching out 🤝',
      text: 'Hello World!',
      react: Email(),
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