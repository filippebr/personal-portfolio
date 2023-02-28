import OfferCard from './OfferCard'
import { RxCopy } from 'react-icons/rx'
import { SiAntdesign } from 'react-icons/si'
import { FaChartPie, FaConnectdevelop } from 'react-icons/fa'

function Offers() {
  return (
    <section id="offers" className="bg-[#0F1113] text-white py-28">
      <div>
        <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center text-white">
          What I Offer.
        </h1>
        <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <OfferCard
            title="Web Design"
            subTitle="Branding is visually stunning designs that will leave you speechless"
            Icon={RxCopy}
          />
          <OfferCard
            title="backend"
            subTitle="Branding is visually stunning designs that will leave you speechless"
            Icon={SiAntdesign}
          />
          <OfferCard
            title="frontend"
            subTitle="Branding is visually stunning designs that will leave you speechless"
            Icon={FaChartPie}
          />
          <OfferCard
            title="3d creation"
            subTitle="Branding is visually stunning designs that will leave you speechless"
            Icon={FaConnectdevelop}
          />
        </div>
      </div>
    </section>
  )
}

export default Offers
