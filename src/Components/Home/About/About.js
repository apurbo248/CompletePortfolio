import React from 'react';
import "./About.css";
import 'semantic-ui-css/semantic.min.css'
import img from '../../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <section id="about" className="pt-5 pb-5 container" style={{background:''}}>
            <div style={{ marginTop:'40px'}} >
            <h2  class="mb-2" style={{marginBottom:'20px', fontFamily:'Rubik, sans-serif',fontWeight:'600',fontSize:'40px',color:'#000',textTransform:'uppercase'}}>About <span style={{color:'#7f00ff'}}>Me</span></h2>
            <div className="lines mb-5">
                <div className="diamond">
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center ">
            <div className="row w-100 ">
            <div class=" mb-3 m-auto " style={{}}>
            <div class="row g-0">
            <div class="col-sm-pt-5 col-md-8 ">
            <div class="card-body " style={{fontFamily:'Rubik, sans-serif'}}>
               
                <h5 class="text-start" style={{fontWeight:800,fontSize:'20px',marginBottom:'1.2rem'}}> <span style={{borderLeft:'3px solid #7f00ff',marginRight:'3px'}}></span> Hello, I'm Apurbo Paul, Based in Bangladesh</h5>
               <div style={{fontSize:'15px',marginBottom:'15px',textAlign:'justify',fontWeight:'400',letterSpacing:'.5px'}}>
               <p class="card-text" >I'm a professional and passionate Full Stack Developer focused on efficiency and constant learning. Courteous and enthusiastic, I am interested in Web Applications and everything in its orbit. I fascinated by web programming and building websites. I am gaining knowledge and ideas working in this area. I am keen to gain more experience in the field. My goal is to build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.</p>
                <p >
                For this reason, I'm looking for a company willing to offer me a placement among its developers. In return, I would offer my full commitment, and be a pleasant and friendly addition to a team.I always want to learn more, do more, and be more. I’m also a firm believer that we should never settle. I’m hard working, super curious, passionate, committed, and also a fast learner!
                </p>
                <p >
                Become a world's no 1 full-stack web developer. That's why I am learning and mastering web development. I will not stop until I become the Web Development Hero.</p>
               </div>
                
            </div>
            </div>
            <div class="col-sm-pt-5 col-md-4 p-0 " style={{border: '1px solid #7f00ff',padding: '6px',borderRadius: '5px'}}>
            <div className="d-flex justify-content-center ">
           <div style={{background:'#000',width:'60%',height:'40px',borderRadius: '50px',marginTop:'-20px'}}>
           <div className="d-flex justify-content-center align-items-center">
                    <div className=" social-media d-flex justify-content-center align-items-center me-3  text-white" >
                  <a  href="https://web.facebook.com/apurbo.pal.980/" target="_blank"><FontAwesomeIcon icon={faFacebookF}  style={{color:'#fff'}}/> </a> 
                   </div>
                   <div className=" social-media d-flex justify-content-center align-items-center me-3  text-white"   >
                <a  href="https://www.linkedin.com/in/apurbo-kumar-paul-2620b7211/" target="_blank" ><FontAwesomeIcon icon={faLinkedinIn}  style={{color:'#fff'}}/> </a> 
                   </div>
                   <div className=" social-media d-flex justify-content-center align-items-center me-3  text-white"   >
                   <a  href="https://web.facebook.com/apurbo.pal.980/" target="_blank" ><FontAwesomeIcon icon={faTwitter}  style={{color:'#fff'}}/> </a> 
                   </div>
                    </div>
           </div>
           
        </div>
            <img class="" src={img} alt="..." style={{height:'400px',maxWidth:'100%',padding: '10px'}}/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </section>
    );
};

export default About;