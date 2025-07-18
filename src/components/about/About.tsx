import React from "react";
import "./About.css";
import AboutImg from "../../assets/orange_prof1.jpg";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">Introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="image" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            I work across front-end, back-end, databases, and cloud, always
            eager to learn and take on new challenges. Open to collaborations —
            Feel free to connect!
          </p>

          <a href="#projects" className="button button--flex">
            View My Work
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.5,6C2.6715698,6,2,6.6715698,2,7.5S2.6715698,9,3.5,9C4.328064,8.9990845,4.9990845,8.328064,5,7.5C5,6.6715698,4.3284302,6,3.5,6z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M3.5,8C3.223877,8,3,7.776123,3,7.5S3.223877,7,3.5,7C3.7759399,7.0005493,3.9994507,7.2240601,4,7.5C4,7.776123,3.776123,8,3.5,8z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M7.5,8h14C21.776123,8,22,7.776123,22,7.5S21.776123,7,21.5,7h-14C7.223877,7,7,7.223877,7,7.5S7.223877,8,7.5,8z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M21.5,12h-10c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h10c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,12,21.5,12z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M21.5,17h-6c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h6c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,17,21.5,17z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M7.5,11C6.6715698,11,6,11.6715698,6,12.5S6.6715698,14,7.5,14c0.828064-0.0009155,1.4990845-0.671936,1.5-1.5C9,11.6715698,8.3284302,11,7.5,11z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M7.5,13C7.223877,13,7,12.776123,7,12.5S7.223877,12,7.5,12c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C8,12.776123,7.776123,13,7.5,13z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M11.5,16c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4990845-0.671936,1.5-1.5C13,16.6715698,12.3284302,16,11.5,16z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M11.5,18c-0.276123,0-0.5-0.223877-0.5-0.5s0.223877-0.5,0.5-0.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C12,17.776123,11.776123,18,11.5,18z"
                fill="var(--container-color)"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
