import { StaticImageData } from 'next/image'
import { imgBlender01, imgBlender02, imgBlender03, imgBlender04, imgBlender05, imgBlender06, imgBlender07, imgBlender08 } from '../assets/index'

export interface ImageType {
  id: number
  title: string
  type: string
  imageSrc: StaticImageData
}

export const GalleryData: ImageType[] = [
  {
    id: 1,
    title: 'Abstract Image Crossmind',
    type: 'blender',
    imageSrc: imgBlender01,
  },
  {
    id: 2,
    title: 'Baroque Ornament Elephant',
    type: 'blender',
    imageSrc: imgBlender02,
  },
  {
    id: 3,
    title: 'Combat Knife',
    type: 'blender',
    imageSrc: imgBlender03,
  },
  {
    id: 4,
    title: 'Cosmetic Mockup Derek',
    type: 'blender',
    imageSrc: imgBlender04,
  },
  {
    id: 5,
    title: 'Crystal',
    type: 'blender',
    imageSrc: imgBlender05,
  },
  {
    id: 6,
    title: 'Death Planet',
    type: 'blender',
    imageSrc: imgBlender06,
  },
  {
    id: 7,
    title: 'Diamond Ring',
    type: 'blender',
    imageSrc: imgBlender07,
  },
  {
    id: 8,
    title: 'Diamond',
    type: 'blender',
    imageSrc: imgBlender08,
  },
]