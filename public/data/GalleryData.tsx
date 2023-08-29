import { StaticImageData } from 'next/image'
import { bgFour, bgOne, bgThree, bgTwo } from '../assets/index'

export interface ImageType {
  id: number
  title: string
  type: string
  imageSrc: StaticImageData
}

export const GalleryData: ImageType[] = [
  {
    id: 1,
    title: 'Web Design',
    type: 'web',
    imageSrc: bgOne,
  },
  {
    id: 2,
    title: 'Graphic Design',
    type: 'graphic',
    imageSrc: bgTwo,
  },
  {
    id: 3,
    title: 'Web Design',
    type: 'web',
    imageSrc: bgThree,
  },
  {
    id: 4,
    title: 'Graphic Design',
    type: 'graphic',
    imageSrc: bgFour,
  },
]