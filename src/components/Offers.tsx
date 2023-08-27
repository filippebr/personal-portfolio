import { FaCode, FaCube, FaRobot, FaServer, FaWindowRestore } from 'react-icons/fa'
import OfferCard from './OfferCard'

function Offers() {
  return (
    <section id="offers" className="bg-[#0F1113] text-white py-14">
      <div>
        <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center text-white mb-6">
          What I Offer
        </h1>
        <div className="w-full px-10 items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <OfferCard
            title="Web Design"
            subTitle="Beautiful designs, good colors combinations and concise separation between elements"
            Icon={FaWindowRestore}
          />
          <OfferCard
            title="backend"
            subTitle="Databases with the best technologies at the moment"
            Icon={FaServer}
          />
          <OfferCard
            title="frontend"
            subTitle="Coding utilizing apis from database and thirds parties with nice syntax and splitting codes"
            Icon={FaCode}
          />
          <OfferCard
            title="3d creation"
            subTitle="Creative and beautiful 3D Designs utilizing Blender"
            Icon={FaCube}
          />
          <OfferCard
            title="GenAI Images"
            subTitle="Stunning and very realistic images utilizing the greatest tool in generative artificial intelligence"
            Icon={FaRobot}
          />
        </div>
      </div>
    </section>
  )
}

export default Offers
