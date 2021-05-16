import React from 'react';
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
        <section className="container-fluid" style={{ background:"#000"}}>
            
           <div style={{width:'100%',margin:'auto'}}>
           <form className="contact-form pt-5 pb-5" onSubmit={sendEmail} style={{}}>
           
            <input  className="form-control mb-3 btn-outline-primary" type="text" name="name" placeholder="Name"  {...register("name", { required: true }) }required />
            {errors.name && <span color="red">This field is required</span>}
            
            <input  className="form-control mb-3 btn-outline-primary" type="email" name="email" placeholder="Email" {...register("email", { required: true })} required />
            {errors.email && <span color="red">This field is required</span>}
           
            <textarea  className="form-control mb-3 btn-outline-primary" name="message" placeholder="Message" {...register("message", { required: true })} required />
            {errors.message && <span color="red">This field is required</span>}
            <input  className="btn btn-primary btn-lg w-50" type="submit" value="Send" />
            </form>
           </div>
        </section>
    );
};

export default Connect;