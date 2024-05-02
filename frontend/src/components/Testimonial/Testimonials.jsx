

import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'


const Testimonials = () => {

    const settings={
       dots:true,
       infinite:true,
       autoplay:true,
       speed:1000,
       swipeToSlide:true,
       autoplaySpeed:2000,
       slidesToShow:3,

       responsive:[
        {
        breakpoint:992,
        settings:{
            slidesToShow:2,
            slidesToScroll:1,
            infinite:true,
            dots:true,
        },
    },
    {
    breakpoint:576,
    settings:{
        slidesToShow:1,
        slidesToScroll:1,
    },
    },
       ]
    }

  return ( 
  <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
        <p>Excellent service<br/>
Excellent service, great location and stunning views. Worth the dollars paid for the tickets. Highly recommend.
"I appreciated the wide range of tour options available, catering to various interests and budgets.</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Nikhil Reddy</h6> 
            <p>Customer</p>
        </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>Our tour guide James was very knowledgeable and interesting. He did a great job taking us to the best spots for photo opportunities. He knew lots of historical information and shared a wealth of knowledge. Very entertaining and personable. </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Isabella Brown</h6> 
            <p>Customer</p>
        </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>Highlight of our week<br /> My wife and I had never rappelled before, so we were a bit nervous . The guides were great! They were fun, very knowledgeable, and encouraging. We felt safe the entire time. The waterfalls were beautiful!! I highly recommend if are looking for a unique, exciting activity!</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Harpreet Singh</h6> 
            <p>Customer</p>
        </div>
        </div>
    </div>

    <div className='testimonial py-4 px-3'>
        <p>Great tour<br />
Our tour guide Richard was a wealth of information! The history and Key West legends we learned on the tour were entertaining and informative. Nice little walk with stops throughout- was a good pace. Highly recommend!</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Rohan Mehta</h6> 
            <p>Customer</p>
        </div>
        </div>
    </div>
  </Slider>
  )
}

export default Testimonials
