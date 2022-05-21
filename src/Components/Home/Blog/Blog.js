import React from "react";
import "./Blog.css";

import js from "../../images/js-story.jpeg";
import block from "../../images/block.png";
import react from "../../images/r.png";

const Blogs = [
  {
    image: js,
    name: "Magic of Array — Javascript.",
date:"May 5, 2021",
    description:
      "  Javascript is lightweigh and the most powerful and flexible programming languages of the web...",
    Link: "https://apurbopal248.medium.com/magic-of-array-javascript-1e574859f771",
  },
  {
    image: block,
    name: "Take a glance of ES6 Block Bindings",
date:"May 6, 2021",
    description:
      "  ES6 stands for ECMAScript 6.ES6 is a significant update to JavaScript programming language...",
    Link: "https://apurbopal248.medium.com/take-a-glance-of-es6-block-bindings-df4613503db7",
  },
  {
    image: react,
    name: "All about Reacr",
date:"May 7, 2021",
    description: " React is a JavaScript “library”.Example of react...",
    Link: "https://apurbopal248.medium.com/all-about-react-80ee93426466",
  },
];
const Blog = () => {
  return (
    <div class="mx-auto  px-6 xl:px-0 py-4 mt-24 ">
      <div class="flex flex-col ">
        <div class="flex flex-col justify-center    rounded">
          <div class="">
            <div class="relative">
              <div class="  sm:bottom-8 bottom-  pr-10 sm:pr-0 left-4 sm:left-8 flex justify-center items-start">
                <p class="font-mono text-3xl sm:text-3xl  leading-9 text-mainBaseColor">
                  Blogs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container bg-  grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2  items-center pt-8 rounded">
          {Blogs.map((blog) => (
            <div class="  flex justify-center items-center ">
              <div class="container flex justify-center">
                <div class="max-w-sm ">
                  <div class="bg-white border relative hover:shadow-lg  transition duration-500 rounded-lg">
                    <img
                      class="rounded-t-lg w-full h-56 "
                      src={blog.image}
                      alt=""
                    />
                    <div class="py-6 px-8 rounded-lg bg-white">
                      <h1 class="text-gray-700 font-bold text-lg mb-3 hover:text-gray-900 hover:cursor-pointer">
                        {blog.name}
                      </h1>

                      <a
                        href={blog.Link}
                        target="_blank"
                        class="mt-6 py-2 underline   text-mainBaseColor font-bold rounded-lg   transition duration-300 "
                      >
                        Read More...
                      </a>
                    </div>
                    <div class="absolute top-2 bg-mainBaseColor right-2 py-2 px-4  rounded-lg md:top-48 border-1 border-mainBaseColor md:-right-0 ">
                      <span class="text-md text-white">{blog.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    //    // <div
    //   //   id="blog"
    //   //   classNameName=" pt-5 pb-5"
    //   //   style={{ background: "#f6f6f6", fontFamily: "Rubik, sans-serif" }}
    //   // >
    //     <h2
    //       className="mb-2"
    //       style={{
    //         marginBottom: "20px",
    //         fontFamily: "Rubik, sans-serif",
    //         fontWeight: "600",
    //         fontSize: "40px",
    //         color: "#000",
    //         textTransform: "uppercase",
    //         marginTop: "50px",
    //       }}
    //     >
    //       my <span style={{ color: "#7f00ff" }}>blog</span>
    //     </h2>
    //     <div classNameName="lines mb-5">
    //       <div classNameName="diamond"></div>
    //     </div>

    //     <div classNameName="container pt-2 mb-5">
    //       <div classNameName="row">
    //         <div classNameName="col-md-4 mt-2">
    //           <div
    //             classNameName="card"
    //             style={{ width: "350px", height: "350px", borderRadius: "5px" }}
    //           >
    //             <Reveal animated="move">
    //               <Reveal.Content visible>
    //                 <Image
    //                   style={{
    //                     height: "56vh",
    //                     maxWidth: "100%",
    //                     borderRadius: "5px",
    //                   }}
    //                   src={js}
    //                   size="large"
    //                 />
    //               </Reveal.Content>
    //               <Reveal.Content hidden style={{ paddingTop: "20%" }}>
    //                 <Card.Content classNameName="text-start p-2">
    //                   <h2 style={{ fontSize: "26px", color: "#7f00ff" }}>
    //                     <Card.Header>Magic of Array — Javascript.</Card.Header>
    //                   </h2>

    //                   <Card.Description
    //                     classNameName="pt-2 mb-4"
    //                     style={{ fontSize: "18px", lineHeight: "1.2" }}
    //                   >
    //                     Javascript is lightweigh and the most powerful and
    //                     flexible programming languages of the web...
    //                   </Card.Description>
    //                 </Card.Content>
    //                 <Card.Content extra>
    //                   <Card.Meta classNameName="p-4 d-flex">
    //                     <div classNameName="text-start">by APURBO</div>

    //                     <div classNameName="ms-auto">
    //                       <a
    //                         href="https://apurbopal248.medium.com/magic-of-array-javascript-1e574859f771"
    //                         target="_blank"
    //                       >
    //                         {" "}
    //                         Read More...{" "}
    //                       </a>
    //                     </div>
    //                   </Card.Meta>
    //                 </Card.Content>
    //               </Reveal.Content>
    //             </Reveal>
    //           </div>
    //         </div>
    //         <div classNameName="col-md-4 mt-2">
    //           <div
    //             classNameName="card"
    //             style={{ width: "350px", height: "350px", borderRadius: "5px" }}
    //           >
    //             <Reveal animated="move up">
    //               <Reveal.Content visible>
    //                 <Image
    //                   style={{
    //                     height: "56vh",
    //                     maxWidth: "100%",
    //                     borderRadius: "5px",
    //                   }}
    //                   src={block}
    //                   size="large"
    //                 />
    //               </Reveal.Content>
    //               <Reveal.Content hidden style={{ paddingTop: "20%" }}>
    //                 <Card.Content classNameName="text-start p-2">
    //                   <h2 style={{ fontSize: "26px", color: "#7f00ff" }}>
    //                     <Card.Header>
    //                       Take a glance of ES6 Block Bindings
    //                     </Card.Header>
    //                   </h2>

    //                   <Card.Description
    //                     classNameName="pt-2 mb-4"
    //                     style={{ fontSize: "18px", lineHeight: "1.2" }}
    //                   >
    //                     ES6 stands for ECMAScript 6.ES6 is a significant update to
    //                     the JavaScript programming language...
    //                   </Card.Description>
    //                 </Card.Content>
    //                 <Card.Content extra>
    //                   <Card.Meta classNameName="p-4 d-flex">
    //                     <div classNameName="text-start">by APURBO</div>

    //                     <div classNameName="ms-auto">
    //                       <a
    //                         href="https://apurbopal248.medium.com/take-a-glance-of-es6-block-bindings-df4613503db7"
    //                         target="_blank"
    //                       >
    //                         {" "}
    //                         Read More...{" "}
    //                       </a>
    //                     </div>
    //                   </Card.Meta>
    //                 </Card.Content>
    //               </Reveal.Content>
    //             </Reveal>
    //           </div>
    //         </div>
    //         <div classNameName="col-md-4 mt-2">
    //           <div
    //             classNameName="card"
    //             style={{ width: "350px", height: "350px", borderRadius: "5px" }}
    //           >
    //             <Reveal animated="move right">
    //               <Reveal.Content visible>
    //                 <Image
    //                   style={{
    //                     height: "56vh",
    //                     maxWidth: "100%",
    //                     borderRadius: "5px",
    //                   }}
    //                   src={r}
    //                   size="large"
    //                 />
    //               </Reveal.Content>
    //               <Reveal.Content hidden style={{ paddingTop: "20%" }}>
    //                 <Card.Content classNameName="text-start p-2">
    //                   <h2 style={{ fontSize: "26px", color: "#7f00ff" }}>
    //                     <Card.Header>All about React</Card.Header>
    //                   </h2>

    //                   <Card.Description
    //                     classNameName="pt-2 mb-4"
    //                     style={{ fontSize: "18px", lineHeight: "1.2" }}
    //                   >
    //                     React is a JavaScript “library”.Example of react...
    //                   </Card.Description>
    //                 </Card.Content>
    //                 <Card.Content extra>
    //                   <Card.Meta classNameName="p-4 d-flex">
    //                     <div classNameName="text-start">by APURBO</div>

    //                     <div classNameName="ms-auto">
    //                       <a
    //                         href="https://apurbopal248.medium.com/all-about-react-80ee93426466"
    //                         target="_blank"
    //                       >
    //                         {" "}
    //                         Read More...{" "}
    //                       </a>
    //                     </div>
    //                   </Card.Meta>
    //                 </Card.Content>
    //               </Reveal.Content>
    //             </Reveal>
    //           </div>
    //         </div>
    //       </div>
    //     </div> */}
    //   // </div>
  );
};

export default Blog;
