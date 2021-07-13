import React from 'react';
import "./Blog.css";
import { Card, Image, Reveal } from 'semantic-ui-react'
import js from "../../images/js-story.jpeg";
import block from "../../images/block.png";
import r from "../../images/r.png";

const Blog = () => {
    return (
        <div id="blog" className=" pt-5 pb-5" style={{background:'#f6f6f6',fontFamily:'Rubik, sans-serif'}} >
              <h2  class="mb-2" style={{marginBottom:'20px', fontFamily:'Rubik, sans-serif',fontWeight:'600',fontSize:'40px',color:'#000',textTransform:'uppercase',marginTop:'50px'}}>my <span style={{color:'#7f00ff'}}>blog</span></h2>
             <div className="lines mb-5">
                <div className="diamond">
                </div>
            </div>

            <div className="container pt-2 mb-5">
          <div className="row">
              <div className="col-md-4 mt-2">
             <div className="card" style={{width:'350px',height:'350px',borderRadius:'5px'}}>
             <Reveal animated='move'>
                    <Reveal.Content visible>
                    <Image style={{height:'56vh',maxWidth:'100%',borderRadius:'5px'}} src={js} size='large' />
                    </Reveal.Content>
                    <Reveal.Content hidden style={{paddingTop:'20%'}}> 
                    <Card.Content className="text-start p-2">
                    <h2 style={{fontSize:'26px',color:'#7f00ff'}}><Card.Header>Magic of Array — Javascript.</Card.Header></h2>
                   
                    <Card.Description  className="pt-2 mb-4" style={{fontSize:'18px',lineHeight:'1.2'}}>
                    Javascript is lightweigh and the most powerful and flexible programming languages of the web...
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                      <Card.Meta className="p-4 d-flex">
                        <div className='text-start'>by APURBO</div>
                       
                        <div className='ms-auto'><a href="https://apurbopal248.medium.com/magic-of-array-javascript-1e574859f771" target="_blank"> Read More... </a></div>
                        </Card.Meta>
                      </Card.Content>
                    </Reveal.Content>
                </Reveal>
             </div>
              </div>
              <div className="col-md-4 mt-2">
             <div className="card" style={{width:'350px',height:'350px',borderRadius:'5px'}}>
             <Reveal animated='move up'>
                    <Reveal.Content visible>
                    <Image style={{height:'56vh',maxWidth:'100%',borderRadius:'5px'}} src={block} size='large' />
                    </Reveal.Content>
                    <Reveal.Content hidden style={{paddingTop:'20%'}}> 
                    <Card.Content className="text-start p-2">
                    <h2 style={{fontSize:'26px',color:'#7f00ff'}}><Card.Header>Take a glance of ES6 Block Bindings</Card.Header></h2>
                   
                    <Card.Description  className="pt-2 mb-4" style={{fontSize:'18px',lineHeight:'1.2'}}>
                    ES6 stands for ECMAScript 6.ES6 is a significant update to the JavaScript programming language...
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                      <Card.Meta className="p-4 d-flex">
                        <div className='text-start'>by APURBO</div>
                       
                        <div className='ms-auto'><a href="https://apurbopal248.medium.com/take-a-glance-of-es6-block-bindings-df4613503db7" target="_blank"> Read More... </a></div>
                        </Card.Meta>
                      </Card.Content>
                    </Reveal.Content>
                </Reveal>
             </div>
              </div>
              <div className="col-md-4 mt-2">
             <div className="card" style={{width:'350px',height:'350px',borderRadius:'5px'}}>
             <Reveal animated='move right'>
                    <Reveal.Content visible>
                    <Image style={{height:'56vh',maxWidth:'100%',borderRadius:'5px'}} src={r} size='large' />
                    </Reveal.Content>
                    <Reveal.Content hidden style={{paddingTop:'20%'}}> 
                    <Card.Content className="text-start p-2">
                    <h2 style={{fontSize:'26px',color:'#7f00ff'}}><Card.Header>All about React</Card.Header></h2>
                   
                    <Card.Description  className="pt-2 mb-4" style={{fontSize:'18px',lineHeight:'1.2'}}>
                    React is a JavaScript “library”.Example of react...
                      </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                      <Card.Meta className="p-4 d-flex">
                        <div className='text-start'>by APURBO</div>
                       
                        <div className='ms-auto'><a href="https://apurbopal248.medium.com/all-about-react-80ee93426466" target="_blank"> Read More... </a></div>
                        </Card.Meta>
                      </Card.Content>
                    </Reveal.Content>
                </Reveal>
             </div>
              </div>
          </div>
            </div>
         </div>

           

     
    );
};

export default Blog;