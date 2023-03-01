'use client'
import { useState } from 'react'
import Slider from 'react-slick'

function Testimonial() {
  const [dotActive, setDocActive] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: any, next: any) => {
      setDocActive(next)
    },
    appendDots: (dots: any) => (
      <div
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '50%',
          transform: 'translate(-50%, 0)',
        }}
      >
        <ul
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                cursor: 'pointer',
                border: '1px solid #F7D449',
              }
            : {
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                cursor: 'pointer',
                border: '1px solid #aeaeae',
              }
        }
      ></div>
    ),
  }
  return (
    <section
      id="testimonial"
      className="text-white bg-[#0F1113] py-20 flex justify-center items-center"
    >
      <div className="w-[500px] md:w-[620px] h-60 px-4">
        <div>
          <Slider {...settings}>
            <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Apple company CEO -</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                impedit eaque id fuga odit dolorum eligendi, vel repellendus
                voluptate laudantium sed culpa illo debitis repellat facilis
                cupiditate molestias amet fugiat? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Laudantium rem, aspernatur quae
                tempora debitis expedita ab beatae ratione sapiente, deleniti,
                doloremque explicabo deserunt recusandae vero corporis
                accusamus! Minus, necessitatibus dicta.
              </p>
            </div>
            <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Apple company CEO -</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                impedit eaque id fuga odit dolorum eligendi, vel repellendus
                voluptate laudantium sed culpa illo debitis repellat facilis
                cupiditate molestias amet fugiat? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Laudantium rem, aspernatur quae
                tempora debitis expedita ab beatae ratione sapiente, deleniti,
                doloremque explicabo deserunt recusandae vero corporis
                accusamus! Minus, necessitatibus dicta.
              </p>
            </div>
            <div>
              <p className="text-xl text-textColor text-center leading-8">
                <span className="text-white">Apple company CEO -</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                impedit eaque id fuga odit dolorum eligendi, vel repellendus
                voluptate laudantium sed culpa illo debitis repellat facilis
                cupiditate molestias amet fugiat? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Laudantium rem, aspernatur quae
                tempora debitis expedita ab beatae ratione sapiente, deleniti,
                doloremque explicabo deserunt recusandae vero corporis
                accusamus! Minus, necessitatibus dicta.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
