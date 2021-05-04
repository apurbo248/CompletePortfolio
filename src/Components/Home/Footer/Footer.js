import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div id="footer" style={{backgroundColor:"#000"}}>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 p-5">
                   <div className="d-flex justify-content-start p-3 text-white">
                   <FontAwesomeIcon  icon={faMapMarkerAlt} size="1x"/> <span className="ps-3 ">Dhanmondi 32,Dhaka,Bangladesh</span>
                   </div>
                   <div className="d-flex justify-content-start p-3 text-white">
                   <FontAwesomeIcon  icon={faEnvelope} size="1x"/> <span className="ps-3">apurbopal248@gmail.com</span>
                   </div>
                   <div className="d-flex justify-content-start p-3 text-white">
                   <FontAwesomeIcon  icon={faPhoneAlt} size="1x"/> <span className="ps-3">+8801907043479</span>
                   </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center ">
                    <div className=" justify-content-start p-3 text-white">
                  <a href="https://web.facebook.com/apurbo.pal.980/" target="_blank"><FontAwesomeIcon icon={faFacebookF} size="3x"/> </a> 
                   </div>
                   <div className=" justify-content-start p-3 text-white">
                   <a href="https://www.linkedin.com/in/apurbo-kumar-paul-2620b7211/" target="_blank" ><FontAwesomeIcon icon={faLinkedinIn} size="3x"/> </a> 
                   </div>
                   <div className=" justify-content-start p-3 text-white">
                   <a href="https://web.facebook.com/apurbo.pal.980/" target="_blank" ><FontAwesomeIcon icon={faTwitter} size="3x"/> </a> 
                   </div>
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