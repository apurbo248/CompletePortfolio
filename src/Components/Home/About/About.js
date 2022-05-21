import React from "react";
import "./About.css";

import img from "../../images/profile.jpg";

const About = () => {
  return (
    <div class="bg-headerbg">
      <div class="container mx-auto md:mt-5 pt-12 pb-4 md:pb-0 md:pt-9">
        <div class="md:flex no-wrap md:-mx-2 ">
          <div class="w-full md:w-3/12 md:mx-2 pb-3 md:pb-1">
            <div class=" md:p-3 border-t-4  rounded-lg ">
              <div class="image overflow-hidden  bg- rounded-full rounded-br-lg mb-2">
                <img
                  class="h-72 w-full mx-auto p-1 border-2 border-mainBaseColor rounded-full rounded-br-lg"
                  src={img}
                  alt=""
                />
              </div>

              <div className="bg- pl-4 py-1 rounded-lg md:pl-12 md:py-2 md:border-2 md:border-mainBaseColor shadow md:rounded-full md:rounded-tr-lg">
                <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                  Apurbo Paul
                </h1>
                <h3 class="text-gray-600 font-lg text-semibold leading-6">
                  apurbopal248@gmail.com
                </h3>
                <h3 class="text-gray-600 font-lg text-semibold leading-6">
                  +8801907043479
                </h3>
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6 pt-2">
                  <span class="inline-flex">
                    <a
                      class="text-gray-600"
                      href="https://github.com/apurbo248"
                      target="_blank"
                    >
                      <svg
                        className="w-8 h-8 shadow"
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
                        className="w-8 h-8 shadow "
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
              </div>
            </div>
          </div>

          <div class="w-full md:w-9/12 mx-0 md:mx-2 md:mt-8  sm:mt-4 h-full">
            <div class="bg-white p-3 shadow rounded-lg ">
              <div class="flex items-center space-x-2 font-semibold text-mainBaseColor leading-8">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide ">About</span>
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-1 ">
                  <div class="grid grid-cols-1">
                    <div class="text-slate-100 text-md font- tracking-wide ">
                      {" "}
                      I’m a frontend and backend biased fresher web development
                      learner. I’ve completed some full-stack projects using
                      React.js, React Router, React Bootstrap,Tailwind CSS,
                      React hook form, NodeJs,Express.js, MongoDB, Firebase,
                      Heroku. I’ve implemented Admin panel, dashboard, CRUD
                      operation and so on on those projects. Eagerly, Want to
                      continue working hard to maintain this learning and
                      implementation cycle. I've good intention to contribute
                      some good projects and work with other developers.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-3 mb-3"></div>

            <div class="bg-white p-3 shadow rounded-lg">
              <div class="grid grid-cols-">
                <div>
                  <div class="flex items-center space-x-2 font-semibold text-mainBaseColor leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide">Education</span>
                  </div>
                  <ul class="list-inside space-y-2">
                    <li>
                      <div class="text-teal-600 text-gray-900 text-lg">
                        Bachelor of Computer Science (BCS)
                      </div>
                      <div class="text-gray-500 text-md">
                        2018 - 2022 January
                      </div>
                    </li>
                    <li>
                      <div class="text-teal-600 text-gray-900">
                        Higher Secondary School Certificate(HSC)
                      </div>
                      <div class="text-gray-500 text-md">2015 - 2017</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <section
    //   id="about"
    //   classNameName="pt-5 pb-5 container"
    //   style={{ background: "" }}
    // >
    //   <div style={{ marginTop: "40px" }}>
    //     <h2
    //       className="mb-2"
    //       style={{
    //         marginBottom: "20px",
    //         fontFamily: "Rubik, sans-serif",
    //         fontWeight: "600",
    //         fontSize: "40px",
    //         color: "#000",
    //         textTransform: "uppercase",
    //       }}
    //     >
    //       About <span style={{ color: "#7f00ff" }}>Me</span>
    //     </h2>
    //     <div classNameName="lines mb-5">
    //       <div classNameName="diamond"></div>
    //     </div>
    //     <div classNameName="container d-flex justify-content-center align-items-center ">
    //       <div classNameName="row w-100 ">
    //         <div className=" mb-3 m-auto " style={{}}>
    //           <div className="row g-0">
    //             <div className="col-sm-pt-5 col-md-8 ">
    //               <div
    //                 className="card-body "
    //                 style={{ fontFamily: "Rubik, sans-serif" }}
    //               >
    //                 <h5
    //                   className="text-start"
    //                   style={{
    //                     fontWeight: 800,
    //                     fontSize: "20px",
    //                     marginBottom: "1.2rem",
    //                   }}
    //                 >
    //                   {" "}
    //                   <span
    //                     style={{
    //                       borderLeft: "3px solid #7f00ff",
    //                       marginRight: "3px",
    //                     }}
    //                   ></span>{" "}
    //                   Hello, I'm Apurbo Paul, Based in Bangladesh
    //                 </h5>
    //                 <div
    //                   style={{
    //                     fontSize: "15px",
    //                     marginBottom: "15px",
    //                     textAlign: "justify",
    //                     fontWeight: "400",
    //                     letterSpacing: ".5px",
    //                   }}
    //                 >
    //                   <p className="card-text">
    //                     I'm a professional and passionate Full Stack Developer
    //                     focused on efficiency and constant learning. Courteous
    //                     and enthusiastic, I am interested in Web Applications
    //                     and everything in its orbit. I fascinated by web
    //                     programming and building websites. I am gaining
    //                     knowledge and ideas working in this area. I am keen to
    //                     gain more experience in the field. My goal is to build
    //                     applications that are scalable and efficient under the
    //                     hood while providing engaging, pixel-perfect user
    //                     experiences.
    //                   </p>
    //                   <p>
    //                     For this reason, I'm looking for a company willing to
    //                     offer me a placement among its developers. In return, I
    //                     would offer my full commitment, and be a pleasant and
    //                     friendly addition to a team.I always want to learn more,
    //                     do more, and be more. I’m also a firm believer that we
    //                     should never settle. I’m hard working, super curious,
    //                     passionate, committed, and also a fast learner!
    //                   </p>
    //                   <p>
    //                     Become a world's no 1 full-stack web developer. That's
    //                     why I am learning and mastering web development. I will
    //                     not stop until I become the Web Development Hero.
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div
    //               className="col-sm-pt-5 col-md-4 p-0 "
    //               style={{
    //                 border: "1px solid #7f00ff",
    //                 padding: "6px",
    //                 borderRadius: "5px",
    //               }}
    //             >
    //               <div classNameName="d-flex justify-content-center ">
    //                 <div
    //                   style={{
    //                     background: "#000",
    //                     width: "60%",
    //                     height: "40px",
    //                     borderRadius: "50px",
    //                     marginTop: "-20px",
    //                   }}
    //                 >
    //                   <div classNameName="d-flex justify-content-center align-items-center">
    //                     <div classNameName=" social-media d-flex justify-content-center align-items-center me-3  text-white">
    //                       <a
    //                         href="https://web.facebook.com/apurbo.pal.980/"
    //                         target="_blank"
    //                       >
    //                         <FontAwesomeIcon
    //                           icon={faFacebookF}
    //                           style={{ color: "#fff" }}
    //                         />{" "}
    //                       </a>
    //                     </div>
    //                     <div classNameName=" social-media d-flex justify-content-center align-items-center me-3  text-white">
    //                       <a
    //                         href="https://www.linkedin.com/in/apurbo-kumar-paul-2620b7211/"
    //                         target="_blank"
    //                       >
    //                         <FontAwesomeIcon
    //                           icon={faLinkedinIn}
    //                           style={{ color: "#fff" }}
    //                         />{" "}
    //                       </a>
    //                     </div>
    //                     <div classNameName=" social-media d-flex justify-content-center align-items-center me-3  text-white">
    //                       <a
    //                         href="https://web.facebook.com/apurbo.pal.980/"
    //                         target="_blank"
    //                       >
    //                         <FontAwesomeIcon
    //                           icon={faTwitter}
    //                           style={{ color: "#fff" }}
    //                         />{" "}
    //                       </a>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <img
    //                 className=""
    //                 src={img}
    //                 alt="..."
    //                 style={{
    //                   height: "400px",
    //                   maxWidth: "100%",
    //                   padding: "10px",
    //                 }}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default About;
