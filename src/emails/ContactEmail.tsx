import { Html } from '@react-email/html'

type ContactEmailProps = {
  username: string,
  email: string,
  message: string
}

export default function Email( { username, email, message }: ContactEmailProps) {
  return (
    <Html>      
      <h1>{email}</h1>
      <p>{username}</p>
      <p>{message}</p>
    </Html>
  );
}
