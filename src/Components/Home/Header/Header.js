import React from 'react';
import { Button } from 'semantic-ui-react';
const Header = () => {
    return (
        <section style={{marginTop:'-20px'}} >
            <nav class=" container navbar navbar-expand-lg navbar-light  fixed-top" style={{background:'#fff',marginTop:'0px',borderRadius:'15px',padding:'10px'}}>
            <div class="container-fluid" >
           
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{background:'#7f00ff',border:'none',borderRadius:'15px',boxShadow:'none',width:'70px',padding:'10px'}}>
            <span class="navbar-toggler-icon" ></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" >
                <a class="nav-link  fs-5 " style={{color:'#7f00ff'}} href="#" >Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-dark fs-5" href="#about">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-dark fs-5" href="#Skill">Skill</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-dark fs-5" href="#project">Project</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-dark fs-5" href="#blog">Blog</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-dark fs-5" href="#footer">contact</a>
                </li>
            </ul>
            {/* <a  class="navbar-brand me-auto fs-2" href="#">developer<span style={{color:"green"}}>TREE</span></a> */}
            <div class="" style={{marginRight:'-50px'}}>
             <Button  color='violet' style={{fontSize:'1.4rem',padding:'15px'}} href="https://drive.google.com/uc?export=download&id=1sH96zJoSUAvxBgT5-sgfAG7FcdOqjDxX">RESUME</Button>
            </div>
            </div>
         </div>
        </nav>
        </section>
    );
};

export default Header;