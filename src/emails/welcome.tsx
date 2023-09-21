import { Html } from '@react-email/html'

type WelcomeEmailProps = {
  username: string,
  email: string,
  message: string
}

export default function Email( { username, email, message }: WelcomeEmailProps) {
  return (
    <Html>      
      <h1>{email}</h1>
      <p>{username}</p>
      <p>{message}</p>
    </Html>
  );
}
