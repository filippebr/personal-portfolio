'use client'

import Image from 'next/image'
import { GalleryData, ImageType } from 'public/data/GalleryData'
import { useState } from 'react'

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>(GalleryData)
  const [filteredImages, setFilteredImages] = useState<ImageType[]>(images)

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
      <div className="grid grid-cols-4 text-base font-bold mt-8 mx-6">
        <button 
          className="text-center py-4 text-2xl font-bold bg-yellow text-black uppercase border-4 border-transparent hover:bg-black hover:text-white hover:border-yellow duration-300" 
          onClick={() => filterImagesByType('web')}
        >
          Web
        </button>
        <button 
          className="text-center py-4 text-2xl font-bold bg-yellow text-black uppercase border-4 border-transparent hover:bg-black hover:text-white hover:border-yellow duration-300" 
          onClick={() => filterImagesByType('graphic')}
        >
          Graphic
        </button>
        <button 
          className="text-center py-4 text-2xl font-bold bg-yellow text-black uppercase border-4 border-transparent hover:bg-black hover:text-white hover:border-yellow duration-300" 
          onClick={() => filterImagesByType('graphic')}
        >
          Graphic
        </button>
        <button className="text-center py-4 text-2xl font-bold bg-yellow text-black uppercase border-4 border-transparent hover:bg-black hover:text-white hover:border-yellow duration-300" 
          onClick={() => setFilteredImages(images)}
        >
          Reset
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 h-[1000px] md:h-[480px] px-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="relative overflow-hidden group">
          <Image
            className="h-full object-cover scale-125 group-hover:scale-100 duration-500"
            width={768}
            height={768}
            src={image.imageSrc}
            alt={`bg${image.title}`}
          />
          <div className="absolute w-full h-[480px] left-0 top-0">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center font-bold text-black bg-yellow px-6 py-2 w-60 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10">
                {image.title}
              </h1>
            </div>
          </div>
        </div>
        ))}        
      </div>
    </section>
  )
}

export default ImageGallery
