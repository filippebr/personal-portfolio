import AboutMe from '@/components/AboutMe'
import Banner from '@/components/Banner'
import Offers from '@/components/Offers'
import Works from '@/components/Works'

function Home() {
  return (
    <>
      <div className="font-bodyFont">
        <Banner />
        <AboutMe />
        <Offers />
        <Works />
      </div>
    </>
  )
}

export default Home
