import offerCardData from '../../public/data/OfferCardData'
import OfferCard from './OfferCard'

function Offers() {
  return (
    <section id="offers" className="bg-[#0F1113] text-white py-14">
      <div>
        <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center text-white mb-6">
          What I Offer
        </h1>
        <div className="w-full px-10 items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {offerCardData.map((data) => (      
            <OfferCard
              key={data.id}
              title={data.title}
              subTitle={data.subtitle}
              Icon={data.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers
