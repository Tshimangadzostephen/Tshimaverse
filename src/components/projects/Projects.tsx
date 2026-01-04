import React, { useEffect, useRef } from "react";
import "./Projects.css";
import portfolioImage from "../../assets/portfolio_design.png";
import kryptoImage from "../../assets/kryto.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demo?: string;
  link: string;
  tags: string[];
}

function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  demo,
}: ProjectCardProps) {
  return (
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

      <div className="card-footer">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button"
          >
            <i className="uil uil-github-alt"></i>
            Source
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button"
          >
            <i className="uil uil-link-alt"></i>
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const projectData: ProjectCardProps[] = [
    {
      title: "Personal Portfolio",
      description: "A personal portfolio website built with React, CSS and Vite.",
      image: portfolioImage,
      link: "https://github.com/Tshimangadzostephen/Tshimaverse",
      demo: "https://tshimaverse.vercel.app",
      tags: ["React", "CSS", "Vite"],
    },
    {
      title: "Partial Stack Overflow Clone",
      description:
        "A basic Stack Overflow clone built with ASP.NET MVC 5 and SQL Server.",
      image:
        "https://datascientest.com/en/files/2024/03/Stackoverflow-768x422-1.jpg",
      link: "https://github.com/Tshimangadzostephen/StackOverflowProject",
      tags: ["C#", "MVC", "SQL Server"],
    },
    {
      title: "Krypto",
      description:
        "A conceptual Figma project exploring layout grids and gradients.",
      image: kryptoImage,
      demo:
        "https://www.figma.com/design/69BjYFdhr6alX1T5h2i7Be/KRYPTO-PROJECT",
      link: "",
      tags: ["Figma", "Grid", "Gradients"],
    },
    {
      title: "Inventory Management System",
      description:
        "RESTful API built with .NET Core, SQL Server and JWT authentication.",
      image:
        "https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/t-com_netcore_770px.png",
      link: "",
      tags: ["C#", "Swagger", "SQL Server", "EF"],
    },
  ];

  useEffect(() => {
    // Only run animations on desktop
    const isDesktop = window.innerWidth > 1024;

    if (!isDesktop) return; // Skip animations on mobile/tablet

    const ctx = gsap.context(() => {
      // Heading animation - fade and slide down
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

      // Swiper wrapper animation - fade and scale
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

      // Project cards animation - stagger slide up
      gsap.fromTo(
        ".card",
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Card images animation - zoom in
      gsap.fromTo(
        ".card-image",
        {
          scale: 1.3,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Card titles animation - slide from left
      gsap.fromTo(
        ".card-title",
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 75%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Tags animation - pop in
      gsap.fromTo(
        ".card-tag",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 70%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Buttons animation - slide up
      gsap.fromTo(
        ".card-button",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
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
    <section className="projects-section section">
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
          {projectData.map(project => (
            <SwiperSlide key={project.title}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}