import React from "react";
import "./HeaderBody.css";
import TextLoop from "react-text-loop";
import html from "../../images/html5.png";
import css from "../../images/css3.png";
import js from "../../images/js1.png";
import bootstrap from "../../images/boot.png";
import sass from "../../images/sass1.png";
import react from "../../images/react1.png";
import firebase from "../../images/fireb.png";
import git from "../../images/git1.png";
import github from "../../images/github.png";
import heroku from "../../images/heroku1.png";
import mongodb from "../../images/mongodb.png";
import materialui from "../../images/materialui.png";
import nodejs from "../../images/node.png";
import vs from "../../images/vscode.png";
import express from "../../images/express.png";

import Typical from "react-typical";
const HeaderBody = () => {
  return (
    <section class="bg-headerbg body-font ">
      <div class="container px-5 pt-10 pb-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="flex flex-col items-start text-start justify-center">
                <div class="container-fluid">
                  <div class="background">
                    <img class="cube" src={html} />
                    <img class="cube" src={css} />
                    <img class="cube" src={js} />
                    <img class="cube" src={bootstrap} />
                    <img class="cube" src={react} />
                    <img class="cube" src={mongodb} />
                    <img class="cube" src={nodejs} />

                    <img class="cube" src={express} />
                  </div>
                </div>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-white   mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-start ">Hello,i'm</p>
              <p class=" text-4xl text-mainBaseColor font-mono text-start mb-4">
                Apurbo Paul
              </p>
              <p class=" text-2xl text-gray-900 font-mono text-start mb-3">
                <div className="flex">
                  <span className="text-mainBaseColor">{"< "}</span>
                  <Typical
                    steps={["Web Developer", 8000, "Programmer", 8000]}
                    loop={Infinity}
                    wrapper="p"
                  />
                  <span className="text-mainBaseColor">{"/> "}</span>
                </div>
              </p>
              {/* <p class=" text-lg text-mainBaseColor font-mono text-start mb-4">
                Email :{" "}
                <span className="text-gray-800">apurbopal248@gmail.com</span>
              </p> */}
              <p class=" text-lg text-mainBaseColor font-mono text-start mb-4">
                MongoDB | ExpressJS | ReactJS | NodeJS 
              </p>
              <p class=" text-lg text-mainBaseColor font-mono text-start py-4">
                <span class="inline-flex ">
                  <a
                    class="text-gray-600 "
                    href="https://github.com/apurbo248"
                    target="_blank"
                  >
                    <svg
                      className="w-8 h-8 "
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.0002 0C10.747 0 0 11.0169 0 24.6076C0 35.4799 6.87679 44.7039 16.4128 47.9577C17.6123 48.1855 18.0526 47.4239 18.0526 46.7739C18.0526 46.1872 18.0304 44.2487 18.02 42.1925C11.3431 43.6811 9.93424 39.2891 9.93424 39.2891C8.84249 36.4448 7.26945 35.6885 7.26945 35.6885C5.09192 34.1613 7.43359 34.1926 7.43359 34.1926C9.84363 34.3662 11.1126 36.7285 11.1126 36.7285C13.2532 40.4904 16.7272 39.4028 18.0967 38.7741C18.3121 37.1836 18.9341 36.0981 19.6205 35.4836C14.2897 34.8613 8.6859 32.7513 8.6859 23.3224C8.6859 20.6358 9.62345 18.4406 11.1587 16.7174C10.9095 16.0976 10.088 13.5947 11.3912 10.2052C11.3912 10.2052 13.4066 9.54387 17.993 12.7276C19.9074 12.1824 21.9606 11.9089 24.0002 11.8996C26.0398 11.9089 28.0946 12.1824 30.0126 12.7276C34.5934 9.54387 36.606 10.2052 36.606 10.2052C37.9123 13.5947 37.0905 16.0976 36.8413 16.7174C38.3801 18.4406 39.3113 20.6358 39.3113 23.3224C39.3113 32.7738 33.6968 34.8548 28.3525 35.464C29.2133 36.2276 29.9804 37.7252 29.9804 40.021C29.9804 43.3135 29.9526 45.9634 29.9526 46.7739C29.9526 47.4288 30.3846 48.1961 31.6011 47.9544C41.132 44.697 48 35.4762 48 24.6076C48 11.0169 37.2546 0 24.0002 0Z"
                        fill="#161514"
                      />
                      <path
                        d="M9.16085 35.1623C9.10809 35.2833 8.92085 35.3196 8.75027 35.2365C8.57652 35.157 8.47893 34.992 8.53526 34.8706C8.58683 34.7459 8.77447 34.7112 8.94782 34.7947C9.12197 34.8742 9.22115 35.0408 9.16085 35.1623Z"
                        fill="#161514"
                      />
                      <path
                        d="M10.1312 36.263C10.0169 36.3707 9.79358 36.3207 9.64205 36.1504C9.48535 35.9806 9.456 35.7534 9.57183 35.6441C9.68965 35.5363 9.90624 35.5868 10.0633 35.7566C10.22 35.9285 10.2506 36.1541 10.1312 36.263Z"
                        fill="#161514"
                      />
                      <path
                        d="M11.0757 37.6663C10.9289 37.77 10.6889 37.6728 10.5406 37.4561C10.3938 37.2394 10.3938 36.9796 10.5437 36.8755C10.6925 36.7714 10.9289 36.865 11.0793 37.0801C11.2257 37.3004 11.2257 37.5602 11.0757 37.6663Z"
                        fill="#161514"
                      />
                      <path
                        d="M12.3697 39.0219C12.2384 39.1692 11.9588 39.1297 11.7541 38.9287C11.5446 38.7322 11.4863 38.4534 11.618 38.3062C11.7509 38.1585 12.0321 38.2001 12.2384 38.3994C12.4463 38.5955 12.5098 38.8763 12.3697 39.0219Z"
                        fill="#161514"
                      />
                      <path
                        d="M14.1548 39.8091C14.0969 40 13.8276 40.0867 13.5562 40.0056C13.2853 39.9221 13.108 39.6986 13.1627 39.5057C13.219 39.3137 13.4896 39.2233 13.7629 39.31C14.0334 39.3932 14.2112 39.6151 14.1548 39.8091Z"
                        fill="#161514"
                      />
                      <path
                        d="M16.1153 39.9552C16.122 40.1561 15.892 40.3228 15.6071 40.3264C15.3207 40.3329 15.089 40.1703 15.0859 39.9726C15.0859 39.7696 15.3108 39.6046 15.5972 39.5998C15.882 39.5941 16.1153 39.7555 16.1153 39.9552Z"
                        fill="#161514"
                      />
                      <path
                        d="M17.9397 39.6392C17.9738 39.8353 17.7759 40.0366 17.493 40.0903C17.2149 40.1419 16.9575 40.0209 16.9222 39.8264C16.8877 39.6255 17.0892 39.4241 17.3669 39.3721C17.6501 39.3221 17.9036 39.4399 17.9397 39.6392Z"
                        fill="#161514"
                      />
                    </svg>
                  </a>
                  <a
                    class="ml-4 "
                    href="https://www.linkedin.com/in/apurbo-kumar-paul-2620b7211"
                    target="_blank"
                  >
                    <svg
                      className="w-8 h-8  "
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </span>
              </p>
              <p class="   font-mono text-start mb-">
                <a
                  class=" text-2xl text-mainBaseColor font-mono border-1  border-mainBaseColor  py-2 px-8 rounded transition duration-300 ease-out hover:bg-mainBaseColor hover:text-white "
                  href="https://drive.google.com/uc?export=download&id=1sH96zJoSUAvxBgT5-sgfAG7FcdOqjDxX"
                >
                  Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderBody;
