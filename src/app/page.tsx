import AboutMe from '@/components/AboutMe'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import Works from '@/components/ImageGallery'
import Offers from '@/components/Offers'
import ScrollBtn from '@/components/ScrollBtn'
// import Testimonial from '@/components/Testimonial'
import 'slick-carousel/slick/slick.css'

const Home = () => {
  return (
    <>
      <div className="font-bodyFont">
        <Banner />
        <AboutMe />
        <Offers />
        <Works />
        {/* <Testimonial /> */}
        <Contact />
      </div>
      <ScrollBtn />
    </>
  )
}

export default Home
