import React, { useEffect, useRef } from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import DevOps from "./DevOps";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

      // Skill cards animation - stagger from bottom with rotation
      gsap.fromTo(
        ".skills__content",
        { 
          opacity: 0, 
          y: 80, 
          scale: 0.9,
          rotateX: -15 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Individual skill items animation - stagger from left
      gsap.fromTo(
        ".skills__data",
        { 
          opacity: 0, 
          x: -40,
          scale: 0.95 
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Skill titles animation - fade in with slight delay
      gsap.fromTo(
        ".skills__title",
        { 
          opacity: 0, 
          y: -20 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title" ref={titleRef}>Tech Stack</h2>
      <span className="section__subtitle" ref={subtitleRef}>My Technical Toolkit</span>
      <div className="skills_container container grid" ref={containerRef}>
        <Frontend />
        <Backend />
        <Tools />
        <DevOps />
      </div>
    </section>
  );
};

export default Skills;