import { Button } from '@react-email/button'
import { Html } from '@react-email/html'

type WelcomeEmailProps = {
  username: string,
}

export default function Email( { username }: WelcomeEmailProps) {
  return (
    <Html>
      <Button
        pX={20}
        pY={12}
        href="https://example.com"
        style={{ background: '#000', color: '#fff' }}
      >
        Click me
      </Button>
      {username}
      {/* <h1>{email}</h1>
      <p>{message}</p>
      <p>Thanks to reach me {username}, I will answer your message soon</p> */}
    </Html>
  );
}
