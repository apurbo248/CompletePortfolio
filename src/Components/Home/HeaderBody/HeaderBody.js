import React from 'react';

import './HeaderBody.css';
const HeaderBody = () => {
    // new TypeIt("#type1",{ 
    //     speed:120,
    //     loop:true,
    //     waitUntilVisible:true
    // })
    // .type("Web development",{delay:400})
    // .pause(500)
    // .delete(9)
    // .type("Web design",{delay:400})
    // .pause(500)
    // .delete(9)
    // .go()
    return (
        <section class="headerbody "> 
            <div class="container">
            <div class="row gx-5 d-flex justify-content-center ">
            <div class="col-md-12 ">
            <div class="pb-5" data-aos="fade-in">
            <h1 style={{marginBottom:'20px',fontWeight:'600',fontSize:'50px'}}>Wellcome To My Website</h1>
            <p style={{fontSize:'25px',marginBottom:'20px',marginLeft:'-10px',color:'#ff4500'}}>Web Developer <span class="text-white">|</span> Web Designer <span class="text-white">|</span> Programmer 
            </p>
            <button class="button btn">Hire Me</button>
            <a class="btn btn-success" href="https://drive.google.com/uc?export=download&id=1sH96zJoSUAvxBgT5-sgfAG7FcdOqjDxX">Resume</a>
            </div>
            </div>
          </div>
        </div> 
        </section>
                   
    );
};

export default HeaderBody;