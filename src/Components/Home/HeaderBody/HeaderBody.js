import React from 'react';
import './HeaderBody.css';
import TextLoop from "react-text-loop";
import 'semantic-ui-css/semantic.min.css'
import { Button,Segment } from 'semantic-ui-react'

const HeaderBody = () => {
   
    return (
        <section class="headerbody mt-1" style={{height:'640px'}}> 
            
            <div class="container">
            <div class="row ">
            <div class="col-md-12 text-start ">
            <div class="pb-1" data-aos="fade-in" >
            <h6 style={{marginTop:'50px', marginBottom:'20px', fontFamily:'Rubik, sans-serif',fontWeight:'600',fontSize:'20px',color:'#7f00ff'}}>Hi There,I'm</h6>
            <h2 style={{marginTop:'-15px', marginBottom:'15px',fontFamily:'Rubik, sans-serif',fontWeight:'900',fontSize:'62px',color:'#404040',letterSpacing:'1px'}}> Apurbo Paul</h2>
           
            <h3 style={{marginTop:'-15px',fontSize:'45px',marginBottom:'50px',fontFamily:'Rubik, sans-serif',fontWeight:'900'}}>
            <TextLoop springConfig={{ stiffness: 900, damping: 50 }} >
            <div className=""style={{fontWeight:'500',fontFamily:'Pacifico, cursive'}}>
            <span style={{color:'#7f00ff'}}> web developer.</span>
            </div>
            <div className=""style={{fontWeight:'500',fontFamily:'Pacifico, cursive'}}>
            <span style={{color:'#7f00ff'}}> web designer.</span>
            </div>
            <div className=""style={{fontWeight:'500',fontFamily:'Pacifico, cursive'}}>
            <span style={{color:'#7f00ff'}}> programmer.</span>
            </div>
            </TextLoop>
            </h3>
            
            <div className="d-flex" style={{}}>
            <div>
            <Button style={{fontSize:'1.2rem',marginLeft:'-20px'}} href="#footer" color='violet'>Hire Me</Button>
            </div>
            <div>
            <Segment style={{background:'none',boxShadow:'none',border:'none',padding:'0px'}}> <Button inverted color='violet' style={{fontSize:'1.2rem'}} href="#project">Project</Button></Segment>
            </div>

            </div>
            </div>
            </div>
          </div>
        </div> 
        </section>
                   
    );
};

export default HeaderBody;