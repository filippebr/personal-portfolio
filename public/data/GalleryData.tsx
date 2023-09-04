import { StaticImageData } from 'next/image'
import {
  imgBackend01, imgBlender01, imgBlender02, imgBlender03, imgBlender04, imgBlender05,
  imgBlender06, imgBlender07, imgBlender08, imgBlender09, imgBlender10,
  imgBlender11, imgBlender12, imgBlender13, imgBlender14, imgBlender15,
  imgBlender16, imgBlender17, imgBlender18, imgBlender19, imgBlender20, imgBlender21, imgBlender22
} from '../assets/index'

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
  {
    id: 13,
    title: 'Quadcopter',
    type: 'blender',
    imageSrc: imgBlender13,
  },
  {
    id: 14,
    title: 'Samurai Helmet',
    type: 'blender',
    imageSrc: imgBlender14,
  },
  {
    id: 15,
    title: 'Shoe Skate',
    type: 'blender',
    imageSrc: imgBlender15,
  },
  {
    id: 16,
    title: 'Silver Mirror',
    type: 'blender',
    imageSrc: imgBlender16,
  },
  {
    id: 17,
    title: 'Skull Mechanic',
    type: 'blender',
    imageSrc: imgBlender17,
  },
  {
    id: 18,
    title: 'Spider Yuji',
    type: 'blender',
    imageSrc: imgBlender18,
  },
  {
    id: 19,
    title: 'Staff Energy',
    type: 'blender',
    imageSrc: imgBlender19,
  },
  {
    id: 20,
    title: 'The One Ring',
    type: 'blender',
    imageSrc: imgBlender20,
  },
  {
    id: 21,
    title: 'Venus',
    type: 'blender',
    imageSrc: imgBlender21,
  },
  {
    id: 22,
    title: 'Wine Bottle',
    type: 'blender',
    imageSrc: imgBlender22,
  },
  {
    id: 23, 
    title: 'Ecommerce Developer Corner',
    type: 'backend',
    imageSrc: imgBackend01,
  }
]