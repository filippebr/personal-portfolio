import { Button } from '@react-email/button'
import { Html } from '@react-email/html'

type WelcomeEmailProps = {
  username: string,
  email: string,
  message: string
}

export default function Email( { username, email, message }: WelcomeEmailProps) {
  return (
    <Html>
      {/* <Button
        pX={20}
        pY={12}
        href="https://example.com"
        style={{ background: '#000', color: '#fff' }}
      >
        Click me
      </Button> */}
      <h1>{email}</h1>
      <p>{username}{message}</p>
    </Html>
  );
}
