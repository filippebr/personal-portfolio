import 'slick-carousel/slick/slick.css'
import AboutMe from '@/components/AboutMe'
import Banner from '@/components/Banner'
import Offers from '@/components/Offers'
import Testimonial from '@/components/Testimonial'
import Works from '@/components/Works'
import Contact from '@/components/Contact'

const Home = () => {
  return (
    <>
      <div className="font-bodyFont">
        <Banner />
        <AboutMe />
        <Offers />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </>
  )
}

export default Home
