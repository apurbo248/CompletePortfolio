import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons'
const Header = () => {
    return (
        <section style={{zIndex:'1',background:'#000'}} >
            <nav class="navbar navbar-expand-lg  navbar-dark  fixed-top" style={{background:"#131217"}}>
            <div class="container-fluid">
           
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link text-white fs-5 "  href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white fs-5" href="#about">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white fs-5" href="#Skill">Skill</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white fs-5" href="#project">Project</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white fs-5" href="#blog">Blog</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white fs-5" href="#footer">contact</a>
                </li>
            </ul>
            <a  class="navbar-brand me-auto fs-2" href="#">developer<span style={{color:"green"}}>TREE</span></a>
            <div class="">
            <a className="pe-3" href="https://web.facebook.com/apurbo.pal.980/" target="_blank"><FontAwesomeIcon icon={faFacebookF} size="1x"/> </a> 
            <a className="pe-3" href="https://www.linkedin.com/in/apurbo-kumar-paul-2620b7211/" target="_blank" ><FontAwesomeIcon icon={faLinkedinIn} size="1x"/> </a> 
            <a href="https://web.facebook.com/apurbo.pal.980/" target="_blank" ><FontAwesomeIcon icon={faTwitter} size="1x"/> </a> 
            </div>
            </div>
         </div>
        </nav>
        </section>
    );
};

export default Header;