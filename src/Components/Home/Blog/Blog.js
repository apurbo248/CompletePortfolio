import React from 'react';
import Bounce from 'react-reveal/Bounce';
const Blog = () => {
    return (
        <div id="blog" className=" pt-5 pb-5" style={{background:'#060612'}} >
             <Bounce top><h4 class="" style={{color:'white'}}><span style={{borderLeft:"4px solid orange",paddingRight:"5px"}}></span>Blog</h4> </Bounce>
            
            <Bounce left> <div className="d-flex justify-content-center ">
               <hr className="text-white pb mb-3 mt-0" style={{width:"150px",height:"3px"}} /> 
               </div></Bounce>
             <Bounce right><div className="d-flex justify-content-center ">
              <hr className="text-white mt-0" style={{width:"200px",height:"3px"}} />
              </div>
              </Bounce> 
            <h3 className="text-white pb-5 pt-5">Comming Soon ....</h3>
        </div>
    );
};

export default Blog;