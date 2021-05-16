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
        <section id="Skill" class=" pt-5 pb-5 container"style={{background:''}} >
          <Bounce top><h4 class="text-dark" style={{fontSize:'1.9rem',fontWeight:'600'}}>SKILLS</h4> </Bounce>
            
             <Bounce left> <div className="d-flex justify-content-center ">
                <hr className="text-dark  mb-3 mt-0" style={{width:"150px",height:"3px"}} /> 
                </div></Bounce>
              <Bounce right><div className="d-flex justify-content-center ">
               <hr className="text-dark mt-0" style={{width:"200px",height:"3px"}} />
               </div>
               </Bounce> 

            <div class="container p-4">
              <div class="row row-cols-3 row-cols-lg-6 g-2 g-lg-3 ">
                <div class="col " >
                <div class="p-3   skill"style={{width:'120px',borderRadius:'10px'}}>
                    <img className="image" src={html} alt=""style={{width:'60px'}}/>
                </div>
                </div>
                <div class="col">
                <div class="p-3   skill"style={{width:'120px'}}>
                    <img className="image"  src={css} alt=""style={{width:'60px'}}/>
                </div>
                </div>
                <div class="col">
                <div class="p-3   skill"style={{width:'120px',borderRadius:'10px'}}>
                    <img className="image" src={js} alt=""style={{width:'60px'}}/>
                </div>
                </div>
                <div class="col">
                <div class="p-3   skill d-flex justify-content-center align-items-center"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img className="image" src={mui} alt=""style={{width:'70px'}}/>
                    </div>
                </div>
                
                <div class="col">
                <div class="p-3   skill"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img className="image" src={sass} alt=""style={{width:'80px'}}/>
                </div>
                </div>
                <div class="col">
                <div class="p-3   skill"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img className="image" src={react} alt=""style={{width:'60px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3   skill d-flex justify-content-center align-items-center"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img className="image"  src={mongodb} alt=""style={{width:'110px'}}/>
                    </div>
                </div>
                
                <div class="col">
                <div class="p-3   skill d-flex justify-content-center align-items-center"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img className="image" src={git} alt=""style={{width:'80px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3   skill d-flex justify-content-center align-items-center"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img className="image" src={nodejs} alt=""style={{width:'80px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3   skill"style={{width:'120px'}}>
                    <img className="image" src={github} alt=""style={{width:'80px'}}/>
                    </div>
                </div>
                <div class="col ">
                <div class="p-3   skill d-flex justify-content-center align-items-center"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img className="image" src={bootstrap} alt=""style={{width:'110px'}}/>
                </div>
                </div>

                <div class="col">
                <div class="p-3   skill"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img className="image" src={firebase} alt=""style={{width:'50px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3   skill d-flex justify-content-center align-items-center"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img className="image" src={heroku} alt=""style={{width:'110px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3   skill"style={{width:'120px',borderRadius:'10px',height:'90px'}}>
                    <img className="image" src={vs} alt=""style={{width:'60px'}}/>
                    </div>
                </div>
               
            </div>
            </div>
        </section>
    );
};

export default Skills;