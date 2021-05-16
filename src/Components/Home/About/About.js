import React from 'react';
import img from '../../images/profile.jpg';
const About = () => {
    return (
        <section id="about" className="pt-5 pb-5 container" style={{background:''}}>
            <div style={{ marginTop:'-100px'}} >
           
            <div className="d-flex justify-content-center align-items-center ">
            <div className="row w-100 ">
            <div class="card mb-3 m-auto shadow" style={{maxWidth:'740px'}}>
            <div class="row g-0">
            <div class="col-sm-pt-5 col-md-8 ">
            <div class="card-body text-start" >
                <h4 class="mb-4">About Me</h4>
             
               {/* <hr class="w-50 mt-0"/> */}
              
                <h5 class="card-title" style={{fontWeight:600}}> This is Apurbo Paul</h5>
                <p class="card-text">I am a junior web developer who very much dedicated in front end development and love to take
                new challenges every single day.I am always curious for learning something new technology and
                to achieve my goal by hook or by crook</p>
                
            </div>
            </div>
            <div class="col-md-4 p-0 ">
            <img class="rounded" src={img} alt="..." style={{height:'270px',width:'248px'}}/>
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