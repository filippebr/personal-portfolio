import { StaticImageData } from 'next/image'
import { imgBlender01, imgBlender02, imgBlender03, imgBlender04, imgBlender05, imgBlender06, imgBlender07, imgBlender08, imgBlender09, imgBlender10, imgBlender11, imgBlender12 } from '../assets/index'

export interface ImageType {
  id: number
  title: string
  type: string
  imageSrc: StaticImageData
}

export const GalleryData: ImageType[] = [
  {
    id: 1,
    title: 'Abstract Crossmind',
    type: 'blender',
    imageSrc: imgBlender01,
  },
  {
    id: 2,
    title: 'Ornament Elephant',
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
    title: 'Cosmetic Mockup',
    type: 'blender',
    imageSrc: imgBlender04,
  },
  {
    id: 5,
    title: 'Death Planet',
    type: 'blender',
    imageSrc: imgBlender05,
  },
  {
    id: 6,
    title: 'Diamond',
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
    title: 'Fireball',
    type: 'blender',
    imageSrc: imgBlender08,
  },
  {
    id: 9,
    title: 'Fractal Cube',
    type: 'blender',
    imageSrc: imgBlender09,
  },
  {
    id: 10,
    title: 'Leaves Ornament',
    type: 'blender',
    imageSrc: imgBlender10,
  },
  {
    id: 11,
    title: 'Baseball Cap',
    type: 'blender',
    imageSrc: imgBlender11,
  },
  {
    id: 12,
    title: 'Pepper Container',
    type: 'blender',
    imageSrc: imgBlender12,
  },
]