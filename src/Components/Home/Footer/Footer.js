import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import Connect from '../Connect/Connect';
import Bounce from 'react-reveal/Bounce';
const Footer = () => {
    return (
        <div id="footer" className="container-fluid" style={{backgroundColor:"#000"}}>
            <Bounce top><h4 class="pt-5" style={{fontSize:'1.9rem',fontWeight:'600',color:'#fff'}}>Always connect with Me</h4> </Bounce>
            
            <Bounce left> <div className="d-flex justify-content-center ">
               <hr className="mb-3 mt-0" style={{width:"150px",height:"3px",color:'#fff'}} /> 
               </div></Bounce>
             <Bounce right><div className="d-flex justify-content-center ">
              <hr className="mt-0" style={{width:"200px",height:"3px",color:"#fff"}} />
              </div>
              </Bounce> 
            <div className="">
                <div className="row ">
                    <div className="col-md-6 p-5">
                   <div className="d-flex justify-content-start p-3 text-white">
                   <FontAwesomeIcon  icon={faMapMarkerAlt} size=""/> <span className="ps-3 ">Dhanmondi 32,Dhaka,Bangladesh</span>
                   </div>
                   <div className="d-flex justify-content-start p-3 text-white">
                   <FontAwesomeIcon  icon={faEnvelope} size=""/> <span className="ps-3">apurbopal248@gmail.com</span>
                   </div>
                   <div className="d-flex justify-content-start p-3 text-white">
                   <FontAwesomeIcon  icon={faPhoneAlt} size=""/> <span className="ps-3">+8801907043479</span>
                   </div>
                   

                   
                    <div className="d-flex">
                    <div className=" justify-content-start p-3 text-white">
                  <a href="https://web.facebook.com/apurbo.pal.980/" target="_blank"><FontAwesomeIcon icon={faFacebookF} size="2x"/> </a> 
                   </div>
                   <div className=" justify-content-start p-3 text-white">
                   <a href="https://www.linkedin.com/in/apurbo-kumar-paul-2620b7211/" target="_blank" ><FontAwesomeIcon icon={faLinkedinIn} size="2x"/> </a> 
                   </div>
                   <div className=" justify-content-start p-3 text-white">
                   <a href="https://web.facebook.com/apurbo.pal.980/" target="_blank" ><FontAwesomeIcon icon={faTwitter} size="2x"/> </a> 
                   </div>
                    </div>
                
                   </div>
                   <div className="col-md-6">
                       <Connect></Connect>
                   </div>
                </div>
            </div>
            <hr/>
            <div className="d-flex justify-content-center pb-5 text-white">
                 &copy;All right reserved by APURBO
            </div>
        </div>
    );
};

export default Footer;