import { Button } from '@react-email/button'
import { Html } from '@react-email/html'

type Data = {
  username: string,
  email: string,
  message: string
}

export default function Email() {
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
      {/* <h1>{email}</h1>
      <p>{message}</p>
      <p>Thanks to reach me {username}, I will answer your message soon</p> */}
    </Html>
  );
}
