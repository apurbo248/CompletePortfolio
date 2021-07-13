import React from 'react';
import './Connect.css'
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import Bounce from 'react-reveal/Bounce';
const Connect = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_9bjy2s9', 'template_mrjquj6', e.target, 'user_BplIDuKipl8QO5DgBQyoN')
          .then((result) => {
             alert("Message sent successfully")
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
      
    return (
        <section className="" style={{ background:""}}>
            
         
           <form className="contact-form pt-5 pb-5" onSubmit={sendEmail} style={{}}>
           <div class="row d-flex" style={{}}>
            <div className=" col-12 col-md-6 ">
            <input  className="form-control mb-3 " type="text" name="name" placeholder="YOUR NAME"  {...register("name", { required: true }) }required />
            {errors.name && <span color="red">This field is required</span>}
            </div>
            <div className=" col-12 col-md-6">
            <input  className="form-control mb-3 " type="email" name="email" placeholder="YOUR EMAIL" {...register("email", { required: true })} required />
            {errors.email && <span color="red">This field is required</span>}
           
            </div>
            <div className="col-12">
            <textarea  className="textarea form-control mb-3 " name="message" placeholder="Message" {...register("YOUR MESSAGE", { required: true })} required />
            {errors.message && <span color="red">This field is required</span>}
            <button  className="button d-flex justify-content-center align-items-center" type="submit" value="Send"> <span>send Message</span></button>
            </div>
           
            </div>
            </form>
          
        </section>
    );
};

export default Connect;