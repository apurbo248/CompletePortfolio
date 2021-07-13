import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import Connect from '../Connect/Connect';
import Bounce from 'react-reveal/Bounce';
const Footer = () => {
    return (
        <div id="footer" className="pt-5" style={{background:'#000'}}>
            <h2  class="mb-2 text-white mt-2" style={{marginBottom:'20px', fontFamily:'Rubik, sans-serif',fontWeight:'600',fontSize:'40px',color:'#000',textTransform:'uppercase'}}>get in <span style={{color:'#7f00ff'}}>touch</span></h2>
             <div className="lines mb-5">
                <div className="diamond">
                </div>
            </div>
            <div className="text-white " style={{}} >
               <div className="container">
               <div className="row ">
                    <div className="col-12 col-lg-4 p-5 text-start">
                    <h3 style={{fontSize:'26px',fontWeight:'600',textTransform:'uppercase',paddingBottom:'1rem',lineHeight:'1.2'}}>Don't be shy !</h3>
                    <p className="mb-4" style={{letterSpacing:'.2px'}}>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <p className="d-flex" style={{ lineHeight:'21px',paddinTop:'5px',position:'relative'}}>
                        <div className="pe-3 pt-2">
                        <i style={{left: '0',fontSize:'33px',color:'#7f00ff'}}><FontAwesomeIcon icon={faEnvelopeOpen} /></i>
                        </div>
                        <div>
                        <span class="d-block" style={{fontWeight:'400',fontSize:'15px',opacity:'.8'}}>MAIL ME</span>apurbopal248@gmail.com
                        </div>
                    </p>
                    
                    <div className="d-flex">
                    <div className=" social-media d-flex justify-content-center align-items-center me-3 mt-3 text-white" >
                  <a  href="https://web.facebook.com/apurbo.pal.980/" target="_blank"><FontAwesomeIcon icon={faFacebookF}  style={{color:'#fff'}}/> </a> 
                   </div>
                   <div className=" social-media d-flex justify-content-center align-items-center me-3 mt-3 text-white"   >
                <a  href="https://www.linkedin.com/in/apurbo-kumar-paul-2620b7211/" target="_blank" ><FontAwesomeIcon icon={faLinkedinIn}  style={{color:'#fff'}}/> </a> 
                   </div>
                   <div className=" social-media d-flex justify-content-center align-items-center me-3 mt-3 text-white"   >
                   <a  href="https://web.facebook.com/apurbo.pal.980/" target="_blank" ><FontAwesomeIcon icon={faTwitter}  style={{color:'#fff'}}/> </a> 
                   </div>
                    </div>

                   
                    
                
                   </div>
                   <div className="col-12 col-lg-8">
                       <Connect></Connect>
                   </div>
                   <div className="d-flex justify-content-center pt-4 pb-3 ">
                     &copy;Made with <p>&#128151;</p> by APURBO
            </div>
                </div>
               </div>
            </div>
           
        </div>
    );
};

export default Footer;