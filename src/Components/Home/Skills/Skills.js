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

const Skills = () => {
    return (
        <section id="Skill" class="pt-5 pb-5"style={{background:'#060612'}} >
            <h2 class="pb-5 text-white">SKILLS</h2>
            
            <div class="container">
              <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 ">
                <div class="col " >
                <div class="p-3 border bg-light skill"style={{width:'150px',borderRadius:'10px'}}>
                    <img src={html} alt=""style={{width:'60px'}}/>
                </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'150px',borderRadius:'10px'}}>
                    <img src={css} alt=""style={{width:'60px'}}/>
                </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'150px',borderRadius:'10px'}}>
                    <img src={js} alt=""style={{width:'60px'}}/>
                </div>
                </div>
                <div class="col ">
                <div class="p-3 border bg-light skill d-flex justify-content-center align-items-center"style={{width:'150px',borderRadius:'10px',height:'118px'}}>
                    <img src={bootstrap} alt=""style={{width:'130px'}}/>
                </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'150px',borderRadius:'10px',height:'118px'}}>
                    <img src={sass} alt=""style={{width:'90px'}}/>
                </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'150px',borderRadius:'10px',height:'118px'}}>
                    <img src={react} alt=""style={{width:'90px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill d-flex justify-content-center align-items-center"style={{width:'150px',borderRadius:'10px',height:'118px'}}>
                    <img src={mongodb} alt=""style={{width:'90px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill d-flex justify-content-center align-items-center"style={{width:'150px',borderRadius:'10px',height:'118px'}}>
                    <img src={nodejs} alt=""style={{width:'90px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill d-flex justify-content-center align-items-center"style={{width:'150px',borderRadius:'10px',height:'118px'}}>
                    <img src={git} alt=""style={{width:'90px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'150px',borderRadius:'10px',height:'118px'}}>
                    <img src={github} alt=""style={{width:'90px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'150px',borderRadius:'10px',height:'118px'}}>
                    <img src={mui} alt=""style={{width:'90px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill d-flex justify-content-center align-items-center"style={{width:'150px',borderRadius:'10px',height:'118px'}}>
                    <img src={heroku} alt=""style={{width:'90px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'150px',borderRadius:'10px',height:'118px'}}>
                    <img src={firebase} alt=""style={{width:'72px'}}/>
                    </div>
                </div>
                <div class="col">
                <div class="p-3 border bg-light skill"style={{width:'150px',borderRadius:'10px',height:'118px'}}>
                    <img src={vs} alt=""style={{width:'90px'}}/>
                    </div>
                </div>
               
            </div>
            </div>
        </section>
    );
};

export default Skills;