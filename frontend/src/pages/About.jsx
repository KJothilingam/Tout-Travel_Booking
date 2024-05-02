import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import Testimonials from '../components/Testimonial/Testimonials';
import experienceImg from '../assets/images/experience.png'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';

const About = () => {
  return <>
   <section id='exp'>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience__content">
            <Subtitle subtitle={'Experience'} />

            <h2> With our all experince <br /> we will serve you </h2>

            <p>
            Expertise, Ensuring your custom trip is nothing short of exceptional , Rest assured, our team's wealth of experience will be at your disposal, guaranteeing a seamless and unforgettable journey from start to finish.
            </p>
          </div>
          <div className="counter__wrapper d-flex align-items-center gap-5">
           <div className="counter__box">
            <span>15k+</span>
            <h6>Successfull trip</h6>
           </div> 
           <div className="counter__box">
            <span>4k+</span>
            <h6>Regular clients</h6>
           </div> 
           <div className="counter__box">
            <span>12 </span>
            <h6>Years experince</h6>
           </div> 
          </div>
        </Col>
        <Col lg='6'>
          <div className="experience__img">
            <img src={experienceImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
   </section>
   <section>
   <Container>
     <Row>
       <Col lg='12'>
         <Subtitle subtitle={'Gallery'} />
         <h2 className="gallery__title">Visit our Customers Tour Gallery</h2>
       </Col>

       <Col lg='12'>
 <MasonryImagesGallery />
       </Col>
     </Row>
   </Container>
 </section>

    {/*=============galary==end=============*/ }


    {/*=============testimonial==start=============*/ }

    <section>
     <Container>
       <Row>
         <Col lg='12'>
           <Subtitle subtitle={'Fans Love'} />
           <h2 className="testimonial__title">What our fans say about us</h2>
         </Col>
         <Col lg='12'>
         <Testimonials />
         </Col>
       </Row>
     </Container>
    </section>
    {/*=============testimonial==end=============*/ }
  


  
  </>
}

export default About;
