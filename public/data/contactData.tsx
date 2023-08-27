import { FaEnvelope, FaMap, FaPhoneAlt } from 'react-icons/fa'

const contactData = [
  {
    id: '1',
    icon: <FaMap className="text-4xl text-yellow" />,
    label: 'Location',
    value: 'São Paulo, Brasil',
  },
  {
    id: '2',
    icon: <FaPhoneAlt className="text-4xl text-yellow" />,
    label: 'Phone',
    value: '+9999999999',
  },
  {
    id: '3',
    icon: <FaEnvelope className="text-4xl text-yellow" />,
    label: 'Email',
    value: 'webdevfibr@protonmail.com',
  },
];

export default contactData