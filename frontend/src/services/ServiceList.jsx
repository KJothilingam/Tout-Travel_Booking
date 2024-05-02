import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap"
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

 const serviceData=[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc: "Know the invaluable insights into the ideal climate conditions and best seasons for visiting specific tourist destinations. ",
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc: "Explore our curated selection of expert guides to elevate your travel experience and create unforgettable memories on your journey",
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc: "Discover our customization section, where you can request special bulk trip bookings tailored to your unique preferences and group needs. Let us turn your vision into an extraordinary travel experience ",
    },
    
 ]
const ServiceList = () => {
  return <>
  {serviceData.map((item,index)=> (
  <Col lg='3' key={index}> 
  <ServiceCard item={item} />
  </Col>
  ))}
  </>
}

export default ServiceList
