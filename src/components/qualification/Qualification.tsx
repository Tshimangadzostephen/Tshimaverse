import React, { useState, useEffect, useRef } from "react";
import "./Quaification.css";
import Up_Img from "../../assets/University_of_Pretoria_Coat_of_Arms.png";
import moyo_img from "../../assets/moyo-logo.png";
import rev_img from "../../assets/rev logo.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Qualification = () => {
  const [toggleState, setToggleState] = useState<number>(1);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

      // Tabs animation - slide in from sides
      gsap.fromTo(
        ".qualification__button",
        {
          opacity: 0,
          x: (index) => (index === 0 ? -60 : 60),
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Timeline animation - draw the line from top to bottom
      gsap.fromTo(
        ".qualification__line",
        {
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Timeline dots animation - pop in sequentially
      gsap.fromTo(
        ".qualification__rounder",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.3,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Qualification items animation - alternate sides
      gsap.fromTo(
        ".qualification__data",
        {
          opacity: 0,
          x: (index) => (index % 2 === 0 ? -80 : 80),
          y: 30,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Company/University images animation - rotate and scale
      gsap.fromTo(
        ".up__img, .moyo__img, .rev_img",
        {
          opacity: 0,
          rotation: -90,
          scale: 0,
        },
        {
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Titles animation - fade and slide up
      gsap.fromTo(
        ".qualification__title",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Calendar icons animation - bounce in
      gsap.fromTo(
        ".qualification__calendar",
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.3,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="qualification section">
      <h2 className="section__title" ref={titleRef}>Work Experience</h2>
      <span className="section__subtitle" ref={subtitleRef}>
        Academic & Professional Journey
      </span>

      <div className="qualification__container container">
        {/* Tabs */}
        <div className="qualification__tabs" ref={tabsRef}>
          <div
            className={`qualification__button button--flex ${
              toggleState === 1 ? "qualification__active" : ""
            }`}
            onClick={() => setToggleState(1)}
          >
            Education
          </div>
          <div
            className={`qualification__button button--flex ${
              toggleState === 2 ? "qualification__active" : ""
            }`}
            onClick={() => setToggleState(2)}
          >
            Work History
          </div>
        </div>

        {/* Sections */}
        <div className="qualification__sections" ref={contentRef}>
          {/* Education */}
          <div
            className={`qualification__content ${
              toggleState === 1 ? "qualification__content-active" : ""
            }`}
          >
            {/* First education item */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Informatics - Information Systems
                </h3>
                <span className="qualification__subtitle">
                  <img src={Up_Img} alt="University" className="up__img" />
                  University of Pretoria
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Second education item */}
            <div className="qualification__data">
              <div></div> {/* Empty left side */}
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Information and Knowledge Systems - Genetics
                </h3>
                <span className="qualification__subtitle">
                  <img src={Up_Img} alt="University" className="up__img" />
                  University of Pretoria
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2019
                </div>
              </div>
            </div>
          </div>

          {/* Work */}
          <div
            className={`qualification__content ${
              toggleState === 2 ? "qualification__content-active" : ""
            }`}
          >
            {/* First work item */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">
                  <img src={moyo_img} alt="Moyo" className="moyo__img" />
                  Moyo Business Advisory
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2023 - 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Second work item */}
            <div className="qualification__data">
              <div></div> {/* Empty left side */}
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">Transcriptionist</h3>
                <span className="qualification__subtitle">
                  <img src={rev_img} alt="Rev" className="rev_img" />
                  Rev
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;