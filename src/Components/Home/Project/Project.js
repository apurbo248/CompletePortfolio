import ReactDOM from 'react-dom'
import './Project.css';
import Bounce from 'react-reveal/Bounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEye} from '@fortawesome/free-solid-svg-icons'
import tshirt from "../../images/tshirt.png";
import ride from "../../images/ride.png";
import hungry from "../../images/hungry.png";
import car from "../../images/car.png";
import slider from "../../images/slider.png";

import React, { useRef, useState } from "react";

const Project=()=> {


  return (
    <section id="project" class=" pt-5 pb-5 "style={{background:''}} >
    <h2  class="mb-2 mt-5" style={{marginBottom:'20px', fontFamily:'Rubik, sans-serif',fontWeight:'600',fontSize:'40px',color:'#000',textTransform:'uppercase'}}>Completed <span style={{color:'#7f00ff'}}>project</span></h2>
       <div className="lines mb-5">
          <div className="diamond">
          </div>
      </div>

   <div id="carouselExampleControls" class="carousel slide d-flex justify-content-center align-items-center" data-bs-ride="carousel" style={{background:''}}>
  <div class="carousel-inner">
    <div class="carousel-item active">
      
    <div className="d-flex justify-content-center align_items-center">
    <div class="" style={{background:'#7f00ff',borderRadius:'30px',width:'850px'}} >
            <div class="row g-1">
            <div class="col-md-5  ">
            <div style={{ }}>
            <img class=" img-fluid" src={car} alt="..." style={{height:'425px',width:'400px',padding:'20px',borderRadius:'10%'}}/>
            </div>
            </div>
            <div class="col-md-7 ps-4 text-white" >
            <div class="card-body text-start align-self-center align-text-justify" style={{width:'350px',fontSize:'18px'}}>
                <div className="pt-5">
                <h2 class="mb-4"style={{fontWeight:600}}>Car Servicing Center</h2>
              
                <h6 class="card-title mb-3" ><span className="shadows" style={{background:'#2962ff',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}>reactJS</span><span className="shadows" style={{background:'green',color:'#fff', borderRadius:'12px',padding:'5px', marginRight:'3px'}}> nodeJS</span><span className="shadows" style={{background:'#089c34',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}> mongoDB</span><span className="shadows" style={{background:'orange',color:'#000', borderRadius:'12px',padding:'5px'}}> firebase</span></h6>
                <p class="card-text pb-5 pt-4 ">
                This is a web app where admin can manage products and order status and users can book order,give review,see own order list.
                </p> </div> 
                <div className="col-sm-pb-5">
                <a target="_blank" href="https://github.com/apurbo248/Car-Servicing-Center" className="btn btn-dark me-2">github</a>
                <a target="_blank" href="https://jovial-albattani-63e2f3.netlify.app/" className="btn btn-dark">Live site</a>
             </div>        
            </div>
            </div>
            </div>
            </div>
            </div>
           
    </div>
    <div class="carousel-item ">
      
    <div className="d-flex justify-content-center align_items-center">
    <div class="" style={{background:'#7f00ff',borderRadius:'30px',width:'900px'}} >
            <div class="row g-1">
            <div class="col-md-5  ">
            <div style={{ }}>
            <img class=" img-fluid" src={tshirt} alt="..." style={{height:'400px',width:'400px',padding:'20px',borderRadius:'10%'}}/>
            </div>
            </div>
            <div class="col-md-7 ps-4 text-white" >
            <div class="card-body text-start align-self-center align-text-justify" style={{width:'350px',fontSize:'18px'}}>
                <div className="pt-5">
                <h2 class="mb-4"style={{fontWeight:600}}>T-Shirt Zone</h2>
              
                <h6 class="card-title mb-3" ><span className="shadows" style={{background:'#2962ff',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}>reactJS</span><span className="shadows" style={{background:'green',color:'#fff', borderRadius:'12px',padding:'5px', marginRight:'3px'}}> nodeJS</span><span className="shadows" style={{background:'#089c34',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}> mongoDB</span><span className="shadows" style={{background:'orange',color:'#000', borderRadius:'12px',padding:'5px'}}> firebase</span></h6>
                <p class="card-text pb-5 pt-4">
                This is a web app where admin can manage products and order status and users can book order,give review,see own order list.
                </p> </div> 
                <div className="col-sm-pb-5">
                <a target="_blank" href="https://github.com/apurbo248/E-commerce" className="btn btn-dark me-2">github</a>
                <a target="_blank" href="https://tshirtzone248.web.app/" className="btn btn-dark">Live site</a>
             </div>        
            </div>
            </div>
            </div>
            </div>
            </div>
      </div>
      <div class="carousel-item ">
      
      <div className="d-flex justify-content-center align_items-center">
    <div class="" style={{background:'#7f00ff',borderRadius:'30px',width:'900px'}} >
            <div class="row g-1">
            <div class="col-md-5  ">
            <div style={{ }}>
            <img class=" img-fluid" src={ride} alt="..." style={{height:'400px',width:'400px',padding:'20px',borderRadius:'10%'}}/>
            </div>
            </div>
            <div class="col-md-7 ps-4 text-white" >
            <div class="card-body text-start align-self-center align-text-justify" style={{width:'350px',fontSize:'16px'}}>
                <div className="pt-5">
                <h2 class="mb-4"style={{fontWeight:600}}>Ride.com</h2>
              
                <h6 class="card-title mb-3" ><span className="shadows" style={{background:'#2962ff',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}>reactJS</span><span className="shadows" style={{background:'green',color:'#fff', borderRadius:'12px',padding:'5px', marginRight:'3px'}}> nodeJS</span><span className="shadows" style={{background:'orange',color:'#000', borderRadius:'12px',padding:'5px'}}> firebase</span></h6>
                <p class="card-text pb-5 pt-4">
                This is a web app where user can choose transport type,total person,place
                </p> </div> 
                <div className="col-sm-pb-5">
                <a target="_blank" href="https://github.com/apurbo248/ride.com" className="btn btn-dark me-2">github</a>
                <a target="_blank" href="https://ride-app-4e784.web.app/" className="btn btn-dark">Live site</a>
             </div>        
            </div>
            </div>
            </div>
            </div>
          </div>
          </div>

          <div class="carousel-item ">
      
      <div className="d-flex justify-content-center align_items-center">
    <div class="" style={{background:'#7f00ff',borderRadius:'30px',width:'900px'}} >
            <div class="row g-1">
            <div class="col-md-5  ">
            <div style={{ }}>
            <img class=" img-fluid" src={slider} alt="..." style={{height:'400px',width:'400px',padding:'20px',borderRadius:'10%'}}/>
            </div>
            </div>
            <div class="col-md-7 ps-4 text-white" >
            <div class="card-body text-start align-self-center align-text-justify" style={{width:'350px',fontSize:'16px'}}>
                <div className="pt-5">
                <h2 class="mb-4"style={{fontWeight:600}}>Awsome Slider</h2>
              
                <h6 class="card-title mb-3" ><span className="shadows" style={{background:'#2962ff',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}>reactJS</span><span className="shadows" style={{background:'green',color:'#fff', borderRadius:'12px',padding:'5px', marginRight:'3px'}}> restAPIs</span><span className="shadows" style={{background:'orange',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}> javascript</span></h6>
              <p class="card-text pb-5 pt-4">
                This is a web app where user can search and choose one or more images for creating a carousel.
              </p> </div> 
              <div className="col-sm-pb-5">
                <a target="_blank" href="https://github.com/apurbo248/fancy-slider" className="btn btn-dark me-2">github</a>
                <a target="_blank" href="https://apurbo248.github.io/fancy-slider/" className="btn btn-dark">Live site</a>
             </div>        
            </div>
            </div>
            </div>
            </div>
          </div>
          </div>

          <div class="carousel-item ">
      
          <div className="d-flex justify-content-center align_items-center">
          <div class="" style={{background:'#7f00ff',borderRadius:'30px',width:'900px'}} >
            <div class="row g-1">
            <div class="col-md-5  ">
            <div style={{ }}>
            <img class=" img-fluid" src={hungry} alt="..." style={{height:'400px',width:'400px',padding:'20px',borderRadius:'10%'}}/>
            </div>
            </div>
            <div class="col-md-7 ps-4 text-white" >
            <div class="card-body text-start align-self-center align-text-justify" style={{width:'350px',fontSize:'16px'}}>
                <div className="pt-5">
                <h2 class="mb-4"style={{fontWeight:600}}>Hesel</h2>
              
                <h6 class="card-title mb-3" ><span className="shadows" style={{background:'#2962ff',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}>reactJS</span><span className="shadows" style={{background:'green',color:'#fff', borderRadius:'12px',padding:'5px', marginRight:'3px'}}> nodeJS</span><span className="shadows" style={{background:'#089c34',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}> mongoDB</span><span className="shadows" style={{background:'orange',color:'#000', borderRadius:'12px',padding:'5px'}}> firebase</span></h6>
              <p class="card-text pb-5 pt-4">
                This is a web app where user can choose a dish with full recipe by search.
              </p> </div> 
              <div className="col-sm-pb-5">
                <a target="_blank" href="https://github.com/apurbo248/Hungry_monoster" className="btn btn-dark me-2">github</a>
                <a target="_blank" href="https://apurbo248.github.io/Hungry_monoster/hungry.html" className="btn btn-dark">Live site</a>
             </div>        
            </div>
            </div>
            </div>
            </div>
          </div>
          </div>
  
  </div>
 <div >
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
    <span class="carousel-control-next-icon" aria-hidden="true" ></span>
    <span class="visually-hidden">Next</span>
  </button>
 </div>
</div>



    
  {/*
          
            <div class="card mb-3 m-auto shadow" style={{maxWidth:'740px'}}>
            <div class="row g-3">
            <div class="col-md-4 p-0  ">
            <div style={{ }}>
            <img class="rounded img-fluid" src={car} alt="..." style={{height:'240px',width:'270px'}}/>
            </div>
            </div>
            <div class="col-md-8 " >
            <div class="card-body text-start align-self-center " style={{height:'290px',marginTop:'-30px',marginBottom:'-20px', backgroundImage:' linear-gradient(to bottom right, #0183ff, #38c4fc)',color:'#000'}}>
                <div className="pt-0">
                <h4 class="mb-4"style={{fontWeight:600}}>Car Servicing Center</h4>
              
              <h6 class="card-title mb-3" ><span className="shadows" style={{background:'#2962ff',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}>reactJS</span><span className="shadows" style={{background:'green',color:'#fff', borderRadius:'12px',padding:'5px', marginRight:'3px'}}> nodeJS</span><span className="shadows" style={{background:'#089c34',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}> mongoDB</span><span className="shadows" style={{background:'orange',color:'#000', borderRadius:'12px',padding:'5px'}}> firebase</span></h6>
              <p class="card-text pb-3">
                This is a web app where admin can manage products and order status and users can book order,give review,see own order list.
              </p> </div> 
              <div className="col-sm-pb-5">
                <a target="_blank" href="https://github.com/apurbo248/Car-Servicing-Center" className="btn btn-dark me-2">github</a>
                <a target="_blank" href="https://jovial-albattani-63e2f3.netlify.app/" className="btn btn-dark">Live site</a>
             </div>        
            </div>
            </div>
            </div>
            </div>
            </div>
  </SwiperSlide>
  <SwiperSlide className=" ">
<div className="d-flex justify-content-center align-items-center" style={{height:'450px'}}>
          
            <div class="card mb-3 m-auto shadow" style={{maxWidth:'740px'}}>
            <div class="row g-3">
            <div class="col-md-4 p-0  ">
            <div style={{ }}>
            <img class="rounded img-fluid" src={tshirt} alt="..." style={{height:'240px',width:'240px',margin:'0px'}}/>
            </div>
            </div>
            <div class="col-md-8 " >
            <div class="card-body text-start align-self-center" style={{height:'290px',marginTop:'-30px',marginBottom:'-20px', backgroundImage:' linear-gradient(to bottom right, #0183ff, #38c4fc)',marginLeft:'0px',color:'#000'}}>
                <div className="pt-0">
                <h4 class="mb-4"style={{fontWeight:600}}>Tshirt-Zone</h4>
              
              <h6 class="card-title mb-3" ><span className="shadows" style={{background:'#2962ff',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}>reactJS</span><span className="shadows" style={{background:'green',color:'#fff', borderRadius:'12px',padding:'5px', marginRight:'3px'}}> nodeJS</span><span className="shadows" style={{background:'#089c34',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}> mongoDB</span><span className="shadows" style={{background:'orange',color:'#000', borderRadius:'12px',padding:'5px'}}> firebase</span></h6>
              <p class="card-text pb-3">
                This is a web app where admin can manage products and order status and users can book order,give review,see own order list.
              </p> </div> 
              <div className="col-sm-pb-5">
                <a target="_blank" href="https://github.com/apurbo248/E-commerce" className="btn btn-dark me-2">github</a>
                <a target="_blank" href="https://tshirtzone248.web.app/" className="btn btn-dark">Live site</a>
             </div>        
            </div>
            </div>
            </div>
            </div>
            </div>
  </SwiperSlide>
  <SwiperSlide className=" ">
<div className="d-flex justify-content-center align-items-center" style={{height:'450px'}}>
          
            <div class="card mb-3 m-auto shadow" style={{maxWidth:'740px'}}>
            <div class="row g-3">
            <div class="col-md-4 p-0  ">
            <div style={{ }}>
            <img class="rounded img-fluid" src={ride} alt="..." style={{height:'240px',width:'240px',margin:'0px'}}/>
            </div>
            </div>
            <div class="col-md-8 " >
            <div class="card-body text-start align-self-center" style={{height:'290px',marginTop:'-30px',marginBottom:'-20px', backgroundImage:' linear-gradient(to bottom right, #0183ff, #38c4fc)',marginLeft:'0px',color:'#000'}}>
                <div className="pt-0">
                <h4 class="mb-4"style={{fontWeight:600}}>Ride.com</h4>
              
              <h6 class="card-title mb-3" ><span className="shadows" style={{background:'#2962ff',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}>reactJS</span><span className="shadows" style={{background:'green',color:'#fff', borderRadius:'12px',padding:'5px', marginRight:'3px'}}> nodeJS</span><span className="shadows" style={{background:'orange',color:'#000', borderRadius:'12px',padding:'5px'}}> firebase</span></h6>
              <p class="card-text pb-3">
                This is a web app where user can choose transport type,total person,place
              </p> </div> 
              <div className="col-sm-pb-5">
                <a target="_blank" href="https://github.com/apurbo248/ride.com" className="btn btn-dark me-2">github</a>
                <a target="_blank" href="https://ride-app-4e784.web.app/" className="btn btn-dark">Live site</a>
                
             </div>        
            </div>
            </div>
            </div>
            </div>
            </div>
  </SwiperSlide>
  <SwiperSlide className=" ">
<div className="d-flex justify-content-center align-items-center" style={{height:'450px'}}>
          
            <div class="card mb-3 m-auto shadow" style={{maxWidth:'740px'}}>
            <div class="row g-3">
            <div class="col-md-4 p-0  ">
            <div style={{ }}>
            <img class="rounded img-fluid" src={slider} alt="..." style={{height:'240px',width:'240px',margin:'0px'}}/>
            </div>
            </div>
            <div class="col-md-8 " >
            <div class="card-body text-start align-self-center" style={{height:'290px',marginTop:'-30px',marginBottom:'-20px', backgroundImage:' linear-gradient(to bottom right, #0183ff, #38c4fc)',marginLeft:'0px',color:'#000'}}>
                <div className="pt-0">
                <h4 class="mb-4"style={{fontWeight:600}}>Fancy slider</h4>
              
              <h6 class="card-title mb-3" ><span className="shadows" style={{background:'#2962ff',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}>reactJS</span><span className="shadows" style={{background:'green',color:'#fff', borderRadius:'12px',padding:'5px', marginRight:'3px'}}> restAPIs</span><span className="shadows" style={{background:'orange',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}> javascript</span></h6>
              <p class="card-text pb-3">
                This is a web app where user can search and choose one or more images for creating a carousel.
              </p> </div> 
              <div className="col-sm-pb-5">
                <a target="_blank" href="https://github.com/apurbo248/fancy-slider" className="btn btn-dark me-2">github</a>
                <a target="_blank" href="https://apurbo248.github.io/fancy-slider/" className="btn btn-dark">Live site</a>
             </div>        
            </div>
            </div>
            </div>
            </div>
            </div>
  </SwiperSlide>
  <SwiperSlide className=" ">
<div className="d-flex justify-content-center align-items-center" style={{height:'450px'}}>
          
            <div class="card mb-3 m-auto shadow" style={{maxWidth:'740px'}}>
            <div class="row g-3">
            <div class="col-md-4 p-0  ">
            <div style={{ }}>
            <img class="rounded img-fluid" src={hungry} alt="..." style={{height:'240px',width:'240px',margin:'0px'}}/>
            </div>
            </div>
            <div class="col-md-8 " >
            <div class="card-body text-start align-self-center" style={{height:'290px',marginTop:'-30px',marginBottom:'-20px', backgroundImage:' linear-gradient(to bottom right, #0183ff, #38c4fc)',marginLeft:'0px',color:'#000'}}>
                <div className="pt-0">
                <h4 class="mb-4"style={{fontWeight:600}}>Hesel</h4>
              
              <h6 class="card-title mb-3" ><span className="shadows" style={{background:'#2962ff',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}>reactJS</span><span className="shadows" style={{background:'green',color:'#fff', borderRadius:'12px',padding:'5px', marginRight:'3px'}}> nodeJS</span><span className="shadows" style={{background:'#089c34',color:'#fff', borderRadius:'12px',padding:'5px',marginRight:'3px'}}> mongoDB</span><span className="shadows" style={{background:'orange',color:'#000', borderRadius:'12px',padding:'5px'}}> firebase</span></h6>
              <p class="card-text pb-3">
                This is a web app where user can choose a dish with full recipe by search.
              </p> </div> 
              <div className="col-sm-pb-5">
                <a target="_blank" href="https://github.com/apurbo248/Hungry_monoster" className="btn btn-dark me-2">github</a>
                <a target="_blank" href="https://apurbo248.github.io/Hungry_monoster/hungry.html" className="btn btn-dark">Live site</a>
             </div>        
            </div>
            </div>
            </div>
            </div>
            </div>
  </SwiperSlide>
</Swiper>
  </> 
}*/}
    </section>
  )
}

export default Project;