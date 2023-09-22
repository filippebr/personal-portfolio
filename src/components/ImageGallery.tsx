'use client'

import { GalleryData, ImageType } from '@/app/data/GalleryData'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>(GalleryData)
  const [filteredImages, setFilteredImages] = useState<ImageType[]>(images)

  const imageTypes = Array.from(new Set(images.map(image => image.type)));

  // Filtering function
  const filterImagesByType = (filterType: string) => {
    const filtered = images.filter(image => image.type === filterType)
    setFilteredImages(filtered)
  }

  return (
    <section id="portfolio" className="w-full h-full bg-black text-white py-28">
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center">
        Works
      </h1>
      <div className="grid grid-cols-6 text-base font-bold mt-16 mx-6">
        {imageTypes.map(type => (
          <button
            key={type}
            className="text-center py-4 text-2xl font-bold bg-yellow text-black uppercase border-4 border-transparent hover:bg-black hover:text-white hover:border-yellow duration-300"
            onClick={() => filterImagesByType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
        <button className="text-center py-4 text-2xl font-bold bg-yellow text-black uppercase border-4 border-transparent hover:bg-black hover:text-white hover:border-yellow duration-300" 
          onClick={() => setFilteredImages(images)}
        >
          Reset
        </button>
      </div>
      <div className="columns-6 lg:columns-5 md:columns-2 sm:columns-1 px-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="relative overflow-hidden group cursor-pointer" >
            <Link 
              target='_blank'
              href={image.imageLink ? image.imageLink : image.imageSrc}
              rel="noopener noreferrer"
            >              
              <Image
                className="object-cover scale-125 group-hover:scale-100 duration-500"
                width={500}
                height={500}
                style={{ width: '100%', height: 'auto' }}
                src={image.imageSrc}
                alt={`bg${image.title}`}      
              />
              <div className="absolute w-full h-full left-0 top-0">
                <div className="w-full h-full relative bg-black bg-opacity-50 hidden group-hover:inline-block transition-opacity duration-500">
                  <h1 className="text-xl text-center font-bold text-black bg-yellow bg-opacity-50 px-6 py-2 w-60 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10">
                    {image.title}
                  </h1>
                </div>
              </div>          
            </Link>
          </div>
        ))}        
      </div>
    </section>
  )
}

export default ImageGallery
