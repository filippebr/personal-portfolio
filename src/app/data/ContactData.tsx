import { FaEnvelope, FaMap } from 'react-icons/fa'

const ContactData = [
  {
    id: '0',
    icon: <FaMap className="text-4xl text-yellow" />,
    label: 'Location',
    value: 'São Paulo, Brasil',
  },
  // {
  //   id: '1',
  //   icon: <FaPhoneAlt className="text-4xl text-yellow" />,
  //   label: 'Phone',
  //   value: '+9999999999',
  // },
  {
    id: '1',
    icon: <FaEnvelope className="text-4xl text-yellow" />,
    label: 'Email',
    value: 'webdevfibr@protonmail.com',
  },
];

export default ContactData