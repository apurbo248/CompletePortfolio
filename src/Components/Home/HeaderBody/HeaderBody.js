import React from 'react';

import './HeaderBody.css';
const HeaderBody = () => {
   
    return (
        <section class="headerbody mt-5"> 
            <div class="container">
            <div class="row gx-5 d-flex justify-content-center ">
            <div class="col-md-12 ">
            <div class="pb-5" data-aos="fade-in">
            <h1 style={{marginBottom:'20px',fontWeight:'600',fontSize:'50px'}}>Wellcome To My Website</h1>
            <p style={{fontSize:'25px',marginBottom:'20px',marginLeft:'-10px',color:'#1c99fd'}}>Web Developer <span class="text-white">|</span> Web Designer <span class="text-white">|</span> Programmer 
            </p>
            <a class="button btn me-2 mb-2" href="#footer">Hire Me</a>
            <a class="button btn" href="https://drive.google.com/uc?export=download&id=1sH96zJoSUAvxBgT5-sgfAG7FcdOqjDxX">Resume</a>
            </div>
            </div>
          </div>
        </div> 
        </section>
                   
    );
};

export default HeaderBody;