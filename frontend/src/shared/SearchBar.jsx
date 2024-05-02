import React,{useRef} from 'react'
import './search-bar.css'
import {Col,Form,FormGroup} from 'reactstrap'
const SearchBar = () => {

  const locationRef=useRef('')
  const distanceRef=useRef(0)
  const maxGroupSizeRef=useRef(0)

  const searchHandler =()=>{
    const location =locationRef.current.value
    const distance =distanceRef.current.value
    const maxGroupSize=maxGroupSizeRef.current.value

    if(location==''  || distance==''  ||maxGroupSize==''){
        return alert ('All Fields are Required ')
    }
  }

  return (
   <Col lg='12'>
    <div className="search-bar">
    <Form className='d-flex align-items-center gap-4'>
        <FormGroup className='d-flex gap-3 form__group form__group-fast'>
            <span><i class="ri-map-pin-fill"></i></span>    
            <div>
                <h6>Location</h6>
                <input type='text' placeholder='Where are you going?' ref={locationRef} ></input>
            </div>
        </FormGroup>

        <FormGroup className='d-flex gap-3 form__group form__group-fast'>
            <span><i class="ri-pin-distance-fill"></i></span>    
            <div>
                <h6>Distance</h6>
                <input type='number' placeholder='Distance K/M ' ref={distanceRef}></input>
            </div>
        </FormGroup>

        <FormGroup className='d-flex gap-3 form__group form__group-fast'>
            <span><i class="ri-group-fill"></i></span>    
            <div>
                <h6>Max People</h6>
                <input type='number' placeholder='0' ref={maxGroupSizeRef}></input>
            </div>
        </FormGroup>
        <span className="search__icon" type='submit' onClick={searchHandler}>
        <i class="ri-search-2-line"></i>    
        </span>
    </Form>
    </div>
   </Col>
  )
}

export default SearchBar
