import React, { useState, useEffect, useRef } from "react";
import "./Services.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  icon: string;
  title: string[];
  description: string;
  colorClass: string;
  buttonClass: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    icon: "uil-web-grid",
    title: ["Web", "Design"],
    description:
      "Designing intuitive, user-friendly, and visually appealing websites with a focus on user experience (UX).",
    colorClass: "web_design_content",
    buttonClass: "",
  },
  {
    id: 2,
    icon: "uil-arrow",
    title: ["Web", "Development"],
    description:
      "Building responsive and user-friendly web applications using modern frameworks like Angular and .NET.",
    colorClass: "web_dev_blue_content",
    buttonClass: "web_dev_button",
  },
  {
    id: 3,
    icon: "uil-mobile-android",
    title: ["Mobile", "Development"],
    description:
      "Creating intuitive and responsive mobile applications that focus on real user needs, performance, and clean, maintainable code.",
    colorClass: "mobile_dev_content",
    buttonClass: "",
  },
  {
    id: 4,
    icon: "uil-server",
    title: ["API &", "Backend"],
    description:
      "Developing robust APIs and backend systems, ensuring secure, scalable, and maintainable architecture for applications.",
    colorClass: "api_backend_green_content",
    buttonClass: "api_backend_button",
  },
];

const Services = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleCard = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  useEffect(() => {
    // Only run animations on desktop
    if (window.innerWidth >= 1024) {
      const ctx = gsap.context(() => {
        // Title animation
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

        // Subtitle animation
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

        // Service cards animation
        gsap.fromTo(
          ".services__content",
          { opacity: 0, y: 100, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "top 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // Service icons animation
        gsap.fromTo(
          ".services__icon",
          { opacity: 0, scale: 0, rotation: -180 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(2)",
            clearProps: "transform",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "top 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // Service titles animation
        gsap.fromTo(
          ".services__title",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "top 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // Service buttons animation
        gsap.fromTo(
          ".services__button",
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)",
            clearProps: "transform",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "top 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="services section" id="services">
      <h2 className="section__title" ref={titleRef}>
        What I Offer
      </h2>
      <span className="section__subtitle" ref={subtitleRef}>
        Highlights
      </span>

      <div className="services__container container" ref={containerRef}>
        {servicesData.map(
          ({ id, icon, title, description, colorClass, buttonClass }) => (
            <div
              key={id}
              className={`services__content ${colorClass} ${
                flippedCard === id ? "flipped" : ""
              }`}
              onClick={() => toggleCard(id)}
            >
              {/* Front */}
              <div className="services__front">
                <i className={`uil ${icon} services__icon`}></i>
                <h3 className="services__title">
                  {title.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < title.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <span className={`services__button ${buttonClass}`}>
                  More <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
              </div>

              {/* Back */}
              <div className="services__back">
                <h3 className="services__modal-title">{title.join(" ")}</h3>
                <p className="services__modal-description">{description}</p>
                <span
                  className={`services__button ${buttonClass}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlippedCard(null);
                  }}
                >
                  Close
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
