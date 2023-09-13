"use server"

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (username, email, message) => {
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'webdevfibr@protonmail.com',
    subject: 'Message from contact form',
    text: 'Hello World!'
  })
}