import Image from 'next/image'
import imagesData from 'public/database/imagesData'

function Works() {
  return (
    <section id="portfolio" className="w-full h-full bg-black text-white py-28">
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center">
        Featured Works
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 h-[1000px] md:h-[480px] mt-16 px-6">
        {imagesData.map((image) => (
          <div key={image.id} className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
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

export default Works
