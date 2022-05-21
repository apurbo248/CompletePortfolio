import ReactDOM from "react-dom";
import "./Project.css";
import Bounce from "react-reveal/Bounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import tshirt from "../../images/tshirt.png";
import ride from "../../images/ride.png";
import hungry from "../../images/hungry.png";
import car from "../../images/car.png";
import slider from "../../images/slider.png";
import eshop from "../../images/eshop.png";
import React, { useRef, useState } from "react";
const projects = [
  {
    image: eshop,
    name: "e-SHOP",
    technologies: ["reactjs", "nodejs", "mongodb", "expressJS"],
    description:
      " This is a web app where admin can manage products,users,orders and reviews.User can create order,see own profile with orderlist and transaction history",
    codeLink: "https://github.com/apurbo248/e-shop-client",
    liveSiteLink: "https://bdeshop.netlify.app/",
  },

  {
    image: slider,
    name: "Amazing slider",
    technologies: ["reactjs", "Bootstrap", "javascript"],
    description:
      " This is a web app where admin can manage products and order status and users can book order,give review,see own order list.",
    codeLink: "https://github.com/apurbo248/fancy-slider",
    liveSiteLink: "https://apurbo248.github.io/fancy-slider",
  },
  {
    image: car,
    name: "Car Servicing Center",
    technologies: ["reactjs", "nodejs", "mongodb", "firebase"],
    description:
      " This is a web app where admin can manage products and order status and users can book order,give review,see own order list.",
    codeLink: "https://github.com/apurbo248/Car-Servicing-Center",
    liveSiteLink: "https://jovial-albattani-63e2f3.netlify.app/",
  },
];
console.log(projects);
const Project = () => {
  return (
    <div class="mx-auto  px-6 xl:px-0 md:py-12 md:mt-2">
      <div class="flex flex-col container ">
        <div class="flex flex-col justify-center bg-mainBaseColor pt-12 pb-40 rounded">
          <div class="">
            <div class="relative">
              <div class="  sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-center items-start">
                <p class="text-3xl sm:text-3xl  leading-9 text-white font-mono">
                  Projects
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container   -mt-28 grid lg:grid-cols-3 gap-x-8 gap-y-12 items-center py-4 rounded md:px-24">
          {projects.map((project) => (
            <div class=" overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
              <div class="rounded-xl z-30 opacity-0 group-hover:bg-headerbg group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-44 text-white flex items-end">
                <div>
                  <div class="  pb-20 px-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                    <div class="font-bold text-mainBaseColor font-mono">
                      {project.name}
                    </div>

                    <div class="opacity-100 text-sm text-dark">
                      <div class="grid mt-4 my-auto">
                        <div class="">
                          <a
                            href="#"
                            class="inline-block rounded-full text-white 
                            bg-red-400 hover:bg-red-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                          >
                            {project.technologies[0]}
                          </a>
                          <a
                            href="#"
                            class="inline-block rounded-full text-white
                            bg-yellow-500 hover:bg-yellow-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                          >
                            {project.technologies[1]}
                          </a>
                          <a
                            href="#"
                            class="inline-block rounded-full text-white 
                            bg-green-400 hover:bg-green-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                          >
                            {project.technologies[2]}
                          </a>

                          {project.technologies[3] ? (
                            <a
                              href="#"
                              class="inline-block rounded-full text-white 
                            bg-blue-400 hover:bg-blue-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                            >
                              {project.technologies[3]}
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="opacity-100 text-sm text-dark">
                      {project.description}
                    </div>
                    <div class="opacity-100 text-sm text-dark">
                      <div class="flex flex-row bottom- space-x-10   absolute opacity-0 group-hover:opacity-100 transition duration-500">
                        <div class="flex ">
                          <a
                            href={project.codeLink}
                            target="_blank"
                            class="pr-10   text-center "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              fill="#c3073f"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                          <a
                            href={project.liveSiteLink}
                            target="_blank"
                            class="   text-center "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="#c3073f"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 3.2c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20v-11.8zm-2 9.8h-16v-9h16v9zm2 3h-20c-.197.372-2 4.582-2 4.998 0 .522.418 1.002 1.002 1.002h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zm-12.229 5l.467-1h3.523l.467 1h-4.457z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-full ">
                <img
                  class="object-center object-cover w-full  h-64"
                  src={project.image}
                  alt="profile"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
