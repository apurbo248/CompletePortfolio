import ReactDOM from 'react-dom'
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEye} from '@fortawesome/free-solid-svg-icons'
import tshirt from "../../images/tshirtzone.png";
import ride from "../../images/ride.png";
import hungry from "../../images/hungry.png";
import friend from "../../images/friend.png";
import slider from "../../images/slider.png";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);

const Project=()=> {
  return (
      <section id="project" className="pt-5 pb-5" style={{}}>
          <h2 className="pt-5 pb-5">PROJECT</h2>
    <>
    <Swiper effect={'coverflow'} grabCursor={true} startedSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} pagination={true} className="mySwiper">
  <SwiperSlide className="shadow" style={{background:'rgb(231, 229, 229)',width:'400px'}}>
      <div className="p-3" style={{}}>
      <img src={tshirt} style={{width:'200px'}}/>

     <h3 className="" style={{marginLeft:'-160px'}}>Tshirt-Zone</h3>
      <h6 className="" style={{marginLeft:'-130px'}}><span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>react</span> 
      <span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>firebase</span>
      <span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>react</span>
      </h6>
      <div className="d-flex justify-content-start">
        <a className="ps-5  "target="_blank" href="https://github.com/apurbo248/E-commerce"><FontAwesomeIcon icon={faGithub } size="2x" /></a>
        <a className="ps-2"target="_blank" href="https://tshirtzone248.web.app/"><FontAwesomeIcon icon={faEye} size="2x" /></a>
      </div>
     </div>
      
</SwiperSlide>
<SwiperSlide className="shadow" style={{background:'rgb(231, 229, 229)',width:'400px'}}>
      <div className="p-3" style={{}}>
      <img className="img-fluid" src={ride} style={{width:'300px',height:'300px'}}/>

     <h3 className="" style={{marginLeft:'-160px'}}>Ride.com</h3>
      <h6 className="" style={{marginLeft:'-130px'}}><span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>react</span> 
      <span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>firebase</span>
      <span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>react</span>
      </h6>
      <div className="d-flex justify-content-start">
        <a className="ps-5  "target="_blank" href="https://github.com/apurbo248/ride.com"><FontAwesomeIcon icon={faGithub } size="2x" /></a>
        <a className="ps-2"target="_blank" href="https://ride-app-4e784.web.app/"><FontAwesomeIcon icon={faEye} size="2x" /></a>
      </div>
     </div>
      
</SwiperSlide>
<SwiperSlide className="shadow" style={{background:'rgb(231, 229, 229)',width:'400px'}}>
      <div className="p-3" style={{}}>
      <img src={slider} style={{width:'300px',height:'300px'}}/>

     <h3 className="" style={{marginLeft:'-160px'}}>Fancy slider</h3>
      <h6 className="" style={{marginLeft:'-130px'}}><span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>react</span> 
      <span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>firebase</span>
      <span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>react</span>
      </h6>
      <div className="d-flex justify-content-start">
        <a className="ps-5  "target="_blank" href="https://github.com/apurbo248/fancy-slider"><FontAwesomeIcon icon={faGithub } size="2x" /></a>
        <a className="ps-2" target="_blank" href="https://apurbo248.github.io/fancy-slider/"><FontAwesomeIcon icon={faEye} size="2x" /></a>
      </div>
     </div>
      
</SwiperSlide>
<SwiperSlide className="shadow" style={{background:'rgb(231, 229, 229)',width:'400px'}}>
      <div className="p-3" style={{}}>
      <img src={friend} style={{width:'200px',height:'300px'}}/>

     <h3 className="" style={{marginLeft:'-160px'}}>Firend Zone</h3>
      <h6 className="" style={{marginLeft:'-130px'}}><span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>react</span> 
      <span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>firebase</span>
      <span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>react</span>
      </h6>
      <div className="d-flex justify-content-start">
        <a className="ps-5  " target="_blank" href="https://github.com/apurbo248/friend"><FontAwesomeIcon icon={faGithub } size="2x" /></a>
        <a className="ps-2" target="_blank" href="https://pensive-torvalds-5f1700.netlify.app/"><FontAwesomeIcon icon={faEye} size="2x" /></a>
      </div>
     </div>
      
</SwiperSlide>
<SwiperSlide className="shadow" style={{background:'rgb(231, 229, 229)',width:'400px'}}>
      <div className="p-3" style={{}}>
      <img src={hungry} style={{width:'200px'}}/>

     <h3 className="" style={{marginLeft:'-160px'}}>Hesel</h3>
      <h6 className="" style={{marginLeft:'-130px'}}><span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>react</span> 
      <span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>firebase</span>
      <span className="bg-warning text-dark p-1 me-1"style={{borderRadius:'2px'}}>react</span>
      </h6>
      <div className="d-flex justify-content-start">
        <a className="ps-5  " href="https://github.com/apurbo248/Hungry_monoster" target="_blank"><FontAwesomeIcon icon={faGithub } size="2x" /></a>
        <a className="ps-2" href="https://apurbo248.github.io/Hungry_monoster/hungry.html" traget="_blank"><FontAwesomeIcon icon={faEye} size="2x" /></a>
      </div>
     </div>
      
</SwiperSlide>
  </Swiper>
    </>
    </section>
  )
}

export default Project;