import React from "react";
import "./Connect.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { useRef } from "react";
const Connect = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
const form = useRef();

  const sendEmail=(e)=> {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9bjy2s9",
        "template_mrjquj6",
        e.target,
        "user_BplIDuKipl8QO5DgBQyoN"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your email send successfully ");
        },
        (error) => {
          console.log(error.text);
          toast.error("Email send faiiled !",error);
        }
      );
    e.target.reset();
  }

  return (
    <section class=" body-font relative bg-headerbg">
      <div class="container px-5 pt-24 mx-auto pb-10 ">
        <form
          ref={form}
          onSubmit={sendEmail}
          class="lg:w-2/4 md:w-2/4  bg- rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg mx-auto"
        >
          <h2 class="text-gray-900 text-2xl mb-2 font-medium title-font text-center">
            Contact Me
          </h2>
          <hr class="text-gray-400" />
          <div class="flex pt-4">
            <div class="relative ">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
               
                id="name"
                required
                name="name"
                class="w-full   rounded border border-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative ml-4 ">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
               
                id="email"
                required
                name="email"
                class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              required
              placeholder="Type your message here..."
              name="message"
              class="w-full   rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32  outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            type="submit"
            class="text-white  bg-mainBaseColor border-0 py-2 px-6 focus:outline-none    rounded text-lg "
          >
            send
          </button>
        </form>
      </div>
      <Toaster/>
    </section>

    // {/*
    //    // <section classNameName="">
    // //   <form classNameName="contact-form mt-20 pb-5 " onSubmit={sendEmail}>
    // //     <div className="row d-flex">
    // //       <div classNameName=" col-12 col-md-6 ">
    // //         <input
    // //           classNameName="form-control mb-3 "
    // //           type="text"
    // //           name="name"
    // //           placeholder="YOUR NAME"
    // //           {...register("name", { required: true })}
    // //           required
    // //         />
    // //         {errors.name && <span color="red">This field is required</span>}
    // //       </div>
    // //       <div classNameName=" col-12 col-md-6">
    // //         <input
    // //           classNameName="form-control mb-3 "
    // //           type="email"
    // //           name="email"
    // //           placeholder="YOUR EMAIL"
    // //           {...register("email", { required: true })}
    // //           required
    // //         />
    // //         {errors.email && <span color="red">This field is required</span>}
    // //       </div>
    // //       <div classNameName="col-12">
    // //         <textarea
    // //           classNameName="textarea form-control mb-3 "
    // //           name="message"
    // //           placeholder="Message"
    // //           {...register("YOUR MESSAGE", { required: true })}
    // //           required
    // //         />
    // //         {errors.message && <span color="red">This field is required</span>}
    // //         <button
    // //           classNameName="button d-flex justify-content-center align-items-center"
    // //           type="submit"
    // //           value="Send"
    // //         >
    // //           <span>send Message</span>
    // //         </button>
    // //       </div>
    // //     </div>
    // //   </form>
    // // </section> */}
  );
};

export default Connect;
