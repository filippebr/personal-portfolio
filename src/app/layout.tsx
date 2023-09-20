import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Filippe | Personal Portfolio',
  description: 'Filippe has been creating projects on web development for more than 5 years.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
