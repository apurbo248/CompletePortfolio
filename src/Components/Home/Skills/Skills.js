import React from 'react';
import './Skills.css';

import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
import bootstrap from '../../images/bs.png';
import sass from '../../images/sass.png';
import react from '../../images/react.png';
import firebase from '../../images/fire.png';
import git from '../../images/git.png';
import github from '../../images/github.png';
import heroku from '../../images/heroku.png'
import mongodb from '../../images/mdb.png';
import mui from '../../images/mui.png';
import nodejs from '../../images/nodejs.png';
import vs from '../../images/vs.png';
import Bounce from 'react-reveal/Bounce';
const Skills = () => {
    return (
        <section id="Skill" class="pt-5 pb-5"style={{background:'#060612'}} >
          <Bounce top><h4 class="" style={{color:'white'}}><span style={{borderLeft:"4px solid orange",paddingRight:"5px"}}></span>SKILLS</h4> </Bounce>
            
             <Bounce left> <div className="d-flex justify-content-center ">
                <hr className="text-white pb mb-3 mt-0" style={{width:"150px",height:"3px"}} /> 
                </div></Bounce>
              <Bounce right><div className="d-flex justify-content-center ">
               <hr className="text-white mt-0" style={{width:"200px",height:"3px"}} />
               </div>
               </Bounce> 

            <div class="container p-4">
              <div class="row row-cols-3 row-cols-lg-6 g-2 g-lg-3 ">
                <div class="col " >
                <div class="p-3 border bg-light skill"style={{width:'120px',borderRadius:'10px'}}>
                    <img src={html} alt=""style={{width:'40px'}}/>
                </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'120px',borderRadius:'10px'}}>
                    <img src={css} alt=""style={{width:'40px'}}/>
                </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'120px',borderRadius:'10px'}}>
                    <img src={js} alt=""style={{width:'40px'}}/>
                </div>
                </div>
                <div class="col ">
                <div class="p-3 border bg-light skill d-flex justify-content-center align-items-center"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img src={bootstrap} alt=""style={{width:'100px'}}/>
                </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img src={sass} alt=""style={{width:'60px'}}/>
                </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img src={react} alt=""style={{width:'60px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill d-flex justify-content-center align-items-center"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img src={mongodb} alt=""style={{width:'90px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill d-flex justify-content-center align-items-center"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img src={nodejs} alt=""style={{width:'60px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill d-flex justify-content-center align-items-center"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img src={git} alt=""style={{width:'60px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img src={github} alt=""style={{width:'50px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill d-flex justify-content-center align-items-center"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img src={mui} alt=""style={{width:'50px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill d-flex justify-content-center align-items-center"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img src={heroku} alt=""style={{width:'80px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img src={firebase} alt=""style={{width:'40px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img src={vs} alt=""style={{width:'50px'}}/>
                    </div>
                </div>
               
            </div>
            </div>
        </section>
    );
};

export default Skills;