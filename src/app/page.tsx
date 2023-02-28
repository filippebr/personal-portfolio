import AboutMe from '@/components/AboutMe'
import Banner from '@/components/Banner'
import Offers from '@/components/Offers'

function Home() {
  return (
    <>
      <div className="font-bodyFont">
        <Banner />
        <AboutMe />
        <Offers />
      </div>
    </>
  )
}

export default Home
