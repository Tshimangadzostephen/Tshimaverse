// Projects.tsx
import React, { useEffect, useRef } from "react";
import "./Projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects, ProjectItem } from "./Data";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ title, description, image, link, tags, demo, slug }: ProjectItem) {
  return (
    <Link to={`/projects/${slug}`} className="card-link">
      <div className="card">
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image" />
        </div>

        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>

          <div className="card-tags">
            {tags.map(tag => (
              <span key={tag} className="card-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="card-footer" onClick={(e) => e.preventDefault()}>
          {/* prevent footer buttons click from navigating the card */}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="card-button">
              <i className="uil uil-github-alt"></i>
              Source
            </a>
          )}

          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="card-button">
              <i className="uil uil-link-alt"></i>
              Demo
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.innerWidth > 1024;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-section section" id="projects">
      <h2 className="projects-heading" ref={headingRef}>Featured Projects</h2>

      <div className="projects-wrapper" ref={wrapperRef}>
        <Swiper
          modules={[Pagination]}
          loop
          grabCursor
          spaceBetween={16}
          slidesPerView={2}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {projects.map(project => (
            <SwiperSlide key={project.slug}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
