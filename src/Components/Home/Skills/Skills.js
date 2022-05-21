import React from "react";
import "./Skills.css";

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

const allSkills = [
  { name: "HTMl", img: html },
  { name: "CSS", img: css },
  { name: "JAVASCRIPT", img: js },
  { name: "BOOTSTRAP", img: bootstrap },
  { name: "SASS", img: sass },
  { name: "REACT", img: react },
  { name: "FIREBASE", img: firebase },
  { name: "GIT", img: git },
  { name: "GITHUB", img: github },
  { name: "HEROKU", img: heroku },
  { name: "MONGODB", img: mongodb },
  { name: "MATERIAL UI", img: materialui },
  { name: "NODE JS", img: nodejs },
  { name: "VS CODE", img: vs },
  { name: "EXPRESS JS", img: express },
];

const Skills = () => {
  return (
    <section
      id="Skill"
      className=" pt-5 pb-5 "
      style={{ background: "#f6f6f6" }}
    >
      <div style={{}}>
        <h2
          className="mb-2 mt-5"
          style={{
            marginBottom: "20px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: "600",
            fontSize: "40px",
            color: "#000",
            textTransform: "uppercase",
          }}
        >
          My <span style={{ color: "#7f00ff" }}>skills</span>
        </h2>
        <div classNameName="lines mb-5">
          <div classNameName="diamond"></div>
        </div>

        <div className="container p-4">
          <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-3 ">
            {allSkills.map((skills) => (
              <div classNameName="col-md-2 p-2">
                <div classNameName="ring">
                  <div
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      background: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow:
                        "0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <img
                      style={{
                        height: "50px",
                        width: "52px",
                        borderRadius: "5%",
                        alignItems: "center",
                        position: "static",
                      }}
                      src={skills.img}
                      alt=""
                    />
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
