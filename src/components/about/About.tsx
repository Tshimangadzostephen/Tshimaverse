import React, { useEffect, useRef } from "react";
import "./About.css";
import AboutImg from "../../assets/orange_prof1.jpg";
import Info from "./Info";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - fade and slide down
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Subtitle animation - fade and slide down
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Image animation - scale and fade from left
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.7, x: -80 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Info boxes animation - stagger from bottom
      gsap.fromTo(
        ".about__box",
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Description animation - fade and slide from right
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Button animation - pop in with bounce
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.5, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="about section" id="about">
      <h2 className="section__title" ref={titleRef}>About</h2>
      <span className="section__subtitle" ref={subtitleRef}>Introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="image" className="about__img" ref={imgRef} />
        <div className="about__data">
          <div ref={infoRef}>
            <Info />
          </div>
          <p className="about__description" ref={descriptionRef}>
            I'm a passionate full-stack developer who thrives on building scalable and efficient solutions. 
            From crafting intuitive user interfaces to architecting robust backend systems, I work across 
            the entire tech stack including front-end frameworks, backend APIs, databases, and cloud infrastructure. 
            I'm always eager to learn new technologies and take on challenging projects.
            <br />
            <br />
            Open to collaborations, Feel free to connect!
          </p>

          <a href="#projects" className="button button--flex" ref={buttonRef}>
            Projects
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